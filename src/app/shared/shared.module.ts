import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    MenuItemComponent
  ]
})
export class SharedModule { }
