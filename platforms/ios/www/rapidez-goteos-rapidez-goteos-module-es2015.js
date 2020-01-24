(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rapidez-goteos-rapidez-goteos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rapidez-goteos/rapidez-goteos.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rapidez-goteos/rapidez-goteos.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Rapidez de Goteo (Goteos)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n\n  <form [formGroup]=\"rapidez_goteos_form\" (ngSubmit)=\"onSubmit(rapidez_goteos_form.value)\">\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Litros del Tanque de Solución Madre</ion-label>\n        <ion-input formControlName=\"l_solucion\" type=\"number\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Días de Recarga</ion-label>\n        <ion-input formControlName=\"d_recarga\" type=\"number\">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t<h3>{{rapidez_goteos_str}}</h3>\n  \t\t</ion-text>\n    </ion-item>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!rapidez_goteos_form.valid\">Calcular</ion-button>\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/rapidez-goteos/rapidez-goteos-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/rapidez-goteos/rapidez-goteos-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RapidezGoteosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapidezGoteosPageRoutingModule", function() { return RapidezGoteosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rapidez_goteos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rapidez-goteos.page */ "./src/app/rapidez-goteos/rapidez-goteos.page.ts");




const routes = [
    {
        path: '',
        component: _rapidez_goteos_page__WEBPACK_IMPORTED_MODULE_3__["RapidezGoteosPage"]
    }
];
let RapidezGoteosPageRoutingModule = class RapidezGoteosPageRoutingModule {
};
RapidezGoteosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RapidezGoteosPageRoutingModule);



/***/ }),

/***/ "./src/app/rapidez-goteos/rapidez-goteos.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/rapidez-goteos/rapidez-goteos.module.ts ***!
  \*********************************************************/
/*! exports provided: RapidezGoteosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapidezGoteosPageModule", function() { return RapidezGoteosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rapidez_goteos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rapidez-goteos-routing.module */ "./src/app/rapidez-goteos/rapidez-goteos-routing.module.ts");
/* harmony import */ var _rapidez_goteos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rapidez-goteos.page */ "./src/app/rapidez-goteos/rapidez-goteos.page.ts");







let RapidezGoteosPageModule = class RapidezGoteosPageModule {
};
RapidezGoteosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rapidez_goteos_routing_module__WEBPACK_IMPORTED_MODULE_5__["RapidezGoteosPageRoutingModule"]
        ],
        declarations: [_rapidez_goteos_page__WEBPACK_IMPORTED_MODULE_6__["RapidezGoteosPage"]]
    })
], RapidezGoteosPageModule);



/***/ }),

/***/ "./src/app/rapidez-goteos/rapidez-goteos.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/rapidez-goteos/rapidez-goteos.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcGlkZXotZ290ZW9zL3JhcGlkZXotZ290ZW9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/rapidez-goteos/rapidez-goteos.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/rapidez-goteos/rapidez-goteos.page.ts ***!
  \*******************************************************/
/*! exports provided: RapidezGoteosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapidezGoteosPage", function() { return RapidezGoteosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let RapidezGoteosPage = class RapidezGoteosPage {
    constructor() {
        // final value to display
        this.rapidez_goteos_str = "";
    }
    ngOnInit() {
        this.rapidez_goteos_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            l_solucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
            d_recarga: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ]))
        });
    }
    onSubmit(values) {
        console.log('rapidez_goteos submit button clicked.');
        console.log(values);
        this.rapidez_goteos_val = (
        // size of solucion madre (mL)
        (values.l_solucion * 1000) /
            // convert days to minutes (min)
            (values.d_recarga * 24 * 60));
        this.rapidez_goteos_str = this.rapidez_goteos_val.toFixed(1) + " mL cada minuto";
    }
};
RapidezGoteosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rapidez-goteos',
        template: __webpack_require__(/*! raw-loader!./rapidez-goteos.page.html */ "./node_modules/raw-loader/index.js!./src/app/rapidez-goteos/rapidez-goteos.page.html"),
        styles: [__webpack_require__(/*! ./rapidez-goteos.page.scss */ "./src/app/rapidez-goteos/rapidez-goteos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RapidezGoteosPage);



/***/ })

}]);
//# sourceMappingURL=rapidez-goteos-rapidez-goteos-module-es2015.js.map