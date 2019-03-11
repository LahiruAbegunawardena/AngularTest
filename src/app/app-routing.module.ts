import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ViewDtaComponent} from "./components/view-dta/view-dta.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path:'regVeh', component: ViewDtaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
