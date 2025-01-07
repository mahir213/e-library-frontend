import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/auth/user.service';
import { BorrowRequestService } from '../../../services/borrow-request/borrow-request.service';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
  providers: [BorrowRequestService]
})
export class ProfileSettingsComponent implements OnInit {
  user: any = {
    avatarUrl: '',
    name: '',
    email: ''
  };
  borrowRequests: any[] = [];

  constructor(
    private userService: UserService,
    private borrowRequestService: BorrowRequestService,
    private router: Router
  ) {
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
    this.borrowRequestService.getUserBorrowRequests(this.user.id).subscribe(data => {
      this.borrowRequests = data.data;
    });
  }

  changeAvatar(): void {
    const newAvatarUrl = prompt('Enter the URL of your new avatar:');
    if (newAvatarUrl) {
      this.user.avatarUrl = newAvatarUrl;
    }
  }

  saveChanges(): void {
    this.userService.updateUser(this.user).subscribe(() => {
      this.userService.setUser(this.user);
      alert('Profile updated successfully');
    });
  }

  navigateToChangePassword(): void {
    this.router.navigate(['/change-password']);
  }
}

