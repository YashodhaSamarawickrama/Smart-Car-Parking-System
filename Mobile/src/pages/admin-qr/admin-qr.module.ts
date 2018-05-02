import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminQrPage } from './admin-qr';

@NgModule({
  declarations: [
    AdminQrPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminQrPage),
  ],
})
export class AdminQrPageModule {}
