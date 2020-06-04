import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

  customerDetails;
  pageNo = 0;
  itemsPerPage = 2;
  totalItems;
  fieldName;
  searchValue;
  searchBy = "full_name";
  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers(this.pageNo , this.itemsPerPage, null).subscribe(resp => {
      console.log(resp);
      this.customerDetails = resp.content;
      this.totalItems = resp.totalElements;
    }, err => {
      console.log(err);
    },
    () => {
      console.log('get all customer request send');
    });
  }

  getCustomers(fieldName) {
    this.customerService.getCustomers(this.pageNo , this.itemsPerPage, fieldName).subscribe(data => {
      console.log(data);
      this.customerDetails = data.content;
      this.totalItems = data.totalElements
    })

  }
  getNextPageItems(event) {
   console.log(event);
   this.pageNo = event.pageIndex;
   this.itemsPerPage = event.pageSize;
   this.getCustomers(this.fieldName);
  }
  
  getSortedData() {
    console.log(this.fieldName);
    this.getCustomers(this.fieldName);
  }

}

