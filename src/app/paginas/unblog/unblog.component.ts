import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-unblog',
  imports: [CommonModule],
  templateUrl: './unblog.component.html',
  styleUrls: ['./unblog.component.css']
})
export class UnblogComponent{

  json : any = [];
  unblog: any =[];
 
  constructor (private route : ActivatedRoute,
              private _serviceUnBlog:BlogService){} //copiamos y pegamos el servicio de servicios de productos ´q esta adentro
  ngOnInit(): void {
      this.route.params.subscribe(params=> {
        const Id_blog = params['id']; //se define la variable de id_producto que tendra el parametro como valo id...estara relacionado con rutas para constante
      this._serviceUnBlog.getBlog(Id_blog).subscribe ( //un get de servicios
        (Blog) => {
      this.json = Blog;
      this.unblog = this.json['result'];
      console.log(this.unblog);
 
        }
      )
      }
 
      )
  }
  
}

