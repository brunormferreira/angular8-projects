import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  emptyHeart: string = '../../assets/coracao_vazio.png';
  fullHeart: string = '../../assets/coracao_cheio.png';

  constructor() { }

  ngOnInit() {
  }

}
