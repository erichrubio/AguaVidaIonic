(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{JN55:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var i=u("pMnS"),t=u("oBZk"),b=u("ZZ/e"),r=u("s7LF");class s{constructor(){this.desinfeccion_value=""}ngOnInit(){this.desinfeccion_form=new r.e({v_reservorio:new r.c(null,r.m.required),c_reservorio:new r.c(null,r.m.required),p_cloro:new r.c(null,r.m.required)})}onSubmit(l){console.log("desinfeccion submit button clicked."),console.log(l),this.desinfeccion_value=(l.v_reservorio*l.c_reservorio/1e3/(l.p_cloro/100)).toFixed(0)+" gramos"}}var a=e.nb({encapsulation:0,styles:[[""]],data:{}});function c(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,11,"ion-header",[["translucent",""]],null,null,null,t.s,t.f)),e.ob(1,49152,null,0,b.z,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,t.z,t.m)),e.ob(3,49152,null,0,b.Ab,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,t.q,t.d)),e.ob(5,49152,null,0,b.j,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Ab(l,8).onClick(u)&&o),o}),t.o,t.b)),e.ob(7,49152,null,0,b.e,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(8,16384,null,0,b.f,[[2,b.gb],b.Fb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,t.y,t.l)),e.ob(10,49152,null,0,b.yb,[e.h,e.k,e.x],null,null),(l()(),e.Eb(-1,0,["Desinfecci\xf3n del Reservorio"])),(l()(),e.pb(12,0,null,null,53,"ion-content",[["class","ion-padding"],["fullscreen",""]],null,null,null,t.r,t.e)),e.ob(13,49152,null,0,b.s,[e.h,e.k,e.x],{fullscreen:[0,"fullscreen"]},null),(l()(),e.pb(14,0,null,0,51,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,i=l.component;return"submit"===n&&(o=!1!==e.Ab(l,16).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Ab(l,16).onReset()&&o),"ngSubmit"===n&&(o=!1!==i.onSubmit(i.desinfeccion_form.value)&&o),o}),null,null)),e.ob(15,16384,null,0,r.q,[],null,null),e.ob(16,540672,null,0,r.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Bb(2048,null,r.a,null,[r.f]),e.ob(18,16384,null,0,r.k,[[4,r.a]],null,null),(l()(),e.pb(19,0,null,null,37,"ion-list",[],null,null,null,t.w,t.j)),e.ob(20,49152,null,0,b.M,[e.h,e.k,e.x],null,null),(l()(),e.pb(21,0,null,0,11,"ion-item",[],null,null,null,t.u,t.h)),e.ob(22,49152,null,0,b.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(23,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,t.v,t.i)),e.ob(24,49152,null,0,b.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Eb(-1,0,["Volumen del Reservorio (Litros)"])),(l()(),e.pb(26,0,null,0,6,"ion-input",[["formControlName","v_reservorio"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Ab(l,27)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Ab(l,27)._handleIonChange(u.target)&&o),o}),t.t,t.g)),e.ob(27,16384,null,0,b.Gb,[e.k],null,null),e.Bb(1024,null,r.h,(function(l){return[l]}),[b.Gb]),e.ob(29,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.h],[2,r.p]],{name:[0,"name"]},null),e.Bb(2048,null,r.i,null,[r.d]),e.ob(31,16384,null,0,r.j,[[4,r.i]],null,null),e.ob(32,49152,null,0,b.E,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.pb(33,0,null,0,11,"ion-item",[],null,null,null,t.u,t.h)),e.ob(34,49152,null,0,b.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(35,0,null,0,2,"ion-label",[["class","ion-text-wrap"],["position","stacked"]],null,null,null,t.v,t.i)),e.ob(36,49152,null,0,b.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Eb(-1,0,["Concentraci\xf3n Deseada del Reservorio (miligramos por litro)"])),(l()(),e.pb(38,0,null,0,6,"ion-input",[["formControlName","c_reservorio"],["placeholder","ejemplos: 1.0 o 1.5"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Ab(l,39)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Ab(l,39)._handleIonChange(u.target)&&o),o}),t.t,t.g)),e.ob(39,16384,null,0,b.Gb,[e.k],null,null),e.Bb(1024,null,r.h,(function(l){return[l]}),[b.Gb]),e.ob(41,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.h],[2,r.p]],{name:[0,"name"]},null),e.Bb(2048,null,r.i,null,[r.d]),e.ob(43,16384,null,0,r.j,[[4,r.i]],null,null),e.ob(44,49152,null,0,b.E,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.pb(45,0,null,0,11,"ion-item",[],null,null,null,t.u,t.h)),e.ob(46,49152,null,0,b.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(47,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,t.v,t.i)),e.ob(48,49152,null,0,b.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Eb(-1,0,["Porcentaje de Cloro"])),(l()(),e.pb(50,0,null,0,6,"ion-input",[["formControlName","p_cloro"],["placeholder","ejemplos: 65 o 70"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Ab(l,51)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Ab(l,51)._handleIonChange(u.target)&&o),o}),t.t,t.g)),e.ob(51,16384,null,0,b.Gb,[e.k],null,null),e.Bb(1024,null,r.h,(function(l){return[l]}),[b.Gb]),e.ob(53,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.h],[2,r.p]],{name:[0,"name"]},null),e.Bb(2048,null,r.i,null,[r.d]),e.ob(55,16384,null,0,r.j,[[4,r.i]],null,null),e.ob(56,49152,null,0,b.E,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.pb(57,0,null,null,5,"ion-item",[],null,null,null,t.u,t.h)),e.ob(58,49152,null,0,b.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(59,0,null,0,3,"ion-text",[["color","success"]],null,null,null,t.x,t.k)),e.ob(60,49152,null,0,b.vb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.pb(61,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Eb(62,null,["",""])),(l()(),e.pb(63,0,null,null,2,"ion-button",[["class","submit-btn"],["color","primary"],["expand","full"],["type","submit"]],null,null,null,t.p,t.c)),e.ob(64,49152,null,0,b.i,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(l()(),e.Eb(-1,0,["Calcular"]))],(function(l,n){var u=n.component;l(n,1,0,""),l(n,7,0,"/"),l(n,8,0,"/"),l(n,13,0,""),l(n,16,0,u.desinfeccion_form),l(n,24,0,"stacked"),l(n,29,0,"v_reservorio"),l(n,32,0,"number"),l(n,36,0,"stacked"),l(n,41,0,"c_reservorio"),l(n,44,0,"ejemplos: 1.0 o 1.5","number"),l(n,48,0,"stacked"),l(n,53,0,"p_cloro"),l(n,56,0,"ejemplos: 65 o 70","number"),l(n,60,0,"success"),l(n,64,0,"primary",!u.desinfeccion_form.valid,"full","submit")}),(function(l,n){var u=n.component;l(n,14,0,e.Ab(n,18).ngClassUntouched,e.Ab(n,18).ngClassTouched,e.Ab(n,18).ngClassPristine,e.Ab(n,18).ngClassDirty,e.Ab(n,18).ngClassValid,e.Ab(n,18).ngClassInvalid,e.Ab(n,18).ngClassPending),l(n,26,0,e.Ab(n,31).ngClassUntouched,e.Ab(n,31).ngClassTouched,e.Ab(n,31).ngClassPristine,e.Ab(n,31).ngClassDirty,e.Ab(n,31).ngClassValid,e.Ab(n,31).ngClassInvalid,e.Ab(n,31).ngClassPending),l(n,38,0,e.Ab(n,43).ngClassUntouched,e.Ab(n,43).ngClassTouched,e.Ab(n,43).ngClassPristine,e.Ab(n,43).ngClassDirty,e.Ab(n,43).ngClassValid,e.Ab(n,43).ngClassInvalid,e.Ab(n,43).ngClassPending),l(n,50,0,e.Ab(n,55).ngClassUntouched,e.Ab(n,55).ngClassTouched,e.Ab(n,55).ngClassPristine,e.Ab(n,55).ngClassDirty,e.Ab(n,55).ngClassValid,e.Ab(n,55).ngClassInvalid,e.Ab(n,55).ngClassPending),l(n,62,0,u.desinfeccion_value)}))}function d(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,1,"app-desinfeccion",[],null,null,null,c,a)),e.ob(1,114688,null,0,s,[],null,null)],(function(l,n){l(n,1,0)}),null)}var p=e.lb("app-desinfeccion",s,d,{},{},[]),g=u("SVse"),h=u("iInd");class m{}u.d(n,"DesinfeccionPageModuleNgFactory",(function(){return f}));var f=e.mb(o,[],(function(l){return e.xb([e.yb(512,e.j,e.Y,[[8,[i.a,p]],[3,e.j],e.v]),e.yb(4608,g.i,g.h,[e.s,[2,g.p]]),e.yb(4608,r.o,r.o,[]),e.yb(4608,r.b,r.b,[]),e.yb(4608,b.a,b.a,[e.x,e.g]),e.yb(4608,b.Eb,b.Eb,[b.a,e.j,e.p]),e.yb(4608,b.Ib,b.Ib,[b.a,e.j,e.p]),e.yb(1073742336,g.b,g.b,[]),e.yb(1073742336,r.n,r.n,[]),e.yb(1073742336,r.g,r.g,[]),e.yb(1073742336,r.l,r.l,[]),e.yb(1073742336,b.Cb,b.Cb,[]),e.yb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),e.yb(1073742336,m,m,[]),e.yb(1073742336,o,o,[]),e.yb(1024,h.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);