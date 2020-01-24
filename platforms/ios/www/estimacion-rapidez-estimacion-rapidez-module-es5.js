(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estimacion-rapidez-estimacion-rapidez-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/estimacion-rapidez/estimacion-rapidez.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/estimacion-rapidez/estimacion-rapidez.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Estimación de Rapidez de Goteo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n  <form [formGroup]=\"estimacion_rapidez_form\" (ngSubmit)=\"onSubmit(estimacion_rapidez_form.value)\">\n\n    <ion-list>\n      <ion-item>\n          <ion-label position=\"floating\">Tamaño de medidor (mililitros)</ion-label>\n          <ion-input formControlName=\"tamano\" type=\"number\">\n          </ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"floating\">Segundos para llenar</ion-label>\n          <ion-input formControlName=\"segundos\" type=\"number\">\n          </ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t<h3>{{estimacion_str}}</h3>\n  \t\t</ion-text>\n    </ion-item>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!estimacion_rapidez_form.valid\">Calcular</ion-button>\n\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/estimacion-rapidez/estimacion-rapidez-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/estimacion-rapidez/estimacion-rapidez-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EstimacionRapidezPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimacionRapidezPageRoutingModule", function() { return EstimacionRapidezPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _estimacion_rapidez_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estimacion-rapidez.page */ "./src/app/estimacion-rapidez/estimacion-rapidez.page.ts");




var routes = [
    {
        path: '',
        component: _estimacion_rapidez_page__WEBPACK_IMPORTED_MODULE_3__["EstimacionRapidezPage"]
    }
];
var EstimacionRapidezPageRoutingModule = /** @class */ (function () {
    function EstimacionRapidezPageRoutingModule() {
    }
    EstimacionRapidezPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EstimacionRapidezPageRoutingModule);
    return EstimacionRapidezPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/estimacion-rapidez/estimacion-rapidez.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/estimacion-rapidez/estimacion-rapidez.module.ts ***!
  \*****************************************************************/
/*! exports provided: EstimacionRapidezPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimacionRapidezPageModule", function() { return EstimacionRapidezPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _estimacion_rapidez_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estimacion-rapidez-routing.module */ "./src/app/estimacion-rapidez/estimacion-rapidez-routing.module.ts");
/* harmony import */ var _estimacion_rapidez_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estimacion-rapidez.page */ "./src/app/estimacion-rapidez/estimacion-rapidez.page.ts");







var EstimacionRapidezPageModule = /** @class */ (function () {
    function EstimacionRapidezPageModule() {
    }
    EstimacionRapidezPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _estimacion_rapidez_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstimacionRapidezPageRoutingModule"]
            ],
            declarations: [_estimacion_rapidez_page__WEBPACK_IMPORTED_MODULE_6__["EstimacionRapidezPage"]]
        })
    ], EstimacionRapidezPageModule);
    return EstimacionRapidezPageModule;
}());



/***/ }),

/***/ "./src/app/estimacion-rapidez/estimacion-rapidez.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/estimacion-rapidez/estimacion-rapidez.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VzdGltYWNpb24tcmFwaWRlei9lc3RpbWFjaW9uLXJhcGlkZXoucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/estimacion-rapidez/estimacion-rapidez.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/estimacion-rapidez/estimacion-rapidez.page.ts ***!
  \***************************************************************/
/*! exports provided: EstimacionRapidezPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimacionRapidezPage", function() { return EstimacionRapidezPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var EstimacionRapidezPage = /** @class */ (function () {
    function EstimacionRapidezPage() {
        // final value to display
        this.estimacion_str = "";
    }
    EstimacionRapidezPage.prototype.ngOnInit = function () {
        this.estimacion_rapidez_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            tamano: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
            segundos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ]))
        });
    };
    EstimacionRapidezPage.prototype.onSubmit = function (values) {
        console.log('estimacion_rapidez submit button clicked.');
        console.log(values);
        var r = values.tamano / values.segundos * 60;
        console.log(r);
        this.estimacion_val = r;
        this.estimacion_str = "Rapidez de goteo = " + this.estimacion_val.toFixed(1) + " mililitros por minuto";
    };
    EstimacionRapidezPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estimacion-rapidez',
            template: __webpack_require__(/*! raw-loader!./estimacion-rapidez.page.html */ "./node_modules/raw-loader/index.js!./src/app/estimacion-rapidez/estimacion-rapidez.page.html"),
            styles: [__webpack_require__(/*! ./estimacion-rapidez.page.scss */ "./src/app/estimacion-rapidez/estimacion-rapidez.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EstimacionRapidezPage);
    return EstimacionRapidezPage;
}());



/***/ })

}]);
//# sourceMappingURL=estimacion-rapidez-estimacion-rapidez-module-es5.js.map