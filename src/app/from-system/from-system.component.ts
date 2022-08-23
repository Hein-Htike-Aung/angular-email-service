import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-from-system',
  templateUrl: './from-system.component.html',
  styleUrls: ['./from-system.component.scss']
})
export class FromSystemComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.contactForm = this.builder.group({
      from_name: 'Lab Tracking System',
      to_name: ['', Validators.required],
      email_id: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  sendEmail() {
    emailjs
      .send(
        'service_jg9ztfc',
        'template_pdw5e03',
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
