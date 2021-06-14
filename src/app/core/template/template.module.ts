import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuLinksComponent } from './menu-links/menu-links.component';
import { RouterModule } from '@angular/router';

const components = [
  HeaderComponent,
  FooterComponent,
  MenuLinksComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: components
})
export class TemplateModule { }
