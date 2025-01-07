import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost/e-library/backend/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/read.php`);
  }

  getBookById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/read_single.php?id=${id}`);
  }
}
