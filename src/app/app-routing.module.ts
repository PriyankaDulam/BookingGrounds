import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGroundComponent } from './add-ground/add-ground.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { EditGroundComponent } from './edit-ground/edit-ground.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path:'addGround',component:AddGroundComponent},
  {path:'',component:AdminLoginComponent},
  {path:'adminNav',component:AdminNavComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'signUp',component:AdminSignupComponent},
  {path:'editGround',component:EditGroundComponent},
  {path:'displayUsers',component:DisplayUsersComponent},
  {path:'editUser', component:EditUserComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
