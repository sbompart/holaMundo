import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  mostrar:boolean = false;

  frase:any = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Saul Bompart xD"
  };

  personas:string[] = ['Batman', 'SuperMan', 'SpiderMan'];
}
