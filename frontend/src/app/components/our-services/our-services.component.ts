import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {


  servicesList = [
    { name: 'Delivery Services', icon: 'fa fa-truck fa-lg' },
    { name: 'Shipping & Return', icon: 'fas fa-exchange-alt' },
    { name: 'Promotion', icon: 'fa fa-percent' },
    { name: '24 Hours Service', icon: 'fa fa-user' }
  ];
}
