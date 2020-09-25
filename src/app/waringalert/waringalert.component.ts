import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waringalert',
  templateUrl: './waringalert.component.html',
  styleUrls: ['./waringalert.component.css']
})
export class WaringalertComponent implements OnInit {

  componentId = 10;
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
