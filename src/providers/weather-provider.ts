import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WeatherProvider {

  private m_apiKey = 'f9ba8fe00174bce9fcb9a015ba065451';

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  }

  public getWeather(url: string, city: string): Observable<any>
  {
    return this.http.get(`http://api.openweathermap.org/data/2.5/${url}${city}&mode=json&units=metric&APPID=${this.m_apiKey}`)
      .map(hours => hours.json());
  }
}
