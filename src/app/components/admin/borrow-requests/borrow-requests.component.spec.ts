import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowRequestsComponent } from './borrow-requests.component';

describe('BorrowRequestsComponent', () => {
  let component: BorrowRequestsComponent;
  let fixture: ComponentFixture<BorrowRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
