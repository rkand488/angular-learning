import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactusComponent } from './contactus/contactus.component';
import { WebComponent } from './web.component';

const routes: Routes = [
  { path: "", component: WebComponent },
  { path: "contact-us", component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
