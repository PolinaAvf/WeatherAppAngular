import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';

import { LoginItemComponent } from './login-item/login-item.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';

const routes: Routes = [
  {
    path: 'create',
    component: GstAddComponent
  },
  {
    path: 'business',
    component: LoginItemComponent
  },
  {
    path:'create/login',
    component:LoginItemComponent
  },
  {
    path:'business/weather',
    component:WeatherSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }