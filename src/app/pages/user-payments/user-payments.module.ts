import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { UserPaymentsComponent } from './user-payments.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    UserPaymentsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  providers: [DatePipe]

})
export class UserPaymentsModule { }
