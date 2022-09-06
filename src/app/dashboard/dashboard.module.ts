import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRountingModule } from './dashboard-rounting.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, DashboardRountingModule],
})
export class DashboardModule {}
