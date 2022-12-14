var Xy=Object.defineProperty;var Jy=(t,e,n)=>e in t?Xy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var le=(t,e,n)=>(Jy(t,typeof e!="symbol"?e+"":e,n),n);function Zy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function e0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.element"),t0=Symbol.for("react.portal"),n0=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),i0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),l0=Symbol.for("react.forward_ref"),a0=Symbol.for("react.suspense"),u0=Symbol.for("react.memo"),c0=Symbol.for("react.lazy"),mh=Symbol.iterator;function d0(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var Qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yp=Object.assign,Xp={};function Yr(t,e,n){this.props=t,this.context=e,this.refs=Xp,this.updater=n||Qp}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jp(){}Jp.prototype=Yr.prototype;function wc(t,e,n){this.props=t,this.context=e,this.refs=Xp,this.updater=n||Qp}var Ec=wc.prototype=new Jp;Ec.constructor=wc;Yp(Ec,Yr.prototype);Ec.isPureReactComponent=!0;var gh=Array.isArray,Zp=Object.prototype.hasOwnProperty,Sc={current:null},em={key:!0,ref:!0,__self:!0,__source:!0};function tm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zp.call(e,r)&&!em.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Is,type:t,key:s,ref:o,props:i,_owner:Sc.current}}function h0(t,e){return{$$typeof:Is,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ic(t){return typeof t=="object"&&t!==null&&t.$$typeof===Is}function f0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _h=/\/+/g;function aa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f0(""+t.key):e.toString(36)}function fo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Is:case t0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+aa(o,0):r,gh(i)?(n="",t!=null&&(n=t.replace(_h,"$&/")+"/"),fo(i,e,n,"",function(u){return u})):i!=null&&(Ic(i)&&(i=h0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_h,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",gh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+aa(s,l);o+=fo(s,e,n,a,i)}else if(a=d0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+aa(s,l++),o+=fo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $s(t,e,n){if(t==null)return t;var r=[],i=0;return fo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function p0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},po={transition:null},m0={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:po,ReactCurrentOwner:Sc};z.Children={map:$s,forEach:function(t,e,n){$s(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $s(t,function(){e++}),e},toArray:function(t){return $s(t,function(e){return e})||[]},only:function(t){if(!Ic(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=Yr;z.Fragment=n0;z.Profiler=i0;z.PureComponent=wc;z.StrictMode=r0;z.Suspense=a0;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Zp.call(e,a)&&!em.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Is,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:o0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s0,_context:t},t.Consumer=t};z.createElement=tm;z.createFactory=function(t){var e=tm.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:l0,render:t}};z.isValidElement=Ic;z.lazy=function(t){return{$$typeof:c0,_payload:{_status:-1,_result:t},_init:p0}};z.memo=function(t,e){return{$$typeof:u0,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=po.transition;po.transition={};try{t()}finally{po.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return Oe.current.useCallback(t,e)};z.useContext=function(t){return Oe.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};z.useEffect=function(t,e){return Oe.current.useEffect(t,e)};z.useId=function(){return Oe.current.useId()};z.useImperativeHandle=function(t,e,n){return Oe.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Oe.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Oe.current.useReducer(t,e,n)};z.useRef=function(t){return Oe.current.useRef(t)};z.useState=function(t){return Oe.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Oe.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Oe.current.useTransition()};z.version="18.2.0";(function(t){t.exports=z})(S);const Cc=e0(S.exports),eu=Zy({__proto__:null,default:Cc},[S.exports]);var tu={},nm={exports:{}},Ke={},rm={exports:{}},im={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,D){var b=T.length;T.push(D);e:for(;0<b;){var ie=b-1>>>1,pe=T[ie];if(0<i(pe,D))T[ie]=D,T[b]=pe,b=ie;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],b=T.pop();if(b!==D){T[0]=b;e:for(var ie=0,pe=T.length,Hs=pe>>>1;ie<Hs;){var Tn=2*(ie+1)-1,la=T[Tn],Nn=Tn+1,Vs=T[Nn];if(0>i(la,b))Nn<pe&&0>i(Vs,la)?(T[ie]=Vs,T[Nn]=b,ie=Nn):(T[ie]=la,T[Tn]=b,ie=Tn);else if(Nn<pe&&0>i(Vs,b))T[ie]=Vs,T[Nn]=b,ie=Nn;else break e}}return D}function i(T,D){var b=T.sortIndex-D.sortIndex;return b!==0?b:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,p=!1,_=!1,y=!1,A=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function w(T){if(y=!1,g(T),!_)if(n(a)!==null)_=!0,sa(C);else{var D=n(u);D!==null&&oa(w,D.startTime-T)}}function C(T,D){_=!1,y&&(y=!1,m(R),R=-1),p=!0;var b=h;try{for(g(D),d=n(a);d!==null&&(!(d.expirationTime>D)||T&&!rt());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var pe=ie(d.expirationTime<=D);D=t.unstable_now(),typeof pe=="function"?d.callback=pe:d===n(a)&&r(a),g(D)}else r(a);d=n(a)}if(d!==null)var Hs=!0;else{var Tn=n(u);Tn!==null&&oa(w,Tn.startTime-D),Hs=!1}return Hs}finally{d=null,h=b,p=!1}}var N=!1,x=null,R=-1,q=5,M=-1;function rt(){return!(t.unstable_now()-M<q)}function ui(){if(x!==null){var T=t.unstable_now();M=T;var D=!0;try{D=x(!0,T)}finally{D?ci():(N=!1,x=null)}}else N=!1}var ci;if(typeof f=="function")ci=function(){f(ui)};else if(typeof MessageChannel<"u"){var ph=new MessageChannel,Yy=ph.port2;ph.port1.onmessage=ui,ci=function(){Yy.postMessage(null)}}else ci=function(){A(ui,0)};function sa(T){x=T,N||(N=!0,ci())}function oa(T,D){R=A(function(){T(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,sa(C))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var b=h;h=D;try{return T()}finally{h=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var b=h;h=T;try{return D()}finally{h=b}},t.unstable_scheduleCallback=function(T,D,b){var ie=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ie+b:ie):b=ie,T){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=b+pe,T={id:c++,callback:D,priorityLevel:T,startTime:b,expirationTime:pe,sortIndex:-1},b>ie?(T.sortIndex=b,e(u,T),n(a)===null&&T===n(u)&&(y?(m(R),R=-1):y=!0,oa(w,b-ie))):(T.sortIndex=pe,e(a,T),_||p||(_=!0,sa(C))),T},t.unstable_shouldYield=rt,t.unstable_wrapCallback=function(T){var D=h;return function(){var b=h;h=D;try{return T.apply(this,arguments)}finally{h=b}}}})(im);(function(t){t.exports=im})(rm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm=S.exports,Ge=rm.exports;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var om=new Set,$i={};function rr(t,e){Ur(t,e),Ur(t+"Capture",e)}function Ur(t,e){for($i[t]=e,t=0;t<e.length;t++)om.add(e[t])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=Object.prototype.hasOwnProperty,g0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vh={},yh={};function _0(t){return nu.call(yh,t)?!0:nu.call(vh,t)?!1:g0.test(t)?yh[t]=!0:(vh[t]=!0,!1)}function v0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function y0(t,e,n,r){if(e===null||typeof e>"u"||v0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Se[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Se[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Se[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Se[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Se[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Se[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Se[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Se[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Se[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var kc=/[\-:]([a-z])/g;function Tc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kc,Tc);Se[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kc,Tc);Se[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kc,Tc);Se[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Se[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});Se.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Se[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nc(t,e,n,r){var i=Se.hasOwnProperty(e)?Se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(y0(e,n,i,r)&&(n=null),r||i===null?_0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jt=sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gs=Symbol.for("react.element"),fr=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),lm=Symbol.for("react.provider"),am=Symbol.for("react.context"),Rc=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),su=Symbol.for("react.suspense_list"),Ac=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),um=Symbol.for("react.offscreen"),wh=Symbol.iterator;function di(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,ua;function Ci(t){if(ua===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ua=e&&e[1]||""}return`
`+ua+t}var ca=!1;function da(t,e){if(!t||ca)return"";ca=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ca=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ci(t):""}function w0(t){switch(t.tag){case 5:return Ci(t.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return t=da(t.type,!1),t;case 11:return t=da(t.type.render,!1),t;case 1:return t=da(t.type,!0),t;default:return""}}function ou(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pr:return"Fragment";case fr:return"Portal";case ru:return"Profiler";case xc:return"StrictMode";case iu:return"Suspense";case su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case am:return(t.displayName||"Context")+".Consumer";case lm:return(t._context.displayName||"Context")+".Provider";case Rc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ac:return e=t.displayName||null,e!==null?e:ou(t.type)||"Memo";case Kt:e=t._payload,t=t._init;try{return ou(t(e))}catch{}}return null}function E0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ou(e);case 8:return e===xc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S0(t){var e=cm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ks(t){t._valueTracker||(t._valueTracker=S0(t))}function dm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ro(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lu(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Eh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hm(t,e){e=e.checked,e!=null&&Nc(t,"checked",e,!1)}function au(t,e){hm(t,e);var n=vn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&uu(t,e.type,vn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uu(t,e,n){(e!=="number"||Ro(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ki=Array.isArray;function Nr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ih(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ki(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vn(n)}}function fm(t,e){var n=vn(e.value),r=vn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function du(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qs,mm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qs=qs||document.createElement("div"),qs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I0=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(t){I0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ai[e]=Ai[t]})});function gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ai.hasOwnProperty(t)&&Ai[t]?(""+e).trim():e+"px"}function _m(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var C0=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(t,e){if(e){if(C0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function fu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pu=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mu=null,xr=null,Rr=null;function kh(t){if(t=Ts(t)){if(typeof mu!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Nl(e),mu(t.stateNode,t.type,e))}}function vm(t){xr?Rr?Rr.push(t):Rr=[t]:xr=t}function ym(){if(xr){var t=xr,e=Rr;if(Rr=xr=null,kh(t),e)for(t=0;t<e.length;t++)kh(e[t])}}function wm(t,e){return t(e)}function Em(){}var ha=!1;function Sm(t,e,n){if(ha)return t(e,n);ha=!0;try{return wm(t,e,n)}finally{ha=!1,(xr!==null||Rr!==null)&&(Em(),ym())}}function Ki(t,e){var n=t.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var gu=!1;if(Mt)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){gu=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{gu=!1}function k0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Pi=!1,Ao=null,Po=!1,_u=null,T0={onError:function(t){Pi=!0,Ao=t}};function N0(t,e,n,r,i,s,o,l,a){Pi=!1,Ao=null,k0.apply(T0,arguments)}function x0(t,e,n,r,i,s,o,l,a){if(N0.apply(this,arguments),Pi){if(Pi){var u=Ao;Pi=!1,Ao=null}else throw Error(E(198));Po||(Po=!0,_u=u)}}function ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Im(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Th(t){if(ir(t)!==t)throw Error(E(188))}function R0(t){var e=t.alternate;if(!e){if(e=ir(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Th(i),t;if(s===r)return Th(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Cm(t){return t=R0(t),t!==null?km(t):null}function km(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=km(t);if(e!==null)return e;t=t.sibling}return null}var Tm=Ge.unstable_scheduleCallback,Nh=Ge.unstable_cancelCallback,A0=Ge.unstable_shouldYield,P0=Ge.unstable_requestPaint,se=Ge.unstable_now,O0=Ge.unstable_getCurrentPriorityLevel,Oc=Ge.unstable_ImmediatePriority,Nm=Ge.unstable_UserBlockingPriority,Oo=Ge.unstable_NormalPriority,D0=Ge.unstable_LowPriority,xm=Ge.unstable_IdlePriority,Il=null,wt=null;function b0(t){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Il,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:F0,L0=Math.log,M0=Math.LN2;function F0(t){return t>>>=0,t===0?32:31-(L0(t)/M0|0)|0}var Qs=64,Ys=4194304;function Ti(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Do(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ti(l):(s&=o,s!==0&&(r=Ti(s)))}else o=n&~i,o!==0?r=Ti(o):s!==0&&(r=Ti(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function U0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=U0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function vu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rm(){var t=Qs;return Qs<<=1,(Qs&4194240)===0&&(Qs=64),t}function fa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Cs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function B0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Dc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var H=0;function Am(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Pm,bc,Om,Dm,bm,yu=!1,Xs=[],sn=null,on=null,ln=null,qi=new Map,Qi=new Map,Qt=[],W0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(t,e){switch(t){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":qi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(e.pointerId)}}function fi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ts(e),e!==null&&bc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function j0(t,e,n,r,i){switch(e){case"focusin":return sn=fi(sn,t,e,n,r,i),!0;case"dragenter":return on=fi(on,t,e,n,r,i),!0;case"mouseover":return ln=fi(ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qi.set(s,fi(qi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qi.set(s,fi(Qi.get(s)||null,t,e,n,r,i)),!0}return!1}function Lm(t){var e=Dn(t.target);if(e!==null){var n=ir(e);if(n!==null){if(e=n.tag,e===13){if(e=Im(n),e!==null){t.blockedOn=e,bm(t.priority,function(){Om(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pu=r,n.target.dispatchEvent(r),pu=null}else return e=Ts(n),e!==null&&bc(e),t.blockedOn=n,!1;e.shift()}return!0}function Rh(t,e,n){mo(t)&&n.delete(e)}function H0(){yu=!1,sn!==null&&mo(sn)&&(sn=null),on!==null&&mo(on)&&(on=null),ln!==null&&mo(ln)&&(ln=null),qi.forEach(Rh),Qi.forEach(Rh)}function pi(t,e){t.blockedOn===e&&(t.blockedOn=null,yu||(yu=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,H0)))}function Yi(t){function e(i){return pi(i,t)}if(0<Xs.length){pi(Xs[0],t);for(var n=1;n<Xs.length;n++){var r=Xs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sn!==null&&pi(sn,t),on!==null&&pi(on,t),ln!==null&&pi(ln,t),qi.forEach(e),Qi.forEach(e),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)Lm(n),n.blockedOn===null&&Qt.shift()}var Ar=jt.ReactCurrentBatchConfig,bo=!0;function V0(t,e,n,r){var i=H,s=Ar.transition;Ar.transition=null;try{H=1,Lc(t,e,n,r)}finally{H=i,Ar.transition=s}}function $0(t,e,n,r){var i=H,s=Ar.transition;Ar.transition=null;try{H=4,Lc(t,e,n,r)}finally{H=i,Ar.transition=s}}function Lc(t,e,n,r){if(bo){var i=wu(t,e,n,r);if(i===null)Ia(t,e,r,Lo,n),xh(t,r);else if(j0(i,t,e,n,r))r.stopPropagation();else if(xh(t,r),e&4&&-1<W0.indexOf(t)){for(;i!==null;){var s=Ts(i);if(s!==null&&Pm(s),s=wu(t,e,n,r),s===null&&Ia(t,e,r,Lo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ia(t,e,r,null,n)}}var Lo=null;function wu(t,e,n,r){if(Lo=null,t=Pc(r),t=Dn(t),t!==null)if(e=ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Im(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lo=t,null}function Mm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O0()){case Oc:return 1;case Nm:return 4;case Oo:case D0:return 16;case xm:return 536870912;default:return 16}default:return 16}}var tn=null,Mc=null,go=null;function Fm(){if(go)return go;var t,e=Mc,n=e.length,r,i="value"in tn?tn.value:tn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return go=i.slice(t,1<r?1-r:void 0)}function _o(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Js(){return!0}function Ah(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Js:Ah,this.isPropagationStopped=Ah,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),e}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=qe(Xr),ks=te({},Xr,{view:0,detail:0}),G0=qe(ks),pa,ma,mi,Cl=te({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mi&&(mi&&t.type==="mousemove"?(pa=t.screenX-mi.screenX,ma=t.screenY-mi.screenY):ma=pa=0,mi=t),pa)},movementY:function(t){return"movementY"in t?t.movementY:ma}}),Ph=qe(Cl),K0=te({},Cl,{dataTransfer:0}),q0=qe(K0),Q0=te({},ks,{relatedTarget:0}),ga=qe(Q0),Y0=te({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=qe(Y0),J0=te({},Xr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z0=qe(J0),ew=te({},Xr,{data:0}),Oh=qe(ew),tw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rw[t])?!!e[t]:!1}function Uc(){return iw}var sw=te({},ks,{key:function(t){if(t.key){var e=tw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(t){return t.type==="keypress"?_o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ow=qe(sw),lw=te({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=qe(lw),aw=te({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),uw=qe(aw),cw=te({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),dw=qe(cw),hw=te({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fw=qe(hw),pw=[9,13,27,32],zc=Mt&&"CompositionEvent"in window,Oi=null;Mt&&"documentMode"in document&&(Oi=document.documentMode);var mw=Mt&&"TextEvent"in window&&!Oi,Um=Mt&&(!zc||Oi&&8<Oi&&11>=Oi),bh=String.fromCharCode(32),Lh=!1;function zm(t,e){switch(t){case"keyup":return pw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mr=!1;function gw(t,e){switch(t){case"compositionend":return Bm(e);case"keypress":return e.which!==32?null:(Lh=!0,bh);case"textInput":return t=e.data,t===bh&&Lh?null:t;default:return null}}function _w(t,e){if(mr)return t==="compositionend"||!zc&&zm(t,e)?(t=Fm(),go=Mc=tn=null,mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Um&&e.locale!=="ko"?null:e.data;default:return null}}var vw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vw[t.type]:e==="textarea"}function Wm(t,e,n,r){vm(r),e=Mo(e,"onChange"),0<e.length&&(n=new Fc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Di=null,Xi=null;function yw(t){Jm(t,0)}function kl(t){var e=vr(t);if(dm(e))return t}function ww(t,e){if(t==="change")return e}var jm=!1;if(Mt){var _a;if(Mt){var va="oninput"in document;if(!va){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),va=typeof Fh.oninput=="function"}_a=va}else _a=!1;jm=_a&&(!document.documentMode||9<document.documentMode)}function Uh(){Di&&(Di.detachEvent("onpropertychange",Hm),Xi=Di=null)}function Hm(t){if(t.propertyName==="value"&&kl(Xi)){var e=[];Wm(e,Xi,t,Pc(t)),Sm(yw,e)}}function Ew(t,e,n){t==="focusin"?(Uh(),Di=e,Xi=n,Di.attachEvent("onpropertychange",Hm)):t==="focusout"&&Uh()}function Sw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(Xi)}function Iw(t,e){if(t==="click")return kl(e)}function Cw(t,e){if(t==="input"||t==="change")return kl(e)}function kw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:kw;function Ji(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nu.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bh(t,e){var n=zh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zh(n)}}function Vm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $m(){for(var t=window,e=Ro();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ro(t.document)}return e}function Bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tw(t){var e=$m(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vm(n.ownerDocument.documentElement,n)){if(r!==null&&Bc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bh(n,s);var o=Bh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Nw=Mt&&"documentMode"in document&&11>=document.documentMode,gr=null,Eu=null,bi=null,Su=!1;function Wh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||gr==null||gr!==Ro(r)||(r=gr,"selectionStart"in r&&Bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&Ji(bi,r)||(bi=r,r=Mo(Eu,"onSelect"),0<r.length&&(e=new Fc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gr)))}function Zs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _r={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},ya={},Gm={};Mt&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Tl(t){if(ya[t])return ya[t];if(!_r[t])return t;var e=_r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gm)return ya[t]=e[n];return t}var Km=Tl("animationend"),qm=Tl("animationiteration"),Qm=Tl("animationstart"),Ym=Tl("transitionend"),Xm=new Map,jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,e){Xm.set(t,e),rr(e,[t])}for(var wa=0;wa<jh.length;wa++){var Ea=jh[wa],xw=Ea.toLowerCase(),Rw=Ea[0].toUpperCase()+Ea.slice(1);In(xw,"on"+Rw)}In(Km,"onAnimationEnd");In(qm,"onAnimationIteration");In(Qm,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Ym,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Aw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));function Hh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,x0(r,e,void 0,t),t.currentTarget=null}function Jm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Hh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Hh(i,l,u),s=a}}}if(Po)throw t=_u,Po=!1,_u=null,t}function Q(t,e){var n=e[Nu];n===void 0&&(n=e[Nu]=new Set);var r=t+"__bubble";n.has(r)||(Zm(e,t,2,!1),n.add(r))}function Sa(t,e,n){var r=0;e&&(r|=4),Zm(n,t,r,e)}var eo="_reactListening"+Math.random().toString(36).slice(2);function Zi(t){if(!t[eo]){t[eo]=!0,om.forEach(function(n){n!=="selectionchange"&&(Aw.has(n)||Sa(n,!1,t),Sa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[eo]||(e[eo]=!0,Sa("selectionchange",!1,e))}}function Zm(t,e,n,r){switch(Mm(e)){case 1:var i=V0;break;case 4:i=$0;break;default:i=Lc}n=i.bind(null,e,n,t),i=void 0,!gu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ia(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Dn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Sm(function(){var u=s,c=Pc(n),d=[];e:{var h=Xm.get(t);if(h!==void 0){var p=Fc,_=t;switch(t){case"keypress":if(_o(n)===0)break e;case"keydown":case"keyup":p=ow;break;case"focusin":_="focus",p=ga;break;case"focusout":_="blur",p=ga;break;case"beforeblur":case"afterblur":p=ga;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uw;break;case Km:case qm:case Qm:p=X0;break;case Ym:p=dw;break;case"scroll":p=G0;break;case"wheel":p=fw;break;case"copy":case"cut":case"paste":p=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dh}var y=(e&4)!==0,A=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Ki(f,m),w!=null&&y.push(es(f,w,g)))),A)break;f=f.return}0<y.length&&(h=new p(h,_,null,n,c),d.push({event:h,listeners:y}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==pu&&(_=n.relatedTarget||n.fromElement)&&(Dn(_)||_[Ft]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Dn(_):null,_!==null&&(A=ir(_),_!==A||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Ph,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Dh,w="onPointerLeave",m="onPointerEnter",f="pointer"),A=p==null?h:vr(p),g=_==null?h:vr(_),h=new y(w,f+"leave",p,n,c),h.target=A,h.relatedTarget=g,w=null,Dn(c)===u&&(y=new y(m,f+"enter",_,n,c),y.target=g,y.relatedTarget=A,w=y),A=w,p&&_)t:{for(y=p,m=_,f=0,g=y;g;g=cr(g))f++;for(g=0,w=m;w;w=cr(w))g++;for(;0<f-g;)y=cr(y),f--;for(;0<g-f;)m=cr(m),g--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=cr(y),m=cr(m)}y=null}else y=null;p!==null&&Vh(d,h,p,y,!1),_!==null&&A!==null&&Vh(d,A,_,y,!0)}}e:{if(h=u?vr(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=ww;else if(Mh(h))if(jm)C=Cw;else{C=Sw;var N=Ew}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Iw);if(C&&(C=C(t,u))){Wm(d,C,n,c);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&uu(h,"number",h.value)}switch(N=u?vr(u):window,t){case"focusin":(Mh(N)||N.contentEditable==="true")&&(gr=N,Eu=u,bi=null);break;case"focusout":bi=Eu=gr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Wh(d,n,c);break;case"selectionchange":if(Nw)break;case"keydown":case"keyup":Wh(d,n,c)}var x;if(zc)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else mr?zm(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Um&&n.locale!=="ko"&&(mr||R!=="onCompositionStart"?R==="onCompositionEnd"&&mr&&(x=Fm()):(tn=c,Mc="value"in tn?tn.value:tn.textContent,mr=!0)),N=Mo(u,R),0<N.length&&(R=new Oh(R,t,null,n,c),d.push({event:R,listeners:N}),x?R.data=x:(x=Bm(n),x!==null&&(R.data=x)))),(x=mw?gw(t,n):_w(t,n))&&(u=Mo(u,"onBeforeInput"),0<u.length&&(c=new Oh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}Jm(d,e)})}function es(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Mo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ki(t,n),s!=null&&r.unshift(es(t,s,i)),s=Ki(t,e),s!=null&&r.push(es(t,s,i))),t=t.return}return r}function cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ki(n,s),a!=null&&o.unshift(es(n,a,l))):i||(a=Ki(n,s),a!=null&&o.push(es(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Pw=/\r\n?/g,Ow=/\u0000|\uFFFD/g;function $h(t){return(typeof t=="string"?t:""+t).replace(Pw,`
`).replace(Ow,"")}function to(t,e,n){if(e=$h(e),$h(t)!==e&&n)throw Error(E(425))}function Fo(){}var Iu=null,Cu=null;function ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,Dw=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,bw=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(t){return Gh.resolve(null).then(t).catch(Lw)}:Tu;function Lw(t){setTimeout(function(){throw t})}function Ca(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Yi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yi(e)}function an(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),yt="__reactFiber$"+Jr,ts="__reactProps$"+Jr,Ft="__reactContainer$"+Jr,Nu="__reactEvents$"+Jr,Mw="__reactListeners$"+Jr,Fw="__reactHandles$"+Jr;function Dn(t){var e=t[yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ft]||n[yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kh(t);t!==null;){if(n=t[yt])return n;t=Kh(t)}return e}t=n,n=t.parentNode}return null}function Ts(t){return t=t[yt]||t[Ft],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Nl(t){return t[ts]||null}var xu=[],yr=-1;function Cn(t){return{current:t}}function X(t){0>yr||(t.current=xu[yr],xu[yr]=null,yr--)}function K(t,e){yr++,xu[yr]=t.current,t.current=e}var yn={},Ne=Cn(yn),Fe=Cn(!1),Hn=yn;function zr(t,e){var n=t.type.contextTypes;if(!n)return yn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(t){return t=t.childContextTypes,t!=null}function Uo(){X(Fe),X(Ne)}function qh(t,e,n){if(Ne.current!==yn)throw Error(E(168));K(Ne,e),K(Fe,n)}function eg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,E0(t)||"Unknown",i));return te({},n,r)}function zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yn,Hn=Ne.current,K(Ne,t),K(Fe,Fe.current),!0}function Qh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=eg(t,e,Hn),r.__reactInternalMemoizedMergedChildContext=t,X(Fe),X(Ne),K(Ne,t)):X(Fe),K(Fe,n)}var xt=null,xl=!1,ka=!1;function tg(t){xt===null?xt=[t]:xt.push(t)}function Uw(t){xl=!0,tg(t)}function kn(){if(!ka&&xt!==null){ka=!0;var t=0,e=H;try{var n=xt;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xt=null,xl=!1}catch(i){throw xt!==null&&(xt=xt.slice(t+1)),Tm(Oc,kn),i}finally{H=e,ka=!1}}return null}var wr=[],Er=0,Bo=null,Wo=0,Qe=[],Ye=0,Vn=null,Rt=1,At="";function xn(t,e){wr[Er++]=Wo,wr[Er++]=Bo,Bo=t,Wo=e}function ng(t,e,n){Qe[Ye++]=Rt,Qe[Ye++]=At,Qe[Ye++]=Vn,Vn=t;var r=Rt;t=At;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rt=1<<32-dt(e)+i|n<<i|r,At=s+t}else Rt=1<<s|n<<i|r,At=t}function Wc(t){t.return!==null&&(xn(t,1),ng(t,1,0))}function jc(t){for(;t===Bo;)Bo=wr[--Er],wr[Er]=null,Wo=wr[--Er],wr[Er]=null;for(;t===Vn;)Vn=Qe[--Ye],Qe[Ye]=null,At=Qe[--Ye],Qe[Ye]=null,Rt=Qe[--Ye],Qe[Ye]=null}var Ve=null,He=null,J=!1,lt=null;function rg(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ve=t,He=an(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ve=t,He=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vn!==null?{id:Rt,overflow:At}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ve=t,He=null,!0):!1;default:return!1}}function Ru(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Au(t){if(J){var e=He;if(e){var n=e;if(!Yh(t,e)){if(Ru(t))throw Error(E(418));e=an(n.nextSibling);var r=Ve;e&&Yh(t,e)?rg(r,n):(t.flags=t.flags&-4097|2,J=!1,Ve=t)}}else{if(Ru(t))throw Error(E(418));t.flags=t.flags&-4097|2,J=!1,Ve=t}}}function Xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ve=t}function no(t){if(t!==Ve)return!1;if(!J)return Xh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ku(t.type,t.memoizedProps)),e&&(e=He)){if(Ru(t))throw ig(),Error(E(418));for(;e;)rg(t,e),e=an(e.nextSibling)}if(Xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){He=an(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}He=null}}else He=Ve?an(t.stateNode.nextSibling):null;return!0}function ig(){for(var t=He;t;)t=an(t.nextSibling)}function Br(){He=Ve=null,J=!1}function Hc(t){lt===null?lt=[t]:lt.push(t)}var zw=jt.ReactCurrentBatchConfig;function st(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var jo=Cn(null),Ho=null,Sr=null,Vc=null;function $c(){Vc=Sr=Ho=null}function Gc(t){var e=jo.current;X(jo),t._currentValue=e}function Pu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pr(t,e){Ho=t,Vc=Sr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Le=!0),t.firstContext=null)}function tt(t){var e=t._currentValue;if(Vc!==t)if(t={context:t,memoizedValue:e,next:null},Sr===null){if(Ho===null)throw Error(E(308));Sr=t,Ho.dependencies={lanes:0,firstContext:t}}else Sr=Sr.next=t;return e}var bn=null;function Kc(t){bn===null?bn=[t]:bn.push(t)}function sg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Kc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ut(t,r)}function Ut(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qt=!1;function qc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ut(t,n)}return i=r.interleaved,i===null?(e.next=e,Kc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ut(t,n)}function vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dc(t,n)}}function Jh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vo(t,e,n,r){var i=t.updateQueue;qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,p=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(h=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=te({},d,h);break e;case 2:qt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,a=d):c=c.next=p,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gn|=o,t.lanes=o,t.memoizedState=d}}function Zh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var lg=new sm.Component().refs;function Ou(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rl={isMounted:function(t){return(t=t._reactInternals)?ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=dn(t),s=bt(r,i);s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ht(e,t,i,r),vo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=dn(t),s=bt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ht(e,t,i,r),vo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pe(),r=dn(t),i=bt(n,r);i.tag=2,e!=null&&(i.callback=e),e=un(t,i,r),e!==null&&(ht(e,t,r,n),vo(e,t,r))}};function ef(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ji(n,r)||!Ji(i,s):!0}function ag(t,e,n){var r=!1,i=yn,s=e.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=Ue(e)?Hn:Ne.current,r=e.contextTypes,s=(r=r!=null)?zr(t,i):yn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function tf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Rl.enqueueReplaceState(e,e.state,null)}function Du(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=lg,qc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=Ue(e)?Hn:Ne.current,i.context=zr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ou(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Rl.enqueueReplaceState(i,i.state,null),Vo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function gi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===lg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function ro(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nf(t){var e=t._init;return e(t._payload)}function ug(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=hn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,w){return f===null||f.tag!==6?(f=Oa(g,m.mode,w),f.return=m,f):(f=i(f,g),f.return=m,f)}function a(m,f,g,w){var C=g.type;return C===pr?c(m,f,g.props.children,w,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Kt&&nf(C)===f.type)?(w=i(f,g.props),w.ref=gi(m,f,g),w.return=m,w):(w=Co(g.type,g.key,g.props,null,m.mode,w),w.ref=gi(m,f,g),w.return=m,w)}function u(m,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Da(g,m.mode,w),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,w,C){return f===null||f.tag!==7?(f=Bn(g,m.mode,w,C),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Oa(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Gs:return g=Co(f.type,f.key,f.props,null,m.mode,g),g.ref=gi(m,null,f),g.return=m,g;case fr:return f=Da(f,m.mode,g),f.return=m,f;case Kt:var w=f._init;return d(m,w(f._payload),g)}if(ki(f)||di(f))return f=Bn(f,m.mode,g,null),f.return=m,f;ro(m,f)}return null}function h(m,f,g,w){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(m,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Gs:return g.key===C?a(m,f,g,w):null;case fr:return g.key===C?u(m,f,g,w):null;case Kt:return C=g._init,h(m,f,C(g._payload),w)}if(ki(g)||di(g))return C!==null?null:c(m,f,g,w,null);ro(m,g)}return null}function p(m,f,g,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(f,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gs:return m=m.get(w.key===null?g:w.key)||null,a(f,m,w,C);case fr:return m=m.get(w.key===null?g:w.key)||null,u(f,m,w,C);case Kt:var N=w._init;return p(m,f,g,N(w._payload),C)}if(ki(w)||di(w))return m=m.get(g)||null,c(f,m,w,C,null);ro(f,w)}return null}function _(m,f,g,w){for(var C=null,N=null,x=f,R=f=0,q=null;x!==null&&R<g.length;R++){x.index>R?(q=x,x=null):q=x.sibling;var M=h(m,x,g[R],w);if(M===null){x===null&&(x=q);break}t&&x&&M.alternate===null&&e(m,x),f=s(M,f,R),N===null?C=M:N.sibling=M,N=M,x=q}if(R===g.length)return n(m,x),J&&xn(m,R),C;if(x===null){for(;R<g.length;R++)x=d(m,g[R],w),x!==null&&(f=s(x,f,R),N===null?C=x:N.sibling=x,N=x);return J&&xn(m,R),C}for(x=r(m,x);R<g.length;R++)q=p(x,m,R,g[R],w),q!==null&&(t&&q.alternate!==null&&x.delete(q.key===null?R:q.key),f=s(q,f,R),N===null?C=q:N.sibling=q,N=q);return t&&x.forEach(function(rt){return e(m,rt)}),J&&xn(m,R),C}function y(m,f,g,w){var C=di(g);if(typeof C!="function")throw Error(E(150));if(g=C.call(g),g==null)throw Error(E(151));for(var N=C=null,x=f,R=f=0,q=null,M=g.next();x!==null&&!M.done;R++,M=g.next()){x.index>R?(q=x,x=null):q=x.sibling;var rt=h(m,x,M.value,w);if(rt===null){x===null&&(x=q);break}t&&x&&rt.alternate===null&&e(m,x),f=s(rt,f,R),N===null?C=rt:N.sibling=rt,N=rt,x=q}if(M.done)return n(m,x),J&&xn(m,R),C;if(x===null){for(;!M.done;R++,M=g.next())M=d(m,M.value,w),M!==null&&(f=s(M,f,R),N===null?C=M:N.sibling=M,N=M);return J&&xn(m,R),C}for(x=r(m,x);!M.done;R++,M=g.next())M=p(x,m,R,M.value,w),M!==null&&(t&&M.alternate!==null&&x.delete(M.key===null?R:M.key),f=s(M,f,R),N===null?C=M:N.sibling=M,N=M);return t&&x.forEach(function(ui){return e(m,ui)}),J&&xn(m,R),C}function A(m,f,g,w){if(typeof g=="object"&&g!==null&&g.type===pr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Gs:e:{for(var C=g.key,N=f;N!==null;){if(N.key===C){if(C=g.type,C===pr){if(N.tag===7){n(m,N.sibling),f=i(N,g.props.children),f.return=m,m=f;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Kt&&nf(C)===N.type){n(m,N.sibling),f=i(N,g.props),f.ref=gi(m,N,g),f.return=m,m=f;break e}n(m,N);break}else e(m,N);N=N.sibling}g.type===pr?(f=Bn(g.props.children,m.mode,w,g.key),f.return=m,m=f):(w=Co(g.type,g.key,g.props,null,m.mode,w),w.ref=gi(m,f,g),w.return=m,m=w)}return o(m);case fr:e:{for(N=g.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Da(g,m.mode,w),f.return=m,m=f}return o(m);case Kt:return N=g._init,A(m,f,N(g._payload),w)}if(ki(g))return _(m,f,g,w);if(di(g))return y(m,f,g,w);ro(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Oa(g,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return A}var Wr=ug(!0),cg=ug(!1),Ns={},Et=Cn(Ns),ns=Cn(Ns),rs=Cn(Ns);function Ln(t){if(t===Ns)throw Error(E(174));return t}function Qc(t,e){switch(K(rs,e),K(ns,t),K(Et,Ns),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:du(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=du(e,t)}X(Et),K(Et,e)}function jr(){X(Et),X(ns),X(rs)}function dg(t){Ln(rs.current);var e=Ln(Et.current),n=du(e,t.type);e!==n&&(K(ns,t),K(Et,n))}function Yc(t){ns.current===t&&(X(Et),X(ns))}var Z=Cn(0);function $o(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ta=[];function Xc(){for(var t=0;t<Ta.length;t++)Ta[t]._workInProgressVersionPrimary=null;Ta.length=0}var yo=jt.ReactCurrentDispatcher,Na=jt.ReactCurrentBatchConfig,$n=0,ee=null,ae=null,ge=null,Go=!1,Li=!1,is=0,Bw=0;function Ie(){throw Error(E(321))}function Jc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function Zc(t,e,n,r,i,s){if($n=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yo.current=t===null||t.memoizedState===null?Vw:$w,t=n(r,i),Li){s=0;do{if(Li=!1,is=0,25<=s)throw Error(E(301));s+=1,ge=ae=null,e.updateQueue=null,yo.current=Gw,t=n(r,i)}while(Li)}if(yo.current=Ko,e=ae!==null&&ae.next!==null,$n=0,ge=ae=ee=null,Go=!1,e)throw Error(E(300));return t}function ed(){var t=is!==0;return is=0,t}function vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ee.memoizedState=ge=t:ge=ge.next=t,ge}function nt(){if(ae===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=ge===null?ee.memoizedState:ge.next;if(e!==null)ge=e,ae=t;else{if(t===null)throw Error(E(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ge===null?ee.memoizedState=ge=t:ge=ge.next=t}return ge}function ss(t,e){return typeof e=="function"?e(t):e}function xa(t){var e=nt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if(($n&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ee.lanes|=c,Gn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,pt(r,e.memoizedState)||(Le=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,Gn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ra(t){var e=nt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(Le=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function hg(){}function fg(t,e){var n=ee,r=nt(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Le=!0),r=r.queue,td(gg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,os(9,mg.bind(null,n,r,i,e),void 0,null),ye===null)throw Error(E(349));($n&30)!==0||pg(n,e,i)}return i}function pg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mg(t,e,n,r){e.value=n,e.getSnapshot=r,_g(e)&&vg(t)}function gg(t,e,n){return n(function(){_g(e)&&vg(t)})}function _g(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function vg(t){var e=Ut(t,1);e!==null&&ht(e,t,1,-1)}function rf(t){var e=vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:t},e.queue=t,t=t.dispatch=Hw.bind(null,ee,t),[e.memoizedState,t]}function os(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yg(){return nt().memoizedState}function wo(t,e,n,r){var i=vt();ee.flags|=t,i.memoizedState=os(1|e,n,void 0,r===void 0?null:r)}function Al(t,e,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Jc(r,o.deps)){i.memoizedState=os(e,n,s,r);return}}ee.flags|=t,i.memoizedState=os(1|e,n,s,r)}function sf(t,e){return wo(8390656,8,t,e)}function td(t,e){return Al(2048,8,t,e)}function wg(t,e){return Al(4,2,t,e)}function Eg(t,e){return Al(4,4,t,e)}function Sg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ig(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,4,Sg.bind(null,e,t),n)}function nd(){}function Cg(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kg(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tg(t,e,n){return($n&21)===0?(t.baseState&&(t.baseState=!1,Le=!0),t.memoizedState=n):(pt(n,e)||(n=Rm(),ee.lanes|=n,Gn|=n,t.baseState=!0),e)}function Ww(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=Na.transition;Na.transition={};try{t(!1),e()}finally{H=n,Na.transition=r}}function Ng(){return nt().memoizedState}function jw(t,e,n){var r=dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xg(t))Rg(e,n);else if(n=sg(t,e,n,r),n!==null){var i=Pe();ht(n,t,r,i),Ag(n,e,r)}}function Hw(t,e,n){var r=dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xg(t))Rg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,o)){var a=e.interleaved;a===null?(i.next=i,Kc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=sg(t,e,i,r),n!==null&&(i=Pe(),ht(n,t,r,i),Ag(n,e,r))}}function xg(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function Rg(t,e){Li=Go=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ag(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dc(t,n)}}var Ko={readContext:tt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},Vw={readContext:tt,useCallback:function(t,e){return vt().memoizedState=[t,e===void 0?null:e],t},useContext:tt,useEffect:sf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wo(4194308,4,Sg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return wo(4,2,t,e)},useMemo:function(t,e){var n=vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jw.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=vt();return t={current:t},e.memoizedState=t},useState:rf,useDebugValue:nd,useDeferredValue:function(t){return vt().memoizedState=t},useTransition:function(){var t=rf(!1),e=t[0];return t=Ww.bind(null,t[1]),vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=vt();if(J){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ye===null)throw Error(E(349));($n&30)!==0||pg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,sf(gg.bind(null,r,s,t),[t]),r.flags|=2048,os(9,mg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vt(),e=ye.identifierPrefix;if(J){var n=At,r=Rt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=is++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Bw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$w={readContext:tt,useCallback:Cg,useContext:tt,useEffect:td,useImperativeHandle:Ig,useInsertionEffect:wg,useLayoutEffect:Eg,useMemo:kg,useReducer:xa,useRef:yg,useState:function(){return xa(ss)},useDebugValue:nd,useDeferredValue:function(t){var e=nt();return Tg(e,ae.memoizedState,t)},useTransition:function(){var t=xa(ss)[0],e=nt().memoizedState;return[t,e]},useMutableSource:hg,useSyncExternalStore:fg,useId:Ng,unstable_isNewReconciler:!1},Gw={readContext:tt,useCallback:Cg,useContext:tt,useEffect:td,useImperativeHandle:Ig,useInsertionEffect:wg,useLayoutEffect:Eg,useMemo:kg,useReducer:Ra,useRef:yg,useState:function(){return Ra(ss)},useDebugValue:nd,useDeferredValue:function(t){var e=nt();return ae===null?e.memoizedState=t:Tg(e,ae.memoizedState,t)},useTransition:function(){var t=Ra(ss)[0],e=nt().memoizedState;return[t,e]},useMutableSource:hg,useSyncExternalStore:fg,useId:Ng,unstable_isNewReconciler:!1};function Hr(t,e){try{var n="",r=e;do n+=w0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Aa(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function bu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kw=typeof WeakMap=="function"?WeakMap:Map;function Pg(t,e,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Qo||(Qo=!0,Vu=r),bu(t,e)},n}function Og(t,e,n){n=bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bu(t,e),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function of(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Kw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lE.bind(null,t,e,n),e.then(t,t))}function lf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function af(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bt(-1,1),e.tag=2,un(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var qw=jt.ReactCurrentOwner,Le=!1;function Re(t,e,n,r){e.child=t===null?cg(e,null,n,r):Wr(e,t.child,n,r)}function uf(t,e,n,r,i){n=n.render;var s=e.ref;return Pr(e,i),r=Zc(t,e,n,r,s,i),n=ed(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zt(t,e,i)):(J&&n&&Wc(e),e.flags|=1,Re(t,e,r,i),e.child)}function cf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dg(t,e,s,r,i)):(t=Co(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(o,r)&&t.ref===e.ref)return zt(t,e,i)}return e.flags|=1,t=hn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ji(s,r)&&t.ref===e.ref)if(Le=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Le=!0);else return e.lanes=t.lanes,zt(t,e,i)}return Lu(t,e,n,r,i)}function bg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Cr,je),je|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(Cr,je),je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(Cr,je),je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(Cr,je),je|=r;return Re(t,e,i,n),e.child}function Lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lu(t,e,n,r,i){var s=Ue(n)?Hn:Ne.current;return s=zr(e,s),Pr(e,i),n=Zc(t,e,n,r,s,i),r=ed(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zt(t,e,i)):(J&&r&&Wc(e),e.flags|=1,Re(t,e,n,i),e.child)}function df(t,e,n,r,i){if(Ue(n)){var s=!0;zo(e)}else s=!1;if(Pr(e,i),e.stateNode===null)Eo(t,e),ag(e,n,r),Du(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Ue(n)?Hn:Ne.current,u=zr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&tf(e,o,r,u),qt=!1;var h=e.memoizedState;o.state=h,Vo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Fe.current||qt?(typeof c=="function"&&(Ou(e,n,c,r),a=e.memoizedState),(l=qt||ef(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,og(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:st(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=Ue(n)?Hn:Ne.current,a=zr(e,a));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&tf(e,o,r,a),qt=!1,h=e.memoizedState,o.state=h,Vo(e,r,o,i);var _=e.memoizedState;l!==d||h!==_||Fe.current||qt?(typeof p=="function"&&(Ou(e,n,p,r),_=e.memoizedState),(u=qt||ef(e,n,u,r,h,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Mu(t,e,n,r,s,i)}function Mu(t,e,n,r,i,s){Lg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qh(e,n,!1),zt(t,e,s);r=e.stateNode,qw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wr(e,t.child,null,s),e.child=Wr(e,null,l,s)):Re(t,e,l,s),e.memoizedState=r.state,i&&Qh(e,n,!0),e.child}function Mg(t){var e=t.stateNode;e.pendingContext?qh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qh(t,e.context,!1),Qc(t,e.containerInfo)}function hf(t,e,n,r,i){return Br(),Hc(i),e.flags|=256,Re(t,e,n,r),e.child}var Fu={dehydrated:null,treeContext:null,retryLane:0};function Uu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fg(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(Z,i&1),t===null)return Au(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,r,0,null),t=Bn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uu(n),e.memoizedState=Fu,t):rd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Qw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=hn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=hn(l,s):(s=Bn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fu,r}return s=t.child,t=s.sibling,r=hn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rd(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function io(t,e,n,r){return r!==null&&Hc(r),Wr(e,t.child,null,n),t=rd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Aa(Error(E(422))),io(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dl({mode:"visible",children:r.children},i,0,null),s=Bn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Wr(e,t.child,null,o),e.child.memoizedState=Uu(o),e.memoizedState=Fu,s);if((e.mode&1)===0)return io(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Aa(s,r,void 0),io(t,e,o,r)}if(l=(o&t.childLanes)!==0,Le||l){if(r=ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ut(t,i),ht(r,t,i,-1))}return ud(),r=Aa(Error(E(421))),io(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=aE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,He=an(i.nextSibling),Ve=e,J=!0,lt=null,t!==null&&(Qe[Ye++]=Rt,Qe[Ye++]=At,Qe[Ye++]=Vn,Rt=t.id,At=t.overflow,Vn=e),e=rd(e,r.children),e.flags|=4096,e)}function ff(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pu(t.return,e,n)}function Pa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ug(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=Z.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ff(t,n,e);else if(t.tag===19)ff(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(Z,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$o(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$o(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pa(e,!0,n,null,s);break;case"together":Pa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Eo(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gn|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=hn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yw(t,e,n){switch(e.tag){case 3:Mg(e),Br();break;case 5:dg(e);break;case 1:Ue(e.type)&&zo(e);break;case 4:Qc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(jo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(Z,Z.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Fg(t,e,n):(K(Z,Z.current&1),t=zt(t,e,n),t!==null?t.sibling:null);K(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Ug(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,bg(t,e,n)}return zt(t,e,n)}var zg,zu,Bg,Wg;zg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};Bg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ln(Et.current);var s=null;switch(n){case"input":i=lu(t,i),r=lu(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=cu(t,i),r=cu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fo)}hu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($i.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($i.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Wg=function(t,e,n,r){n!==r&&(e.flags|=4)};function _i(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ce(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Xw(t,e,n){var r=e.pendingProps;switch(jc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(e),null;case 1:return Ue(e.type)&&Uo(),Ce(e),null;case 3:return r=e.stateNode,jr(),X(Fe),X(Ne),Xc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(no(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,lt!==null&&(Ku(lt),lt=null))),zu(t,e),Ce(e),null;case 5:Yc(e);var i=Ln(rs.current);if(n=e.type,t!==null&&e.stateNode!=null)Bg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ce(e),null}if(t=Ln(Et.current),no(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yt]=e,r[ts]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Ni.length;i++)Q(Ni[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Eh(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":Ih(r,s),Q("invalid",r)}hu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&to(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&to(r.textContent,l,t),i=["children",""+l]):$i.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ks(r),Sh(r,s,!0);break;case"textarea":Ks(r),Ch(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yt]=e,t[ts]=r,zg(t,e,!1,!1),e.stateNode=t;e:{switch(o=fu(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ni.length;i++)Q(Ni[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":Eh(t,r),i=lu(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),Q("invalid",t);break;case"textarea":Ih(t,r),i=cu(t,r),Q("invalid",t);break;default:i=r}hu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?_m(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&mm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Gi(t,a):typeof a=="number"&&Gi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($i.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&Nc(t,s,a,o))}switch(n){case"input":Ks(t),Sh(t,r,!1);break;case"textarea":Ks(t),Ch(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Nr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Nr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ce(e),null;case 6:if(t&&e.stateNode!=null)Wg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Ln(rs.current),Ln(Et.current),no(e)){if(r=e.stateNode,n=e.memoizedProps,r[yt]=e,(s=r.nodeValue!==n)&&(t=Ve,t!==null))switch(t.tag){case 3:to(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&to(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=e,e.stateNode=r}return Ce(e),null;case 13:if(X(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&He!==null&&(e.mode&1)!==0&&(e.flags&128)===0)ig(),Br(),e.flags|=98560,s=!1;else if(s=no(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[yt]=e}else Br(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ce(e),s=!1}else lt!==null&&(Ku(lt),lt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Z.current&1)!==0?de===0&&(de=3):ud())),e.updateQueue!==null&&(e.flags|=4),Ce(e),null);case 4:return jr(),zu(t,e),t===null&&Zi(e.stateNode.containerInfo),Ce(e),null;case 10:return Gc(e.type._context),Ce(e),null;case 17:return Ue(e.type)&&Uo(),Ce(e),null;case 19:if(X(Z),s=e.memoizedState,s===null)return Ce(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_i(s,!1);else{if(de!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=$o(t),o!==null){for(e.flags|=128,_i(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>Vr&&(e.flags|=128,r=!0,_i(s,!1),e.lanes=4194304)}else{if(!r)if(t=$o(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_i(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ce(e),null}else 2*se()-s.renderingStartTime>Vr&&n!==1073741824&&(e.flags|=128,r=!0,_i(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=Z.current,K(Z,r?n&1|2:n&1),e):(Ce(e),null);case 22:case 23:return ad(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(je&1073741824)!==0&&(Ce(e),e.subtreeFlags&6&&(e.flags|=8192)):Ce(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function Jw(t,e){switch(jc(e),e.tag){case 1:return Ue(e.type)&&Uo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jr(),X(Fe),X(Ne),Xc(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Yc(e),null;case 13:if(X(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Br()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(Z),null;case 4:return jr(),null;case 10:return Gc(e.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var so=!1,ke=!1,Zw=typeof WeakSet=="function"?WeakSet:Set,k=null;function Ir(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function Bu(t,e,n){try{n()}catch(r){ne(t,e,r)}}var pf=!1;function eE(t,e){if(Iu=bo,t=$m(),Bc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cu={focusedElem:t,selectionRange:n},bo=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,A=_.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:st(e.type,y),A);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ne(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=pf,pf=!1,_}function Mi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bu(e,n,s)}i=i.next}while(i!==r)}}function Pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jg(t){var e=t.alternate;e!==null&&(t.alternate=null,jg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yt],delete e[ts],delete e[Nu],delete e[Mw],delete e[Fw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hg(t){return t.tag===5||t.tag===3||t.tag===4}function mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fo));else if(r!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}function Hu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hu(t,e,n),t=t.sibling;t!==null;)Hu(t,e,n),t=t.sibling}var we=null,ot=!1;function $t(t,e,n){for(n=n.child;n!==null;)Vg(t,e,n),n=n.sibling}function Vg(t,e,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:ke||Ir(n,e);case 6:var r=we,i=ot;we=null,$t(t,e,n),we=r,ot=i,we!==null&&(ot?(t=we,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(ot?(t=we,n=n.stateNode,t.nodeType===8?Ca(t.parentNode,n):t.nodeType===1&&Ca(t,n),Yi(t)):Ca(we,n.stateNode));break;case 4:r=we,i=ot,we=n.stateNode.containerInfo,ot=!0,$t(t,e,n),we=r,ot=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Bu(n,e,o),i=i.next}while(i!==r)}$t(t,e,n);break;case 1:if(!ke&&(Ir(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,e,l)}$t(t,e,n);break;case 21:$t(t,e,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,$t(t,e,n),ke=r):$t(t,e,n);break;default:$t(t,e,n)}}function gf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zw),e.forEach(function(r){var i=uE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:we=l.stateNode,ot=!1;break e;case 3:we=l.stateNode.containerInfo,ot=!0;break e;case 4:we=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(we===null)throw Error(E(160));Vg(s,o,i),we=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$g(e,t),e=e.sibling}function $g(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),_t(t),r&4){try{Mi(3,t,t.return),Pl(3,t)}catch(y){ne(t,t.return,y)}try{Mi(5,t,t.return)}catch(y){ne(t,t.return,y)}}break;case 1:it(e,t),_t(t),r&512&&n!==null&&Ir(n,n.return);break;case 5:if(it(e,t),_t(t),r&512&&n!==null&&Ir(n,n.return),t.flags&32){var i=t.stateNode;try{Gi(i,"")}catch(y){ne(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hm(i,s),fu(l,o);var u=fu(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?_m(i,d):c==="dangerouslySetInnerHTML"?mm(i,d):c==="children"?Gi(i,d):Nc(i,c,d,u)}switch(l){case"input":au(i,s);break;case"textarea":fm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Nr(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Nr(i,!!s.multiple,s.defaultValue,!0):Nr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ts]=s}catch(y){ne(t,t.return,y)}}break;case 6:if(it(e,t),_t(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ne(t,t.return,y)}}break;case 3:if(it(e,t),_t(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yi(e.containerInfo)}catch(y){ne(t,t.return,y)}break;case 4:it(e,t),_t(t);break;case 13:it(e,t),_t(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(od=se())),r&4&&gf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ke=(u=ke)||c,it(e,t),ke=u):it(e,t),_t(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(k=t,c=t.child;c!==null;){for(d=k=c;k!==null;){switch(h=k,p=h.child,h.tag){case 0:case 11:case 14:case 15:Mi(4,h,h.return);break;case 1:Ir(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:Ir(h,h.return);break;case 22:if(h.memoizedState!==null){vf(d);continue}}p!==null?(p.return=h,k=p):vf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=gm("display",o))}catch(y){ne(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ne(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:it(e,t),_t(t),r&4&&gf(t);break;case 21:break;default:it(e,t),_t(t)}}function _t(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gi(i,""),r.flags&=-33);var s=mf(t);Hu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=mf(t);ju(t,l,o);break;default:throw Error(E(161))}}catch(a){ne(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tE(t,e,n){k=t,Gg(t)}function Gg(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||so;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ke;l=so;var u=ke;if(so=o,(ke=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?yf(i):a!==null?(a.return=o,k=a):yf(i);for(;s!==null;)k=s,Gg(s),s=s.sibling;k=i,so=l,ke=u}_f(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,k=s):_f(t)}}function _f(t){for(;k!==null;){var e=k;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ke||Pl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Yi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ke||e.flags&512&&Wu(e)}catch(h){ne(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function vf(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function yf(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pl(4,e)}catch(a){ne(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ne(e,i,a)}}var s=e.return;try{Wu(e)}catch(a){ne(e,s,a)}break;case 5:var o=e.return;try{Wu(e)}catch(a){ne(e,o,a)}}}catch(a){ne(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var nE=Math.ceil,qo=jt.ReactCurrentDispatcher,id=jt.ReactCurrentOwner,Je=jt.ReactCurrentBatchConfig,B=0,ye=null,oe=null,Ee=0,je=0,Cr=Cn(0),de=0,ls=null,Gn=0,Ol=0,sd=0,Fi=null,be=null,od=0,Vr=1/0,Nt=null,Qo=!1,Vu=null,cn=null,oo=!1,nn=null,Yo=0,Ui=0,$u=null,So=-1,Io=0;function Pe(){return(B&6)!==0?se():So!==-1?So:So=se()}function dn(t){return(t.mode&1)===0?1:(B&2)!==0&&Ee!==0?Ee&-Ee:zw.transition!==null?(Io===0&&(Io=Rm()),Io):(t=H,t!==0||(t=window.event,t=t===void 0?16:Mm(t.type)),t)}function ht(t,e,n,r){if(50<Ui)throw Ui=0,$u=null,Error(E(185));Cs(t,n,r),((B&2)===0||t!==ye)&&(t===ye&&((B&2)===0&&(Ol|=n),de===4&&Yt(t,Ee)),ze(t,r),n===1&&B===0&&(e.mode&1)===0&&(Vr=se()+500,xl&&kn()))}function ze(t,e){var n=t.callbackNode;z0(t,e);var r=Do(t,t===ye?Ee:0);if(r===0)n!==null&&Nh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Nh(n),e===1)t.tag===0?Uw(wf.bind(null,t)):tg(wf.bind(null,t)),bw(function(){(B&6)===0&&kn()}),n=null;else{switch(Am(r)){case 1:n=Oc;break;case 4:n=Nm;break;case 16:n=Oo;break;case 536870912:n=xm;break;default:n=Oo}n=e_(n,Kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kg(t,e){if(So=-1,Io=0,(B&6)!==0)throw Error(E(327));var n=t.callbackNode;if(Or()&&t.callbackNode!==n)return null;var r=Do(t,t===ye?Ee:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Xo(t,r);else{e=r;var i=B;B|=2;var s=Qg();(ye!==t||Ee!==e)&&(Nt=null,Vr=se()+500,zn(t,e));do try{sE();break}catch(l){qg(t,l)}while(1);$c(),qo.current=s,B=i,oe!==null?e=0:(ye=null,Ee=0,e=de)}if(e!==0){if(e===2&&(i=vu(t),i!==0&&(r=i,e=Gu(t,i))),e===1)throw n=ls,zn(t,0),Yt(t,r),ze(t,se()),n;if(e===6)Yt(t,r);else{if(i=t.current.alternate,(r&30)===0&&!rE(i)&&(e=Xo(t,r),e===2&&(s=vu(t),s!==0&&(r=s,e=Gu(t,s))),e===1))throw n=ls,zn(t,0),Yt(t,r),ze(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Rn(t,be,Nt);break;case 3:if(Yt(t,r),(r&130023424)===r&&(e=od+500-se(),10<e)){if(Do(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tu(Rn.bind(null,t,be,Nt),e);break}Rn(t,be,Nt);break;case 4:if(Yt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nE(r/1960))-r,10<r){t.timeoutHandle=Tu(Rn.bind(null,t,be,Nt),r);break}Rn(t,be,Nt);break;case 5:Rn(t,be,Nt);break;default:throw Error(E(329))}}}return ze(t,se()),t.callbackNode===n?Kg.bind(null,t):null}function Gu(t,e){var n=Fi;return t.current.memoizedState.isDehydrated&&(zn(t,e).flags|=256),t=Xo(t,e),t!==2&&(e=be,be=n,e!==null&&Ku(e)),t}function Ku(t){be===null?be=t:be.push.apply(be,t)}function rE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yt(t,e){for(e&=~sd,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function wf(t){if((B&6)!==0)throw Error(E(327));Or();var e=Do(t,0);if((e&1)===0)return ze(t,se()),null;var n=Xo(t,e);if(t.tag!==0&&n===2){var r=vu(t);r!==0&&(e=r,n=Gu(t,r))}if(n===1)throw n=ls,zn(t,0),Yt(t,e),ze(t,se()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rn(t,be,Nt),ze(t,se()),null}function ld(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(Vr=se()+500,xl&&kn())}}function Kn(t){nn!==null&&nn.tag===0&&(B&6)===0&&Or();var e=B;B|=1;var n=Je.transition,r=H;try{if(Je.transition=null,H=1,t)return t()}finally{H=r,Je.transition=n,B=e,(B&6)===0&&kn()}}function ad(){je=Cr.current,X(Cr)}function zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dw(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(jc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uo();break;case 3:jr(),X(Fe),X(Ne),Xc();break;case 5:Yc(r);break;case 4:jr();break;case 13:X(Z);break;case 19:X(Z);break;case 10:Gc(r.type._context);break;case 22:case 23:ad()}n=n.return}if(ye=t,oe=t=hn(t.current,null),Ee=je=e,de=0,ls=null,sd=Ol=Gn=0,be=Fi=null,bn!==null){for(e=0;e<bn.length;e++)if(n=bn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}bn=null}return t}function qg(t,e){do{var n=oe;try{if($c(),yo.current=Ko,Go){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Go=!1}if($n=0,ge=ae=ee=null,Li=!1,is=0,id.current=null,n===null||n.return===null){de=1,ls=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ee,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=lf(o);if(p!==null){p.flags&=-257,af(p,o,l,s,e),p.mode&1&&of(s,u,e),e=p,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if((e&1)===0){of(s,u,e),ud();break e}a=Error(E(426))}}else if(J&&l.mode&1){var A=lf(o);if(A!==null){(A.flags&65536)===0&&(A.flags|=256),af(A,o,l,s,e),Hc(Hr(a,l));break e}}s=a=Hr(a,l),de!==4&&(de=2),Fi===null?Fi=[s]:Fi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Pg(s,a,e);Jh(s,m);break e;case 1:l=a;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cn===null||!cn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Og(s,l,e);Jh(s,w);break e}}s=s.return}while(s!==null)}Xg(n)}catch(C){e=C,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function Qg(){var t=qo.current;return qo.current=Ko,t===null?Ko:t}function ud(){(de===0||de===3||de===2)&&(de=4),ye===null||(Gn&268435455)===0&&(Ol&268435455)===0||Yt(ye,Ee)}function Xo(t,e){var n=B;B|=2;var r=Qg();(ye!==t||Ee!==e)&&(Nt=null,zn(t,e));do try{iE();break}catch(i){qg(t,i)}while(1);if($c(),B=n,qo.current=r,oe!==null)throw Error(E(261));return ye=null,Ee=0,de}function iE(){for(;oe!==null;)Yg(oe)}function sE(){for(;oe!==null&&!A0();)Yg(oe)}function Yg(t){var e=Zg(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?Xg(t):oe=e,id.current=null}function Xg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Xw(n,e,je),n!==null){oe=n;return}}else{if(n=Jw(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{de=6,oe=null;return}}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);de===0&&(de=5)}function Rn(t,e,n){var r=H,i=Je.transition;try{Je.transition=null,H=1,oE(t,e,n,r)}finally{Je.transition=i,H=r}return null}function oE(t,e,n,r){do Or();while(nn!==null);if((B&6)!==0)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(B0(t,s),t===ye&&(oe=ye=null,Ee=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||oo||(oo=!0,e_(Oo,function(){return Or(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Je.transition,Je.transition=null;var o=H;H=1;var l=B;B|=4,id.current=null,eE(t,n),$g(n,t),Tw(Cu),bo=!!Iu,Cu=Iu=null,t.current=n,tE(n),P0(),B=l,H=o,Je.transition=s}else t.current=n;if(oo&&(oo=!1,nn=t,Yo=i),s=t.pendingLanes,s===0&&(cn=null),b0(n.stateNode),ze(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qo)throw Qo=!1,t=Vu,Vu=null,t;return(Yo&1)!==0&&t.tag!==0&&Or(),s=t.pendingLanes,(s&1)!==0?t===$u?Ui++:(Ui=0,$u=t):Ui=0,kn(),null}function Or(){if(nn!==null){var t=Am(Yo),e=Je.transition,n=H;try{if(Je.transition=null,H=16>t?16:t,nn===null)var r=!1;else{if(t=nn,nn=null,Yo=0,(B&6)!==0)throw Error(E(331));var i=B;for(B|=4,k=t.current;k!==null;){var s=k,o=s.child;if((k.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:Mi(8,c,s)}var d=c.child;if(d!==null)d.return=c,k=d;else for(;k!==null;){c=k;var h=c.sibling,p=c.return;if(jg(c),c===u){k=null;break}if(h!==null){h.return=p,k=h;break}k=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var A=y.sibling;y.sibling=null,y=A}while(y!==null)}}k=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Mi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,k=m;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,k=g;else e:for(o=f;k!==null;){if(l=k,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Pl(9,l)}}catch(C){ne(l,l.return,C)}if(l===o){k=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,k=w;break e}k=l.return}}if(B=i,kn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Il,t)}catch{}r=!0}return r}finally{H=n,Je.transition=e}}return!1}function Ef(t,e,n){e=Hr(n,e),e=Pg(t,e,1),t=un(t,e,1),e=Pe(),t!==null&&(Cs(t,1,e),ze(t,e))}function ne(t,e,n){if(t.tag===3)Ef(t,t,n);else for(;e!==null;){if(e.tag===3){Ef(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){t=Hr(n,t),t=Og(e,t,1),e=un(e,t,1),t=Pe(),e!==null&&(Cs(e,1,t),ze(e,t));break}}e=e.return}}function lE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pe(),t.pingedLanes|=t.suspendedLanes&n,ye===t&&(Ee&n)===n&&(de===4||de===3&&(Ee&130023424)===Ee&&500>se()-od?zn(t,0):sd|=n),ze(t,e)}function Jg(t,e){e===0&&((t.mode&1)===0?e=1:(e=Ys,Ys<<=1,(Ys&130023424)===0&&(Ys=4194304)));var n=Pe();t=Ut(t,e),t!==null&&(Cs(t,e,n),ze(t,n))}function aE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jg(t,n)}function uE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Jg(t,n)}var Zg;Zg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fe.current)Le=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Le=!1,Yw(t,e,n);Le=(t.flags&131072)!==0}else Le=!1,J&&(e.flags&1048576)!==0&&ng(e,Wo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Eo(t,e),t=e.pendingProps;var i=zr(e,Ne.current);Pr(e,n),i=Zc(null,e,r,t,i,n);var s=ed();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(r)?(s=!0,zo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qc(e),i.updater=Rl,e.stateNode=i,i._reactInternals=e,Du(e,r,t,n),e=Mu(null,e,r,!0,s,n)):(e.tag=0,J&&s&&Wc(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Eo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dE(r),t=st(r,t),i){case 0:e=Lu(null,e,r,t,n);break e;case 1:e=df(null,e,r,t,n);break e;case 11:e=uf(null,e,r,t,n);break e;case 14:e=cf(null,e,r,st(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Lu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),df(t,e,r,i,n);case 3:e:{if(Mg(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,og(t,e),Vo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hr(Error(E(423)),e),e=hf(t,e,r,n,i);break e}else if(r!==i){i=Hr(Error(E(424)),e),e=hf(t,e,r,n,i);break e}else for(He=an(e.stateNode.containerInfo.firstChild),Ve=e,J=!0,lt=null,n=cg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),r===i){e=zt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return dg(e),t===null&&Au(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ku(r,i)?o=null:s!==null&&ku(r,s)&&(e.flags|=32),Lg(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&Au(e),null;case 13:return Fg(t,e,n);case 4:return Qc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),uf(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(jo,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!Fe.current){e=zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=bt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Pu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Pu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pr(e,n),i=tt(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),cf(t,e,r,i,n);case 15:return Dg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Eo(t,e),e.tag=1,Ue(r)?(t=!0,zo(e)):t=!1,Pr(e,n),ag(e,r,i),Du(e,r,i,n),Mu(null,e,r,!0,t,n);case 19:return Ug(t,e,n);case 22:return bg(t,e,n)}throw Error(E(156,e.tag))};function e_(t,e){return Tm(t,e)}function cE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,r){return new cE(t,e,n,r)}function cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dE(t){if(typeof t=="function")return cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rc)return 11;if(t===Ac)return 14}return 2}function hn(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Co(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case pr:return Bn(n.children,i,s,e);case xc:o=8,i|=8;break;case ru:return t=Xe(12,n,e,i|2),t.elementType=ru,t.lanes=s,t;case iu:return t=Xe(13,n,e,i),t.elementType=iu,t.lanes=s,t;case su:return t=Xe(19,n,e,i),t.elementType=su,t.lanes=s,t;case um:return Dl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lm:o=10;break e;case am:o=9;break e;case Rc:o=11;break e;case Ac:o=14;break e;case Kt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Xe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Bn(t,e,n,r){return t=Xe(7,t,r,e),t.lanes=n,t}function Dl(t,e,n,r){return t=Xe(22,t,r,e),t.elementType=um,t.lanes=n,t.stateNode={isHidden:!1},t}function Oa(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Da(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fa(0),this.expirationTimes=fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dd(t,e,n,r,i,s,o,l,a){return t=new hE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(s),t}function fE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function t_(t){if(!t)return yn;t=t._reactInternals;e:{if(ir(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Ue(n))return eg(t,n,e)}return e}function n_(t,e,n,r,i,s,o,l,a){return t=dd(n,r,!0,t,i,s,o,l,a),t.context=t_(null),n=t.current,r=Pe(),i=dn(n),s=bt(r,i),s.callback=e!=null?e:null,un(n,s,i),t.current.lanes=i,Cs(t,i,r),ze(t,r),t}function bl(t,e,n,r){var i=e.current,s=Pe(),o=dn(i);return n=t_(n),e.context===null?e.context=n:e.pendingContext=n,e=bt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=un(i,e,o),t!==null&&(ht(t,i,o,s),vo(t,i,o)),o}function Jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hd(t,e){Sf(t,e),(t=t.alternate)&&Sf(t,e)}function pE(){return null}var r_=typeof reportError=="function"?reportError:function(t){console.error(t)};function fd(t){this._internalRoot=t}Ll.prototype.render=fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));bl(t,e,null,null)};Ll.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kn(function(){bl(null,t,null,null)}),e[Ft]=null}};function Ll(t){this._internalRoot=t}Ll.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qt.length&&e!==0&&e<Qt[n].priority;n++);Qt.splice(n,0,t),n===0&&Lm(t)}};function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function If(){}function mE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Jo(o);s.call(u)}}var o=n_(e,r,t,0,null,!1,!1,"",If);return t._reactRootContainer=o,t[Ft]=o.current,Zi(t.nodeType===8?t.parentNode:t),Kn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Jo(a);l.call(u)}}var a=dd(t,0,!1,null,null,!1,!1,"",If);return t._reactRootContainer=a,t[Ft]=a.current,Zi(t.nodeType===8?t.parentNode:t),Kn(function(){bl(e,a,n,r)}),a}function Fl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Jo(o);l.call(a)}}bl(e,o,t,i)}else o=mE(n,e,t,i,r);return Jo(o)}Pm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ti(e.pendingLanes);n!==0&&(Dc(e,n|1),ze(e,se()),(B&6)===0&&(Vr=se()+500,kn()))}break;case 13:Kn(function(){var r=Ut(t,1);if(r!==null){var i=Pe();ht(r,t,1,i)}}),hd(t,1)}};bc=function(t){if(t.tag===13){var e=Ut(t,134217728);if(e!==null){var n=Pe();ht(e,t,134217728,n)}hd(t,134217728)}};Om=function(t){if(t.tag===13){var e=dn(t),n=Ut(t,e);if(n!==null){var r=Pe();ht(n,t,e,r)}hd(t,e)}};Dm=function(){return H};bm=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};mu=function(t,e,n){switch(e){case"input":if(au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nl(r);if(!i)throw Error(E(90));dm(r),au(r,i)}}}break;case"textarea":fm(t,n);break;case"select":e=n.value,e!=null&&Nr(t,!!n.multiple,e,!1)}};wm=ld;Em=Kn;var gE={usingClientEntryPoint:!1,Events:[Ts,vr,Nl,vm,ym,ld]},vi={findFiberByHostInstance:Dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_E={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cm(t),t===null?null:t.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance||pE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Il=lo.inject(_E),wt=lo}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gE;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(e))throw Error(E(200));return fE(t,e,null,n)};Ke.createRoot=function(t,e){if(!pd(t))throw Error(E(299));var n=!1,r="",i=r_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dd(t,1,!1,null,null,n,!1,r,i),t[Ft]=e.current,Zi(t.nodeType===8?t.parentNode:t),new fd(e)};Ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Cm(e),t=t===null?null:t.stateNode,t};Ke.flushSync=function(t){return Kn(t)};Ke.hydrate=function(t,e,n){if(!Ml(e))throw Error(E(200));return Fl(null,t,e,!0,n)};Ke.hydrateRoot=function(t,e,n){if(!pd(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=r_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=n_(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Ft]=e.current,Zi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ll(e)};Ke.render=function(t,e,n){if(!Ml(e))throw Error(E(200));return Fl(null,t,e,!1,n)};Ke.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(E(40));return t._reactRootContainer?(Kn(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ft]=null})}),!0):!1};Ke.unstable_batchedUpdates=ld;Ke.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ml(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Fl(t,e,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ke})(nm);var Cf=nm.exports;tu.createRoot=Cf.createRoot,tu.hydrateRoot=Cf.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},as.apply(this,arguments)}var rn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rn||(rn={}));const kf="popstate";function vE(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=sr(i.location.hash.substr(1));return qu("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,u=a.indexOf("#");l=u===-1?a:a.slice(0,u)}return l+"#"+(typeof s=="string"?s:us(s))}function r(i,s){yE(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return SE(e,n,r,t)}function yE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wE(){return Math.random().toString(36).substr(2,8)}function Tf(t){return{usr:t.state,key:t.key}}function qu(t,e,n,r){return n===void 0&&(n=null),as({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?sr(e):e,{state:n,key:e&&e.key||r||wE()})}function us(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function sr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function EE(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:us(t);return new URL(n,e)}function SE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=rn.Pop,a=null;function u(){l=rn.Pop,a&&a({action:l,location:h.location})}function c(p,_){l=rn.Push;let y=qu(h.location,p,_);n&&n(y,p);let A=Tf(y),m=h.createHref(y);try{o.pushState(A,"",m)}catch{i.location.assign(m)}s&&a&&a({action:l,location:h.location})}function d(p,_){l=rn.Replace;let y=qu(h.location,p,_);n&&n(y,p);let A=Tf(y),m=h.createHref(y);o.replaceState(A,"",m),s&&a&&a({action:l,location:h.location})}let h={get action(){return l},get location(){return t(i,o)},listen(p){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(kf,u),a=p,()=>{i.removeEventListener(kf,u),a=null}},createHref(p){return e(i,p)},encodeLocation(p){let _=EE(us(p));return as({},p,{pathname:_.pathname,search:_.search,hash:_.hash})},push:c,replace:d,go(p){return o.go(p)}};return h}var Nf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Nf||(Nf={}));function IE(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?sr(e):e,i=s_(r.pathname||"/",n);if(i==null)return null;let s=i_(t);CE(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=DE(s[l],ME(i));return o}function i_(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(he(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let l=fn([r,o.relativePath]),a=n.concat(o);i.children&&i.children.length>0&&(he(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),i_(i.children,e,a,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:PE(l,i.index),routesMeta:a})}),e}function CE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:OE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kE=/^:\w+$/,TE=3,NE=2,xE=1,RE=10,AE=-2,xf=t=>t==="*";function PE(t,e){let n=t.split("/"),r=n.length;return n.some(xf)&&(r+=AE),e&&(r+=NE),n.filter(i=>!xf(i)).reduce((i,s)=>i+(kE.test(s)?TE:s===""?xE:RE),r)}function OE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function DE(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=bE({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:fn([i,c.pathname]),pathnameBase:BE(fn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=fn([i,c.pathnameBase]))}return s}function bE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=LE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=FE(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function LE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),md(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,l)=>(r.push(l),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ME(t){try{return decodeURI(t)}catch(e){return md(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function FE(t,e){try{return decodeURIComponent(t)}catch(n){return md(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function s_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function md(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function UE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?sr(t):t;return{pathname:n?n.startsWith("/")?n:zE(n,e):e,search:WE(r),hash:jE(i)}}function zE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ba(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function l_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=sr(t):(i=as({},t),he(!i.pathname||!i.pathname.includes("?"),ba("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),ba("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),ba("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=UE(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const fn=t=>t.join("/").replace(/\/\/+/g,"/"),BE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),WE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class HE{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function VE(t){return t instanceof HE}const $E=new Set(["POST","PUT","PATCH","DELETE"]);[...$E];var Ul={exports:{}},zl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GE=S.exports,KE=Symbol.for("react.element"),qE=Symbol.for("react.fragment"),QE=Object.prototype.hasOwnProperty,YE=GE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XE={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)QE.call(e,r)&&!XE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:KE,type:t,key:s,ref:o,props:i,_owner:YE.current}}zl.Fragment=qE;zl.jsx=a_;zl.jsxs=a_;(function(t){t.exports=zl})(Ul);const JE=Ul.exports.Fragment,v=Ul.exports.jsx,j=Ul.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qu(){return Qu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qu.apply(this,arguments)}function ZE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const eS=typeof Object.is=="function"?Object.is:ZE,{useState:tS,useEffect:nS,useLayoutEffect:rS,useDebugValue:iS}=eu;function sS(t,e,n){const r=e(),[{inst:i},s]=tS({inst:{value:r,getSnapshot:e}});return rS(()=>{i.value=r,i.getSnapshot=e,La(i)&&s({inst:i})},[t,r,e]),nS(()=>(La(i)&&s({inst:i}),t(()=>{La(i)&&s({inst:i})})),[t]),iS(r),r}function La(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!eS(n,r)}catch{return!0}}function oS(t,e,n){return e()}const lS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aS=!lS,uS=aS?oS:sS;"useSyncExternalStore"in eu&&(t=>t.useSyncExternalStore)(eu);const cS=S.exports.createContext(null),dS=S.exports.createContext(null),gd=S.exports.createContext(null),_d=S.exports.createContext(null),Bl=S.exports.createContext(null),xs=S.exports.createContext({outlet:null,matches:[]}),u_=S.exports.createContext(null);function hS(t,e){let{relative:n}=e===void 0?{}:e;Zr()||he(!1);let{basename:r,navigator:i}=S.exports.useContext(_d),{hash:s,pathname:o,search:l}=c_(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:fn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Zr(){return S.exports.useContext(Bl)!=null}function Wl(){return Zr()||he(!1),S.exports.useContext(Bl).location}function ei(){Zr()||he(!1);let{basename:t,navigator:e}=S.exports.useContext(_d),{matches:n}=S.exports.useContext(xs),{pathname:r}=Wl(),i=JSON.stringify(o_(n).map(l=>l.pathnameBase)),s=S.exports.useRef(!1);return S.exports.useEffect(()=>{s.current=!0}),S.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=l_(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:fn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function c_(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.exports.useContext(xs),{pathname:i}=Wl(),s=JSON.stringify(o_(r).map(o=>o.pathnameBase));return S.exports.useMemo(()=>l_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function fS(t,e){Zr()||he(!1);let n=S.exports.useContext(gd),{matches:r}=S.exports.useContext(xs),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let l=Wl(),a;if(e){var u;let _=typeof e=="string"?sr(e):e;o==="/"||((u=_.pathname)==null?void 0:u.startsWith(o))||he(!1),a=_}else a=l;let c=a.pathname||"/",d=o==="/"?c:c.slice(o.length)||"/",h=IE(t,{pathname:d}),p=_S(h&&h.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:fn([o,_.pathname]),pathnameBase:_.pathnameBase==="/"?o:fn([o,_.pathnameBase])})),r,n||void 0);return e&&p?v(Bl.Provider,{value:{location:Qu({pathname:"/",search:"",hash:"",state:null,key:"default"},a),navigationType:rn.Pop},children:p}):p}function pS(){let t=yS(),e=VE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return j(JE,{children:[v("h2",{children:"Unhandled Thrown Error!"}),v("h3",{style:{fontStyle:"italic"},children:e}),n?v("pre",{style:i,children:n}):null,v("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),j("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",v("code",{style:s,children:"errorElement"})," props on\xA0",v("code",{style:s,children:"<Route>"})]})]})}class mS extends S.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?v(u_.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function gS(t){let{routeContext:e,match:n,children:r}=t,i=S.exports.useContext(cS);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),v(xs.Provider,{value:e,children:r})}function _S(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||he(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||v(pS,{}):null,c=()=>v(gS,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,l+1))},children:a?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||l===0)?v(mS,{location:n.location,component:u,error:a,children:c()}):c()},null)}var Rf;(function(t){t.UseRevalidator="useRevalidator"})(Rf||(Rf={}));var Yu;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Yu||(Yu={}));function vS(t){let e=S.exports.useContext(gd);return e||he(!1),e}function yS(){var t;let e=S.exports.useContext(u_),n=vS(Yu.UseRouteError),r=S.exports.useContext(xs),i=r.matches[r.matches.length-1];return e||(r||he(!1),i.route.id||he(!1),(t=n.errors)==null?void 0:t[i.route.id])}function wS(t){let{to:e,replace:n,state:r,relative:i}=t;Zr()||he(!1);let s=S.exports.useContext(gd),o=ei();return S.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function An(t){he(!1)}function ES(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rn.Pop,navigator:s,static:o=!1}=t;Zr()&&he(!1);let l=e.replace(/^\/*/,"/"),a=S.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=sr(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:p="default"}=r,_=S.exports.useMemo(()=>{let y=s_(u,l);return y==null?null:{pathname:y,search:c,hash:d,state:h,key:p}},[l,u,c,d,h,p]);return _==null?null:v(_d.Provider,{value:a,children:v(Bl.Provider,{children:n,value:{location:_,navigationType:i}})})}function SS(t){let{children:e,location:n}=t,r=S.exports.useContext(dS),i=r&&!e?r.router.routes:Xu(e);return fS(i,n)}var Af;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Af||(Af={}));new Promise(()=>{});function Xu(t,e){e===void 0&&(e=[]);let n=[];return S.exports.Children.forEach(t,(r,i)=>{if(!S.exports.isValidElement(r))return;if(r.type===S.exports.Fragment){n.push.apply(n,Xu(r.props.children,e));return}r.type!==An&&he(!1),!r.props.index||!r.props.children||he(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Xu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function IS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kS(t,e){return t.button===0&&(!e||e==="_self")&&!CS(t)}const TS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function NS(t){let{basename:e,children:n,window:r}=t,i=S.exports.useRef();i.current==null&&(i.current=vE({window:r,v5Compat:!0}));let s=i.current,[o,l]=S.exports.useState({action:s.action,location:s.location});return S.exports.useLayoutEffect(()=>s.listen(l),[s]),v(ES,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const qn=S.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=IS(e,TS),h=hS(u,{relative:i}),p=xS(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function _(y){r&&r(y),y.defaultPrevented||p(y)}return v("a",{...d,href:h,onClick:s?r:_,ref:n,target:a})});var Pf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Pf||(Pf={}));var Of;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Of||(Of={}));function xS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=ei(),a=Wl(),u=c_(t,{relative:o});return S.exports.useCallback(c=>{if(kS(c,n)){c.preventDefault();let d=r!==void 0?r:us(a)===us(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}function RS({onClick:t,icon:e}){return j("div",{className:"relative w-6 h-6 lg:w-12 lg:h-12 m-2",children:[v("button",{className:"absolute top-0 border border-black dark:border-white bg-white cursor-pointer rounded w-6 h-6 lg:w-12 lg:h-12 z-10",onClick:t}),v("img",{className:"absolute top-0 p-[3]px w-full h-full z-20 pointer-events-none",alt:"icon",src:e})]})}function AS(){const{character:t}=S.exports.useContext(Qy);return j("div",{children:[v("h1",{className:"text-base lg:text-xl font-bold",children:"Character"}),j("p",{children:["Name: ",t.name]}),j("p",{children:["Level: ",t.level]}),j("p",{children:["HP: ",t.currentHp,"/",t.hpMax]}),j("p",{children:["Encumbrence: ",t.encumbrence,"/",t.encumbrenceMax]})]})}function PS({changeTheme:t,themeIcon:e}){return j("div",{className:"flex flex-col p-2 w-1/5 h-full",children:[v(RS,{onClick:t,icon:e}),v(AS,{})]})}const Ma="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUvSURBVHic7ZtraB1FFMd/aWybFlpj1ZhaNYmkD2nrO0rFB9QX0qr1VXyAVMEoVT9IFHxBQVHQSrUKar+ooFawleIDivgCWwxofdZi1OpVa1EbK2rMw7yuH04XZs9s7r17d2Z31fxgPuzcnbP/mTtzZubsLIwzjmsOAe4CvgV+Ba7OVk56tALPAX8DRSP1AvtnqMs7M4A12BUP0ghQn5k6z1wEdBNd8SB9kJk6j0wB1lK64kG6NyON3jgU+JToyn4NDKi8U7OR6Ye5QAG74v3AKuBAYFTl75eJUg8sIHq8dwHz991zdMRv/wmagB+xK78RmGbcd7H6fXO6MuMzoYJ7ZgCvA7NU/pPAcqDHyDtM3VOoXlo6lGuAGuApZOybPAysRMa7yUR1vbd6aelQrgFuAi5UeRuBDqSLa7TDq6SHZUopga3AgyrvfWRtH1V5gNoy17mjVAM8AtQZ138iY76/RBn9W+6nwLEaYCmwROV1AN+XsbdbXc+sRlQe2EZ4OnsbcYjlOEWV2+ZLoE/OJFyJUeCkCsseocr2UFnD5YrNhCuxKUbZGiQIYpZvci3QJ43AMOEKnBbTxiuq/HUuBbpGO8HLCU9dXcDWmDa3qOulcUVlyRbC/15HFTbalI2/CE+nuWUqdlhrXhV2apC4gGnnCkcavbKYsOhdCWytUrY+4V8wG9xBWPQzCWy1EA6MFIGzEurzgukE56jfPk9gtwC8pvLuTGAvFbYS/sfOS2hvIRISN21eldCmV74juQPUbFA2u4GDHNj1wl7CYl1sZI7CjhI/78CuF/QUONWR3duV3WrXF97RS2BXi5daoFPZHgEucWTfGX8QFulyrM5FAiqm/T5y9tJkN2GBLY7tnwsMYjdCbnrCx4TFne7hGddi+4MRcuITXiQs7HpPz9ErTnN2yHSKvF8JWuvxWddgD4cisIcMF0vLlZgPPT/vHGzHaMYgU987NGKPTd9dcg7wHtGNUAQ+Aq5EziO44IB9aUy+VALS6I61yGJJrxjN1IuE2tqB5hi2JwJnAPchEeoRYAi4IbhB79FXA7ca128gXTUN5gH3AJdG6NL0Al8hf9gPSCMF1CNTeAsSkJ0UUf435CyDxfHYw6C5wgq44hjgZeydpMv0TSkBX6ibH3JYuTg0AXdjD0sXqWRsYqW6uQ85F5QlJwC3AC8BP1N5RUexfcsA0BAYjhprU5DYQIOR9wTSMHlhJnIYYxbyNiqYJfqQXe1PSDf/BXF+zUbZZ6ng9Krewg4Di5xIT5c12P/+kZUUnIx4WbNwF+7m4zRow97ir45j4HzsMbXOrUZv1GM78z2UWQRF8QJ2I9zsTKYfJgFvYeu+oBpj04GdytAQ9rmhPPE0duUfT2KwDTn6YhocBC5LJNM9E4BHid5PJI5vLsN2KMP4ixnEpQ47BF9EPtpodPWQ9ogHFJEul+XsMBs5vaZ1dWO/7UpMO3ZPKALbkfNBaVKDhNh6IvTsQs42e2EZtk8oIpuXdcg3Q75ZhB1qD9IO4HDfAk7Enh3MvcNjyBLVNYuRuIB+8xykDaT4ec50YP0YQoIe8SawgioWIAbzkUDq9hLP6qNKh+zi0MIS5FRpa4l7RpHX7e8CnyGvzwtIYCKgDjgY2XkuRGITJ1P+/cQmJKxeqEK7MyYDtyG7sDj78iSpEzg7jcrFoQ7pijvwU+kh4FUkzpd7jgUeIHlj9APvADcSjlE4Ia2DSw3IgcvjEF8xGwm5T0O89iBynO53ZA7fiZw060S+OxxISec4/zv+ATe8egSmBsifAAAAAElFTkSuQmCC",ao="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAC7gAAAu4Bks13cwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASxSURBVHic7ZtNaFVHFMd/J+YDHglaqLgQJBFE2mehYLS460KkFltqXZR268qFrsUupIvgSogLwYW4UVDIplKhm+4lpW5SE7ISLLiotimlUHx5SU4XM21f5s28N/feue/e4DtwyLuXmfPxn8/7n4moKlWIiJwE5uzj16r6QyVxVAGAiOwCngEH7KtfgIOqujnoWEYG7dBKk/+Tx/5uVhFIVQD4/FYSS1UA1EaGAFQdQNUyBCC2oIjsF5FGIr/tyHeZRUQaIrI/uoKq9lXgJrAB/A5cjKnTx54Aq4BaXcXuSQravWhj3ABuRtWJMHoI2OoIVoHLCYKdBR5anU1g77IT4xZwKAUA+4B1x3gSEFKpJ3m1Me8rDIB1cMPjoBYgBJJX4EZU/UgnI8CduoHQI/k7wEgyACJAOF5B8seLJp8JgD4gXM+ZRANo5Kx7vWjymQHoAcKpiHp7gK+AB8DPwFpH/TX77j7wBTAVYe9U0eRzAWCdC/A5cM/+Da7hwGFgIbCShPQ1cBeY6RPDORvD2V4xJAcgEqTdwC3MDi82cVdbwDwwWVqcJSV/EFgpkLirS8B0GbEmp8RE5APgEfB2oEgbWAaeWAU4arUJjAXqvQI+UdXFdNGStgcA08BLwq34ITDRo/6ELbMUsPEKwx3WbwgAk4HANzDs73gGW+O2zobH3gqwu44AzHuCfQYcK2DzmLXh2r1VKwCAGcyM7bZ87uQdENye0AYO1wmAu55WmkvYu+Y89hdqAQAwhdm4uBNe9JiP8DHumV/WgT1FbafgBD/GzN6dcklV1xPYBsDauuS8HrO+C0kKAD5zntvA4wR2XXlMN2/4aVGjo/DfWV0TPyBtYEVtX/TIEed5WVVbRQNzRVVbIrIMvN/xOnicJiICvIt/Y7WFiXMT4CTwnN5b0VUCvB3bv+oUuJ1q7Ht83XZ8rQXKzbKddPXpc5s7i30K/qsPPY4annIXSgTggsdfF5+AIVpjclocYXg4wmnM+fwbOQRGVfV7EZkh/yT4Anir4/loJviziWv7ha+Qqv4kIu8QMQmO2gqbmI1GHnnK9pWgKSITqVcCEZmge9Z/GipvG2y5n90U4/9b53kMOJHArisn6G5N13d2STAuq9oKvyaCPO2nhXuAqv6FIT075T3galHbHXLV2uyUBeu7mCRqoUF/DrfowRhnsp+wmw6SEJlPFndCAAZFiS2RkCZPBoANfJpySdGXJKbHy6LFvwP2BorkpcV/A85onWlxpyeEWjGPrpCYDi9lCDggTGImRnd1yKJtzPFaMho8CQCYg8mzmIPJc/Q+HJ3BkKbuZqmXrmP2FkHmF9iFOUm+B5weGADkPx6fsgHfJ3w8/gBzhN6X7AS+dGK4VjoAgeSVai5I+Kj4zCCkSF6p5orMR4FYMoGQIvkqL0ldKwpCrKM6X5MLgXAlCQDsjIuSPhD+JOauUYTxnXJV1gWhRcKbojvlsvQV2/It4JuYOtHfAvYK+h+q+ndUhd62mnTzeUdUtS+HF2F7CrO0/hpTfjTWsKp6Gdic4vvgCX0EZRI1LFE0U/TGH4oMAag6gKplCEBFfrci35Uuw3+eHrRDAJvoeeBHq+erSB7gH8F+2j0aLdzTAAAAAElFTkSuQmCC",OS="modulepreload",DS=function(t){return"/stars-of-redemption/"+t},Df={},Rs=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=DS(s),s in Df)return;Df[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":OS,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},bS="/stars-of-redemption/assets/loadingAnimation.ba87fbb8.svg";function LS(){return j("div",{className:"w-full h-full p-4",children:[v("h2",{children:"Loading..."}),v("div",{className:"w-4 h-4",children:v("img",{src:bS,alt:"loading animation"})})]})}const MS=S.exports.lazy(()=>As(500).then(()=>Rs(()=>import("./CharacterCreationScreen.8ed27b21.js"),[]))),FS=S.exports.lazy(()=>As(500).then(()=>Rs(()=>import("./CharacterScreen.966727d0.js"),[]))),US=S.exports.lazy(()=>As(500).then(()=>Rs(()=>import("./Adventure.d3de9318.js"),[]))),zS=S.exports.lazy(()=>As(500).then(()=>Rs(()=>import("./Encyclopedia.342950f7.js"),[]))),BS=S.exports.lazy(()=>As(500).then(()=>Rs(()=>import("./BattleScreen.f43e66d2.js"),[])));function As(t){return new Promise(e=>{setTimeout(e,t)})}function WS(){const{gameState:t}=S.exports.useContext(fh);function e(){switch(t){case"character-creation":return v(MS,{});case"character-screen":return v(FS,{});case"adventure":return v(US,{});case"encyclopedia":return v(zS,{});case"battle":return v(BS,{});case"settings":return v("div",{children:"settings"});case"menu":return v("div",{children:"Menu"});default:throw new Error(`Unknown game state(${t}) in Main Screen component!`)}}return v(S.exports.Suspense,{fallback:v(LS,{}),children:v("div",{className:"w-full h-full p-4",children:e()})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw ti(e)},ti=function(t){return new Error("Firebase Database ("+d_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(h=64)),r.push(n[c],n[d],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(h_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw Error();const h=s<<2|l>>4;if(r.push(h),u!==64){const p=l<<4&240|u>>2;if(r.push(p),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},f_=function(t){const e=h_(t);return vd.encodeByteArray(e,!0)},Zo=function(t){return f_(t).replace(/\./g,"")},el=function(t){try{return vd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){return p_(void 0,t)}function p_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!VS(n)||(t[n]=p_(t[n],e[n]));return t}function VS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function m_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function g_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $S(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function __(){return d_.NODE_ADMIN===!0}function v_(){return typeof indexedDB=="object"}function y_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function GS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function KS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=()=>KS().__FIREBASE_DEFAULTS__,QS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&el(t[1]);return e&&JSON.parse(e)},wd=()=>{try{return qS()||QS()||YS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w_=t=>{var e,n;return(n=(e=wd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XS=t=>{const e=w_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},JS=()=>{var t;return(t=wd())===null||t===void 0?void 0:t.config},E_=t=>{var e;return(e=wd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Zo(JSON.stringify(n)),Zo(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eI,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,l,r)}}function tI(t,e){return t.replace(nI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){return JSON.parse(t)}function ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=cs(el(s[0])||""),n=cs(el(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},rI=function(t){const e=S_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iI=function(t){const e=S_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $r(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ds(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bf(s)&&bf(o)){if(!ds(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ri(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function oI(t,e){const n=new lI(t,e);return n.subscribe.bind(n)}class lI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fa),i.error===void 0&&(i.error=Fa),i.complete===void 0&&(i.complete=Fa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fa(){}function Ed(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=1e3,dI=2,hI=4*60*60*1e3,fI=.5;function Lf(t,e=cI,n=dI){const r=e*Math.pow(n,t),i=Math.round(fI*r*(Math.random()-.5)*2);return Math.min(hI,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t){return t&&t._delegate?t._delegate:t}class mt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gI(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mI(t){return t===Pn?void 0:t}function gI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const vI={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},yI=V.INFO,wI={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},EI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vl{constructor(e){this.name=e,this._logLevel=yI,this._logHandler=EI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const SI=(t,e)=>e.some(n=>t instanceof n);let Mf,Ff;function II(){return Mf||(Mf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CI(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const I_=new WeakMap,Zu=new WeakMap,C_=new WeakMap,Ua=new WeakMap,Sd=new WeakMap;function kI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&I_.set(n,t)}).catch(()=>{}),Sd.set(e,t),e}function TI(t){if(Zu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zu.set(t,e)}let ec={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NI(t){ec=t(ec)}function xI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(za(this),e,...n);return C_.set(r,e.sort?e.sort():[e]),pn(r)}:CI().includes(t)?function(...e){return t.apply(za(this),e),pn(I_.get(this))}:function(...e){return pn(t.apply(za(this),e))}}function RI(t){return typeof t=="function"?xI(t):(t instanceof IDBTransaction&&TI(t),SI(t,II())?new Proxy(t,ec):t)}function pn(t){if(t instanceof IDBRequest)return kI(t);if(Ua.has(t))return Ua.get(t);const e=RI(t);return e!==t&&(Ua.set(t,e),Sd.set(e,t)),e}const za=t=>Sd.get(t);function k_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(pn(o.result),a.oldVersion,a.newVersion,pn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const AI=["get","getKey","getAll","getAllKeys","count"],PI=["put","add","delete","clear"],Ba=new Map;function Uf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ba.get(e))return Ba.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AI.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ba.set(e,s),s}NI(t=>({...t,get:(e,n,r)=>Uf(e,n)||t.get(e,n,r),has:(e,n)=>!!Uf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tc="@firebase/app",zf="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Vl("@firebase/app"),bI="@firebase/app-compat",LI="@firebase/analytics-compat",MI="@firebase/analytics",FI="@firebase/app-check-compat",UI="@firebase/app-check",zI="@firebase/auth",BI="@firebase/auth-compat",WI="@firebase/database",jI="@firebase/database-compat",HI="@firebase/functions",VI="@firebase/functions-compat",$I="@firebase/installations",GI="@firebase/installations-compat",KI="@firebase/messaging",qI="@firebase/messaging-compat",QI="@firebase/performance",YI="@firebase/performance-compat",XI="@firebase/remote-config",JI="@firebase/remote-config-compat",ZI="@firebase/storage",eC="@firebase/storage-compat",tC="@firebase/firestore",nC="@firebase/firestore-compat",rC="firebase",iC="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="[DEFAULT]",sC={[tc]:"fire-core",[bI]:"fire-core-compat",[MI]:"fire-analytics",[LI]:"fire-analytics-compat",[UI]:"fire-app-check",[FI]:"fire-app-check-compat",[zI]:"fire-auth",[BI]:"fire-auth-compat",[WI]:"fire-rtdb",[jI]:"fire-rtdb-compat",[HI]:"fire-fn",[VI]:"fire-fn-compat",[$I]:"fire-iid",[GI]:"fire-iid-compat",[KI]:"fire-fcm",[qI]:"fire-fcm-compat",[QI]:"fire-perf",[YI]:"fire-perf-compat",[XI]:"fire-rc",[JI]:"fire-rc-compat",[ZI]:"fire-gcs",[eC]:"fire-gcs-compat",[tC]:"fire-fst",[nC]:"fire-fst-compat","fire-js":"fire-js",[rC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Map,rc=new Map;function oC(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ct(t){const e=t.name;if(rc.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,t);for(const n of nl.values())oC(n,t);return!0}function lr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mn=new or("app","Firebase",lC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=iC;function T_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=JS()),!n)throw mn.create("no-options");const s=nl.get(i);if(s){if(ds(n,s.options)&&ds(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new _I(i);for(const a of rc.values())o.addComponent(a);const l=new aC(n,r,o);return nl.set(i,l),l}function Id(t=nc){const e=nl.get(t);if(!e&&t===nc)return T_();if(!e)throw mn.create("no-app",{appName:t});return e}function Ze(t,e,n){var r;let i=(r=sC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(l.join(" "));return}Ct(new mt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="firebase-heartbeat-database",cC=1,hs="firebase-heartbeat-store";let Wa=null;function N_(){return Wa||(Wa=k_(uC,cC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hs)}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),Wa}async function dC(t){var e;try{return(await N_()).transaction(hs).objectStore(hs).get(x_(t))}catch(n){if(n instanceof Tt)Qn.warn(n.message);else{const r=mn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Qn.warn(r.message)}}}async function Bf(t,e){var n;try{const i=(await N_()).transaction(hs,"readwrite");return await i.objectStore(hs).put(e,x_(t)),i.done}catch(r){if(r instanceof Tt)Qn.warn(r.message);else{const i=mn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Qn.warn(i.message)}}}function x_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=1024,fC=30*24*60*60*1e3;class pC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=fC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wf(),{heartbeatsToSend:n,unsentEntries:r}=mC(this._heartbeatsCache.heartbeats),i=Zo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wf(){return new Date().toISOString().substring(0,10)}function mC(t,e=hC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return v_()?y_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jf(t){return Zo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){Ct(new mt("platform-logger",e=>new OI(e),"PRIVATE")),Ct(new mt("heartbeat",e=>new pC(e),"PRIVATE")),Ze(tc,zf,t),Ze(tc,zf,"esm2017"),Ze("fire-js","")}_C("");var vC="firebase",yC="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze(vC,yC,"app");function Cd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function R_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wC=R_,A_=new or("auth","Firebase",R_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new Vl("@firebase/auth");function ko(t,...e){Hf.logLevel<=V.ERROR&&Hf.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,...e){throw kd(t,...e)}function St(t,...e){return kd(t,...e)}function EC(t,e,n){const r=Object.assign(Object.assign({},wC()),{[e]:n});return new or("auth","Firebase",r).create(e,{appName:t.name})}function kd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return A_.create(t,...e)}function P(t,e,...n){if(!t)throw kd(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function Bt(t,e){t||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new Map;function Ot(t){Bt(t instanceof Function,"Expected a class definition");let e=Vf.get(t);return e?(Bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t,e){const n=lr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ds(s,e!=null?e:{}))return i;gt(i,"already-initialized")}return n.initialize({options:e})}function IC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CC(){return $f()==="http:"||$f()==="https:"}function $f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CC()||m_()||"connection"in navigator)?navigator.onLine:!0}function TC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bt(n>e,"Short delay should be less than long delay!"),this.isMobile=yd()||g_()}get(){return kC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t,e){Bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=new Os(3e4,6e4);function ri(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ii(t,e,n,r,i={}){return O_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ni(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),P_.fetch()(D_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function O_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NC),e);try{const i=new RC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw uo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw uo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw uo(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw EC(t,c,u);gt(t,c)}}catch(i){if(i instanceof Tt)throw i;gt(t,"network-request-failed")}}async function Ds(t,e,n,r,i={}){const s=await ii(t,e,n,r,i);return"mfaPendingCredential"in s&&gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function D_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Td(t.config,i):`${t.config.apiScheme}://${i}`}class RC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),xC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=St(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e){return ii(t,"POST","/v1/accounts:delete",e)}async function PC(t,e){return ii(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OC(t,e=!1){const n=fe(t),r=await n.getIdToken(e),i=Nd(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zi(ja(i.auth_time)),issuedAtTime:zi(ja(i.iat)),expirationTime:zi(ja(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ja(t){return Number(t)*1e3}function Nd(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const s=el(r);return s?JSON.parse(s):(ko("Failed to decode base64 JWT payload"),null)}catch(s){return ko("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function DC(t){const e=Nd(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&bC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Gr(t,PC(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UC(s.providerUserInfo):[],l=FC(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new b_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function MC(t){const e=fe(t);await rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UC(t){return t.map(e=>{var{providerId:n}=e,r=Cd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e){const n=await O_(t,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=D_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",P_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await zC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fs;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new b_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OC(this,e)}reload(){return MC(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gr(this,AC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,A=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:C,providerData:N,stsTokenManager:x}=n;P(g&&x,e,"internal-error");const R=fs.fromJSON(this.name,x);P(typeof g=="string",e,"internal-error"),Gt(d,e.name),Gt(h,e.name),P(typeof w=="boolean",e,"internal-error"),P(typeof C=="boolean",e,"internal-error"),Gt(p,e.name),Gt(_,e.name),Gt(y,e.name),Gt(A,e.name),Gt(m,e.name),Gt(f,e.name);const q=new Wn({uid:g,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:C,photoURL:_,phoneNumber:p,tenantId:y,stsTokenManager:R,createdAt:m,lastLoginAt:f});return N&&Array.isArray(N)&&(q.providerData=N.map(M=>Object.assign({},M))),A&&(q._redirectEventId=A),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new fs;i.updateFromServerResponse(n);const s=new Wn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await rl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}L_.type="NONE";const Gf=L_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e,n){return`firebase:${t}:${e}:${n}`}class Dr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=To(this.userKey,i.apiKey,s),this.fullPersistenceKey=To("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Dr(Ot(Gf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ot(Gf);const o=To(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Wn._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Dr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Dr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(U_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(M_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B_(e))return"Blackberry";if(W_(e))return"Webos";if(xd(e))return"Safari";if((e.includes("chrome/")||F_(e))&&!e.includes("edge/"))return"Chrome";if(z_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function M_(t=xe()){return/firefox\//i.test(t)}function xd(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function F_(t=xe()){return/crios\//i.test(t)}function U_(t=xe()){return/iemobile/i.test(t)}function z_(t=xe()){return/android/i.test(t)}function B_(t=xe()){return/blackberry/i.test(t)}function W_(t=xe()){return/webos/i.test(t)}function $l(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BC(t=xe()){var e;return $l(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WC(){return $S()&&document.documentMode===10}function j_(t=xe()){return $l(t)||z_(t)||W_(t)||B_(t)||/windows phone/i.test(t)||U_(t)}function jC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t,e=[]){let n;switch(t){case"Browser":n=Kf(xe());break;case"Worker":n=`${Kf(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qf(this),this.idTokenSubscription=new qf(this),this.beforeStateQueue=new HC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await rl(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?fe(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ot(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return P(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=H_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function bs(t){return fe(t)}class qf{constructor(e){this.auth=e,this.observer=null,this.addObserver=oI(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function $C(t,e,n){const r=bs(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=V_(e),{host:o,port:l}=GC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||KC()}function V_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GC(t){const e=V_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qf(o)}}}function Qf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function $_(t,e){return ii(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e){return Ds(t,"POST","/v1/accounts:signInWithPassword",ri(t,e))}async function QC(t,e){return ii(t,"POST","/v1/accounts:sendOobCode",ri(t,e))}async function YC(t,e){return QC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e){return Ds(t,"POST","/v1/accounts:signInWithEmailLink",ri(t,e))}async function JC(t,e){return Ds(t,"POST","/v1/accounts:signInWithEmailLink",ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends Rd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ps(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ps(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return XC(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return $_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JC(e,{idToken:n,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(t,e){return Ds(t,"POST","/v1/accounts:signInWithIdp",ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="http://localhost";class Yn extends Rd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return br(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,br(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,br(e,n)}buildRequest(){const e={requestUri:ZC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tk(t){const e=xi(Ri(t)).link,n=e?xi(Ri(e)).deep_link_id:null,r=xi(Ri(t)).deep_link_id;return(r?xi(Ri(r)).link:null)||r||n||e||t}class Ad{constructor(e){var n,r,i,s,o,l;const a=xi(Ri(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=ek((i=a.mode)!==null&&i!==void 0?i:null);P(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=tk(e);try{return new Ad(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(e,n){return ps._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ad.parseLink(n);return P(r,"argument-error"),ps._fromEmailAndCode(e,r.code,r.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends G_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ls{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Ls{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ls{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return en.credential(n,r)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,e){return Ds(t,"POST","/v1/accounts:signUp",ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wn._fromIdTokenResponse(e,r,i),o=Yf(r);return new Xn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yf(r);return new Xn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Tt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,il.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new il(e,n,r,i)}}function K_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?il._fromErrorAndOperation(t,s,e,r):s})}async function rk(t,e,n=!1){const r=await Gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Gr(t,K_(i,s,e,t),n);P(o.idToken,i,"internal-error");const l=Nd(o.idToken);P(l,i,"internal-error");const{sub:a}=l;return P(t.uid===a,i,"user-mismatch"),Xn._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&gt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(t,e,n=!1){const r="signIn",i=await K_(t,r,e),s=await Xn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function sk(t,e){return q_(bs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t,e,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(t,e,n){const r=fe(t),i={requestType:"PASSWORD_RESET",email:e};n&&ok(r,i,n),await YC(r,i)}async function ak(t,e,n){const r=bs(t),i=await nk(r,{returnSecureToken:!0,email:e,password:n}),s=await Xn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function uk(t,e,n){return sk(fe(t),si.credential(e,n))}function ck(t,e){return Q_(fe(t),e,null)}function dk(t,e){return Q_(fe(t),null,e)}async function Q_(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Gr(t,$_(r,s));await t._updateTokensIfNecessary(o,!0)}function hk(t,e,n,r){return fe(t).onIdTokenChanged(e,n,r)}function fk(t,e,n){return fe(t).beforeAuthStateChanged(e,n)}function pk(t){return fe(t).signOut()}const sl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sl,"1"),this.storage.removeItem(sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){const t=xe();return xd(t)||$l(t)}const gk=1e3,_k=10;class X_ extends Y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mk()&&jC(),this.fallbackToPolling=j_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);WC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_k):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}X_.type="LOCAL";const vk=X_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_ extends Y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}J_.type="SESSION";const Z_=J_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await yk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Pd("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function Ek(t){It().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function Sk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ik(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ck(){return ev()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="firebaseLocalStorageDb",kk=1,ol="firebaseLocalStorage",nv="fbase_key";class Ms{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kl(t,e){return t.transaction([ol],e?"readwrite":"readonly").objectStore(ol)}function Tk(){const t=indexedDB.deleteDatabase(tv);return new Ms(t).toPromise()}function sc(){const t=indexedDB.open(tv,kk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ol,{keyPath:nv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ol)?e(r):(r.close(),await Tk(),e(await sc()))})})}async function Xf(t,e,n){const r=Kl(t,!0).put({[nv]:e,value:n});return new Ms(r).toPromise()}async function Nk(t,e){const n=Kl(t,!1).get(e),r=await new Ms(n).toPromise();return r===void 0?null:r.value}function Jf(t,e){const n=Kl(t,!0).delete(e);return new Ms(n).toPromise()}const xk=800,Rk=3;class rv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ev()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gl._getInstance(Ck()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Sk(),!this.activeServiceWorker)return;this.sender=new wk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ik()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sc();return await Xf(e,sl,"1"),await Jf(e,sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Nk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kl(i,!1).getAll();return new Ms(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rv.type="LOCAL";const Ak=rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ok(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=St("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Pk().appendChild(r)})}function Dk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Os(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t,e){return e?Ot(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends Rd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Lk(t){return q_(t.auth,new Od(t),t.bypassAuthState)}function Mk(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),ik(n,new Od(t),t.bypassAuthState)}async function Fk(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),rk(n,new Od(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lk;case"linkViaPopup":case"linkViaRedirect":return Fk;case"reauthViaPopup":case"reauthViaRedirect":return Mk;default:gt(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=new Os(2e3,1e4);class kr extends iv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kr.currentPopupAction&&kr.currentPopupAction.cancel(),kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=Pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Uk.get())};e()}}kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="pendingRedirect",No=new Map;class Bk extends iv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=No.get(this.auth._key());if(!e){try{const r=await Wk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}No.set(this.auth._key(),e)}return this.bypassAuthState||No.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wk(t,e){const n=Vk(e),r=Hk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jk(t,e){No.set(t._key(),e)}function Hk(t){return Ot(t._redirectPersistence)}function Vk(t){return To(zk,t.config.apiKey,t.name)}async function $k(t,e,n=!1){const r=bs(t),i=bk(r,e),o=await new Bk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=10*60*1e3;class Kk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zf(e))}saveEventToCache(e){this.cachedEventUids.add(Zf(e)),this.lastProcessedEventTime=Date.now()}}function Zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e={}){return ii(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xk=/^https?/;async function Jk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qk(t);for(const n of e)try{if(Zk(n))return}catch{}gt(t,"unauthorized-domain")}function Zk(t){const e=ic(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Xk.test(n))return!1;if(Yk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=new Os(3e4,6e4);function ep(){const t=It().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tT(t){return new Promise((e,n)=>{var r,i,s;function o(){ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ep(),n(St(t,"network-request-failed"))},timeout:eT.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=It().gapi)===null||s===void 0)&&s.load)o();else{const l=Dk("iframefcb");return It()[l]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},Ok(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw xo=null,e})}let xo=null;function nT(t){return xo=xo||tT(t),xo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=new Os(5e3,15e3),iT="__/auth/iframe",sT="emulator/auth/iframe",oT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aT(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Td(e,sT):`https://${t.config.authDomain}/${iT}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},i=lT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ni(r).slice(1)}`}async function uT(t){const e=await nT(t),n=It().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:aT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),l=It().setTimeout(()=>{s(o)},rT.get());function a(){It().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dT=500,hT=600,fT="_blank",pT="http://localhost";class tp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mT(t,e,n,r=dT,i=hT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},cT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=xe().toLowerCase();n&&(l=F_(u)?fT:n),M_(u)&&(e=e||pT,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[p,_])=>`${h}${p}=${_},`,"");if(BC(u)&&l!=="_self")return gT(e||"",l),new tp(null);const d=window.open(e||"",l,c);P(d,t,"popup-blocked");try{d.focus()}catch{}return new tp(d)}function gT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="__/auth/handler",vT="emulator/auth/handler";function np(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:i};if(e instanceof G_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Ls){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${yT(t)}?${ni(l).slice(1)}`}function yT({config:t}){return t.emulator?Td(t,vT):`https://${t.authDomain}/${_T}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="webStorageSupport";class wT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z_,this._completeRedirectFn=$k,this._overrideRedirectResult=jk}async _openPopup(e,n,r,i){var s;Bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=np(e,n,r,ic(),i);return mT(e,o,Pd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Ek(np(e,n,r,ic(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uT(e),r=new Kk(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ha,{type:Ha},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ha];o!==void 0&&n(!!o),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return j_()||xd()||$l()}}const ET=wT;var rp="@firebase/auth",ip="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CT(t){Ct(new mt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{P(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),P(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:H_(t)},c=new VC(l,a,u);return IC(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ct(new mt("auth-internal",e=>{const n=bs(e.getProvider("auth").getImmediate());return(r=>new ST(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(rp,ip,IT(t)),Ze(rp,ip,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=5*60,TT=E_("authIdTokenMaxAge")||kT;let sp=null;const NT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TT)return;const i=n==null?void 0:n.token;sp!==i&&(sp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xT(t=Id()){const e=lr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SC(t,{popupRedirectResolver:ET,persistence:[Ak,vk,Z_]}),r=E_("authTokenSyncURL");if(r){const s=NT(r);fk(n,s,()=>s(n.currentUser)),hk(n,o=>s(o))}const i=w_("auth");return i&&$C(n,`http://${i}`),n}CT("Browser");const ov="@firebase/installations",Dd="0.5.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=1e4,av=`w:${Dd}`,uv="FIS_v2",RT="https://firebaseinstallations.googleapis.com/v1",AT=60*60*1e3,PT="installations",OT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Jn=new or(PT,OT,DT);function cv(t){return t instanceof Tt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv({projectId:t}){return`${RT}/projects/${t}/installations`}function hv(t){return{token:t.token,requestStatus:2,expiresIn:LT(t.expiresIn),creationTime:Date.now()}}async function fv(t,e){const r=(await e.json()).error;return Jn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function pv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function bT(t,{refreshToken:e}){const n=pv(t);return n.append("Authorization",MT(e)),n}async function mv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function LT(t){return Number(t.replace("s","000"))}function MT(t){return`${uv} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=dv(t),i=pv(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:uv,appId:t.appId,sdkVersion:av},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await mv(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:hv(u.authToken)}}else throw await fv("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=/^[cdef][\w-]{21}$/,oc="";function BT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=WT(t);return zT.test(n)?n:oc}catch{return oc}}function WT(t){return UT(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new Map;function vv(t,e){const n=ql(t);yv(n,e),jT(n,e)}function yv(t,e){const n=_v.get(t);if(!!n)for(const r of n)r(e)}function jT(t,e){const n=HT();n&&n.postMessage({key:t,fid:e}),VT()}let Mn=null;function HT(){return!Mn&&"BroadcastChannel"in self&&(Mn=new BroadcastChannel("[Firebase] FID Change"),Mn.onmessage=t=>{yv(t.data.key,t.data.fid)}),Mn}function VT(){_v.size===0&&Mn&&(Mn.close(),Mn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="firebase-installations-database",GT=1,Zn="firebase-installations-store";let Va=null;function bd(){return Va||(Va=k_($T,GT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zn)}}})),Va}async function ll(t,e){const n=ql(t),i=(await bd()).transaction(Zn,"readwrite"),s=i.objectStore(Zn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&vv(t,e.fid),e}async function wv(t){const e=ql(t),r=(await bd()).transaction(Zn,"readwrite");await r.objectStore(Zn).delete(e),await r.done}async function Ql(t,e){const n=ql(t),i=(await bd()).transaction(Zn,"readwrite"),s=i.objectStore(Zn),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&vv(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ld(t){let e;const n=await Ql(t.appConfig,r=>{const i=KT(r),s=qT(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===oc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function KT(t){const e=t||{fid:BT(),registrationStatus:0};return Ev(e)}function qT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Jn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=QT(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:YT(t)}:{installationEntry:e}}async function QT(t,e){try{const n=await FT(t,e);return ll(t.appConfig,n)}catch(n){throw cv(n)&&n.customData.serverCode===409?await wv(t.appConfig):await ll(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function YT(t){let e=await op(t.appConfig);for(;e.registrationStatus===1;)await gv(100),e=await op(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ld(t);return r||n}return e}function op(t){return Ql(t,e=>{if(!e)throw Jn.create("installation-not-found");return Ev(e)})}function Ev(t){return XT(t)?{fid:t.fid,registrationStatus:0}:t}function XT(t){return t.registrationStatus===1&&t.registrationTime+lv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT({appConfig:t,heartbeatServiceProvider:e},n){const r=ZT(t,n),i=bT(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:av,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await mv(()=>fetch(r,l));if(a.ok){const u=await a.json();return hv(u)}else throw await fv("Generate Auth Token",a)}function ZT(t,{fid:e}){return`${dv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md(t,e=!1){let n;const r=await Ql(t.appConfig,s=>{if(!Sv(s))throw Jn.create("not-registered");const o=s.authToken;if(!e&&n1(o))return s;if(o.requestStatus===1)return n=e1(t,e),s;{if(!navigator.onLine)throw Jn.create("app-offline");const l=i1(s);return n=t1(t,l),l}});return n?await n:r.authToken}async function e1(t,e){let n=await lp(t.appConfig);for(;n.authToken.requestStatus===1;)await gv(100),n=await lp(t.appConfig);const r=n.authToken;return r.requestStatus===0?Md(t,e):r}function lp(t){return Ql(t,e=>{if(!Sv(e))throw Jn.create("not-registered");const n=e.authToken;return s1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function t1(t,e){try{const n=await JT(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ll(t.appConfig,r),n}catch(n){if(cv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wv(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ll(t.appConfig,r)}throw n}}function Sv(t){return t!==void 0&&t.registrationStatus===2}function n1(t){return t.requestStatus===2&&!r1(t)}function r1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+AT}function i1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function s1(t){return t.requestStatus===1&&t.requestTime+lv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ld(e);return r?r.catch(console.error):Md(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e=!1){const n=t;return await a1(n),(await Md(n,e)).token}async function a1(t){const{registrationPromise:e}=await Ld(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){if(!t||!t.options)throw $a("App Configuration");if(!t.name)throw $a("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $a(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $a(t){return Jn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="installations",c1="installations-internal",d1=t=>{const e=t.getProvider("app").getImmediate(),n=u1(e),r=lr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},h1=t=>{const e=t.getProvider("app").getImmediate(),n=lr(e,Iv).getImmediate();return{getId:()=>o1(n),getToken:i=>l1(n,i)}};function f1(){Ct(new mt(Iv,d1,"PUBLIC")),Ct(new mt(c1,h1,"PRIVATE"))}f1();Ze(ov,Dd);Ze(ov,Dd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="analytics",p1="firebase_id",m1="origin",g1=60*1e3,_1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cv="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new Vl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function v1(t,e){const n=document.createElement("script");n.src=`${Cv}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function y1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function w1(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await kv(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(l){$e.error(l)}t("config",i,s)}async function E1(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await kv(n);for(const a of o){const u=l.find(d=>d.measurementId===a),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){$e.error(s)}}function S1(t,e,n,r){async function i(s,o,l){try{s==="event"?await E1(t,e,n,o,l):s==="config"?await w1(t,e,n,r,o,l):s==="consent"?t("consent","update",l):t("set",o)}catch(a){$e.error(a)}}return i}function I1(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=S1(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function C1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Cv)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},et=new or("analytics","Analytics",k1);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=30,N1=1e3;class x1{constructor(e={},n=N1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Tv=new x1;function R1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function A1(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:R1(r)},s=_1.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw et.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function P1(t,e=Tv,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw et.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw et.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new b1;return setTimeout(async()=>{l.abort()},n!==void 0?n:g1),Nv({appId:r,apiKey:i,measurementId:s},o,l,e)}async function Nv(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Tv){var s,o;const{appId:l,measurementId:a}=t;try{await O1(r,e)}catch(u){if(a)return $e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:l,measurementId:a};throw u}try{const u=await A1(t);return i.deleteThrottleMetadata(l),u}catch(u){const c=u;if(!D1(c)){if(i.deleteThrottleMetadata(l),a)return $e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:l,measurementId:a};throw u}const d=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?Lf(n,i.intervalMillis,T1):Lf(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(l,h),$e.debug(`Calling attemptFetch again in ${d} millis`),Nv(t,h,r,i)}}function O1(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function D1(t){if(!(t instanceof Tt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class b1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function L1(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(){var t;if(v_())try{await y_()}catch(e){return $e.warn(et.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return $e.warn(et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function F1(t,e,n,r,i,s,o){var l;const a=P1(t);a.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&$e.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>$e.error(p)),e.push(a);const u=M1().then(p=>{if(p)return r.getId()}),[c,d]=await Promise.all([a,u]);C1(s)||v1(s,c.measurementId),i("js",new Date);const h=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return h[m1]="firebase",h.update=!0,d!=null&&(h[p1]=d),i("config",c.measurementId,h),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.app=e}_delete(){return delete Bi[this.app.options.appId],Promise.resolve()}}let Bi={},ap=[];const up={};let Ga="dataLayer",z1="gtag",cp,xv,dp=!1;function B1(){const t=[];if(m_()&&t.push("This is a browser extension environment."),GS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=et.create("invalid-analytics-context",{errorInfo:e});$e.warn(n.message)}}function W1(t,e,n){B1();const r=t.options.appId;if(!r)throw et.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)$e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw et.create("no-api-key");if(Bi[r]!=null)throw et.create("already-exists",{id:r});if(!dp){y1(Ga);const{wrappedGtag:s,gtagCore:o}=I1(Bi,ap,up,Ga,z1);xv=s,cp=o,dp=!0}return Bi[r]=F1(t,ap,up,e,cp,Ga,n),new U1(t)}function j1(t=Id()){t=fe(t);const e=lr(t,al);return e.isInitialized()?e.getImmediate():H1(t)}function H1(t,e={}){const n=lr(t,al);if(n.isInitialized()){const i=n.getImmediate();if(ds(e,n.getOptions()))return i;throw et.create("already-initialized")}return n.initialize({options:e})}function Rv(t,e,n,r){t=fe(t),L1(xv,Bi[t.app.options.appId],e,n,r).catch(i=>$e.error(i))}const hp="@firebase/analytics",fp="0.8.4";function V1(){Ct(new mt(al,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return W1(r,i,n)},"PUBLIC")),Ct(new mt("analytics-internal",t,"PRIVATE")),Ze(hp,fp),Ze(hp,fp,"esm2017");function t(e){try{const n=e.getProvider(al).getImmediate();return{logEvent:(r,i,s)=>Rv(n,r,i,s)}}catch(n){throw et.create("interop-component-reg-failed",{reason:n})}}}V1();const pp="@firebase/database",mp="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Av="";function $1(t){Av=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:cs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new G1(e)}}catch{}return new K1},Fn=Pv("localStorage"),lc=Pv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Vl("@firebase/database"),q1=function(){let t=1;return function(){return t++}}(),Ov=function(t){const e=uI(t),n=new sI;n.update(e);const r=n.digest();return vd.encodeByteArray(r)},Fs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Fs.apply(null,r):typeof r=="object"?e+=ue(r):e+=r,e+=" "}return e};let jn=null,gp=!0;const Q1=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Lr.logLevel=V.VERBOSE,jn=Lr.log.bind(Lr),e&&lc.set("logging_enabled",!0)):typeof t=="function"?jn=t:(jn=null,lc.remove("logging_enabled"))},Te=function(...t){if(gp===!0&&(gp=!1,jn===null&&lc.get("logging_enabled")===!0&&Q1(!0)),jn){const e=Fs.apply(null,t);jn(e)}},Us=function(t){return function(...e){Te(t,...e)}},ac=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fs(...t);Lr.error(e)},Wt=function(...t){const e=`FIREBASE FATAL ERROR: ${Fs(...t)}`;throw Lr.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+Fs(...t);Lr.warn(e)},Y1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},X1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Kr="[MIN_NAME]",er="[MAX_NAME]",oi=function(t,e){if(t===e)return 0;if(t===Kr||e===er)return-1;if(e===Kr||t===er)return 1;{const n=_p(t),r=_p(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},J1=function(t,e){return t===e?0:t<e?-1:1},yi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ue(e))},Fd=function(t){if(typeof t!="object"||t===null)return ue(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ue(e[r]),n+=":",n+=Fd(t[e[r]]);return n+="}",n},bv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function We(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Lv=function(t){I(!Dv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Z1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const nN=new RegExp("^-?(0*)\\d{1,10}$"),rN=-2147483648,iN=2147483647,_p=function(t){if(nN.test(t)){const e=Number(t);if(e>=rN&&e<=iN)return e}return null},li=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},sN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class Mr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="5",Mv="v",Fv="s",Uv="r",zv="f",Bv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wv="ls",jv="p",uc="ac",Hv="websocket",Vv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Gv(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===Hv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aN(t)&&(n.ns=t.namespace);const i=[];return We(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(){this.counters_={}}incrementCounter(e,n=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return HS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={},qa={};function zd(t){const e=t.toString();return Ka[e]||(Ka[e]=new uN),Ka[e]}function cN(t,e){const n=t.toString();return qa[n]||(qa[n]=e()),qa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&li(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="start",hN="close",fN="pLPCommand",pN="pRTLPCB",Kv="id",qv="pw",Qv="ser",mN="cb",gN="seg",_N="ts",vN="d",yN="dframe",Yv=1870,Xv=30,wN=Yv-Xv,EN=25e3,SN=3e4;class Tr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=zd(n),this.urlFn=a=>(this.appCheckToken&&(a[uc]=this.appCheckToken),Gv(n,Vv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SN)),X1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bd((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vp)this.id=l,this.password=a;else if(o===hN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[vp]="t",r[Qv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Mv]=Ud,this.transportSessionId&&(r[Fv]=this.transportSessionId),this.lastSessionId&&(r[Wv]=this.lastSessionId),this.applicationId&&(r[jv]=this.applicationId),this.appCheckToken&&(r[uc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bv.test(location.hostname)&&(r[Uv]=zv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tr.forceAllow_=!0}static forceDisallow(){Tr.forceDisallow_=!0}static isAvailable(){return Tr.forceAllow_?!0:!Tr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Z1()&&!eN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=f_(n),i=bv(r,wN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[yN]="t",r[Kv]=e,r[qv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=q1(),window[fN+this.uniqueCallbackIdentifier]=e,window[pN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Kv]=this.myID,e[qv]=this.myPW,e[Qv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Xv+r.length<=Yv;){const o=this.pendingSegs.shift();r=r+"&"+gN+i+"="+o.seg+"&"+_N+i+"="+o.ts+"&"+vN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(EN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=16384,CN=45e3;let ul=null;typeof MozWebSocket<"u"?ul=MozWebSocket:typeof WebSocket<"u"&&(ul=WebSocket);class at{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=zd(n),this.connURL=at.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Mv]=Ud,typeof location<"u"&&location.hostname&&Bv.test(location.hostname)&&(o[Uv]=zv),n&&(o[Fv]=n),r&&(o[Wv]=r),i&&(o[uc]=i),s&&(o[jv]=s),Gv(e,Hv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fn.set("previous_websocket_failure",!0);try{let r;__(),this.mySock=new ul(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ul!==null&&!at.forceDisallow_}static previouslyFailed(){return Fn.isInMemoryStorage||Fn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=cs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bv(n,IN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tr,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=at&&at.isAvailable();let r=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[at];else{const i=this.transports_=[];for(const s of ms.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ms.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=6e4,TN=5e3,NN=10*1024,xN=100*1024,Qa="t",yp="d",RN="s",wp="r",AN="e",Ep="o",Sp="a",Ip="n",Cp="p",PN="h";class ON{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qa in e){const n=e[Qa];n===Sp?this.upgradeIfSecondaryHealthy_():n===wp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ep&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=yi("t",e),r=yi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ip,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=yi("t",e),r=yi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=yi(Qa,e);if(yp in e){const r=e[yp];if(n===PN)this.onHandshake_(r);else if(n===Ip){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===RN?this.onConnectionShutdown_(r):n===wp?this.onReset_(r):n===AN?ac("Server Error: "+r):n===Ep?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ac("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ud!==r&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends Zv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new cl}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=32,Tp=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new $("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function ey(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ty(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ny(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function Ae(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Ae(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ry(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class bN{constructor(e,n){this.errorPrefix_=n,this.parts_=ty(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Hl(this.parts_[r]);iy(this)}}function LN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Hl(e),iy(t)}function MN(t){const e=t.parts_.pop();t.byteLength_-=Hl(e),t.parts_.length>0&&(t.byteLength_-=1)}function iy(t){if(t.byteLength_>Tp)throw new Error(t.errorPrefix_+"has a key path longer than "+Tp+" bytes ("+t.byteLength_+").");if(t.parts_.length>kp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kp+") or object contains a cycle "+On(t))}function On(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends Zv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Wd}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=1e3,FN=60*5*1e3,Np=30*1e3,UN=1.3,zN=3e4,BN="server_kill",xp=3;class Lt extends Jv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Lt.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wi,this.maxReconnectDelay_=FN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!__())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ue(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new jl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Lt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ht(e,"w")){const r=$r(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Np)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ac("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zN&&(this.reconnectDelay_=wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*UN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new ON(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Be(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(BN)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Be(d),a())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ju(this.interruptReasons_)&&(this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Fd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xp&&(this.reconnectDelay_=Np,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Av.replace(/\./g,"-")]=1,yd()?e["framework.cordova"]=1:g_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cl.getInstance().currentlyOnline();return Ju(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0;Lt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new L(Kr,e),i=new L(Kr,n);return this.compare(r,i)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co;class sy extends Yl{static get __EMPTY_NODE(){return co}static set __EMPTY_NODE(e){co=e}compare(e,n){return oi(e.name,n.name)}isDefinedOn(e){throw ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(er,co)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,co)}toString(){return".key"}}const Fr=new sy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:_e.RED,this.left=i!=null?i:Me.EMPTY_NODE,this.right=s!=null?s:Me.EMPTY_NODE}copy(e,n,r,i,s){return new _e(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Me.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class WN{copy(e,n,r,i,s){return this}insert(e,n,r){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,n=Me.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Me(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ho(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ho(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new WN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t,e){return oi(t.name,e.name)}function jd(t,e){return oi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc;function HN(t){cc=t}const oy=function(t){return typeof t=="number"?"number:"+Lv(t):"string:"+t},ly=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else I(t===cc||t.isEmpty(),"priority of unexpected type.");I(t===cc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rp;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ly(this.priorityNode_)}static set __childrenNodeConstructor(e){Rp=e}static get __childrenNodeConstructor(){return Rp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:U(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+oy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Lv(this.value_):e+=this.value_,this.lazyHash_=Ov(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),s=me.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ay,uy;function VN(t){ay=t}function $N(t){uy=t}class GN extends Yl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?oi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(er,new me("[PRIORITY-POST]",uy))}makePost(e,n){const r=ay(e);return new L(n,new me("[PRIORITY-POST]",r))}toString(){return".priority"}}const re=new GN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=Math.log(2);class qN{constructor(e){const n=s=>parseInt(Math.log(s)/KN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dl=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new _e(h,d.node,_e.BLACK,null,null);{const p=parseInt(c/2,10)+a,_=i(a,p),y=i(p+1,u);return d=t[p],h=n?n(d):d,new _e(h,d.node,_e.BLACK,_,y)}},s=function(a){let u=null,c=null,d=t.length;const h=function(_,y){const A=d-_,m=d;d-=_;const f=i(A+1,m),g=t[A],w=n?n(g):g;p(new _e(w,g.node,y,null,f))},p=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),A=Math.pow(2,a.count-(_+1));y?h(A,_e.BLACK):(h(A,_e.BLACK),h(A,_e.RED))}return c},o=new qN(t.length),l=s(o);return new Me(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya;const dr={};class Dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(dr&&re,"ChildrenNode.ts has not been loaded"),Ya=Ya||new Dt({".priority":dr},{".priority":re}),Ya}get(e){const n=$r(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Me?n:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Fr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(L.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=dl(r,e.getCompare()):l=dr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Dt(c,u)}addToIndexes(e,n){const r=tl(this.indexes_,(i,s)=>{const o=$r(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===dr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),dl(l,o.getCompare())}else return dr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new Dt(r,this.indexSet_)}removeFromIndexes(e,n){const r=tl(this.indexes_,i=>{if(i===dr)return i;{const s=n.get(e.name);return s?i.remove(new L(e.name,s)):i}});return new Dt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ly(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ei||(Ei=new O(new Me(jd),null,Dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ei}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ei:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new L(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ei:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{I(U(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(re,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+oy(this.getPriority().val())+":"),this.forEachChild(re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ov(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new L(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zs?-1:0}withIndex(e){if(e===Fr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(re),i=n.getIterator(re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QN extends O{constructor(){super(new Me(jd),O.EMPTY_NODE,Dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const zs=new QN;Object.defineProperties(L,{MIN:{value:new L(Kr,O.EMPTY_NODE)},MAX:{value:new L(er,zs)}});sy.__EMPTY_NODE=O.EMPTY_NODE;me.__childrenNodeConstructor=O;HN(zs);$N(zs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=!0;function ve(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,ve(e))}if(!(t instanceof Array)&&YN){const n=[];let r=!1;if(We(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=dl(n,jN,o=>o.name,jd);if(r){const o=dl(n,re.getCompare());return new O(s,ve(e),new Dt({".priority":o},{".priority":re}))}else return new O(s,ve(e),Dt.Default)}else{let n=O.EMPTY_NODE;return We(t,(r,i)=>{if(Ht(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}VN(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN extends Yl{constructor(e){super(),this.indexPath_=e,I(!F(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?oi(e.name,n.name):s}makePost(e,n){const r=ve(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new L(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,zs);return new L(er,e)}toString(){return ty(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN extends Yl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?oi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const r=ve(e);return new L(n,r)}toString(){return".value"}}const ZN=new JN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){return{type:"value",snapshotNode:t}}function qr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _s(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ex(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(gs(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(qr(n,r)):o.trackChildChange(_s(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(re,(i,s)=>{n.hasChild(i)||r.trackChildChange(gs(i,s))}),n.isLeafNode()||n.forEachChild(re,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(_s(i,s,o))}else r.trackChildChange(qr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.indexedFilter_=new Hd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vs.getStartPost_(e),this.endPost_=vs.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new L(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(re,(o,l)=>{s.matches(new L(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.rangedFilter_=new vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new L(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();l=(h,p)=>d(p,h)}else a=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let u=0,c=!1;for(;a.hasNext();){const d=a.getNext();!c&&l(s,d)<=0&&(c=!0),c&&u<this.limit_&&l(d,o)<=0?u++:i=i.updateImmediateChild(d.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,p)=>d(p,h)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new L(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,a);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(_s(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(gs(n,d));const y=l.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(qr(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(gs(u.name,u.node)),s.trackChildChange(qr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Kr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:er}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new Vd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nx(t){return t.loadsAllData()?new Hd(t.getIndex()):t.hasLimit()?new tx(t):new vs(t)}function Ap(t){const e={};if(t.isDefault())return e;let n;return t.index_===re?n="$priority":t.index_===ZN?n="$value":t.index_===Fr?n="$key":(I(t.index_ instanceof XN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ue(n),t.startSet_&&(e.startAt=ue(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ue(t.indexStartName_))),t.endSet_&&(e.endAt=ue(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ue(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Pp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Jv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Us("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=hl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Ap(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),$r(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=hl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ap(e._queryParams),r=e._path.toString(),i=new jl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ni(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=cs(l.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){return{value:null,children:new Map}}function dy(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,fl());const i=t.children.get(r);e=G(e),dy(i,e,n)}}function dc(t,e,n){t.value!==null?n(e,t.value):ix(t,(r,i)=>{const s=new $(e.toString()+"/"+r);dc(i,s,n)})}function ix(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&We(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=10*1e3,ox=30*1e3,lx=5*60*1e3;class ax{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new sx(e);const r=Op+(ox-Op)*Math.random();Wi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;We(e,(i,s)=>{s>0&&Ht(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*lx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function hy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $d(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=hy()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new pl(W(),n,this.revert)}}else return I(U(this.path)===e,"operationForChild called for unrelated child."),new pl(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new ys(this.source,W()):new ys(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return F(this.path)?new tr(this.source,W(),this.snap.getImmediateChild(e)):new tr(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new tr(this.source,W(),n.value):new ws(this.source,W(),n)}else return I(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ws(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ex(o.childName,o.snapshotNode))}),Si(t,i,"child_removed",e,r,n),Si(t,i,"child_added",e,r,n),Si(t,i,"child_moved",s,r,n),Si(t,i,"child_changed",e,r,n),Si(t,i,"value",e,r,n),i}function Si(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>hx(t,l,a)),o.forEach(l=>{const a=dx(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function dx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hx(t,e,n){if(e.childName==null||n.childName==null)throw ti("Should only compare child_ events.");const r=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,e){return{eventCache:t,serverCache:e}}function ji(t,e,n,r){return Xl(new En(e,n,r),t.serverCache)}function fy(t,e,n,r){return Xl(t.eventCache,new En(e,n,r))}function ml(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa;const fx=()=>(Xa||(Xa=new Me(J1)),Xa);class Y{constructor(e,n=fx()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return We(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(F(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:ce(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new Y(null)}}set(e,n){if(F(e))return new Y(n,this.children);{const r=U(e),s=(this.children.get(r)||new Y(null)).set(G(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(F(e))return n;{const r=U(e),s=(this.children.get(r)||new Y(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(G(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),ce(n,i),r):new Y(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new Y(null))}}function Hi(t,e,n){if(F(e))return new ft(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ae(i,e);return s=s.updateChild(o,n),new ft(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new ft(s)}}}function Dp(t,e,n){let r=t;return We(n,(i,s)=>{r=Hi(r,ce(e,i),s)}),r}function bp(t,e){if(F(e))return ft.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new ft(n)}}function hc(t,e){return ar(t,e)!=null}function ar(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ae(n.path,e)):null}function Lp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(r,i)=>{e.push(new L(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new L(r,i.value))}),e}function gn(t,e){if(F(e))return t;{const n=ar(t,e);return n!=null?new ft(new Y(n)):new ft(t.writeTree_.subtree(e))}}function fc(t){return t.writeTree_.isEmpty()}function Qr(t,e){return py(W(),t.writeTree_,e)}function py(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=py(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e){return vy(e,t)}function px(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Hi(t.visibleWrites,e,n)),t.lastWriteId=r}function mx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function gx(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&_x(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return vx(t),!0;if(r.snap)t.visibleWrites=bp(t.visibleWrites,r.path);else{const l=r.children;We(l,a=>{t.visibleWrites=bp(t.visibleWrites,ce(r.path,a))})}return!0}else return!1}function _x(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(ce(t.path,n),e))return!0;return!1}function vx(t){t.visibleWrites=my(t.allWrites,yx,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yx(t){return t.visible}function my(t,e,n){let r=ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=Ae(n,o),r=Hi(r,l,s.snap)):ut(o,n)&&(l=Ae(o,n),r=Hi(r,W(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=Ae(n,o),r=Dp(r,l,s.children);else if(ut(o,n))if(l=Ae(o,n),F(l))r=Dp(r,W(),s.children);else{const a=$r(s.children,U(l));if(a){const u=a.getChild(G(l));r=Hi(r,W(),u)}}}else throw ti("WriteRecord should have .snap or .children")}}return r}function gy(t,e,n,r,i){if(!r&&!i){const s=ar(t.visibleWrites,e);if(s!=null)return s;{const o=gn(t.visibleWrites,e);if(fc(o))return n;if(n==null&&!hc(o,W()))return null;{const l=n||O.EMPTY_NODE;return Qr(o,l)}}}else{const s=gn(t.visibleWrites,e);if(!i&&fc(s))return n;if(!i&&n==null&&!hc(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,e)||ut(e,u.path))},l=my(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Qr(l,a)}}}function wx(t,e,n){let r=O.EMPTY_NODE;const i=ar(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=gn(t.visibleWrites,e);return n.forEachChild(re,(o,l)=>{const a=Qr(gn(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),Lp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=gn(t.visibleWrites,e);return Lp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Ex(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(hc(t.visibleWrites,s))return null;{const o=gn(t.visibleWrites,s);return fc(o)?i.getChild(n):Qr(o,i.getChild(n))}}function Sx(t,e,n,r){const i=ce(e,n),s=ar(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=gn(t.visibleWrites,i);return Qr(o,r.getNode().getImmediateChild(n))}else return null}function Ix(t,e){return ar(t.visibleWrites,e)}function Cx(t,e,n,r,i,s,o){let l;const a=gn(t.visibleWrites,e),u=ar(a,W());if(u!=null)l=u;else if(n!=null)l=Qr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=h.getNext();for(;p&&c.length<i;)d(p,r)!==0&&c.push(p),p=h.getNext();return c}else return[]}function kx(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function gl(t,e,n,r){return gy(t.writeTree,t.treePath,e,n,r)}function Kd(t,e){return wx(t.writeTree,t.treePath,e)}function Mp(t,e,n,r){return Ex(t.writeTree,t.treePath,e,n,r)}function _l(t,e){return Ix(t.writeTree,ce(t.treePath,e))}function Tx(t,e,n,r,i,s){return Cx(t.writeTree,t.treePath,e,n,r,i,s)}function qd(t,e,n){return Sx(t.writeTree,t.treePath,e,n)}function _y(t,e){return vy(ce(t.treePath,e),t.writeTree)}function vy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,_s(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,gs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,qr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,_s(r,e.snapshotNode,i.oldSnap));else throw ti("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const yy=new xx;class Qd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new En(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nr(this.viewCache_),s=Tx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){return{filter:t}}function Ax(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Px(t,e,n,r,i){const s=new Nx;let o,l;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=pc(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=vl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=Dx(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=mc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=Mx(t,e,u.path,r,i,s):o=bx(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=Lx(t,e,n.path,r,s);else throw ti("Unknown operation type: "+n.type);const a=s.getChanges();return Ox(e,o,a),{viewCache:o,changes:a}}function Ox(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ml(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(cy(ml(e)))}}function wy(t,e,n,r,i,s){const o=e.eventCache;if(_l(r,n)!=null)return e;{let l,a;if(F(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=nr(e),c=u instanceof O?u:O.EMPTY_NODE,d=Kd(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=gl(r,nr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){I(wn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=Mp(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=G(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Mp(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=qd(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return ji(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function vl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),p,null)}else{const p=U(n);if(!a.isCompleteForPath(n)&&wn(n)>1)return e;const _=G(n),A=a.getNode().getImmediateChild(p).updateChild(_,r);p===".priority"?u=c.updatePriority(a.getNode(),A):u=c.updateChild(a.getNode(),p,A,_,yy,null)}const d=fy(e,u,a.isFullyInitialized()||F(n),c.filtersNodes()),h=new Qd(i,d,s);return wy(t,d,n,i,h,l)}function pc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Qd(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=ji(e,u,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=ji(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=G(n),p=l.getNode().getImmediateChild(d);let _;if(F(h))_=r;else{const y=c.getCompleteChild(d);y!=null?ey(h)===".priority"&&y.getChild(ny(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=O.EMPTY_NODE}if(p.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),d,_,h,c,o);a=ji(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Fp(t,e){return t.eventCache.isCompleteForChild(e)}function Dx(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ce(n,a);Fp(e,U(c))&&(l=pc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ce(n,a);Fp(e,U(c))||(l=pc(t,l,c,u,i,s,o))}),l}function Up(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function mc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;F(n)?u=r:u=new Y(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),_=Up(t,p,h);a=vl(t,a,new $(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const p=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!p){const _=e.serverCache.getNode().getImmediateChild(d),y=Up(t,_,h);a=vl(t,a,new $(d),y,i,s,o,l)}}),a}function bx(t,e,n,r,i,s,o){if(_l(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return vl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(F(n)){let u=new Y(null);return a.getNode().forEachChild(Fr,(c,d)=>{u=u.set(new $(c),d)}),mc(t,e,n,u,i,s,l,o)}else return e}else{let u=new Y(null);return r.foreach((c,d)=>{const h=ce(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),mc(t,e,n,u,i,s,l,o)}}function Lx(t,e,n,r,i){const s=e.serverCache,o=fy(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return wy(t,o,n,r,yy,i)}function Mx(t,e,n,r,i,s){let o;if(_l(r,n)!=null)return e;{const l=new Qd(r,e,i),a=e.eventCache.getNode();let u;if(F(n)||U(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=gl(r,nr(e));else{const d=e.serverCache.getNode();I(d instanceof O,"serverChildren would be complete if leaf node"),c=Kd(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=U(n);let d=qd(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,G(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,O.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gl(r,nr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||_l(r,W())!=null,ji(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Hd(r.getIndex()),s=nx(r);this.processor_=Rx(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),c=new En(a,o.isFullyInitialized(),i.filtersNodes()),d=new En(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Xl(d,c),this.eventGenerator_=new ux(this.query_)}get query(){return this.query_}}function Ux(t){return t.viewCache_.serverCache.getNode()}function zx(t){return ml(t.viewCache_)}function Bx(t,e){const n=nr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function zp(t){return t.eventRegistrations_.length===0}function Wx(t,e){t.eventRegistrations_.push(e)}function Bp(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Wp(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(I(nr(t.viewCache_),"We should always have a full cache before handling merges"),I(ml(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Px(t.processor_,i,e,n,r);return Ax(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ey(t,s.changes,s.viewCache.eventCache.getNode(),null)}function jx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(s,o)=>{r.push(qr(s,o))}),n.isFullyInitialized()&&r.push(cy(n.getNode())),Ey(t,r,n.getNode(),e)}function Ey(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return cx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class Sy{constructor(){this.views=new Map}}function Hx(t){I(!yl,"__referenceConstructor has already been defined"),yl=t}function Vx(){return I(yl,"Reference.ts has not been loaded"),yl}function $x(t){return t.views.size===0}function Yd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),Wp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Wp(o,e,n,r));return s}}function Iy(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=gl(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=Kd(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=Xl(new En(l,a,!1),new En(r,i,!1));return new Fx(e,u)}return o}function Gx(t,e,n,r,i,s){const o=Iy(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Wx(o,n),jx(o,n)}function Kx(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Sn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Bp(u,n,r)),zp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Bp(a,n,r)),zp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Sn(t)&&s.push(new(Vx())(e._repo,e._path)),{removed:s,events:o}}function Cy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _n(t,e){let n=null;for(const r of t.views.values())n=n||Bx(r,e);return n}function ky(t,e){if(e._queryParams.loadsAllData())return Zl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Ty(t,e){return ky(t,e)!=null}function Sn(t){return Zl(t)!=null}function Zl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl;function qx(t){I(!wl,"__referenceConstructor has already been defined"),wl=t}function Qx(){return I(wl,"Reference.ts has not been loaded"),wl}let Yx=1;class jp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=kx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ny(t,e,n,r,i){return px(t.pendingWriteTree_,e,n,r,i),i?Ws(t,new tr(hy(),e,n)):[]}function Un(t,e,n=!1){const r=mx(t.pendingWriteTree_,e);if(gx(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(W(),!0):We(r.children,o=>{s=s.set(new $(o),!0)}),Ws(t,new pl(r.path,s,n))}else return[]}function Bs(t,e,n){return Ws(t,new tr($d(),e,n))}function Xx(t,e,n){const r=Y.fromObject(n);return Ws(t,new ws($d(),e,r))}function Jx(t,e){return Ws(t,new ys($d(),e))}function Zx(t,e,n){const r=Jd(t,n);if(r){const i=Zd(r),s=i.path,o=i.queryId,l=Ae(s,e),a=new ys(Gd(o),l);return eh(t,s,a)}else return[]}function xy(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Ty(o,e))){const a=Kx(o,e,n,r);$x(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,p)=>Sn(p));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const p=rR(h);for(let _=0;_<p.length;++_){const y=p[_],A=y.query,m=Oy(t,y);t.listenProvider_.startListening(Vi(A),Es(t,A),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Vi(e),null):u.forEach(h=>{const p=t.queryToTagMap.get(ea(h));t.listenProvider_.stopListening(Vi(h),p)}))}iR(t,u)}return l}function Ry(t,e,n,r){const i=Jd(t,r);if(i!=null){const s=Zd(i),o=s.path,l=s.queryId,a=Ae(o,e),u=new tr(Gd(l),a,n);return eh(t,o,u)}else return[]}function eR(t,e,n,r){const i=Jd(t,r);if(i){const s=Zd(i),o=s.path,l=s.queryId,a=Ae(o,e),u=Y.fromObject(n),c=new ws(Gd(l),a,u);return eh(t,o,c)}else return[]}function tR(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const _=Ae(h,i);s=s||_n(p,_),o=o||Sn(p)});let l=t.syncPointTree_.get(i);l?(o=o||Sn(l),s=s||_n(l,W())):(l=new Sy,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,_)=>{const y=_n(_,W());y&&(s=s.updateImmediateChild(p,y))}));const u=Ty(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=ea(e);I(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=sR();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const c=Jl(t.pendingWriteTree_,i);let d=Gx(l,e,n,c,s,a);if(!u&&!o&&!r){const h=ky(l,e);d=d.concat(oR(t,e,h))}return d}function Xd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ae(o,e),u=_n(l,a);if(u)return u});return gy(i,e,s,n,!0)}function nR(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=Ae(u,n);r=r||_n(c,d)});let i=t.syncPointTree_.get(n);i?r=r||_n(i,W()):(i=new Sy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new En(r,!0,!1):null,l=Jl(t.pendingWriteTree_,e._path),a=Iy(i,e,l,s?o.getNode():O.EMPTY_NODE,s);return zx(a)}function Ws(t,e){return Ay(e,t.syncPointTree_,null,Jl(t.pendingWriteTree_,W()))}function Ay(t,e,n,r){if(F(t.path))return Py(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=_n(i,W()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=_y(r,o);s=s.concat(Ay(l,a,u,c))}return i&&(s=s.concat(Yd(i,t,r,n))),s}}function Py(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=_n(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=_y(r,o),c=t.operationForChild(o);c&&(s=s.concat(Py(c,l,a,u)))}),i&&(s=s.concat(Yd(i,t,r,n))),s}function Oy(t,e){const n=e.query,r=Es(t,n);return{hashFn:()=>(Ux(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Zx(t,n._path,r):Jx(t,n._path);{const s=tN(i,n);return xy(t,n,null,s)}}}}function Es(t,e){const n=ea(e);return t.queryToTagMap.get(n)}function ea(t){return t._path.toString()+"$"+t._queryIdentifier}function Jd(t,e){return t.tagToQueryMap.get(e)}function Zd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function eh(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Jl(t.pendingWriteTree_,e);return Yd(r,n,i,null)}function rR(t){return t.fold((e,n,r)=>{if(n&&Sn(n))return[Zl(n)];{let i=[];return n&&(i=Cy(n)),We(r,(s,o)=>{i=i.concat(o)}),i}})}function Vi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Qx())(t._repo,t._path):t}function iR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ea(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function sR(){return Yx++}function oR(t,e,n){const r=e._path,i=Es(t,e),s=Oy(t,n),o=t.listenProvider_.startListening(Vi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)I(!Sn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!F(u)&&c&&Sn(c))return[Zl(c).query];{let h=[];return c&&(h=h.concat(Cy(c).map(p=>p.query))),We(d,(p,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Vi(c),Es(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new th(n)}node(){return this.node_}}class nh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new nh(this.syncTree_,n)}node(){return Xd(this.syncTree_,this.path_)}}const lR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Hp=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return aR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uR(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},aR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},uR=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},cR=function(t,e,n,r){return rh(e,new nh(n,t),r)},Dy=function(t,e,n){return rh(t,new th(e),n)};function rh(t,e,n){const r=t.getPriority().val(),i=Hp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Hp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new me(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new me(i))),o.forEachChild(re,(l,a)=>{const u=rh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function sh(t,e){let n=e instanceof $?e:new $(e),r=t,i=U(n);for(;i!==null;){const s=$r(r.node.children,i)||{children:{},childCount:0};r=new ih(i,r,s),n=G(n),i=U(n)}return r}function ai(t){return t.node.value}function by(t,e){t.node.value=e,gc(t)}function Ly(t){return t.node.childCount>0}function dR(t){return ai(t)===void 0&&!Ly(t)}function ta(t,e){We(t.node.children,(n,r)=>{e(new ih(n,t,r))})}function My(t,e,n,r){n&&!r&&e(t),ta(t,i=>{My(i,e,!0,r)}),n&&r&&e(t)}function hR(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function js(t){return new $(t.parent===null?t.name:js(t.parent)+"/"+t.name)}function gc(t){t.parent!==null&&fR(t.parent,t.name,t)}function fR(t,e,n){const r=dR(n),i=Ht(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,gc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=/[\[\].#$\/\u0000-\u001F\u007F]/,mR=/[\[\].#$\u0000-\u001F\u007F]/,Ja=10*1024*1024,Fy=function(t){return typeof t=="string"&&t.length!==0&&!pR.test(t)},Uy=function(t){return typeof t=="string"&&t.length!==0&&!mR.test(t)},gR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Uy(t)},_R=function(t,e,n,r){r&&e===void 0||oh(Ed(t,"value"),e,n)},oh=function(t,e,n){const r=n instanceof $?new bN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+On(r));if(typeof e=="function")throw new Error(t+"contains a function "+On(r)+" with contents = "+e.toString());if(Dv(e))throw new Error(t+"contains "+e.toString()+" "+On(r));if(typeof e=="string"&&e.length>Ja/3&&Hl(e)>Ja)throw new Error(t+"contains a string greater than "+Ja+" utf8 bytes "+On(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(We(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Fy(o)))throw new Error(t+" contains an invalid key ("+o+") "+On(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LN(r,o),oh(t,l,r),MN(r)}),i&&s)throw new Error(t+' contains ".value" child '+On(r)+" in addition to actual children.")}},zy=function(t,e,n,r){if(!(r&&n===void 0)&&!Uy(n))throw new Error(Ed(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zy(t,e,n,r)},yR=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},wR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!gR(n))throw new Error(Ed(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function By(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ry(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function kt(t,e,n){By(t,n),SR(t,r=>ut(r,e)||ut(e,r))}function SR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(IR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function IR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();jn&&Te("event: "+n.toString()),li(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR="repo_interrupt",kR=25;class TR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ER,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fl(),this.transactionQueueTree_=new ih,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NR(t,e,n){if(t.stats_=zd(t.repoInfo_),t.forceRestClient_||sN())t.server_=new hl(t.repoInfo_,(r,i,s,o)=>{Vp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$p(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Lt(t.repoInfo_,e,(r,i,s,o)=>{Vp(t,r,i,s,o)},r=>{$p(t,r)},r=>{RR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=cN(t.repoInfo_,()=>new ax(t.stats_,t.server_)),t.infoData_=new rx,t.infoSyncTree_=new jp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Bs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ah(t,"connected",!1),t.serverSyncTree_=new jp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);kt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function xR(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function lh(t){return lR({timestamp:xR(t)})}function Vp(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=tl(n,u=>ve(u));o=eR(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=Ry(t.serverSyncTree_,s,a,i)}else if(r){const a=tl(n,u=>ve(u));o=Xx(t.serverSyncTree_,s,a)}else{const a=ve(n);o=Bs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ra(t,s)),kt(t.eventQueue_,l,o)}function $p(t,e){ah(t,"connected",e),e===!1&&OR(t)}function RR(t,e){We(e,(n,r)=>{ah(t,n,r)})}function ah(t,e,n){const r=new $("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=Bs(t.infoSyncTree_,r,i);kt(t.eventQueue_,r,s)}function Wy(t){return t.nextWriteId_++}function AR(t,e,n){const r=nR(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ve(i).withIndex(e._queryParams.getIndex());tR(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Bs(t.serverSyncTree_,e._path,s);else{const l=Es(t.serverSyncTree_,e);o=Ry(t.serverSyncTree_,e._path,s,l)}return kt(t.eventQueue_,e._path,o),xy(t.serverSyncTree_,e,n,null,!0),s},i=>(na(t,"get for query "+ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function PR(t,e,n,r,i){na(t,"set",{path:e.toString(),value:n,priority:r});const s=lh(t),o=ve(n,r),l=Xd(t.serverSyncTree_,e),a=Dy(o,l,s),u=Wy(t),c=Ny(t.serverSyncTree_,e,a,u,!0);By(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const _=h==="ok";_||Be("set at "+e+" failed: "+h);const y=Un(t.serverSyncTree_,u,!_);kt(t.eventQueue_,e,y),bR(t,i,h,p)});const d=Gy(t,e);ra(t,d),kt(t.eventQueue_,d,[])}function OR(t){na(t,"onDisconnectEvents");const e=lh(t),n=fl();dc(t.onDisconnect_,W(),(i,s)=>{const o=cR(i,s,t.serverSyncTree_,e);dy(n,i,o)});let r=[];dc(n,W(),(i,s)=>{r=r.concat(Bs(t.serverSyncTree_,i,s));const o=Gy(t,i);ra(t,o)}),t.onDisconnect_=fl(),kt(t.eventQueue_,W(),r)}function DR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(CR)}function na(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function bR(t,e,n,r){e&&li(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function jy(t,e,n){return Xd(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function uh(t,e=t.transactionQueueTree_){if(e||ia(t,e),ai(e)){const n=Vy(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&LR(t,js(e),n)}else Ly(e)&&ta(e,n=>{uh(t,n)})}function LR(t,e,n){const r=n.map(u=>u.currentWriteId),i=jy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ae(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{na(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Un(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ia(t,sh(t.transactionQueueTree_,e)),uh(t,t.transactionQueueTree_),kt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)li(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Be("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ra(t,e)}},o)}function ra(t,e){const n=Hy(t,e),r=js(n),i=Vy(t,n);return MR(t,i,r),r}function MR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ae(n,a.path);let c=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=kR)c=!0,d="maxretry",i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0));else{const h=jy(t,a.path,o);a.currentInputSnapshot=h;const p=e[l].update(h.val());if(p!==void 0){oh("transaction failed: Data returned ",p,a.path);let _=ve(p);typeof p=="object"&&p!=null&&Ht(p,".priority")||(_=_.updatePriority(h.getPriority()));const A=a.currentWriteId,m=lh(t),f=Dy(_,h,m);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=Wy(t),o.splice(o.indexOf(A),1),i=i.concat(Ny(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Un(t.serverSyncTree_,A,!0))}else c=!0,d="nodata",i=i.concat(Un(t.serverSyncTree_,a.currentWriteId,!0))}kt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}ia(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)li(r[l]);uh(t,t.transactionQueueTree_)}function Hy(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&ai(r)===void 0;)r=sh(r,n),e=G(e),n=U(e);return r}function Vy(t,e){const n=[];return $y(t,e,n),n.sort((r,i)=>r.order-i.order),n}function $y(t,e,n){const r=ai(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ta(e,i=>{$y(t,i,n)})}function ia(t,e){const n=ai(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,by(e,n.length>0?n:void 0)}ta(e,r=>{ia(t,r)})}function Gy(t,e){const n=js(Hy(t,e)),r=sh(t.transactionQueueTree_,e);return hR(r,i=>{Za(t,i)}),Za(t,r),My(r,i=>{Za(t,i)}),n}function Za(t,e){const n=ai(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?by(e,void 0):n.length=s+1,kt(t.eventQueue_,js(e),i);for(let o=0;o<r.length;o++)li(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function UR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Gp=function(t,e){const n=zR(t),r=n.namespace;n.domain==="firebase.com"&&Wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Y1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $v(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},zR=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=FR(t.substring(c,d)));const h=UR(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class WR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:ey(this._path)}get ref(){return new Vt(this._repo,this._path)}get _queryIdentifier(){const e=Pp(this._queryParams),n=Fd(e);return n==="{}"?"default":n}get _queryObject(){return Pp(this._queryParams)}isEqual(e){if(e=fe(e),!(e instanceof ch))return!1;const n=this._repo===e._repo,r=ry(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+DN(this._path)}}class Vt extends ch{constructor(e,n){super(e,n,new Vd,!1)}get parent(){const e=ny(this._path);return e===null?null:new Vt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ss{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=_c(this.ref,e);return new Ss(this._node.getChild(n),r,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ss(i,_c(this.ref,r),re)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function El(t,e){return t=fe(t),t._checkNotDeleted("ref"),e!==void 0?_c(t._root,e):t._root}function _c(t,e){return t=fe(t),U(t._path)===null?vR("child","path",e,!1):zy("child","path",e,!1),new Vt(t._repo,ce(t._path,e))}function Ky(t,e){t=fe(t),yR("set",t._path),_R("set",e,t._path,!1);const n=new jl;return PR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Kp(t){t=fe(t);const e=new jR(()=>{}),n=new dh(e);return AR(t._repo,t,n).then(r=>new Ss(r,new Vt(t._repo,t._path),t._queryParams.getIndex()))}class dh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new BR("value",this,new Ss(e.snapshotNode,new Vt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new WR(this,e,n):null}matches(e){return e instanceof dh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Hx(Vt);qx(Vt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="FIREBASE_DATABASE_EMULATOR_HOST",vc={};let VR=!1;function $R(t,e,n,r){t.repoInfo_=new $v(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function GR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Gp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[HR]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Gp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Mr(Mr.OWNER):new lN(t.name,t.options,e);wR("Invalid Firebase Database URL",o),F(o.path)||Wt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=qR(l,t,c,new oN(t.name,n));return new QR(d,t)}function KR(t,e){const n=vc[e];(!n||n[t.key]!==t)&&Wt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),DR(t),delete n[t.key]}function qR(t,e,n,r){let i=vc[e.name];i||(i={},vc[e.name]=i);let s=i[t.toURLString()];return s&&Wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new TR(t,VR,n,r),i[t.toURLString()]=s,s}class QR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vt(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wt("Cannot call "+e+" on a deleted database.")}}function YR(t=Id(),e){const n=lr(t,"database").getImmediate({identifier:e}),r=XS("database");return r&&XR(n,...r),n}function XR(t,e,n,r={}){t=fe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Mr(Mr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ZS(r.mockUserToken,t.app.options.projectId);s=new Mr(o)}$R(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){$1(Ps),Ct(new mt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return GR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ze(pp,mp,t),Ze(pp,mp,"esm2017")}Lt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Lt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};JR();const ZR={apiKey:"AIzaSyDnFyr_cDoO-DIwYz8rMfr16tDAlRGtg7s",authDomain:"adventure-rpg-8a83c.firebaseapp.com",projectId:"adventure-rpg-8a83c",storageBucket:"adventure-rpg-8a83c.appspot.com",messagingSenderId:"397253047058",appId:"1:397253047058:web:1367278c983913af9839cb",measurementId:"G-HF586DWD4B",databaseURL:"https://adventure-rpg-8a83c-default-rtdb.europe-west1.firebasedatabase.app"},hh=T_(ZR),Ii=xT(hh),eA=j1(hh);Rv(eA,"notification_received");const Sl=YR(hh),qy=Cc.createContext();function ur(){return S.exports.useContext(qy)}function tA({children:t}){const[e,n]=S.exports.useState(),[r,i]=S.exports.useState(!0);async function s(h,p){return ak(Ii,h,p).then(_=>{const y=_.user;console.log(y.email)}).catch(_=>{const y=_.code,A=_.message;console.log(y,A)})}async function o(h,p){return uk(Ii,h,p).then(_=>{const y=_.user;console.log(y.email)}).catch(_=>{const y=_.code,A=_.message;console.log(y,A)})}function l(){return pk(Ii)}async function a(h){return lk(Ii,h).catch(p=>{const _=p.code,y=p.message;console.log(_,y)})}function u(h){return ck(e,h)}function c(h){return dk(e,h)}S.exports.useEffect(()=>Ii.onAuthStateChanged(p=>{n(p),i(!1)}),[]);const d={currentUser:e,login:o,signup:s,logout:l,resetPassword:a,updateEmailAPI:u,updatePasswordAPI:c};return v(qy.Provider,{value:d,children:!r&&t})}function nA(){const t=S.exports.useRef(),e=S.exports.useRef(),n=S.exports.useRef(),{signup:r}=ur(),[i,s]=S.exports.useState(""),[o,l]=S.exports.useState(!1),a=ei();S.exports.useEffect(()=>{const c=d=>{d.key=="Enter"&&(d.preventDefault(),u(d))};return document.addEventListener("keypress",c),()=>{document.removeEventListener("keypress",c)}},[]);async function u(c){if(c.preventDefault(),e.current.value!==n.current.value)return s("Passwords do not match!");try{s(""),l(!0),await r(t.current.value,e.current.value),a("/")}catch{s("Failed to create an account")}l(!1)}return j("div",{className:"flex flex-row h-full w-full",children:[v("div",{className:"w-1/2 bg-primary-dark"}),j("div",{className:"w-1/2 text-center flex flex-col items-center justify-center",children:[v("h1",{className:"text-2xl lg:text-[2.5rem] mb-3 font-bold",children:"Sign Up"}),v("p",{className:"text-sm lg:text-base text-secondary-light mb-6",children:"Enter your details to continue"}),i&&v("div",{className:"text-primary",children:v("h2",{children:i})}),v("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your email"}),v("input",{type:"email",ref:t,required:!0,placeholder:"email@email.com",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),v("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your password"}),v("input",{type:"password",ref:e,required:!0,placeholder:"*****",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),v("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your password again"}),v("input",{type:"password",ref:n,required:!0,placeholder:"*****",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),v("button",{type:"button",onClick:u,disabled:o,className:"w-3/4 max-w-md h-10 mt-4 text-base text-white bg-primary border-primary rounded-lg",children:"Sign Up"}),j("div",{className:"w-3/4 max-w-md mt-6 flex flex-row justify-center",children:[v("p",{className:"px-2",children:"Already have an account?"}),v(qn,{to:"/login",className:"font-semibold",children:"Log in"})]})]})]})}function rA(){const[t,e]=S.exports.useState(""),{currentUser:n,logout:r}=ur(),i=ei();async function s(){e("");try{await r(),i("/login")}catch{e("Failed to log out.")}}return v("div",{className:"dashboard-container",children:j("div",{className:"dashboard",children:[j("div",{className:"profile",children:[v("h2",{children:"Profile"}),t&&v("div",{className:"profile-error",children:v("h2",{children:t})}),v("strong",{children:"Email:"})," ",n.email,v("button",{onClick:s,children:"Log Out"})]}),v("div",{children:v(qn,{to:"/update-profile",children:"Update profile"})})]})})}function iA(){const t=S.exports.useRef(),e=S.exports.useRef(),{login:n}=ur(),[r,i]=S.exports.useState(""),[s,o]=S.exports.useState(!1),l=ei();S.exports.useEffect(()=>{const u=c=>{c.key=="Enter"&&(c.preventDefault(),a(c))};return document.addEventListener("keypress",u),()=>{document.removeEventListener("keypress",u)}},[]);async function a(u){u.preventDefault();try{i(""),o(!0),await n(t.current.value,e.current.value),l("/")}catch{i("Failed to log in")}o(!1)}return j("div",{className:"flex flex-row h-full w-full",children:[v("div",{className:"w-1/2 bg-primary-dark"}),j("div",{className:"w-1/2 text-center flex flex-col items-center justify-center",children:[v("h1",{className:"text-2xl lg:text-[2.5rem] mb-3 font-bold",children:"Log in"}),v("p",{className:"text-sm lg:text-base text-secondary-light mb-6",children:"Enter your details to continue"}),r&&v("div",{className:"",children:v("h2",{children:r})}),v("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your email"}),v("input",{type:"email",ref:t,placeholder:"email@email.com",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),v("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your password"}),v("input",{type:"password",ref:e,placeholder:"******",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),j("div",{className:"flex w-3/4 max-w-md flex-row justify-between items-center m-3",children:[j("div",{children:[v("input",{type:"checkbox",className:"text-primary border border-primary accent-primary"}),v("p",{className:"inline mx-2",children:"Remember me"})]}),v(qn,{to:"/forgot-password",className:"text-primary",children:"Forgot password?"})]}),v("button",{type:"button",onClick:a,disabled:s,className:"w-3/4 max-w-md h-10 text-base text-white bg-primary border-primary rounded-lg",children:"Login"}),j("div",{className:"w-3/4 max-w-md mt-6 flex flex-row justify-center",children:[v("p",{className:"px-2",children:"I don't have an account."}),v(qn,{to:"/signup",className:"font-semibold",children:"Sign Up"})]})]})]})}function hr({to:t}){const{gameState:e,setGameState:n}=S.exports.useContext(fh);function r(){n(t)}return v("button",{className:"flex-auto transition ease-in-out duration-300 items-start justify-evenly bg-primary text-black dark:text-white hover:bg-primary-light cursor-pointer",onClick:r,disabled:e==="character-creation",children:t.charAt(0).toUpperCase()+t.slice(1)})}function sA(){return j("nav",{className:"w-100 flex h-10 flex-initial",children:[v(hr,{to:"character-screen"}),v(hr,{to:"adventure"}),v(hr,{to:"battle"}),v(hr,{to:"encyclopedia"}),v(hr,{to:"settings"}),v(hr,{to:"menu"})]})}class yc{constructor(e="",n=0,r=0,i=0,s=0,o=0,l=0,a=0,u=0,c=0,d=0,h=!1){le(this,"name","");le(this,"level",0);le(this,"hpMax",0);le(this,"currentHp",0);le(this,"encumbrence",0);le(this,"encumbrenceMax",0);le(this,"strength",0);le(this,"dexterity",0);le(this,"constitution",0);le(this,"intelligence",0);le(this,"wisdom",0);le(this,"charisma",0);le(this,"exp",0);le(this,"expNext",0);le(this,"damage",0);le(this,"availableSkillPoints",0);le(this,"availableAttributePoints",0);le(this,"isAlive",!0);this.name=e,this.level=n,this.hpMax=6+l*2,this.encumbrenceMax=20+s*3,this.strength=s,this.dexterity=o,this.constitution=l,this.intelligence=a,this.wisdom=u,this.charisma=c,this.exp=d,this.expNext=100+n*150,h?(this.currentHp=this.hpMax,this.encumbrence=0):(this.currentHp=r,this.encumbrence=i)}get damage(){return this.calcDamage()}levelUp(){this.level++,this.availableSkillPoints+=2,this.availableAttributePoints+=2,this.expNext=100+level*150}updateStats(){this.hpMax=6+constitution*2,this.encumbrenceMax=20+strength*3,this.expNext=100+level*150}levelUpSkill(e){switch(e){case 0:this.strength++,this.availableAttributePoints--;break;case 1:this.dexterity++,this.availableAttributePoints--;break;case 2:this.constitution++,this.availableAttributePoints--;break;case 3:this.intelligence++,this.availableAttributePoints--;break;case 4:this.wisdom++,this.availableAttributePoints--;break;case 5:this.charisma++,this.availableAttributePoints--;break}this.updateStats()}calcDamage(){return 2+this.strength*2}takeDamage(e){this.currentHp-=e,this.currentHp<=0&&(this.isAlive=!1)}}function hA(t,e){const n=t.email.split("@")[0],r=El(Sl,`users/${n}/characters/${e.name}`);Ky(r,{name:e.name,level:e.level,currentHp:e.currentHp,encumbrence:e.encumbrence,strength:e.strength,dexterity:e.dexterity,constitution:e.constitution,intelligence:e.intelligence,wisdom:e.wisdom,charisma:e.charisma,exp:e.exp})}function fA(t,e){const n=t.email.split("@")[0],r=El(Sl,`users/${n}/currentCharacter`);Ky(r,e.name)}function oA(t,e){const n=t.email.split("@")[0],r=El(Sl,`users/${n}/currentCharacter`);Kp(r).then(i=>{if(i.exists()){const s=t.email.split("@")[0],o=i.val();Kp(El(Sl,`users/${s}/characters`)).then(l=>{const u=l.val()[o],c=new yc(u.name,u.level,u.currentHp,u.encumbrence,u.strength,u.dexterity,u.constitution,u.intelligence,u.wisdom,u.charisma,u.exp,!1);e(c)}).catch(l=>{const a=new yc;a.hpMax=0,a.encumbrenceMax=0,e(a)})}else console.log("No previous character has been set as current")}).catch(i=>{console.log(i)})}function qp({children:t}){const{currentUser:e}=ur();return e?t:v(wS,{to:"/login"})}function lA(){const t=S.exports.useRef(),{resetPassword:e}=ur(),[n,r]=S.exports.useState(""),[i,s]=S.exports.useState(!1),[o,l]=S.exports.useState("");S.exports.useEffect(()=>{const u=c=>{c.key=="Enter"&&(c.preventDefault(),a(c))};return document.addEventListener("keypress",u),()=>{document.removeEventListener("keypress",u)}},[]);async function a(u){u.preventDefault();try{l(""),r(""),s(!0),await e(t.current.value),l("Check your inbox for further instructions!")}catch{r("Failed to reset password")}s(!1)}return j("div",{className:"flex flex-row h-full w-full",children:[v("div",{className:"w-1/2 bg-primary-dark"}),j("div",{className:"w-1/2 text-center flex flex-col items-center justify-center",children:[v("h1",{className:"text-2xl lg:text-[2.5rem] mb-3 font-bold",children:"Password reset"}),n&&v("div",{className:"text-primary",children:v("h2",{children:n})}),o&&v("div",{className:"text-secondary",children:v("h2",{children:o})}),v("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your email"}),v("input",{type:"email",ref:t,placeholder:"email@email.com",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),v("button",{type:"button",onClick:a,disabled:i,className:"w-3/4 max-w-md h-10 text-base text-white bg-primary border-primary rounded-lg",children:"Reset password"}),v("div",{className:"m-3",children:v(qn,{to:"/login",className:"font-semibold",children:"Login"})}),j("div",{className:"w-3/4 max-w-md flex flex-row justify-center",children:[v("p",{className:"px-2",children:"Need an account?"}),v(qn,{to:"/signup",className:"font-semibold",children:"Sign Up"})]})]})]})}function aA(){const t=S.exports.useRef(),e=S.exports.useRef(),n=S.exports.useRef(),{currentUser:r,updatePasswordAPI:i,updateEmailAPI:s}=ur(),[o,l]=S.exports.useState(""),[a,u]=S.exports.useState(!1),c=ei();function d(h){if(h.preventDefault(),e.current.value!==n.current.value)return l("Passwords do not match!");const p=[];u(!0),l(""),t.current.value!==r.email&&p.push(s(t.current.value)),e.current.value&&p.push(i(e.current.value)),Promise.all(p).then(()=>{c("/dashboard")}).catch(()=>{l("Failed to update account")}).finally(()=>{u(!1)})}return v("div",{className:"sign-up-cpntainer",children:j("div",{className:"sign-up",children:[v("h1",{children:"Update Profile"}),o&&v("div",{className:"sign-up-error",children:v("h2",{children:o})}),j("form",{onSubmit:d,children:[v("label",{children:"Email:"}),v("br",{}),v("input",{type:"email",ref:t,defaultValue:r.email}),v("br",{}),v("label",{children:"Password"}),v("br",{}),v("input",{type:"password",ref:e,placeholder:"Leave blank to keep the same"}),v("br",{}),v("label",{children:"Password confirmation"}),v("br",{}),v("input",{type:"password",ref:n,placeholder:"Leave blank to keep the same"}),v("button",{type:"submit",disabled:a,children:"Update"})]}),v("div",{children:v(qn,{to:"/dashboard",children:"Cancel"})})]})})}const Qy=S.exports.createContext(),fh=S.exports.createContext(),uA=new yc;function cA(){const[t,e]=S.exports.useState(uA),[n,r]=S.exports.useState("battle"),[i,s]=S.exports.useState({enabled:!1,icon:ao}),{currentUser:o}=ur();function l(){s(a=>(a.enabled?localStorage.theme="light":localStorage.theme="dark",{enabled:!a.enabled,icon:a.enabled?ao:Ma}))}return S.exports.useEffect(()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?s(()=>(localStorage.theme="dark",{enabled:!0,icon:ao})):s(()=>(localStorage.theme="light",{enabled:!1,icon:Ma}))},[]),S.exports.useEffect(()=>{oA(o,e)},[]),v("div",{className:`w-screen h-screen text-xs lg:text-base ${i.enabled?"dark":""}`,children:v(fh.Provider,{value:{gameState:n,setGameState:r},children:v(Qy.Provider,{value:{character:t,setCharacter:e},children:v(NS,{children:j(SS,{children:[v(An,{path:"/dashboard",element:v(qp,{children:v(rA,{})})}),v(An,{path:"/signup",element:v(nA,{})}),v(An,{path:"/login",element:v(iA,{})}),v(An,{path:"/forgot-password",element:v(lA,{})}),v(An,{exact:!0,path:"/",element:v(qp,{children:j("div",{className:"flex flex-col w-screen h-screen font-serif text-black dark:text-white bg-white dark:bg-black",children:[v("div",{children:v(sA,{})}),j("div",{className:"flex h-screen w-screen",children:[v(PS,{changeTheme:l,themeIcon:i.enabled?Ma:ao,character:t}),v(WS,{})]})]})})}),v(An,{path:"/update-profile",element:v(aA,{})})]})})})})})}tu.createRoot(document.getElementById("root")).render(v(Cc.StrictMode,{children:v(tA,{children:v(cA,{})})}));export{Qy as C,fh as G,v as a,yc as b,fA as c,j,S as r,hA as s,ur as u};
