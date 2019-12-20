(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caudal-caudal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/caudal/caudal.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/caudal/caudal.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Caudal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n  <form [formGroup]=\"caudal_form\" (ngSubmit)=\"onSubmit(caudal_form.value)\">\n\n    <ion-list>\n      <ion-item>\n          <ion-label position=\"floating\">Litros del balde</ion-label>\n          <ion-input formControlName=\"balde\" type=\"number\">\n          </ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"floating\">Tiempo 1 (segundos)</ion-label>\n          <ion-input formControlName=\"t1\" type=\"number\">\n          </ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"floating\">Tiempo 2 (segundos)</ion-label>\n          <ion-input formControlName=\"t2\" type=\"number\">\n          </ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"floating\">Tiempo 3 (segundos)</ion-label>\n          <ion-input formControlName=\"t3\" type=\"number\">\n          </ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t{{caudal_value}}\n  \t\t</ion-text>\n    </ion-item>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!caudal_form.valid\">Calcular</ion-button>\n\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/caudal/caudal-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/caudal/caudal-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CaudalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaudalPageRoutingModule", function() { return CaudalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _caudal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caudal.page */ "./src/app/caudal/caudal.page.ts");




const routes = [
    {
        path: '',
        component: _caudal_page__WEBPACK_IMPORTED_MODULE_3__["CaudalPage"]
    }
];
let CaudalPageRoutingModule = class CaudalPageRoutingModule {
};
CaudalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CaudalPageRoutingModule);



/***/ }),

/***/ "./src/app/caudal/caudal.module.ts":
/*!*****************************************!*\
  !*** ./src/app/caudal/caudal.module.ts ***!
  \*****************************************/
/*! exports provided: CaudalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaudalPageModule", function() { return CaudalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _caudal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caudal-routing.module */ "./src/app/caudal/caudal-routing.module.ts");
/* harmony import */ var _caudal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./caudal.page */ "./src/app/caudal/caudal.page.ts");







let CaudalPageModule = class CaudalPageModule {
};
CaudalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _caudal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CaudalPageRoutingModule"]
        ],
        declarations: [_caudal_page__WEBPACK_IMPORTED_MODULE_6__["CaudalPage"]]
    })
], CaudalPageModule);



/***/ }),

/***/ "./src/app/caudal/caudal.page.scss":
/*!*****************************************!*\
  !*** ./src/app/caudal/caudal.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdWRhbC9jYXVkYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/caudal/caudal.page.ts":
/*!***************************************!*\
  !*** ./src/app/caudal/caudal.page.ts ***!
  \***************************************/
/*! exports provided: CaudalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaudalPage", function() { return CaudalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let CaudalPage = class CaudalPage {
    constructor() {
        // final value to display
        this.caudal_value = "";
    }
    ngOnInit() {
        this.caudal_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            balde: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            t1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            t2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            t3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    onSubmit(values) {
        console.log('Caudal submit button clicked.');
        console.log(values);
        var m = values.balde / ((values.t1 + values.t2 + values.t3) / 3);
        console.log(m);
        this.caudal_value = "Caudal = " + m.toFixed(1) + " litros por segundo";
    }
};
CaudalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-caudal',
        template: __webpack_require__(/*! raw-loader!./caudal.page.html */ "./node_modules/raw-loader/index.js!./src/app/caudal/caudal.page.html"),
        styles: [__webpack_require__(/*! ./caudal.page.scss */ "./src/app/caudal/caudal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CaudalPage);



/***/ })

}]);
//# sourceMappingURL=caudal-caudal-module-es2015.js.map