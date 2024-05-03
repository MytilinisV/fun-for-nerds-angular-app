import { Component } from '@angular/core';
import { EvenLengthWordsComponent } from '../even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from '../odd-length-words/odd-length-words.component';

@Component({
  selector: 'app-fun-for-nerds',
  standalone: true,
  imports: [FunForNerdsComponent, EvenLengthWordsComponent, OddLengthWordsComponent],
  templateUrl: './fun-for-nerds.component.html',
  styleUrl: './fun-for-nerds.component.css'
})
export class FunForNerdsComponent {
  button: InputEvent;
  userInput: string;
  wordLength: number = 0;
  numberCheck: number = 0;
  wordInput: string = '';
  // static wordLength: number;

  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userInput = value;
    this.wordLength = this.userInput.length;
    // console.log(`${value} ${value.length}`);
    this.numberCheck = this.wordLength % 2;
    
  }
}
