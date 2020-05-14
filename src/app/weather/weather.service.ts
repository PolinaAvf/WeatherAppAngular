import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { WeatherItem } from './weather-item/weather-item';

@Injectable({
    providedIn: 'root'
  })



export class WeatherService{

    constructor(private http:HttpClient){}

   getWeatherItems(){
       return WEATHER_ITEMS;
   }

   
   addWeatherItem(weatherItem: WeatherItem){
    WEATHER_ITEMS.push(weatherItem);
    }


   searchWeatherData(cityName: string): Observable<any>{

    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&APPID=babfd266d2a300fefbf406ec9a06db12&units=metric&')
    .pipe(map(res => res ))
        //((response: any) => response.json()))
    .pipe(catchError(e=> throwError(e))
        );
        //(error) => {
        //console.error(error);
        //return Observable.throwError(error.json())
}
}