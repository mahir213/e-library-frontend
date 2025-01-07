import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BorrowRequestService } from '../../../services/borrow-request/borrow-request.service';
import { UserService } from '../../../services/auth/user.service';
import { AvatarModalComponent } from '../avatar-modal/avatar-modal.component';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, AvatarModalComponent],
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
  providers: [BorrowRequestService, UserService]
})
export class ProfileSettingsComponent implements OnInit {
  user: any = {
    avatarUrl: '',
    name: '',
    email: ''
  };
  borrowRequests: any[] = [];
  showAvatarModal: boolean = false;

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
    this.showAvatarModal = true;
  }

  onAvatarSelected(avatarUrl: string): void {
    if (avatarUrl) {
      this.user.avatarUrl = avatarUrl;
      this.saveChanges();
    }
    this.showAvatarModal = false;
  }

  saveChanges(): void {
    this.userService.updateUser(this.user).subscribe(
      response => {
        console.log('Profile updated successfully:', response);
        this.userService.setUser(this.user);
      },
      error => {
        console.error('Failed to update profile:', error);
      }
    );

    this.userService.changeUsername(this.user.username).subscribe(
      response => {
        console.log('Username changed successfully:', response);
        this.userService.setUser(this.user);
      },
      error => {
        console.error('Failed to change username:', error);
      }
    );

    this.userService.changeEmail(this.user.email).subscribe(
      response => {
        console.log('Email changed successfully:', response);
        this.userService.setUser(this.user);
      },
      error => {
        console.error('Failed to change email:', error);
      }
    );
  }

  navigateToChangePassword(): void {
    this.router.navigate(['/change-password']);
  }
}

