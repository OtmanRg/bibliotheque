import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import firebase  from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Promise<boolean> {
    return new Promise(
      (resolve) => {
              firebase.auth().onAuthStateChanged(
                  (user) => {
                      if(user) { resolve(true); }
                      else { this.router.navigate(['/auth', 'signin']); resolve(false); }
                  }
              );
      }
    );
}


}
