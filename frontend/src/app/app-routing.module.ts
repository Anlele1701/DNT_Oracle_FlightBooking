import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Admin/layout/layout.component';
import { FlightListComponent } from './Admin/flight-list/flight-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/Admin/FlightList', pathMatch: 'full' },
  //ADMIN
  {path:'admin',
  component: LayoutComponent,
  children: [
    {
      path:'FlightList', component: FlightListComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
