!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("zegna/core"),require("Vue")):"function"==typeof define&&define.amd?define(["zegna/core","Vue"],t):"object"==typeof exports?exports["zegna/loader"]=t(require("zegna/core"),require("Vue")):e["zegna/loader"]=t(e["zegna/core"],e.Vue)}(window,(function(e,t){return(window.webpackJsonpzegna_name_=window.webpackJsonpzegna_name_||[]).push([[87],{0:function(t,n){t.exports=e},2:function(e,n){e.exports=t},339:function(e,t,n){var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loader",class:{"loader--visible":this.visible,"loader--black":this.black}},[t("div",{staticClass:"loader__wrapper"},[this.black?t("div",{staticClass:"loader__black"},[t("img",{attrs:{src:"/etc.clientlibs/zegna-commerce/clientlibs/clientlib-bundle-assets/resources/images/loader/pre_black.gif",alt:"loader black"}})]):t("div",{staticClass:"loader__white"},[t("img",{attrs:{src:"/etc.clientlibs/zegna-commerce/clientlibs/clientlib-bundle-assets/resources/images/loader/pre_white.gif",alt:"loader white"}})])])])},r=[];i._withStripped=!0,e.exports=function(e){var t="function"==typeof e?e.options:e;return t.render=i,t.staticRenderFns=r,e}},652:function(e,t,n){n(653),e.exports=n(654)},653:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),o=n(0),a=n(339),s=n.n(a);t.default=r.a.component("loader-component",s()({props:{black:null},data:function(){return{visible:!1}},created:function(){var e=this;o.BusHelper.on("evt-loader",(function(t){e.visible=t}))},methods:{}}))},654:function(e,t,n){}},[[652,0]]])}));
//# sourceMappingURL=loader.js.map