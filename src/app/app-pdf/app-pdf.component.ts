import { Component, OnInit } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-app-pdf',
  templateUrl: './app-pdf.component.html',
  styleUrls: ['./app-pdf.component.scss']
})
export class AppPdfComponent implements OnInit {

  selectedFiles: FileList;
  pdfSrc: string;
  error: any;
  page = 1;
  rotation = 0;
  zoom = 1.0;
  originalSize = true;
  pdf: any;
  renderText = true;
  progressData: PDFProgressData;
  isLoaded = false;
  stickToPage = false;
  showAll = true;
  autoresize = true;
  fitToPage = false;
  outline: any[];
  isOutlineShown = false;
  pdfQuery = '';

  constructor() { }

  ngOnInit() {
  }

  onProgress(progressData: PDFProgressData) {
    // do anything with progress data. For example progress indicator
    console.log('Processing....');
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFiles = event.target.files;
    //this.pdfSrc = "./assets/" + this.selectedFiles[0].name;
    this.pdfSrc = `./assets/${this.selectedFiles[0].name}`;
    const $img: any = document.querySelector('#file');
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.pdfSrc = e.target.result;
    };

    reader.readAsArrayBuffer($img.files[0]);

  }
}
