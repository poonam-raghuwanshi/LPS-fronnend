import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loanSearch'
})
export class LoanSearchPipe implements PipeTransform {

  transform(loans: any[], searchValue: any, fieldName): any {

    if(!loans) {
      return [];
    }
    if(!searchValue) {
      return loans;
    }
    searchValue = searchValue.toLowerCase();
 
     return loans.filter(loan => {
       if(isNaN(searchValue)) {
       return loan[fieldName].toLowerCase().includes(searchValue);
       } else {
         return loan[fieldName].toString().toLowerCase().includes(searchValue);
       }
     });
 
   }
 
 }
 

