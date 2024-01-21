import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginRequest } from '../core/models/login/login.request';
import { Observable, catchError, concatMap, tap, throwError } from 'rxjs';
import { RegisterRequest } from '../core/models/login/register.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formData: any = {};
  form: any={
    username:null,
    password:null
  }

  username: string = '';
  password: string = '';

 constructor(private loginService:LoginService) {

 }

 ngOnInit() {
    
  }
  onSubmit()
  {
    debugger;
    console.log("form is submitted");

    let loginRequest: LoginRequest = {
      username:this.form.username,
      password:this.form.password
    }

    //loginRequest.password = btoa(loginRequest.password);
    
    // this.loginService.login(loginRequest).subscribe(
    //   (response: any) => {
    //     // Handle the successful response here
    //     debugger;
    //     console.log('Response:', response);
    //     alert('Request successful token :'+response.token);
    //   },
    //   (error: any) => {
    //     // Handle errors here
    //     console.error('Error:', error);
    //     alert('Error occurred');
    //   }
    // );


    let registerRequest: RegisterRequest = {
      username:"Ram",
      password:"Ram@123",
      emailId: "ramwaghmare2018@gmail.com",
	    firstName: "Ram",
	    lastName: "Waghmare"
    }
    registerRequest.password = btoa(registerRequest.password);
    this.loginService.register(registerRequest).subscribe(
      (response: any) => {
        // Handle the successful response here
        debugger;
        console.log('Response:', response);
        alert('Request successful token :'+response.token);
      },
      (error: any) => {
        // Handle errors here
        console.error('Error:', error);
        alert('Error occurred');
      }
    );


    
  }

}
