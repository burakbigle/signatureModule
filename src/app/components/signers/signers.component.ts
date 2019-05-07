import { Component, OnInit } from '@angular/core';
import { SIGNERS } from 'src/app/components/signers/mock-signers';
import { Signer } from 'src/app/entities/signer';

@Component({
  selector: 'app-signers',
  templateUrl: './signers.component.html',
  styleUrls: ['./signers.component.scss']
})
export class SignersComponent implements OnInit {
  signers: Signer[] = SIGNERS;
  constructor() { }

  ngOnInit() {
  }

}
