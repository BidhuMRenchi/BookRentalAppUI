import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/shared/customers.service';

@Component({
  selector: 'app-rentallist',
  templateUrl: './rentallist.component.html',
  styleUrls: ['./rentallist.component.scss']
})
export class RentallistComponent implements OnInit {

  //declare varaible
 page:number=1;
 filter:string;

 constructor(
   public userService:CustomersService,
   private router:Router
 ) { }

  ngOnInit(): void {
    console.log("Welcome to Life Cycle Hook");
    this.userService.bindListRentals();
  }

  //Edit 
  updateRentals(rId : number){
    console.log("Editing : "+rId);
    // navigate to edit form
    this.router.navigate(['rental',rId])
  }

  //Delete 
  deleteRentals(rId : number){
    console.log("Deleting : "+rId);
    if(confirm('Are you sure to delete this record ? ')){
      this.userService.deleteRentals(rId).subscribe(
        response=>{
          this.userService.bindListRentals();
        },
        error=>{
          console.log(error);
        }
      );
    }
  }

}
