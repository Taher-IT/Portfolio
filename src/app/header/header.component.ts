import { Component, HostListener, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
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
        this.isScrolled = true;
        return;
      }

      const heroImage = document.querySelector('.heroPic');
      if (!heroImage) {
        this.isScrolled = true;
        return;
      }

      const imageBottom = heroImage.getBoundingClientRect().bottom;
      // 128px is your header height - adjust if different
      this.isScrolled = imageBottom <= 0;
    });
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }
}