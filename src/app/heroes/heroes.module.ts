import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardModule } from './../dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesRountingModule } from './heroes-rounting.module';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRountingModule,
    ReactiveFormsModule,
    DashboardModule,
    RouterModule,
  ],
})
export class HeroesModule {}
