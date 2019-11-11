import { Component, OnInit } from '@angular/core';

import { Heart } from '../shared/heart.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  emptyHeart: string = '../../assets/coracao_vazio.png';
  fullHeart: string = '../../assets/coracao_cheio.png';

  hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true),
  ];

  constructor() {
    console.log(this.hearts);
  }

  ngOnInit() {
  }

}
