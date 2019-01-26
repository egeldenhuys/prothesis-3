import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.authService.getUser().subscribe(
      (user) => {
        if (user) {
          this.router.navigate(['/home']);
        }
      }
    );
  }

  public login() {
    this.authService.loginGoogle();
  }

  public logout() {
    this.authService.logout();
  }

}
