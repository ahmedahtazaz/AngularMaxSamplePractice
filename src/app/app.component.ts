import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ahtazaz';
  allowNewAlert = false;
  alertCreated = 'No new alert created';
  alertName = 'My Alert';
  isAlertCreated = false;
  warnings = [];
  successes = [];

  constructor(){
    setTimeout(() => {
      this.allowNewAlert = true;
    }, 1000);
  }

  oCreateAlert = () => {
    this.successes.push(this.alertName);
    this.warnings.push(this.alertName);
    this.isAlertCreated = true;
    this.alertCreated = 'New alert created';
  }

  onHandleInput = (event: Event) => {
    this.alertName = (<HTMLInputElement> event.target).value;
  }
}
