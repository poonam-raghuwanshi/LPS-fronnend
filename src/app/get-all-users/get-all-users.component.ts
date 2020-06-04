import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {

  userDetails;
  pageNo = 0;
  itemsPerPage = 2;
  totalItems;
  fieldName;
  searchValue;
  searchBy = "fullName";
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers(this.pageNo , this.itemsPerPage, null).subscribe(resp => {
      console.log(resp);
      this.userDetails = resp.content;
      this.totalItems = resp.totalElements;
    }, err => {
      console.log(err);
    },
    () => {
      console.log('get all user request send');
    });
  }

  getUsers(fieldName) {
    this.userService.getUsers(this.pageNo , this.itemsPerPage, fieldName).subscribe(data => {
      console.log(data);
      this.userDetails = data.content;
      this.totalItems = data.totalElements
    })

  }
  getNextPageItems(event) {
   console.log(event);
   this.pageNo = event.pageIndex;
   this.itemsPerPage = event.pageSize;
   this.getUsers(this.fieldName);
  }
  
  getSortedData() {
    console.log(this.fieldName);
    this.getUsers(this.fieldName);
  }

}
