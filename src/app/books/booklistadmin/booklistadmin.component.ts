import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../../shared/customers.service'

@Component({
  selector: 'app-booklistadmin',
  templateUrl: './booklistadmin.component.html',
  styleUrls: ['./booklistadmin.component.scss']
})
export class BooklistadminComponent implements OnInit {

  //declare varaible
  page:number=1;
  filter:string;

  constructor(
    public userService:CustomersService,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("Welcome to Life Cycle Hook");
    this.userService.bindListBooks();
  }

  addBook(){
    this.router.navigate(['book']);
  }

  //Edit Book
  updateBook(bId : number){
    console.log("Editing : "+bId);
    // navigate to edit form
    this.router.navigate(['book',bId])
  }

  //Delete Book
  deleteBook(bId : number){
    console.log("Deleting : "+bId);
    if(confirm('Are you sure to delete this record ? ')){
      this.userService.deleteBook(bId).subscribe(
        response=>{
          this.userService.bindListBooks();
        },
        error=>{
          console.log(error);
        }
      );
    }
  }

}
