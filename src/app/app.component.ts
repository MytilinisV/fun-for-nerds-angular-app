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
  partialOddWord: string;
  partialEvenWord: string;

  oddLengthWords: string [];
  evenLengthWords: string [];

  onWord(word: string) {
    if (word.length % 2 === 0) { {
      word = this.partialEvenWord
      }   
    } else {
      word = this.partialOddWord
    }
  }

  onPartialWord(word: string) {
    if (word.length % 2 === 0) {
      // const value = (event.target as HTMLInputElement).value;
      // word = value
      this.evenLengthWords[word] = word
      console.log('word')
    } else {
      this.oddLengthWords[word] = word
    }
  }
}


