import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Book } from '../models/Book.model';
import { BooksService } from '../services/books.service';
import firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  booksSubscription!: Subscription;

  constructor(private booksService: BooksService,
              private router: Router,
              private authService : AuthService){
  }

  priv = this.authService.privilege;

  onNewBook() { this.router.navigate(['/books', 'new']); }
  onDeleteBook(book: Book) { this.booksService.removeBook(book); }
  onViewBook(id: number) { this.router.navigate(['/books', id]); }


  ngOnInit(): void {
    this.booksSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => { this.books = books; }
      // , (error) => { console.log(error); }
    );
    this.booksService.getBooks();
    this.booksService.emitBooks();
  }

  ngOnDestroy(){
      this.booksSubscription.unsubscribe();
  }

}
