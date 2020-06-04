import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  backendUrl = 'http://localhost:8080/api';

  constructor(public http: HttpClient) { }
  getAddLoansRequest(loansDetails) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    let token = userData.token;
    return this.http.post(`${this.backendUrl}/add-loans-cus`, loansDetails, { withCredentials: true });
  }

  getAllLoans() {
   return this.http.get(`${this.backendUrl}/ get-all-loans-lad`, { withCredentials: true } );
  }

  getLoans(pageNo, itemsPerPage, sortBy) {
    if(!sortBy) {
    return this.http.get<{content: any[], totalElements: number}>(`${this.backendUrl}/loans/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{content: any[], totalElements: number}>(`${this.backendUrl}/loans/${pageNo}/${itemsPerPage}/${sortBy}`);

    }
  }

}


