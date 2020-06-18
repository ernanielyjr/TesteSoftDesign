import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosListComponent } from './components/livros-list/livros-list.component';
import { LivroFormComponent } from './components/livro-form/livro-form.component';
import { LivroDescriptionComponent } from './components/livro-description/livro-description.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './components/alerts/alert.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FilterPipe } from './filter.pipe';

// Services
import { LivrosService } from './services/livros.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { LivroEditComponent } from './components/livro-edit/livro-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LivrosListComponent,
    LivroFormComponent,
    LivroDescriptionComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    FilterPipe,
    LivroEditComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    LivrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
