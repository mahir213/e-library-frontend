import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book/book.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [BookService]
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data.records;
    });
  }
}
