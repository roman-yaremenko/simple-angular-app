import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesDashboardComponent } from './entities-dashboard/entities-dashboard.component';
import { EntitiesDialogConnectComponent } from './entities-dialog-connect/entities-dialog-connect.component';

import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  declarations: [
  	EntitiesDashboardComponent,
  	EntitiesDialogConnectComponent
  ],
  exports: [
    EntitiesDashboardComponent,
  	EntitiesDialogConnectComponent
  ]
})
export class EntitiesModule { }
