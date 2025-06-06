import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(public ts: TranslationService) {

  }

  @Input() projects: any[] = [];
  activeProjectIndex = 0;

  setActiveProject(index: number) {
    this.activeProjectIndex = index;
  }
}
  // will add later to get the selected index and display the selected tab to first spot
  // displayedProjects: any[] = [];

  // ngOnInit() {
  //   this.displayedProjects = [...this.projects];
  // }

  // setActiveProject(index: number) {
  //   const actualIndex = this.projects.indexOf(this.displayedProjects[index]);
  //   this.activeProjectIndex = actualIndex;

  //   this.displayedProjects = [
  //     this.projects[actualIndex],
  //     ...this.projects.filter((_, i) => i !== actualIndex)
  //   ];
  // }