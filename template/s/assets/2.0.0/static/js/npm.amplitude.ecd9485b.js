(self.webpackChunkchainide=self.webpackChunkchainide||[]).push([[1289],{73399:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n(80594)),u=f(n(13980)),a=f(n(63804)),l=f(n(88665)),c=n(8941),s=n(7703);function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return d.call(n),"number"===typeof e.debounceInterval?n.logEvent=(0,o.default)(n._makeLogEvent(),e.debounceInterval):n.logEvent=n._makeLogEvent(),n._renderPropParams={logEvent:n.logEvent,instrument:n.instrument},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.props;"number"===typeof e.debounceInterval?t.debounceInterval!==e.debounceInterval&&(this.logEvent=(0,o.default)(this._makeLogEvent(),e.debounceInterval),this._renderPropParams=r({},this._renderPropParams,{logEvent:this.logEvent})):"number"===typeof t.debounceInterval&&(this.logEvent=this._makeLogEvent(),this._renderPropParams=r({},this._renderPropParams,{logEvent:this.logEvent}))}},{key:"componentDidMount",value:function(){var e=this.props,t=this.getAmplitudeInstance();t&&e.userProperties&&t.setUserProperties(e.userProperties)}},{key:"componentDidUpdate",value:function(e){this.instrument.cache.garbageCollect();var t=this.props,n=this.getAmplitudeInstance();n&&!(0,l.default)(e.userProperties,t.userProperties)&&n.setUserProperties(t.userProperties)}},{key:"getChildContext",value:function(){return{getAmplitudeEventProperties:this.getAmplitudeEventProperties}}},{key:"render",value:function(){var e=this.props;return"function"===typeof e.children?e.children(this._renderPropParams):e.children||null}}]),t}(a.default.Component),d=function(){var e=this;this._makeLogEvent=function(){return function(t,n,i){var o=e.getAmplitudeInstance();o&&o.logEvent(t,r({},e.getAmplitudeEventProperties(),n||{}),i)}},this.instrument=(0,c.memoize)((function(t,n){return function(){var r=n?n.apply(void 0,arguments):void 0;return e.logEvent(t),r}})),this.getAmplitudeInstance=function(){var t=e.context,n=e.props;if(!t.getAmplitudeInstance)return null;var r=t.getAmplitudeInstance(n.instanceName);return(0,s.isValidAmplitudeInstance)(r)?r:(console.error('Failed to get a valid Amplitude instance. This likely means the "amplitudeInstance" prop your provided to the AmplitudeProvider component is not a valid Amplitude instance.'),null)},this.getAmplitudeEventProperties=function(){var t=e.props,n=e.context;if(!n.getAmplitudeEventProperties)return t.eventProperties;var i=n.getAmplitudeEventProperties();return"function"===typeof t.eventProperties?t.eventProperties(i):r({},i,t.eventProperties)}};p.propTypes={children:u.default.oneOfType([u.default.node,u.default.func]),eventProperties:u.default.oneOfType([u.default.object,u.default.func]),debounceInterval:u.default.number,instanceName:u.default.string,userProperties:u.default.object},p.contextTypes={getAmplitudeInstance:u.default.func,getAmplitudeEventProperties:u.default.func},p.childContextTypes={getAmplitudeEventProperties:u.default.func},t.default=p},19889:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=a(n(13980)),o=a(n(63804)),u=n(7703);function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillMount",value:function(){var e=this.props;(0,u.isValidAmplitudeInstance)(e.amplitudeInstance)?(e.apiKey&&e.amplitudeInstance.init(e.apiKey),e.userId&&e.amplitudeInstance.setUserId(e.userId)):console.error('AmplitudeProvider was not provided with a valid "amplitudeInstance" prop.')}},{key:"getChildContext",value:function(){var e=this.context,t=this.props;return{getAmplitudeInstance:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"$default_instance";return t.amplitudeInstance._instanceName===n?t.amplitudeInstance:e.getAmplitudeInstance?e.getAmplitudeInstance(n):null},getAmplitudeEventProperties:function(){return t.eventProperties||{}}}}},{key:"render",value:function(){return this.props.children}}]),t}(o.default.Component);s.propTypes={amplitudeInstance:i.default.object.isRequired,apiKey:i.default.string,userId:i.default.string},s.contextTypes={getAmplitudeInstance:i.default.func},s.childContextTypes={getAmplitudeInstance:i.default.func,getAmplitudeEventProperties:i.default.func},t.default=s},47512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(13980)),o=l(n(63804)),u=l(n(88665)),a=l(n(73399));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){function t(){var e,n,r;c(this,t);for(var i=arguments.length,o=Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r._amplitudeRef=null,r.setRef=function(e){r._amplitudeRef=e},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){var t=this.props;(0,u.default)(e.value,t.value)||this._amplitudeRef&&this._amplitudeRef.logEvent(t.eventType)}},{key:"render",value:function(){var e=this.props;return o.default.createElement(a.default,{ref:this.setRef,debounceInterval:e.debounceInterval,instanceName:e.instanceName,eventProperties:e.eventProperties},e.children)}}]),t}(o.default.Component);f.propTypes={debounceInterval:i.default.number,eventProperties:i.default.oneOfType([i.default.object,i.default.func]),eventType:i.default.string.isRequired,instanceName:i.default.string,value:i.default.any},t.default=f},18113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=a(n(13980)),o=a(n(63804)),u=a(n(73399));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){var e,n,r;l(this,t);for(var i=arguments.length,o=Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r._amplitudeRef=null,r.setRef=function(e){r._amplitudeRef=e},c(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this.props;this._amplitudeRef&&this._amplitudeRef.logEvent(e.eventType)}},{key:"render",value:function(){var e=this.props;return o.default.createElement(u.default,{ref:this.setRef,instanceName:e.instanceName,eventProperties:e.eventProperties},e.children)}}]),t}(o.default.Component);s.propTypes={eventProperties:i.default.oneOfType([i.default.object,i.default.func]),eventType:i.default.string.isRequired,instanceName:i.default.string},t.default=s},43577:function(e,t,n){"use strict";var r=n(73399);var i=n(19889);Object.defineProperty(t,"BF",{enumerable:!0,get:function(){return a(i).default}});var o=n(47512);var u=n(18113);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"p_",{enumerable:!0,get:function(){return a(u).default}})},8941:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.children=new Map,this.value=t,this.referenceCount=0}return n(e,[{key:"set",value:function(t,n){if(!Array.isArray(t))return this.children.set(t,n);if(1===t.length)return this.children.set(t[0],new e(n));var r=this.children.get(t[0]);r||(r=new e,this.children.set(t[0],r)),r.set(t.slice(1),n)}},{key:"get",value:function(e){if(Array.isArray(e)){if(0===e.length)return this.referenceCount+=1,this.value;var t=this.children.get(e[0]);return t?t.get(e.slice(1)):void 0}return this.children.get(e)}},{key:"has",value:function(e){if(Array.isArray(e)){if(0===e.length)return!0;var t=this.children.get(e[0]);return!!t&&t.has(e.slice(1))}return this.children.has(e)}},{key:"delete",value:function(e){if(!Array.isArray(e))return this.children.delete(e);if(0===e.length)return!0;var t=this.children.get(e[0]);return!!t&&(t.delete(e.slice(1))&&this.children.delete(e[0]),0===this.children.size||void 0)}},{key:"traverse",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];0===this.children.size?e(this,t):this.children.forEach((function(n,i){n.traverse(e,[].concat(r(t),[i]))}))}},{key:"garbageCollect",value:function(){var e=this;this.traverse((function(t,n){0===t.referenceCount&&0===t.children.size?e.delete(n):t.referenceCount=0}))}}]),e}();t.memoize=function(e){var t=new i,n=function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];if(!t.has(r)){var o=e.apply(void 0,r);t.set(r,o)}return t.get(r)};return n.cache=t,n}},7703:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isValidAmplitudeInstance=function(e){return Boolean(e)&&"function"===typeof e.init&&"function"===typeof e.logEvent}}}]);
//# sourceMappingURL=npm.amplitude.ecd9485b.js.map