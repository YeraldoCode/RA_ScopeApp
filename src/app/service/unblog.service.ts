import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnblogService {

  private apiUrl = 'http://localhost/apiRA/';

  constructor(private _http: HttpClient) { }

  // Método para obtener un producto por su ID
  getUnblogById(id: number): Observable<any> {
    return this._http.get(`${this.apiUrl}?idPost=${id}`);
  }
}
