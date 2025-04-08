import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Blog } from '../post/newblog/Blog';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ //para agregar lo de nuevoproductos comenzamos agregando esta constante
    'Content-Type':'application/x-www-form-irlencoded',
  })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor(private _http: HttpClient) { }
 
  getAllBlogs(){

    return this._http.get(`http://apira.com/blog`);

  }
  getBlog(id: number) :Observable<any>{

    return this._http.get(`http://apira.com/blog?select=idPost,titulo,descripcion,image&where=idPost=`+ id);
  }  
  newBlog(newblog: Blog){
    const body = new URLSearchParams();
    body.set('titulo', newblog.titulo);
    body.set('descripcion', newblog.descripcion);
  
    return this._http.post(
      'http://apira.com/blog',
      body.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
  }

}
