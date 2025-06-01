import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { TranslationService } from "../services/translation.service";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(public ts: TranslationService) {

  }
}
