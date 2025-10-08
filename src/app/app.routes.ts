
import { Routes } from '@angular/router'; 
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './public-layout/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { AddQuantityComponent } from './pages/add-quantity/add-quantity.component';
import { ChangePassComponent } from './pages/change-pass/change-pass.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ViewOrderComponent } from './pages/view-order/view-order.component';
import { ViewPaymentComponent } from './pages/view-payment/view-payment.component';


export const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
 
  { path: 'home', component: HomeComponent }, 
  
 
  { 
    path: 'signup', 
    component: SignupComponent,
    data: { hideNavbar: true } 
  }, 
  { 
    path: 'login', 
    component: LoginComponent,
    data: { hideNavbar: true } 
  }, 
  { 
    path: 'logout', 
    component: LogoutComponent,
    data: { hideNavbar: true } 
  }, 


  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'add-category', component: AddCategoryComponent }, 
  { path: 'add-item', component: AddItemComponent }, 
  { path: 'add-quantity', component: AddQuantityComponent }, 
  { path: 'change-pass', component: ChangePassComponent }, 
  { path: 'feedback', component: FeedbackComponent }, 
  { path: 'reports', component: ReportsComponent }, 
  { path: 'view-order', component: ViewOrderComponent }, 
  { path: 'view-payment', component: ViewPaymentComponent }, 
  
  { path: '**', redirectTo: 'login', data: { hideNavbar: true } } 
];


































// import { Routes } from '@angular/router'; 
// import { AddCategoryComponent } from './pages/add-category/add-category.component'; 
// import { AddItemComponent } from './pages/add-item/add-item.component'; 
// import { AddQuantityComponent } from './pages/add-quantity/add-quantity.component'; 
// import { LoginComponent } from './auth/login/login.component'; 
// import { SignupComponent } from './auth/signup/signup.component'; 
// import { ChangePassComponent } from './pages/change-pass/change-pass.component'; 
// import { FeedbackComponent } from './pages/feedback/feedback.component'; 
// import { ReportsComponent } from './pages/reports/reports.component'; 
// import { ViewOrderComponent } from './pages/view-order/view-order.component'; 
// import { ViewPaymentComponent } from './pages/view-payment/view-payment.component'; 
// import { HomeComponent } from './public-layout/home/home.component'; 
// import { LogoutComponent } from './pages/logout/logout.component'; 
// import { DashboardComponent } from './pages/dashboard/dashboard.component'; 

// export const routes: Routes 
// = [ { path: '', redirectTo: '', pathMatch: 'full' }, 
//   { path: 'home', component: HomeComponent }, 
//   { path: 'dashboard', component: DashboardComponent }, 
//   { path: 'add-category', component: AddCategoryComponent }, 
//   { path: 'add-item', component: AddItemComponent }, 
//   { path: 'add-quantity', component: AddQuantityComponent }, 
//   { path: 'signup', component: SignupComponent }, 
//   { path: 'login', component: LoginComponent }, 
//   { path: 'logout', component: LogoutComponent }, 
//   { path: 'change-pass', component: ChangePassComponent }, 
//   { path: 'feedback', component: FeedbackComponent }, 
//   { path: 'reports', component: ReportsComponent }, 
//   { path: 'view-order', component: ViewOrderComponent }, 
//   { path: 'view-payment', component: ViewPaymentComponent }, 
//   { path: '**', redirectTo: 'login' } ];