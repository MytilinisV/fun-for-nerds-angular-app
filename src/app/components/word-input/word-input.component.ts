import { Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',
  styleUrl: './fun-for-nerds.component.css'
})
export class WordInputComponent {

  @Output() partialWord = new EventEmitter<string>();
  @Output() wordSubmitted = new EventEmitter<string>();
  userInput: string = '';
  outputValue: string = '';


  onUserInput(event: Event) {
    const input = (event.target as HTMLInputElement);
    this.userInput = input.value.trim();
    this.partialWord.emit(input.value);
  }

  onWordSubmitted() {
    this.wordSubmitted.emit(this.userInput);
  }

}
