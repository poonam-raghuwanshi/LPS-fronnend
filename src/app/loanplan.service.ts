import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoanplanService {

  backendUrl = 'http://localhost:8080/api';

  constructor(public http: HttpClient) { }

  getAddLoanPlanRequest(loanplanDetails) {
    return this.http.post(`${this.backendUrl}/add-loanplans-lad`, loanplanDetails, { withCredentials: true });
  }

  getAllLoanPlans() {
   return this.http.get(`${this.backendUrl}/ get-all-loanplans`, { withCredentials: true } );
  }

  getLoanPlans(pageNo, itemsPerPage, sortBy) {
    if(!sortBy) {
    return this.http.get<{content: any[], totalElements: number}>(`${this.backendUrl}/loanPlans/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{content: any[], totalElements: number}>(`${this.backendUrl}/loanPlans/${pageNo}/${itemsPerPage}/${sortBy}`);

    }
  }

}
