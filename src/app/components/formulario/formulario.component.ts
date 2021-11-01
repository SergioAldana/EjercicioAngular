import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  title:string = "Esta es la pagina para insertar";
  constructor() { }

  ngOnInit(): void {
  }

}
