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
      name: 'Ha Dao',
      project: 'Kochwelt',
      quote: 'Amidst the hectic phases of our project, Taher remains calm under pressure, bringing focus and clarity to complex projects. His solution-driven approach and thoughtful demeanor make him both an effective problem-solver and a positive team presence.',
      link: 'https://google.com'
    },
    {
      name: 'Shardzhil Mukhammad',
      project: 'Join',
      quote: 'It has been a pleasure working with Taher. He is a highly professional, reliable team player who consistently supports his colleagues with expertise and positivity. His respectful, cooperative nature and problem-solving attitude make him a valuable asset to any team.',
      link: 'https://google.com'
    },
    {
      name: 'Jonathan Michutta',
      project: 'Kochwelt',
      quote: 'I had the opportunity to work with Taher on the Kochwelt project. He was always curious and asked many questions to better understand how processes worked. In this sense, he proved to be a good problem-finder, identifying key issues and potential challenges. Thank you for your contribution to the project!',
      link: 'https://google.com'
    },
    // {
    //   name: 'Evelyn Marx',
    //   project: 'Join',
    //   quote: 'He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.',
    //   link: 'https://google.com'
    // }
  ];
}