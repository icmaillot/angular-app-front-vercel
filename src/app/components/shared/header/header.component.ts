import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../services/search-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('searchInput', { static: true }) searchInput: any;

  constructor(private searchService: SearchService, 
    public authService: AuthService,
    private router: Router) {}

  searchProducts() {
    this.searchService.setSearchTerm(this.searchInput.nativeElement.value);
  }
  
  logout(){
    this.authService.setIsLoggedIn(false);
    this.router.navigateByUrl('/signin');
  }
}
