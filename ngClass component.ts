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
  currentClasses = {};

  constructor() {
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    this.currentClasses = {
      seveable: this.isSpecial,
      special: this.canSave,
    };

  }
}

