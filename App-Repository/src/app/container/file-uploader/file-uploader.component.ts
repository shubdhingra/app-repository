import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Image} from '../../../models/image.model';
import * as $ from 'jquery';

@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  file: any = '';
  fileInputElement;
  imageCanvasElement;
  @Input('defaultData')
  defaultData: Image;
  fileData: Image;
  /*do not remove used for context mapping */
  @ViewChild('fileInput')
  fileInput: any;
  selectedFiles: any;
  public fileUploadObservable: Observable<Image>;
  private fileUploadObserver: Observer<Image>;

  constructor(private element: ElementRef) {
    this.fileUploadObservable = new Observable(observer =>
      this.fileUploadObserver = observer);
    //this.fileUploadObservable.share();
    this.fileData = new Image();
  }

  ngOnInit() {
    this.fileInputElement = this.element.nativeElement.querySelector('#uploadEntity');
    this.imageCanvasElement = this.element.nativeElement.querySelector('#fileCanvas');
    if (this.defaultData) {
      this.setDefaultData();
    }
  }

  invokeFileUpload() {
    this.fileInputElement.click();
  }

  onFileChange(event) {
    this.selectedFiles = event.target.files;
    this.file = this.selectedFiles[0];
    const reader = new FileReader();
    reader.onload = (fileEleRef: any) => {
      const src = fileEleRef.target.result;
      this.imageCanvasElement.src = src ;
    };

    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = (e) => {
      this.fileData.fileContent = reader.result;
      this.fileData.imageName = this.selectedFiles[0].name;
      this.fileUploadObserver.next(this.fileData);
    };
  }

  reset() {
    this.imageCanvasElement.src = '';
    this.fileData.imageName = '';
    this.selectedFiles = null;
    $('#uploadEntity').val('');
  }

  setDefaultData() {
    this.imageCanvasElement.src = this.defaultData.fileContent;
    this.fileData.imageName = this.defaultData.imageName;
  }
}
