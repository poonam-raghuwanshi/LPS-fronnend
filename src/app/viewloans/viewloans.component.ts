import { Component, OnInit } from '@angular/core';
import { LoansService } from '../loans.service';

@Component({
  selector: 'sapp-viewloans',
  templateUrl: './viewloans.component.html',
  styleUrls: ['./viewloans.component.css']
})
export class ViewloansComponent implements OnInit {

  loansDetails;
  pageNo = 0;
  itemsPerPage = 2;
  totalItems;
  fieldName;
  searchValue;
  searchBy = "loanId";
  constructor(public loansService: LoansService) { }

  ngOnInit(): void {
    this.loansService.getLoans(this.pageNo , this.itemsPerPage, null).subscribe(resp => {
      console.log(resp);
      this.loansDetails = resp.content;
      this.totalItems = resp.totalElements;
    }, err => {
      console.log(err);
    },
    () => {
      console.log('get all loans request send');
    });
  }

  getLoans(fieldName) {
    this.loansService.getLoans(this.pageNo , this.itemsPerPage, fieldName).subscribe(data => {
      console.log(data);
      this.loansDetails = data.content;
      this.totalItems = data.totalElements
    })

  }
  getNextPageItems(event) {
   console.log(event);
   this.pageNo = event.pageIndex;
   this.itemsPerPage = event.pageSize;
   this.getLoans(this.fieldName);
  }
  
  getSortedData() {
    console.log(this.fieldName);
    this.getLoans(this.fieldName);
  }

}
