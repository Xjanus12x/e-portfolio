import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) {}
  projects: any;
  ngOnInit() {
    this.projectsService.getProjects().subscribe(
      (data: any) => {
        console.log(data);
        this.projects = data.slice(0, 4);
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  goToMoreProjectPage() {
    this.router.navigateByUrl('more-projects'); // Navigate back to the homepage
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
}
