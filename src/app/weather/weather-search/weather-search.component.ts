import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { WeatherService } from '../weather.service';
import { WeatherItem } from '../weather-item/weather-item';

@Component({
  selector: 'my-weather-search',
  template:`
      <section class="weather-search">
        <form  #f="ngForm" (ngSubmit)="onSubmit(f)" required>
          <label for="city"><p [translate]="'demo.city'" [translateParams]="{name: 'City'}"></p></label>
          <input name="location" ngModel #location="ngModel" type="text" id="city" required>
          <button class="btn btn-success" id="search_btn" type="submit"><p style="margin:auto;" [translate]="'demo.button'" [translateParams]="{name: 'Add city'}"></p></button>
        </form>
        <weather-list></weather-list>
      </section>
  `,
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent {

  constructor(private weatherService: WeatherService){

  }

  onSubmit(f: NgForm){
    this.weatherService.searchWeatherData(f.value.location)
      .subscribe(
        data=>{
          const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp, data.weather[0].icon, data.main.temp_min, data.main.temp_max);
          this.weatherService.addWeatherItem(weatherItem);
        }
      );
    //console.log(f.value);
  }
}