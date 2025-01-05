// filepath: /c:/Users/Mahir-Ideapad 3/Desktop/E-library/frontend/e-library-frontend/src/app/components/book/book-detail/book-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    
    this.book = {
      id: bookId,
      title: 'Sample Book Title',
      author: 'Sample Author',
      published_date: '2023-01-01',
      isbn: '123-456-789',
      description: 'This is a sample description of the book.',
      cover_image_url: 'assets/sample-book-cover.jpg'
    };
  }
}