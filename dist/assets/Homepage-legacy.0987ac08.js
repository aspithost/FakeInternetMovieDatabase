!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,r)||o(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(A){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var u=L(i,e);if(u){if(u===h)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=f(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(A){return{type:"throw",arg:A}}}r.wrap=s;var h={};function d(){}function p(){}function v(){}var y={};l(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(E([])));g&&g!==n&&o.call(g,i)&&(y=g);var w=v.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(r,e){function n(a,i,u,c){var l=f(r[a],r,i);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(h).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}}function L(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,l(w,"constructor",v),l(v,"constructor",p),p.displayName=l(v,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,u,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new x(s(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),l(w,c,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},r}function n(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){if(t){if("string"==typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function i(t,r,e,n,o,a,i){try{var u=t[a](i),c=u.value}catch(l){return void e(l)}u.done?r(c):Promise.resolve(c).then(n,o)}var u=document.createElement("style");u.innerHTML=".scroller[data-v-68a4da8c]{scrollbar-width:thin;scrollbar-color:#888 #222}[data-v-68a4da8c]::-webkit-scrollbar{height:8px}[data-v-68a4da8c]::-webkit-scrollbar-track{background:#222}[data-v-68a4da8c]::-webkit-scrollbar-thumb{background:#888}[data-v-68a4da8c]::-webkit-scrollbar-thumb:hover{background:#777}[data-v-68a4da8c]::-webkit-scrollbar-thumb:active{background:#444}\n",document.head.appendChild(u),System.register(["./ShowRating-legacy.3d1a7dc5.js","./index-legacy.f2debe8a.js"],(function(t){"use strict";var o,a,u,c,l,s,f,h,d,p,v,y,m,g,w,b,x,L;return{setters:[function(t){o=t._},function(t){a=t.r,u=t.o,c=t.c,l=t.a,s=t.w,f=t.b,h=t.t,d=t._,p=t.F,v=t.d,y=t.e,m=t.f,g=t.u,w=t.g,b=t.h,x=t.n,L=t.i}],execute:function(){var S={class:"rounded-t-md overflow-hidden"},_=["src","alt"],k={class:"bg-[#222] rounded-b-md px-4 py-2"},E={class:"clip-text hover:text-white"},j=f("div",{class:"bg-[#333] rounded-md px-2 xl:px-4 text-center py-1 my-2 hover:bg-[#444]"},[f("span",{class:"text-sm xl:text-base"},"Details")],-1),A={__name:"ItemCard",props:{show:Object},setup:function(t){return function(r,e){var n=a("router-link");return u(),c("div",null,[l(n,{to:{name:"Show",params:{id:t.show.id,slug:t.show.name.toLowerCase().replace(/\s|\W/g,"-")}}},{default:s((function(){return[f("div",S,[f("img",{src:t.show.image.medium,alt:t.show.name,width:"210",height:"295",loading:"lazy",class:"aspect-[42/59] min-w-[130px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[210px] object-cover rounded-md \\ hover:scale-105 duration-300 opacity-80 hover:opacity-100"},null,8,_)])]})),_:1},8,["to"]),f("div",k,[l(o,{rating:t.show.rating.average},null,8,["rating"]),l(n,{to:{name:"Show",params:{id:t.show.id,slug:t.show.name.toLowerCase().replace(/\s|\W/,"-")}}},{default:s((function(){return[f("h3",E,h(t.show.name),1)]})),_:1},8,["to"]),l(n,{to:{name:"Show",params:{id:t.show.id,slug:t.show.name.toLowerCase().replace(/\s|\W/,"-")}}},{default:s((function(){return[j]})),_:1},8,["to"])])])}}},O={class:"scroller flex overflow-x-scroll gap-x-4 py-4"},I=d({__name:"ItemList",props:{shows:Array},setup:function(t){return function(r,e){return u(),c("span",O,[(u(!0),c(p,null,v(t.shows,(function(t){return u(),y(A,{show:t},null,8,["show"])})),256))])}}},[["__scopeId","data-v-68a4da8c"]]),T=function(){return Math.random()-.5},C=function(t,r){return r.rating.average-t.rating.average},F=function(t,r){var e;if(null!==(e=t)&&void 0!==e&&e.length)return r&&(t=t.filter((function(t){return function(t,r){return t.genres.includes(r)}(t,r)}))),t.sort(C).slice(0,20).sort(T)},G=m(null),N=m([]),P=function(){var t,r=(t=e().mark((function t(){var r,o,a,i,u,c;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=0,o=[],a=!0;case 3:if(!a){t.next=22;break}return t.prev=4,t.next=7,fetch("https://api.tvmaze.com/shows?page=".concat(r));case 7:return i=t.sent,t.next=10,i.json();case 10:(u=t.sent).length||(a=!1),c=u.filter((function(t){return t.rating.average>1&&t.rating.average<4})).sort((function(t,r){return t.rating.average-r.rating.average})).slice(0,3),o=[].concat(n(o),n(c)).sort((function(t,r){return t.rating.average-r.rating.average})).slice(0,20).sort(T),r+=1,t.next=20;break;case 17:t.prev=17,t.t0=t.catch(4),G.value=t.t0.message;case 20:t.next=3;break;case 22:return t.abrupt("return",N.value=o);case 23:case"end":return t.stop()}}),t,null,[[4,17]])})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))});return function(){return r.apply(this,arguments)}}();function W(){return{error:G,worstShows:N,getWorstShows:P}}var z={class:"space-y-4 pt-4"},D={key:0,class:"space-y-1"},M=f("p",null,"Ever wondered what we all consider the worst shows of all time? It just so happens that I can show you!",-1),R=f("p",null,"It does take a few seconds, though. Querying over 60.000 shows in the database can do that for you!",-1),Y={key:0};t("default",{__name:"Homepage",setup:function(t){var e=g("https://api.tvmaze.com/shows"),n=e.data,o=(e.error,W()),a=(o.error,o.worstShows),i=o.getWorstShows,s=w((function(){console.log("computed runt"),F(n.value)})),d=w((function(){return F(n.value,"Action")})),y=w((function(){return F(n.value,"Comedy")})),S=w((function(){return F(n.value,"Crime")})),_=w((function(){return F(n.value,"Drama")})),k=w((function(){return F(n.value,"Romance")})),E=w((function(){return F(n.value,"Action")})),j=w((function(){return F(n.value,"Thriller")})),A=m(!1);return function(t,e){return u(),c("div",z,[(u(!0),c(p,null,v([["Featured",b(s)],["Drama",b(_)],["Action",b(d)],["Crime",b(S)],["Comedy",b(y)],["Romance",b(k)],["Science Fiction",b(E)],["Thriller",b(j)],["Worst Shows Of All Time",b(a)]],(function(t){var n=r(t,2),o=n[0],a=n[1];return u(),c("section",null,[f("h2",null,h(o),1),"Worst Shows Of All Time"!==o||a.length?L("",!0):(u(),c("div",D,[M,R,f("button",{onClick:e[0]||(e[0]=function(t){b(i)(),A.value=!0}),class:x(["bg-[#333] font-semibold rounded-full px-4 py-2 hover:bg-[#444]",{"cursor-not-allowed animate-pulse":A.value}])}," Yes, Load Worst Shows! ",2),A.value&&!a.length?(u(),c("p",Y,"Loading worst shows, hang on a few seconds!")):L("",!0)])),l(I,{shows:a},null,8,["shows"])])})),256))])}}})}}}))}();
