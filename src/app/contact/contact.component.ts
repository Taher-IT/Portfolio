import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  isSending = false;
  contactData = {
    name: "",
    email: "",
    message: "",
  }

  onCheckboxChange() {
    this.isChecked = !this.isChecked;
    this.showError = false;

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

  resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.contactData = { name: "", email: "", message: "" };
    this.isChecked = false;
    this.isHovered = false;
    this.showError = false;
    this.isSending = false;
  }

  blockSend(): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(this.contactData); // Delete Later
        resolve();
      }, 1500);
    });
  }

  async onSubmit(ngForm: NgForm): Promise<void> {
    if (!this.isChecked) {
      this.showError = true;
      return;
    }
    if (ngForm.valid) {
      this.isSending = true;
      await this.blockSend();
      this.resetForm(ngForm);
    }
  }

}

