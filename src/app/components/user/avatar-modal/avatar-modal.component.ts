import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar-modal.component.html',
  styleUrls: ['./avatar-modal.component.css']
})
export class AvatarModalComponent {
  @Output() avatarSelected = new EventEmitter<string>();
  avatars: string[] = [];

  constructor() {
    this.loadAvatars();
  }

  loadAvatars() {
    for (let i = 1; i <= 20; i++) {
      this.avatars.push(`https://robohash.org/${i}?size=100x100`);
    }
  }

  selectAvatar(avatarUrl: string) {
    this.avatarSelected.emit(avatarUrl);
  }
}
