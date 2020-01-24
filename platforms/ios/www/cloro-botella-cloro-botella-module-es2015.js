(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cloro-botella-cloro-botella-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cloro-botella/cloro-botella.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cloro-botella/cloro-botella.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Peso de Cloro en Botella</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n\n  <form [formGroup]=\"botella_form\" (ngSubmit)=\"onSubmit(botella_form.value)\">\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Densidad de cloro (g/mL)</ion-label>\n        <ion-input formControlName=\"densidad\" type=\"number\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Tamaño de botella (litros)</ion-label>\n        <ion-input formControlName=\"tamano\" type=\"number\" placeholder=\"ejemplos: 0.6, 1 o 1.5\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t<h3>{{botella_str_1}}</h3>\n  \t\t</ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t<h3>{{botella_str_2}}</h3>\n  \t\t</ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t<h3>{{botella_str_3}}</h3>\n  \t\t</ion-text>\n    </ion-item>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!botella_form.valid\">Calcular</ion-button>\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cloro-botella/cloro-botella-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/cloro-botella/cloro-botella-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CloroBotellaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloroBotellaPageRoutingModule", function() { return CloroBotellaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cloro_botella_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloro-botella.page */ "./src/app/cloro-botella/cloro-botella.page.ts");




const routes = [
    {
        path: '',
        component: _cloro_botella_page__WEBPACK_IMPORTED_MODULE_3__["CloroBotellaPage"]
    }
];
let CloroBotellaPageRoutingModule = class CloroBotellaPageRoutingModule {
};
CloroBotellaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CloroBotellaPageRoutingModule);



/***/ }),

/***/ "./src/app/cloro-botella/cloro-botella.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/cloro-botella/cloro-botella.module.ts ***!
  \*******************************************************/
/*! exports provided: CloroBotellaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloroBotellaPageModule", function() { return CloroBotellaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cloro_botella_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cloro-botella-routing.module */ "./src/app/cloro-botella/cloro-botella-routing.module.ts");
/* harmony import */ var _cloro_botella_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cloro-botella.page */ "./src/app/cloro-botella/cloro-botella.page.ts");







let CloroBotellaPageModule = class CloroBotellaPageModule {
};
CloroBotellaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cloro_botella_routing_module__WEBPACK_IMPORTED_MODULE_5__["CloroBotellaPageRoutingModule"]
        ],
        declarations: [_cloro_botella_page__WEBPACK_IMPORTED_MODULE_6__["CloroBotellaPage"]]
    })
], CloroBotellaPageModule);



/***/ }),

/***/ "./src/app/cloro-botella/cloro-botella.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/cloro-botella/cloro-botella.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3JvLWJvdGVsbGEvY2xvcm8tYm90ZWxsYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cloro-botella/cloro-botella.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/cloro-botella/cloro-botella.page.ts ***!
  \*****************************************************/
/*! exports provided: CloroBotellaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloroBotellaPage", function() { return CloroBotellaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let CloroBotellaPage = class CloroBotellaPage {
    constructor() {
        // final value to display
        this.botella_str_1 = "";
        this.botella_str_2 = "";
        this.botella_str_3 = "";
    }
    ngOnInit() {
        this.botella_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            densidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
            tamano: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ]))
        });
    }
    onSubmit(values) {
        console.log('botella submit button clicked.');
        console.log(values);
        this.botella_val = (
        // g/mL * L * 1000mL/1L = grams
        values.densidad * values.tamano * 1000);
        this.botella_str_1 = this.botella_val.toFixed(0) + " gramos llena";
        this.botella_str_2 = (this.botella_val / 2).toFixed(0) + " gramos en la mitad";
        this.botella_str_3 = (this.botella_val / 4).toFixed(0) + " gramos en el cuarto";
    }
};
CloroBotellaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cloro-botella',
        template: __webpack_require__(/*! raw-loader!./cloro-botella.page.html */ "./node_modules/raw-loader/index.js!./src/app/cloro-botella/cloro-botella.page.html"),
        styles: [__webpack_require__(/*! ./cloro-botella.page.scss */ "./src/app/cloro-botella/cloro-botella.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CloroBotellaPage);



/***/ })

}]);
//# sourceMappingURL=cloro-botella-cloro-botella-module-es2015.js.map