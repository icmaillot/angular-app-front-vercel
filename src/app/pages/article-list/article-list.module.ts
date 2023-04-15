import { NgModule } from '@angular/core';
import { ArticleListComponent } from './article-list.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'; // <--- Importer le module MatButtonModule
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ArticleListComponent],
  imports: [
    CommonModule, MatTableModule, MatButtonModule, MatIconModule,MatPaginatorModule, MatDialogModule
  ]
})

export class ArticleListModule {}
