import { Component } from '@angular/core';
import construct = Reflect.construct;


@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
 styleUrls: ['sandbox.component.css',]

})

export class SandboxComponent {
  name = 'John Doe';
  age = 35;
  person = {
    firstName: 'John',
    lastName: 'Doe'
  };

  constructor(){
    this.age = 40;
    this.changeName();
  }

  changeName() {
    this.person.lastName = 'Moyo';
  }

  displayAge() {
    return this.age;
  }

}

