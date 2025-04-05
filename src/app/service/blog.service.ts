import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor(private _http: HttpClient) { }
 
  getAllBlogs(){

    return this._http.get(`http://apira.com/post`);

  }
  getBlog(id: number) :Observable<any>{

    return this._http.get(`http://apira.com/post?select=idPost,titulo,descripcion,image&where=idPost=`+ id);
  }  


}
