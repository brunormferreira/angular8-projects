import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  attempts: number = 3;

  @Output() finishGame: EventEmitter<string> = new EventEmitter();

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

      // change round question
      this.round++;

      // progress
      this.progress = this.progress + (100 / this.phrases.length);

      //
      if (this.round === 4) {
        this.finishGame.emit('Vitoria');
      }

      // att roundPhrase object
      this.attRound();

    } else {

      // decrement variable attempts
      this.attempts--;

      if (this.attempts === -1) {
        this.finishGame.emit('Derrota');
      }
    }
  }

  attRound(): void {
    // define a round phrase with base in some logic
    this.roundPhrase = this.phrases[this.round];

    // clear user answer
    this.answer = '';
  }
}
