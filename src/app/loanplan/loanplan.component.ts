import { Component, OnInit, ViewChild } from '@angular/core';
import { LoanplanService } from '../loanplan.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-loanplan',
  templateUrl: './loanplan.component.html',
  styleUrls: ['./loanplan.component.css']
})
export class LoanplanComponent {

  @ViewChild('addLoanPlanForm') addLoanPlanData: NgForm;

  constructor(public service: LoanplanService) { }

  ngOnInit() {
  }

  getAddLoanPlanData(addCustomerData) {
  this.service.getAddLoanPlanRequest(this.addLoanPlanData.value).subscribe(resp => {
    console.log(resp);
  }, err => {
    console.log(err);
  }, () => {
    console.log('add loanplan request sent');
   });
  }
  
}

