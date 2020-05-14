import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-item',
  templateUrl: './date-item.component.html',
  styleUrls: ['./date-item.component.css']
})
export class DateItemComponent implements OnInit {

  myDate=Date.now();

  constructor() { }

  ngOnInit() {
  }

}
