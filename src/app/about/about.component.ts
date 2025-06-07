import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  typedText: string = '';
  iconUrl: string = '';
  currentIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  destroy = false;
  textValues: string[] = [];
  iconValues: string[] = [];

  constructor(public ts: TranslationService) {

  }

  ngOnInit(): void {
    this.setupTextsByLanguage(this.ts.current());
    this.typeLoop();
    this.ts['lang$']?.subscribe(lang => {
      this.setupTextsByLanguage(lang);
      this.restartTyping();
    });
  }

  ngOnDestroy(): void {
    this.destroy = true;
  }

  setupTextsByLanguage(lang: 'de' | 'en') {
    this.textValues = lang === 'de'
      ? ['wohnhaft in Hamburg...', 'offen für Remote-Arbeit...']
      : ['based in Hamburg...', 'open to remote work...'];

    this.iconValues = [
      '../../assets/img/about/Map_icon.png',
      '../../assets/img/about/Remote_icon.png'
    ];
  }

  restartTyping() {
    this.currentIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.typedText = '';
  }

  async typeLoop() {
    while (!this.destroy) {
      const fullText = this.textValues[this.currentIndex];
      this.iconUrl = this.iconValues[this.currentIndex];

      this.handleTyping(fullText);
      const delay = this.updateTypingState(fullText);

      await this.delay(delay);
    }
  }

  handleTyping(fullText: string) {
    if (this.isDeleting) {
      this.charIndex--;
      this.typedText = fullText.substring(0, this.charIndex);
    } else {
      this.typedText = fullText.substring(0, this.charIndex++);
    }
  }

  updateTypingState(fullText: string): number {
    if (!this.isDeleting && this.charIndex === fullText.length) {
      this.isDeleting = true;
      return 1500;
    }

    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.textValues.length;
      return 500;
    }

    return this.isDeleting ? 30 : 80;
  }

  delay(ms: number): Promise<void> {
    return new Promise(res => setTimeout(res, ms));
  }
}