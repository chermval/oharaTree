import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookMantComponent } from './books/book-mant/book-mant.component';
import { BookSearchComponent } from './books/book-search/book-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookMantComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
