"use strict";(self.webpackChunkchainide=self.webpackChunkchainide||[]).push([[2106],{75978:function(e,n,t){t.d(n,{Z:function(){return L}});var r=t(63804),o=t.n(r),i=function(e){var n=e.prototype;if(!n||!n.isReactComponent)throw new Error("Can only polyfill class components");return"function"!==typeof n.componentWillReceiveProps?e:o().Profiler?(n.UNSAFE_componentWillReceiveProps=n.componentWillReceiveProps,delete n.componentWillReceiveProps,e):e};function a(e){var n=[];return o().Children.forEach(e,(function(e){n.push(e)})),n}function s(e,n){var t=null;return e&&e.forEach((function(e){t||e&&e.key===n&&(t=e)})),t}function p(e,n,t){var r=null;return e&&e.forEach((function(e){if(e&&e.key===n&&e.props[t]){if(r)throw new Error("two child with same key for <rc-animate> children");r=e}})),r}var c=t(27196),l=t.n(c),u=t(18965),f={isAppearSupported:function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},isEnterSupported:function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},isLeaveSupported:function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},allowAppearCallback:function(e){return e.transitionAppear||e.animation.appear},allowEnterCallback:function(e){return e.transitionEnter||e.animation.enter},allowLeaveCallback:function(e){return e.transitionLeave||e.animation.leave}},h=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function y(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}var m={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},d=function(e){function n(){return v(this,n),y(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),h(n,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(e){f.isEnterSupported(this.props)?this.transition("enter",e):e()}},{key:"componentWillAppear",value:function(e){f.isAppearSupported(this.props)?this.transition("appear",e):e()}},{key:"componentWillLeave",value:function(e){f.isLeaveSupported(this.props)?this.transition("leave",e):e()}},{key:"transition",value:function(e,n){var t=this,r=l().findDOMNode(this),o=this.props,i=o.transitionName,a="object"===typeof i;this.stop();var s=function(){t.stopper=null,n()};if((u.w||!o.animation[e])&&i&&o[m[e]]){var p=a?i[e]:i+"-"+e,c=p+"-active";a&&i[e+"Active"]&&(c=i[e+"Active"]),this.stopper=(0,u.Z)(r,{name:p,active:c},s)}else this.stopper=o.animation[e](r,s)}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop())}},{key:"render",value:function(){return this.props.children}}]),n}(o().Component),k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},E=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var b="rc_animate_"+Date.now();function w(e){var n=e.children;return o().isValidElement(n)&&!n.key?o().cloneElement(n,{key:b}):n}function A(){}var g=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return P.call(t),t.currentlyAnimatingKeys={},t.keysToEnter=[],t.keysToLeave=[],t.state={children:a(w(e))},t.childrenRefs={},t}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),E(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props.showProp,t=this.state.children;n&&(t=t.filter((function(e){return!!e.props[n]}))),t.forEach((function(n){n&&e.performAppear(n.key)}))}},{key:"componentWillReceiveProps",value:function(e){var n=this;this.nextProps=e;var t=a(w(e)),r=this.props;r.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach((function(e){n.stop(e)}));var i=r.showProp,c=this.currentlyAnimatingKeys,l=r.exclusive?a(w(r)):this.state.children,u=[];i?(l.forEach((function(e){var n,r,a,p=e&&s(t,e.key),c=void 0;(c=p&&p.props[i]||!e.props[i]?p:o().cloneElement(p||e,(a=!0,(r=i)in(n={})?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n)))&&u.push(c)})),t.forEach((function(e){e&&s(l,e.key)||u.push(e)}))):u=function(e,n){var t=[],r={},o=[];return e.forEach((function(e){e&&s(n,e.key)?o.length&&(r[e.key]=o,o=[]):o.push(e)})),n.forEach((function(e){e&&Object.prototype.hasOwnProperty.call(r,e.key)&&(t=t.concat(r[e.key])),t.push(e)})),t=t.concat(o)}(l,t),this.setState({children:u}),t.forEach((function(e){var t=e&&e.key;if(!e||!c[t]){var r=e&&s(l,t);if(i){var o=e.props[i];if(r)!p(l,t,i)&&o&&n.keysToEnter.push(t);else o&&n.keysToEnter.push(t)}else r||n.keysToEnter.push(t)}})),l.forEach((function(e){var r=e&&e.key;if(!e||!c[r]){var o=e&&s(t,r);if(i){var a=e.props[i];if(o)!p(t,r,i)&&a&&n.keysToLeave.push(r);else a&&n.keysToLeave.push(r)}else o||n.keysToLeave.push(r)}}))}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var n=this.keysToLeave;this.keysToLeave=[],n.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(e,n){var t=this.props.showProp;return t?p(e,n,t):s(e,n)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var n=this.childrenRefs[e];n&&n.stop()}},{key:"render",value:function(){var e=this,n=this.props;this.nextProps=n;var t=this.state.children,r=null;t&&(r=t.map((function(t){if(null===t||void 0===t)return t;if(!t.key)throw new Error("must set key for <rc-animate> children");return o().createElement(d,{key:t.key,ref:function(n){e.childrenRefs[t.key]=n},animation:n.animation,transitionName:n.transitionName,transitionEnter:n.transitionEnter,transitionAppear:n.transitionAppear,transitionLeave:n.transitionLeave},t)})));var i=n.component;if(i){var a=n;return"string"===typeof i&&(a=k({className:n.className,style:n.style},n.componentProps)),o().createElement(i,a,r)}return r[0]||null}}]),n}(o().Component);g.isAnimate=!0,g.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:A,onEnter:A,onLeave:A,onAppear:A};var P=function(){var e=this;this.performEnter=function(n){e.childrenRefs[n]&&(e.currentlyAnimatingKeys[n]=!0,e.childrenRefs[n].componentWillEnter(e.handleDoneAdding.bind(e,n,"enter")))},this.performAppear=function(n){e.childrenRefs[n]&&(e.currentlyAnimatingKeys[n]=!0,e.childrenRefs[n].componentWillAppear(e.handleDoneAdding.bind(e,n,"appear")))},this.handleDoneAdding=function(n,t){var r=e.props;if(delete e.currentlyAnimatingKeys[n],!r.exclusive||r===e.nextProps){var o=a(w(r));e.isValidChildByKey(o,n)?"appear"===t?f.allowAppearCallback(r)&&(r.onAppear(n),r.onEnd(n,!0)):f.allowEnterCallback(r)&&(r.onEnter(n),r.onEnd(n,!0)):e.performLeave(n)}},this.performLeave=function(n){e.childrenRefs[n]&&(e.currentlyAnimatingKeys[n]=!0,e.childrenRefs[n].componentWillLeave(e.handleDoneLeaving.bind(e,n)))},this.handleDoneLeaving=function(n){var t=e.props;if(delete e.currentlyAnimatingKeys[n],!t.exclusive||t===e.nextProps){var r=a(w(t));if(e.isValidChildByKey(r,n))e.performEnter(n);else{var o=function(){f.allowLeaveCallback(t)&&(t.onLeave(n),t.onEnd(n,!1))};!function(e,n,t){var r=e.length===n.length;return r&&e.forEach((function(e,o){var i=n[o];e&&i&&(e&&!i||!e&&i||e.key!==i.key||t&&e.props[t]!==i.props[t])&&(r=!1)})),r}(e.state.children,r,t.showProp)?e.setState({children:r},o):o()}}}},L=i(g)}}]);
//# sourceMappingURL=npm.rc-animate.b025381e.chunk.js.map