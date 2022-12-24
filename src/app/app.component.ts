import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ng-forms-start';
  @ViewChild('f') signupForm: NgForm;
  onHandleSubmit() {
    console.log(this.signupForm);
  }
}


