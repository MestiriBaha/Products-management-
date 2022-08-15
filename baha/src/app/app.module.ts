import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { RouterModule} from "@angular/router";
import { ProductModule } from './products/product.module';

//import {FormsModule} from '@angular/forms' ;


@NgModule({
  declarations: [
    AppComponent,


    WelcomeComponentComponent


  ],
  //imports is used to get external librairies or features !
  imports: [
    BrowserModule,
    ///every browser application must import this module !!



    HttpClientModule,
    RouterModule.forRoot([

      {path: 'welcome', component: WelcomeComponentComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      //'**' for wrong pages or not found pages , we redirect to welcome instead of dispplaying that ugly error !!
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}


    ]),
    ProductModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
