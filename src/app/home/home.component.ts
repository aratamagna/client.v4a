import { Component, OnInit } from '@angular/core';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faCocktail = faCocktail;
  faPlay = faPlay;
  faMap = faMap;

  constructor() { }

  ngOnInit() {
  }

}
