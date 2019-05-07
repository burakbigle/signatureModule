import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-pdf',
  templateUrl: './app-pdf.component.html',
  styleUrls: ['./app-pdf.component.scss']
})
export class AppPdfComponent implements OnInit {
  page: number = 1;
  pdfSrc: string = '';

  constructor() {
  }
  ngOnInit() {

  }

  onFileSelected() {
    const img: any = document.querySelector('#file');

    if(typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer(img.files[0] );
    }
  }
}
