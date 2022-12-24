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

  @ViewChild('f') signupForm: NgForm;
  onHandleSubmit() {
    console.log(this.signupForm);
  }

  onSuggestedUser() {
    this.signupForm.form.patchValue({
      userData: { username: this.suggestedUser },
    });
  }
}
