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
  answer: string = '';

  round = 0;
  roundPhrase: Phrase;

  progress: number = 0;

  constructor() {
    this.attRound();
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

      // progress
      this.progress = this.progress + (100 / this.phrases.length);

      // att roundPhrase object
      this.attRound();

    } else {
      alert('A tradução está incorreta');
    }
  }

  attRound(): void {
    // define a round phrase with base in some logic
    this.roundPhrase = this.phrases[this.round];

    // clear user answer
    this.answer = '';
  }
}
