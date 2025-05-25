import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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

  http = inject(HttpClient);

  isChecked = false;
  isHovered = false;
  showError = false;
  isSending = false;
  contactData = {
    name: "",
    email: "",
    message: "",
  }
  mailTest = false;

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

  post = {
    endPoint: 'https://taher-abdel-megid.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.isSending = true;
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('it worked!');
            this.resetForm(ngForm);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.resetForm(ngForm);
    }
  }

}