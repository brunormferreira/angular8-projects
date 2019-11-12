import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  gameInProgress: boolean = true;
  finishType: string;

  finishGame(type: string): void {
    this.gameInProgress = false;
    this.finishType = type;
  }
}
