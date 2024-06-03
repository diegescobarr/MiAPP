import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs2.page.html',
  styleUrls: ['./tabs2.page.scss'],
})
export class Tabs2Page {
  servicio = {
    nombre: '',
    ubicacion: '',
    telefono: ''
  }

  constructor() { }

  onSubmit() {
    console.log('Servicio:', this.servicio);
  }

  ngOnInit() {
  }

}
