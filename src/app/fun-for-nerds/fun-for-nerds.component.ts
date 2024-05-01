import { Component } from '@angular/core';
import { EvenLengthWordsComponent } from '../even-length-words/even-length-words.component';

@Component({
  selector: 'app-fun-for-nerds',
  standalone: true,
  imports: [FunForNerdsComponent, EvenLengthWordsComponent],
  templateUrl: './fun-for-nerds.component.html',
  styleUrl: './fun-for-nerds.component.css'
})
export class FunForNerdsComponent {
  
  userInput: string;
  wordLength: Number = 0;
  // static wordLength: number;

  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userInput = value;
    this.wordLength = this.userInput.length;
    // console.log(`${value} ${value.length}`);
  }
}
