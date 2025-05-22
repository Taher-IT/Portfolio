import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  isChecked = false;
  isHovered = false;
  showError = false;
  formValid = false; // Will be connected to form validation later

  onCheckboxChange() {
    this.isChecked = !this.isChecked;
    this.showError = false;
    // Update form validation here later
  }

  setHoverState(state: boolean) {
    this.isHovered = state;
    if (!state) this.showError = false;
  }

  getCheckboxImage(): string {
    if (this.showError) return 'assets/img/contact/Checkbox_error.png';
    if (this.isChecked) {
      return this.isHovered
        ? 'assets/img/contact/Checkbox_hover.png'
        : 'assets/img/contact/Checkbox_checked.png';
    }
    return this.isHovered
      ? 'assets/img/contact/Checkbox_hover.png'
      : 'assets/img/contact/Checkbox_default.png';
  }

  onSubmit() {
    if (!this.isChecked) {
      this.showError = true;
      return;
    }
    // Form submission logic will go here
  }
}

