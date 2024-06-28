import { Component, ElementRef, ViewChild } from '@angular/core';
import { Course } from './model/course.model';
import { CourseService } from './services/course.service';
import { LoginService } from '../services/login.service';
import { LoginRequest } from '../core/models/login/login.request';
import { RegisterRequest } from '../core/models/login/register.request';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  courses: Course[] = [];
  formData: any = {};
  
  constructor(private courseService: CourseService,
              private loginService:LoginService) {}
  
  ngOnInit(): void {
    debugger;
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      console.log('courses:', courses[0].name);
      this.courses = courses;
    },
    (error: any) => {
      // Handle errors here
      console.error('Error:', error);
      //alert('Error occurred');
    });
  }

  login(){
    debugger;
    let loginRequest: LoginRequest = {
      username:this.formData.email,
      password:this.formData.password
    }
    loginRequest.password = btoa(loginRequest.password);
    this.loginService.login(loginRequest).subscribe(
      (response: any) => {
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

  registerUser(){

    let registerRequest: RegisterRequest = {
      username: this.formData.name,
      password: this.formData.password,
      emailId: this.formData.email,
	    firstName: this.formData.name.split(' ')[0],
	    lastName: this.formData.name.split(' ')[1]
    }
    registerRequest.password = btoa(registerRequest.password);
    this.loginService.register(registerRequest).subscribe(
      (response: any) => {
        debugger;
        console.log('Response:', response);
        alert('Registration Successfully');
      },
      (error: any) => {
        // Handle errors here
        console.error('Error:', error);
        alert('Error occurred');
      }
    );
  }

  images = [
    { image: 'url-to-image-1.jpg', content: 'Content for Slide 1' },
    { image: 'url-to-image-2.jpg', content: 'Content for Slide 2' },
    // Add more images as needed
  ];

  updateBoxes = [
    { image: 'url-to-image-3.jpg', content: 'Content for Update Box 1' },
    { image: 'url-to-image-4.jpg', content: 'Content for Update Box 2' },
    { image: 'url-to-image-5.jpg', content: 'Content for Update Box 3' },
  ];



//==========================================================================


activeTab: string = 'active';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


  tabs: string[] = ['active', 'test', 'link'];

  nextTab() {
    const currentIndex = this.tabs.indexOf(this.activeTab);
    if (currentIndex < this.tabs.length - 1) {
      this.activeTab = this.tabs[currentIndex + 1];
    }
  }

  previousTab() {
    const currentIndex = this.tabs.indexOf(this.activeTab);
    if (currentIndex > 0) {
      this.activeTab = this.tabs[currentIndex - 1];
    }
  }



  selectedValue: string = ""; // Property to hold the selected value
  dropdownOptions: string[] = ['Option 12', 'Option 2', 'Option 3']; // Example options

  // Method to handle selection of an option
  selectOption(option: string): void {
    debugger;
    this.selectedValue = option;
    console.log('Selected value:', this.selectedValue);
    // Additional logic based on the selected value can be added here
  }


//=======================================================================================

  download(){

  }


  //PDF Viewer=======================================================================================

  

}
