import { Component } from '@angular/core';
// import * as Firebase from '@angular/fire';
import initializeApp from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'biblio';
  constructor(){
    // ( Récupérer depuis firebase )
    // Firebase -> Go to console -> (ajouter un projet/choisir un projet)
    // -> Ajouter Firebase à votre application (cliquer sur l'icone </> 'web')
    // -> Donner un pseudo pour l'application (ex: biblio)
    // -> Dans "Ajouter le SDK Firebase", récupérer le code généré

      const firebaseConfig = {
        apiKey: "AIzaSyAvBo0mFwVv8ZT0ROZsi3gyC6SNJ2a3GAk",
        authDomain: "biblio-ee084.firebaseapp.com",
        databaseURL: "https://biblio-ee084-default-rtdb.firebaseio.com",
        projectId: "biblio-ee084",
        storageBucket: "biblio-ee084.appspot.com",
        messagingSenderId: "573915393245",
        appId: "1:573915393245:web:1908a33786325bb0337f34",
        measurementId: "G-F2ER44PNFY"
      };

      firebase.initializeApp(firebaseConfig);
  }

}
