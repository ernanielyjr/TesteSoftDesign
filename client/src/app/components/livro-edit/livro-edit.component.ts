import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Livro } from '../../models/Livro';
import { LivrosService } from '../../services/livros.service';

@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.css'],
})
export class LivroEditComponent implements OnInit {
  livro: Livro;
  edit = false;

  constructor(
    private livroService: LivrosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.livro = new Livro();
    this.activatedRoute.params.forEach((params: Params) => {
      const id: number = +params['id'];
      if (id) {
        this.livroService
          .getLivro(id)
          .toPromise()
          .then((livro: Livro) => {
            console.log(livro);
            this.livro = livro;
          });
      }
    });
  }

  updateLivro() {
    this.livroService.updateLivro(this.livro.id, this.livro).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/livros/description']);
      },
      (err) => console.error(err)
    );
  }
}
