import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public afDB: AngularFireDatabase) {
    this.currentItems = afDB.list('data/groups').valueChanges();
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      //this.currentItems = [];
      return;
    }
   /* this.currentItems = this.items.query({
      name: val
    });*/
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item.matches,
      group : item.icon
    });
  }

}
