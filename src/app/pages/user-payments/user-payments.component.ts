import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';
import { Purchase } from '../../interfaces/Purchase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-payments',
  templateUrl: './user-payments.component.html',
  styleUrls: ['./user-payments.component.scss'],
})
export class UserPaymentsComponent {
  purchases: Purchase[] = [];

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit() {
    this.getAllPurchases();
  }

  getAllPurchases() {
    this.userService
      .getPurchaseHistory(`${this.authService.userId}`)
      .subscribe((purchases: Purchase[]) => {
        console.log();
        this.purchases = purchases;
      });
  }
}
