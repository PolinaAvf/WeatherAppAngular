import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BusinessService } from './business.service';
import { DateItemComponent } from './date/date-item/date-item.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather/weather-item/weather-item.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { GstAddComponent } from './gst-add/gst-add.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginItemComponent } from './login-item/login-item.component';
import { WeatherShowComponent } from './weather/weather-show/weather-show.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    GstAddComponent,
    HomeComponent,
    LoginItemComponent,
    WeatherShowComponent,
    DateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
     SlimLoadingBarModule,
     ReactiveFormsModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}