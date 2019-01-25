import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public authService: AuthService) {

  }


  public status = false;

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(
      (res) => {
        if (res) {
          this.status = true;
        } else {
          this.status = false;
        }
      }
    );
  }

}
