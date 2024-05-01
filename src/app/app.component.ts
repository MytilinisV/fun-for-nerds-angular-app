import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FunForNerdsComponent } from "./components/fun-for-nerds/fun-for-nerds.component";
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';
import { OddLengthWordsComponentComponent } from './components/odd-length-words-component/odd-length-words-component.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FunForNerdsComponent, EvenLengthWordsComponent, OddLengthWordsComponentComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'fun-for-nerds-angular-app';
}
