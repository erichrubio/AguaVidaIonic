(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vr-cilindro-vr-cilindro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vr-cilindro/vr-cilindro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vr-cilindro/vr-cilindro.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Volumen de Tanque (Cilindro)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n\n  <form [formGroup]=\"vr_cilindro_form\" (ngSubmit)=\"onSubmit(vr_cilindro_form.value)\">\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Diametro del tanque (metros)</ion-label>\n        <ion-input formControlName=\"diametro_t\" type=\"number\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Altura del tanque (metros)</ion-label>\n        <ion-input formControlName=\"altura_t\" type=\"number\">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t<h3>{{vr_cilindro_str}}</h3>\n  \t\t</ion-text>\n    </ion-item>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!vr_cilindro_form.valid\">Calcular</ion-button>\n\n  </form>\n"

/***/ }),

/***/ "./src/app/vr-cilindro/vr-cilindro-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/vr-cilindro/vr-cilindro-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: VrCilindroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VrCilindroPageRoutingModule", function() { return VrCilindroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vr_cilindro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vr-cilindro.page */ "./src/app/vr-cilindro/vr-cilindro.page.ts");




var routes = [
    {
        path: '',
        component: _vr_cilindro_page__WEBPACK_IMPORTED_MODULE_3__["VrCilindroPage"]
    }
];
var VrCilindroPageRoutingModule = /** @class */ (function () {
    function VrCilindroPageRoutingModule() {
    }
    VrCilindroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VrCilindroPageRoutingModule);
    return VrCilindroPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/vr-cilindro/vr-cilindro.module.ts":
/*!***************************************************!*\
  !*** ./src/app/vr-cilindro/vr-cilindro.module.ts ***!
  \***************************************************/
/*! exports provided: VrCilindroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VrCilindroPageModule", function() { return VrCilindroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vr_cilindro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vr-cilindro-routing.module */ "./src/app/vr-cilindro/vr-cilindro-routing.module.ts");
/* harmony import */ var _vr_cilindro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vr-cilindro.page */ "./src/app/vr-cilindro/vr-cilindro.page.ts");







var VrCilindroPageModule = /** @class */ (function () {
    function VrCilindroPageModule() {
    }
    VrCilindroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _vr_cilindro_routing_module__WEBPACK_IMPORTED_MODULE_5__["VrCilindroPageRoutingModule"]
            ],
            declarations: [_vr_cilindro_page__WEBPACK_IMPORTED_MODULE_6__["VrCilindroPage"]]
        })
    ], VrCilindroPageModule);
    return VrCilindroPageModule;
}());



/***/ }),

/***/ "./src/app/vr-cilindro/vr-cilindro.page.scss":
/*!***************************************************!*\
  !*** ./src/app/vr-cilindro/vr-cilindro.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZyLWNpbGluZHJvL3ZyLWNpbGluZHJvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vr-cilindro/vr-cilindro.page.ts":
/*!*************************************************!*\
  !*** ./src/app/vr-cilindro/vr-cilindro.page.ts ***!
  \*************************************************/
/*! exports provided: VrCilindroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VrCilindroPage", function() { return VrCilindroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var VrCilindroPage = /** @class */ (function () {
    function VrCilindroPage() {
        // final value to display
        this.vr_cilindro_str = "";
    }
    VrCilindroPage.prototype.ngOnInit = function () {
        this.vr_cilindro_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            diametro_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
            altura_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ]))
        });
    };
    VrCilindroPage.prototype.onSubmit = function (values) {
        console.log('vr-cilindro submit button clicked.');
        console.log(values);
        var radius = (values.diametro_t / 2);
        var meters = Math.PI * (radius * radius) * values.altura_t;
        console.log(meters);
        this.vr_cilindro_val = meters * 1000;
        this.vr_cilindro_str = this.vr_cilindro_val.toFixed(0) + " litros";
    };
    VrCilindroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vr-cilindro',
            template: __webpack_require__(/*! raw-loader!./vr-cilindro.page.html */ "./node_modules/raw-loader/index.js!./src/app/vr-cilindro/vr-cilindro.page.html"),
            styles: [__webpack_require__(/*! ./vr-cilindro.page.scss */ "./src/app/vr-cilindro/vr-cilindro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VrCilindroPage);
    return VrCilindroPage;
}());



/***/ })

}]);
//# sourceMappingURL=vr-cilindro-vr-cilindro-module-es5.js.map