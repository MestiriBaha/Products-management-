import { Injectable} from '@angular/core';
import {Iproduct} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable ({
  providedIn: 'root'
})

export class productService {
  // properties and methods will be accessible to any class
  // using the service !!
  private productUrl = 'http://localhost:4200/src/assets/data.json'
  constructor(private _httprequest : HttpClient) { }
  getProducts() : Observable<Iproduct[]> {
    return this._httprequest.get<Iproduct[]>(this.productUrl).pipe(tap(data=>console.log("All : ",JSON.stringify(data))),
      catchError(this.handleError)  ) }  ;

  // takrizz !!
  // we will create our function to catch the error !!
  private handleError ( bug : HttpErrorResponse) {
    //we will logging the error to the console !!
    // in real life app , we will be sending error to logging infrastructure !
    let errorMessage='' ;
    //bug is an object of type HttpErrorResponse !!
    // the bug object will have the same properties as in the mother class !
    // fii99 these are oop Principles !!
    // soorry i am feeling a little distracted !!
    if(bug.error instanceof ErrorEvent) {
      //it can be a network or client side error !!
      errorMessage=`an Error Occured : ${bug.error.message}`
    }
    else {
      //the error is from the backend , it returned unsuccessful response code !!
      errorMessage = `server returned code : ${bug.status} , error message is : ${bug.message}` ;

    }
    //console.error(errorMessage) ;
    return throwError(()=>errorMessage) ;
  }

}
