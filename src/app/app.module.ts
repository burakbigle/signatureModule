import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileDropModule } from 'ngx-file-drop';
import { AppComponent } from './app.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { AppPdfComponent } from './components/pdf-display/pdf-display.component';
import { SignerComponent } from './components/signer/signer.component';


@NgModule({
  declarations: [
    AppComponent,
    AppPdfComponent,
    SignerComponent,
    DragdropComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
