import { Component } from '@angular/core';
import { FunForNerdsComponent } from '../fun-for-nerds/fun-for-nerds.component';
import { EvenLengthWordsComponent } from '../even-length-words/even-length-words.component';

@Component({
  selector: 'app-odd-length-words-component',
  standalone: true,
  imports: [FunForNerdsComponent, EvenLengthWordsComponent],
  templateUrl: './odd-length-words-component.component.html',
  styleUrl: './odd-length-words-component.component.css'
})
export class OddLengthWordsComponentComponent {

}
