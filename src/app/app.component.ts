import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WordInputComponent } from "./components/word-input/word-input.component";
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';
import { manyWords } from './components/interface/many-words';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [EvenLengthWordsComponent, OddLengthWordsComponent, WordInputComponent]
})
export class AppComponent {
  title = 'fun-for-nerds-angular-app';
  partialOddWord = '';
  partialEvenWord = '';

  oddLengthWords: string [] = [];
  evenLengthWords: string [] = [];

  onWord(word: string) {
    if (word.length % 2 === 0) { {
      this.evenLengthWords.push(word)
      }   
    } else {
      this.oddLengthWords.push(word)
    }
  }

  onPartialWord(word: string) {
    word = word.trim()
    if (word.length % 2 === 0) {
      this.partialEvenWord = word;
      this.partialOddWord = '';
    } else {
      this.partialOddWord = word;
      this.partialEvenWord = '';
    }
  }
}


