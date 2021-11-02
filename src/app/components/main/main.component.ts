import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  personas:Persona[];
  constructor(private personaService:PersonaService) { this.personas=[]}

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(
      personas => this.personas = personas

    )
  }
}
