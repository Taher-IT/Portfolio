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