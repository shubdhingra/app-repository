import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../../services/register.service';
import {Application} from '../../../models/application.model';

@Component({
  selector: 'app-registered-apps',
  templateUrl: './registered-apps.component.html',
  styleUrls: ['./registered-apps.component.css']
})
export class RegisteredAppsComponent implements OnInit {

  app: Application;
  appList: Application[];

  constructor(public registerService: RegisterService) {
  }

  ngOnInit() {


  }

}
