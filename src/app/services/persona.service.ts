import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlEndPoint:string = "http://localhost:8080/api/estudiante";
  constructor(private http:HttpClient) { }
  getPersonas():Observable<Persona[]> {
    return this.http.get (this.urlEndPoint).pipe(
      map((response) => response as Persona[])
    );
  }
}
