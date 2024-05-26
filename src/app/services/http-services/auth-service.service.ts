import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SesionDTO } from '../../dtos/autenticacion/SesionDTO';
import { TokenDTO } from '../../dtos/autenticacion/TokenDTO';
import { BackendURL } from '../../enviroments/BackendURL';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  route: string;

  constructor(
    private http: HttpClient
  ) { 
    this.route = '/api/auth'
  }



  async login(logion: SesionDTO) {
    return await this.http.post<TokenDTO>(BackendURL+'/login', logion);
  }
}
