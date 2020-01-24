(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["desinfeccion-desinfeccion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/desinfeccion/desinfeccion.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/desinfeccion/desinfeccion.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Desinfección del Reservorio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n\n  <form [formGroup]=\"desinfeccion_form\" (ngSubmit)=\"onSubmit(desinfeccion_form.value)\">\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Volumen del Reservorio (Litros)</ion-label>\n        <ion-input formControlName=\"v_reservorio\" type=\"number\">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\" position=\"stacked\">Concentración Deseada del Reservorio (miligramos por litro)</ion-label>\n        <ion-input formControlName=\"c_reservorio\" type=\"number\" placeholder=\"ejemplos: 1.0 o 1.5\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Porcentaje de Cloro</ion-label>\n        <ion-input formControlName=\"p_cloro\" type=\"number\" placeholder=\"ejemplos: 65 o 70\">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-text color=\"success\">\n  \t\t\t<h3>{{desinfeccion_str}}</h3>\n  \t\t</ion-text>\n    </ion-item>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!desinfeccion_form.valid\">Calcular</ion-button>\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/desinfeccion/desinfeccion-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/desinfeccion/desinfeccion-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DesinfeccionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesinfeccionPageRoutingModule", function() { return DesinfeccionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _desinfeccion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desinfeccion.page */ "./src/app/desinfeccion/desinfeccion.page.ts");




var routes = [
    {
        path: '',
        component: _desinfeccion_page__WEBPACK_IMPORTED_MODULE_3__["DesinfeccionPage"]
    }
];
var DesinfeccionPageRoutingModule = /** @class */ (function () {
    function DesinfeccionPageRoutingModule() {
    }
    DesinfeccionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DesinfeccionPageRoutingModule);
    return DesinfeccionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/desinfeccion/desinfeccion.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/desinfeccion/desinfeccion.module.ts ***!
  \*****************************************************/
/*! exports provided: DesinfeccionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesinfeccionPageModule", function() { return DesinfeccionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _desinfeccion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desinfeccion-routing.module */ "./src/app/desinfeccion/desinfeccion-routing.module.ts");
/* harmony import */ var _desinfeccion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desinfeccion.page */ "./src/app/desinfeccion/desinfeccion.page.ts");







var DesinfeccionPageModule = /** @class */ (function () {
    function DesinfeccionPageModule() {
    }
    DesinfeccionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _desinfeccion_routing_module__WEBPACK_IMPORTED_MODULE_5__["DesinfeccionPageRoutingModule"]
            ],
            declarations: [_desinfeccion_page__WEBPACK_IMPORTED_MODULE_6__["DesinfeccionPage"]]
        })
    ], DesinfeccionPageModule);
    return DesinfeccionPageModule;
}());



/***/ }),

/***/ "./src/app/desinfeccion/desinfeccion.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/desinfeccion/desinfeccion.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2luZmVjY2lvbi9kZXNpbmZlY2Npb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/desinfeccion/desinfeccion.page.ts":
/*!***************************************************!*\
  !*** ./src/app/desinfeccion/desinfeccion.page.ts ***!
  \***************************************************/
/*! exports provided: DesinfeccionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesinfeccionPage", function() { return DesinfeccionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DesinfeccionPage = /** @class */ (function () {
    function DesinfeccionPage() {
        // final value to display
        this.desinfeccion_str = "";
    }
    DesinfeccionPage.prototype.ngOnInit = function () {
        this.desinfeccion_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            v_reservorio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
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
    };
    DesinfeccionPage.prototype.onSubmit = function (values) {
        console.log('desinfeccion submit button clicked.');
        console.log(values);
        this.desinfeccion_val = (
        // liters * (mg/L) * 1g/1000mg = grams
        (values.v_reservorio * values.c_reservorio / 1000) /
            // change percent to decimal (no units)
            (values.p_cloro / 100));
        this.desinfeccion_str = this.desinfeccion_val.toFixed(1) + " gramos";
    };
    DesinfeccionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-desinfeccion',
            template: __webpack_require__(/*! raw-loader!./desinfeccion.page.html */ "./node_modules/raw-loader/index.js!./src/app/desinfeccion/desinfeccion.page.html"),
            styles: [__webpack_require__(/*! ./desinfeccion.page.scss */ "./src/app/desinfeccion/desinfeccion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DesinfeccionPage);
    return DesinfeccionPage;
}());



/***/ })

}]);
//# sourceMappingURL=desinfeccion-desinfeccion-module-es5.js.map