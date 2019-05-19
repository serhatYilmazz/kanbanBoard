import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from '../app-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CoreService} from './service/core.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
  ],
  providers: [CoreService]
})
export class CoreModule {

}

