import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router: Router) {
  }

  public navigate(route: string) {
    this.router.navigateByUrl(route);
  }
}
