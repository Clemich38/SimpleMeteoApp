import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public currentWeather: string;
  public currentWeatherDescription: string;
  public currentWeatherIcon: string;
  public currentTemp: number;
  public minTemp: number;
  public maxTemp: number;
  public currentHumidityLevel: number;
  public currentPressure: number;
  public currentClouds: number;
  public currentWindSpeed: number;
  public currentDate: Date;
  public currentCity: string;

  constructor(public navCtrl: NavController, public weather: WeatherProvider)
  {
    this.GetCurrentWeather("Tokyo");
  }

  private GetCurrentWeather(city: string)
  {
    // Get current weather
    this.currentCity = city;
    this.weather.getWeather('weather?q=', city).subscribe(
    data => {
      this.currentWeather = data.weather[0].main;
      this.currentWeatherDescription = data.weather[0].description;
      this.currentWeatherIcon = data.weather[0].icon;
      this.currentTemp = Math.round(data.main.temp);
      this.currentWindSpeed = Math.round(data.wind.speed);
      this.minTemp = Math.round(data.main.temp_min);
      this.maxTemp = Math.round(data.main.temp_max);
      this.currentHumidityLevel = Math.round(data.main.humidity);
      this.currentPressure = Math.round(data.main.pressure);
      this.currentDate = new Date(data.dt * 1000);
    });

  }

}
