import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from '../views/pages/blank/blank.component';
import {MainComponent} from '../views/layouts/main/main.component';
import {AuthComponent} from '../views/layouts/auth/auth.component';
import {LoginComponent} from '../views/pages/login/login.component';
import { DashboardComponent } from '../views/pages/dashboard/dashboard.component';
import {IndexMembersComponent} from '../views/pages/members/index-members/index-members.component';
import {CreateMembersComponent} from '../views/pages/members/create-members/create-members.component';
import {ShowMemebersComponent} from '../views/pages/members/show-memebers/show-memebers.component';

const routes: Routes = [
  // Auth pages
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full'}
    ]
  },
  // Admin pages
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: BlankComponent, pathMatch: 'full'},
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'members',
        component: IndexMembersComponent
      },
      {
        path: 'members/create',
        component: CreateMembersComponent
      },
      {
        path: 'members/show/:memberId',
        component: ShowMemebersComponent
      }
    ]
  },
  // Otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
