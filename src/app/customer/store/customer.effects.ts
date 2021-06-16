import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, switchMap } from 'rxjs/operators';
import { NotificationType } from "src/app/shared/constants/notification-type.const";
import { CustomerService } from "../services/customer.service";

import {
  addNotification,
  listCustomers,
  listCustomersFailure,
  listCustomersSuccess,
  saveCustomer, saveCustomerFailure, saveCustomerSuccess
} from './customer.actions';

@Injectable()
export class CustomerEffects {
  public saveCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveCustomer),
      switchMap(({ payload }) => {
        const customer = payload?.customer || {};
        return this.service.postCustomer(customer).pipe(
          switchMap((customer) => {
            return [
              saveCustomerSuccess({ customer }),
              addNotification({
                notification: {
                  code: 'saveSuccess',
                  message: 'Save Completed successfully!',
                  type: NotificationType.Success
                }
              })
            ]
          }),
          catchError((error) => [saveCustomerFailure(error)])
        )
      })
    )
  );

  public listCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listCustomers),
      switchMap(() => {
        return this.service.getCustomerList().pipe(
          switchMap((response) => {
            const customers = response as any[];
            return [listCustomersSuccess({ customers })]
          }),
          catchError((error) => [listCustomersFailure(error)])
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private service: CustomerService
  ) {}
}

