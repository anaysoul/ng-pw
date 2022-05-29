import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  length = 0;

  onButtonClick() {
    const NUMBERS = '0123456789';
    const LETTERS = 'abcdefghijklmnopqrstuvwyz';
    const SYMBOLS = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += LETTERS;
    }
    if (this.includeNumbers) {
      validChars += NUMBERS;
    }
    if (this.includeSymbols) {
      validChars += SYMBOLS;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
