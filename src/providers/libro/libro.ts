import { Injectable } from '@angular/core';
import { Libro } from '../../models/libro';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the LibroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LibroProvider {
  libri: Libro[] = [];
  constructor(private nativeStorage: NativeStorage) {
    console.log('Hello LibroProvider Provider');
    this.nativeStorage.getItem('libri').then(libri => this.libri = libri);
  }
  addLibro(libro: Libro) {
    this.libri.push(libro);
    this.nativeStorage.setItem('libri', this.libri).then(() => alert('ok!'));
  }
  getLibro(id): Libro {
    return this.libri.find(libro => libro.id = id);
  }
  getLibri(): Libro[] {
    return this.libri;
  }
}
