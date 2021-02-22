import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  miHeroe: string = '';
  heroeExiste: boolean = true;
  

  borrarHeroe() {
    let nombre = prompt(`Introduzca el nombre del superhéroe que quiera eliminar`);
    
    for (let i=0; i < this.heroes.length; i++) {

      if (nombre?.toLowerCase() == this.heroes[i].toLowerCase()) {
        this.heroes.splice(i, 1);
        this.heroeExiste = true;
      }
      else {
        this.heroeExiste = false;
      }
    }
    this.miHeroe = nombre || '';

  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
