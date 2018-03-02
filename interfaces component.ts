import { Component } from '@angular/core';
import construct = Reflect.construct;


@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
 styleUrls: ['sandbox.component.css',]

})

export class SandboxComponent {
  customer: Customer;
  customers: Customer[];

  constructor() {
    this.customer = {
      id: 1,
      name: 'John Doe',
      email: 'doe@fuckyou.com'
    };

    this.customers = [
      {
        id: 2,
        name: 'Joel Dube',
        email: 'doe@fucku.com'
      },
      {
        id: 3,
        name: 'Mace Moyo',
        email: 'doe@upyours.com'
      },
      {
        id: 4,
        name: 'Jone Ndlovu',
        email: 'do@fuckyou.com'
      },
      {
        id: 5,
        name: 'Pete Ncube',
        email: 'jj@fuckyou.com'
      }

    ];
  }

}

interface Customer {
  id: number;
  name: string;
  email: string;
}
