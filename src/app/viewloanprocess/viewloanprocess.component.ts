import { Component, OnInit } from '@angular/core';
import { LoanprocessService } from '../loanprocess.service';

@Component({
  selector: 'app-viewloanprocess',
  templateUrl: './viewloanprocess.component.html',
  styleUrls: ['./viewloanprocess.component.css']
})
export class ViewloanprocessComponent implements OnInit {

  loanprocessDetails;
  pageNo = 0;
  itemsPerPage = 2;
  totalItems;
  fieldName;
  searchValue;
  searchBy = "loanId";
  constructor(public loanprocessService: LoanprocessService) { }

  ngOnInit(): void {
    this.loanprocessService.getLoanprocess(this.pageNo , this.itemsPerPage, null).subscribe(resp => {
      console.log(resp);
      this.loanprocessDetails = resp.content;
      this.totalItems = resp.totalElements;
    }, err => {
      console.log(err);
    },
    () => {
      console.log('get all loanprocess request send');
    });
  }

  getLoanprocess(fieldName) {
    this.loanprocessService.getLoanprocess(this.pageNo , this.itemsPerPage, fieldName).subscribe(data => {
      console.log(data);
      this.loanprocessDetails = data.content;
      this.totalItems = data.totalElements
    })

  }
  getNextPageItems(event) {
   console.log(event);
   this.pageNo = event.pageIndex;
   this.itemsPerPage = event.pageSize;
   this.getLoanprocess(this.fieldName);
  }
  
  getSortedData() {
    console.log(this.fieldName);
    this.getLoanprocess(this.fieldName);
  }

}

