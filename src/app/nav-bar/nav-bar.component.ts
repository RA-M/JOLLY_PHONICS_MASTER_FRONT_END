import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


  imageUrl = 'https://www.jollylearning.co.uk/wp-content/themes/dazzling-child/assets/header-bottom.svg';

  isSubmenuVisible: boolean = false;

  onMouseEnter(item: any): void {
    // Show the submenu when mouse enters the main menu item
    debugger;
    if (item.submenu) {
      this.isSubmenuVisible = true;
    }
  }

  onMouseLeave(): void {
    debugger;
    // Hide the submenu when mouse leaves the main menu item
    this.isSubmenuVisible = false;
  }

  onSubmenuMouseEnter(): void {
    debugger;
    // Handle additional actions when mouse enters the submenu
  }

  onSubmenuMouseLeave(): void {
    debugger;
    // Handle additional actions when mouse leaves the submenu
  }

  login() {
    console.log('Login button clicked');
    // Add your login logic here
  }

  register() {
    console.log('Register button clicked');
    // Add your register logic here
  }
}
