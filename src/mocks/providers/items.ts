import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public afDB : AngularFireDatabase) { }

  query() {
    return this.afDB.list('masterSheet').valueChanges();
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
