import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';
import {KanbanModule} from './kanban/kanban.module';
import {reducers} from './store/app.reducers';
import {SharedModule} from './shared/shared.module';
import {OverlayModule} from '@angular/cdk/overlay';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule,
    CoreModule,
    KanbanModule,
    SharedModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
