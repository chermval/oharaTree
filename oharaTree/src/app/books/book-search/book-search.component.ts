import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../Book';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  public searchBookTitle: string;
  public isSubmmit:boolean;
  public bookDataToForm: Book;
  public booksResponse: any;

  constructor(public bookService:BookService) {
    this.isSubmmit=false;
    this.booksResponse = "";
    this.bookDataToForm = new Book();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isSubmmit=true;
    this.getRestBookItems(this.searchBookTitle);
  }

  // Get book items from Google Book REST API
  getRestBookItems( searchBookTitle ) {

    this.bookService.getBook(searchBookTitle).subscribe((data: {}) => {
      this.booksResponse = data;
    });
  }

  // Get data from book selected
  onSelectBook(book: any) {

    var volumeInfo =  Object.values(book)[4];
    var title="";
    var autor="";
    var isbn="";

    Object.keys(volumeInfo).forEach(function (key) {
      //
      if ( key == "title" ){
        title = volumeInfo[key]
      }

      if ( key == "authors" && volumeInfo[key][0] != undefined){
        autor =  volumeInfo[key][0];

      }

      if ( key == "industryIdentifiers" ){

        volumeInfo[key].forEach(function(codeBook) {

          if ( codeBook.type == "ISBN_13" ){
            isbn = codeBook.identifier;
          }

        });

      }

    });

    this.bookService.setBookInfo( new Book({title:title, autor:autor, isbn:isbn}) );
  }


}
