import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardNavbarComponent } from '../../shared/dashboard-navbar/dashboard-navbar.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";


interface Payment {
  paymentType: string;
  bankName: string;
  branchName: string;
  cardNo: string;
  cvv: string;
  amount: number;
  paymentDate: string;
}

@Component({
  selector: 'app-view-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardNavbarComponent, SidebarComponent],
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent {
  // Navbar links
  navLeft = [{ name: 'Home', route: '/home' }];
  navRight = [
    { name: 'Login', route: '/login' },
    { name: 'Signup', route: '/signup' }
  ];

  users = ['User1', 'User2', 'User3'];
  selectedUser: string = '';
  showTable: boolean = false;

  payments: Payment[] = []; // Filtered payments to display

  allPayments: Payment[] = [
    {
      paymentType: 'Credit Card',
      bankName: 'HDFC',
      branchName: 'MG Road',
      cardNo: '**** **** **** 1234',
      cvv: '***',
      amount: 1500,
      paymentDate: '2025-10-07'
    },
    {
      paymentType: 'Debit Card',
      bankName: 'SBI',
      branchName: 'Sector 10',
      cardNo: '**** **** **** 5678',
      cvv: '***',
      amount: 2000,
      paymentDate: '2025-10-06'
    }
  ];

  viewPayments() {
    if (!this.selectedUser) {
      alert('Please select a user');
      return;
    }

    // For demo, show all payments (can filter by user in real app)
    this.payments = [...this.allPayments];
    this.showTable = true;
  }
}
