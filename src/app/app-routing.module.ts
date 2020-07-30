import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminTemplateComponent } from './template/admin-template/admin-template.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { FormdataComponent } from './pages/formdata/formdata.component';
import { FormshowComponent } from './pages/formshow/formshow.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin', component: AdminTemplateComponent, canActivate: [AuthGuard], children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'todo-list', component: TodoListComponent
      },
      {
        path: 'form', component: FormdataComponent
      },
      {
        path: 'form-show', component: FormshowComponent
      }
    ]
  },
  {
    path: '**', redirectTo: "home"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
