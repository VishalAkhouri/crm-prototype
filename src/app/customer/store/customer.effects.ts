import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, switchMap } from 'rxjs/operators';

import {
  saveCustomer, saveCustomerFailure, saveCustomerSuccess
} from './customer.actions';

@Injectable()
export class CustomerEffects {
  public saveCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveCustomer),
      switchMap(({ payload }) => {
        const customer = payload?.customer || {};
         return [saveCustomerSuccess({ customer })]
      }),
      catchError((error) => [saveCustomerFailure(error)])
    )
  );

  constructor(
    private actions$: Actions
  ) {}
}

