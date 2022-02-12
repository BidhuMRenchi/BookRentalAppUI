import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/shared/customers.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {

 //declare varaible
 page:number=1;
 filter:string;

 constructor(
   public userService:CustomersService,
   private router:Router
 ) { }

  ngOnInit(): void {
    console.log("Welcome to Life Cycle Hook");
    this.userService.bindListUsers();
  }

  //Edit User
  updateUser(cId : number){
    console.log("Editing : "+cId);
    // navigate to edit form
    this.router.navigate(['customer',cId])
  }

  addCustomer(){
    this.router.navigate(['customer']);
  }

  //Delete User
  deleteUser(cId : number){
    console.log("Deleting : "+cId);
    if(confirm('Are you sure to delete this record ? ')){
      this.userService.deleteUser(cId).subscribe(
        response=>{
          this.userService.bindListUsers();
        },
        error=>{
          console.log(error);
        }
      );
    }
  }

}
