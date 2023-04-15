import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SingupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SignupModule { }
