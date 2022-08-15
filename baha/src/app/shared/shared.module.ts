import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarComponent} from "../../shared files/star.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  // we will export the common modules so we won't need
  // to export them in every feature module we have !!
  exports: [StarComponent, CommonModule,FormsModule]
})
export class SharedModule { }
