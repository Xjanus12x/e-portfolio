import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { MoreProjectsComponent } from './more-projects/more-projects.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'more-projects', component: MoreProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
