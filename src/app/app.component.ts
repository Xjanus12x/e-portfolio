import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ContactComponent);
  }
  openForm() {
    const link = 'https://formsubmit.co/el/jatehe';
    window.open(link);
  }
}
