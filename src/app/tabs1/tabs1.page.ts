import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service.models';

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.page.html',
  styleUrls: ['./tabs1.page.scss'],
})
export class Tabs1Page implements OnInit {
  services: Service[] = [
    {
      name: 'Taller Mecánico Juanito',
      location: 'Av. Grecia 2244, Peñalolen',
      phone: '+56911223344'
    },
    {
      name: 'Servicio Tecn. Juan Mena',
      location: 'Los Robles 3255, Puente Alto',
      phone: '+56911223345'
    },
    {
      name: 'DyP Don Cesar',
      location: 'Av. Quilin 2876, Macul',
      phone: '+56911223346'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
