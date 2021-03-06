import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManuComponent } from './manu/manu.component';
import { MakefoodAddComponent } from './makefood-add/makefood-add.component';
import { MakefoodListComponent } from './makefood-list/makefood-list.component';
import { MakefoodDetailComponent } from './makefood-detail/makefood-detail.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { ReportProblemComponent } from './report-problem/report-problem.component';
import { ShowReportComponent } from './show-report/show-report.component';
import { BusinessRegisterComponent } from './business-register/business-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },

  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'manu',
    component: ManuComponent
  },
  {
    path: 'app',
    component:AppComponent
  },
  
  { path: 'makefood-list',component : MakefoodListComponent },
  { path: 'makefood-add', component : MakefoodAddComponent},
  { path: 'makefood-detail/:id', component : MakefoodDetailComponent},

  { path: 'add-store', component : AddStoreComponent},

  { path: 'report-problem', component : ReportProblemComponent},
  { path: 'show-report-problem', component : ShowReportComponent},

  { path: 'business-register', component : BusinessRegisterComponent},

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],


  exports : [RouterModule]
})
export class AppRoutingModule { }
