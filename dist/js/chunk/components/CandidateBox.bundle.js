(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{147:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return t.candidateInfo?e("div",{staticClass:"candidate-box",class:{focus:t.focusCandidateSN==t.candidateInfo.sn},attrs:{"data-index":t.candidateIndex}},[e("div",{staticClass:"candidate-wrapper",style:{width:t.config.boxWidth+"px",height:t.config.boxHeight+"px",margin:`${t.config.boxMV}px ${t.config.boxMH}px`,background:t.boxColor}},[e("div",{staticClass:"candidate-name",style:{"font-size":t.config.titleSize+"px"}},[t._v("\n            "+t._s(t.candidateInfo.name)+"\n        ")]),t._v(" "),e("div",{staticClass:"candidate-pos",style:{"font-size":t.config.subtitleSize+"px"}},[t._v("\n            "+t._s(t.candidateInfo.pos)+"\n        ")])])]):t._e()};i._withStripped=!0;var r=n(2);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={components:{},filters:{},props:{candidateIndex:{type:[Number],default:null},candidateInfo:{type:[Object],default:null}},data:()=>({}),computed:a(a({},Object(r.c)(["focusCandidateSN","haveAwardCandidateSN","config"])),{},{boxColor(){var t=this.config.defaultColor;return this.haveAwardCandidateSN.includes(this.candidateInfo.sn)?t=this.config.doneColor:this.focusCandidateSN===this.candidateInfo.sn&&(t=this.config.focusColor),t}}),watch:{},created(){},mounted(){},updated(){},destroyed(){},methods:a(a({},Object(r.b)({})),Object(r.d)({}))},s=n(9),f=Object(s.a)(d,i,[],!1,null,"117a6454",null);e.default=f.exports}}]);