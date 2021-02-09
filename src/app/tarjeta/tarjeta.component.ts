import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() nombre : any;
  @Input() apellido : any;
  @Input() edad : any;
  @Input() hobby : any;
  @Input() equipo : any;
  @Input() universidad : any;
  @Input() carrera : any;

  constructor() { }

  ngOnInit(): void {
  }

}
