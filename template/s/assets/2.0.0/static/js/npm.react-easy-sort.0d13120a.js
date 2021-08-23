"use strict";(self.webpackChunkchainide=self.webpackChunkchainide||[]).push([[388],{63759:function(e,t,n){n.d(t,{TR:function(){return h},ZP:function(){return b}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.create;Object.create;var o=n(65184),u=n.n(o),c=n(63804),i=n.n(c),a=function(e,t,n){for(var r=e.x,o=e.y,u=(void 0===n?{}:n).fallbackToClosest,c=void 0!==u&&u,i=1e4,a=-1,s=0;s<t.length;s+=1){var l=t[s];if(r>=l.left&&r<l.right&&o>=l.top&&o<l.bottom)return s;if(c){var v=(l.left+l.right)/2,d=(l.top+l.bottom)/2,f=Math.sqrt(Math.pow(r-v,2)+Math.pow(o-d,2));f<i&&(i=f,a=s)}}return a},s=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},l=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},v=function(e,t){return{x:e.x-t.x,y:e.y-t.y}},d=function(e){e.preventDefault()},f=function(){window.removeEventListener("contextmenu",d)},m=function(e){var t=e.onStart,n=e.onMove,r=e.onEnd,o=e.containerRef,u=e.knobs,c=i().useRef({x:0,y:0}),a=i().useRef(void 0),m=i().useRef(!1),p=i().useRef({onStart:t,onMove:n,onEnd:r}),h=i().useState(!1),b=h[0],y=h[1];i().useEffect((function(){p.current={onStart:t,onMove:n,onEnd:r}}),[t,n,r]);var E=function(){a.current&&window.clearTimeout(a.current)},g=i().useCallback((function(){if(o.current){var e=o.current.getBoundingClientRect();c.current={x:e.left,y:e.top}}}),[o]),w=i().useCallback((function(e){var t=v(e,c.current);p.current.onMove&&p.current.onMove({pointInWindow:e,point:t})}),[]),x=i().useCallback((function(e){if(m.current){m.current=!1;var t=s(e),n=v(t,c.current);p.current.onStart&&p.current.onStart({point:n,pointInWindow:t})}else w(s(e))}),[w]),C=i().useCallback((function(e){e.cancelable?(e.preventDefault(),w(l(e.touches[0]))):(document.removeEventListener("touchmove",C),p.current.onEnd&&p.current.onEnd())}),[w]),L=i().useCallback((function(){m.current=!1,document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",L),p.current.onEnd&&p.current.onEnd()}),[x]),k=i().useCallback((function(){document.removeEventListener("touchmove",C),document.removeEventListener("touchend",k),f(),p.current.onEnd&&p.current.onEnd()}),[C]),R=i().useCallback((function(e){0===e.button&&((null===u||void 0===u?void 0:u.length)&&!u.find((function(t){return t.contains(e.target)}))||(document.addEventListener("mousemove",x),document.addEventListener("mouseup",L),g(),m.current=!0))}),[x,L,g,u]),O=i().useCallback((function(e,t){document.addEventListener("touchmove",C,{capture:!1,passive:!1}),document.addEventListener("touchend",k),window.addEventListener("contextmenu",d,{capture:!0,passive:!1}),p.current.onStart&&p.current.onStart({point:e,pointInWindow:t})}),[k,C]),S=i().useCallback((function(e){if(!(null===u||void 0===u?void 0:u.length)||u.find((function(t){return t.contains(e.target)}))){g();var t=l(e.touches[0]),n=v(t,c.current);a.current=window.setTimeout((function(){return O(n,t)}),120)}}),[O,g,u]),I=i().useCallback((function(){y(!0),document.removeEventListener("touchstart",I)}),[]),M=i().useCallback((function(){E()}),[]);return i().useLayoutEffect((function(){if(b){var e=o.current;return null===e||void 0===e||e.addEventListener("touchstart",S,{capture:!0,passive:!1}),document.addEventListener("touchmove",M,{capture:!1,passive:!1}),document.addEventListener("touchend",M,{capture:!1,passive:!1}),function(){null===e||void 0===e||e.removeEventListener("touchstart",S),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",M),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",k),f(),E()}}return document.addEventListener("touchstart",I),function(){document.removeEventListener("touchstart",I),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",L)}}),[b,I,x,C,M,k,L,o,S]),b?{}:{onMouseDown:R}},p=i().createContext(void 0),h=function(e){var t=e.children,n=i().useContext(p);if(!n)throw new Error("SortableItem must be a child of SortableList");var r=n.registerItem,o=n.removeItem,u=i().useRef(null);return i().useEffect((function(){var e=u.current;return e&&r(e),function(){e&&o(e)}}),[r,o,t]),i().cloneElement(t,{ref:u})},b=function(e){var t=e.children,n=e.allowDrag,o=void 0===n||n,c=e.onSortEnd,s=e.draggedItemClassName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["children","allowDrag","onSortEnd","draggedItemClassName"]),v=i().useRef([]),d=i().useRef([]),f=i().useRef([]),h=i().useRef(null),b=i().useRef(null),y=i().useRef(void 0),E=i().useRef(void 0),g=i().useRef({x:0,y:0});i().useEffect((function(){return function(){b.current&&document.body.removeChild(b.current)}}),[]);var w=function(e){if(b.current){var t=g.current;b.current.style.transform="translate3d("+(e.x-t.x)+"px, "+(e.y-t.y)+"px, 0px)"}},x=i().useCallback((function(e){if(h.current){var t=v.current[e],n=d.current[e],r=t.cloneNode(!0);s&&s.split(" ").forEach((function(e){return r.classList.add(e)})),r.style.width=n.width+"px",r.style.height=n.height+"px",r.style.position="fixed",r.style.margin="0",r.style.top="0",r.style.left="0",document.body.appendChild(r),b.current=r}}),[s]),C=m({containerRef:h,knobs:f.current,onStart:function(e){var t=e.pointInWindow;if(h.current){d.current=v.current.map((function(e){return e.getBoundingClientRect()}));var n=a(t,d.current);if(-1!==n){y.current=n,x(n);var r=v.current[n];r.style.opacity="0",r.style.visibility="hidden";var o=r.getBoundingClientRect();g.current={x:t.x-o.left,y:t.y-o.top},w(t),window.navigator.vibrate&&window.navigator.vibrate(100)}}},onMove:function(e){var t=e.pointInWindow;w(t);var n=y.current;if(void 0!==n){var r=a(t,d.current,{fallbackToClosest:!0});if(-1!==r){E.current=r;for(var o=n<r,u=0;u<v.current.length;u+=1){var c=v.current[u],i=d.current[u];if(o&&u>=n&&u<=r||!o&&u>=r&&u<=n){var s=d.current[o?u-1:u+1];if(s){var l=s.left-i.left,f=s.top-i.top;c.style.transform="translate3d("+l+"px, "+f+"px, 0px)"}}else c.style.transform="translate3d(0,0,0)";c.style.transitionDuration="300ms"}}}},onEnd:function(){for(var e=0;e<v.current.length;e+=1){var t=v.current[e];t.style.transform="",t.style.transitionDuration=""}var n=y.current;if(void 0!==n){var r=v.current[n];r&&(r.style.opacity="1",r.style.visibility="");var o=E.current;void 0!==o&&n!==o&&(v.current=u()(v.current,n,o),c(n,o))}y.current=void 0,E.current=void 0,b.current&&(document.body.removeChild(b.current),b.current=null)}}),L=i().useCallback((function(e){v.current.push(e)}),[]),k=i().useCallback((function(e){var t=v.current.indexOf(e);-1!==t&&v.current.splice(t,1)}),[]),R=i().useCallback((function(e){f.current.push(e)}),[]),O=i().useCallback((function(e){var t=f.current.indexOf(e);-1!==t&&f.current.splice(t,1)}),[]),S=i().useMemo((function(){return{registerItem:L,removeItem:k,registerKnob:R,removeKnob:O}}),[L,k,R,O]);return i().createElement("div",r({},o?C:{},l,{ref:h}),i().createElement(p.Provider,{value:S},t))}}}]);
//# sourceMappingURL=npm.react-easy-sort.0d13120a.js.map