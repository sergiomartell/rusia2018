import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  matches: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.matches = navParams.get('item') || items.defaultItem;
    console.log(JSON.stringify(JSON.stringify(this.matches)));

  }

}
