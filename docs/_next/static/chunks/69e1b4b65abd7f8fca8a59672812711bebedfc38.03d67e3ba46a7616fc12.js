(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery;return n||a&&(void 0!==i&&i)}t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))}},"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"2mvg":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=n("q1tI"),s=n.n(c),u=n("vUet"),l=s.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,c=e.fluid,l=e.rounded,f=e.roundedCircle,d=e.thumbnail,p=Object(a.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);n=Object(u.a)(n,"img");var v=o()(c&&n+"-fluid",l&&"rounded",f&&"rounded-circle",d&&n+"-thumbnail");return s.a.createElement("img",Object(r.a)({ref:t},p,{className:o()(i,v)}))}));l.displayName="Image",l.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=l},"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(c(t))||a(e).getPropertyValue(c(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!s.test(e))}(a)?n+=c(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(c(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),i=r(n("Xuae")),o=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=u;var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,s=f.length;c<s;c++){var u=f[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var l=a.props[u],d=r[u]||new Set;d.has(l)?i=!1:(d.add(l),r[u]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var p=i.default();function v(e){var t=e.children;return a.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:s.isInAmpMode(e)},t)}))}))}v.rewind=p.rewind,t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,i=!1;try{var o={get passive(){return a=!0},get once(){return i=a=!0}};r.a&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(u){}var c=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!i){var o=r.once,c=r.capture,s=n;!i&&o&&(s=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=s),e.addEventListener(t,s,a?r:c)}e.addEventListener(t,n,r)};var s=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return c(e,t,n,r),function(){s(e,t,n,r)}}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("wx14"),a=n("zLVn"),i=n("q1tI");n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function s(e,t){return Object.keys(t).reduce((function(n,s){var u,l=n,f=l[o(s)],d=l[s],p=Object(a.a)(l,[o(s),s].map(c)),v=t[s],h=function(e,t,n){var r=Object(i.useRef)(void 0!==e),a=Object(i.useState)(t),o=a[0],c=a[1],s=void 0!==e,u=r.current;return r.current=s,!s&&u&&o!==t&&c(t),[s?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(d,f,e[v]),m=h[0],b=h[1];return Object(r.a)({},p,((u={})[s]=m,u[v]=b,u))}),e)}n("dI71");function u(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function f(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}u.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}))};var r,a=n("pvIh"),i=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},ODXe:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,r=n.propTypes,i=n.defaultProps,o=n.allowFallback,c=void 0!==o&&o,s=n.displayName,u=void 0===s?e.name||e.displayName:s,l=function(t,n){return e(t,n)};return Object.assign(a.default.forwardRef||!c?a.default.forwardRef(l):function(e){return l(e,null)},{displayName:u,propTypes:r,defaultProps:i})};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r}},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,i,o,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,i,o,c],l=0;(s=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},Qg85:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||i()}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),i=n("W8MJ"),o=n("7W2i"),c=n("a1gu"),s=n("Nsbk"),u=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){o(u,c);var s=l(u);function u(e){var i;return r(this,u),i=s.call(this,e),d&&(t.add(a(i)),n(a(i))),i}return i(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),i=n("7W2i"),o=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}var u=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,d=l(n("q1tI")),p=n("QmWs"),v=n("g/15"),h=u(n("nOHt")),m=n("elyg");function b(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var g=new Map,y=window.IntersectionObserver,x={};function w(){return f||(y?f=new y((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var E=function(e){i(n,e);var t=s(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,r=null;return function(a,i){if(r&&a===t&&i===n)return r;var o=e(a,i);return t=a,n=i,r=o,o}}((function(e,t){return{href:(0,m.addBasePath)(b(e)),as:t?(0,m.addBasePath)(b(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=a.formatUrls(a.props.href,a.props.as),o=i.href,c=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var s=window.location.pathname;o=(0,p.resolve)(s,o),c=c?(0,p.resolve)(s,c):o,e.preventDefault();var u=a.props.scroll;null==u&&(u=c.indexOf("#")<0),h.default[a.props.replace?"replace":"push"](o,c,{shallow:a.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,p.resolve)(e,n);return[a,r?(0,p.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),x[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),x[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),o={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=a||r),d.default.cloneElement(i,o)}}]),n}(d.Component);t.default=E},cWnB:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=n("q1tI"),s=n.n(c),u=n("vUet"),l=n("dbZe"),f=s.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.variant,c=e.size,f=e.active,d=e.className,p=e.block,v=e.type,h=e.as,m=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(u.a)(n,"btn"),g=o()(d,b,f&&"active",b+"-"+i,p&&b+"-block",c&&b+"-"+c);if(m.href)return s.a.createElement(l.a,Object(r.a)({},m,{as:h,ref:t,className:o()(g,m.disabled&&"disabled")}));t&&(m.ref=t),h||(m.type=v);var y=h||"button";return s.a.createElement(y,Object(r.a)({},m,{className:g}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=f},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},dbZe:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("q1tI"),o=n.n(i),c=n("Qg85");function s(e){return!e||"#"===e.trim()}var u=o.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,u=e.disabled,l=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(u||s(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return s(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),u&&(f.tabIndex=-1,f["aria-disabled"]=!0),o.a.createElement(i,Object(r.a)({ref:t},f,{onClick:d,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),l)}))}));u.displayName="SafeAnchor",t.a=u},eng3:function(e,t,n){"use strict";n.d(t,"a",(function(){return me}));var r=n("ODXe"),a=(n("8Kt/"),n("wx14")),i=n("zLVn"),o=n("TSYQ"),c=n.n(o),s=n("q1tI"),u=n.n(s),l=n("JCAc"),f=/-(.)/g;var d=n("vUet"),p=function(e){return e[0].toUpperCase()+(t=e,t.replace(f,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var v=u.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,s=Object(i.a)(e,["bsPrefix","className","as"]);n=Object(d.a)(n,"navbar-brand");var l=o||(s.href?"a":"span");return u.a.createElement(l,Object(a.a)({},s,{ref:t,className:c()(r,n)}))}));v.displayName="NavbarBrand";var h=v,m=n("dI71"),b=n("7j6X"),g=n("SJxq"),y=n("GEtZ");g.a&&window;function x(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=Object(y.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}var w=function(e,t,n){null==n&&(n=function(e){var t=Object(b.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var r=x(e,n),a=Object(y.a)(e,"transitionend",t);return function(){r(),a()}},E=(n("17x9"),n("i8i4")),O=n.n(E),j=!1,C=u.a.createContext(null),k="unmounted",N="exited",S="entering",P="entered",_=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a=N,r.appearStatus=S):a=P:a=t.unmountOnExit||t.mountOnEnter?k:N,r.state={status:a},r.nextCallback=null,r}Object(m.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===k?{status:N}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==S&&n!==P&&(t=S):n!==S&&n!==P||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===S?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===N&&this.setState({status:k})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[O.a.findDOMNode(this),r],i=a[0],o=a[1],c=this.getTimeouts(),s=r?c.appear:c.enter;!e&&!n||j?this.safeSetState({status:P},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:S},(function(){t.props.onEntering(i,o),t.onTransitionEnd(s,(function(){t.safeSetState({status:P},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:O.a.findDOMNode(this);t&&!j?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:N},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:N},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:O.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===k)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(i.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return u.a.createElement(C.Provider,{value:null},"function"===typeof n?n(e,r):u.a.cloneElement(u.a.Children.only(n),r))},t}(u.a.Component);function I(){}_.contextType=C,_.propTypes={},_.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:I,onEntering:I,onEntered:I,onExit:I,onExiting:I,onExited:I},_.UNMOUNTED=k,_.EXITED=N,_.ENTERING=S,_.ENTERED=P,_.EXITING="exiting";var D,R=_,T=n("Qg85");var A={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var L=((D={})[N]="collapse",D.exiting="collapsing",D[S]="collapsing",D[P]="collapse show",D),M={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=A[e];return n+parseInt(Object(b.a)(t,r[0]),10)+parseInt(Object(b.a)(t,r[1]),10)}},q=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",e.offsetHeight},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(m.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,r=t.onEntering,o=t.onEntered,s=t.onExit,l=t.onExiting,f=t.className,d=t.children,p=Object(i.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete p.dimension,delete p.getDimensionValue;var v=Object(T.a)(this.handleEnter,n),h=Object(T.a)(this.handleEntering,r),m=Object(T.a)(this.handleEntered,o),b=Object(T.a)(this.handleExit,s),g=Object(T.a)(this.handleExiting,l);return u.a.createElement(R,Object(a.a)({addEndListener:w},p,{"aria-expanded":p.role?p.in:null,onEnter:v,onEntering:h,onEntered:m,onExit:b,onExiting:g}),(function(t,n){return u.a.cloneElement(d,Object(a.a)({},n,{className:c()(f,d.props.className,L[t],"width"===e.getDimension()&&"width")}))}))},t}(u.a.Component);q.defaultProps=M;var K=q,U=u.a.createContext(null),V=u.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,o=Object(i.a)(e,["children","bsPrefix"]);return r=Object(d.a)(r,"navbar-collapse"),u.a.createElement(U.Consumer,null,(function(e){return u.a.createElement(K,Object(a.a)({in:!(!e||!e.expanded)},o),u.a.createElement("div",{ref:t,className:r},n))}))}));V.displayName="NavbarCollapse";var W=V,z=n("ZCiN"),J=u.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,l=e.label,f=e.as,p=void 0===f?"button":f,v=e.onClick,h=Object(i.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(d.a)(n,"navbar-toggler");var m=Object(s.useContext)(U)||{},b=m.onToggle,g=m.expanded,y=Object(z.a)((function(e){v&&v(e),b&&b()}));return"button"===p&&(h.type="button"),u.a.createElement(p,Object(a.a)({},h,{ref:t,onClick:y,"aria-label":l,className:c()(r,n,!g&&"collapsed")}),o||u.a.createElement("span",{className:n+"-icon"}))}));J.displayName="NavbarToggle",J.defaultProps={label:"Toggle navigation"};var B=J,Q=u.a.createContext(),Z=function(e,t){return null!=e?String(e):t||null},F=Q,Y=u.a.forwardRef((function(e,t){var n=Object(l.a)(e,{expanded:"onToggle"}),r=n.bsPrefix,o=n.expand,f=n.variant,p=n.bg,v=n.fixed,h=n.sticky,m=n.className,b=n.children,g=n.as,y=void 0===g?"nav":g,x=n.expanded,w=n.onToggle,E=n.onSelect,O=n.collapseOnSelect,j=Object(i.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);r=Object(d.a)(r,"navbar");var C=Object(s.useCallback)((function(){E&&E.apply(void 0,arguments),O&&x&&w(!1)}),[E,O,x,w]);void 0===j.role&&"nav"!==y&&(j.role="navigation");var k=r+"-expand";"string"===typeof o&&(k=k+"-"+o);var N=Object(s.useMemo)((function(){return{onToggle:function(){return w(!x)},bsPrefix:r,expanded:x}}),[r,x,w]);return u.a.createElement(U.Provider,{value:N},u.a.createElement(F.Provider,{value:C},u.a.createElement(y,Object(a.a)({ref:t},j,{className:c()(m,r,o&&k,f&&r+"-"+f,p&&"bg-"+p,h&&"sticky-"+h,v&&"fixed-"+v)}),b)))}));Y.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},Y.displayName="Navbar",Y.Brand=h,Y.Toggle=B,Y.Collapse=W,Y.Text=function(e,t){var n=void 0===t?{}:t,r=n.displayName,o=void 0===r?p(e):r,s=n.Component,l=void 0===s?"div":s,f=n.defaultProps,v=u.a.forwardRef((function(t,n){var r=t.className,o=t.bsPrefix,s=t.as,f=void 0===s?l:s,p=Object(i.a)(t,["className","bsPrefix","as"]),v=Object(d.a)(o,e);return u.a.createElement(f,Object(a.a)({ref:n,className:c()(r,v)},p))}));return v.defaultProps=f,v.displayName=o,v}("navbar-text",{Component:"span"});var H=Y,X=(n("K9S6"),u.a.createContext(null)),G=n("Zeqi"),$=n("YGJp"),ee=n("lcWJ"),te=u.a.createContext(null),ne=u.a.createContext(null),re=function(){},ae=u.a.forwardRef((function(e,t){var n,r,o=e.as,c=void 0===o?"ul":o,l=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=Object(i.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),h=Object($.a)(),m=Object(s.useRef)(!1),b=Object(s.useContext)(F),g=Object(s.useContext)(ne);g&&(d=d||"tablist",f=g.activeKey,n=g.getControlledId,r=g.getControllerId);var y=Object(s.useRef)(null),x=function(e){if(!y.current)return null;var t=Object(G.a)(y.current,"[data-rb-event-key]:not(.disabled)"),n=y.current.querySelector(".active"),r=t.indexOf(n);if(-1===r)return null;var a=r+e;return a>=t.length&&(a=0),a<0&&(a=t.length-1),t[a]},w=function(e,t){null!=e&&(l&&l(e,t),b&&b(e,t))};Object(s.useEffect)((function(){if(y.current&&m.current){var e=y.current.querySelector("[data-rb-event-key].active");e&&e.focus()}m.current=!1}));var E=Object(ee.a)(t,y);return u.a.createElement(F.Provider,{value:w},u.a.createElement(te.Provider,{value:{role:d,activeKey:Z(f),getControlledId:n||re,getControllerId:r||re}},u.a.createElement(c,Object(a.a)({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=x(-1);break;case"ArrowRight":case"ArrowDown":t=x(1);break;default:return}t&&(e.preventDefault(),w(t.dataset.rbEventKey,e),m.current=!0,h())},ref:E,role:d}))))})),ie=u.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,s=e.as,l=void 0===s?"div":s,f=Object(i.a)(e,["bsPrefix","className","children","as"]);return n=Object(d.a)(n,"nav-item"),u.a.createElement(l,Object(a.a)({},f,{ref:t,className:c()(r,n)}),o)}));ie.displayName="NavItem";var oe=ie,ce=n("dbZe"),se=(n("2W6z"),u.a.forwardRef((function(e,t){var n=e.active,r=e.className,o=e.tabIndex,l=e.eventKey,f=e.onSelect,d=e.onClick,p=e.as,v=Object(i.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),h=Z(l,v.href),m=Object(s.useContext)(F),b=Object(s.useContext)(te),g=n;if(b){v.role||"tablist"!==b.role||(v.role="tab");var y=b.getControllerId(h),x=b.getControlledId(h);v["data-rb-event-key"]=h,v.id=y||v.id,v["aria-controls"]=x||v["aria-controls"],g=null==n&&null!=h?b.activeKey===h:n}"tab"===v.role&&(v.tabIndex=g?o:-1,v["aria-selected"]=g);var w=Object(z.a)((function(e){d&&d(e),null!=h&&(f&&f(h,e),m&&m(h,e))}));return u.a.createElement(p,Object(a.a)({},v,{ref:t,onClick:w,className:c()(r,g&&"active")}))})));se.defaultProps={disabled:!1};var ue=se,le={disabled:!1,as:ce.a},fe=u.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,o=e.className,s=e.href,l=e.eventKey,f=e.onSelect,p=e.as,v=Object(i.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(d.a)(n,"nav-link"),u.a.createElement(ue,Object(a.a)({},v,{href:s,ref:t,eventKey:l,as:p,disabled:r,onSelect:f,className:c()(o,n,r&&"disabled")}))}));fe.displayName="NavLink",fe.defaultProps=le;var de=fe,pe=u.a.forwardRef((function(e,t){var n,r,o,f=Object(l.a)(e,{activeKey:"onSelect"}),p=f.as,v=void 0===p?"div":p,h=f.bsPrefix,m=f.variant,b=f.fill,g=f.justify,y=f.navbar,x=f.className,w=f.children,E=f.activeKey,O=Object(i.a)(f,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);h=Object(d.a)(h,"nav");var j=Object(s.useContext)(U),C=Object(s.useContext)(X);return j?(r=j.bsPrefix,y=null==y||y):C&&(o=C.cardHeaderBsPrefix),u.a.createElement(ae,Object(a.a)({as:v,ref:t,activeKey:E,className:c()(x,(n={},n[h]=!y,n[r+"-nav"]=y,n[o+"-"+m]=!!o,n[h+"-"+m]=!!m,n[h+"-fill"]=b,n[h+"-justified"]=g,n))},O),w)}));pe.displayName="Nav",pe.defaultProps={justify:!1,fill:!1},pe.Item=oe,pe.Link=de;var ve=pe,he=(n("nOHt"),u.a.createElement);function me(){var e=u.a.useState(!1),t=Object(r.a)(e,2);t[0],t[1];return he(u.a.Fragment,null,he("style",{type:"text/css"},"\n            .navbar-brand {\n                font-size: 1.25vw;\n                font-weight: bold;\n                /*padding-right: .45vw;\n                padding-left: .45vw; */   \n                padding-right: 0.3vw!important;\n                padding-left: 0.3vw!important;  \n                margin-right:1vw;\n            }\n            .navbar-nav{\n                font-size: 1.05vw;\n                background-color: transparent;\n                color: #ffffff;\n            }\n            .navbar{\n                margin-left:10%;\n                height:100%;\n                margin-right:5rem;\n                white-space: nowrap;\n                width: 80%;\n                background-color: #2d3135!important;\n                padding: 0px;\n            }\n            .navcontainer{\n                width:100%;\n                height:3.25vw;\n                background-color: #2d3135!important;\n            }\n            .twitter{\n                /*margin-left: 1rem*/;\n                opacity: 50%;\n            }\n            .mr-auto{\n                padding: 0px;\n            }\n            .nav-link{\n                padding: 0vw;\n                padding-right: 0.45vw!important;\n                padding-left: 0.45vw!important;\n            }\n            .twitterimg{\n                width:1.82vw;\n                height:1.82vw;\n            }\n            .donate{\n                padding-left: 53.6vw!important;\n                padding-right: 0!important;\n            }\n            @media (max-aspect-ratio: 1/1) {\n                .navcontainer {\n                    height:6.5vw;\n                }\n                .navbar-brand {\n                    font-size: 2.5vw;\n                }\n                .navbar-nav {\n                    font-size: 2.10vw;\n                    padding-top:0.25vw;\n                }\n                .donate{\n                    padding-left: 30.75vw!important;\n                    padding-right: 0!important;\n                }    \n                .twitterimg{\n                    width:3.64vw;\n                    height:3.64vw;\n                }    \n            }\n            "),he("div",{class:"navcontainer"},he(H,{bg:"dark",variant:"dark"},he(H.Brand,{href:"/"},"Bobbie"),he(ve,{className:"mr-auto"},he(ve.Link,{href:"/notes"},"Notes"),he(ve.Link,{href:"/walls"},"Walls"),he(ve.Link,{href:"https://bobbie.dev/"},"PC Models"),he(ve.Link,{href:"https://ko-fi.com/bobbievr",className:"donate"},"Donate")),he(ve,null,he(H.Brand,{className:"twitter",href:"https://twitter.com/VRBobbie"},he("img",{src:"/twitterlogo.png",className:"d-inline-block align-top twitterimg",alt:"Twitter Link"}))))))}},lcWJ:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},pJDg:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=n("q1tI"),s=n.n(c),u=n("vUet"),l=s.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.size,c=e.toggle,l=e.vertical,f=e.className,d=e.as,p=void 0===d?"div":d,v=Object(a.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),h=Object(u.a)(n,"btn-group"),m=h;return l&&(m=h+"-vertical"),s.a.createElement(p,Object(r.a)({},v,{ref:t,className:o()(f,m,i&&h+"-"+i,c&&h+"-toggle")}))}));l.displayName="ButtonGroup",l.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=l},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,i,o){var c=a||"<<anonymous>>",s=o||r;if(null==n[r])return t?new Error("Required "+i+" `"+s+"` was not specified in `"+c+"`."):null;for(var u=arguments.length,l=Array(u>6?u-6:0),f=6;f<u;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,c,i,s].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("wx14"),n("QA0p");var r=n("q1tI"),a=n.n(r),i=a.a.createContext({});i.Consumer,i.Provider;function o(e,t){var n=Object(r.useContext)(i);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);