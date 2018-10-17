import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../Book';


@Component({
  selector: 'app-book-mant',
  templateUrl: './book-mant.component.html',
  styleUrls: ['./book-mant.component.css']
})
export class BookMantComponent implements OnInit {

  public book:Book;

  constructor(public bookRest:BookService) { }

  ngOnInit() {
  }




}