import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit, AfterViewInit {
  @Input() title: String = '';
  @Input() projectImg: String = '';
  @Input() tools: String[] = [];
  @Input() siteLink: String = '';
  @Input() projectLink: String = '';
  @Input() delay: number = 0;

  redirectToSiteLink(): void {
    window.open(`${this.siteLink}`, '_blank');
  }
  redirectToProjectLink(): void {
    window.open(`${this.projectLink}`, '_blank');
  }
  ngOnInit() {
    AOS.init({ once: true });
  }
  ngAfterViewInit() {
    AOS.refresh();
  }
}
