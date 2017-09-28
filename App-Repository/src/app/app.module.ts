import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { BarComponent } from './container/bar/bar.component';
import { NewRegistrationComponent } from './container/new-registration/new-registration.component';
import { FileUploaderComponent } from './container/file-uploader/file-uploader.component';
import {RegisterService} from "../services/register.service";
import { RegisteredAppsComponent } from './container/registered-apps/registered-apps.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    BarComponent,
    NewRegistrationComponent,
    FileUploaderComponent,
    RegisteredAppsComponent,
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]

})
export class AppModule { }
