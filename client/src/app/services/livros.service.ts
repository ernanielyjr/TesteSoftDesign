import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Response } from '@angular/http';
import { Observable, of } from 'rxjs';

import { Livro } from '../models/Livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  API_URI = 'http://localhost:3000/api';
  private headers: Headers = new Headers ({'Content-Type' : 'application/json'})
  
  constructor(
    private http: HttpClient,
  ) { }

  getLivros() {
    return this.http.get(`${this.API_URI}/livros`);
   }

  getLivro(id: number) {
    return this.http.get(`${this.API_URI}/livros/${id}`);
  }

  deleteLivro(id: number) {
    return this.http.delete(`${this.API_URI}/livros/${id}`);
  }

  saveLivro(livro: Livro) {
    return this.http.post(`${this.API_URI}/livros`, livro);
  }

  updateLivro(id: string|number, updatedLivro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.API_URI}/livros/${id}`, updatedLivro);
  }
//   updateLivro(livro: Livro): Promise<Livro> {
//     const url = `${this.API_URI}/livros/${livro.id}`; //app/cliente/:id
//     return this.http
//     .put(url, JSON.stringify(livro))
//     .toPromise()
//     .then(() => livro as Livro)  
// }

}
