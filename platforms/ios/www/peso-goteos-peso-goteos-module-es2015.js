(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["peso-goteos-peso-goteos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/peso-goteos/peso-goteos.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/peso-goteos/peso-goteos.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Peso de Cloro (Goteos)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n\n  <form [formGroup]=\"peso_goteos_form\" (ngSubmit)=\"onSubmit(peso_goteos_form.value)\">\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Caudal (litros por segundo)</ion-label>\n        <ion-input formControlName=\"caudal\" type=\"number\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\" position=\"stacked\">Concentración Deseada del Reservorio (miligramos por litro)</ion-label>\n        <ion-input formControlName=\"c_reservorio\" type=\"number\" placeholder=\"ejemplos: 1.0 o 1.5\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Porcentaje de Cloro</ion-label>\n        <ion-input formControlName=\"p_cloro\" type=\"number\" placeholder=\"ejemplos: 65 o 70\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Días de Regarga</ion-label>\n        <ion-input formControlName=\"dias\" type=\"number\" placeholder=\"ejemplos: 1 o 7\">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t<h3>{{peso_goteos_str}}</h3>\n  \t\t</ion-text>\n    </ion-item>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!peso_goteos_form.valid\">Calcular</ion-button>\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/peso-goteos/peso-goteos-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/peso-goteos/peso-goteos-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PesoGoteosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesoGoteosPageRoutingModule", function() { return PesoGoteosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _peso_goteos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./peso-goteos.page */ "./src/app/peso-goteos/peso-goteos.page.ts");




const routes = [
    {
        path: '',
        component: _peso_goteos_page__WEBPACK_IMPORTED_MODULE_3__["PesoGoteosPage"]
    }
];
let PesoGoteosPageRoutingModule = class PesoGoteosPageRoutingModule {
};
PesoGoteosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PesoGoteosPageRoutingModule);



/***/ }),

/***/ "./src/app/peso-goteos/peso-goteos.module.ts":
/*!***************************************************!*\
  !*** ./src/app/peso-goteos/peso-goteos.module.ts ***!
  \***************************************************/
/*! exports provided: PesoGoteosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesoGoteosPageModule", function() { return PesoGoteosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _peso_goteos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./peso-goteos-routing.module */ "./src/app/peso-goteos/peso-goteos-routing.module.ts");
/* harmony import */ var _peso_goteos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./peso-goteos.page */ "./src/app/peso-goteos/peso-goteos.page.ts");







let PesoGoteosPageModule = class PesoGoteosPageModule {
};
PesoGoteosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _peso_goteos_routing_module__WEBPACK_IMPORTED_MODULE_5__["PesoGoteosPageRoutingModule"]
        ],
        declarations: [_peso_goteos_page__WEBPACK_IMPORTED_MODULE_6__["PesoGoteosPage"]]
    })
], PesoGoteosPageModule);



/***/ }),

/***/ "./src/app/peso-goteos/peso-goteos.page.scss":
/*!***************************************************!*\
  !*** ./src/app/peso-goteos/peso-goteos.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blc28tZ290ZW9zL3Blc28tZ290ZW9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/peso-goteos/peso-goteos.page.ts":
/*!*************************************************!*\
  !*** ./src/app/peso-goteos/peso-goteos.page.ts ***!
  \*************************************************/
/*! exports provided: PesoGoteosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesoGoteosPage", function() { return PesoGoteosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let PesoGoteosPage = class PesoGoteosPage {
    constructor() {
        // final value to display
        this.peso_goteos_str = "";
    }
    ngOnInit() {
        this.peso_goteos_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
            c_reservorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
            p_cloro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
            dias: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ]))
        });
    }
    onSubmit(values) {
        console.log('peso_goteos submit button clicked.');
        console.log(values);
        var d = values.dias;
        this.peso_goteos_val = (
        // volume of water in a day (L)
        (values.caudal * 24 * 60 * 60) *
            // desired concentration (mg/L)
            values.c_reservorio *
            // adjust for dias de recarga
            d) /
            (
            // proportion of cloro (changed from percent to proportion)
            (values.p_cloro / 100) *
                // change from mg to gramos
                1000);
        let s_dias = "" + d + " días";
        if (d == 1) {
            s_dias = "día";
        }
        this.peso_goteos_str = "Peso de cloro = " + Math.round(this.peso_goteos_val) + " gramos cada " + s_dias;
    }
};
PesoGoteosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-peso-goteos',
        template: __webpack_require__(/*! raw-loader!./peso-goteos.page.html */ "./node_modules/raw-loader/index.js!./src/app/peso-goteos/peso-goteos.page.html"),
        styles: [__webpack_require__(/*! ./peso-goteos.page.scss */ "./src/app/peso-goteos/peso-goteos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PesoGoteosPage);



/***/ })

}]);
//# sourceMappingURL=peso-goteos-peso-goteos-module-es2015.js.map