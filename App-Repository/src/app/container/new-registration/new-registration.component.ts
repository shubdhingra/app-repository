import { Component, OnInit } from '@angular/core';
import {Application} from "../../../models/application.model";
import {RegisterService} from "services/register.service";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {

  app:Application;
  public updateAppListObservable: Observable<Application []>;
  private updateAppListObserver: Observer<Application []>;

  constructor(
    public registerService: RegisterService) {
    this.app = new Application();
    this.updateAppListObservable = new Observable(observer =>
      this.updateAppListObserver = observer);
  }

  ngOnInit() {
  }

  registerApp() {
    this.registerService.registerNewApp(this.app);
    this.updateAppListObserver.next(this.registerService.appList);
  }



}
