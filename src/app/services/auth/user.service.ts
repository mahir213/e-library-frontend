import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost/e-library/backend/api/users';

  private user: any;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  setUser(user: any): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any {
    return this.user;
  }

  getUserRole(): string {
    return this.user?.role ?? 'user';
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return this.user != null;
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update.php`, user);
  }
}
