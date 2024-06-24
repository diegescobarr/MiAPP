import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from '../db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string="";
  password: string="";

  constructor(private alertController:AlertController, 
              private router:Router,
              private dbService:DbService) { }


  ngOnInit() {
  }


  async login() {
    const usuario = await this.dbService.validarUsuario(this.usuario, this.password);
    if (usuario) {
      // Usuario válido, realizar acciones de inicio de sesión
      let NavigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }

      } 
      this.router.navigate(['/tabs/home'],NavigationExtras);
    } else {
      // Usuario inválido, mostrar mensaje de error
      this.presentAlert('No existe el usuario en la base datos');
    }
  }
  /*login(){
    if (this.dbService.getUsuario(this.usuario, this.password)){
        let navigationExtras: NavigationExtras = {

        }
        this.router.navigate(['/tabs/home'], {queryParams: { usuarioEnviado: this.usuario} });
        
    }
    else{
      this.presentAlert('Incorrecto');
    }

  }*/

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']

    });

    await alert.present();

  }

crear_cuenta()
{
  this.router.navigate(['/registro']); //registro
}
}

