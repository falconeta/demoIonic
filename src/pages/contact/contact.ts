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
id = 0;
nome = '';
descrizione = '';
idlibro= 0;
  constructor(private libroProvider: LibroProvider, public navCtrl: NavController) {
    
  }
  ionViewDidLoad(){
    

  }
setData(){
  alert(this.libro.name);
  const x = new Libro();
  x.descrizione = this.descrizione;
  x.name = this.nome;
  x.id = this.idlibro;
  this.libroProvider.addLibro(x);
  this.idlibro = 0;
  this.descrizione = '';
  this.nome = '';
  this.libri = this.libroProvider.getLibri();
  }
getData(){
  this.libro = this.libroProvider.getLibro(this.id);
}
  clear(){
    
  }
}
