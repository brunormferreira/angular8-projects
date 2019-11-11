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
    if (this.roundPhrase.phrasePtBr === this.answer) {
      alert('A tradução está correta');

      // change round question
      this.round++;

      // att roundPhrase object
      this.roundPhrase = this.phrases[this.round];
    } else {
      alert('A tradução está incorreta');
    }

  }
}
