import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }
  handleClick=()=>this.title;
}
