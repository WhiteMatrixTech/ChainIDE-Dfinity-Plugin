(self.webpackChunkchainide=self.webpackChunkchainide||[]).push([[1979],{74737:function(t,e,r){"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[q]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===H}(t)||Array.isArray(t)||!!t[J]||!!t.constructor[J]||s(t)||y(t))}function u(t,e,r){void 0===r&&(r=!1),0===f(t)?(r?Object.keys:B)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function f(t){var e=t[q];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:s(t)?2:y(t)?3:0}function c(t,e){return 2===f(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function a(t,e){return 2===f(t)?t.get(e):t[e]}function l(t,e,r){var n=f(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function p(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function s(t){return L&&t instanceof Map}function y(t){return V&&t instanceof Set}function v(t){return t.o||t.t}function d(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=G(t);delete e[q];for(var r=B(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function h(t,e){return void 0===e&&(e=!1),g(t)||o(t)||!i(t)||(f(t)>1&&(t.set=t.add=t.clear=t.delete=b),Object.freeze(t),e&&u(t,(function(t,e){return h(e,!0)}),!0)),t}function b(){n(2)}function g(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function O(t){var e=Q[t];return e||n(18,t),e}function P(t,e){Q[t]||(Q[t]=e)}function w(){return K}function m(t,e){e&&(O("Patches"),t.u=[],t.s=[],t.v=e)}function j(t){_(t),t.p.forEach(S),t.p=null}function _(t){t===K&&(K=t.l)}function A(t){return K={p:[],l:K,h:t,m:!0,_:0}}function S(t){var e=t[q];0===e.i||1===e.i?e.j():e.O=!0}function E(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.g||O("ES5").S(e,t,o),o?(r[q].P&&(j(e),n(4)),i(t)&&(t=D(e,t),e.l||F(e,t)),e.u&&O("Patches").M(r[q],t,e.u,e.s)):t=D(e,r,[]),j(e),e.u&&e.v(e.u,e.s),t!==$?t:void 0}function D(t,e,r){if(g(e))return e;var n=e[q];if(!n)return u(e,(function(o,i){return k(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return F(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=d(n.k):n.o;u(3===n.i?new Set(o):o,(function(e,i){return k(t,n,o,e,i,r)})),F(t,o,!1),r&&t.u&&O("Patches").R(n,r,t.u,t.s)}return n.o}function k(t,e,r,n,u,f){if(o(u)){var a=D(t,u,f&&e&&3!==e.i&&!c(e.D,n)?f.concat(n):void 0);if(l(r,n,a),!o(a))return;t.m=!1}if(i(u)&&!g(u)){if(!t.h.F&&t._<1)return;D(t,u),e&&e.A.l||F(t,u)}}function F(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&h(e,r)}function I(t,e){var r=t[q];return(r?v(r):t)[e]}function x(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function C(t){t.P||(t.P=!0,t.l&&C(t.l))}function N(t){t.o||(t.o=d(t.t))}function R(t,e,r){var n=s(e)?O("MapSet").N(e,r):y(e)?O("MapSet").T(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:w(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=Y;r&&(o=[n],i=Z);var u=Proxy.revocable(o,i),f=u.revoke,c=u.proxy;return n.k=c,n.j=f,c}(e,r):O("ES5").J(e,r);return(r?r.A:w()).p.push(n),n}function M(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[q],o=f(e);if(n){if(!n.P&&(n.i<4||!O("ES5").K(n)))return n.t;n.I=!0,r=T(e,o),n.I=!1}else r=T(e,o);return u(r,(function(e,o){n&&a(n.t,e)===o||l(r,e,t(o))})),3===o?new Set(r):r}(t)}function T(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return d(t)}function X(){function t(t,e){var r=i[t];return r?r.enumerable=e:i[t]=r={configurable:!0,enumerable:e,get:function(){var e=this[q];return Y.get(e,t)},set:function(e){var r=this[q];Y.set(r,t,e)}},r}function e(t){for(var e=t.length-1;e>=0;e--){var o=t[e][q];if(!o.P)switch(o.i){case 5:n(o)&&C(o);break;case 4:r(o)&&C(o)}}}function r(t){for(var e=t.t,r=t.k,n=B(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==q){var u=e[i];if(void 0===u&&!c(e,i))return!0;var f=r[i],a=f&&f[q];if(a?a.t!==u:!p(f,u))return!0}}var l=!!e[q];return n.length!==B(e).length+(l?0:1)}function n(t){var e=t.k;if(e.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(e,e.length-1);return!(!r||r.get)}var i={};P("ES5",{J:function(e,r){var n=Array.isArray(e),o=function(e,r){if(e){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,t(o,!0));return n}var i=G(r);delete i[q];for(var u=B(i),f=0;f<u.length;f++){var c=u[f];i[c]=t(c,e||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,e),i={i:n?5:4,A:r?r.A:w(),P:!1,I:!1,D:{},l:r,t:e,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,q,{value:i,writable:!0}),o},S:function(t,r,i){i?o(r)&&r[q].A===t&&e(t.p):(t.u&&function t(e){if(e&&"object"==typeof e){var r=e[q];if(r){var o=r.t,i=r.k,f=r.D,a=r.i;if(4===a)u(i,(function(e){e!==q&&(void 0!==o[e]||c(o,e)?f[e]||t(i[e]):(f[e]=!0,C(r)))})),u(o,(function(t){void 0!==i[t]||c(i,t)||(f[t]=!1,C(r))}));else if(5===a){if(n(r)&&(C(r),f.length=!0),i.length<o.length)for(var l=i.length;l<o.length;l++)f[l]=!1;else for(var p=o.length;p<i.length;p++)f[p]=!0;for(var s=Math.min(i.length,o.length),y=0;y<s;y++)void 0===f[y]&&t(i[y])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?r(t):n(t)}})}r.d(e,{PH:function(){return st},Lq:function(){return vt}});var z,K,U="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),L="undefined"!=typeof Map,V="undefined"!=typeof Set,W="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,$=U?Symbol.for("immer-nothing"):((z={})["immer-nothing"]=!0,z),J=U?Symbol.for("immer-draftable"):"__$immer_draftable",q=U?Symbol.for("immer-state"):"__$immer_state",H=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),B="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,G=Object.getOwnPropertyDescriptors||function(t){var e={};return B(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},Q={},Y={get:function(t,e){if(e===q)return t;var r=v(t);if(!c(r,e))return function(t,e,r){var n,o=x(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===I(t.t,e)?(N(t),t.o[e]=R(t.A.h,n,t)):n},has:function(t,e){return e in v(t)},ownKeys:function(t){return Reflect.ownKeys(v(t))},set:function(t,e,r){var n=x(v(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=I(v(t),e),i=null==o?void 0:o[q];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(p(r,o)&&(void 0!==r||c(t.t,e)))return!0;N(t),C(t)}return t.o[e]===r&&"number"!=typeof r&&(void 0!==r||e in t.o)||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==I(t.t,e)||e in t.t?(t.D[e]=!1,N(t),C(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=v(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},Z={};u(Y,(function(t,e){Z[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Z.deleteProperty=function(t,e){return Y.deleteProperty.call(this,t[0],e)},Z.set=function(t,e,r){return Y.set.call(this,t[0],e,r,t[0])};var tt=new(function(){function t(t){var e=this;this.g=W,this.F=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var u=r;r=t;var f=e;return function(t){var e=this;void 0===t&&(t=u);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return f.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var c;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var a=A(e),l=R(e,t,void 0),p=!0;try{c=r(l),p=!1}finally{p?j(a):_(a)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return m(a,o),E(t,a)}),(function(t){throw j(a),t})):(m(a,o),E(c,a))}if(!t||"object"!=typeof t){if((c=r(t))===$)return;return void 0===c&&(c=t),e.F&&h(c,!0),c}n(21,t)},this.produceWithPatches=function(t,r){return"function"==typeof t?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))}:[e.produce(t,r,(function(t,e){n=t,o=e})),n,o];var n,o},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=M(t));var e=A(this),r=R(this,t,void 0);return r[q].C=!0,_(e),r},e.finishDraft=function(t,e){var r=(t&&t[q]).A;return m(r,e),E(void 0,r)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!W&&n(20),this.g=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var i=O("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(r+1))}))},t}()),et=tt.produce,rt=(tt.produceWithPatches.bind(tt),tt.setAutoFreeze.bind(tt),tt.setUseProxies.bind(tt),tt.applyPatches.bind(tt),tt.createDraft.bind(tt),tt.finishDraft.bind(tt),et),nt=(r(60985),r(18717)),ot=(r(43292),function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}()),it=function(t,e){for(var r=0,n=e.length,o=t.length;r<n;r++,o++)t[o]=e[r];return t},ut=Object.defineProperty,ft=(Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols),ct=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,lt=function(t,e,r){return e in t?ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},pt=function(t,e){for(var r in e||(e={}))ct.call(e,r)&&lt(t,r,e[r]);if(ft)for(var n=0,o=ft(e);n<o.length;n++){r=o[n];at.call(e,r)&&lt(t,r,e[r])}return t};"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;!function(t){function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=t.apply(this,r)||this;return Object.setPrototypeOf(o,e.prototype),o}ot(e,t),Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.prototype.concat.apply(this,e)},e.prototype.prepend=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 1===t.length&&Array.isArray(t[0])?new(e.bind.apply(e,it([void 0],t[0].concat(this)))):new(e.bind.apply(e,it([void 0],t.concat(this))))}}(Array);function st(t,e){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(e){var o=e.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return pt(pt({type:t,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:t,payload:r[0]}}return r.toString=function(){return""+t},r.type=t,r.match=function(e){return e.type===t},r}function yt(t){var e,r={},n=[],o={addCase:function(t,e){var n="string"===typeof t?t:t.type;if(n in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[n]=e,o},addMatcher:function(t,e){return n.push({matcher:t,reducer:e}),o},addDefaultCase:function(t){return e=t,o}};return t(o),[r,n,e]}function vt(t,e,r,n){void 0===r&&(r=[]);var u="function"===typeof e?yt(e):[e,r,n],f=u[0],c=u[1],a=u[2],l=rt(t,(function(){}));return function(t,e){void 0===t&&(t=l);var r=it([f[e.type]],c.filter((function(t){return(0,t.matcher)(e)})).map((function(t){return t.reducer})));return 0===r.filter((function(t){return!!t})).length&&(r=[a]),r.reduce((function(t,r){if(r){var n;if(o(t))return"undefined"===typeof(n=r(t,e))?t:n;if(i(t))return rt(t,(function(t){return r(t,e)}));if("undefined"===typeof(n=r(t,e))){if(null===t)return t;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return t}),t)}}X()}}]);
//# sourceMappingURL=npm.reduxjs.888450e9.chunk.js.map