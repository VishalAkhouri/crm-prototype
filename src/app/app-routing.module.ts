import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';

const routes: Routes = [
  {
    path: 'customer',
    children: [{
      path: '',
      loadChildren: () =>
        import('./customer/customer.module').then((m) => m.CustomerModule)
    }]
  },
  // { path: 'customer/add', component: AddCustomerComponent },
  // { path: 'customer/list', component: ListCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
