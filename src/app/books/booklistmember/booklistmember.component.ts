import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/shared/customers.service';

@Component({
  selector: 'app-booklistmember',
  templateUrl: './booklistmember.component.html',
  styleUrls: ['./booklistmember.component.scss']
})
export class BooklistmemberComponent implements OnInit {

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

}
