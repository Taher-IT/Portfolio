import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit,OnInit {
  isScrolled: boolean = false;
  isSpecialPage: boolean = false;
  currentSection: string = '';

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.setupScrollListener();
  }

  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() =>
        this.isSpecialPage = ['/imprint', '/privacy'].includes(this.router.url)
      );
  }

  setupScrollListener() {
    window.addEventListener('scroll', () => {
      if (this.isSpecialPage) {
        this.isScrolled = true;          // header always fixed on special pages
        return;
      }

      const heroSection = document.querySelector('.hero-section') as HTMLElement | null;
      const navbar = document.querySelector('.navbar') as HTMLElement | null;

      if (!heroSection || !navbar) {
        this.isScrolled = true;          // fail-safe on pages without hero
        return;
      }

      const sectionBottom = heroSection.getBoundingClientRect().bottom;
      const headerHeight = navbar.offsetHeight || 128;           // matches .navbar

      // stick once the hero has scrolled past the header’s height
      this.isScrolled = sectionBottom <= headerHeight;
    });
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }
}