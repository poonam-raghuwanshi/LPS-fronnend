import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { LoanplanComponent } from './loanplan/loanplan.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoaninfoComponent } from './loaninfo/loaninfo.component';
import { LoanprocessinginfoComponent } from './loanprocessinginfo/loanprocessinginfo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LadNavComponent } from './lad-nav/lad-nav.component';
import { CustomerNavComponent } from './customer-nav/customer-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserSearchPipe } from './user-search.pipe';
import { ViewloanplanComponent } from './viewloanplan/viewloanplan.component';
import { LoanplanSearchPipe } from './loanplan-search.pipe';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { CustomerSearchPipe } from './customer-search.pipe';
import { ViewloansComponent } from './viewloans/viewloans.component';
import { LoanSearchPipe } from './loan-search.pipe';
import { ViewloanprocessComponent } from './viewloanprocess/viewloanprocess.component';
import { LoanprocessSearchPipe } from './loanprocess-search.pipe';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { RequestInterceptor } from './request.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
    LoanplanComponent,
    AddcustomerComponent,
    RegisterComponent,
    LoginComponent,
    LoaninfoComponent,
    LoanprocessinginfoComponent,
    GetAllUsersComponent,
    AdminNavComponent,
    LadNavComponent,
    CustomerNavComponent,
    HomeComponent,
    AboutComponent,
    UserSearchPipe,
    ViewloanplanComponent,
    LoanplanSearchPipe,
    ViewcustomerComponent,
    CustomerSearchPipe,
    ViewloansComponent,
    LoanSearchPipe,
    ViewloanprocessComponent,
    LoanprocessSearchPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'AddCustomer', component: AddcustomerComponent},
      { path: 'LoanPlan', component: LoanplanComponent},
      { path: 'registeration', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: 'loaninfo', component: LoaninfoComponent},
      { path: 'loanprocess', component: LoanprocessinginfoComponent},
      { path: 'get-all-users', component: GetAllUsersComponent, data:{roles: ['admin']}, canActivate: [AuthGuard]},
      { path: 'admin-nav', component: AdminNavComponent},
      { path: 'lad-nav', component: LadNavComponent},
      { path: 'customer-nav', component: CustomerNavComponent},
      { path: 'viewloanplan', component: ViewloanplanComponent},
      { path: 'viewcustomer', component: ViewcustomerComponent},
      { path: 'viewloans', component: ViewloansComponent},
      { path: 'viewloanprocess', component: ViewloanprocessComponent}
    ])
  
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
