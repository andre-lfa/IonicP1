import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slides = [
    {
      titulo: "Slide 1",
      descricao: "Testando o uso dos SLIDES na aplicação.",
      imagem: "assets/imgs/ciri.jpg",
    },
    {
      titulo: "Slide 2",
      descricao: "Testando...",
      imagem: "assets/imgs/cirilla.jpg",
    },
    {
      titulo: "Slide 3",
      descricao: "Testando...",
      imagem: "assets/imgs/79048356f2973d99702fe79df9feb5d5.jpg",
    }
  ];

  goPage() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}
