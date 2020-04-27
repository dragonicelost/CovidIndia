import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './Model/Data';


@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  constructor(private http:HttpClient) { 
   


  }

    url:string="https://api.rootnet.in/covid19-in/stats/latest";
    getData():Observable<Data>
    {
      return this.http.get<Data>(this.url);
    }


  }
