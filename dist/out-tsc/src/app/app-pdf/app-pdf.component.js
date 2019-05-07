import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AppPdfComponent = /** @class */ (function () {
    function AppPdfComponent() {
        this.page = 1;
        this.rotation = 0;
        this.zoom = 1.0;
        this.originalSize = true;
        this.renderText = true;
        this.isLoaded = false;
        this.stickToPage = false;
        this.showAll = true;
        this.autoresize = true;
        this.fitToPage = false;
        this.isOutlineShown = false;
        this.pdfQuery = '';
    }
    AppPdfComponent.prototype.ngOnInit = function () {
    };
    AppPdfComponent.prototype.onProgress = function (progressData) {
        // do anything with progress data. For example progress indicator
        console.log('Processing....');
    };
    AppPdfComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        console.log(event);
        this.selectedFiles = event.target.files;
        // this.pdfSrc = "./assets/" + this.selectedFiles[0].name;
        this.pdfSrc = "./assets/" + this.selectedFiles[0].name;
        var $img = document.querySelector('#file');
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.pdfSrc = e.target.result;
        };
        reader.readAsArrayBuffer($img.files[0]);
    };
    AppPdfComponent = tslib_1.__decorate([
        Component({
            selector: 'app-app-pdf',
            templateUrl: './app-pdf.component.html',
            styleUrls: ['./app-pdf.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppPdfComponent);
    return AppPdfComponent;
}());
export { AppPdfComponent };
//# sourceMappingURL=app-pdf.component.js.map