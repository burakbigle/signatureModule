import { Component, OnInit } from '@angular/core';
import { Signer } from 'src/app/signature/entities/signer';

@Component({
  selector: 'app-new-signature',
  templateUrl: './new-signature.component.html',
  styleUrls: ['./new-signature.component.scss']
})
export class NewSignatureComponent implements OnInit {
  file: File;
  signers: Array<Signer> = new Array<Signer>();
  constructor() { }

  ngOnInit() {
  }

  onFileDroped(file: File): void {
    this.file = file;
  }

  addSigner(): void {
    console.log('clicked');
    const newSigner: Signer = new Signer();
    newSigner.number = this.signers.length + 1;
    newSigner.name = 'Signer ' + newSigner.number;
    this.signers.push(newSigner);
  }

}
