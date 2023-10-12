import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isSignUpActive: boolean = false;
  saveForm:FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router: Router) {
this.saveForm = this.formBuilder.group({

  mailId:['',Validators.required],
  password:['',Validators.required],
  userName:['',Validators.required],
  addr:['',Validators.required],
  url:['',Validators.required],
})

   }

   registerUser(saveForm: FormGroup){
      console.log(this.saveForm.value);
      this.authService.registerUser(this.saveForm.value).subscribe(data=>{
      alert("User Registered Successfully");
      this.saveForm.reset();
      })

   }
   goToLogin() {
    this.router.navigate(['/login']);
  }
  togglePanel() {
    this.isSignUpActive = !this.isSignUpActive;
  }



}
