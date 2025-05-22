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
  isSpecialPage: boolean = false;
  currentSection: string = '';

  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isSpecialPage = ['/imprint', '/privacy'].includes(this.router.url);
      this.isScrolled = window.scrollY > 730 && !this.isSpecialPage;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isSpecialPage) {
      this.isScrolled = window.scrollY > 730;
    }
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }
}