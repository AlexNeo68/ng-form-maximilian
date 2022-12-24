import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  submitted: boolean = false;
  result = { email: '', subscription: '', password: '' };
  @ViewChild('signupForm') signupForm: NgForm;
  onHandleSubmit() {
    this.submitted = true;
    this.result = { ...this.signupForm.value };
    this.signupForm.reset();
  }
}
