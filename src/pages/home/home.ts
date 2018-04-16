import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public filmes;

  constructor(public navCtrl: NavController) {
    this.filmes = [
      {nome: "meu ovo", descricao: "meu ovo elevado a dois"},
      {nome: "meu ovo 2", descricao: "meu ovo elevado a três"},
      {nome: "meu ovo 3", descricao: "meu ovo ao quadrado"},
      {nome: "meu ovo 4", descricao: "meu ovo a quinta potência"}
    ] 
  }

 

}
