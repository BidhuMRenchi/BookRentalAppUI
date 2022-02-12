import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot): boolean {
      //check Role Current Role vs Expected Role
      //      login - local storage --- app routing module
      const expectedRole = next.data.role;
      const currentRole = localStorage.getItem('ACCESSROLE');
      if(currentRole != expectedRole){
        this.router.navigateByUrl('login');
        return false;
      }
    return true;
  }
  
}
