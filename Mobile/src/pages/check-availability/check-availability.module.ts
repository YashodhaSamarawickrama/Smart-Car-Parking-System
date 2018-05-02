import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckAvailabilityPage } from './check-availability';

@NgModule({
  declarations: [
    CheckAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckAvailabilityPage),
  ],
})
export class CheckAvailabilityPageModule {}
