import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  showAlert = false;

  onSubmit() {
    // Perform form submission logic here

    // Set showAlert to true to display the alert
    this.showAlert = true;

    // Hide the alert after 3000 milliseconds (3 seconds)
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
}
