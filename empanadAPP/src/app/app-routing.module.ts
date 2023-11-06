import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionComponent } from './pages/selection/selection.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: 'selection', component: SelectionComponent },
  { path: 'order', component: OrderComponent },
  { path: '', redirectTo: '/selection', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/selection' }, // Handle 404 errors
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
