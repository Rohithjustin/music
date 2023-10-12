import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  showNavbar = true;

  toggleNavbarVisibility() {
    this.showNavbar = !this.showNavbar;
  }

  show() {
    this.showNavbar = true;
  }

  hide() {
    this.showNavbar = false;
  }
}
