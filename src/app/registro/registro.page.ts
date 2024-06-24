import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from '../db.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: any='';
  apellido: any='';
  usuario: any='';
  password: any='';
  selectedOption: any='';
  selectedDate: any='';

  isDBReady: boolean = false;

  constructor(private activateroute:ActivatedRoute, 
              private router:Router, 
              private alertController: AlertController,
              private dbService: DbService) { }

  ngOnInit() {
    this.dbService.getIsDBReady().subscribe(isReady => {
      this.isDBReady = isReady;
      if(isReady) {

      }
    })
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    })
    await alert.present();
  }

  guardar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
      this.guardarDatos();
    }
  }

  guardarDatos() {
    this.dbService.insertUsuario(this.nombre, this.apellido, this.usuario, this.password, this.selectedOption, this.selectedDate)
    .then(() => {
      this.presentAlert('Datos guardados exitosamente');
    })
    .catch(error => {
      this.presentAlert('Error al guardar datos:'+ error);
    });
  }

}
