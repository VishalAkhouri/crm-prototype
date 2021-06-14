import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { PanelsModule } from '../shared/panels/panels.module';
import { CustomerStoreModule } from './store/customer-store.module';

@NgModule({
  declarations: [
    AddCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomerRoutingModule,
    CustomerStoreModule,
    FormsModule,
    ReactiveFormsModule,
    PanelsModule
  ]
})
export class CustomerModule { }
