import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LastfmService } from 'src/app/services/lastfm.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { NavigationEnd, Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {
  showNavbar = true;
  showUsernameOnHover: boolean = false;
  showEmail = false;
  private breakpointObserver = inject(BreakpointObserver);
  userEmail:any =''; 
  username:any ='';
  email:any ='';
  url:any='';
  onMouseOver() {
    this.showUsernameOnHover = true;
  this.showEmail = true; 
  }

  onMouseOut() {
    this.showUsernameOnHover = false;
  this.showEmail = false; 
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
  constructor(private lastfmService: LastfmService,
    private favoriteService: FavoriteService,private router: Router,private navbarService: NavbarService) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
         
          this.showNavbar = !['/login', '/register','/logo'].includes(event.url);
        }
      });
      this.userEmail = sessionStorage.getItem("email");
     
      this.email = this.userEmail;
      this.favoriteService.getUsernameByEmail(this.email).subscribe(resp => {
        console.log(resp.url)
        this.url = resp.url});
    
    
    }
    ngOnInit() {
      this.userEmail = sessionStorage.getItem("email");
    console.log(this.userEmail);
    this.favoriteService.getUsernameByEmail(this.userEmail).subscribe(
      (data) => {
      
        this.username = data;
        console.log('Username:', this.username);
      },
      (error) => {
        console.error('Error fetching username:', error);
      }
    );
    
  
  }  
  logout() {
   
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  
}



