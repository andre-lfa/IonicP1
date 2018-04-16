import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  constructor() {
  }

  // serve para pegar o estado dolocalstorege
  getConfigData(): any {
    return localStorage.getItem("config");
  }
  //seta o estado do root passando pelo provider
  setConfigData(showSlide: boolean) {
    let config = {
      showSlide: false,
    }
    if (showSlide)
      config.showSlide = showSlide;

    localStorage.setItem("config", JSON.stringify(config))
  }

}
