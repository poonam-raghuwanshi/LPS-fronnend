import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  backendUrl = 'http://localhost:8080/api';

  constructor(public http: HttpClient) { }

  getAddCustomerRequest(customerDetails) {
    return this.http.post(`${this.backendUrl}/add-customers-cus`, customerDetails, { withCredentials: true });
  }
  getAllCustomers() {
    return this.http.get(`${this.backendUrl}/get-all-customers`, { withCredentials: true } );
   }
 
   getCustomers(pageNo, itemsPerPage, sortBy) {
     if(!sortBy) {
     return this.http.get<{content: any[], totalElements: number}>(`${this.backendUrl}/customers/${pageNo}/${itemsPerPage}`);
     } else {
       return this.http.get<{content: any[], totalElements: number}>(`${this.backendUrl}/customers/${pageNo}/${itemsPerPage}/${sortBy}`);
 
     }
   }
 
 }
 
