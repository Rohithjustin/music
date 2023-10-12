import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RouteService } from 'src/app/services/route.service';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorite.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isSignUpActive: boolean = false;
  loginForm: FormGroup;
  userFavslist: any[] = []; 
  togglePanel() {
    this.isSignUpActive = !this.isSignUpActive;
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: RouteService,private router: Router,
    private favoriteService: FavoriteService,
    private navbarService: NavbarService) {
      this.navbarService.hide();
    this.loginForm = this.formBuilder.group({
      mailId: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginUser(loginForm: FormGroup) {
    
    const emailValue = this.loginForm?.get('mailId')?.value ?? 'Email not available';
  console.log('Entered Email:', emailValue);
  sessionStorage.setItem("email",emailValue)
    console.log(this.loginForm.value);
    this.authService.loginUser(this.loginForm.value).subscribe(data => {
      sessionStorage.setItem("token", data['token']
     );
    
     
      
      this.route.routeToDashboard();
      this.Createfav(emailValue, this.userFavslist);
    },err =>{
      alert("Invalid Credentials");
      this.loginForm.reset();
    })
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
  Createfav(userEmail: string, userFavslist: any) {
    // Call the favorite service to add to favorites
    this.favoriteService.Createfav(userEmail, userFavslist).subscribe((response: any) => {
      console.log('Album added to favorites:', response);
    });
  }


  














}



