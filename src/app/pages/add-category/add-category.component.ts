import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardNavbarComponent } from '../../shared/dashboard-navbar/dashboard-navbar.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardNavbarComponent, SidebarComponent], // ⚡ v23 standalone imports
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent {
  newCategory: string = '';
  categories: Category[] = [];
  counter: number = 1;

  addCategory() {
    if (this.newCategory.trim()) {
      this.categories.push({ id: this.counter++, name: this.newCategory });
      this.newCategory = '';
    }
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter(cat => cat.id !== id);
  }

  editCategory(category: Category) {
    const updatedName = prompt('Edit category name', category.name);
    if (updatedName !== null && updatedName.trim() !== '') {
      category.name = updatedName.trim();
    }
  }
}


