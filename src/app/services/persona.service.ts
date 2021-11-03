import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlEndPoint:string = "http://localhost:8080/api/estudiante";
  private header = new HttpHeaders ({'Content-type':'application/json'});

  constructor(private http:HttpClient) { }
  getPersonas():Observable<Persona[]> {
    return this.http.get (this.urlEndPoint).pipe(
      map((response) => response as Persona[])
    );
  }
  createPersonas(persona:Persona):Observable<Persona> {
    return this.http.post<Persona>(this.urlEndPoint,
      persona,{headers:this.header});
  }
}
