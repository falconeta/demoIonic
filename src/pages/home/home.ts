import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  batteryLevel: number;
  isPlugged: boolean;
  constructor(private batteryStatus: BatteryStatus, public navCtrl: NavController) {
    
    this.batteryStatus.onChange().subscribe(
      (status: BatteryStatusResponse) => {
        this.batteryLevel = status.level;
        this.isPlugged = status.isPlugged;
      }
     );
     this.batteryStatus.onCritical().subscribe(
       (status: BatteryStatusResponse) =>{
         alert('critical');
       });
       this.batteryStatus.onLow().subscribe(
        (status: BatteryStatusResponse) =>{
          alert('low');
        });
  }

}
