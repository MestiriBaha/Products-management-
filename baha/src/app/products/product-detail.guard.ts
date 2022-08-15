import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router : Router) {
    //Now we need to Read the Parameter from the Route
    //lucky us ::
    //canActivate has a parameter that gives us the activated route snapshot
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = Number(route.paramMap.get('id')) ;
    if(isNaN(id) || id<1) {
      // In Real Application , we route to Error  Page !!
      alert('Invalid Product Id ') ;
      this.router.navigate(['/products']) ;
      return false ;
    }
    return true;
    //time for injection !!
  }

}
