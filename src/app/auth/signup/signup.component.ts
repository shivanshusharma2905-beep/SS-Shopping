import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
      constructor(private router: Router) { }
  name: string = '';
  email: string = '';
  password: string = '';

  signup() {
    this.router.navigate(['/login']);
  }
}
