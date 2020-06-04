import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoanplanComponent } from './loanplan/loanplan.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoaninfoComponent } from './loaninfo/loaninfo.component';
import { LoanprocessinginfoComponent } from './loanprocessinginfo/loanprocessinginfo.component';
import { GetAllUsersComponent }  from './get-all-users/get-all-users.component';

const routes: Routes = [
  { path: 'AddCustomer', component: AddcustomerComponent },
  { path: 'LoanPlan', component: LoanplanComponent },
  { path: "registeration" ,component: RegisterComponent},
  { path: "login", component:LoginComponent},
  { path:"loaninfo",component:LoaninfoComponent},
   {path:"loanprocess",component:LoanprocessinginfoComponent},
   {path:"get-all-users" ,component:GetAllUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
