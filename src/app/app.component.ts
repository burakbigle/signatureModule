import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-course';
  firstName = 'Burak';
  lastName = 'Kilic';
  status: boolean;

  constructor() {
    this.displayActivity();
  }
  displayFirstName() {
    return this.firstName;
  }
  displayActivity() {
    this.status = true;
  }
  greetPerson() {
    alert("Hi There");
  }
  onMouseOverEvent() {
    alert("this is the alert");
  }
}
