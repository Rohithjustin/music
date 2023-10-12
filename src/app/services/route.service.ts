import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(private router: Router) { }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }
}
