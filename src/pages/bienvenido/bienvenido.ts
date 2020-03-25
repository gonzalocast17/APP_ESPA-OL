import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the BienvenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bienvenido',
  templateUrl: 'bienvenido.html',
})
export class BienvenidoPage {
  perfil_usuario: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.perfil_usuario = JSON.parse(sessionStorage.getItem('perfil_usuario'));
    this.srcImagen1 = this.perfil_usuario.imagen_perfil;
  }

  public srcImagenTitulo: string = 'assets/imgs/pantallas/bienvenido.png'
  public srcImagen1: string = ''

irMenu():void{
  this.navCtrl.push(MenuPage);
}

}


