import { Component, OnInit } from '@angular/core';
import { BorrowRequestService } from '../../../services/borrow-request/borrow-request.service';
import { BookService } from '../../../services/book/book.service';
import { UserService } from '../../../services/auth/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers: [BorrowRequestService, BookService, UserService]
})
export class AdminDashboardComponent implements OnInit {
  borrowRequests: any[] = [];
  books: any[] = [];
  users: any[] = [];
  sectionsVisibility: { [key: string]: boolean } = {
    'view-books': false,
    'view-users': false,
    'borrow-requests': false,
    'add-book': false
  };
  newBook: any = {
    title: '',
    author: '',
    publishedDate: '',
    isbn: '',
    coverImageUrl: '',
    description: ''
  };

  constructor(
    private borrowRequestService: BorrowRequestService,
    private bookService: BookService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.borrowRequestService.getBorrowRequests().subscribe(data => {
      this.borrowRequests = data.data;
    });
    this.bookService.getBooks().subscribe(data => {
      this.books = data.records;
    });
    this.userService.getUsers().subscribe(data => {
      this.users = data.data;
    });
  }

  updateRequestStatus(id: number, status: string): void {
    this.borrowRequestService.updateBorrowRequest(id, status).subscribe(() => {
      this.borrowRequests = this.borrowRequests.map(request => {
        if (request.id === id) {
          request.status = status;
        }
        return request;
      });
    });
  }

  toggleSection(section: string): void {
    this.sectionsVisibility[section] = !this.sectionsVisibility[section];
  }

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe(response => {
      console.log('Book added successfully:', response);
      this.books.push(response.data);
      this.newBook = {
        title: '',
        author: '',
        publishedDate: '',
        isbn: '',
        coverImageUrl: '',
        description: ''
      };
    }, error => {
      console.error('Failed to add book:', error);
    });
  }

  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newBook.coverImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.id !== id);
      console.log('Book deleted successfully');
    }, error => {
      console.error('Failed to delete book:', error);
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
      console.log('User deleted successfully');
    }, error => {
      console.error('Failed to delete user:', error);
    });
  }
}
