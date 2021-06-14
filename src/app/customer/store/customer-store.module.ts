import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CustomerReducer } from './customer.reducers';
import { CustomerEffects } from './customer.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('customer', CustomerReducer),
    EffectsModule.forFeature([CustomerEffects]),
  ],
  exports: []
})
export class CustomerStoreModule {}
