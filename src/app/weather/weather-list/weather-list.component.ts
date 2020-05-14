import { Component, OnInit} from '@angular/core';
import { WeatherItem } from '../weather-item/weather-item';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'weather-list',
  template:`
  <section class="weather-list" align="center">
  <date-item></date-item>
    <weather-item *ngFor="let weatherItem of weatherItems" [item]="weatherItem"></weather-item>
  </section>
  `,
  styleUrls: ['./weather-list.component.css'],
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit{
  weatherItems: WeatherItem[];

  constructor(private _weatherService: WeatherService) {

  }

  ngOnInit(){
    this.weatherItems=this._weatherService.getWeatherItems();
  }
}
