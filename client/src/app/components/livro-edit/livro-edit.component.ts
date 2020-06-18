import { Component, OnInit, HostBinding } from '@angular/core';
import { LivrosService } from 'src/app/services/livros.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Livro } from 'src/app/models/Livro';
@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.css']
})
export class LivroEditComponent implements OnInit {
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

  updateLivro() {
    this.livroService.updateLivro(this.livro.id, this.livro)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/livros/description']);
        },
        err => console.error(err)
      )
  }
}
