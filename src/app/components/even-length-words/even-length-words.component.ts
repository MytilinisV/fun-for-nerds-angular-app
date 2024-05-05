import { Component, Input } from '@angular/core';
import { manyWords } from '../interface/many-words';

@Component({
  selector: 'app-even-length-words',
  standalone: true,
  imports: [],
  templateUrl: './even-length-words.component.html',
  styleUrl: './even-length-words.component.css'
})
export class EvenLengthWordsComponent {
  @Input() manyWords: string[] = [];
  @Input() partialWord: string = '';
  
}
