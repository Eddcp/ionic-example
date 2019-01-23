import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterialListPage } from './material-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MaterialListPage
  ],
  imports: [
    IonicPageModule.forChild(MaterialListPage),
    ComponentsModule
  ],
})
export class MaterialListPageModule {}
