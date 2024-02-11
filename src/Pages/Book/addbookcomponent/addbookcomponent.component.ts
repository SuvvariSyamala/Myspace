import { Component } from '@angular/core';
import { Book } from '../../../models/book';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addbookcomponent',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './addbookcomponent.component.html',
  styleUrl: './addbookcomponent.component.css'
})
export class AddbookcomponentComponent {
  book: Book;
  httpOptions: any;
  
  constructor(private http: HttpClient, private router: Router) {
    this.book = new Book();
    
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('Role');

    // Set the httpOptions with token and role
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }),
     
    };
  }
 
  addBook() {
    console.log(this.book);
   
    this.http
      .post('http://localhost:5129/api/Book/AddBook', this.book, this.httpOptions)
      .subscribe(
        (response) => {
          console.log(response);
          
        },
        
      );
  }
}
