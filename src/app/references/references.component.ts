import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  constructor(public ts: TranslationService) {

  }
  references = [
    {
      id: 'ha',
      name: 'Ha Dao',
      project: 'Kochwelt',
      quoteKey: 'references.quotes.ha',
      link: 'https://www.linkedin.com/in/dao-cong-viet-ha/'
    },
    {
      id: 'shardzhil',
      name: 'Shardzhil Mukhammad',
      project: 'Join',
      quoteKey: 'references.quotes.shardzhil',
      link: 'https://www.linkedin.com/in/mukhammad-shardzhil-a2565213a/'
    },
    {
      id: 'jon',
      name: 'Jonathan Michutta',
      project: 'Kochwelt',
      quoteKey: 'references.quotes.jon',
      link: 'linkedin.com/in/jonathan-michutta-527722210/'
    },
  ];
}