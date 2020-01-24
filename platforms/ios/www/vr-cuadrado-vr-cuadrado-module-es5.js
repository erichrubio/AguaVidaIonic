(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vr-cuadrado-vr-cuadrado-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vr-cuadrado/vr-cuadrado.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vr-cuadrado/vr-cuadrado.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Volumen de Tanque (Cubo)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n\n  <form [formGroup]=\"vr_cubo_form\" (ngSubmit)=\"onSubmit(vr_cubo_form.value)\">\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Largo del tanque (metros)</ion-label>\n        <ion-input formControlName=\"largo_t\" type=\"number\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Ancho del tanque (metros)</ion-label>\n        <ion-input formControlName=\"ancho_t\" type=\"number\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Altura del tanque (metros)</ion-label>\n        <ion-input formControlName=\"altura_t\" type=\"number\">\n        </ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t<h3>{{vr_cubo_str}}</h3>\n  \t\t</ion-text>\n    </ion-item>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!vr_cubo_form.valid\">Calcular</ion-button>\n\n  </form>\n"

/***/ }),

/***/ "./src/app/vr-cuadrado/vr-cuadrado-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/vr-cuadrado/vr-cuadrado-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: VrCuadradoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VrCuadradoPageRoutingModule", function() { return VrCuadradoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vr_cuadrado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vr-cuadrado.page */ "./src/app/vr-cuadrado/vr-cuadrado.page.ts");




var routes = [
    {
        path: '',
        component: _vr_cuadrado_page__WEBPACK_IMPORTED_MODULE_3__["VrCuadradoPage"]
    }
];
var VrCuadradoPageRoutingModule = /** @class */ (function () {
    function VrCuadradoPageRoutingModule() {
    }
    VrCuadradoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VrCuadradoPageRoutingModule);
    return VrCuadradoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/vr-cuadrado/vr-cuadrado.module.ts":
/*!***************************************************!*\
  !*** ./src/app/vr-cuadrado/vr-cuadrado.module.ts ***!
  \***************************************************/
/*! exports provided: VrCuadradoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VrCuadradoPageModule", function() { return VrCuadradoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vr_cuadrado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vr-cuadrado-routing.module */ "./src/app/vr-cuadrado/vr-cuadrado-routing.module.ts");
/* harmony import */ var _vr_cuadrado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vr-cuadrado.page */ "./src/app/vr-cuadrado/vr-cuadrado.page.ts");







var VrCuadradoPageModule = /** @class */ (function () {
    function VrCuadradoPageModule() {
    }
    VrCuadradoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _vr_cuadrado_routing_module__WEBPACK_IMPORTED_MODULE_5__["VrCuadradoPageRoutingModule"]
            ],
            declarations: [_vr_cuadrado_page__WEBPACK_IMPORTED_MODULE_6__["VrCuadradoPage"]]
        })
    ], VrCuadradoPageModule);
    return VrCuadradoPageModule;
}());



/***/ }),

/***/ "./src/app/vr-cuadrado/vr-cuadrado.page.scss":
/*!***************************************************!*\
  !*** ./src/app/vr-cuadrado/vr-cuadrado.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZyLWN1YWRyYWRvL3ZyLWN1YWRyYWRvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vr-cuadrado/vr-cuadrado.page.ts":
/*!*************************************************!*\
  !*** ./src/app/vr-cuadrado/vr-cuadrado.page.ts ***!
  \*************************************************/
/*! exports provided: VrCuadradoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VrCuadradoPage", function() { return VrCuadradoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var VrCuadradoPage = /** @class */ (function () {
    function VrCuadradoPage() {
        // final value to display
        this.vr_cubo_str = "";
    }
    VrCuadradoPage.prototype.ngOnInit = function () {
        this.vr_cubo_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            largo_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
            ancho_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
            altura_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ]))
        });
    };
    VrCuadradoPage.prototype.onSubmit = function (values) {
        console.log('vr-cubo submit button clicked.');
        console.log(values);
        var meters = values.largo_t * values.ancho_t * values.altura_t;
        this.vr_cubo_val = meters * 1000;
        this.vr_cubo_str = this.vr_cubo_val.toFixed(0) + " litros";
    };
    VrCuadradoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vr-cuadrado',
            template: __webpack_require__(/*! raw-loader!./vr-cuadrado.page.html */ "./node_modules/raw-loader/index.js!./src/app/vr-cuadrado/vr-cuadrado.page.html"),
            styles: [__webpack_require__(/*! ./vr-cuadrado.page.scss */ "./src/app/vr-cuadrado/vr-cuadrado.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VrCuadradoPage);
    return VrCuadradoPage;
}());



/***/ })

}]);
//# sourceMappingURL=vr-cuadrado-vr-cuadrado-module-es5.js.map