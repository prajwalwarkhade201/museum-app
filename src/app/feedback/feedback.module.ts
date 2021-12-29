import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FEEDBACKPageRoutingModule } from './feedback-routing.module';

import { FEEDBACKPage } from './feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FEEDBACKPageRoutingModule
  ],
  declarations: [FEEDBACKPage]
})
export class FEEDBACKPageModule {}
