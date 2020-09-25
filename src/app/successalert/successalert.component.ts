import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent implements OnInit {

  componentId = 5;
  componentStatus = 'online';

  constructor(){
    this.componentStatus = Math.random() > .5 ? 'online' : 'offline';
  }

  getComponentStatus = () => {
    return this.componentStatus;
  }

  getColor = () => {
    return this.componentStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit(): void {
  }

}
