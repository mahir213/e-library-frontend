// filepath: /c:/Users/Mahir-Ideapad 3/Desktop/E-library/frontend/e-library-frontend/src/app/components/book/book-detail/book-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from '../../../services/book/book.service';
import { BorrowRequestService } from '../../../services/borrow-request/borrow-request.service';
import { UserService } from '../../../services/auth/user.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [BookService, BorrowRequestService]
})
export class BookDetailComponent implements OnInit {
  book: any;
  isLoggedIn: boolean;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private borrowRequestService: BorrowRequestService,
    private userService: UserService
  ) {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe(data => {
        this.book = data;
      });
    }
  }

  borrowRequest(): void {
    const user = this.userService.getUser();
    this.borrowRequestService.createBorrowRequest(user.id, this.book.id).subscribe(() => {
      alert('Borrow request submitted for ' + this.book.title);
    });
  }
}