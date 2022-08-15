import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Iproduct} from "./product";

@Component({
  // we won't need the Selector !! this is the first time that
  // we delete the selector !! soory mind !!
  //selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit  {
  pageTitle : string = "product Detail"
  product : Iproduct | undefined ;

  constructor(private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    const id= Number(this.route.snapshot.paramMap.get('id') );
    this.pageTitle += ` ${id}`
  }
  onBack():void {
    this.router.navigate(['/products']) ;
  }

}
