(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solucion-madre-solucion-madre-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/solucion-madre/solucion-madre.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/solucion-madre/solucion-madre.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Concentración de Solución Madre</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n\n  <form [formGroup]=\"c_solucion_form\" (ngSubmit)=\"onSubmit(c_solucion_form.value)\">\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Litros del Tanque de Solución Madre</ion-label>\n        <ion-input formControlName=\"l_solucion\" type=\"number\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Peso de Cloro (gramos)</ion-label>\n        <ion-input formControlName=\"peso_cloro\" type=\"number\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Porcentaje de Cloro</ion-label>\n        <ion-input formControlName=\"p_cloro\" type=\"number\" placeholder=\"ejemplos: 65 o 70\">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t<h3>{{c_solucion_str}}</h3>\n  \t\t</ion-text>\n    </ion-item>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!c_solucion_form.valid\">Calcular</ion-button>\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/solucion-madre/solucion-madre-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/solucion-madre/solucion-madre-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SolucionMadrePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolucionMadrePageRoutingModule", function() { return SolucionMadrePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _solucion_madre_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solucion-madre.page */ "./src/app/solucion-madre/solucion-madre.page.ts");




const routes = [
    {
        path: '',
        component: _solucion_madre_page__WEBPACK_IMPORTED_MODULE_3__["SolucionMadrePage"]
    }
];
let SolucionMadrePageRoutingModule = class SolucionMadrePageRoutingModule {
};
SolucionMadrePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SolucionMadrePageRoutingModule);



/***/ }),

/***/ "./src/app/solucion-madre/solucion-madre.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/solucion-madre/solucion-madre.module.ts ***!
  \*********************************************************/
/*! exports provided: SolucionMadrePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolucionMadrePageModule", function() { return SolucionMadrePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _solucion_madre_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solucion-madre-routing.module */ "./src/app/solucion-madre/solucion-madre-routing.module.ts");
/* harmony import */ var _solucion_madre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solucion-madre.page */ "./src/app/solucion-madre/solucion-madre.page.ts");







let SolucionMadrePageModule = class SolucionMadrePageModule {
};
SolucionMadrePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _solucion_madre_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolucionMadrePageRoutingModule"]
        ],
        declarations: [_solucion_madre_page__WEBPACK_IMPORTED_MODULE_6__["SolucionMadrePage"]]
    })
], SolucionMadrePageModule);



/***/ }),

/***/ "./src/app/solucion-madre/solucion-madre.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/solucion-madre/solucion-madre.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbHVjaW9uLW1hZHJlL3NvbHVjaW9uLW1hZHJlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/solucion-madre/solucion-madre.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/solucion-madre/solucion-madre.page.ts ***!
  \*******************************************************/
/*! exports provided: SolucionMadrePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolucionMadrePage", function() { return SolucionMadrePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SolucionMadrePage = class SolucionMadrePage {
    constructor() {
        // final value to display
        this.c_solucion_str = "";
    }
    ngOnInit() {
        this.c_solucion_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            l_solucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
            peso_cloro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
            p_cloro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ]))
        });
    }
    onSubmit(values) {
        console.log('c_solucion submit button clicked.');
        console.log(values);
        let r1 = (values.peso_cloro * (values.p_cloro / 100)) / values.l_solucion;
        this.c_solucion_val = (r1 * 1000);
        this.c_solucion_str = r1.toFixed(1) + " gramos/Litro o " + Math.round(this.c_solucion_val) + " miligramos/Litro - ppm";
    }
};
SolucionMadrePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-solucion-madre',
        template: __webpack_require__(/*! raw-loader!./solucion-madre.page.html */ "./node_modules/raw-loader/index.js!./src/app/solucion-madre/solucion-madre.page.html"),
        styles: [__webpack_require__(/*! ./solucion-madre.page.scss */ "./src/app/solucion-madre/solucion-madre.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SolucionMadrePage);



/***/ })

}]);
//# sourceMappingURL=solucion-madre-solucion-madre-module-es2015.js.map