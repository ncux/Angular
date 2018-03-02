import { Component } from '@angular/core';
import construct = Reflect.construct;


@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
 styles: [`
   .special {
   color: teal;
     font-style: oblique;
     font-size: 20px;
     text-transform: uppercase;
 }
 `]

})

export class SandboxComponent {

}

