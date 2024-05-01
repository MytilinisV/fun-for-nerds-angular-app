import { Component } from '@angular/core';
import { FunForNerdsComponent } from '../fun-for-nerds/fun-for-nerds.component';
import { OddLengthWordsComponentComponent } from '../odd-length-words-component/odd-length-words-component.component';

@Component({
  selector: 'app-even-length-words',
  standalone: true,
  imports: [FunForNerdsComponent, OddLengthWordsComponentComponent],
  templateUrl: './even-length-words.component.html',
  styleUrl: './even-length-words.component.css'
})
export class EvenLengthWordsComponent {
  
  evenLengthCheck: Number = 0;
  wordLength: Number;
  userInput: string;
  // wordLength: Number;
  
  onEvenLengthCheck(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userInput = value;
    this.evenLengthCheck = this.userInput.length % 2;
  }
  
}
