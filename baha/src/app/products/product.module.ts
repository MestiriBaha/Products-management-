  import { NgModule } from '@angular/core';
  import {ProductDetailComponent} from "./product-detail.component";
  import {productListComponent} from "./product-list.component";
  import {ConvertToSpacesPipe} from "../../shared files/convert-to-spaces.pipe";
  import {RouterModule} from "@angular/router";
  import {ProductDetailGuard} from "./product-detail.guard";
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductDetailComponent,
    productListComponent,
    ConvertToSpacesPipe,


  ],
  imports: [


    RouterModule.forChild([    {path: 'products', component: productListComponent},
      {path: 'products/:id',
        canActivate : [ProductDetailGuard] ,component: ProductDetailComponent}]),
    SharedModule
  ]
})
export class ProductModule { }
