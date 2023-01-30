import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeUserFormComponent } from './components/type-user-form/type-user-form.component';
import { TypeUserListComponent } from './components/type-user-list/type-user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'typeuser',
    pathMatch:'full'
  },
  {
    path:"users",
    component:UserListComponent
  },
  {
    path:"usersform",
    component:UserFormComponent
  },
  {
  path:"usersform/:id",
  component:UserFormComponent
  },
  {
    path:"user/:id",
    component:UserProfileComponent
  },

  {
    path:'typeuser',
    component:TypeUserListComponent
  },
  {
    path:'typeuser-form',
    component:TypeUserFormComponent
  },
  {
    path:'typeuser-form/:id',
    component:TypeUserFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
