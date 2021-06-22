import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {


  // @Input() personajes: Personaje[] = [];

  constructor(
    private _dbzSerive: DbzService
  ) { }


  get personajes(){
    return this._dbzSerive.personajes;
  }

  ngOnInit(): void {
  }

}
