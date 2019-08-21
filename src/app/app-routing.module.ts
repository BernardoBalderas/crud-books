import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { BookComponent } from './components/books/book/book.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { BookCreateComponent } from './components/books/book-create/book-create.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
import { LinesComponent } from './components/lines/lines.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'lines',
    component: LinesComponent
  },
  {
    path: 'bar',
    component: BarChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
