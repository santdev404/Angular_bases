import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  

  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPesonaje:EventEmitter<Personaje> = new EventEmitter();

  constructor(
    private _dbzSerive: DbzService
  ) { }

  ngOnInit(): void {
  }



  agregar(){

      if(this.nuevo.nombre.trim().length === 0 ){
        return;
      }

      this._dbzSerive.agregarPersonaje(this.nuevo);
      
      // this.onNuevoPesonaje.emit(this.nuevo);
        

        this.nuevo = {
          nombre: '',
          poder: 0
        
      
    }
  }

}
