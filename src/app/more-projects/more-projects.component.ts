import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-projects',
  templateUrl: './more-projects.component.html',
  styleUrls: ['./more-projects.component.css'],
})
export class MoreProjectsComponent implements OnInit {
  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  projects: any;
  type: string = '';
  ngOnInit() {
    this.projectsService.getProjects().subscribe(
      (data: any) => {
        this.projects = data;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  sortProject(value: string) {
    this.type = value;
    this.projectsService.getProjects().subscribe(
      (data: any) => {
        console.log(data);
        if (this.type) {
          this.projects = data.filter(
            (project: any) => project.type === this.type
          );
        } else {
          this.projects = data;
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  goBackToHomepage() {
    this.router.navigateByUrl('/'); // Navigate back to the homepage
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
}
