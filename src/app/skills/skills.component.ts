import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  technologies = [
    { name: 'Angular', logo: 'assets/img/skills/Angular.png', description: 'Angular' },
    { name: 'TypeScript', logo: 'assets/img/skills/TypeScript.png', description: 'TypeScript' },
    { name: 'JavaScript', logo: 'assets/img/skills/Javascript.png', description: 'JavaScript' },
    { name: 'HTML', logo: 'assets/img/skills/html.png', description: 'HTML' },
    { name: 'CSS', logo: 'assets/img/skills/css.png', description: 'CSS' },
    { name: 'Rest-Api', logo: 'assets/img/skills/Api.png', description: 'Rest-Api' },
    { name: 'Firebase', logo: 'assets/img/skills/Firebase.png', description: 'Firebase' },
    { name: 'GIT', logo: 'assets/img/skills/git.png', description: 'GIT' },
    { name: 'Material Design', logo: 'assets/img/skills/Group.png', description: 'Material Design' },
    { name: 'Scrum', logo: 'assets/img/skills/scrum.png', description: 'Scrum' }
  ];

}
