import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mailTo() {
    const emailAddress = 'albertovillacarlos07@gmail.com';
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  }
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ContactComponent);
  }
}
