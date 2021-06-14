import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container/main-container.component';

const components = [
  MainContainerComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class PanelsModule { }
