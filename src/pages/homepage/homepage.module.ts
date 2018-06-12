import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomepagePage } from './homepage';
import {ComponentsModule} from '../../components/components.module'
@NgModule({
  declarations: [
    HomepagePage,
  
  ],
  imports: [
    IonicPageModule.forChild(HomepagePage),
    ComponentsModule
  ],
})
export class HomepagePageModule {}
