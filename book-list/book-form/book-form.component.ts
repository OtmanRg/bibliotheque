import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';
import firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  formGroup!: FormGroup;
  book = new Book('', '');

  constructor(private formBuilder: FormBuilder,
              private booksService: BooksService,
              private router: Router) { }

  ngOnInit(): void {
      this.initForm();
  }

  initForm(){
    this.formGroup = this.formBuilder.group(
      {
        titre : ['', Validators.required],
        auteur : ['', Validators.required]
      }
    );
  }

  onSubmit(){
    // const t = this.formGroup.value['titre']; 
    // const a = this.formGroup.value['auteur']; 
    this.book.titre = this.formGroup.value['titre']; 
    this.book.auteur = this.formGroup.value['auteur']; 
    this.booksService.createNewBook(this.book);
    // this.onSaveBook(); //  
    this.booksService.saveBooks();
    this.router.navigate(['/books']);
  }

  onSaveBook(){
    this.booksService.saveBooks();
  }

}
