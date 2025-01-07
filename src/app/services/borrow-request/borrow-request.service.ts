import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowRequestService {
  private apiUrl = 'http://localhost/e-library/backend/api/borrow_requests';

  constructor(private http: HttpClient) { }

  getBorrowRequests(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/read.php`);
  }

  updateBorrowRequest(id: number, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update.php`, { id, status });
  }

  createBorrowRequest(user_id: number, book_id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create.php`, { user_id, book_id });
  }

  getUserBorrowRequests(user_id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/read_user_requests.php?user_id=${user_id}`);
  }
}
