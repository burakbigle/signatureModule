import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileDropModule } from 'ngx-file-drop';
import { DragdropComponent } from 'src/app/signature/components/dragdrop/dragdrop.component';
import { AppPdfComponent } from 'src/app/signature/components/pdfdisplay/pdfdisplay.component';
import { SignerComponent } from 'src/app/signature/components/signer/signer.component';
import { NewSignatureComponent } from './pages/new-signature/new-signature.component';

@NgModule({
  declarations: [
    AppPdfComponent,
    SignerComponent,
    DragdropComponent,
    NewSignatureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PdfViewerModule,
    FileDropModule
  ],
  exports: [
    NewSignatureComponent
  ]
})
export class SignatureModule { }
