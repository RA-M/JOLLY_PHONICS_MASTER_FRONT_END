import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  images = [
    'assets/childimage.jpg',
    'assets/childimage2.jpg',
    //'assets/childimage3.jpg',
    // Add more image paths as needed
  ];

  currentImageIndex = 0;


  ngOnInit(){
    debugger;
    this.startImageCarousel(); 
  }

  // ngAfterViewInit() {
  //   // Additional initialization logic after the view is initialized
  // }

  startImageCarousel():void {
    
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000); // Change image every 5 seconds (adjust the interval as needed)
  }

}


