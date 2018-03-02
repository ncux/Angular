import { Component } from '@angular/core';
import construct = Reflect.construct;


@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
 styleUrls: ['sandbox.component.css']

})

export class SandboxComponent {
  model: string = '';
  my: number = 0;
  cars: string[] = ['Accord', 'Camry', 'Mazda6', 'Fusion'];

  submitter() {
    this.cars.push(this.model);
    this.model = '';
  }
}

