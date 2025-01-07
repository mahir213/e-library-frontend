import { Component } from '@angular/core';
import { UserService } from '../../../services/auth/user.service';
import { Router } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'New passwords do not match';
      return;
    }

    this.userService.changePassword(this.currentPassword, this.newPassword).subscribe(
      response => {
        this.successMessage = 'Password changed successfully';
        this.errorMessage = '';
        this.router.navigate(['/profile-settings']);
      },
      error => {
        this.errorMessage = 'Failed to change password';
        this.successMessage = '';
      }
    );
  }
}
