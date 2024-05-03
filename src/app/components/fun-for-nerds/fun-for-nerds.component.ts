import { Component, EventEmitter, Output} from '@angular/core';
import { EvenLengthWordsComponent } from '../even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from '../odd-length-words/odd-length-words.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-fun-for-nerds',
  standalone: true,
  imports: [FunForNerdsComponent, EvenLengthWordsComponent, OddLengthWordsComponent],
  templateUrl: './fun-for-nerds.component.html',
  styleUrl: './fun-for-nerds.component.css'
})
export class FunForNerdsComponent {
  wordLength: number = 0;
  numberCheck: number = 0;
  wordInput: string = '';
  word: string = '';
  @Output() evenLengthData: EvenLengthWordsComponent;
  @Output() oddLengthData: OddLengthWordsComponent;
  userInput: string = '';
  // static wordLength: number;

  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userInput = value;
    this.wordLength = this.userInput.length;
    this.numberCheck = this.wordLength % 2;
  }

  onWordSubmit() {
    console.log(this.userInput);
  }
}
