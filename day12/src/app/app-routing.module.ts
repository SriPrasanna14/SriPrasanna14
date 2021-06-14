import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './base/datatable/datatable.component';
import { LoginComponent } from './base/login/login.component';
import { RegisterComponent } from './base/register/register.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'reg', component: RegisterComponent },
  { path: 'log', component: LoginComponent },
  { path: 'table', component: DatatableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
