import { Injectable } from '@angular/core';
import { Customers } from './customers';
import { Books } from './books'
import { Genres } from './genres'
import { Rentals } from './rentals'
import { Roles } from './roles'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customers : Customers[]; //all customers details
  formData : Customers = new Customers(); //one customers data 

  books:Books[];
  formData1 : Books = new Books();

  genres:Genres[];
  genres1:Genres[];
  formData2 : Genres = new Genres();

  rentals:Rentals[];
  formData3 : Rentals = new Rentals();

  roles:Roles[];
  formData4 : Roles = new Roles();

  constructor(private httpClient: HttpClient) { }

  // BOOKS CRUD

  //Retrieval
  bindListBooks(){
    this.httpClient.get(environment.apiUrl+"/api/books")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.books=response as Books[];
      }
    );
  }

  //Retrieval
  bindListGenres(){
    this.httpClient.get(environment.apiUrl+"/api/books/genres")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.genres=response as Genres[];
      }
    );
  }

  getBookById(id:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/books/book/"+id);
  }

  insertBook(user:Books):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/books",user);
  }

  updateBook(user:Books):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/books",user);
  }

  deleteBook(id : number){
    return this.httpClient.delete(environment.apiUrl+"/api/books/"+id);
  }

  //USER CRUDS

  //Retrieval
  bindListUsers(){
    this.httpClient.get(environment.apiUrl+"/api/customers")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.customers=response as Customers[];
      }
    );
  }

  //Retrieval
  bindListRoles(){
    this.httpClient.get(environment.apiUrl+"/api/customers/roles")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.genres=response as Genres[];
      }
    );
  }

  getUserById(id:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/customers/"+id);
  }

  insertUser(user:Customers):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/customers",user);
  }

  updateUser(user:Customers):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/customers",user);
  }

  deleteUser(id : number){
    return this.httpClient.delete(environment.apiUrl+"/api/customers/"+id);
  }


  //RENTAL CRUDS

  //Retrieval
  bindListRentals(){
    this.httpClient.get(environment.apiUrl+"/api/books/rentals")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.rentals=response as Rentals[];
      }
    );
  }

  insertRentals(user:Rentals):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/books/rentals",user);
  }

  updateRentals(user:Rentals):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/books/rentals",user);
  }

  deleteRentals(id : number){
    return this.httpClient.delete(environment.apiUrl+"/api/books/rentals/"+id);
  }


  // ----------------REPORTS------------------

  //Most Expensive Books
  getMEB(){
    this.httpClient.get(environment.apiUrl+"/api/books/expensive")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.genres1=response as Genres[];
        console.log(this.genres);
      }
    );
  }

}
