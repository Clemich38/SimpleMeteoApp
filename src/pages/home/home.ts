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

  constructor(public navCtrl: NavController, public weather: WeatherProvider)
  {
  }

  private openWeatherPage()
  {
    console.log('Yo!');
    console.log(this.currentCity);
    // this.currentCity = currentCity;
    this.navCtrl.push(WeatherDisplayPage, { cityName: this.currentCity })
  }


}
