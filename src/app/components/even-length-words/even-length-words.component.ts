import { Component, Input } from '@angular/core';
import { FunForNerdsComponent } from '../fun-for-nerds/fun-for-nerds.component';

@Component({
  selector: 'app-even-length-words',
  standalone: true,
  imports: [],
  templateUrl: './even-length-words.component.html',
  styleUrl: './even-length-words.component.css'
})
export class EvenLengthWordsComponent {
  @Input() evenLengthWords: string [];
  @Input() evenWord = '';
}
