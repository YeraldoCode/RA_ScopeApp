import { Component, OnInit } from '@angular/core';
import { BlogService} from '../../service/blog.service';  
import { HttpErrorResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: any[] = []; // Variable que almacenará los blog

  constructor(private _srvBlog: BlogService) { }

  ngOnInit(): void {
    this._srvBlog.getBlogs().subscribe({
      next: (response: any) => {  
        if (response?.result?.post && Array.isArray(response.result.post)) { 
          this.blog = response.result.post; // Acceder al array correcto
        } else {
          console.warn('API response does not contain a valid blog array:', response);
          this.blog = []; // Evitar errores en la vista
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching blog:', error);
      }
    });
  }
}
