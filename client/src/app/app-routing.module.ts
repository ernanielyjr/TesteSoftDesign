import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivroDescriptionComponent } from './components/livro-description/livro-description.component';
import { LivrosListComponent } from './components/livros-list/livros-list.component';
import { LivroFormComponent } from './components/livro-form/livro-form.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: 'users',
    component: HomeComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'livros',
    component: LivrosListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'livros/add',
    component: LivroFormComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'livros/edit/:id',
    component: LivroFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'livros/description/:id',
    component: LivroDescriptionComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '**',
    redirectTo: 'livros' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
