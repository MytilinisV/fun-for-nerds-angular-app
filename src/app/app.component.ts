import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FunForNerdsComponent } from "./components/fun-for-nerds/fun-for-nerds.component";
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FunForNerdsComponent, EvenLengthWordsComponent, OddLengthWordsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'fun-for-nerds-angular-app';
  button: InputEvent;
  userInput: string;
  wordLength: number = 0;
  numberCheck: number = 0;
  wordInput: string = '';

  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userInput = value;
    this.wordLength = this.userInput.length;
    // console.log(`${value} ${value.length}`);
    this.numberCheck = this.wordLength % 2;
    
  }
}
