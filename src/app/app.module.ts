import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { AppPdfComponent } from './components/app-pdf/app-pdf.component';
import { SignerComponent } from './components/signers/signer/signer.component';
import { SignersComponent } from './components/signers/signers.component';



@NgModule({
  declarations: [
    AppComponent,
    AppPdfComponent,
    SignerComponent,
    SignersComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
