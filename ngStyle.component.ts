import { Component } from '@angular/core';
import construct = Reflect.construct;


@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
 styleUrls: ['sandbox.component.css']

})

export class SandboxComponent {
  isSpecial = false;
  canSave = true;
  currentStyles = {};

  constructor() {
    this.setCurrentStyles();
  }

  setCurrentStyles() {
    this.currentStyles = {
      'color': this.canSave ? 'teal' : 'blue',
      'font-style': this.isSpecial ? 'bold' : 'italic'
    };
  }

}

