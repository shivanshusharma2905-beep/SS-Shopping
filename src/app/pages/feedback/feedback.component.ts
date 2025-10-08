import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardNavbarComponent } from '../../shared/dashboard-navbar/dashboard-navbar.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardNavbarComponent, SidebarComponent],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  navLeft = [{ name: 'Home', route: '/home' }];
  navRight = [
    { name: 'Login', route: '/login' },
    { name: 'Signup', route: '/signup' }
  ];

  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;

  submitFeedback() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill all fields');
      return;
    }

    console.log('Feedback submitted:', { name: this.name, email: this.email, message: this.message });

    this.submitted = true;

    this.name = '';
    this.email = '';
    this.message = '';
  }
}
