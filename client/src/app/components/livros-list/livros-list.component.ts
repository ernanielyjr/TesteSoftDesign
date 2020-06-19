import { Component, OnInit, HostBinding } from '@angular/core';

import { LivrosService } from '../../services/livros.service';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.css'],
})

export class LivrosListComponent implements OnInit {

  livros: Livro[];

  constructor(private livroService: LivrosService) { }


  ngOnInit() {
    this.getLivros();
  }

  getLivros() {
    this.livroService.getLivros()
    .toPromise()
        .then((livros : Livro[]) => {
            this.livros = livros;
        }).catch(err => console.log(err));
  }

  delLivro(id: number) {
    this.livroService.deleteLivro(id)
    .toPromise()
      .then((livros : Livro[]) => {
          this.livros = livros;
          this.getLivros();
      },
        err => console.log(err)
      )
  }

  delRentLivro(id: number) {
    this.livroService.deleteRentLivro(id)
    .toPromise()
      .then((livros : Livro[]) => {
          this.livros = livros;
          this.getLivros();
      },
        err => console.log(err)
      )
  }

}
