import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardNavbarComponent } from '../../shared/dashboard-navbar/dashboard-navbar.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";


interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image1: string;
  image2: string;
  size: string;
  category: string;
}

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardNavbarComponent, SidebarComponent],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
    navLeft = [{ name: 'Home', route: '/home' }];
  navRight = [
    { name: 'Login', route: '/login' },
    { name: 'Signup', route: '/signup' }
  ];

  newItem: Partial<Item> = {};
  items: Item[] = [];
  counter: number = 1;

  // Example categories and sizes (can be dynamic)
  categories = ['Electronics', 'Clothing', 'Shoes', 'Books'];
  sizes = ['S', 'M', 'L', 'XL'];

  addItem() {
    if (this.newItem.name && this.newItem.price && this.newItem.quantity) {
      this.items.push({
        id: this.counter++,
        name: this.newItem.name,
        description: this.newItem.description || '',
        price: this.newItem.price,
        quantity: this.newItem.quantity,
        image1: this.newItem.image1 || '',
        image2: this.newItem.image2 || '',
        size: this.newItem.size || '',
        category: this.newItem.category || ''
      });
      this.newItem = {};
    } else {
      alert('Please fill all required fields');
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }

  editItem(item: Item) {
    const updatedName = prompt('Edit item name', item.name);
    if (updatedName !== null && updatedName.trim() !== '') {
      item.name = updatedName.trim();
    }
    // You can extend edit functionality for other fields similarly
  }
}
