import { Injectable } from '@angular/core';
import {Application} from "../models/application.model";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

@Injectable()
export class RegisterService {

  appList: Application [];



  constructor() {

    // this.updateAppListObservable.share();


  }

  registerNewApp(app: Application) {
    console.log(app);
    this.appList.push(app);



  }

}
