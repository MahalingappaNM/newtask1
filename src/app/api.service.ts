import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private http:HttpClient) { }

  
  getAllstates():Observable<any[]>{
    return this.http.get<any[]>('https://api.minebrat.com/api/v1/states');
  
  }

  getCitiesByState(stateId:number):Observable<any[]>{
    return this.http.get<any[]>(`https://api.minebrat.com/api/v1/states/sates/cities/${stateId}`);
  }
}
