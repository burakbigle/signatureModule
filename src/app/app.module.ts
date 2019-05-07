import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppPdfComponent } from './app-pdf/app-pdf.component';
import { AppComponent } from './app.component';
import { SignerComponent } from './signer/signer.component';



@NgModule({
  declarations: [
    AppComponent,
    AppPdfComponent,
    SignerComponent
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
