(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(t,e,a){"use strict";(function(t){var i=a(0),s=a(2);function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var i=a.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.a={components:{},filters:{},props:{},data:()=>({candidateListTextarea:""}),computed:r({},Object(s.c)(["triggerOpenCandidateList","candidateList","candidateList_sort"])),watch:{triggerOpenCandidateList:{immediate:!0,handler(){this.triggerOpenCandidateList?t(this.$refs.box).modal("show"):t(this.$refs.box).modal("hide")}}},created(){},mounted(){var e=this;t(e.$refs.box).bind("shown.bs.modal",()=>{var t=JSON.parse(JSON.stringify(e.candidateList)),a=[];t.forEach(t=>{var e=[];e.push(t.name),t.pos&&e.push(t.pos),a.push(e.join(","))}),a=a.join("\n"),e.candidateListTextarea=a,i.g.mixpanel("CandidateListOpen_click"),i.g.gtag("event","CandidateListOpen_click")}),t(e.$refs.box).bind("hidden.bs.modal",()=>{i.g.mixpanel("CandidateListClose_click"),i.g.gtag("event","CandidateListClose_click")}),e.triggerOpenCandidateList?t(e.$refs.box).modal("show"):t(e.$refs.box).modal("hide")},updated(){},destroyed(){},methods:r(r({},Object(s.d)({setCandidateListInput:"setCandidateListInput",setCandidateListRandomSort:"setCandidateListRandomSort"})),{},{save(){var e={candidateListInput:JSON.parse(JSON.stringify(this.candidateListTextarea))};this.setCandidateListInput(e),i.g.mixpanel("CandidateListSave_click",this.candidateList),i.g.gtag("event","CandidateListSave_click",this.candidateList),t(this.$refs.box).modal("hide")},randomSort(){this.setCandidateListRandomSort(),i.g.mixpanel("CandidateListRandom_click",this.candidateList_sort),i.g.gtag("event","CandidateListRandom_click",this.candidateList_sort)}})}}).call(this,a(14))},356:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{ref:"box",staticClass:"modal",attrs:{id:"CandidateListBox",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),e("div",{staticClass:"modal-body",staticStyle:{height:"60vh"}},[e("div",{staticClass:"form-group",staticStyle:{display:"flex","align-items":"stretch","flex-direction":"column",height:"100%"}},[e("div",{staticClass:"alert alert-primary",staticStyle:{flex:"none"},attrs:{role:"alert"}},[t._v("\n                        請一行一行條列輸入候選名單\n                    ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.candidateListTextarea,expression:"candidateListTextarea"}],staticClass:"form-control",staticStyle:{flex:"1"},attrs:{name:"candidateListTextarea",placeholder:"姓名,職位"},domProps:{value:t.candidateListTextarea},on:{input:function(e){e.target.composing||(t.candidateListTextarea=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("div",{staticClass:"col-6 text-left"},[e("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.randomSort}},[t._v("\n                        打亂排序\n                    ")])]),t._v(" "),e("div",{staticClass:"col-6 text-right"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n                        取消\n                    ")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.save}},[t._v("\n                        儲存\n                    ")])])])])])])};i._withStripped=!0;var s=a(100).a,n=a(9),r=Object(n.a)(s,i,[function(){var t=this._self._c;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[t("i",{staticClass:"fas fa-user-edit"}),this._v("\n                    編輯名單\n                ")]),this._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}],!1,null,"465c1cd5",null);e.default=r.exports}}]);