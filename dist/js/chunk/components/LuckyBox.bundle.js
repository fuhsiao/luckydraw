(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{103:function(t,e,i){"use strict";(function(t){var a=i(0),n=i(2);function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,e||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a={components:{CandidateBox:()=>i.e(2).then(i.bind(null,147))},filters:{},props:{},data:()=>({award:""}),computed:o(o({},Object(n.c)(["triggerOpenLucky","focusPrizeSN","focusCandidateSN","prizeList","candidateMapping","prizeMapping"])),{},{focusCandidateInfo(){return this.candidateMapping[this.focusCandidateSN]||!1},focusPrizeInfo(){return this.prizeMapping[this.focusPrizeSN]||!1}}),watch:{triggerOpenLucky:{handler(){t(this.$refs.box).modal("show")}}},created(){},mounted(){var e=this;t(e.$refs.box).bind("shown.bs.modal",()=>{e.setFavicon("award"),a.g.mixpanel("LuckyOpen_click",{candidate:e.focusCandidateInfo,prize:e.focusPrizeInfo}),a.g.gtag("event","LuckyOpen_click",{candidate:e.focusCandidateInfo,prize:e.focusPrizeInfo})}),t(e.$refs.box).bind("hidden.bs.modal",()=>{e.setFavicon("default"),a.g.mixpanel("LuckyClose_click"),a.g.gtag("event","LuckyClose_click")}),t(e.$refs.box).modal("show")},updated(){},destroyed(){},methods:o(o(o({},Object(n.b)({})),Object(n.d)({setFavicon:"setFavicon",setFocusCandidateBindPrize:"setFocusCandidateBindPrize"})),{},{save(){var e={prize_sn:this.focusPrizeSN,candidate_sn:this.focusCandidateSN};a.g.mixpanel("LuckyConfirm_click",{candidate:this.focusCandidateInfo,prize:this.focusPrizeInfo}),a.g.gtag("event","LuckyConfirm_click",{candidate:this.focusCandidateInfo,prize:this.focusPrizeInfo}),this.setFocusCandidateBindPrize(e),t(this.$refs.box).modal("hide")},cancel(){a.g.mixpanel("LuckyCancel_click",{candidate:this.focusCandidateInfo,prize:this.focusPrizeInfo}),a.g.gtag("event","LuckyCancel_click",{candidate:this.focusCandidateInfo,prize:this.focusPrizeInfo})}})}}).call(this,i(14))},359:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{ref:"box",staticClass:"modal lucky-modal",attrs:{id:"LuckyBox",tabindex:"-1",role:"dialog","data-backdrop":"static","data-keyboard":"false"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"text-center p-4 lucky-info"},[e("h4",[t._v("恭喜中獎")]),t._v(" "),t.focusCandidateInfo?[e("candidate-box",{key:t.focusCandidateInfo.sn,attrs:{"candidate-index":0,"candidate-info":t.focusCandidateInfo}})]:[t._v("\n                        無法對應\n                    ")],t._v(" "),e("h5",{staticClass:"mt-4"},[t._v("\n                        中獎獎項\n                    ")]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-control text-center",domProps:{textContent:t._s(t.focusPrizeInfo.title)}})])],2)]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("div",{staticClass:"col-6 text-left"},[e("button",{staticClass:"btn btn-secondary cancel",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.cancel}},[t._v("\n                        取消\n                    ")])]),t._v(" "),e("div",{staticClass:"col-6 text-right"},[e("button",{staticClass:"btn btn-primary save",attrs:{type:"button"},on:{click:t.save}},[t._v("\n                        確定\n                    ")])])])])])])};a._withStripped=!0;var n=i(103).a,s=i(9),o=Object(s.a)(n,a,[function(){var t=this._self._c;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[t("i",{staticClass:"fas fa-vote-yea"}),this._v("\n                    恭喜中獎\n                ")])])}],!1,null,"381313cc",null);e.default=o.exports}}]);