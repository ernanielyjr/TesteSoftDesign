import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  rentLivro = [];
  constructor() { }

  addToRent(livro) {
    this.rentLivro.push(livro);
  }

  getItems() {
    return this.rentLivro;
  }
}