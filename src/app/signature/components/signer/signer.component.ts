import { Component, Input, OnInit } from '@angular/core';
import { Signer } from 'src/app/signature/entities/signer';

@Component({
  selector: 'app-signer',
  templateUrl: './signer.component.html',
  styleUrls: ['./signer.component.scss']
})
export class SignerComponent implements OnInit {
  @Input() signer: Signer;

  constructor() { }

  ngOnInit() {
  }

}
