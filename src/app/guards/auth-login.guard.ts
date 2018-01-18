import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthLoginGuard implements CanActivate {
  
  constructor(
    private router:Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if(localStorage.getItem('user')!=null){
      this.router.navigate(['dashboard']);
    }
    return true;
  }
}
