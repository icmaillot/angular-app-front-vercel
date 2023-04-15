import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
})
export class SigninModule {}
