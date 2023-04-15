import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleListModule } from './pages/article-list/article-list.module';

import { MyUiModule } from './lib/MyUiModule';
import { UserPaymentsModule } from './pages/user-payments/user-payments.module';

import {SignupModule} from "./pages/signup/signup.module"
import { SigninModule } from './pages/signin/signin.module';
import {AddProductModule} from "./pages/add-product/add-product.module"
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/shared/header/header.component';

import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ], 
  imports:  [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ArticleListModule,
    UserPaymentsModule,
    SignupModule,
    SigninModule,
    AddProductModule,
    MyUiModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}
