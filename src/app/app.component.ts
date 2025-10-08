
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [RouterOutlet, NavbarComponent]
})
export class AppComponent implements OnInit {
 
  showNavbar = true;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data;
      })
    ).subscribe((data) => {

      this.showNavbar = !data['hideNavbar'];
    });
  }
}







































// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { RouterOutlet } from '@angular/router';
// import { NavbarComponent } from "./shared/navbar/navbar.component";

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   imports: [RouterOutlet, NavbarComponent]
// })
// export class AppComponent {
//   constructor(private router: Router) {}

//   isPagesRoute(): boolean {
//     return this.router.url.startsWith('/pages');
//   }
// }
