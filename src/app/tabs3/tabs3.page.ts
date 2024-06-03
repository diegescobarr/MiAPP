import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs3',
  templateUrl: './tabs3.page.html',
  styleUrls: ['./tabs3.page.scss'],
})
export class Tabs3Page {
  cliente = {
    nombre: '',
    servicio: '',
    descripcion: ''
  };

  constructor() { }

  onSubmit() {
    console.log('Cliente:', this.cliente);
  }

  /*ngOnInit() {
  }*/

}
