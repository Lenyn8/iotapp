import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  numero1: number;
  numero2: number;
  numero3: number;
  respuesta: number;

  constructor() {
    console.log("Hola estoy en constructor")
   }

  ngOnInit() {
    console.log('ngoinit()')
    this.sumar()
  }

  sumar(){
    let pepito : number = this. numero1 + this.numero2 + this.numero3;

    console.log ('La suma es: ', pepito)
  }

  restar(){
    const restar: number = this.numero1 - this.numero2 - this.numero3;
    this.respuesta = restar;
    console.log ('La resta es: ', restar)

    }


    calcular(){
      const calcular: number = this.numero1 + this.numero2 + this.numero3 /3;
      this.respuesta = calcular
      console.log('El promedio es: ', calcular)
    }

  
}
