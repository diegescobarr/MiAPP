import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarioRecibido: string='';
  passwordRecibido: string='';

  nombre: any='';
  apellido: any='';
  selectedOption: any='';
  selectedDate: any='';

  usuarioRecibidoPersistente: any='';

  constructor(private activateroute:ActivatedRoute, private router:Router, private alertController: AlertController) {
    this.activateroute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){

        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado'];

        localStorage.setItem('usuarioRecibidoPersistente', this.usuarioRecibido)

        console.log();
      }
      this.usuarioRecibido = params['usuarioEnviado'];
    })
  }

  ngOnInit() {
    this.nombre = localStorage.getItem("nombre");
    this.apellido = localStorage.getItem("apellido");
    this.selectedOption = localStorage.getItem("selectedOption");
    this.selectedDate = localStorage.getItem("selectedDate");

    this.usuarioRecibidoPersistente = localStorage.getItem("usuarioRecibidoPersistente");
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    })
    await alert.present();
  }

  mostrar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');

    }else {
      // Lógica para manejar el envio del formulario cuando es válido
        this.presentAlert('Su nombre:' +this.nombre+' '+this.apellido);

           localStorage.setItem('nombre', this.nombre);
           localStorage.setItem('apellido', this.apellido);
           localStorage.setItem('selectedOption', this.selectedOption);
           localStorage.setItem('selectedDate', this.selectedDate);
    }
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.selectedOption = '';
    this.selectedDate = '';

    localStorage.clear();
  }

}
