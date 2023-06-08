import { Component } from '@angular/core';

import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  constructor(private projectsService: ProjectsService) {}
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
}
