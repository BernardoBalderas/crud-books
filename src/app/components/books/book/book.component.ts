import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ApiService } from 'src/app/services/api.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;
  displayedColumns = ['isbn', 'title', 'author'];
  dataSource = new BookDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getBooks()
      .subscribe(res => {
        console.log(res);
        this.books = res;
      }, err => {
        console.log(err);
      });
  }

  onGeneratePDF() {
    var id = document.getElementById('table-books');
    var pdf = new jsPDF({
      orientation: '1',
      unit: 'pt',
      format: 'carta'
    });
    pdf.text('Books List', 180, 10);
    pdf.fromHTML(id, 100, 15);
    pdf.save('Books-' + new Date().getTime() + '.pdf');
  }

  exportAsXLSX(): void {
    this.api.exportAsExcelFile(this.books, 'Books');
  }
}

export class BookDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() { return this.api.getBooks(); }

  disconnect() { }
}

