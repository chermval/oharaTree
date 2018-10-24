import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../Book';
import { KeyRegistry } from '@angular/core/src/di/reflective_key';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  public searchBookTitle: string;
  public isSubmmit:boolean;
  public selectedHero: string;
  public booksResponse: any;

  constructor(public bookRest:BookService) {
    this.isSubmmit=false;
    this.booksResponse = "";
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isSubmmit=true;
    this.getRestBookItems(this.searchBookTitle);
  }

  // Get book items from Google Book REST API
  getRestBookItems( searchBookTitle ) {

    this.bookRest.getBook(searchBookTitle).subscribe((data: {}) => {
      console.log(data);

      this.booksResponse = data;
    });
  }

  // Get data from book selected
  onSelectBook(book: any): Book {
    this.selectedHero = book;
    console.log(book);

    var bookData: Book ;

    var volumeInfo =  Object.values(book)[4];

    console.log( volumeInfo );

    Object.keys(volumeInfo).forEach(function (key) {
      //
      if ( key == "title" ){
        bookData.title = volumeInfo[key]
      }

      if ( key == "authors" && volumeInfo[key][0] != undefined){
        bookData.autor =  volumeInfo[key][0];

      }

      if ( key == "industryIdentifiers" ){

        volumeInfo[key].forEach(function(codeBook) {

          if ( codeBook.type == "ISBN_13" ){
            bookData.isbn = codeBook.identifier;
          }

        });

      }

    });

    return bookData;
  }


}
