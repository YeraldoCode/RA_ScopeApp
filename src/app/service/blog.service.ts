import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl ='http://localhost/apiRA';

  constructor(private _http: HttpClient) { }

  //metodo con tipo de retorno observable
  getBlogs(): Observable<any>{
    return this._http.get<any>(this.apiUrl);
  }
}
