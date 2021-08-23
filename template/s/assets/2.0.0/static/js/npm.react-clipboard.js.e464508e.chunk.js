/*! For license information please see npm.react-clipboard.js.e464508e.chunk.js.LICENSE.txt */
(self.webpackChunkchainide=self.webpackChunkchainide||[]).push([[8001],{37819:function(t,e,n){var o;o=function(t,e,n,o){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="./index.js")}({"./index.js":function(t,e,n){"use strict";n.r(e);var o=n("react"),r=n.n(o),i=n("react-dom"),p=n.n(i),u=n("prop-types"),c=n.n(u);function s(t){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(t){function e(){return a(this,e),f(this,y(e).apply(this,arguments))}var o,i,u;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,t),o=e,(i=[{key:"propsWith",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={};return Object.keys(this.props).forEach((function(o){if(-1!==o.search(t)){var r=e?o.replace(t,""):o;n[r]=this.props[o]}}),this),n}},{key:"componentWillUnmount",value:function(){this.clipboard&&this.clipboard.destroy()}},{key:"componentDidMount",value:function(){var t=this.props.options||this.propsWith(/^option-/,!0),e=p.a.findDOMNode(this.element);if(e){var o=n("clipboard");this.clipboard=new o(e,t);var r=this.propsWith(/^on/,!0);Object.keys(r).forEach((function(t){this.clipboard.on(t.toLowerCase(),this.props["on"+t])}),this)}}},{key:"render",value:function(){var t=this,e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){h(t,e,n[e])}))}return t}({title:this.props.title||"",type:this.getType(),className:this.props.className||"",style:this.props.style||{},ref:function(e){return t.element=e},onClick:this.props.onClick},this.propsWith(/^data-/),this.propsWith(/^button-/,!0)),o=n("clipboard");return this.props.isVisibleWhenUnsupported||o.isSupported()?r.a.createElement(this.getComponent(),e,this.props.children):null}},{key:"getType",value:function(){return"button"===this.getComponent()||"input"===this.getComponent()?this.props.type||"button":void 0}},{key:"getComponent",value:function(){return this.props.component||"button"}}])&&l(o.prototype,i),u&&l(o,u),e}(r.a.Component);h(d,"propTypes",{options:function(t,e,n){var o=t[e];return o&&"object"!==s(o)||Array.isArray(o)?new Error("Invalid props '".concat(e,"' supplied to '").concat(n,"'. ")+"'".concat(e,"' is not an object.")):void 0!==t["option-text"]&&"function"!==typeof t["option-text"]?new Error("Invalid props 'option-text' supplied to '".concat(n,"'. ")+"'option-text' is not a function."):void 0},title:c.a.string,type:c.a.string,className:c.a.string,style:c.a.object,component:c.a.any,children:c.a.any}),h(d,"defaultProps",{isVisibleWhenUnsupported:!0,onClick:function(){}}),e.default=d},clipboard:function(e,n){e.exports=t},"prop-types":function(t,n){t.exports=e},react:function(t,e){t.exports=n},"react-dom":function(t,e){t.exports=o}})},t.exports=o(n(57647),n(13980),n(63804),n(27196))}}]);
//# sourceMappingURL=npm.react-clipboard.js.e464508e.chunk.js.map