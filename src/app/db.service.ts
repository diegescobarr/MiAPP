import { Injectable } from '@angular/core';
import { NgSelectOption } from '@angular/forms';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  public db!: SQLiteObject;

  //observable
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, 
              private toastController: ToastController) { 
      this.initDatabase();
  }

  private initDatabase() {
    this.sqlite.create({
      name: 'diegodb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {

      this.isDBReady.next(true);
      this.db = db;
      this.createTables();
      this.isDBReady.next(true); //Emitimos True cuando la base de datos esté lista
      this.presentToast('Base de datos y tabla creadas con éxito', 3000);

    }).catch(error => this.presentToast('Error al insertar usuario:'+ error, 3000));
  }

  private createTables() {
    this.db.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        nombre TEXT, 
        apellido TEXT, 
        usuario TEXT, 
        password TEXT, 
        nivel_de_estudios TEXT)`, [])
      .then(() => this.presentToast('Table created', 2000))
      .catch(error => this.presentToast('Error creating table'+ error, 2000));
  }

  insertUsuario(nombre: string, 
                apellido: string,
                usuario: string,
                password: string,
                selectedOption: string) {
    
    return this.db.executeSql(`INSERT INTO usuarios (nombre, apellido, usuario, password, nivel_de_estudios) VALUES(?, ?, ?, ?, ?);`,
    [nombre, apellido, usuario, password, selectedOption])
    .then(() => this.presentToast('Usuario insertado correctamente'))
    .catch(error => this.presentToast('Error al insertar usuario:'+ error))
  } 

  validarUsuario(usuario: string, password: string) {
    return this.db.executeSql('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password])
      .then((res) => {
        if (res.rows.length > 0) {
          return res.rows.item(0); // Retorna el primer usuario que coincide
        } else {
          return null; // Retorna null si no se encontró ningún usuario
        }
      })
      .catch(error =>  this.presentToast('Error al obtener usuario :' + error));
  }

  private async presentToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  // esta función indica que está lista para usarse
  getIsDBReady() {
    return this.isDBReady.asObservable();
  }

  /*getUsuario(usuario:string, password:string){
    this.db.executeSql(`SELECT * FROM usuarios WHERE uruario = ? AND password = ?;`, [usuario, password]);
  }*/

  // Método para borrar los datos de la tabla "usuarios"
  clearUsuarios() {
    return this.db.executeSql('DELETE FROM usuarios', [])
      .then(() => this.presentToast('Datos de la tabla usuarios borrados'))
      .catch(error => this.presentToast('Error al borrar los datos de la tabla usuarios:' + error));
  }
}
