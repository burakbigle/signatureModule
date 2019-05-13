import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignatureModule } from 'src/app/signature/signature.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SignatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
