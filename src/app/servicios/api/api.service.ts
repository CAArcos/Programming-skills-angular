import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import{ListaempleadosI}from '../../modelos/listaempleados.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://localhost:8080/api/";
  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<ListaempleadosI[]>{
    let direccion = this.url+"empleados";
    return this.http.get<ListaempleadosI[]>(direccion);
  }
}

