import { Component, EventEmitter, Output} from '@angular/core';
import { EvenLengthWordsComponent } from '../even-length-words/even-length-words.component';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',
  styleUrl: './fun-for-nerds.component.css'
})
export class WordInputComponent {
  // wordLength: number = 0;
  // numberCheck: number = 0;
  // wordInput: string = '';
  // @Input() data: manyWords; 
  @Output() data: EvenLengthWordsComponent[];
  @Output() wordSubmitted: new EventEmitter<EvenLengthWordsComponent>();
  // @Output() evenLengthData: EvenLengthWordsComponent;
  userInput: string = '';
  // static wordLength: number;

  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userInput = value;
    this.wordSubmitted[this.userInput] = this.userInput
    // this.wordLength = this.userInput.length;
    // this.numberCheck = this.wordLength % 2;
    // console.log(this.wordInput)
    // alert(this.wordSubmitted)
  }

  onWordSubmitted() {
    this.wordSubmitted.emit(EvenLengthWordsComponent)
  }

  // word: manyWords[] = [
  //   {
  //     wordLength: 0,
  //     word: ''
  //   }]

}
