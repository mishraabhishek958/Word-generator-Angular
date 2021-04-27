import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import arrayCountry from '../utils/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-generator';

  word = '';
  country = '';
  limit = 10;
  max_country = 20;
  random_number: number;

  handleSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.word = arrayWords.slice(0, this.limit).join(' ');
  }

  generateRandomNumber() {
    this.random_number = Math.floor(Math.random() * (this.max_country + 1));
    this.country = arrayCountry.slice(0, this.random_number).join(' ');
  }
}
