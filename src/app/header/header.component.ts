import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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

  openSearch(): void {
    // Handle the click event here, e.g., open a search modal or trigger a search function
    const inputValue = (document.getElementById('searchInput') as HTMLInputElement).value;
    alert('Searching for: ' + inputValue);
  }
  
}
