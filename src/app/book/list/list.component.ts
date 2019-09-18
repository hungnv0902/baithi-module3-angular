import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: Book[];
  length;
  constructor(private bookService: BookService) { }
  @Output() selectedBook = new EventEmitter<Book>();
  ngOnInit() {
    this.getListBook();
  }
  getListBook() {
    this.bookService.getListBook().subscribe(newList => {
      this.books = newList;
      this.length = this.books.length;
    });
  }
  delete(id) {
    this.bookService.deleteBook(id).subscribe(() => {
      console.log('Xoa thanh cong');
      this.getListBook();
    }, error1 => {
      console.log(error1);
    });
  }
  selectCustomer(book: Book) {
    this.selectedBook.emit(book);
  }
}
