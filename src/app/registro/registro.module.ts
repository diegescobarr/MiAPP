import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegistroPage } from './registro.page';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';


import { RegistroPageRoutingModule } from './registro-routing.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RegistroPageRoutingModule,

    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
