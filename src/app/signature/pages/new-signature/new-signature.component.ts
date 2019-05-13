import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-signature',
  templateUrl: './new-signature.component.html',
  styleUrls: ['./new-signature.component.scss']
})
export class NewSignatureComponent implements OnInit {
  fileFlag: boolean = false;
  file: File;
  constructor() { }

  ngOnInit() {
  }

  onFileDroped(file: File) {
    this.file = file;
    this.fileFlag = true;
  }

}
