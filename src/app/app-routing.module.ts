import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer',
    children: [{
      path: '',
      loadChildren: () =>
        import('./customer/customer.module').then((m) => m.CustomerModule)
    }]
  },
  { path: '', redirectTo: 'customer/add', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
