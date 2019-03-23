import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee';
import {EmployeeService} from '../services/employee.service';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material';
import {RegEmployeeComponent} from '../reg-employee/reg-employee.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RequestService} from '../services/request.service';
import {AppURL} from '../shared/appUrl';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }

  employees: Employee[];
  user: FormGroup;
  public url = AppURL.getUrlEmployee();
  constructor(private employeeService: EmployeeService, public dialog: MatDialog, private requestService: RequestService) {
  }
  // "firstName": "John kintaro",
  // "lastName": "Doe",
  // "image": null,
  // "jobPosition": null,
  // "jobCode": null,
  // "featured": true,
  // "jobDescription": "Descripcion de job"
  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
    this.user = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      jobPosition: new FormControl('', Validators.required),
      jobCode: new FormControl('', Validators.required),
      featured: new FormControl('', Validators.required),
      jobDescription: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    this.requestService.add(this.url, this.user.value, []).subscribe(
      response => {
      //  this.user.reset();
        //  this.router.navigate(['/compra']);
      },
      error => {
        console.log(error);
      }
    );
    console.log( this.user.value);
  }

  delete() {
    this.requestService.add(this.url, this.user.value, []).subscribe(
      response => {
        //  this.user.reset();
        //  this.router.navigate(['/compra']);
      },
      error => {
        console.log(error);
      }
    );
    console.log( this.user.value);
  }
  openRegEmployee() {
    this.dialog.open(RegEmployeeComponent, {width: '500px', height: '450px'});
  }

}
