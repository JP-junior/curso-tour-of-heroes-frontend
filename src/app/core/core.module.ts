import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';

const COMPONENTS = [ToolbarComponent, MessagesComponent];
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if(parentModule){
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule.')
    }
  }
}