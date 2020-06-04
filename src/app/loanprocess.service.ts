import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanprocessService {
  backendUrl = 'http://localhost:8080/api';

  constructor(public http: HttpClient) { }

  // getAddLoanprocessRequest(loanprocessDetails) {
  //   return this.http.post(`${this.backendUrl}/add-loanplans-lad`, loanprocessDetails, { withCredentials: true });
  // }

  getAllLoanprocess() {
   return this.http.get(`${this.backendUrl}/get-all-loanprocess`, { withCredentials: true } );
  }

  getLoanprocess(pageNo, itemsPerPage, sortBy) {
    if(!sortBy) {
    return this.http.get<{content: any[], totalElements: number}>(`${this.backendUrl}/loanprocess/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{content: any[], totalElements: number}>(`${this.backendUrl}/loanprocess/${pageNo}/${itemsPerPage}/${sortBy}`);

    }
  }
}