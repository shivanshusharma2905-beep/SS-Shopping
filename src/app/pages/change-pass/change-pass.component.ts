import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardNavbarComponent } from '../../shared/dashboard-navbar/dashboard-navbar.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";


@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardNavbarComponent, SidebarComponent],
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})

export class ChangePassComponent {
  navLeft = [{ name: 'Home', route: '/home' }];
  navRight = [
    { name: 'Login', route: '/login' },
    { name: 'Signup', route: '/signup' }
  ];

  currentPassword: string = '';
  newPassword: string = '';
  reEnterPassword: string = '';

  submitChange() {
    if (!this.currentPassword || !this.newPassword || !this.reEnterPassword) {
      alert('Please fill all fields');
      return;
    }

    if (this.newPassword !== this.reEnterPassword) {
      alert('New password and re-enter password do not match');
      return;
    }

    alert('Password changed successfully!');
    this.currentPassword = '';
    this.newPassword = '';
    this.reEnterPassword = '';
  }
}
