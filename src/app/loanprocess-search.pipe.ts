import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loanprocessSearch'
})
export class LoanprocessSearchPipe implements PipeTransform {

  transform(loanprocess: any[], searchValue: any, fieldName): any {

    if(!loanprocess) {
      return [];
    }
    if(!searchValue) {
      return loanprocess;
    }
    searchValue = searchValue.toLowerCase();
 
     return loanprocess.filter(loanprocess => {
       if(isNaN(searchValue)) {
       return loanprocess[fieldName].toLowerCase().includes(searchValue);
       } else {
         return loanprocess[fieldName].toString().toLowerCase().includes(searchValue);
       }
     });
 
   }
 
 }
 
