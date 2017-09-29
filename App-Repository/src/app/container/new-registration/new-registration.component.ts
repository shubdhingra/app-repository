import { Component, OnInit } from '@angular/core';
import {Application} from '../../../models/application.model';
import {RegisterService} from 'services/register.service';
import $ from 'jquery';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {

  app: Application;
  temp: Application;

  appList = [];

  constructor(
    public registerService: RegisterService) {
    this.app = new Application();

  }

  ngOnInit() {
  }

  registerApp() {
    $(document).ready(function(){
      $('button').click(function(){
        $('div').animate({left: '500px'});
      });
    });

    this.temp = JSON.parse(JSON.stringify(this.app));
    const index = this.appList.findIndex(x => x.name === this.temp.name );
    if (index === -1) {
      this.appList.push(this.temp);
    }
    this.registerService.registerNewApp(this.appList);
  }



}
