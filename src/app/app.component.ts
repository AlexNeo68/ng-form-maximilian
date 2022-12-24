import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  title = 'ng-forms-start';
  suggestedUser: string = 'SuperUser';
  defaultQuestion: string = 'pet';
  answer: string = '';
  genders = ['male', 'female'];

  submitted: boolean = false;

  public user: {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  }

  @ViewChild('f') signupForm: NgForm;

  onHandleSubmit() {
    this.user = {
      username: this.signupForm.value.userData.username,
      email: this.signupForm.value.userData.email,
      question: this.signupForm.value.secret,
      answer: this.signupForm.value.answer,
      gender: this.signupForm.value.gender
    }

    this.submitted = true;
    this.signupForm.reset();
  }

  onSuggestedUser() {
    this.signupForm.form.patchValue({
      userData: { username: this.suggestedUser },
    });
  }

}
