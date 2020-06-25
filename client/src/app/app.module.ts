import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alerts/alert.component';
import { HomeComponent } from './components/home/home.component';
import { LivroDescriptionComponent } from './components/livro-description/livro-description.component';
import { LivroEditComponent } from './components/livro-edit/livro-edit.component';
import { LivroFormComponent } from './components/livro-form/livro-form.component';
import { LivroRentedComponent } from './components/livro-rented/livro-rented.component';
import { LivrosListComponent } from './components/livros-list/livros-list.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { FilterPipe } from './filter.pipe';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { LivrosService } from './services/livros.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LivrosListComponent,
    LivroFormComponent,
    LivroDescriptionComponent,
    LivroRentedComponent,
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
