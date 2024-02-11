import { Routes } from '@angular/router';
import { AdmindashboardComponent } from '../Pages/User/admindashboard/admindashboard.component';
import { AddbookcomponentComponent } from '../Pages/Book/addbookcomponent/addbookcomponent.component';
import { EditbookcomponentComponent } from '../Pages/Book/editbookcomponent/editbookcomponent.component';
import { GetallbookcomponentComponent } from '../Pages/Book/getallbookcomponent/getallbookcomponent.component';
import { LogincomponentComponent } from '../Pages/logincomponent/logincomponent.component';
import { RegistercomponentComponent } from '../Pages/registercomponent/registercomponent.component';
export const routes: Routes = [
    {
    path: 'admin-dashboard', component: AdmindashboardComponent,
    children: [
      { path: 'getallbooks', component:GetallbookcomponentComponent },
      { path: 'addbook', component: AddbookcomponentComponent },
      {path:'edit-book/:bid',component:EditbookcomponentComponent},
     
    ]
},
  { path: 'login',  component: LogincomponentComponent },
  { path: '', component: RegistercomponentComponent }
];
