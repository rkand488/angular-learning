import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminTemplateComponent } from './template/admin-template/admin-template.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { FormdataComponent } from './pages/formdata/formdata.component';
import { FormshowComponent } from './pages/formshow/formshow.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { WebModule } from './web/web.module';
import { UserModule } from './user/user.module';
import { CountrycodePipe } from './pipes/countrycode.pipe';
import { ChangeColorDirective } from './directives/change-color.directive';
import { CountryEditComponent } from './pages/country-edit/country-edit.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ChatInboxComponent } from './pages/chat-inbox/chat-inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DashboardComponent,
    AdminTemplateComponent,
    TodoListComponent,
    DashboardCardComponent,
    FormdataComponent,
    FormshowComponent,
    CountryListComponent,
    CountrycodePipe,
    ChangeColorDirective,
    CountryEditComponent,
    PagenotfoundComponent,
    ChatInboxComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebModule,
    UserModule
  ],
  exports: [DashboardCardComponent],
  providers: [Title, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
