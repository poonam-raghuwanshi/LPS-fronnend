import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 passwordType = `password`;
 iconClass = `fas fa-eye`;

 message: string;
  constructor(private userService: UserService, private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    console.log(form.value);
    this.userService.loginUser(form.value).subscribe(resp => {
      console.log(resp);
      if (resp.error) {
        this.message = resp.message;
        setTimeout(() => {
          this.message = null;
        }, 5000);
      } else {
        localStorage.setItem('userData',JSON.stringify(resp));
        // console.log(localStorage.getItem('userData'));
        if (resp.role === 'admin') {
          this.router.navigateByUrl('/get-all-users');
        } else if (resp.role === 'Customer') {
          this.router.navigateByUrl('/loaninfo');
        }
      }
    })
  }

  getAddLoginData(addLoginData) {
    this.userService.getAddUserRequest(addLoginData.value).subscribe(resp => {
      console.log(resp);
    }, err => {
      console.log(err);
    }, () => {
      console.log('login request sent');
     });
    }

  showPassword() {
    if (this.passwordType === `password`) {
      this.passwordType = `text`;
      this.iconClass = 'fas fa-eye-slash';
    } else {
      this.passwordType = `password`;
      this.iconClass = `fas fa-eye`;
    }
  }


}
