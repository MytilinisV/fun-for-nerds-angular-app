import { Component, EventEmitter } from '@angular/core';
import { FunForNerdsComponent } from "./components/fun-for-nerds/fun-for-nerds.component";
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FunForNerdsComponent, EvenLengthWordsComponent, OddLengthWordsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fun-for-nerds-angular-app';
  partialOddWord: string;
  partialEvenWord: string;

  oddLengthWords: string[];
  evenLengthWords: string[];

  onWord(word: string) {
    if (word.length % 2 === 0) {
      word = this.partialEvenWord;        
    } else {
      word = this.partialOddWord;
    }
  }

  onPartialWord(word: string) {
    if (word.length % 2 === 0) {
      this.evenLengthWords[word]
      EventEmitter<EvenLengthWordsComponent>
    } else {
      this.oddLengthWords[word]
      EventEmitter<OddLengthWordsComponent>
    }
  }
}
