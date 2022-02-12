import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './books/book/book.component';
import { BooklistadminComponent } from './books/booklistadmin/booklistadmin.component';
import { BooklistmemberComponent } from './books/booklistmember/booklistmember.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerlistComponent } from './customers/customerlist/customerlist.component';
import { LoginComponent } from './login/login.component';
import { RentallistComponent } from './rentals/rentallist/rentallist.component';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'customer', component:CustomerComponent,canActivate:[AuthGuard],data:{role : 1}},
  {path:'customer/:cId', component:CustomerComponent},
  {path:'customerlist', component:CustomerlistComponent,canActivate:[AuthGuard],data:{role : 1}},
  {path:'book', component:BookComponent,canActivate:[AuthGuard],data:{role : 1}},
  {path:'book/:bId', component:BookComponent},
  {path:'booklistadmin', component:BooklistadminComponent,canActivate:[AuthGuard],data:{role : 1}},
  {path:'booklistmember', component:BooklistmemberComponent},
  {path:'report', component:ReportComponent},
  {path:'rentallist', component:RentallistComponent,canActivate:[AuthGuard],data:{role : 1}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
