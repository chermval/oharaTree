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

  // Get book selected
  onSelectBook(book: any): void {
    this.selectedHero = book;
    console.log(book);
  }


}