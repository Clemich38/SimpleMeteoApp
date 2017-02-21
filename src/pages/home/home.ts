import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather-provider';
import { WeatherDisplayPage } from '../weather-display/weather-display';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public currentCity: string;
  public cityInfo = {zip: "", code: ""};

  constructor(public navCtrl: NavController, public weather: WeatherProvider)
  {
    this.cityInfo.zip = "";
    this.cityInfo.code = "";
    this.currentCity = "";
  }

  // Open the weather display page
  private openWeatherPage()
  {
    this.navCtrl.push(WeatherDisplayPage, { cityName: this.currentCity })
  }

  // Find the city name with the zip code and country code
  private cityLookup()
  {
    this.weather.getWeather('weather?q=', this.cityInfo.zip + "," + this.cityInfo.code).subscribe(
      data => {
        this.currentCity = data.name;
        console.log('Yo!');
        console.log(this.currentCity);
        this.openWeatherPage();
        
      }).unsubscribe;

  }


}
