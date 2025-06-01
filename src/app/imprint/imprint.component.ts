import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterLink, HeaderComponent, CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  constructor(public ts: TranslationService) {
  }
}
