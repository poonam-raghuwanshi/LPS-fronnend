import { Component, OnInit } from '@angular/core';
import { LoanplanService } from '../loanplan.service';
@Component({
  selector: 'app-viewloanplan',
  templateUrl: './viewloanplan.component.html',
  styleUrls: ['./viewloanplan.component.css']
})
export class ViewloanplanComponent implements OnInit {

  loanplanDetails;
  pageNo = 0;
  itemsPerPage = 2;
  totalItems;
  fieldName;
  searchValue;
  searchBy = "loan_type";
  constructor(public loanplanService: LoanplanService) { }

  ngOnInit(): void {
    this.loanplanService.getLoanPlans(this.pageNo , this.itemsPerPage, null).subscribe(resp => {
      console.log(resp);
      this.loanplanDetails = resp.content;
      this.totalItems = resp.totalElements;
    }, err => {
      console.log(err);
    },
    () => {
      console.log('get all loanplan request send');
    });
  }

  getLoanPlans(fieldName) {
    this.loanplanService.getLoanPlans(this.pageNo , this.itemsPerPage, fieldName).subscribe(data => {
      console.log(data);
      this.loanplanDetails = data.content;
      this.totalItems = data.totalElements
    })

  }
  getNextPageItems(event) {
   console.log(event);
   this.pageNo = event.pageIndex;
   this.itemsPerPage = event.pageSize;
   this.getLoanPlans(this.fieldName);
  }
  
  getSortedData() {
    console.log(this.fieldName);
    this.getLoanPlans(this.fieldName);
  }

}