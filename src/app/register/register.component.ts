import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({

  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  message: String;

  @ViewChild('addRegisterForm') addUserData: NgForm;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  getAddUserData(addUserData) {
  this.userService.getAddUserRequest(addUserData.value).subscribe(resp => {
    console.log(resp);
  }, err => {
    console.log(err);
  }, () => {
    console.log('add Register request sent');
   });
  }

  register(form: NgForm) {
    console.log(form.value);
    this.userService.registerUser(form.value).subscribe(resp => {
      console.log(resp);
      form.reset();
      this.message = resp.message;
      setTimeout(() => {
        this.message = null;
      },5000);

    });
      
  }
  
}
