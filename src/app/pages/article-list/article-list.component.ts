// import { Component, OnInit } from '@angular/core';
// import { Product } from '../../interfaces/product';
// import { ProductService } from '../../services/product.service';
// import { SearchService } from '../../services/search-service.service';

// @Component({
//   selector: 'app-article-list',
//   templateUrl: './article-list.component.html',
//   styleUrls: ['./article-list.component.scss'],
// })
// export class ArticleListComponent implements OnInit {
//   products: Product[] = [];
//   searchTerm: string = '';

//   displayedColumns: string[] = ['name', 'description', 'price', 'actions'];

//   cart: { product: Product; quantity: number }[] = [];

//   open: boolean = false;

//   constructor(
//     private productService: ProductService,
//     private searchService: SearchService
//   ) {}

//   ngOnInit(): void {
//     this.loadProducts();

//     this.searchService.getSearchTerm().subscribe((term) => {
//       this.searchTerm = term;
//       console.log(this.searchTerm);
//       // Mettre à jour la liste des produits selon la recherche
//     });

//   }

//   loadProducts() {
//     this.productService.getProducts().subscribe((products) => {
//       this.products = products.filter(product =>
//         product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
//       );
//     });
//   }

//   addToCart(product: Product) {
//     const cartItemIndex = this.cart.findIndex(
//       (item) => item.product === product
//     );
//     if (cartItemIndex >= 0) {
//       this.cart[cartItemIndex].quantity++;
//     } else {
//       this.cart.push({ product, quantity: 1 });
//     }
//   }

//   removeCartItem(index: number) {
//     this.cart.splice(index, 1);
//   }

//   getCartTotal(): number {
//     return this.cart.reduce(
//       (total, item) => total + item.product.price * item.quantity,
//       0
//     );
//   }

//   toggleCart() {
//     this.open = !this.open;
//   }

//   validateBuy() {
//     console.log('Achat validé !');
//     console.log("Détails de l'achat :");
//     console.log(this.cart);
//     this.cart = []; // vider le panier
//     this.open = false; // fermer le panier
//     // alert("Merci pour votre achat !"); // afficher un message de remerciement
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Product } from '../../interfaces/product';
// import { ProductService } from '../../services/product.service';
// import { SearchService } from '../../services/search-service.service';

// @Component({
//   selector: 'app-article-list',
//   templateUrl: './article-list.component.html',
//   styleUrls: ['./article-list.component.scss'],
// })
// export class ArticleListComponent implements OnInit {
//   products: Product[] = [];
//   filteredProducts: Product[] = []; // Ajouter un tableau filtré
//   searchTerm: string = '';
//   pageIndex = 0;
//   pageSize = 5;
//   pageSizeOptions: number[] = [5, 10, 25, 100];

//   displayedColumns: string[] = ['name', 'description', 'price', 'actions'];

//   cart: { product: Product; quantity: number }[] = [];

//   open: boolean = false;

//   constructor(
//     private productService: ProductService,
//     private searchService: SearchService
//   ) {}

//   ngOnInit(): void {
//     this.loadProducts();

//     this.searchService.getSearchTerm().subscribe((term) => {
//       this.searchTerm = term.toLowerCase(); // Convertir en minuscules pour une recherche insensible à la casse
//       console.log(this.searchTerm);
//       // Mettre à jour le tableau filtré selon la recherche
//       this.filteredProducts = this.products.filter((product) =>
//         product.name.toLowerCase().includes(this.searchTerm)
//       );
//     });
//   }

//   loadProducts() {
//     this.productService.getProducts().subscribe((products) => {
//       this.products = products;
//       // Mettre à jour le tableau filtré avec tous les produits lorsqu'ils sont chargés
//       this.filteredProducts = products;
//     });
//   }

//   updatePaginator() {
//     this.paginator.pageIndex = this.pageIndex;
//     this.paginator.pageSize = this.pageSize;
//     this.paginator.pageSizeOptions = this.pageSizeOptions;
//   }

//   addToCart(product: Product) {
//     const cartItemIndex = this.cart.findIndex(
//       (item) => item.product === product
//     );
//     if (cartItemIndex >= 0) {
//       this.cart[cartItemIndex].quantity++;
//     } else {
//       this.cart.push({ product, quantity: 1 });
//     }
//   }

//   removeCartItem(index: number) {
//     this.cart.splice(index, 1);
//   }

//   getCartTotal(): number {
//     return this.cart.reduce(
//       (total, item) => total + item.product.price * item.quantity,
//       0
//     );
//   }

//   toggleCart() {
//     this.open = !this.open;
//   }

//   validateBuy() {
//     this.cart = []; // vider le panier
//     this.open = false; // fermer le panier
//     // alert("Merci pour votre achat !"); // afficher un message de remerciement
//   }
// }

// --- ------ - - -

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { SearchService } from '../../services/search-service.service';
import { UserService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];

  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  cart: { product: Product; quantity: number }[] = [];
  open: boolean = false;

  constructor(
    private productService: ProductService,
    private searchService: SearchService,
    private userService: UserService, 
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadProducts();

    this.searchService.getSearchTerm().subscribe((term) => {
      this.searchTerm = term.toLowerCase();
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm)
      );

      this.dataSource = new MatTableDataSource<Product>(this.filteredProducts);
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm)
      );
      this.dataSource.data = this.filteredProducts;
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
      this.dataSource = new MatTableDataSource(this.filteredProducts);
      this.dataSource.paginator = this.paginator;
    });
  }

  addToCart(product: Product) {
    const cartItemIndex = this.cart.findIndex(
      (item) => item.product === product
    );
    if (cartItemIndex >= 0) {
      this.cart[cartItemIndex].quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeCartItem(index: number) {
    this.cart.splice(index, 1);
  }

  getCartTotal(): number {
    return this.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  toggleCart() {
    this.open = !this.open;
  }

  validateBuy() {
    const productsIds = this.cart.map((item: any) => item.product._id);
  
     this.addPurchaseToUser(`${this.authService.userId}`, productsIds)
    // this.cart = [];
    // this.open = false;
    
  }

  addPurchaseToUser(userId: string, products: string[]) {
    this.userService.addPurchases(userId, products).subscribe(
      (response: any) => {
        console.log(response);
        // Mettre à jour l'affichage de l'historique d'achats de l'utilisateur
      },
      (error: any) => {
        console.log('Error while adding purchase');
        console.log(error);
      }
    );
  }
  

  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
}
