import {Component, OnDestroy, OnInit} from '@angular/core';
import {Iproduct} from "./product";
import {productService} from "./product.service";
import {Subscription} from "rxjs";
@Component({
  selector : 'app-products' ,
  templateUrl : './product-list.component.html' ,
  styleUrls : ['./product-list.component.css']

})

export class productListComponent implements OnInit,OnDestroy{
  constructor(private _productService : productService) {
  }
  imagewidth : number = 30 ;
  imagemargin : number = 2 ;
  pageTitle : string = 'Product List ' ;
  displayImage : boolean = false ;
  private _listFilter : string = '' ;
  get listFilter() : string { return this._listFilter} ;
  set listFilter(value) {
    this._listFilter=value ;
    console.log('In Setter',value)
    this.filteredProducts=this.performFilter(value)}
  filteredProducts : Iproduct[] = [] ;
  products : Iproduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "Description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "Description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "Description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2021",
      "Description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2020",
      "Description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }
  ]

  errorNotification : string = '' ;
  sub! : Subscription ;

onNotify(message : string) {
    this.pageTitle = message ;

  }
toggleImage()
{
  this.displayImage = !this.displayImage ;
}
performFilter(filteredby : string) : Iproduct[] {
  filteredby = filteredby.toLocaleLowerCase() ;
  return this.products.filter((product : Iproduct) =>product.productName.toLocaleLowerCase().includes(filteredby))
}
ngOnInit(): void {
  console.log("In onInit is Active ") ;
  this.sub = this._productService.getProducts().subscribe({
    next : product => { this.products=product ; this.filteredProducts=this.products ; console.log(this.products+"helloo")} ,
    error : err => this.errorNotification =  err

  }) ;
  //this.filteredProducts=this.products ;



}
ngOnDestroy(): void {
  this.sub.unsubscribe() ;
}
}
