import {Injectable, OnInit} from '@angular/core';
import {Application} from '../models/application.model';


@Injectable()
export class RegisterService implements OnInit {

  appList: Application[];



  constructor() {
    this.appList = [];
  }

  ngOnInit() {

  }
  registerNewApp(appList: Application[]) {
    this.appList = appList;
    console.log(this.appList);

  }


}
