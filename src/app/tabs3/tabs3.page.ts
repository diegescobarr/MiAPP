import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private router: Router) { }

  goToFinancialPage() {
    this.router.navigate(['/financial']);
  }

  goToCameraPage() {
    this.router.navigate(['/camera']);
  }

  viewLocation() {
    this.router.navigate(['/map']);
  }

  onSubmit() {
    console.log('Cliente:', this.cliente);
  }

  /*ngOnInit() {
  }*/

}
