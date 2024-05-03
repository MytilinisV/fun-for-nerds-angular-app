import { Component } from '@angular/core';
import { FunForNerdsComponent } from '../fun-for-nerds/fun-for-nerds.component';

@Component({
  selector: 'app-even-length-words',
  standalone: true,
  imports: [FunForNerdsComponent],
  templateUrl: './even-length-words.component.html',
  styleUrl: './even-length-words.component.css'
})
export class EvenLengthWordsComponent {
  
  evenLengthCheck: Number = 0;
  wordLength: Number;
  userInput: string;
  // wordLength: Number;
  
  
}
