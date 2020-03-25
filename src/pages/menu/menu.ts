import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public perfil_usuario: any = {};
  public srcImagenTitulo: string = 'assets/imgs/pantallas/imagen_modulo.png'
  public srcImagenReglas:string = 'assets/imgs/pantallas/aprendiend_reglas_dramaticales.png';
  public srcAvatarMenu:string = 'assets/imgs/pantallas/avatar_menu.png'
  public srcInstruccionesMenu:string = 'assets/imgs/pantallas/instrucciones_menu.png'
  public srcImagen1: string = ''
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.perfil_usuario = JSON.parse(sessionStorage.getItem('perfil_usuario'));
    this.srcImagen1 = this.perfil_usuario.imagen_perfil;
  }

}
