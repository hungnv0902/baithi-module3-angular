import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getListBook();
  }
  addBook(form) {
    const {id, title, author, description} = form.value;
    const book = {id, title, author, description};
    this.bookService.addBook(book).subscribe(() => {
      console.log('Them thanh cong.');
      this.bookService.onNewBook.next(new Date().getTime());
    }, error1 => {
      console.log(error1);
    });
  }

}
