import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../models/book';
import { HttpHeaders } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-getallbookcomponent',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './getallbookcomponent.component.html',
  styleUrl: './getallbookcomponent.component.css'
})
export class GetallbookcomponentComponent {
  books:Book[]=[];
  bookId?:number;
  Role?:string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http:HttpClient,private router:Router)
  {}
    ngOnInit(): void {
    this.getallbooks();
    this.Role = localStorage.getItem('Role') ?? "Guest";
    }
  
  getallbooks(){
    this.http.get<Book[]>('http://localhost:5123/api/Books',this.httpOptions).subscribe((response) =>{
      this.books=response;
      console.log(this.books);
       this.router.navigate(['/adminDashboard/getallbooks'], { skipLocationChange: true });
      // this.router.navigate(['/userDashboard/getallbooks'], { skipLocationChange: true });
  
  
    });
  }
  delete(bookId:any) {
   this.bookId=bookId;
    this.http
      .delete('http://localhost:5123/api/Books' + this.bookId,this.httpOptions)
     
        .subscribe((response) => {
          console.log(response);
          this.getallbooks();
          this.router.navigate(['/adminDashboard/getallbooks'], { skipLocationChange: true });
  
        });
  }
  
    edit(bookId: any) {
      if (this.Role === "Admin") {
        this.router.navigateByUrl(`/admin-dashboard/edit-book/${bookId}`);
      } else {
        this.router.navigateByUrl(`/edit-book/${bookId}`);
      }
    
  
  }
}
