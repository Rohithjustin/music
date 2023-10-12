import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and hide the navbar for login and register components
        this.showNavbar = !['/login', '/register'].includes(event.url);
      }
    });
  }

  ngOnInit() {
    // Initialize any necessary data or configurations
  }
}





