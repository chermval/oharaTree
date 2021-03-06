import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, BehaviorSubject , of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Book } from './Book';


const endpointUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookInfo = new BehaviorSubject<Book>(new Book() );
  currentBookInfo = this.bookInfo.asObservable();

  constructor(private http: HttpClient) { }

  //Call to Google Book API
  getBook(title: string): Observable<any> {
    const url = endpointUrl+''+title;

    return this.http.get<any>(url).pipe(
      map(this.getDataFromResponse)
    );

  }

  //Get data from Response of Google Book API
  private getDataFromResponse(res: Response) {
    let body = res;
    return body || { };
  }


  //Set info of book selected by user
  setBookInfo(book: Book){
    this.bookInfo.next( book );
  }

  //create book on database
  createBook(){

  }

}
