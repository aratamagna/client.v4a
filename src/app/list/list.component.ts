import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ConfigService } from './../../service/init.service';
import { List } from './../../model/list';
import { CapsComponent } from './../caps/caps.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private router: Router,
    private configService: ConfigService
  ) { }

  ngOnInit() {
  }

  list: List;
  capsToggle: boolean[] = [];

  toggleCAp(index: number) {
    this.capsToggle[index] = !this.capsToggle[index]
  }

}
