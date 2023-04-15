// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
  
// }

import { Injectable, createNgModule } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log("auth", this.authService.isLoggedIn);
    if (this.authService.isLoggedIn) {
       return true;
    } else {
       this.router.navigate(['/signin']);
      return false;
    }
  }
}
