import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink, } from '@angular/router';
import { filter } from 'rxjs/operators';

import { TranslationService } from '../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isScrolled: boolean = false;
  isSpecialPage: boolean = false;
  currentSection: string = '';
  isMenuOpen: boolean = false;

  constructor(private router: Router, public ts: TranslationService) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngAfterViewInit() {
    this.setupScrollListener();
    this.updateScrollState();
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
    window.addEventListener('scroll', () => this.updateScrollState());
    window.addEventListener('resize', () => this.updateScrollState());
  }

  private updateScrollState(): void {
    if (this.shouldStickHeader()) {
      this.isScrolled = true;
      return;
    }

    const hero = document.querySelector('.hero-section') as HTMLElement | null;
    const navbar = document.querySelector('.navbar') as HTMLElement | null;

    if (!hero || !navbar) {
      this.isScrolled = true;
      return;
    }

    const headerHeight = navbar.offsetHeight || 128;
    const heroBottom = hero.getBoundingClientRect().bottom;

    this.isScrolled = heroBottom <= headerHeight;
  }

  private shouldStickHeader(): boolean {
    return this.isSpecialPage || window.innerWidth <= 960;
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }

  setCurrent(section: string) {
    this.currentSection = section;
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  setLanguage(lang: 'en' | 'de') {
    this.ts.switch(lang);
  }

  isLanguage(lang: 'en' | 'de'): boolean {
    return this.ts.current() === lang;
  }

  get logoSrc(): string {
    const isMobile = window.innerWidth <= 960;
    const showBurgerLogo = this.isMenuOpen || this.isScrolled || this.isSpecialPage;

    return (isMobile && showBurgerLogo)
      ? 'assets/img/logos/logo_icon.png'
      : 'assets/img/logos/Logo_icon_nav.png';
  }
}