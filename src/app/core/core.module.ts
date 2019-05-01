import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from '../app-routing.module';
import {DropdownDirective} from './dropdown/dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    DropdownDirective
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
  ]
})
export class CoreModule {

}

