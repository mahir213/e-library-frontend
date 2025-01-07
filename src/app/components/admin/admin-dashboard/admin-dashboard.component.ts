import { Component, OnInit } from '@angular/core';
import { BorrowRequestService } from '../../../services/borrow-request/borrow-request.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers: [BorrowRequestService]
})
export class AdminDashboardComponent implements OnInit {
  borrowRequests: any[] = [];

  constructor(private borrowRequestService: BorrowRequestService) {}

  ngOnInit(): void {
    this.borrowRequestService.getBorrowRequests().subscribe(data => {
      this.borrowRequests = data.data;
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
}
