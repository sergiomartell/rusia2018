import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class Items {


  constructor(public api: Api, public afDB : AngularFireDatabase) { }

  query() {
    return this.afDB.list('masterSheet').valueChanges();
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
