import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardNavbarComponent } from '../../shared/dashboard-navbar/dashboard-navbar.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";


interface Item {
  image: string;
  name: string;
  price: number;
  quantity: number;
  sellQuantity: number;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardNavbarComponent, SidebarComponent],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  // Navbar links
  navLeft = [{ name: 'Home', route: '/home' }];
  navRight = [
    { name: 'Login', route: '/login' },
    { name: 'Signup', route: '/signup' }
  ];

  categories = ['Electronics', 'Clothing', 'Shoes', 'Books'];
  selectedCategory: string = '';
  showTable: boolean = false;

  allItems: Item[] = [
    { image: 'https://via.placeholder.com/50', name: 'Laptop', price: 50000, quantity: 10, sellQuantity: 3 },
    { image: 'https://via.placeholder.com/50', name: 'Shirt', price: 1200, quantity: 20, sellQuantity: 5 },
    { image: 'https://via.placeholder.com/50', name: 'Book', price: 500, quantity: 15, sellQuantity: 7 }
  ];

  items: Item[] = [];

  viewReport() {
    if (!this.selectedCategory) {
      alert('Please select a category');
      return;
    }

    // For demo, show all items (can filter by category in real app)
    this.items = [...this.allItems];
    this.showTable = true;
  }

  getAvailable(item: Item) {
    return item.quantity - item.sellQuantity;
  }
}
