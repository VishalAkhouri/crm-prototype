import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplateModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({name: 'CRM Prototype'}),
  ],
  exports: [
    TemplateModule
  ]
})
export class CoreModule { }
