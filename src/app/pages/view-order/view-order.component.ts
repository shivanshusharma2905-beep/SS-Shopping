import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardNavbarComponent } from '../../shared/dashboard-navbar/dashboard-navbar.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";


interface Order {
  image: string;
  itemName: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-view-order',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardNavbarComponent, SidebarComponent],
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent {
  navLeft = [{ name: 'Home', route: '/home' }];
  navRight = [
    { name: 'Login', route: '/login' },
    { name: 'Signup', route: '/signup' }
  ];

  users = ['User1', 'User2', 'User3'];
  orderStatus = ['Pending', 'Completed', 'Cancelled'];

  selectedUser: string = '';
  selectedStatus: string = '';

  showTable: boolean = false;

  orders: Order[] = [];

  allOrders: Order[] = [
    { image: 'https://via.placeholder.com/50', itemName: 'Item 1', quantity: 2, price: 200 },
    { image: 'https://via.placeholder.com/50', itemName: 'Item 2', quantity: 1, price: 150 },
    { image: 'https://via.placeholder.com/50', itemName: 'Item 3', quantity: 3, price: 300 }
  ];

  viewOrders() {
    if (!this.selectedUser || !this.selectedStatus) {
      alert('Please select user and order status');
      return;
    }

    // For demo, just show all orders (in real app, filter by user/status)
    this.orders = [...this.allOrders];
    this.showTable = true;
  }

  getTotalPrice(order: Order) {
    return order.quantity * order.price;
  }
}
