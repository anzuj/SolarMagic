(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d6d35":"1e336bb6","chunk-2d21a3d2":"35134366"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/SolarMagic/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"1a12":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-main",{attrs:{fluid:"","fill-height":""}},[n("Navbar"),n("v-slide-x-reverse-transition",{attrs:{"hide-on-leave":!0}},[n("router-view")],1)],1)],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-app-bar",{attrs:{height:"80",elevation:"1"}},[r("v-toolbar-title",{staticClass:"ml-7"},[e._v("Playground")]),r("v-spacer"),r("v-img",{staticClass:"logo",attrs:{src:n("8f85"),contain:"","max-height":"50","max-width":"120"},on:{click:function(t){return e.$router.push("/")}}}),r("v-spacer"),e._v(" Go to page: "),r("div",{staticClass:"navMenu"},[r("v-select",{attrs:{"hide-details":"","menu-props":{bottom:!0,offsetY:!0},items:e.links,solo:"","background-color":"transparent",flat:""},scopedSlots:e._u([{key:"item",fn:function(t){return[r("div",{on:{click:function(n){return e.$router.push(""+t.item.link)}}},[r("v-icon",{staticClass:"mr-2"},[e._v(e._s(t.item.icon))]),e._v(" "+e._s(t.item.value)+" ")],1)]}},{key:"selection",fn:function(t){return[r("v-icon",{staticClass:"mr-2"},[e._v(e._s(t.item.icon))]),e._v(" "+e._s(t.item.value)+" ")]}}]),model:{value:e.currentLink,callback:function(t){e.currentLink=t},expression:"currentLink"}})],1)],1)],1)},u=[],c={name:"HelloWorld",data:function(){return{currentLink:"Home",links:[{value:"Home",link:"/",icon:"mdi-home"},{value:"Register",link:"/register",icon:"mdi-account-plus"}]}}},s=c,l=(n("5dfc"),n("2877")),f=Object(l["a"])(s,i,u,!1,null,null,null),d=f.exports,p={name:"",props:[""],components:{Navbar:d},data:function(){return{}},methods:{},computed:{}},v=p,m=(n("034f"),Object(l["a"])(v,o,a,!1,null,null,null)),h=m.exports,b=n("ce5b"),g=n.n(b);n("bf40");r["default"].use(g.a);var y=new g.a({theme:{themes:{light:{primary:"#2067B6",secondary:"#F6E27B",accent:"#BCAAB4",error:"#F44336",info:"#FF9800",success:"#8BC34A",green:"#7BA287"}}}}),k=(n("d3b7"),n("8c4f"));r["default"].use(k["a"]);var _=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}}],w=new k["a"]({mode:"history",base:"/SolarMagic/",routes:_}),j=w;r["default"].config.productionTip=!1,new r["default"]({vuetify:y,router:j,render:function(e){return e(h)}}).$mount("#app")},"5dfc":function(e,t,n){"use strict";var r=n("1a12"),o=n.n(r);o.a},"85ec":function(e,t,n){},"8f85":function(e,t,n){e.exports=n.p+"img/elance-logo.39aa6b3d.svg"}});
//# sourceMappingURL=app.4f65a246.js.map