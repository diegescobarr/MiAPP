import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  nombre: string='';
  ubicacion: string='';
  telefono: string='';

  constructor(private activateroute:ActivatedRoute, private router:Router) { }

  onSubmit() {
    console.log('Servicio:', this.servicio);
  }

  ngOnInit() {
  }

  limpiar() {
    this.servicio.nombre = '';
    this.servicio.ubicacion = '';
    this.servicio.telefono = '';
  }

}
