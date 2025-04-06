import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled: boolean = false;
  isImprintPage: boolean = false;
  currentSection: string = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isImprintPage = event.url === '/imprint';
      this.currentSection = event.url.split('#')[1] || '';
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isImprintPage) {
      this.isScrolled = window.scrollY > 730;
    }
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }
}