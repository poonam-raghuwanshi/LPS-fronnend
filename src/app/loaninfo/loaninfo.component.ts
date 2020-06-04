import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoansService } from '../loans.service';

@Component({
  selector: 'app-loaninfo',
  templateUrl: './loaninfo.component.html',
  styleUrls: ['./loaninfo.component.css']
})
export class LoaninfoComponent {

  @ViewChild('addLoaninfoForm') addLoaninfoData: NgForm;

  constructor(public service: LoansService) { }

  ngOnInit() {
  }

  getAddLoaninfoData(addLoaninfoData) {

    this.service.getAddLoansRequest(this.addLoaninfoData.value).subscribe(resp => {
    console.log(resp);
    }, err => {
    console.log(err);
    }, () => {
    console.log('add loans request sent');
    });
    }
  
}

