import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesDashboardComponent } from './entities-dashboard/entities-dashboard.component';
import { EntitiesDialogConnectComponent } from './entities-dialog-connect/entities-dialog-connect.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EntitiesDashboardComponent, EntitiesDialogConnectComponent]
})
export class EntitiesModule { }
