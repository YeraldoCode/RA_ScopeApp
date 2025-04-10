import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { SocialComponent } from './paginas/social/social.component';
import { AboutComponent } from './paginas/about/about.component';
import { UnblogComponent } from './paginas/unblog/unblog.component';
import { NewblogComponent } from './post/newblog/newblog.component';
import { LoginComponent } from './paginas/login/login.component';
import { PrincipalComponent } from './paginas/principal/principal.component';


export const routes: Routes = [
    {
        path: 'home',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path : 'home',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'principal',
        component: PrincipalComponent
    },
    {
        path: 'newblog',
        component: NewblogComponent,
        data: { title: 'New Blog' }
    },
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
