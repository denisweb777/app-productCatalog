import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate {

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

		if (window.localStorage.token && window.localStorage.token) {
			return true;
		} else {
			alert('Sign in!');
			return false;
		}
	}
}