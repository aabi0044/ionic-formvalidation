import { Component } from '@angular/core';


import {  NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {NgForm, FormGroup,Validators, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {myForm: FormGroup;
  user:{"email","password"};
   constructor(public navCtrl: NavController, public navParams: NavParams,
                private loadingCtrl: LoadingController,
               private alertCtrl: AlertController,  public formBuilder: FormBuilder) {
  
  let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  
  this.myForm = new FormGroup({
   email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
   password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
  
  });
}
}
