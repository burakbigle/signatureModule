import { Component, OnInit } from '@angular/core';
import { Signer } from 'src/app/entities/signer';

@Component({
  selector: 'app-signer',
  templateUrl: './signer.component.html',
  styleUrls: ['./signer.component.scss']
})
export class SignerComponent implements OnInit {
  signer: Signer = {
    name: '',
    uid: 123,
    number: 1,
    isFixed: false
  };
  constructor() { }

  ngOnInit() {
  }

}
