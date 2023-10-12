import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-logo-gif',
  templateUrl: './logo-gif.component.html',
  styleUrls: ['./logo-gif.component.css']
})
export class LogoGifComponent {
  constructor(
    
    private navbarService: NavbarService) {
      this.navbarService.hide();}

}
