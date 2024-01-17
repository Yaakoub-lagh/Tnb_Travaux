import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/admin']);
    } else if (this.username === 'user' && this.password === 'user') {
      this.router.navigate(['/user']);
    } else {
      alert('Invalid login credentials');
    }
  }
}
