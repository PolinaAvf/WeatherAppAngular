import { Component, Input} from '@angular/core';
import { WeatherItem } from "./weather-item";

@Component({
  selector: 'weather-item',
  template: `
        <div class="row" align="center">
            <div class="col-1">
              <h3>{{ weatherItem.cityName }}</h3>
              <p class="info">{{weatherItem.description}}</p>
              <div class="icon">
                <img src="http://openweathermap.org/img/w/{{weatherItem.icon}}.png">
              </div>
            </div>
            <div class="col-2">
              <span class="temperature">{{weatherItem.temperature}}°C</span>
              <p>{{weatherItem.temp_min}}°C</p>
              <p>{{weatherItem.temp_max}}°C</p>
            </div>
          </div>
          
          `,
  styleUrls: ['./weather-item.component.css'],
  //inputs: ['weatherItem: item']
})
export class WeatherItemComponent {
  @Input('item') weatherItem: WeatherItem;
}
