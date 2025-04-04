import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references = [
    {
      name: 'Sahra Mueller',
      project: 'DA Bubble',
      quote: '´´Taher had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person.´´',
      link: 'https://google.com'
    },
    {
      name: 'James Rugman',
      project: 'Join',
      quote: '´´Taher is a reliable and friendly person. Works in a structured way and write a clear code. I recommend him as a colleague.´´',
      link: 'https://google.com'
    },
    {
      name: 'Evelyn Marx',
      project: 'Join',
      quote: '´´He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.´´',
      link: 'https://google.com'
    }
  ];
}