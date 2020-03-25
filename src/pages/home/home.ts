import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BienvenidoPage } from '../bienvenido/bienvenido';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public srcImagenTitulo: string = 'assets/imgs/pantallas/elige_avatar.png';
  public srcImagen1: string = 'assets/imgs/pantallas/imagen_usuario_1.png'
  public srcImagen2s: string = 'assets/imgs/pantallas/imagen_usuario_2.png'

  public perfil_usuario: any = {
    nombre: "",
    imagen_perfil: "",
    disabledInput: true
  }

  guardarImagen1(): void {
    this.perfil_usuario.imagen_perfil = "assets/imgs/pantallas/imagen_usuario_1.png";
    this.perfil_usuario.disabledInput=false;
    console.log("Perfil", this.perfil_usuario);
    sessionStorage.setItem('perfil_usuario',JSON.stringify(this.perfil_usuario));
   
  }

  guardarImagen2(): void {
    this.perfil_usuario.imagen_perfil = "assets/imgs/pantallas/imagen_usuario_2.png";
    this.perfil_usuario.disabledInput=false;
    sessionStorage.setItem('perfil_usuario',JSON.stringify(this.perfil_usuario));
    console.log("Perfil", this.perfil_usuario);
  }

  guardar():void{
    sessionStorage.setItem('perfil_usuario',JSON.stringify(this.perfil_usuario));
    console.log("Perfil", this.perfil_usuario);
    this.navCtrl.push(BienvenidoPage)
  }




  constructor(public navCtrl: NavController) {
    this.perfil_usuario;

  }

}
