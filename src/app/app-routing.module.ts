import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'angular-bootstrap-md';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),ChartsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
