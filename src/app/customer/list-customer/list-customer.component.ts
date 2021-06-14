import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CustomerModel } from '../models/customer.model';
import { CustomerStore } from '../store/customer.store';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit, OnDestroy {
  public subscription = new Subscription();
  public customersList$ = this.customerStore.customersList$;
  public filteredCustomersList: CustomerModel[] = []

  constructor(private customerStore: CustomerStore) { }

  ngOnInit(): void {
    this.customerStore.listCustomers();
    this.subscribeCustomersList()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private subscribeCustomersList() {
    this.subscription.add(this.customersList$.pipe(
      filter(Boolean)
    ).subscribe((customersList: any) => {
      this.filteredCustomersList = customersList;
    }))
  }

}
