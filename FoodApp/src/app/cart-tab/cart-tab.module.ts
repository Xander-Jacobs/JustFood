import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartTabPageRoutingModule } from './cart-tab-routing.module';

import { CartTabPage } from './cart-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartTabPageRoutingModule
  ],
  declarations: [CartTabPage]
})
export class CartTabPageModule {}
