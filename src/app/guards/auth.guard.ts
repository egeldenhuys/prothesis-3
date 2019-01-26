import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  // https://angularfirebase.com/lessons/google-user-auth-with-firestore-custom-data/
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.getUser().pipe(
        take(1),
        map(user => !! user),
        tap(
          (loggedIn) => {
            if (!loggedIn) {
              this.router.navigate(['/login']);
              return false;
            } else {
              return true;
            }
          }
        )
      );
  }
}
