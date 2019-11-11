import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Heart } from '../shared/heart.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() attempts: number;

  hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true),
  ];

  constructor() {
    console.log(this.hearts);
  }

  ngOnChanges() {
    // used this.attempts & this.hearts.length

    if (this.attempts !== this.hearts.length) {
      const index = this.hearts.length - this.attempts;

      this.hearts[index - 1].full = false;
    }
    console.log('Tentativas recebidas no painel: ' + this.attempts);
  }

  ngOnInit() {
  }
}
