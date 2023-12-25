  import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

  constructor(public authetnticationService: HardcodedAuthenticationService,
              public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authetnticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['/login'])

    return false;
  }
}
