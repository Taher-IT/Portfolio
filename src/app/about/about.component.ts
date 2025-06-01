import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(public ts: TranslationService) {

  }
}
