//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.page.html',
  styleUrls: ['./financial.page.scss'],
})
export class FinancialPage implements OnInit {

  financialData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchFinancialData();
  }

  fetchFinancialData() {
    // Solicitud HTTP GET a la URL correspondiente a la API ´https://mindicador.cl/api´
    this.http.get('https://mindicador.cl/api').subscribe((response: any) => {
      //imprime respuesta de la API
      console.log(response);
      //Transforma la respuesta de la API
      this.financialData = this.transformData(response);
    });
  }

  //Definición de la función transformData
  transformData(data: any): any[] {
    const result = [];

    for (const key in data) {

      if (data.hasOwnProperty(key) && typeof data[key] === 'object')
      {
        result.push(data[key]);
      }
    }
    //Devolver el array result
    return result; 
  }

}
