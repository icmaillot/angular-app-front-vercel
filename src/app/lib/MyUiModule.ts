import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTableModule
  ]
})
export class MyUiModule {}
