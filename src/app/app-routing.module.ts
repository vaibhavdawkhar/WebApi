import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { UserRegisterComponent } from './UserRegister/UserRegister.component';


const routes: Routes = [
  {redirectTo: '/UserRegister',pathMatch: 'full',  path : ''},

  {component : UserRegisterComponent,  path : 'UserRegister'},

  {component : UserDataComponent,  path : 'user-data'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
