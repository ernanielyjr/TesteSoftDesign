import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { LivrosService } from 'src/app/services/livros.service';
import { Livro } from 'src/app/models/Livro';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-livro-description',
  templateUrl: './livro-description.component.html',
  styleUrls: ['./livro-description.component.css']
})

export class LivroDescriptionComponent implements OnInit {
  
  livro : Livro;
  isDisabled: boolean = false;
  rentLivro = [];
  quantidade = 1;

  constructor(
    private livroService: LivrosService,
    private activatedRoute: ActivatedRoute,
    private rentService: RentService
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

    const productExistInRent = this.rentLivro.find(({name}) => name === this.livro.name);
    if(productExistInRent){
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }

  open(content) {
    this.rentLivro = this.rentService.getItems();
    // this.modalService.open(content);
  }

  addToRent(livro) {
    if(this.quantidade >= 1){
      const productExistInRent = this.rentLivro.find(({name}) => name === livro.name);
      if (!productExistInRent) {
        this.rentLivro.push({...livro});
        console.log(this.rentLivro)
      }
    }
  }

}