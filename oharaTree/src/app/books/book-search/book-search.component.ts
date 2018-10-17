import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  public searchBookTitle: string; 
  public booksResponse:any;
  public isSubmmit:boolean;

  constructor(public bookRest:BookService) { 
    this.isSubmmit=false;
    this.booksResponse="";
  }

  ngOnInit() {
  }

  onSubmit() { 
    this.isSubmmit=true;
    this.getRestBookItems(this.searchBookTitle);
  }

  // Get book items from REST API
  getRestBookItems( searchBookTitle ) {
    console.log("getRestBookItems");
    this.booksResponse = "";
    this.bookRest.getBook(searchBookTitle).subscribe((data: {}) => {
      console.log(data);
      this.booksResponse = data;
    });
  }




}