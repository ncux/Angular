import { Component } from '@angular/core';
import construct = Reflect.construct;


@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
 styleUrls: ['sandbox.component.css']

})

export class SandboxComponent {
  clicker(e) {
    alert('Button clicked');
  }

  aleter() {
    alert('You hovered!');
  }

}

