import { Component, OnInit } from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  phrases: Phrase[] = PHRASES;
  instruction = 'Traduza a frase:';
  answer: string;

  round = 0;
  roundPhrase: Phrase;

  constructor() {
    this.roundPhrase = this.phrases[this.round];
    console.log(this.roundPhrase);
  }

  ngOnInit() {
  }

  attAnswer(answer: Event): void {
    this.answer = (answer.target as HTMLInputElement).value;
    // console.log(this.answer);
  }

  verifyAnswer(): void {
    console.log('Verificar resposta: ', this.answer);
  }
}
