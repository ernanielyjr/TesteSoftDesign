import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { LivrosService } from 'src/app/services/livros.service';
import { Livro } from 'src/app/models/Livro';

@Component({
  selector: 'app-livro-description',
  templateUrl: './livro-description.component.html',
  styleUrls: ['./livro-description.component.css']
})

export class LivroDescriptionComponent implements OnInit {
  livros: Livro[];
  livro : Livro;
  isDisabled: boolean = false;

  constructor(
    private livroService: LivrosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.livro = new Livro;
    this.activatedRoute.params.forEach((params: Params)=>{
      let id: number = +params['id'];
      if(id){
        this.livroService.getLivro(id)
        .toPromise()
        .then((livro: Livro)=> {
             console.log(livro);
             this.livro = livro;
        });
      }
        if(id){
          this.livroService.getRentLivro(id)
          .toPromise()
          .then((livro: Livro)=> {
            this.isDisabled = true
          });
        }
    });
  }

  saveNewRentLivro() {
  
    this.livroService.saveRentLivro(this.livro)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/livros']);
          alert("Livro alugado com sucesso")
        },
        err => console.error(err, alert("Livro ja está alugado!!"))
      )
  }

  delLivro(id: number) {
    this.livroService.deleteLivro(id)
    .toPromise()
      .then((livros : Livro[]) => {
          this.livros = livros;
      },
        err => console.log(err)
      )
  }

  delRentLivro(id: number) {
    this.livroService.deleteRentLivro(id)
    .toPromise()
      .then((livros : Livro[]) => {
          this.livros = livros;
      },
        err => console.log(err)
      )
  }

}