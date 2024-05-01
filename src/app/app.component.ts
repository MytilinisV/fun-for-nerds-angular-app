import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FunForNerdsComponent } from "./fun-for-nerds/fun-for-nerds.component";
import { EvenLengthWordsComponent } from './even-length-words/even-length-words.component';
import { OddLengthWordsComponentComponent } from './odd-length-words-component/odd-length-words-component.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FunForNerdsComponent, EvenLengthWordsComponent, OddLengthWordsComponentComponent, FunForNerdsComponent]
})
export class AppComponent {
  title = 'fun-for-nerds-angular-app';
}
