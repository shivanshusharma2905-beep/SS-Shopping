import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ⚡ import this
import { DashboardNavbarComponent } from '../../shared/dashboard-navbar/dashboard-navbar.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";


interface Item {
  id: number;
  name: string;
  totalQuantity: number;
  sellQuantity: number;
}

@Component({
  selector: 'app-add-quantity',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardNavbarComponent, SidebarComponent], // ⚡ add RouterModule here
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.css']
})
export class AddQuantityComponent {
  navLeft = [{ name: 'Home', route: '/home' }];
  navRight = [
    { name: 'Login', route: '/login' },
    { name: 'Signup', route: '/signup' }
  ];

  items: Item[] = [
    { id: 1, name: 'Item 1', totalQuantity: 10, sellQuantity: 2 },
    { id: 2, name: 'Item 2', totalQuantity: 5, sellQuantity: 0 }
  ];

  selectedItemId: number | null = null;
  addQuantityValue: number | null = null;

  addQuantity() {
    if (this.selectedItemId != null && this.addQuantityValue != null && this.addQuantityValue > 0) {
      const item = this.items.find(i => i.id === this.selectedItemId);
      if (item) {
        item.totalQuantity += this.addQuantityValue;
        this.addQuantityValue = null;
      }
    } else {
      alert('Please select an item and enter a valid quantity');
    }
  }

  getAvailability(item: Item) {
    return item.totalQuantity - item.sellQuantity;
  }
}
