import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Libro } from '../../models/libro';
import { LibroProvider } from '../../providers/libro/libro';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
value: string;
libro: Libro = new Libro();
libri: Libro[] = [];
libro2: Libro = new Libro();
id = 0;
  constructor(private libroProvider: LibroProvider, public navCtrl: NavController) {

  }
  ionViewDidLoad(){


  }
setData(){
  const lib = Object.assign({}, this.libro);
  alert(this.libro.name);
  this.libroProvider.addLibro(lib);
  this.libro.id = null;
  this.libro.name = '';
  this.libro.descrizione = '';
  this.libri = this.libroProvider.getLibri();
  }
getData(){
  this.libro2 = this.libroProvider.getLibro(this.id);
}
  clear(){

  }
}
