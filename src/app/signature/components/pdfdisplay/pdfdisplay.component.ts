import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pdfdisplay',
  templateUrl: './pdfdisplay.component.html',
  styleUrls: ['./pdfdisplay.component.scss']
})
export class AppPdfComponent implements OnInit {
  page: number = 1;
  pdfSrc: string = '';
  @Input() file: File;
  constructor() {
  }
  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const fileChange: SimpleChange = changes['file'];
    if (fileChange && !fileChange.firstChange) {
      this.onFileSelected();
    }
  }

  onFileSelected() {
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer(this.file);
    }
  }
}
