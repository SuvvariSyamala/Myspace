import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient ,HttpClientModule,HttpHeaders} from '@angular/common/http';
import { User } from '../../models/user';


@Component({
  selector: 'app-registercomponent',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './registercomponent.component.html',
  styleUrl: './registercomponent.component.css'
})
export class RegistercomponentComponent {
  users:User;
  constructor(private router:Router,private http:HttpClient){
    this.users=new User();
  }
  onSubmit(): void {
    console.log(JSON.stringify(this.users));
    console.log(this.users);
    this.users.role="User";
    this.http.post('http://localhost:5123/User/Register',this.users)
    .subscribe((response)=>{
      console.log(response);
      this.router.navigateByUrl('login');
      
    })
    
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  redirectToLogin() {
    this.router.navigateByUrl('login');
  }
  
}
