import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomersService } from 'src/app/shared/customers.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookId:number=0;
  constructor(
    public userService:CustomersService,
    private route: ActivatedRoute,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {

  this.userService.bindListGenres();  
   
  //get userId from Activate route
  this.bookId = this.route.snapshot.params['bId'];
  if (this.bookId != 0 || this.bookId != null) {
    this.userService.getBookById(this.bookId).subscribe(
      result => {
        console.log("Retrieving get By Id");
        console.log(result);

        // //format the date : yyyy-MM-DD
        // var datePipe = new DatePipe("en-UK");
        // let formatedDate: any = datePipe.transform(result.Doj, 'yyyy-MM-dd')
        // result.Doj = formatedDate;

        this.userService.formData1 = Object.assign({}, result);

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
  let addId = this.userService.formData1.BId;
  if (addId == 0 || addId == null) {//INSERT
    console.log("Inserting 001");
    this.insertBookRecord(form);
  }
  else {
    this.updateBookRecord(form);
  }
}//end OnSubmit

//insert MEthod
insertBookRecord(form?: NgForm) {
  console.log("Inserting a rercord");
  this.userService.insertBook(form.value).subscribe(
    (result) => {
      console.log(result);
      this.toastrService.success('BOOK Record has been Inserted','BOOK RENTAL APP');
    },
    (error) => {
      console.log(error);
    }
  );
}//End Insert Method

//Update
updateBookRecord(form?: NgForm) {
  console.log("Updating a record");
  this.userService.updateBook(form.value).subscribe(
    (result) => {
      console.log(result);
      console.log("Updated a record");
      this.toastrService.success('BOOK Record has been Updated','BOOK RENTAL APP');
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
