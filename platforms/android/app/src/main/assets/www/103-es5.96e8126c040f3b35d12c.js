(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{X9e5:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",(function(){return h}));var n=i("mrSG"),r=i("Twl7"),o=(i("ttJE"),function(t,e){var i=s(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null}),s=function(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},l=function(t,e,i,n,r,o,s,l,h,a,c,u){for(var d=[],p=u+c,f=c;f<p;f++){var g,m=t[f];r&&null!=(g=r(m,f,t))&&d.push({i:a++,type:"header",value:g,index:f,height:i?i(g,f):s,reads:i?0:2,visible:!!i}),d.push({i:a++,type:"item",value:m,index:f,height:e?e(m,f):h,reads:e?0:2,visible:!!e}),o&&null!=(g=o(m,f,t))&&d.push({i:a++,type:"footer",value:g,index:f,height:n?n(g,f):l,reads:n?0:2,visible:!!n})}return d},h=function(){function t(t){var e=this;Object(r.l)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){e.updateVirtualScroll()}}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.connectedCallback=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e;return Object(n.e)(this,(function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?(e=this,[4,t.getScrollElement()]):(console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),[2]);case 1:return e.scrollEl=i.sent(),this.contentEl=t,this.calcCells(),this.updateState(),[2]}}))}))},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.disconnectedCallback=function(){this.scrollEl=void 0},t.prototype.onResize=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(function(t,e,i){var n=e.find((function(e){return"item"===e.type&&e.index===t}));return n?i[n.i]:-1}(t,this.cells,this.getHeightIndex()))},t.prototype.checkRange=function(t,e){return void 0===e&&(e=-1),Object(n.b)(this,void 0,void 0,(function(){var i,r,o;return Object(n.e)(this,(function(n){return this.items?(i=-1===e?this.items.length-t:e,r=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex((function(t){return t.index===e}))}(this.cells,t),o=l(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,t,i),this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+i]=e[n];return t}(this.cells,o,r),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate(),[2]):[2]}))}))},t.prototype.checkEnd=function(){return Object(n.b)(this,void 0,void 0,(function(){return Object(n.e)(this,(function(t){return this.items&&this.checkRange(this.lastItemLen),[2]}))}))},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(r.g)(this.readVS.bind(this)),Object(r.m)(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this.contentEl,e=this.scrollEl,i=0,n=this.el;n&&n!==t;)i+=n.offsetTop,n=n.parentElement;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)},t.prototype.writeVS=function(){var t,e,i=this.indexDirty,n=(t=this.currentScrollTop-this.viewportOffset,e=this.viewportHeight,{top:Math.max(t-100,0),bottom:t+e+100}),r=this.getHeightIndex(),s=function(t,e,i){for(var n=e.top,r=e.bottom,o=0;o<t.length&&!(t[o]>n);o++);for(var s=Math.max(o-2-1,0);o<t.length&&!(t[o]>=r);o++);return{offset:s,length:Math.min(o+2,t.length)-s}}(r,n);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(i,this.range,s)&&(this.range=s,function(t,e,i,n){for(var r=0,o=t;r<o.length;r++){var s=o[r];s.change=0,s.d=!0}for(var l=[],h=n.offset+n.length,a=function(n){var r=i[n],o=t.find((function(t){return t.d&&t.cell===r}));if(o){var s=e[n];s!==o.top&&(o.top=s,o.change=1),o.d=!1}else l.push(r)},c=n.offset;c<h;c++)a(c);for(var u=t.filter((function(t){return t.d})),d=function(i){var n=u.find((function(t){return t.d&&t.cell.type===i.type})),r=i.i;n?(n.d=!1,n.change=2,n.cell=i,n.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[r]})},p=0,f=l;p<f.length;p++)d(f[p]);t.filter((function(t){return t.d&&-9999!==t.top})).forEach((function(t){t.change=1,t.top=-9999}))}(this.virtualDom,r,this.cells,s),this.nodeRender?function(t,e,i,n){for(var r,s=Array.from(t.children).filter((function(t){return"TEMPLATE"!==t.tagName})),l=s.length,h=0;h<i.length;h++){var a=i[h],c=a.cell;if(2===a.change){if(h<l)e(r=s[h],c,h);else{var u=o(t,c.type);(r=e(u,c,h)||u).classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=c}else r=s[h];0!==a.change&&(r.style.transform="translate3d(0,"+a.top+"px,0)");var d=c.visible;a.visible!==d&&(d?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),a.visible=d),c.reads>0&&(n(c,r),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())},t.prototype.updateCellHeight=function(t,e){var i=this,n=function(){if(e.$ionCell===t){var n=window.getComputedStyle(e),r=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(t,r)}};e&&e.componentOnReady?e.componentOnReady().then(n):n()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=l(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){for(var n=t[i],r=i;r<t.length;r++)t[r]=n,n+=e[r].height;return n}(this.heightIndex,this.cells,t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})},t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.value,n=e.index;switch(e.type){case"item":return this.renderItem(i,n);case"header":return this.renderHeader(i,n);case"footer":return this.renderFooter(i,n)}},t.prototype.render=function(){var t=this;return Object(r.i)(r.a,{style:{height:this.totalHeight+"px"}},this.renderItem&&Object(r.i)(a,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute!important;top:0!important;right:0!important;left:0!important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"},enumerable:!0,configurable:!0}),t}(),a=function(t,e,i){var n=t.dom;return i.map(e,(function(t,e){var i=n[e],r=t.vattrs||{},o=r.class||"";return o+="virtual-item ",i.visible||(o+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},r),{class:o,style:Object.assign(Object.assign({},r.style),{transform:"translate3d(0,"+i.top+"px,0)"})})})}))}}}]);