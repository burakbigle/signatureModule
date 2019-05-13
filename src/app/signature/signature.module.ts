import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FileDropModule } from 'ngx-file-drop';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { DragdropComponent } from 'src/app/signature/components/dragdrop/dragdrop.component';
import { AppPdfComponent } from 'src/app/signature/components/pdfdisplay/pdfdisplay.component';
import { SignerComponent } from 'src/app/signature/components/signer/signer.component';
import { NewSignatureComponent } from './pages/new-signature/new-signature.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressBarComponent } from 'src/app/signature/components/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    AppPdfComponent,
    SignerComponent,
    DragdropComponent,
    NewSignatureComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    FileDropModule,
    LoadingBarHttpModule,
    LoadingBarHttpClientModule
  ],
  exports: [
    NewSignatureComponent
  ]
})
export class SignatureModule { }
