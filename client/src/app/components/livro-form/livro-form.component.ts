import { Component, OnInit, HostBinding } from '@angular/core';
import { LivrosService } from 'src/app/services/livros.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Livro } from 'src/app/models/Livro';
@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  livro : Livro;
  edit: boolean = false;

  constructor(
    private livroService: LivrosService,
     private router: Router,
      private activatedRoute: ActivatedRoute
      ) { }

  ngOnInit(): void {
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
    });
  }

  saveNewLivro() {
    this.livroService.saveLivro(this.livro)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/livros']);
        },
        err => console.error(err)
      )
  }
}
