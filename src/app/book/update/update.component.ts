import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  book: Book;
  message;

  constructor(private bookService: BookService, private active: ActivatedRoute) {
  }

  ngOnInit() {
    this.getById();
  }

  getById() {
    const id = +this.active.snapshot.paramMap.get('id');
    this.bookService.findById(id).subscribe(book =>
      this.book = book
    );
  }

  onSubmit(form) {
    const {id, title, author, description} = form.value;
    const book = {id, title, author, description};
    this.bookService.updateBook(book).subscribe(() => {
      this.message = 'Cap nhat thanh cong';
      this.bookService.getListBook();
    }, error1 => {
      console.log('Cap nhat that bai');
    });
  }
}
