import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';

const routes: Routes = [
  { path: '', component: AddCustomerComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'list', component: ListCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
