(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"i/Qx":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var i=u("pMnS"),t=u("oBZk"),a=u("ZZ/e"),b=u("s7LF");class s{constructor(){this.peso_goteos_value=""}ngOnInit(){this.peso_goteos_form=new b.e({caudal:new b.c(null,b.m.required),c_reservorio:new b.c(null,b.m.required),p_cloro:new b.c(null,b.m.required),dias:new b.c(null,b.m.required)})}onSubmit(l){console.log("peso_goteos submit button clicked."),console.log(l);var n=l.dias,u=24*l.caudal*60*60*l.c_reservorio/(l.p_cloro/100*1e3);u*=n,console.log(u);let o=n+" dias";1==n&&(o="dia"),this.peso_goteos_value="Peso de cloro = "+Math.round(u)+" gramos cada "+o}}var r=o.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,11,"ion-header",[["translucent",""]],null,null,null,t.s,t.f)),o.ob(1,49152,null,0,a.z,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(l()(),o.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,t.z,t.m)),o.ob(3,49152,null,0,a.Ab,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,t.q,t.d)),o.ob(5,49152,null,0,a.j,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.Ab(l,8).onClick(u)&&e),e}),t.o,t.b)),o.ob(7,49152,null,0,a.e,[o.h,o.k,o.x],{defaultHref:[0,"defaultHref"]},null),o.ob(8,16384,null,0,a.f,[[2,a.gb],a.Fb],{defaultHref:[0,"defaultHref"]},null),(l()(),o.pb(9,0,null,0,2,"ion-title",[],null,null,null,t.y,t.l)),o.ob(10,49152,null,0,a.yb,[o.h,o.k,o.x],null,null),(l()(),o.Eb(-1,0,["Peso de Cloro (Goteos)"])),(l()(),o.pb(12,0,null,null,65,"ion-content",[["class","ion-padding"],["fullscreen",""]],null,null,null,t.r,t.e)),o.ob(13,49152,null,0,a.s,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.pb(14,0,null,0,63,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,i=l.component;return"submit"===n&&(e=!1!==o.Ab(l,16).onSubmit(u)&&e),"reset"===n&&(e=!1!==o.Ab(l,16).onReset()&&e),"ngSubmit"===n&&(e=!1!==i.onSubmit(i.peso_goteos_form.value)&&e),e}),null,null)),o.ob(15,16384,null,0,b.q,[],null,null),o.ob(16,540672,null,0,b.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.Bb(2048,null,b.a,null,[b.f]),o.ob(18,16384,null,0,b.k,[[4,b.a]],null,null),(l()(),o.pb(19,0,null,null,49,"ion-list",[],null,null,null,t.w,t.j)),o.ob(20,49152,null,0,a.M,[o.h,o.k,o.x],null,null),(l()(),o.pb(21,0,null,0,11,"ion-item",[],null,null,null,t.u,t.h)),o.ob(22,49152,null,0,a.F,[o.h,o.k,o.x],null,null),(l()(),o.pb(23,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,t.v,t.i)),o.ob(24,49152,null,0,a.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Eb(-1,0,["Caudal (litros por segundo)"])),(l()(),o.pb(26,0,null,0,6,"ion-input",[["formControlName","caudal"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Ab(l,27)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Ab(l,27)._handleIonChange(u.target)&&e),e}),t.t,t.g)),o.ob(27,16384,null,0,a.Gb,[o.k],null,null),o.Bb(1024,null,b.h,(function(l){return[l]}),[a.Gb]),o.ob(29,671744,null,0,b.d,[[3,b.a],[8,null],[8,null],[6,b.h],[2,b.p]],{name:[0,"name"]},null),o.Bb(2048,null,b.i,null,[b.d]),o.ob(31,16384,null,0,b.j,[[4,b.i]],null,null),o.ob(32,49152,null,0,a.E,[o.h,o.k,o.x],{type:[0,"type"]},null),(l()(),o.pb(33,0,null,0,11,"ion-item",[],null,null,null,t.u,t.h)),o.ob(34,49152,null,0,a.F,[o.h,o.k,o.x],null,null),(l()(),o.pb(35,0,null,0,2,"ion-label",[["class","ion-text-wrap"],["position","stacked"]],null,null,null,t.v,t.i)),o.ob(36,49152,null,0,a.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Eb(-1,0,["Concentraci\xf3n Deseada del Reservorio (miligramos por litro)"])),(l()(),o.pb(38,0,null,0,6,"ion-input",[["formControlName","c_reservorio"],["placeholder","ejemplos: 1.0 o 1.5"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Ab(l,39)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Ab(l,39)._handleIonChange(u.target)&&e),e}),t.t,t.g)),o.ob(39,16384,null,0,a.Gb,[o.k],null,null),o.Bb(1024,null,b.h,(function(l){return[l]}),[a.Gb]),o.ob(41,671744,null,0,b.d,[[3,b.a],[8,null],[8,null],[6,b.h],[2,b.p]],{name:[0,"name"]},null),o.Bb(2048,null,b.i,null,[b.d]),o.ob(43,16384,null,0,b.j,[[4,b.i]],null,null),o.ob(44,49152,null,0,a.E,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.pb(45,0,null,0,11,"ion-item",[],null,null,null,t.u,t.h)),o.ob(46,49152,null,0,a.F,[o.h,o.k,o.x],null,null),(l()(),o.pb(47,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,t.v,t.i)),o.ob(48,49152,null,0,a.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Eb(-1,0,["Porcentaje de Cloro"])),(l()(),o.pb(50,0,null,0,6,"ion-input",[["formControlName","p_cloro"],["placeholder","ejemplos: 65 o 70"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Ab(l,51)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Ab(l,51)._handleIonChange(u.target)&&e),e}),t.t,t.g)),o.ob(51,16384,null,0,a.Gb,[o.k],null,null),o.Bb(1024,null,b.h,(function(l){return[l]}),[a.Gb]),o.ob(53,671744,null,0,b.d,[[3,b.a],[8,null],[8,null],[6,b.h],[2,b.p]],{name:[0,"name"]},null),o.Bb(2048,null,b.i,null,[b.d]),o.ob(55,16384,null,0,b.j,[[4,b.i]],null,null),o.ob(56,49152,null,0,a.E,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.pb(57,0,null,0,11,"ion-item",[],null,null,null,t.u,t.h)),o.ob(58,49152,null,0,a.F,[o.h,o.k,o.x],null,null),(l()(),o.pb(59,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,t.v,t.i)),o.ob(60,49152,null,0,a.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Eb(-1,0,["D\xedas de Regarga"])),(l()(),o.pb(62,0,null,0,6,"ion-input",[["formControlName","dias"],["placeholder","ejemplos: 1 o 7"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Ab(l,63)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Ab(l,63)._handleIonChange(u.target)&&e),e}),t.t,t.g)),o.ob(63,16384,null,0,a.Gb,[o.k],null,null),o.Bb(1024,null,b.h,(function(l){return[l]}),[a.Gb]),o.ob(65,671744,null,0,b.d,[[3,b.a],[8,null],[8,null],[6,b.h],[2,b.p]],{name:[0,"name"]},null),o.Bb(2048,null,b.i,null,[b.d]),o.ob(67,16384,null,0,b.j,[[4,b.i]],null,null),o.ob(68,49152,null,0,a.E,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.pb(69,0,null,null,5,"ion-item",[],null,null,null,t.u,t.h)),o.ob(70,49152,null,0,a.F,[o.h,o.k,o.x],null,null),(l()(),o.pb(71,0,null,0,3,"ion-text",[["color","success"]],null,null,null,t.x,t.k)),o.ob(72,49152,null,0,a.vb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(73,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o.Eb(74,null,["",""])),(l()(),o.pb(75,0,null,null,2,"ion-button",[["class","submit-btn"],["color","primary"],["expand","full"],["type","submit"]],null,null,null,t.p,t.c)),o.ob(76,49152,null,0,a.i,[o.h,o.k,o.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(l()(),o.Eb(-1,0,["Calcular"]))],(function(l,n){var u=n.component;l(n,1,0,""),l(n,7,0,"/"),l(n,8,0,"/"),l(n,13,0,""),l(n,16,0,u.peso_goteos_form),l(n,24,0,"stacked"),l(n,29,0,"caudal"),l(n,32,0,"number"),l(n,36,0,"stacked"),l(n,41,0,"c_reservorio"),l(n,44,0,"ejemplos: 1.0 o 1.5","number"),l(n,48,0,"stacked"),l(n,53,0,"p_cloro"),l(n,56,0,"ejemplos: 65 o 70","number"),l(n,60,0,"stacked"),l(n,65,0,"dias"),l(n,68,0,"ejemplos: 1 o 7","number"),l(n,72,0,"success"),l(n,76,0,"primary",!u.peso_goteos_form.valid,"full","submit")}),(function(l,n){var u=n.component;l(n,14,0,o.Ab(n,18).ngClassUntouched,o.Ab(n,18).ngClassTouched,o.Ab(n,18).ngClassPristine,o.Ab(n,18).ngClassDirty,o.Ab(n,18).ngClassValid,o.Ab(n,18).ngClassInvalid,o.Ab(n,18).ngClassPending),l(n,26,0,o.Ab(n,31).ngClassUntouched,o.Ab(n,31).ngClassTouched,o.Ab(n,31).ngClassPristine,o.Ab(n,31).ngClassDirty,o.Ab(n,31).ngClassValid,o.Ab(n,31).ngClassInvalid,o.Ab(n,31).ngClassPending),l(n,38,0,o.Ab(n,43).ngClassUntouched,o.Ab(n,43).ngClassTouched,o.Ab(n,43).ngClassPristine,o.Ab(n,43).ngClassDirty,o.Ab(n,43).ngClassValid,o.Ab(n,43).ngClassInvalid,o.Ab(n,43).ngClassPending),l(n,50,0,o.Ab(n,55).ngClassUntouched,o.Ab(n,55).ngClassTouched,o.Ab(n,55).ngClassPristine,o.Ab(n,55).ngClassDirty,o.Ab(n,55).ngClassValid,o.Ab(n,55).ngClassInvalid,o.Ab(n,55).ngClassPending),l(n,62,0,o.Ab(n,67).ngClassUntouched,o.Ab(n,67).ngClassTouched,o.Ab(n,67).ngClassPristine,o.Ab(n,67).ngClassDirty,o.Ab(n,67).ngClassValid,o.Ab(n,67).ngClassInvalid,o.Ab(n,67).ngClassPending),l(n,74,0,u.peso_goteos_value)}))}function g(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,1,"app-peso-goteos",[],null,null,null,d,r)),o.ob(1,114688,null,0,s,[],null,null)],(function(l,n){l(n,1,0)}),null)}var p=o.lb("app-peso-goteos",s,g,{},{},[]),c=u("SVse"),h=u("iInd");class m{}u.d(n,"PesoGoteosPageModuleNgFactory",(function(){return C}));var C=o.mb(e,[],(function(l){return o.xb([o.yb(512,o.j,o.Y,[[8,[i.a,p]],[3,o.j],o.v]),o.yb(4608,c.i,c.h,[o.s,[2,c.p]]),o.yb(4608,b.o,b.o,[]),o.yb(4608,b.b,b.b,[]),o.yb(4608,a.a,a.a,[o.x,o.g]),o.yb(4608,a.Eb,a.Eb,[a.a,o.j,o.p]),o.yb(4608,a.Ib,a.Ib,[a.a,o.j,o.p]),o.yb(1073742336,c.b,c.b,[]),o.yb(1073742336,b.n,b.n,[]),o.yb(1073742336,b.g,b.g,[]),o.yb(1073742336,b.l,b.l,[]),o.yb(1073742336,a.Cb,a.Cb,[]),o.yb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),o.yb(1073742336,m,m,[]),o.yb(1073742336,e,e,[]),o.yb(1024,h.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);