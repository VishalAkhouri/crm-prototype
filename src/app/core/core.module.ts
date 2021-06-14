import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateModule } from './template/template.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplateModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  exports: [
    TemplateModule
  ]
})
export class CoreModule { }
