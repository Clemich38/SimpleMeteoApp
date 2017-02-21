import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WeatherProvider {

  // Create an account in "openweathermap.com" and paste your API Key below
  private m_apiKey = 'f9ba8fe00174bce9fcb9a015ba065451';

  constructor(public http: Http) {}

  public getWeather(url: string, city: string): Observable<any>
  {
    // Send an Http Get request to the openweathermap web service
    return this.http.get(`http://api.openweathermap.org/data/2.5/${url}${city}&mode=json&units=metric&APPID=${this.m_apiKey}`)
      .map(hours => hours.json());
  }
}
