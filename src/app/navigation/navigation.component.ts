import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private router: Router) {}
  isSidenavOpen = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  goToRoute(route: string, scrollY: number) {
    this.router.navigate([`${route}`]);
    window.scrollTo({
      top: scrollY,
      behavior: 'smooth',
    });
  }
}
