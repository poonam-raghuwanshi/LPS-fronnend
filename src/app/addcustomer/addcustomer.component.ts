import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {

  @ViewChild('addCustomerForm') addCustomerData: NgForm;

  constructor(public service: CustomerService) { }

  ngOnInit() {
  }

  getAddCustomerData(addCustomerData) {
  this.service.getAddCustomerRequest(addCustomerData.value).subscribe(resp => {
    console.log(resp);
  }, err => {
    console.log(err);
  }, () => {
    console.log('add customer request sent');
   });
  }
  
}
