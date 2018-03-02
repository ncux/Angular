import { Component } from '@angular/core';
import construct = Reflect.construct;


@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
 styleUrls: ['sandbox.component.css']

})

export class SandboxComponent {
  user = {
    name: '',
    email: 'phone',
    phone: ''
  };

  submitter({value, valid}) {
    if(valid){
} else {
    }
  }
}


