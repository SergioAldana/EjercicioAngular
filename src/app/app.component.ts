import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Radioactividad -Definicion?';
  edad = 21;
  estudiantes = ['Sergio Andres', 'Jaime Lozano', 'Raul Moscada','Juanita Lopez']
  prendas = [
    {
      id: '1',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      title: 'Chaqueta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      title: 'Pantalon',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      title: 'Medias',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ]
}
