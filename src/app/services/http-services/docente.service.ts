import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/BackendURL';
import { HttpClient } from '@angular/common/http';
import { MensajeDTO } from '../../dtos/GlobalDTO/MensajeDTO';
import { CrearExamenDTO } from '../../dtos/estudiante/CrearExam';
import {PreguntaDTO} from "../../dtos/pregunta";

@Injectable({
  providedIn: 'root'
})
export class DocenteService {


  private URL_API: string = environment.ApiUrl;

  constructor(
    private htpp: HttpClient
  ) { }


  getName(id: string, rol:String): Observable<MensajeDTO> {
    return this.htpp.get<MensajeDTO>(`${this.URL_API}/docente/nombre/${id}/${rol}`);
  }


  getCourses(id: string): Observable<MensajeDTO> {
    return this.htpp.get<MensajeDTO>(`${this.URL_API}/docente/cursos/${id}/docente`);
  }

  getTodoTemas(idGrupo:number):Observable<MensajeDTO>{
    return this.htpp.get<MensajeDTO>(`${this.URL_API}/docente/temasCurso/${idGrupo}`);
  }

  crearExamen(examen: CrearExamenDTO):Observable<MensajeDTO>{
    return this.htpp.post<MensajeDTO>(`${this.URL_API}/docente/crearExamen`, examen);
  }

  getAllTemas():Observable<MensajeDTO>{
    return this.htpp.get<MensajeDTO>(`${this.URL_API}/docente/allTemas`);
  }

  crearPregunta(pregunta: PreguntaDTO): Observable<MensajeDTO> {
    return this.htpp.post<MensajeDTO>(`${this.URL_API}/docente/crearPregunta`, pregunta);
  }
}
