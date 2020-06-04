import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  backendUrl = 'http://localhost:8080/api';

  constructor(public http: HttpClient, private router: Router) { }

  getAddUserRequest(userDetails) {
    return this.http.post(`${this.backendUrl}/users`, userDetails, { withCredentials: true });
  }

  getAddLoginRequest(userDetails) {
    return this.http.post(`${this.backendUrl}/login`, userDetails, { withCredentials: true });
  }

  registerUser(userDetails) {
    return this.http.post<any>(`${this.backendUrl}/users`, userDetails);
  }

  loginUser(userCredentials) {
    return this.http.post<any>(`${this.backendUrl}/login`, userCredentials);
  }

  getAllUsers() {
   return this.http.get(`${this.backendUrl}/users`, { withCredentials: true } );
  }

  getUsers(pageNo, itemsPerPage, sortBy) {
    if(!sortBy) {
    return this.http.get<{content: any[], totalElements: number}>(`${this.backendUrl}/users/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{content: any[], totalElements: number}>(`${this.backendUrl}/users/${pageNo}/${itemsPerPage}/${sortBy}`);

    }
  }
  isUser(): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.role === 'user') {
      return true;
    } else {
      return false;
    }
  } 
  
  isAdmin(): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.role === 'user') {
      return true;
    } else {
      return false;
    }
  } 

  isLogged(): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.role === 'user') {
      return true;
    } else {
      return false;
    }
  } 

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  
}
