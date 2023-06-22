import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

type IResutlRM = { info: any, results:any }
export type IResutlRMCharacter = { name: string, image:string  }

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(
    private _http: HttpClient
  ) { }

  getInfo(): Observable<IResutlRMCharacter[]> {
    return this._http.get<IResutlRM>('https://rickandmortyapi.com/api/character')
    .pipe( 
        //! OPERADORES
        map( res => res.results ),
        delay(2000)
     )
  }
}
