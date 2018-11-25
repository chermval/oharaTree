import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';

import { BookService } from '../book.service';
import { Book } from '../Book';


@Component({
  selector: 'app-book-mant',
  templateUrl: './book-mant.component.html',
  styleUrls: ['./book-mant.component.css']
})
export class BookMantComponent implements OnInit {

  public book: Book ;
  formatos = ['Digital', 'Fisico'];


  constructor(public bookService:BookService) {
  }

  ngOnInit() {
    this.bookService.currentBookInfo.subscribe(info => {
      this.book = info;
    });

  }

  onSubmit() {
    console.log("libro a guardar");
    console.log(this.book);
  }

  //Get selected format of book
  formatChanged(selectedFormatValue:string){
    this.book.format = selectedFormatValue;
    }
}
