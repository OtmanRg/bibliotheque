import { Injectable } from '@angular/core';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  privilege = 0;
  constructor() { }

  createNewUser(email: string, password: string){
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => { resolve(); },
          (error) => { reject(error); }
        );
      }
    );
  }
  
  signInUser(email: string, password: string){
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => { resolve(); },
          (error) => { reject(error); }
        );
      }
    );
  }



  signOutUser(){
    firebase.auth().signOut();
  }

}
