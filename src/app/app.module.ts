import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerlistComponent } from './customers/customerlist/customerlist.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BooklistadminComponent } from './books/booklistadmin/booklistadmin.component';
import { BooklistmemberComponent } from './books/booklistmember/booklistmember.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { RentalsComponent } from './rentals/rentals.component';
import { RentallistComponent } from './rentals/rentallist/rentallist.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/auth.guard';
import { AuthInterceptor } from './shared/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerlistComponent,
    BooksComponent,
    BookComponent,
    BooklistadminComponent,
    BooklistmemberComponent,
    LoginComponent,
    ReportComponent,
    RentalsComponent,
    RentallistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
