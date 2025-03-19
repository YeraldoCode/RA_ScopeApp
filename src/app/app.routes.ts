import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { SocialComponent } from './paginas/social/social.component';
import { AboutComponent } from './paginas/about/about.component';
import { UnblogComponent } from './paginas/unblog/unblog.component';


export const routes: Routes = [
    {
        path: 'unblog/:id',
        component: UnblogComponent,
        data: { title: 'Unblog' }
    },
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'blog', 
        component: BlogComponent 
    },
    { 
        path: 'social', 
        component: SocialComponent 
    },
    { 
        path: 'about', 
        component: AboutComponent 
    }
];
