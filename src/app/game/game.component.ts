import { Component, OnInit } from '@angular/core';
import { CardComponent } from './../card/card.component';
import { ConfigService } from './../../service/init.service';
import { Config } from './../../model/config';
import { Card } from './../../model/card';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  cards: Card[];

  parentSubject:Subject<string> = new Subject();

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.configService.listQuestion().subscribe(r => {
      this.cards = r;
    })
  }

  cardAnimation(value) {
    this.parentSubject.next(value);
  }

}
