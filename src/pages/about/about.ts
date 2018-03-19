import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
latitude: number;
longitude: number;
  constructor(private geolocation: Geolocation, public navCtrl: NavController) {
    this.geolocation.getCurrentPosition().then((resp) => {
      alert('erqw');
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
     }).catch((error) => {
       alert('Error getting location');
     });
  }
  

}
