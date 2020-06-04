import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loanplanSearch'
})
export class LoanplanSearchPipe implements PipeTransform {

  transform(loanplans: any[], searchValue: any, fieldName): any {

    if(!loanplans) {
      return [];
    }
    if(!searchValue) {
      return loanplans;
    }
    searchValue = searchValue.toLowerCase();
 
     return loanplans.filter(loanplan => {
       if(isNaN(searchValue)) {
       return loanplan[fieldName].toLowerCase().includes(searchValue);
       } else {
         return loanplan[fieldName].toString().toLowerCase().includes(searchValue);
       }
     });
 
   }
 
 }
 
