import { Component } from '@angular/core';
import construct = Reflect.construct;


@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
 styleUrls: ['sandbox.component.css']

})

export class SandboxComponent {
  birthday = new Date(1988, 2, 9);
  total = 987;
  tax = 0.2;
}

