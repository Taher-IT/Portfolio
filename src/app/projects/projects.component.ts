import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() project!: {
    name: string;
    duration: string;
    description: string;
    workProcess: string;
    groupExperience?: string;
    learnt?: string;
    teamwork: boolean;
    technologies: string[];
    image: string;
    liveLink: string;
    githubLink: string;
  };
}