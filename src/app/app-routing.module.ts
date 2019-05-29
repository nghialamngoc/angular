import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component'

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent }
]

@NgModule({  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
