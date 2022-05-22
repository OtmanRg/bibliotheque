import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  // book!: Book;
  book = new Book('', '');

  constructor(private booksService: BooksService,
              private router: Router,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.book = new Book(titre:'', auteur:'');
    const id = this.activateRoute.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
      (book: Book) => { this.book = book; }
    );
  }

  onBack() { this.router.navigate(['/books']); }

}
