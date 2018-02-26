import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  data: any;
  source: any;
  constructor(public navCtrl: NavController, public params : NavParams ) {
    this.source = params.get('source');
    let input = params.get('item');
    if(this.source == 'sheet'){
      this.data = {
        "title" : input[0],
        "subtitle" : input[1],
        "date" : input[2],
        "notes": input[3],
        "details1" : input[4],
      };
      if(input[5] !== ""){
        this.data.profilePic = input[5]
      }
      else {
        this.data.profilePic = 'assets/img/animatedHeader.png';
      }
    }
  }

}
