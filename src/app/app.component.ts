import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroComponent, HeaderComponent, AboutComponent, SkillsComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  project = {
    name: 'DA Bubble',
    duration: '3 weeks',
    description: 'This App is a Slack Clone App. It revolutionizes team communication...',
    workProcess: 'How do you keep your code clean and maintainable? Have you broken...',
    groupExperience: 'We worked in a team of 4 members...',
    learnt: '',
    teamwork: true,
    technologies: [
      '/assets/img/skills/Angular.png',
      '/assets/img/skills/TypeScript.png',
      '/assets/img/skills/firebase.png'
    ],
    image: '/assets/img/projects/DaBubble.png',
    liveLink: 'https://taher-abdel-megid.de',
    githubLink: 'https://github.com/Taher-IT'
  };
}
