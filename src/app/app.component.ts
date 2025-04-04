import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroComponent, HeaderComponent, AboutComponent,
    SkillsComponent, ProjectsComponent, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  projects = [
    {
      name: 'DA Bubble',
      duration: '3 weeks',
      description: {
        text: 'This App is a Slack Clone App.\nIt revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      workProcess: {
        text: 'How do you keep your code clean and maintainable?',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      groupExperience: {
        text: 'We worked in a team of 4 members...',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      learnt: {
        text: '',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      teamwork: true,
      technologies: [
        '/assets/img/skills/Angular.png',
        '/assets/img/skills/TypeScript.png',
        '/assets/img/skills/Firebase.png'
      ],
      image: '/assets/img/projects/DaBubble.png',
      liveLink: 'https://taher-abdel-megid.de',
      githubLink: 'https://github.com/Taher-IT'
    },
    {
      name: 'El Pollo Loco',
      duration: '2 weeks',
      description: {
        text: 'A real-time chat application with WebSockets...\nYadda yadda yadda...\nThis app allows users to communicate in real-time, send messages, and create chat rooms.',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      workProcess: {
        text: 'Using RxJS and Observables to handle events efficiently...',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      groupExperience: {
        text: '',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      learnt: {
        text: 'I learned about OOP implementations...',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      teamwork: false,
      technologies: [
        '/assets/img/skills/html.png',
        '/assets/img/skills/css.png',
        '/assets/img/skills/Javascript.png'
      ],
      image: '/assets/img/projects/ElPolloLoco.png',
      liveLink: 'https://taher-abdel-megid.de',
      githubLink: 'https://github.com/Taher-IT'
    },
    {
      name: 'Join',
      duration: '4 weeks',
      description: {
        text: 'A Kanban board for task management...',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      workProcess: {
        text: 'Creating an intuitive drag-and-drop UI...',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      groupExperience: {
        text: 'Working with Redux and state management...',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      learnt: {
        text: '',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      teamwork: true,
      technologies: [
        '/assets/img/skills/Angular.png',
        '/assets/img/skills/TypeScript.png',
        '/assets/img/skills/css.png'
      ],
      image: '/assets/img/projects/Joint.png',
      liveLink: 'https://taher-abdel-megid.de',
      githubLink: 'https://github.com/Taher-IT'
    },
    {
      name: 'Portfolio',
      duration: '2 weeks',
      description: {
        text: 'My personal portfolio built with Angular...',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      workProcess: {
        text: 'Structuring and designing a portfolio website...',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      groupExperience: {
        text: '',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      learnt: {
        text: 'I improved my UI/UX design skills and Angular animations...',
        icon: '/assets/img/projects/Ellipse8.png'
      },
      teamwork: false,
      technologies: [
        '/assets/img/skills/Angular.png',
        '/assets/img/skills/TypeScript.png',
        '/assets/img/skills/css.png',
      ],
      image: '/assets/img/projects/Portfolio.png',
      liveLink: 'https://taher-abdel-megid.de',
      githubLink: 'https://github.com/Taher-IT'
    }
  ];
}