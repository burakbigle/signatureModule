import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppPdfComponent } from './app-pdf/app-pdf.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                AppPdfComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                PdfViewerModule,
                FormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map