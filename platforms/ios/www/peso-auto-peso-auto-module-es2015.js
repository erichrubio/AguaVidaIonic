(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["peso-auto-peso-auto-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/peso-auto/peso-auto.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/peso-auto/peso-auto.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Peso de Cloro (Autocompensante)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n\n  <form [formGroup]=\"peso_auto_form\" (ngSubmit)=\"onSubmit(peso_auto_form.value)\">\n\n    <ion-list>\n      <ion-item>\n          <ion-label class=\"ion-text-wrap\" position=\"stacked\">Litros del Tanque de Solución Madre</ion-label>\n          <ion-input formControlName=\"t_solucion\" type=\"number\">\n          </ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"stacked\">Caudal (litros por segundo)</ion-label>\n          <ion-input formControlName=\"caudal\" type=\"number\">\n          </ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label class=\"ion-text-wrap\" position=\"stacked\">Concentración Deseada del Reservorio (miligramos por litro)</ion-label>\n          <ion-input formControlName=\"c_reservorio\" type=\"number\" placeholder=\"ejemplos: 1.0 o 1.5\">\n          </ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"stacked\">Porcentaje de Cloro</ion-label>\n          <ion-input formControlName=\"p_cloro\" type=\"number\" placeholder=\"ejemplos: 65 o 70\">\n          </ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t<h3>{{peso_auto_str}}</h3>\n  \t\t</ion-text>\n    </ion-item>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!peso_auto_form.valid\">Calcular</ion-button>\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/peso-auto/peso-auto-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/peso-auto/peso-auto-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PesoAutoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesoAutoPageRoutingModule", function() { return PesoAutoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _peso_auto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./peso-auto.page */ "./src/app/peso-auto/peso-auto.page.ts");




const routes = [
    {
        path: '',
        component: _peso_auto_page__WEBPACK_IMPORTED_MODULE_3__["PesoAutoPage"]
    }
];
let PesoAutoPageRoutingModule = class PesoAutoPageRoutingModule {
};
PesoAutoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PesoAutoPageRoutingModule);



/***/ }),

/***/ "./src/app/peso-auto/peso-auto.module.ts":
/*!***********************************************!*\
  !*** ./src/app/peso-auto/peso-auto.module.ts ***!
  \***********************************************/
/*! exports provided: PesoAutoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesoAutoPageModule", function() { return PesoAutoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _peso_auto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./peso-auto-routing.module */ "./src/app/peso-auto/peso-auto-routing.module.ts");
/* harmony import */ var _peso_auto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./peso-auto.page */ "./src/app/peso-auto/peso-auto.page.ts");







let PesoAutoPageModule = class PesoAutoPageModule {
};
PesoAutoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _peso_auto_routing_module__WEBPACK_IMPORTED_MODULE_5__["PesoAutoPageRoutingModule"]
        ],
        declarations: [_peso_auto_page__WEBPACK_IMPORTED_MODULE_6__["PesoAutoPage"]]
    })
], PesoAutoPageModule);



/***/ }),

/***/ "./src/app/peso-auto/peso-auto.page.scss":
/*!***********************************************!*\
  !*** ./src/app/peso-auto/peso-auto.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blc28tYXV0by9wZXNvLWF1dG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/peso-auto/peso-auto.page.ts":
/*!*********************************************!*\
  !*** ./src/app/peso-auto/peso-auto.page.ts ***!
  \*********************************************/
/*! exports provided: PesoAutoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesoAutoPage", function() { return PesoAutoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let PesoAutoPage = class PesoAutoPage {
    constructor() {
        // final value to display
        this.peso_auto_str = "";
    }
    ngOnInit() {
        this.peso_auto_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            t_solucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.001)
            ])),
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
            ]))
        });
    }
    onSubmit(values) {
        console.log('peso_auto submit button clicked.');
        console.log(values);
        let c = values.caudal;
        let v = values.t_solucion;
        let d = values.c_reservorio;
        let g;
        if (c < 1.38) {
            g = 1;
        }
        else if (c < 2.75) {
            g = 2;
        }
        else if (c < 5.50) {
            g = 4;
        }
        else {
            g = 5;
        }
        let r = 0.36 * (v * c * d) / (g * values.p_cloro);
        // kg to grams
        r = r * 1000;
        this.peso_auto_val = r;
        let dias = v / (g * 24);
        this.peso_auto_str = "Peso de cloro = " + r.toFixed(0) + " gramos cada " + dias.toFixed(1) + " días";
    }
};
PesoAutoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-peso-auto',
        template: __webpack_require__(/*! raw-loader!./peso-auto.page.html */ "./node_modules/raw-loader/index.js!./src/app/peso-auto/peso-auto.page.html"),
        styles: [__webpack_require__(/*! ./peso-auto.page.scss */ "./src/app/peso-auto/peso-auto.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PesoAutoPage);



/***/ })

}]);
//# sourceMappingURL=peso-auto-peso-auto-module-es2015.js.map