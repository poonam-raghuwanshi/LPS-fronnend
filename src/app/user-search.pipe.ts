import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: any[], searchValue: any, fieldName): any {

   if(!users) {
     return [];
   }
   if(!searchValue) {
     return users;
   }
   searchValue = searchValue.toLowerCase();

    return users.filter(user => {
      if(isNaN(searchValue)) {
      return user[fieldName].toLowerCase().includes(searchValue);
      } else {
        return user[fieldName].toString().toLowerCase().includes(searchValue);
      }
    });

  }

}
