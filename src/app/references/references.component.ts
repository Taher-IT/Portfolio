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
      link: 'https://google.com'
    },
    {
      id: 'shardzhil',
      name: 'Shardzhil Mukhammad',
      project: 'Join',
      quoteKey: 'references.quotes.shardzhil',
      link: 'https://google.com'
    },
    {
      id: 'jon',
      name: 'Jonathan Michutta',
      project: 'Kochwelt',
      quoteKey: 'references.quotes.jon',
      link: 'https://google.com'
    },
  ];
}