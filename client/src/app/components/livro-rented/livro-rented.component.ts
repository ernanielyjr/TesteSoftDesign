import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "src/app/models/Livro";
import { LivrosService } from "src/app/services/livros.service";

@Component({
  selector: "app-livro-rented",
  templateUrl: "./livro-rented.component.html",
  styleUrls: ["./livro-rented.component.css"],
})
export class LivroRentedComponent implements OnInit {
  livros: Livro[];
  isDisabled = false;

  constructor(
    private livroService: LivrosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

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
          alert("Livro está disponivel novamente!!");
        },
        (err) => console.log(err)
      );
  }
}
