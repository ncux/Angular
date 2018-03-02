import { Component } from '@angular/core';
import construct = Reflect.construct;


@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
 styleUrls: ['sandbox.component.css']

})

export class SandboxComponent {
  text: string = 'Hi world';
  value: boolean = false;

  changeValue() {
    this.text = 'Bye world';
  }

  showOrHide() {
    this.value = !this.value;
  }

}

