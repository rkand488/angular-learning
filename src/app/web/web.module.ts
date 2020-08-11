import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WebRoutingModule } from './web-routing.module';
import { ContactusComponent } from './contactus/contactus.component';
import { WebComponent } from './web.component';


@NgModule({
  declarations: [ContactusComponent, WebComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class WebModule { }
