import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherDisplayPage } from '../pages/weather-display/weather-display';
import { WeatherProvider } from '../providers/weather-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WeatherDisplayPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WeatherDisplayPage
  ],
  providers: [WeatherProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
