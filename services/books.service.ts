import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import firebase  from 'firebase/compat/app';
import { Book } from '../models/Book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [];
  booksSubject = new Subject<Book[]>();

  constructor() { }

  saveBooks(){
      firebase.database().ref('/books').set(this.books);
  }

  getBooks(){
    firebase.database().ref('/books').on(
        'value', (data) => { 
          this.books = data.val() ? data.val() : [];
          this.emitBooks(); 
        }
    );
  }

  getSingleBook(id: number){
    return new Promise<any>(
        (resolve, reject) => {
            firebase.database().ref('/books/' + id ).once('value').then(
                (data) => { resolve(data.val()); },
                (error) => { reject(error); }
            );
        }
    );
  }

  createNewBook(newBook: Book){
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  removeBook(book: Book){
    const bookIndexToRemove = this.books.findIndex(
        (bookEl) => {
            if(bookEl === book) { return true; }
            return false;
            }
    );
    this.books.splice(bookIndexToRemove, 1); // deleteCount
    this.saveBooks();
    this.emitBooks();
  }

  emitBooks(){
        this.booksSubject.next(this.books.slice());
  }

}
