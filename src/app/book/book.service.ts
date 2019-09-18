import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  onNewBook = new Subject<any>();
  ApiUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  addBook(book: Book): Observable<any> {
    return this.httpClient.post(`${this.ApiUrl}/books`, book);
  }
  getListBook(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.ApiUrl}/books/`);
  }
  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete(`${this.ApiUrl}/books/${id}`);
  }
  updateBook(book: Book): Observable<any> {
    return this.httpClient.put(`${this.ApiUrl}/books/${book.id}`, book);
  }
  findById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.ApiUrl}/books/${id}`);
  }
}
