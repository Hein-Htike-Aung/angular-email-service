import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-to-system',
  templateUrl: './to-system.component.html',
  styleUrls: ['./to-system.component.scss'],
})
export class ToSystemComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.contactForm = this.builder.group({
      from_name: ['', Validators.required],
      email_id: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  sendEmail() {
    emailjs
      .send(
        'service_jg9ztfc',
        'template_2a2h0xx',
        this.contactForm.value,
        'PJG8f5dL3cJl8nNKn'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.contactForm.reset();
        },
        (error: any) => {
          console.error(error.text);
        }
      );
  }
}
