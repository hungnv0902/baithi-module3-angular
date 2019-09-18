import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  book: Book;
  constructor(private bookService: BookService, private active: ActivatedRoute) { }

  ngOnInit() {
    this.getById();
  }
  getById() {
    const id = +this.active.snapshot.paramMap.get('id');
    this.bookService.findById(id).subscribe(book =>
      this.book = book
    );
  }

}
