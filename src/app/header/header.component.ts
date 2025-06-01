import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { TranslationService } from '../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isScrolled: boolean = false;
  isSpecialPage: boolean = false;
  currentSection: string = '';

  constructor(private router: Router, public ts: TranslationService) { }

  ngAfterViewInit() {
    this.setupScrollListener();
  }

  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.isSpecialPage = ['/imprint', '/privacy'].includes(this.router.url);

        if (this.isSpecialPage) {
          this.isScrolled = true;
          document.querySelector('.navbar')?.classList.add('special-page');
        }
      });
  }

  setupScrollListener() {
    window.addEventListener('scroll', () => {
      if (this.isSpecialPage) {
        this.isScrolled = true;
        return;
      }

      const heroSection = document.querySelector('.hero-section') as HTMLElement | null;
      const navbar = document.querySelector('.navbar') as HTMLElement | null;

      if (!heroSection || !navbar) {
        this.isScrolled = true;
        return;
      }

      const sectionBottom = heroSection.getBoundingClientRect().bottom;
      const headerHeight = navbar.offsetHeight || 128;

      this.isScrolled = sectionBottom <= headerHeight;
    });
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }

  setCurrent(section: string) {
    this.currentSection = section;
  }

  setLanguage(lang: 'en' | 'de') {
    this.ts.switch(lang);
  }

  isLanguage(lang: 'en' | 'de'): boolean {
    return this.ts.current() === lang;
  }
}