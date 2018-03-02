import { Component } from '@angular/core';
import construct = Reflect.construct;


@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
 styleUrls: ['sandbox.component.css']

})

export class SandboxComponent {
  name: string = 'John Doe';
  showName: boolean = false;
  car: number = 1;

  constructor() {
    this.car = 13;
  }

}

