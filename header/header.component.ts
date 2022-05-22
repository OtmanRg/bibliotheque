import { Component, OnInit } from '@angular/core';
import firebase  from 'firebase/compat/app';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
        (user) => { 
            if(user){ this.isAuth = true; console.log("isAuth = ", this.isAuth); }
            else { this.isAuth = false; console.log("isAuth = ", this.isAuth); } 
        }
    );
  }

  onSignOut(){
    this.authService.signOutUser();
  }

}
