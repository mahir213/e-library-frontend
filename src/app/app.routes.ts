import { Routes } from '@angular/router';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileSettingsComponent } from './components/user/profile-settings/profile-settings.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { BorrowRequestsComponent } from './components/admin/borrow-requests/borrow-requests.component';
import {HomeComponent} from './home/home.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile-settings', component: ProfileSettingsComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/borrow-requests', component: BorrowRequestsComponent },
  { path: 'admin/book/create', component: BookCreateComponent },
  { path: 'admin/book/edit/:id', component: BookEditComponent },
  // ...other routes
];