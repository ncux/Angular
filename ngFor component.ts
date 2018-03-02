import { Component } from '@angular/core';
import construct = Reflect.construct;


@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
 styleUrls: ['sandbox.component.css']

})

export class SandboxComponent {
  sedans = ['Accord', 'Camry', 'Mazda6', 'Fusion'];
  sedans2 = [
    {
      oem: 'Toyota',
      model: 'Camry',
      my: 2018
    },
    {
      oem: 'Honda',
      model: 'Accord',
      my: 2018
    },
    {
      oem: 'Mazda',
      model: 'Mazda6',
      my: 2018
    },
    {
      oem: 'Ford',
      model: 'Fusion',
      my: 2018
    },
  ];

}

