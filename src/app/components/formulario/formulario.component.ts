import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  title: string = "Esta es la pagina para insertar";
  persona: Persona;

  constructor(private personaService: PersonaService,
    private router: Router, private activate: ActivatedRoute) { this.persona = new Persona(0, '', '') }

  ngOnInit(): void {
    this.cargarPersona()
  }
  cargarPersona(): void {
    this.activate.params.subscribe(params => {
      let id = params["id"];
      if (id) {
        this.personaService.getPersona(id).subscribe(persona => this.persona = persona);
      }
    })
  }
  update(): void {
    this.personaService.updatePersona(this.persona).subscribe(
      response => {
        this.router.navigate(['/']);
        Swal.fire('Se ha actualizado la persona', '', 'success')
      }
    )
  }
  create(): void {
    this.personaService.createPersonas(this.persona).subscribe(
      response => {
        this.router.navigate(['/'])
        Swal.fire('Nueva persona creada ' + this.persona.nombre);
      }
    );
  }
}
