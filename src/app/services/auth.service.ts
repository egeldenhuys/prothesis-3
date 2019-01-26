import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private afAuth: AngularFireAuth) {
  }

  public getUser(): Observable<firebase.User> {
    return this.afAuth.user;
  }

  public loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .catch(
      (err: any) => {
        console.error(err);
      }
    );

  }

  public logout() {
    this.afAuth.auth.signOut()
    .then(
      (result) => {
        this.router.navigate(['/login']);
      }
    )
    .catch(
      (err: any) => {
        console.error(err);
      }
    );
  }
}
