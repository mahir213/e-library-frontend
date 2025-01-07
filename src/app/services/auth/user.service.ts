import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost/e-library/backend/api/user';

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
    return this.http.post<any>(`${this.apiUrl}/update_profile.php`, user);
  }

  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    const data = {
      id: this.getUser().id,
      currentPassword: currentPassword,
      newPassword: newPassword
    };
    return this.http.post(`${this.apiUrl}/change_password.php`, data).pipe(
      tap(response => console.log('Change password response:', response))
    );
  }

  changeUsername(newUsername: string): Observable<any> {
    const data = {
      id: this.getUser().id,
      newUsername: newUsername
    };
    return this.http.post(`${this.apiUrl}/change_username.php`, data).pipe(
      tap(response => console.log('Change username response:', response))
    );
  }

  changeEmail(newEmail: string): Observable<any> {
    const data = {
      id: this.getUser().id,
      newEmail: newEmail
    };
    return this.http.post(`${this.apiUrl}/change_email.php`, data).pipe(
      tap(response => console.log('Change email response:', response))
    );
  }
}
