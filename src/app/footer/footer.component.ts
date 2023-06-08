import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  redirectToLink(link:string): void {
    window.open(`${link}`, '_blank');
  }
}
