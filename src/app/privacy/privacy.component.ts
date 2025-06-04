import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { TranslationService } from '../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink, HeaderComponent, CommonModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent implements OnInit {
  constructor(public ts: TranslationService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
