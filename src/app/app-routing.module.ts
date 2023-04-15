import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { UserPaymentsComponent } from './pages/user-payments/user-payments.component';
import { SingupComponent } from './pages/signup/singup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full',
  },
  {
    path: 'articles',
    component: ArticleListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'hystory',
    component: UserPaymentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: SingupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
