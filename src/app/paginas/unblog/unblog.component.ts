import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UnblogService } from '../../service/unblog.service';

@Component({
  selector: 'app-unblog',
  imports: [CommonModule],
  templateUrl: './unblog.component.html',
  styleUrls: ['./unblog.component.css']
})
export class UnblogComponent implements OnInit {
  post: any = null; // Variable donde se guardará el post

  constructor(
    private route: ActivatedRoute, // Para obtener el parámetro de la URL
    private _srvUnblog: UnblogService // Servicio para obtener el post
  ) {}

  ngOnInit(): void {
    // Obtener el ID del post desde la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this._srvUnblog.getUnblogById(id).subscribe((response) => {
        if (response.result.post) {
          this.post = response.result.post.find((p: any) => p.idPost === id);
        }
      });
    }
  }
}
