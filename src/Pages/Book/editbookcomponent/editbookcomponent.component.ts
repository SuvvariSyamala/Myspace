import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../models/book';
import { HttpHeaders } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editbookcomponent',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './editbookcomponent.component.html',
  styleUrl: './editbookcomponent.component.css'
})
export class EditbookcomponentComponent {
  bookId: number = 0;
  book: Book = new Book(); // Initialize book here
  errMsg: string = '';
  isbookExist = true;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Route parameter cid is assigned to CategoryId
    this.activateRoute.params.subscribe((p) => {
      this.bookId = p['bid'];
      this.search();
    });
  }

  search() {
    this.http
      .get<Book>('http://localhost:5123/api/GetBookById/' + this.bookId, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.book = response;
          this.isbookExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Book Id';
          this.isbookExist = false;
        }
      });
  }

  edit() {
    this.http
      .put('http://localhost:5123/api/EditBook', this.book, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigateByUrl('/admin-dashboard/getallbooks');
      });
  }
}
