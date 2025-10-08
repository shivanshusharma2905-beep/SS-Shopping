import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<div class="logout-container">
               <p>Logging out...</p>
             </div>`,
  styles: [`
    .logout-container{
      display:flex;
      justify-content:center;
      align-items:center;
      height:70vh;
      font-size:20px;
      color:#2c3e50;
    }
  `]
})
export class LogoutComponent {

  constructor(private router: Router) {
    this.logout();
  }

  logout() {
    // Clear user session/localStorage if needed
    // localStorage.clear(); 

    // Redirect to login page after logout
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500); // optional small delay for UX
  }
}
