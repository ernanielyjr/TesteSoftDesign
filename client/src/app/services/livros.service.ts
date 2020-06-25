import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Livro } from "../models/Livro";

@Injectable({
  providedIn: "root",
})
export class LivrosService {
  private API_URI = "http://localhost:5555";

  constructor(private http: HttpClient) {}

  getLivros() {
    return this.http.get(`${this.API_URI}/livros`);
  }

  getRentLivros() {
    return this.http.get(`${this.API_URI}/rentLivros`);
  }

  getLivro(id: number) {
    return this.http.get(`${this.API_URI}/livros/${id}`);
  }

  getRentLivro(id: number) {
    return this.http.get(`${this.API_URI}/rentLivros/${id}`);
  }

  deleteLivro(id: number) {
    return this.http.delete(`${this.API_URI}/livros/${id}`);
  }

  deleteRentLivro(id: number) {
    return this.http.delete(`${this.API_URI}/rentLivros/${id}`);
  }

  saveLivro(livro: Livro) {
    return this.http.post(`${this.API_URI}/livros`, livro);
  }

  saveRentLivro(livro: Livro) {
    return this.http.post(`${this.API_URI}/rentLivros`, livro);
  }

  updateLivro(id: string | number, updatedLivro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.API_URI}/livros/${id}`, updatedLivro);
  }
}
