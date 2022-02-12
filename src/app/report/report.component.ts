import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { CustomersService } from '../shared/customers.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(
    public userService:CustomersService,
    private authservice:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.userService.getMEB();
    this.userService.bindListBooks();
  }

}
