import { Component, OnInit, Input } from '@angular/core';
import { Drink } from './../../model/drink';

@Component({
  selector: 'app-caps',
  templateUrl: './caps.component.html',
  styleUrls: ['./caps.component.css']
})
export class CapsComponent implements OnInit {

  @Input() drink: Drink;

  constructor() {
  }

  ngOnInit() {
  }

}
