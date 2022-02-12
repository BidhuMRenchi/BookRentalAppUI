import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomersService } from 'src/app/shared/customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  userId:number=0;
  constructor(
    public userService:CustomersService,
    private route: ActivatedRoute,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {

    //get userId from Activate route
    this.userId = this.route.snapshot.params['CId'];
    if (this.userId != 0 || this.userId != null) {
      this.userService.getUserById(this.userId).subscribe(
        result => {
          console.log("Retrieving get By Id");
          console.log(result);

          // //format the date : yyyy-MM-DD
          // var datePipe = new DatePipe("en-UK");
          // let formatedDate: any = datePipe.transform(result.Doj, 'yyyy-MM-dd')
          // result.Doj = formatedDate;

          this.userService.formData = Object.assign({}, result);

        },
        error => {
          console.log(error);
        }
      );
    }
  }//end ngOnInIt

  onSubmit(form: NgForm) {
    console.log(form.value);

    //insert/UPDATE
    let addId = this.userService.formData.CId;
    if (addId == 0 || addId == null) {//INSERT
      console.log("Inserting 001");
      this.insertUserRecord(form);
    }
    else {
      this.updateUserRecord(form);
    }
  }//end OnSubmit

  //insert MEthod
  insertUserRecord(form?: NgForm) {
    console.log("Inserting a rercord");
    this.userService.insertUser(form.value).subscribe(
      (result) => {
        console.log(result);
        this.toastrService.success('User Record has been Inserted','DATING APP');
      },
      (error) => {
        console.log(error);
      }
    );
  }//End Insert Method

  //Update
  updateUserRecord(form?: NgForm) {
    console.log("Updating a record");
    this.userService.updateUser(form.value).subscribe(
      (result) => {
        console.log(result);
        console.log("Updated the record");
        this.toastrService.success('User Record has been Updated','DATING APP');
        this.resetForm(form);
      },
      (error) => {
        console.log(error);
      }
    );
  }//end Update 

  //clear all contents after submit -- Intialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }//end ResetForm
}
