import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  data: any;
  source: any;
  constructor(public navCtrl: NavController, public params : NavParams, public cal : Calendar) {
    this.source = params.get('source');
    let input = params.get('item');
    if(this.source == 'sheet'){
      this.data = {
        "type" : input[0],
        "title" : input[1],
        "date" : input[2],
        "location": input[3],
        "notes" : input[4],
      };
      if(input[5] !== ""){
        this.data.profilePic = input[5]
      }
      else {
        this.data.profilePic = 'assets/img/animatedHeader.png';
      }
    }
  }

  addToCalendar (){
    console.log(JSON.stringify(this.data));
    console.log('addToCalendar is running');
    let title = this.data.title;
    let location = this.data.location;
    let notes = this.data.notes;
    let startDate = this.data.date;
    console.log(startDate);
    this.cal.createEventInteractively(title,location,notes,new Date(startDate))
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
  }

}
