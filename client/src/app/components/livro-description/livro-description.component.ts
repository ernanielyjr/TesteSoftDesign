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
  
  livro : Livro;
  edit: boolean = false;
 

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
    });
  }

}
