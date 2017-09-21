import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loanArray = [];

  constructor(public navCtrl: NavController) {

  }

  add(name, money){
    // alert(name + " " + money);
    this.loanArray.push({ name: name, money: money});
  }

}
