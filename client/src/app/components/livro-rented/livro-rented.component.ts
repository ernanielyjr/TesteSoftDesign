import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/Livro';
import { LivrosService } from '../../services/livros.service';

@Component({
  selector: 'app-livro-rented',
  templateUrl: './livro-rented.component.html',
  styleUrls: ['./livro-rented.component.css'],
})
export class LivroRentedComponent implements OnInit {
  livros: Livro[];
  isDisabled = false;

  constructor(
    private livroService: LivrosService,
  ) { }

  ngOnInit() {
    this.getRentLivros();
  }

  getRentLivros() {
    this.livroService
      .getRentLivros()
      .toPromise()
      .then((livros: Livro[]) => {
        this.livros = livros;
      })
      .catch((err) => console.log(err));
  }

  delRentLivro(id: number) {
    this.livroService
      .deleteRentLivro(id)
      .toPromise()
      .then(
        (livros: Livro[]) => {
          this.livros = livros;
          alert('Livro está disponivel novamente!!');
        },
        (err) => console.log(err)
      );
  }
}
