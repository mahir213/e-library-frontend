import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../services/auth/login.service';
import { UserService } from '../../../services/auth/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required]);
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private loginService: LoginService, private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['registered'] === 'true') {
        this.successMessage = 'You have been successfully registered. Please log in.';
      }
    });
  }

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  login(): void {
    if (this.email.valid && this.password.valid) {
      const loginData = { email: this.email.value, password: this.password.value };
      this.loginService.login(loginData.email, loginData.password).subscribe(
        (response) => {
          console.log(response);  // Debugging
          if (response.status === 'success') {
            this.userService.setUser(response.user);
            this.redirectUser(response.user.role);
          } else {
            this.errorMessage = response.message;
          }
        },
        (error) => {
          console.error('Error:', error);
          this.errorMessage = 'An error occurred. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Please fill in all fields correctly.';
    }
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  redirectUser(role: string): void {
    if (role === 'admin') {
      this.router.navigate(['/admin/dashboard']).then(() => {
      });
    } else {
      this.router.navigate(['/books']).then(() => {
      });
    }
  }
}
