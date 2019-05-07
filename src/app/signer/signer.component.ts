import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signer',
  templateUrl: './signer.component.html',
  styleUrls: ['./signer.component.scss']
})
export class SignerComponent implements OnInit {
  uid: string = '';
  sigName: string = '';
  sigNumber: number = 1;

  // Redux
  isFixed: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onNameChange(): void {
  }

}
