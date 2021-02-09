import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GiwebAngular';
  tituloNombre = 'David Felipe';
  subtituloApellido = 'Vega Sierra';
  imagen1 = '../../assets/Me.jpg'
  descripcion1 = 'Tengo 20 años, nací en Bogotá.';
  tituloHobby = 'Mi hobby';
  subtituloHobby = 'Fútbol';
  imagen2 = '../../assets/Futbol.jpg'
  descripcion2 = 'Junto a mi hermano y mi padre disfruto mucho jugar fútbol los fines de semana.';
  tituloUni = 'Mi universidad';
  subtituloUni = 'Universidad Distrital';
  imagen3 = '../../assets/UD.png'
  descripcion3 = 'Ingresé a la Universidad Distrital en el año 2018 a estudiar la carrera de Ingeniería de Sistemas.';
}
