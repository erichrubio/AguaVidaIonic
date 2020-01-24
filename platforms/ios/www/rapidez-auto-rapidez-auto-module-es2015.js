(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rapidez-auto-rapidez-auto-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rapidez-auto/rapidez-auto.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rapidez-auto/rapidez-auto.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Rapidez de Goteo (Autocompensante)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n  <p>Rapidez de Goteo (Autocompensante)</p>\n  <img src=\"../assets/img/rapidez_auto_nice.png\">\n</ion-content>\n"

/***/ }),

/***/ "./src/app/rapidez-auto/rapidez-auto-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/rapidez-auto/rapidez-auto-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RapidezAutoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapidezAutoPageRoutingModule", function() { return RapidezAutoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rapidez_auto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rapidez-auto.page */ "./src/app/rapidez-auto/rapidez-auto.page.ts");




const routes = [
    {
        path: '',
        component: _rapidez_auto_page__WEBPACK_IMPORTED_MODULE_3__["RapidezAutoPage"]
    }
];
let RapidezAutoPageRoutingModule = class RapidezAutoPageRoutingModule {
};
RapidezAutoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RapidezAutoPageRoutingModule);



/***/ }),

/***/ "./src/app/rapidez-auto/rapidez-auto.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/rapidez-auto/rapidez-auto.module.ts ***!
  \*****************************************************/
/*! exports provided: RapidezAutoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapidezAutoPageModule", function() { return RapidezAutoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rapidez_auto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rapidez-auto-routing.module */ "./src/app/rapidez-auto/rapidez-auto-routing.module.ts");
/* harmony import */ var _rapidez_auto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rapidez-auto.page */ "./src/app/rapidez-auto/rapidez-auto.page.ts");







let RapidezAutoPageModule = class RapidezAutoPageModule {
};
RapidezAutoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rapidez_auto_routing_module__WEBPACK_IMPORTED_MODULE_5__["RapidezAutoPageRoutingModule"]
        ],
        declarations: [_rapidez_auto_page__WEBPACK_IMPORTED_MODULE_6__["RapidezAutoPage"]]
    })
], RapidezAutoPageModule);



/***/ }),

/***/ "./src/app/rapidez-auto/rapidez-auto.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/rapidez-auto/rapidez-auto.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcGlkZXotYXV0by9yYXBpZGV6LWF1dG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/rapidez-auto/rapidez-auto.page.ts":
/*!***************************************************!*\
  !*** ./src/app/rapidez-auto/rapidez-auto.page.ts ***!
  \***************************************************/
/*! exports provided: RapidezAutoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapidezAutoPage", function() { return RapidezAutoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RapidezAutoPage = class RapidezAutoPage {
    constructor() { }
    ngOnInit() {
    }
};
RapidezAutoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rapidez-auto',
        template: __webpack_require__(/*! raw-loader!./rapidez-auto.page.html */ "./node_modules/raw-loader/index.js!./src/app/rapidez-auto/rapidez-auto.page.html"),
        styles: [__webpack_require__(/*! ./rapidez-auto.page.scss */ "./src/app/rapidez-auto/rapidez-auto.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RapidezAutoPage);



/***/ })

}]);
//# sourceMappingURL=rapidez-auto-rapidez-auto-module-es2015.js.map