import { Injectable } from '@angular/core';

import { Item } from '../../models/item';




@Injectable()
export class Items {
  items: Item[] = [];

  worldCupData: any = {

  };

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() { }

  fetch(){
    return this.worldCupData;
  }

  query() {
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
