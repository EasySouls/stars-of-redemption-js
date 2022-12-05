function vv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function wv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=Symbol.for("react.element"),Sv=Symbol.for("react.portal"),Ev=Symbol.for("react.fragment"),Iv=Symbol.for("react.strict_mode"),Cv=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),Tv=Symbol.for("react.context"),xv=Symbol.for("react.forward_ref"),Nv=Symbol.for("react.suspense"),Rv=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),jd=Symbol.iterator;function Pv(t){return t===null||typeof t!="object"?null:(t=jd&&t[jd]||t["@@iterator"],typeof t=="function"?t:null)}var Sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ep=Object.assign,Ip={};function Gr(t,e,n){this.props=t,this.context=e,this.refs=Ip,this.updater=n||Sp}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cp(){}Cp.prototype=Gr.prototype;function Zu(t,e,n){this.props=t,this.context=e,this.refs=Ip,this.updater=n||Sp}var ec=Zu.prototype=new Cp;ec.constructor=Zu;Ep(ec,Gr.prototype);ec.isPureReactComponent=!0;var Hd=Array.isArray,kp=Object.prototype.hasOwnProperty,tc={current:null},Tp={key:!0,ref:!0,__self:!0,__source:!0};function xp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kp.call(e,r)&&!Tp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fs,type:t,key:s,ref:o,props:i,_owner:tc.current}}function bv(t,e){return{$$typeof:fs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nc(t){return typeof t=="object"&&t!==null&&t.$$typeof===fs}function Ov(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vd=/\/+/g;function Bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ov(""+t.key):e.toString(36)}function Js(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fs:case Sv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bl(o,0):r,Hd(i)?(n="",t!=null&&(n=t.replace(Vd,"$&/")+"/"),Js(i,e,n,"",function(u){return u})):i!=null&&(nc(i)&&(i=bv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Bl(s,l);o+=Js(s,e,n,a,i)}else if(a=Pv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Bl(s,l++),o+=Js(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ps(t,e,n){if(t==null)return t;var r=[],i=0;return Js(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Dv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},Zs={transition:null},Mv={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Zs,ReactCurrentOwner:tc};F.Children={map:Ps,forEach:function(t,e,n){Ps(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ps(t,function(){e++}),e},toArray:function(t){return Ps(t,function(e){return e})||[]},only:function(t){if(!nc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=Gr;F.Fragment=Ev;F.Profiler=Cv;F.PureComponent=Zu;F.StrictMode=Iv;F.Suspense=Nv;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ep({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)kp.call(e,a)&&!Tp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:fs,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:Tv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kv,_context:t},t.Consumer=t};F.createElement=xp;F.createFactory=function(t){var e=xp.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:xv,render:t}};F.isValidElement=nc;F.lazy=function(t){return{$$typeof:Av,_payload:{_status:-1,_result:t},_init:Dv}};F.memo=function(t,e){return{$$typeof:Rv,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=Zs.transition;Zs.transition={};try{t()}finally{Zs.transition=e}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(t,e){return Ae.current.useCallback(t,e)};F.useContext=function(t){return Ae.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};F.useEffect=function(t,e){return Ae.current.useEffect(t,e)};F.useId=function(){return Ae.current.useId()};F.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return Ae.current.useMemo(t,e)};F.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};F.useRef=function(t){return Ae.current.useRef(t)};F.useState=function(t){return Ae.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return Ae.current.useTransition()};F.version="18.2.0";(function(t){t.exports=F})(E);const rc=wv(E.exports),ba=vv({__proto__:null,default:rc},[E.exports]);var Oa={},Np={exports:{}},Ve={},Rp={exports:{}},Ap={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,O){var D=T.length;T.push(O);e:for(;0<D;){var re=D-1>>>1,ce=T[re];if(0<i(ce,O))T[re]=O,T[D]=ce,D=re;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],D=T.pop();if(D!==O){T[0]=D;e:for(var re=0,ce=T.length,Rs=ce>>>1;re<Rs;){var Sn=2*(re+1)-1,zl=T[Sn],En=Sn+1,As=T[En];if(0>i(zl,D))En<ce&&0>i(As,zl)?(T[re]=As,T[En]=D,re=En):(T[re]=zl,T[Sn]=D,re=Sn);else if(En<ce&&0>i(As,D))T[re]=As,T[En]=D,re=En;else break e}}return O}function i(T,O){var D=T.sortIndex-O.sortIndex;return D!==0?D:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,m=!1,_=!1,v=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function w(T){if(v=!1,g(T),!_)if(n(a)!==null)_=!0,Fl(C);else{var O=n(u);O!==null&&Ul(w,O.startTime-T)}}function C(T,O){_=!1,v&&(v=!1,p(P),P=-1),m=!0;var D=h;try{for(g(O),d=n(a);d!==null&&(!(d.expirationTime>O)||T&&!nt());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var ce=re(d.expirationTime<=O);O=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(a)&&r(a),g(O)}else r(a);d=n(a)}if(d!==null)var Rs=!0;else{var Sn=n(u);Sn!==null&&Ul(w,Sn.startTime-O),Rs=!1}return Rs}finally{d=null,h=D,m=!1}}var x=!1,N=null,P=-1,G=5,M=-1;function nt(){return!(t.unstable_now()-M<G)}function oi(){if(N!==null){var T=t.unstable_now();M=T;var O=!0;try{O=N(!0,T)}finally{O?li():(x=!1,N=null)}}else x=!1}var li;if(typeof f=="function")li=function(){f(oi)};else if(typeof MessageChannel<"u"){var Wd=new MessageChannel,yv=Wd.port2;Wd.port1.onmessage=oi,li=function(){yv.postMessage(null)}}else li=function(){R(oi,0)};function Fl(T){N=T,x||(x=!0,li())}function Ul(T,O){P=R(function(){T(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Fl(C))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var D=h;h=O;try{return T()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=h;h=T;try{return O()}finally{h=D}},t.unstable_scheduleCallback=function(T,O,D){var re=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?re+D:re):D=re,T){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=D+ce,T={id:c++,callback:O,priorityLevel:T,startTime:D,expirationTime:ce,sortIndex:-1},D>re?(T.sortIndex=D,e(u,T),n(a)===null&&T===n(u)&&(v?(p(P),P=-1):v=!0,Ul(w,D-re))):(T.sortIndex=ce,e(a,T),_||m||(_=!0,Fl(C))),T},t.unstable_shouldYield=nt,t.unstable_wrapCallback=function(T){var O=h;return function(){var D=h;h=O;try{return T.apply(this,arguments)}finally{h=D}}}})(Ap);(function(t){t.exports=Ap})(Rp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=E.exports,He=Rp.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bp=new Set,Wi={};function Jn(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(Wi[t]=e,t=0;t<e.length;t++)bp.add(e[t])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Da=Object.prototype.hasOwnProperty,Lv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$d={},Gd={};function Fv(t){return Da.call(Gd,t)?!0:Da.call($d,t)?!1:Lv.test(t)?Gd[t]=!0:($d[t]=!0,!1)}function Uv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zv(t,e,n,r){if(e===null||typeof e>"u"||Uv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new Pe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new Pe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new Pe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new Pe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new Pe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new Pe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new Pe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new Pe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new Pe(t,5,!1,t.toLowerCase(),null,!1,!1)});var ic=/[\-:]([a-z])/g;function sc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ic,sc);we[e]=new Pe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ic,sc);we[e]=new Pe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ic,sc);we[e]=new Pe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new Pe(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new Pe(t,1,!1,t.toLowerCase(),null,!0,!0)});function oc(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zv(e,n,i,r)&&(n=null),r||i===null?Fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wt=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bs=Symbol.for("react.element"),cr=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),Op=Symbol.for("react.provider"),Dp=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),uc=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),Mp=Symbol.for("react.offscreen"),Kd=Symbol.iterator;function ai(t){return t===null||typeof t!="object"?null:(t=Kd&&t[Kd]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,Wl;function Si(t){if(Wl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wl=e&&e[1]||""}return`
`+Wl+t}var jl=!1;function Hl(t,e){if(!t||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Si(t):""}function Bv(t){switch(t.tag){case 5:return Si(t.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return t=Hl(t.type,!1),t;case 11:return t=Hl(t.type.render,!1),t;case 1:return t=Hl(t.type,!0),t;default:return""}}function Ua(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case dr:return"Fragment";case cr:return"Portal";case Ma:return"Profiler";case lc:return"StrictMode";case La:return"Suspense";case Fa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dp:return(t.displayName||"Context")+".Consumer";case Op:return(t._context.displayName||"Context")+".Provider";case ac:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uc:return e=t.displayName||null,e!==null?e:Ua(t.type)||"Memo";case $t:e=t._payload,t=t._init;try{return Ua(t(e))}catch{}}return null}function Wv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ua(e);case 8:return e===lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jv(t){var e=Lp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Os(t){t._valueTracker||(t._valueTracker=jv(t))}function Fp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Lp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function za(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function qd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Up(t,e){e=e.checked,e!=null&&oc(t,"checked",e,!1)}function Ba(t,e){Up(t,e);var n=mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wa(t,e.type,mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wa(t,e,n){(e!=="number"||mo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ei=Array.isArray;function Cr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ja(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Ei(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mn(n)}}function zp(t,e){var n=mn(e.value),r=mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ha(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ds,Wp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ds=Ds||document.createElement("div"),Ds.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ds.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ji(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hv=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(t){Hv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xi[e]=xi[t]})});function jp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xi.hasOwnProperty(t)&&xi[t]?(""+e).trim():e+"px"}function Hp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Vv=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(t,e){if(e){if(Vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function $a(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ga=null;function cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ka=null,kr=null,Tr=null;function Jd(t){if(t=gs(t)){if(typeof Ka!="function")throw Error(S(280));var e=t.stateNode;e&&(e=ll(e),Ka(t.stateNode,t.type,e))}}function Vp(t){kr?Tr?Tr.push(t):Tr=[t]:kr=t}function $p(){if(kr){var t=kr,e=Tr;if(Tr=kr=null,Jd(t),e)for(t=0;t<e.length;t++)Jd(e[t])}}function Gp(t,e){return t(e)}function Kp(){}var Vl=!1;function qp(t,e,n){if(Vl)return t(e,n);Vl=!0;try{return Gp(t,e,n)}finally{Vl=!1,(kr!==null||Tr!==null)&&(Kp(),$p())}}function Hi(t,e){var n=t.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var qa=!1;if(Dt)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){qa=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{qa=!1}function $v(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ni=!1,go=null,_o=!1,Ya=null,Gv={onError:function(t){Ni=!0,go=t}};function Kv(t,e,n,r,i,s,o,l,a){Ni=!1,go=null,$v.apply(Gv,arguments)}function qv(t,e,n,r,i,s,o,l,a){if(Kv.apply(this,arguments),Ni){if(Ni){var u=go;Ni=!1,go=null}else throw Error(S(198));_o||(_o=!0,Ya=u)}}function Zn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zd(t){if(Zn(t)!==t)throw Error(S(188))}function Yv(t){var e=t.alternate;if(!e){if(e=Zn(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zd(i),t;if(s===r)return Zd(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Qp(t){return t=Yv(t),t!==null?Xp(t):null}function Xp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xp(t);if(e!==null)return e;t=t.sibling}return null}var Jp=He.unstable_scheduleCallback,eh=He.unstable_cancelCallback,Qv=He.unstable_shouldYield,Xv=He.unstable_requestPaint,ie=He.unstable_now,Jv=He.unstable_getCurrentPriorityLevel,dc=He.unstable_ImmediatePriority,Zp=He.unstable_UserBlockingPriority,yo=He.unstable_NormalPriority,Zv=He.unstable_LowPriority,em=He.unstable_IdlePriority,rl=null,vt=null;function e0(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(rl,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:r0,t0=Math.log,n0=Math.LN2;function r0(t){return t>>>=0,t===0?32:31-(t0(t)/n0|0)|0}var Ms=64,Ls=4194304;function Ii(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ii(l):(s&=o,s!==0&&(r=Ii(s)))}else o=n&~i,o!==0?r=Ii(o):s!==0&&(r=Ii(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ut(e),i=1<<n,r|=t[n],e&=~i;return r}function i0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ut(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=i0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Qa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tm(){var t=Ms;return Ms<<=1,(Ms&4194240)===0&&(Ms=64),t}function $l(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ps(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ut(e),t[e]=n}function o0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var j=0;function nm(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var rm,fc,im,sm,om,Xa=!1,Fs=[],nn=null,rn=null,sn=null,Vi=new Map,$i=new Map,Kt=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function th(t,e){switch(t){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Vi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(e.pointerId)}}function ci(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=gs(e),e!==null&&fc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function a0(t,e,n,r,i){switch(e){case"focusin":return nn=ci(nn,t,e,n,r,i),!0;case"dragenter":return rn=ci(rn,t,e,n,r,i),!0;case"mouseover":return sn=ci(sn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vi.set(s,ci(Vi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$i.set(s,ci($i.get(s)||null,t,e,n,r,i)),!0}return!1}function lm(t){var e=Nn(t.target);if(e!==null){var n=Zn(e);if(n!==null){if(e=n.tag,e===13){if(e=Yp(n),e!==null){t.blockedOn=e,om(t.priority,function(){im(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ja(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ga=r,n.target.dispatchEvent(r),Ga=null}else return e=gs(n),e!==null&&fc(e),t.blockedOn=n,!1;e.shift()}return!0}function nh(t,e,n){eo(t)&&n.delete(e)}function u0(){Xa=!1,nn!==null&&eo(nn)&&(nn=null),rn!==null&&eo(rn)&&(rn=null),sn!==null&&eo(sn)&&(sn=null),Vi.forEach(nh),$i.forEach(nh)}function di(t,e){t.blockedOn===e&&(t.blockedOn=null,Xa||(Xa=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,u0)))}function Gi(t){function e(i){return di(i,t)}if(0<Fs.length){di(Fs[0],t);for(var n=1;n<Fs.length;n++){var r=Fs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nn!==null&&di(nn,t),rn!==null&&di(rn,t),sn!==null&&di(sn,t),Vi.forEach(e),$i.forEach(e),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)lm(n),n.blockedOn===null&&Kt.shift()}var xr=Wt.ReactCurrentBatchConfig,wo=!0;function c0(t,e,n,r){var i=j,s=xr.transition;xr.transition=null;try{j=1,pc(t,e,n,r)}finally{j=i,xr.transition=s}}function d0(t,e,n,r){var i=j,s=xr.transition;xr.transition=null;try{j=4,pc(t,e,n,r)}finally{j=i,xr.transition=s}}function pc(t,e,n,r){if(wo){var i=Ja(t,e,n,r);if(i===null)ta(t,e,r,So,n),th(t,r);else if(a0(i,t,e,n,r))r.stopPropagation();else if(th(t,r),e&4&&-1<l0.indexOf(t)){for(;i!==null;){var s=gs(i);if(s!==null&&rm(s),s=Ja(t,e,n,r),s===null&&ta(t,e,r,So,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ta(t,e,r,null,n)}}var So=null;function Ja(t,e,n,r){if(So=null,t=cc(r),t=Nn(t),t!==null)if(e=Zn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return So=t,null}function am(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jv()){case dc:return 1;case Zp:return 4;case yo:case Zv:return 16;case em:return 536870912;default:return 16}default:return 16}}var Zt=null,mc=null,to=null;function um(){if(to)return to;var t,e=mc,n=e.length,r,i="value"in Zt?Zt.value:Zt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return to=i.slice(t,1<r?1-r:void 0)}function no(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Us(){return!0}function rh(){return!1}function $e(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Us:rh,this.isPropagationStopped=rh,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Us)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Us)},persist:function(){},isPersistent:Us}),e}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=$e(Kr),ms=te({},Kr,{view:0,detail:0}),h0=$e(ms),Gl,Kl,hi,il=te({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hi&&(hi&&t.type==="mousemove"?(Gl=t.screenX-hi.screenX,Kl=t.screenY-hi.screenY):Kl=Gl=0,hi=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),ih=$e(il),f0=te({},il,{dataTransfer:0}),p0=$e(f0),m0=te({},ms,{relatedTarget:0}),ql=$e(m0),g0=te({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),_0=$e(g0),y0=te({},Kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v0=$e(y0),w0=te({},Kr,{data:0}),sh=$e(w0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=I0[t])?!!e[t]:!1}function _c(){return C0}var k0=te({},ms,{key:function(t){if(t.key){var e=S0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=no(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(t){return t.type==="keypress"?no(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?no(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T0=$e(k0),x0=te({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=$e(x0),N0=te({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),R0=$e(N0),A0=te({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),P0=$e(A0),b0=te({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),O0=$e(b0),D0=[9,13,27,32],yc=Dt&&"CompositionEvent"in window,Ri=null;Dt&&"documentMode"in document&&(Ri=document.documentMode);var M0=Dt&&"TextEvent"in window&&!Ri,cm=Dt&&(!yc||Ri&&8<Ri&&11>=Ri),lh=String.fromCharCode(32),ah=!1;function dm(t,e){switch(t){case"keyup":return D0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hr=!1;function L0(t,e){switch(t){case"compositionend":return hm(e);case"keypress":return e.which!==32?null:(ah=!0,lh);case"textInput":return t=e.data,t===lh&&ah?null:t;default:return null}}function F0(t,e){if(hr)return t==="compositionend"||!yc&&dm(t,e)?(t=um(),to=mc=Zt=null,hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cm&&e.locale!=="ko"?null:e.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!U0[t.type]:e==="textarea"}function fm(t,e,n,r){Vp(r),e=Eo(e,"onChange"),0<e.length&&(n=new gc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ai=null,Ki=null;function z0(t){Cm(t,0)}function sl(t){var e=mr(t);if(Fp(e))return t}function B0(t,e){if(t==="change")return e}var pm=!1;if(Dt){var Yl;if(Dt){var Ql="oninput"in document;if(!Ql){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),Ql=typeof ch.oninput=="function"}Yl=Ql}else Yl=!1;pm=Yl&&(!document.documentMode||9<document.documentMode)}function dh(){Ai&&(Ai.detachEvent("onpropertychange",mm),Ki=Ai=null)}function mm(t){if(t.propertyName==="value"&&sl(Ki)){var e=[];fm(e,Ki,t,cc(t)),qp(z0,e)}}function W0(t,e,n){t==="focusin"?(dh(),Ai=e,Ki=n,Ai.attachEvent("onpropertychange",mm)):t==="focusout"&&dh()}function j0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(Ki)}function H0(t,e){if(t==="click")return sl(e)}function V0(t,e){if(t==="input"||t==="change")return sl(e)}function $0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ht=typeof Object.is=="function"?Object.is:$0;function qi(t,e){if(ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Da.call(e,i)||!ht(t[i],e[i]))return!1}return!0}function hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fh(t,e){var n=hh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hh(n)}}function gm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _m(){for(var t=window,e=mo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mo(t.document)}return e}function vc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function G0(t){var e=_m(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gm(n.ownerDocument.documentElement,n)){if(r!==null&&vc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fh(n,s);var o=fh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var K0=Dt&&"documentMode"in document&&11>=document.documentMode,fr=null,Za=null,Pi=null,eu=!1;function ph(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eu||fr==null||fr!==mo(r)||(r=fr,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&qi(Pi,r)||(Pi=r,r=Eo(Za,"onSelect"),0<r.length&&(e=new gc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fr)))}function zs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var pr={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},Xl={},ym={};Dt&&(ym=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function ol(t){if(Xl[t])return Xl[t];if(!pr[t])return t;var e=pr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ym)return Xl[t]=e[n];return t}var vm=ol("animationend"),wm=ol("animationiteration"),Sm=ol("animationstart"),Em=ol("transitionend"),Im=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(t,e){Im.set(t,e),Jn(e,[t])}for(var Jl=0;Jl<mh.length;Jl++){var Zl=mh[Jl],q0=Zl.toLowerCase(),Y0=Zl[0].toUpperCase()+Zl.slice(1);yn(q0,"on"+Y0)}yn(vm,"onAnimationEnd");yn(wm,"onAnimationIteration");yn(Sm,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Em,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function gh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qv(r,e,void 0,t),t.currentTarget=null}function Cm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;gh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;gh(i,l,u),s=a}}}if(_o)throw t=Ya,_o=!1,Ya=null,t}function K(t,e){var n=e[su];n===void 0&&(n=e[su]=new Set);var r=t+"__bubble";n.has(r)||(km(e,t,2,!1),n.add(r))}function ea(t,e,n){var r=0;e&&(r|=4),km(n,t,r,e)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function Yi(t){if(!t[Bs]){t[Bs]=!0,bp.forEach(function(n){n!=="selectionchange"&&(Q0.has(n)||ea(n,!1,t),ea(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bs]||(e[Bs]=!0,ea("selectionchange",!1,e))}}function km(t,e,n,r){switch(am(e)){case 1:var i=c0;break;case 4:i=d0;break;default:i=pc}n=i.bind(null,e,n,t),i=void 0,!qa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ta(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Nn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}qp(function(){var u=s,c=cc(n),d=[];e:{var h=Im.get(t);if(h!==void 0){var m=gc,_=t;switch(t){case"keypress":if(no(n)===0)break e;case"keydown":case"keyup":m=T0;break;case"focusin":_="focus",m=ql;break;case"focusout":_="blur",m=ql;break;case"beforeblur":case"afterblur":m=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=R0;break;case vm:case wm:case Sm:m=_0;break;case Em:m=P0;break;case"scroll":m=h0;break;case"wheel":m=O0;break;case"copy":case"cut":case"paste":m=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=oh}var v=(e&4)!==0,R=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=Hi(f,p),w!=null&&v.push(Qi(f,w,g)))),R)break;f=f.return}0<v.length&&(h=new m(h,_,null,n,c),d.push({event:h,listeners:v}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Ga&&(_=n.relatedTarget||n.fromElement)&&(Nn(_)||_[Mt]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Nn(_):null,_!==null&&(R=Zn(_),_!==R||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(v=ih,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=oh,w="onPointerLeave",p="onPointerEnter",f="pointer"),R=m==null?h:mr(m),g=_==null?h:mr(_),h=new v(w,f+"leave",m,n,c),h.target=R,h.relatedTarget=g,w=null,Nn(c)===u&&(v=new v(p,f+"enter",_,n,c),v.target=g,v.relatedTarget=R,w=v),R=w,m&&_)t:{for(v=m,p=_,f=0,g=v;g;g=or(g))f++;for(g=0,w=p;w;w=or(w))g++;for(;0<f-g;)v=or(v),f--;for(;0<g-f;)p=or(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=or(v),p=or(p)}v=null}else v=null;m!==null&&_h(d,h,m,v,!1),_!==null&&R!==null&&_h(d,R,_,v,!0)}}e:{if(h=u?mr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=B0;else if(uh(h))if(pm)C=V0;else{C=j0;var x=W0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=H0);if(C&&(C=C(t,u))){fm(d,C,n,c);break e}x&&x(t,h,u),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&Wa(h,"number",h.value)}switch(x=u?mr(u):window,t){case"focusin":(uh(x)||x.contentEditable==="true")&&(fr=x,Za=u,Pi=null);break;case"focusout":Pi=Za=fr=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,ph(d,n,c);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":ph(d,n,c)}var N;if(yc)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else hr?dm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(cm&&n.locale!=="ko"&&(hr||P!=="onCompositionStart"?P==="onCompositionEnd"&&hr&&(N=um()):(Zt=c,mc="value"in Zt?Zt.value:Zt.textContent,hr=!0)),x=Eo(u,P),0<x.length&&(P=new sh(P,t,null,n,c),d.push({event:P,listeners:x}),N?P.data=N:(N=hm(n),N!==null&&(P.data=N)))),(N=M0?L0(t,n):F0(t,n))&&(u=Eo(u,"onBeforeInput"),0<u.length&&(c=new sh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}Cm(d,e)})}function Qi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Eo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Hi(t,n),s!=null&&r.unshift(Qi(t,s,i)),s=Hi(t,e),s!=null&&r.push(Qi(t,s,i))),t=t.return}return r}function or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _h(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Hi(n,s),a!=null&&o.unshift(Qi(n,a,l))):i||(a=Hi(n,s),a!=null&&o.push(Qi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var X0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function yh(t){return(typeof t=="string"?t:""+t).replace(X0,`
`).replace(J0,"")}function Ws(t,e,n){if(e=yh(e),yh(t)!==e&&n)throw Error(S(425))}function Io(){}var tu=null,nu=null;function ru(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,vh=typeof Promise=="function"?Promise:void 0,ew=typeof queueMicrotask=="function"?queueMicrotask:typeof vh<"u"?function(t){return vh.resolve(null).then(t).catch(tw)}:iu;function tw(t){setTimeout(function(){throw t})}function na(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Gi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gi(e)}function on(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qr=Math.random().toString(36).slice(2),_t="__reactFiber$"+qr,Xi="__reactProps$"+qr,Mt="__reactContainer$"+qr,su="__reactEvents$"+qr,nw="__reactListeners$"+qr,rw="__reactHandles$"+qr;function Nn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mt]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wh(t);t!==null;){if(n=t[_t])return n;t=wh(t)}return e}t=n,n=t.parentNode}return null}function gs(t){return t=t[_t]||t[Mt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function ll(t){return t[Xi]||null}var ou=[],gr=-1;function vn(t){return{current:t}}function Q(t){0>gr||(t.current=ou[gr],ou[gr]=null,gr--)}function $(t,e){gr++,ou[gr]=t.current,t.current=e}var gn={},Te=vn(gn),Me=vn(!1),Un=gn;function Lr(t,e){var n=t.type.contextTypes;if(!n)return gn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Le(t){return t=t.childContextTypes,t!=null}function Co(){Q(Me),Q(Te)}function Sh(t,e,n){if(Te.current!==gn)throw Error(S(168));$(Te,e),$(Me,n)}function Tm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,Wv(t)||"Unknown",i));return te({},n,r)}function ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gn,Un=Te.current,$(Te,t),$(Me,Me.current),!0}function Eh(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Tm(t,e,Un),r.__reactInternalMemoizedMergedChildContext=t,Q(Me),Q(Te),$(Te,t)):Q(Me),$(Me,n)}var Tt=null,al=!1,ra=!1;function xm(t){Tt===null?Tt=[t]:Tt.push(t)}function iw(t){al=!0,xm(t)}function wn(){if(!ra&&Tt!==null){ra=!0;var t=0,e=j;try{var n=Tt;for(j=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tt=null,al=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(t+1)),Jp(dc,wn),i}finally{j=e,ra=!1}}return null}var _r=[],yr=0,To=null,xo=0,Ge=[],Ke=0,zn=null,xt=1,Nt="";function In(t,e){_r[yr++]=xo,_r[yr++]=To,To=t,xo=e}function Nm(t,e,n){Ge[Ke++]=xt,Ge[Ke++]=Nt,Ge[Ke++]=zn,zn=t;var r=xt;t=Nt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var s=32-ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xt=1<<32-ut(e)+i|n<<i|r,Nt=s+t}else xt=1<<s|n<<i|r,Nt=t}function wc(t){t.return!==null&&(In(t,1),Nm(t,1,0))}function Sc(t){for(;t===To;)To=_r[--yr],_r[yr]=null,xo=_r[--yr],_r[yr]=null;for(;t===zn;)zn=Ge[--Ke],Ge[Ke]=null,Nt=Ge[--Ke],Ge[Ke]=null,xt=Ge[--Ke],Ge[Ke]=null}var We=null,Be=null,J=!1,ot=null;function Rm(t,e){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ih(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,We=t,Be=on(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,We=t,Be=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zn!==null?{id:xt,overflow:Nt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,We=t,Be=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function au(t){if(J){var e=Be;if(e){var n=e;if(!Ih(t,e)){if(lu(t))throw Error(S(418));e=on(n.nextSibling);var r=We;e&&Ih(t,e)?Rm(r,n):(t.flags=t.flags&-4097|2,J=!1,We=t)}}else{if(lu(t))throw Error(S(418));t.flags=t.flags&-4097|2,J=!1,We=t}}}function Ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;We=t}function js(t){if(t!==We)return!1;if(!J)return Ch(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ru(t.type,t.memoizedProps)),e&&(e=Be)){if(lu(t))throw Am(),Error(S(418));for(;e;)Rm(t,e),e=on(e.nextSibling)}if(Ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Be=on(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Be=null}}else Be=We?on(t.stateNode.nextSibling):null;return!0}function Am(){for(var t=Be;t;)t=on(t.nextSibling)}function Fr(){Be=We=null,J=!1}function Ec(t){ot===null?ot=[t]:ot.push(t)}var sw=Wt.ReactCurrentBatchConfig;function it(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var No=vn(null),Ro=null,vr=null,Ic=null;function Cc(){Ic=vr=Ro=null}function kc(t){var e=No.current;Q(No),t._currentValue=e}function uu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Nr(t,e){Ro=t,Ic=vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Oe=!0),t.firstContext=null)}function Ze(t){var e=t._currentValue;if(Ic!==t)if(t={context:t,memoizedValue:e,next:null},vr===null){if(Ro===null)throw Error(S(308));vr=t,Ro.dependencies={lanes:0,firstContext:t}}else vr=vr.next=t;return e}var Rn=null;function Tc(t){Rn===null?Rn=[t]:Rn.push(t)}function Pm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Tc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Lt(t,r)}function Lt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gt=!1;function xc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ln(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Lt(t,n)}return i=r.interleaved,i===null?(e.next=e,Tc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Lt(t,n)}function ro(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hc(t,n)}}function kh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ao(t,e,n,r){var i=t.updateQueue;Gt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,m=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,m=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=te({},d,h);break e;case 2:Gt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,a=d):c=c.next=m,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wn|=o,t.lanes=o,t.memoizedState=d}}function Th(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Om=new Pp.Component().refs;function cu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ul={isMounted:function(t){return(t=t._reactInternals)?Zn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Re(),i=un(t),s=bt(r,i);s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ct(e,t,i,r),ro(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Re(),i=un(t),s=bt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ct(e,t,i,r),ro(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),r=un(t),i=bt(n,r);i.tag=2,e!=null&&(i.callback=e),e=ln(t,i,r),e!==null&&(ct(e,t,r,n),ro(e,t,r))}};function xh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qi(n,r)||!qi(i,s):!0}function Dm(t,e,n){var r=!1,i=gn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ze(s):(i=Le(e)?Un:Te.current,r=e.contextTypes,s=(r=r!=null)?Lr(t,i):gn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ul,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ul.enqueueReplaceState(e,e.state,null)}function du(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Om,xc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ze(s):(s=Le(e)?Un:Te.current,i.context=Lr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ul.enqueueReplaceState(i,i.state,null),Ao(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Om&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Hs(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rh(t){var e=t._init;return e(t._payload)}function Mm(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=cn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,w){return f===null||f.tag!==6?(f=ca(g,p.mode,w),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,w){var C=g.type;return C===dr?c(p,f,g.props.children,w,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$t&&Rh(C)===f.type)?(w=i(f,g.props),w.ref=fi(p,f,g),w.return=p,w):(w=uo(g.type,g.key,g.props,null,p.mode,w),w.ref=fi(p,f,g),w.return=p,w)}function u(p,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=da(g,p.mode,w),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,w,C){return f===null||f.tag!==7?(f=Mn(g,p.mode,w,C),f.return=p,f):(f=i(f,g),f.return=p,f)}function d(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ca(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bs:return g=uo(f.type,f.key,f.props,null,p.mode,g),g.ref=fi(p,null,f),g.return=p,g;case cr:return f=da(f,p.mode,g),f.return=p,f;case $t:var w=f._init;return d(p,w(f._payload),g)}if(Ei(f)||ai(f))return f=Mn(f,p.mode,g,null),f.return=p,f;Hs(p,f)}return null}function h(p,f,g,w){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(p,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bs:return g.key===C?a(p,f,g,w):null;case cr:return g.key===C?u(p,f,g,w):null;case $t:return C=g._init,h(p,f,C(g._payload),w)}if(Ei(g)||ai(g))return C!==null?null:c(p,f,g,w,null);Hs(p,g)}return null}function m(p,f,g,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,l(f,p,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case bs:return p=p.get(w.key===null?g:w.key)||null,a(f,p,w,C);case cr:return p=p.get(w.key===null?g:w.key)||null,u(f,p,w,C);case $t:var x=w._init;return m(p,f,g,x(w._payload),C)}if(Ei(w)||ai(w))return p=p.get(g)||null,c(f,p,w,C,null);Hs(f,w)}return null}function _(p,f,g,w){for(var C=null,x=null,N=f,P=f=0,G=null;N!==null&&P<g.length;P++){N.index>P?(G=N,N=null):G=N.sibling;var M=h(p,N,g[P],w);if(M===null){N===null&&(N=G);break}t&&N&&M.alternate===null&&e(p,N),f=s(M,f,P),x===null?C=M:x.sibling=M,x=M,N=G}if(P===g.length)return n(p,N),J&&In(p,P),C;if(N===null){for(;P<g.length;P++)N=d(p,g[P],w),N!==null&&(f=s(N,f,P),x===null?C=N:x.sibling=N,x=N);return J&&In(p,P),C}for(N=r(p,N);P<g.length;P++)G=m(N,p,P,g[P],w),G!==null&&(t&&G.alternate!==null&&N.delete(G.key===null?P:G.key),f=s(G,f,P),x===null?C=G:x.sibling=G,x=G);return t&&N.forEach(function(nt){return e(p,nt)}),J&&In(p,P),C}function v(p,f,g,w){var C=ai(g);if(typeof C!="function")throw Error(S(150));if(g=C.call(g),g==null)throw Error(S(151));for(var x=C=null,N=f,P=f=0,G=null,M=g.next();N!==null&&!M.done;P++,M=g.next()){N.index>P?(G=N,N=null):G=N.sibling;var nt=h(p,N,M.value,w);if(nt===null){N===null&&(N=G);break}t&&N&&nt.alternate===null&&e(p,N),f=s(nt,f,P),x===null?C=nt:x.sibling=nt,x=nt,N=G}if(M.done)return n(p,N),J&&In(p,P),C;if(N===null){for(;!M.done;P++,M=g.next())M=d(p,M.value,w),M!==null&&(f=s(M,f,P),x===null?C=M:x.sibling=M,x=M);return J&&In(p,P),C}for(N=r(p,N);!M.done;P++,M=g.next())M=m(N,p,P,M.value,w),M!==null&&(t&&M.alternate!==null&&N.delete(M.key===null?P:M.key),f=s(M,f,P),x===null?C=M:x.sibling=M,x=M);return t&&N.forEach(function(oi){return e(p,oi)}),J&&In(p,P),C}function R(p,f,g,w){if(typeof g=="object"&&g!==null&&g.type===dr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bs:e:{for(var C=g.key,x=f;x!==null;){if(x.key===C){if(C=g.type,C===dr){if(x.tag===7){n(p,x.sibling),f=i(x,g.props.children),f.return=p,p=f;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$t&&Rh(C)===x.type){n(p,x.sibling),f=i(x,g.props),f.ref=fi(p,x,g),f.return=p,p=f;break e}n(p,x);break}else e(p,x);x=x.sibling}g.type===dr?(f=Mn(g.props.children,p.mode,w,g.key),f.return=p,p=f):(w=uo(g.type,g.key,g.props,null,p.mode,w),w.ref=fi(p,f,g),w.return=p,p=w)}return o(p);case cr:e:{for(x=g.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=da(g,p.mode,w),f.return=p,p=f}return o(p);case $t:return x=g._init,R(p,f,x(g._payload),w)}if(Ei(g))return _(p,f,g,w);if(ai(g))return v(p,f,g,w);Hs(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=ca(g,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return R}var Ur=Mm(!0),Lm=Mm(!1),_s={},wt=vn(_s),Ji=vn(_s),Zi=vn(_s);function An(t){if(t===_s)throw Error(S(174));return t}function Nc(t,e){switch($(Zi,e),$(Ji,t),$(wt,_s),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ha(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ha(e,t)}Q(wt),$(wt,e)}function zr(){Q(wt),Q(Ji),Q(Zi)}function Fm(t){An(Zi.current);var e=An(wt.current),n=Ha(e,t.type);e!==n&&($(Ji,t),$(wt,n))}function Rc(t){Ji.current===t&&(Q(wt),Q(Ji))}var Z=vn(0);function Po(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ia=[];function Ac(){for(var t=0;t<ia.length;t++)ia[t]._workInProgressVersionPrimary=null;ia.length=0}var io=Wt.ReactCurrentDispatcher,sa=Wt.ReactCurrentBatchConfig,Bn=0,ee=null,oe=null,he=null,bo=!1,bi=!1,es=0,ow=0;function Se(){throw Error(S(321))}function Pc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ht(t[n],e[n]))return!1;return!0}function bc(t,e,n,r,i,s){if(Bn=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,io.current=t===null||t.memoizedState===null?cw:dw,t=n(r,i),bi){s=0;do{if(bi=!1,es=0,25<=s)throw Error(S(301));s+=1,he=oe=null,e.updateQueue=null,io.current=hw,t=n(r,i)}while(bi)}if(io.current=Oo,e=oe!==null&&oe.next!==null,Bn=0,he=oe=ee=null,bo=!1,e)throw Error(S(300));return t}function Oc(){var t=es!==0;return es=0,t}function gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=t:he=he.next=t,he}function et(){if(oe===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=he===null?ee.memoizedState:he.next;if(e!==null)he=e,oe=t;else{if(t===null)throw Error(S(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},he===null?ee.memoizedState=he=t:he=he.next=t}return he}function ts(t,e){return typeof e=="function"?e(t):e}function oa(t){var e=et(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Bn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ee.lanes|=c,Wn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ht(r,e.memoizedState)||(Oe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,Wn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function la(t){var e=et(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ht(s,e.memoizedState)||(Oe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Um(){}function zm(t,e){var n=ee,r=et(),i=e(),s=!ht(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,Dc(jm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,ns(9,Wm.bind(null,n,r,i,e),void 0,null),pe===null)throw Error(S(349));(Bn&30)!==0||Bm(n,e,i)}return i}function Bm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wm(t,e,n,r){e.value=n,e.getSnapshot=r,Hm(e)&&Vm(t)}function jm(t,e,n){return n(function(){Hm(e)&&Vm(t)})}function Hm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ht(t,n)}catch{return!0}}function Vm(t){var e=Lt(t,1);e!==null&&ct(e,t,1,-1)}function Ah(t){var e=gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},e.queue=t,t=t.dispatch=uw.bind(null,ee,t),[e.memoizedState,t]}function ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $m(){return et().memoizedState}function so(t,e,n,r){var i=gt();ee.flags|=t,i.memoizedState=ns(1|e,n,void 0,r===void 0?null:r)}function cl(t,e,n,r){var i=et();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&Pc(r,o.deps)){i.memoizedState=ns(e,n,s,r);return}}ee.flags|=t,i.memoizedState=ns(1|e,n,s,r)}function Ph(t,e){return so(8390656,8,t,e)}function Dc(t,e){return cl(2048,8,t,e)}function Gm(t,e){return cl(4,2,t,e)}function Km(t,e){return cl(4,4,t,e)}function qm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ym(t,e,n){return n=n!=null?n.concat([t]):null,cl(4,4,qm.bind(null,e,t),n)}function Mc(){}function Qm(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xm(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jm(t,e,n){return(Bn&21)===0?(t.baseState&&(t.baseState=!1,Oe=!0),t.memoizedState=n):(ht(n,e)||(n=tm(),ee.lanes|=n,Wn|=n,t.baseState=!0),e)}function lw(t,e){var n=j;j=n!==0&&4>n?n:4,t(!0);var r=sa.transition;sa.transition={};try{t(!1),e()}finally{j=n,sa.transition=r}}function Zm(){return et().memoizedState}function aw(t,e,n){var r=un(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eg(t))tg(e,n);else if(n=Pm(t,e,n,r),n!==null){var i=Re();ct(n,t,r,i),ng(n,e,r)}}function uw(t,e,n){var r=un(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eg(t))tg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ht(l,o)){var a=e.interleaved;a===null?(i.next=i,Tc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Pm(t,e,i,r),n!==null&&(i=Re(),ct(n,t,r,i),ng(n,e,r))}}function eg(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function tg(t,e){bi=bo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ng(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hc(t,n)}}var Oo={readContext:Ze,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},cw={readContext:Ze,useCallback:function(t,e){return gt().memoizedState=[t,e===void 0?null:e],t},useContext:Ze,useEffect:Ph,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,so(4194308,4,qm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return so(4194308,4,t,e)},useInsertionEffect:function(t,e){return so(4,2,t,e)},useMemo:function(t,e){var n=gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aw.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=gt();return t={current:t},e.memoizedState=t},useState:Ah,useDebugValue:Mc,useDeferredValue:function(t){return gt().memoizedState=t},useTransition:function(){var t=Ah(!1),e=t[0];return t=lw.bind(null,t[1]),gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=gt();if(J){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),pe===null)throw Error(S(349));(Bn&30)!==0||Bm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ph(jm.bind(null,r,s,t),[t]),r.flags|=2048,ns(9,Wm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gt(),e=pe.identifierPrefix;if(J){var n=Nt,r=xt;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=es++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ow++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dw={readContext:Ze,useCallback:Qm,useContext:Ze,useEffect:Dc,useImperativeHandle:Ym,useInsertionEffect:Gm,useLayoutEffect:Km,useMemo:Xm,useReducer:oa,useRef:$m,useState:function(){return oa(ts)},useDebugValue:Mc,useDeferredValue:function(t){var e=et();return Jm(e,oe.memoizedState,t)},useTransition:function(){var t=oa(ts)[0],e=et().memoizedState;return[t,e]},useMutableSource:Um,useSyncExternalStore:zm,useId:Zm,unstable_isNewReconciler:!1},hw={readContext:Ze,useCallback:Qm,useContext:Ze,useEffect:Dc,useImperativeHandle:Ym,useInsertionEffect:Gm,useLayoutEffect:Km,useMemo:Xm,useReducer:la,useRef:$m,useState:function(){return la(ts)},useDebugValue:Mc,useDeferredValue:function(t){var e=et();return oe===null?e.memoizedState=t:Jm(e,oe.memoizedState,t)},useTransition:function(){var t=la(ts)[0],e=et().memoizedState;return[t,e]},useMutableSource:Um,useSyncExternalStore:zm,useId:Zm,unstable_isNewReconciler:!1};function Br(t,e){try{var n="",r=e;do n+=Bv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function aa(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fw=typeof WeakMap=="function"?WeakMap:Map;function rg(t,e,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mo||(Mo=!0,Eu=r),hu(t,e)},n}function ig(t,e,n){n=bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hu(t,e),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=xw.bind(null,t,e,n),e.then(t,t))}function Oh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dh(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bt(-1,1),e.tag=2,ln(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var pw=Wt.ReactCurrentOwner,Oe=!1;function Ne(t,e,n,r){e.child=t===null?Lm(e,null,n,r):Ur(e,t.child,n,r)}function Mh(t,e,n,r,i){n=n.render;var s=e.ref;return Nr(e,i),r=bc(t,e,n,r,s,i),n=Oc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ft(t,e,i)):(J&&n&&wc(e),e.flags|=1,Ne(t,e,r,i),e.child)}function Lh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Hc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sg(t,e,s,r,i)):(t=uo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qi,n(o,r)&&t.ref===e.ref)return Ft(t,e,i)}return e.flags|=1,t=cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function sg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qi(s,r)&&t.ref===e.ref)if(Oe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Oe=!0);else return e.lanes=t.lanes,Ft(t,e,i)}return fu(t,e,n,r,i)}function og(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(Sr,ze),ze|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(Sr,ze),ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$(Sr,ze),ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$(Sr,ze),ze|=r;return Ne(t,e,i,n),e.child}function lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fu(t,e,n,r,i){var s=Le(n)?Un:Te.current;return s=Lr(e,s),Nr(e,i),n=bc(t,e,n,r,s,i),r=Oc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ft(t,e,i)):(J&&r&&wc(e),e.flags|=1,Ne(t,e,n,i),e.child)}function Fh(t,e,n,r,i){if(Le(n)){var s=!0;ko(e)}else s=!1;if(Nr(e,i),e.stateNode===null)oo(t,e),Dm(e,n,r),du(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Le(n)?Un:Te.current,u=Lr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Nh(e,o,r,u),Gt=!1;var h=e.memoizedState;o.state=h,Ao(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Me.current||Gt?(typeof c=="function"&&(cu(e,n,c,r),a=e.memoizedState),(l=Gt||xh(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,bm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:it(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ze(a):(a=Le(n)?Un:Te.current,a=Lr(e,a));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Nh(e,o,r,a),Gt=!1,h=e.memoizedState,o.state=h,Ao(e,r,o,i);var _=e.memoizedState;l!==d||h!==_||Me.current||Gt?(typeof m=="function"&&(cu(e,n,m,r),_=e.memoizedState),(u=Gt||xh(e,n,u,r,h,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return pu(t,e,n,r,s,i)}function pu(t,e,n,r,i,s){lg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Eh(e,n,!1),Ft(t,e,s);r=e.stateNode,pw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ur(e,t.child,null,s),e.child=Ur(e,null,l,s)):Ne(t,e,l,s),e.memoizedState=r.state,i&&Eh(e,n,!0),e.child}function ag(t){var e=t.stateNode;e.pendingContext?Sh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sh(t,e.context,!1),Nc(t,e.containerInfo)}function Uh(t,e,n,r,i){return Fr(),Ec(i),e.flags|=256,Ne(t,e,n,r),e.child}var mu={dehydrated:null,treeContext:null,retryLane:0};function gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function ug(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(Z,i&1),t===null)return au(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fl(o,r,0,null),t=Mn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gu(n),e.memoizedState=mu,t):Lc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=cn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cn(l,s):(s=Mn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mu,r}return s=t.child,t=s.sibling,r=cn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Lc(t,e){return e=fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vs(t,e,n,r){return r!==null&&Ec(r),Ur(e,t.child,null,n),t=Lc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=aa(Error(S(422))),Vs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fl({mode:"visible",children:r.children},i,0,null),s=Mn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ur(e,t.child,null,o),e.child.memoizedState=gu(o),e.memoizedState=mu,s);if((e.mode&1)===0)return Vs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=aa(s,r,void 0),Vs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Oe||l){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lt(t,i),ct(r,t,i,-1))}return jc(),r=aa(Error(S(421))),Vs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Nw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Be=on(i.nextSibling),We=e,J=!0,ot=null,t!==null&&(Ge[Ke++]=xt,Ge[Ke++]=Nt,Ge[Ke++]=zn,xt=t.id,Nt=t.overflow,zn=e),e=Lc(e,r.children),e.flags|=4096,e)}function zh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),uu(t.return,e,n)}function ua(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function cg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ne(t,e,r.children,n),r=Z.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,n,e);else if(t.tag===19)zh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(Z,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Po(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ua(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Po(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ua(e,!0,n,null,s);break;case"together":ua(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oo(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ft(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wn|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gw(t,e,n){switch(e.tag){case 3:ag(e),Fr();break;case 5:Fm(e);break;case 1:Le(e.type)&&ko(e);break;case 4:Nc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$(No,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(Z,Z.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?ug(t,e,n):($(Z,Z.current&1),t=Ft(t,e,n),t!==null?t.sibling:null);$(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return cg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,og(t,e,n)}return Ft(t,e,n)}var dg,_u,hg,fg;dg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_u=function(){};hg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,An(wt.current);var s=null;switch(n){case"input":i=za(t,i),r=za(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=ja(t,i),r=ja(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Io)}Va(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&K("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fg=function(t,e,n,r){n!==r&&(e.flags|=4)};function pi(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _w(t,e,n){var r=e.pendingProps;switch(Sc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Le(e.type)&&Co(),Ee(e),null;case 3:return r=e.stateNode,zr(),Q(Me),Q(Te),Ac(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(js(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ot!==null&&(ku(ot),ot=null))),_u(t,e),Ee(e),null;case 5:Rc(e);var i=An(Zi.current);if(n=e.type,t!==null&&e.stateNode!=null)hg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ee(e),null}if(t=An(wt.current),js(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[Xi]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Ci.length;i++)K(Ci[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":qd(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":Qd(r,s),K("invalid",r)}Va(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,l,t),i=["children",""+l]):Wi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":Os(r),Yd(r,s,!0);break;case"textarea":Os(r),Xd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Io)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[Xi]=r,dg(t,e,!1,!1),e.stateNode=t;e:{switch(o=$a(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ci.length;i++)K(Ci[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":qd(t,r),i=za(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),K("invalid",t);break;case"textarea":Qd(t,r),i=ja(t,r),K("invalid",t);break;default:i=r}Va(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Hp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Wp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ji(t,a):typeof a=="number"&&ji(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&K("scroll",t):a!=null&&oc(t,s,a,o))}switch(n){case"input":Os(t),Yd(t,r,!1);break;case"textarea":Os(t),Xd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Cr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Cr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)fg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=An(Zi.current),An(wt.current),js(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=We,t!==null))switch(t.tag){case 3:Ws(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ws(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Ee(e),null;case 13:if(Q(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&Be!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Am(),Fr(),e.flags|=98560,s=!1;else if(s=js(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[_t]=e}else Fr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else ot!==null&&(ku(ot),ot=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Z.current&1)!==0?ae===0&&(ae=3):jc())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return zr(),_u(t,e),t===null&&Yi(e.stateNode.containerInfo),Ee(e),null;case 10:return kc(e.type._context),Ee(e),null;case 17:return Le(e.type)&&Co(),Ee(e),null;case 19:if(Q(Z),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)pi(s,!1);else{if(ae!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Po(t),o!==null){for(e.flags|=128,pi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Wr&&(e.flags|=128,r=!0,pi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Po(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ee(e),null}else 2*ie()-s.renderingStartTime>Wr&&n!==1073741824&&(e.flags|=128,r=!0,pi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=Z.current,$(Z,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Wc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(ze&1073741824)!==0&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function yw(t,e){switch(Sc(e),e.tag){case 1:return Le(e.type)&&Co(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zr(),Q(Me),Q(Te),Ac(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Rc(e),null;case 13:if(Q(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(Z),null;case 4:return zr(),null;case 10:return kc(e.type._context),null;case 22:case 23:return Wc(),null;case 24:return null;default:return null}}var $s=!1,Ie=!1,vw=typeof WeakSet=="function"?WeakSet:Set,k=null;function wr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function yu(t,e,n){try{n()}catch(r){ne(t,e,r)}}var Bh=!1;function ww(t,e){if(tu=wo,t=_m(),vc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(nu={focusedElem:t,selectionRange:n},wo=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,R=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:it(e.type,v),R);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ne(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=Bh,Bh=!1,_}function Oi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yu(e,n,s)}i=i.next}while(i!==r)}}function dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pg(t){var e=t.alternate;e!==null&&(t.alternate=null,pg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[Xi],delete e[su],delete e[nw],delete e[rw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mg(t){return t.tag===5||t.tag===3||t.tag===4}function Wh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Io));else if(r!==4&&(t=t.child,t!==null))for(wu(t,e,n),t=t.sibling;t!==null;)wu(t,e,n),t=t.sibling}function Su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Su(t,e,n),t=t.sibling;t!==null;)Su(t,e,n),t=t.sibling}var ge=null,st=!1;function Ht(t,e,n){for(n=n.child;n!==null;)gg(t,e,n),n=n.sibling}function gg(t,e,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:Ie||wr(n,e);case 6:var r=ge,i=st;ge=null,Ht(t,e,n),ge=r,st=i,ge!==null&&(st?(t=ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(st?(t=ge,n=n.stateNode,t.nodeType===8?na(t.parentNode,n):t.nodeType===1&&na(t,n),Gi(t)):na(ge,n.stateNode));break;case 4:r=ge,i=st,ge=n.stateNode.containerInfo,st=!0,Ht(t,e,n),ge=r,st=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&yu(n,e,o),i=i.next}while(i!==r)}Ht(t,e,n);break;case 1:if(!Ie&&(wr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,e,l)}Ht(t,e,n);break;case 21:Ht(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Ht(t,e,n),Ie=r):Ht(t,e,n);break;default:Ht(t,e,n)}}function jh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vw),e.forEach(function(r){var i=Rw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,st=!1;break e;case 3:ge=l.stateNode.containerInfo,st=!0;break e;case 4:ge=l.stateNode.containerInfo,st=!0;break e}l=l.return}if(ge===null)throw Error(S(160));gg(s,o,i),ge=null,st=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_g(e,t),e=e.sibling}function _g(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rt(e,t),mt(t),r&4){try{Oi(3,t,t.return),dl(3,t)}catch(v){ne(t,t.return,v)}try{Oi(5,t,t.return)}catch(v){ne(t,t.return,v)}}break;case 1:rt(e,t),mt(t),r&512&&n!==null&&wr(n,n.return);break;case 5:if(rt(e,t),mt(t),r&512&&n!==null&&wr(n,n.return),t.flags&32){var i=t.stateNode;try{ji(i,"")}catch(v){ne(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Up(i,s),$a(l,o);var u=$a(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Hp(i,d):c==="dangerouslySetInnerHTML"?Wp(i,d):c==="children"?ji(i,d):oc(i,c,d,u)}switch(l){case"input":Ba(i,s);break;case"textarea":zp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Cr(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Cr(i,!!s.multiple,s.defaultValue,!0):Cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xi]=s}catch(v){ne(t,t.return,v)}}break;case 6:if(rt(e,t),mt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ne(t,t.return,v)}}break;case 3:if(rt(e,t),mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gi(e.containerInfo)}catch(v){ne(t,t.return,v)}break;case 4:rt(e,t),mt(t);break;case 13:rt(e,t),mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zc=ie())),r&4&&jh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||c,rt(e,t),Ie=u):rt(e,t),mt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(k=t,c=t.child;c!==null;){for(d=k=c;k!==null;){switch(h=k,m=h.child,h.tag){case 0:case 11:case 14:case 15:Oi(4,h,h.return);break;case 1:wr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){ne(r,n,v)}}break;case 5:wr(h,h.return);break;case 22:if(h.memoizedState!==null){Vh(d);continue}}m!==null?(m.return=h,k=m):Vh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=jp("display",o))}catch(v){ne(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ne(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:rt(e,t),mt(t),r&4&&jh(t);break;case 21:break;default:rt(e,t),mt(t)}}function mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mg(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ji(i,""),r.flags&=-33);var s=Wh(t);Su(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Wh(t);wu(t,l,o);break;default:throw Error(S(161))}}catch(a){ne(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sw(t,e,n){k=t,yg(t)}function yg(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$s;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ie;l=$s;var u=Ie;if($s=o,(Ie=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?$h(i):a!==null?(a.return=o,k=a):$h(i);for(;s!==null;)k=s,yg(s),s=s.sibling;k=i,$s=l,Ie=u}Hh(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,k=s):Hh(t)}}function Hh(t){for(;k!==null;){var e=k;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ie||dl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:it(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Th(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Th(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Gi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ie||e.flags&512&&vu(e)}catch(h){ne(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Vh(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function $h(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dl(4,e)}catch(a){ne(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ne(e,i,a)}}var s=e.return;try{vu(e)}catch(a){ne(e,s,a)}break;case 5:var o=e.return;try{vu(e)}catch(a){ne(e,o,a)}}}catch(a){ne(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var Ew=Math.ceil,Do=Wt.ReactCurrentDispatcher,Fc=Wt.ReactCurrentOwner,Qe=Wt.ReactCurrentBatchConfig,B=0,pe=null,se=null,ve=0,ze=0,Sr=vn(0),ae=0,rs=null,Wn=0,hl=0,Uc=0,Di=null,be=null,zc=0,Wr=1/0,kt=null,Mo=!1,Eu=null,an=null,Gs=!1,en=null,Lo=0,Mi=0,Iu=null,lo=-1,ao=0;function Re(){return(B&6)!==0?ie():lo!==-1?lo:lo=ie()}function un(t){return(t.mode&1)===0?1:(B&2)!==0&&ve!==0?ve&-ve:sw.transition!==null?(ao===0&&(ao=tm()),ao):(t=j,t!==0||(t=window.event,t=t===void 0?16:am(t.type)),t)}function ct(t,e,n,r){if(50<Mi)throw Mi=0,Iu=null,Error(S(185));ps(t,n,r),((B&2)===0||t!==pe)&&(t===pe&&((B&2)===0&&(hl|=n),ae===4&&qt(t,ve)),Fe(t,r),n===1&&B===0&&(e.mode&1)===0&&(Wr=ie()+500,al&&wn()))}function Fe(t,e){var n=t.callbackNode;s0(t,e);var r=vo(t,t===pe?ve:0);if(r===0)n!==null&&eh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&eh(n),e===1)t.tag===0?iw(Gh.bind(null,t)):xm(Gh.bind(null,t)),ew(function(){(B&6)===0&&wn()}),n=null;else{switch(nm(r)){case 1:n=dc;break;case 4:n=Zp;break;case 16:n=yo;break;case 536870912:n=em;break;default:n=yo}n=Tg(n,vg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vg(t,e){if(lo=-1,ao=0,(B&6)!==0)throw Error(S(327));var n=t.callbackNode;if(Rr()&&t.callbackNode!==n)return null;var r=vo(t,t===pe?ve:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Fo(t,r);else{e=r;var i=B;B|=2;var s=Sg();(pe!==t||ve!==e)&&(kt=null,Wr=ie()+500,Dn(t,e));do try{kw();break}catch(l){wg(t,l)}while(1);Cc(),Do.current=s,B=i,se!==null?e=0:(pe=null,ve=0,e=ae)}if(e!==0){if(e===2&&(i=Qa(t),i!==0&&(r=i,e=Cu(t,i))),e===1)throw n=rs,Dn(t,0),qt(t,r),Fe(t,ie()),n;if(e===6)qt(t,r);else{if(i=t.current.alternate,(r&30)===0&&!Iw(i)&&(e=Fo(t,r),e===2&&(s=Qa(t),s!==0&&(r=s,e=Cu(t,s))),e===1))throw n=rs,Dn(t,0),qt(t,r),Fe(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Cn(t,be,kt);break;case 3:if(qt(t,r),(r&130023424)===r&&(e=zc+500-ie(),10<e)){if(vo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=iu(Cn.bind(null,t,be,kt),e);break}Cn(t,be,kt);break;case 4:if(qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ew(r/1960))-r,10<r){t.timeoutHandle=iu(Cn.bind(null,t,be,kt),r);break}Cn(t,be,kt);break;case 5:Cn(t,be,kt);break;default:throw Error(S(329))}}}return Fe(t,ie()),t.callbackNode===n?vg.bind(null,t):null}function Cu(t,e){var n=Di;return t.current.memoizedState.isDehydrated&&(Dn(t,e).flags|=256),t=Fo(t,e),t!==2&&(e=be,be=n,e!==null&&ku(e)),t}function ku(t){be===null?be=t:be.push.apply(be,t)}function Iw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qt(t,e){for(e&=~Uc,e&=~hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ut(e),r=1<<n;t[n]=-1,e&=~r}}function Gh(t){if((B&6)!==0)throw Error(S(327));Rr();var e=vo(t,0);if((e&1)===0)return Fe(t,ie()),null;var n=Fo(t,e);if(t.tag!==0&&n===2){var r=Qa(t);r!==0&&(e=r,n=Cu(t,r))}if(n===1)throw n=rs,Dn(t,0),qt(t,e),Fe(t,ie()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cn(t,be,kt),Fe(t,ie()),null}function Bc(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(Wr=ie()+500,al&&wn())}}function jn(t){en!==null&&en.tag===0&&(B&6)===0&&Rr();var e=B;B|=1;var n=Qe.transition,r=j;try{if(Qe.transition=null,j=1,t)return t()}finally{j=r,Qe.transition=n,B=e,(B&6)===0&&wn()}}function Wc(){ze=Sr.current,Q(Sr)}function Dn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z0(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Sc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:zr(),Q(Me),Q(Te),Ac();break;case 5:Rc(r);break;case 4:zr();break;case 13:Q(Z);break;case 19:Q(Z);break;case 10:kc(r.type._context);break;case 22:case 23:Wc()}n=n.return}if(pe=t,se=t=cn(t.current,null),ve=ze=e,ae=0,rs=null,Uc=hl=Wn=0,be=Di=null,Rn!==null){for(e=0;e<Rn.length;e++)if(n=Rn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rn=null}return t}function wg(t,e){do{var n=se;try{if(Cc(),io.current=Oo,bo){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bo=!1}if(Bn=0,he=oe=ee=null,bi=!1,es=0,Fc.current=null,n===null||n.return===null){ae=1,rs=e,se=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Oh(o);if(m!==null){m.flags&=-257,Dh(m,o,l,s,e),m.mode&1&&bh(s,u,e),e=m,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if((e&1)===0){bh(s,u,e),jc();break e}a=Error(S(426))}}else if(J&&l.mode&1){var R=Oh(o);if(R!==null){(R.flags&65536)===0&&(R.flags|=256),Dh(R,o,l,s,e),Ec(Br(a,l));break e}}s=a=Br(a,l),ae!==4&&(ae=2),Di===null?Di=[s]:Di.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=rg(s,a,e);kh(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(an===null||!an.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=ig(s,l,e);kh(s,w);break e}}s=s.return}while(s!==null)}Ig(n)}catch(C){e=C,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function Sg(){var t=Do.current;return Do.current=Oo,t===null?Oo:t}function jc(){(ae===0||ae===3||ae===2)&&(ae=4),pe===null||(Wn&268435455)===0&&(hl&268435455)===0||qt(pe,ve)}function Fo(t,e){var n=B;B|=2;var r=Sg();(pe!==t||ve!==e)&&(kt=null,Dn(t,e));do try{Cw();break}catch(i){wg(t,i)}while(1);if(Cc(),B=n,Do.current=r,se!==null)throw Error(S(261));return pe=null,ve=0,ae}function Cw(){for(;se!==null;)Eg(se)}function kw(){for(;se!==null&&!Qv();)Eg(se)}function Eg(t){var e=kg(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?Ig(t):se=e,Fc.current=null}function Ig(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=_w(n,e,ze),n!==null){se=n;return}}else{if(n=yw(n,e),n!==null){n.flags&=32767,se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,se=null;return}}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);ae===0&&(ae=5)}function Cn(t,e,n){var r=j,i=Qe.transition;try{Qe.transition=null,j=1,Tw(t,e,n,r)}finally{Qe.transition=i,j=r}return null}function Tw(t,e,n,r){do Rr();while(en!==null);if((B&6)!==0)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(o0(t,s),t===pe&&(se=pe=null,ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Gs||(Gs=!0,Tg(yo,function(){return Rr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Qe.transition,Qe.transition=null;var o=j;j=1;var l=B;B|=4,Fc.current=null,ww(t,n),_g(n,t),G0(nu),wo=!!tu,nu=tu=null,t.current=n,Sw(n),Xv(),B=l,j=o,Qe.transition=s}else t.current=n;if(Gs&&(Gs=!1,en=t,Lo=i),s=t.pendingLanes,s===0&&(an=null),e0(n.stateNode),Fe(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mo)throw Mo=!1,t=Eu,Eu=null,t;return(Lo&1)!==0&&t.tag!==0&&Rr(),s=t.pendingLanes,(s&1)!==0?t===Iu?Mi++:(Mi=0,Iu=t):Mi=0,wn(),null}function Rr(){if(en!==null){var t=nm(Lo),e=Qe.transition,n=j;try{if(Qe.transition=null,j=16>t?16:t,en===null)var r=!1;else{if(t=en,en=null,Lo=0,(B&6)!==0)throw Error(S(331));var i=B;for(B|=4,k=t.current;k!==null;){var s=k,o=s.child;if((k.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:Oi(8,c,s)}var d=c.child;if(d!==null)d.return=c,k=d;else for(;k!==null;){c=k;var h=c.sibling,m=c.return;if(pg(c),c===u){k=null;break}if(h!==null){h.return=m,k=h;break}k=m}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var R=v.sibling;v.sibling=null,v=R}while(v!==null)}}k=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Oi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,k=g;else e:for(o=f;k!==null;){if(l=k,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:dl(9,l)}}catch(C){ne(l,l.return,C)}if(l===o){k=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,k=w;break e}k=l.return}}if(B=i,wn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(rl,t)}catch{}r=!0}return r}finally{j=n,Qe.transition=e}}return!1}function Kh(t,e,n){e=Br(n,e),e=rg(t,e,1),t=ln(t,e,1),e=Re(),t!==null&&(ps(t,1,e),Fe(t,e))}function ne(t,e,n){if(t.tag===3)Kh(t,t,n);else for(;e!==null;){if(e.tag===3){Kh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){t=Br(n,t),t=ig(e,t,1),e=ln(e,t,1),t=Re(),e!==null&&(ps(e,1,t),Fe(e,t));break}}e=e.return}}function xw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(ve&n)===n&&(ae===4||ae===3&&(ve&130023424)===ve&&500>ie()-zc?Dn(t,0):Uc|=n),Fe(t,e)}function Cg(t,e){e===0&&((t.mode&1)===0?e=1:(e=Ls,Ls<<=1,(Ls&130023424)===0&&(Ls=4194304)));var n=Re();t=Lt(t,e),t!==null&&(ps(t,e,n),Fe(t,n))}function Nw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cg(t,n)}function Rw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Cg(t,n)}var kg;kg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)Oe=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Oe=!1,gw(t,e,n);Oe=(t.flags&131072)!==0}else Oe=!1,J&&(e.flags&1048576)!==0&&Nm(e,xo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;oo(t,e),t=e.pendingProps;var i=Lr(e,Te.current);Nr(e,n),i=bc(null,e,r,t,i,n);var s=Oc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Le(r)?(s=!0,ko(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xc(e),i.updater=ul,e.stateNode=i,i._reactInternals=e,du(e,r,t,n),e=pu(null,e,r,!0,s,n)):(e.tag=0,J&&s&&wc(e),Ne(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(oo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Pw(r),t=it(r,t),i){case 0:e=fu(null,e,r,t,n);break e;case 1:e=Fh(null,e,r,t,n);break e;case 11:e=Mh(null,e,r,t,n);break e;case 14:e=Lh(null,e,r,it(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),fu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Fh(t,e,r,i,n);case 3:e:{if(ag(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,bm(t,e),Ao(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Br(Error(S(423)),e),e=Uh(t,e,r,n,i);break e}else if(r!==i){i=Br(Error(S(424)),e),e=Uh(t,e,r,n,i);break e}else for(Be=on(e.stateNode.containerInfo.firstChild),We=e,J=!0,ot=null,n=Lm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){e=Ft(t,e,n);break e}Ne(t,e,r,n)}e=e.child}return e;case 5:return Fm(e),t===null&&au(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ru(r,i)?o=null:s!==null&&ru(r,s)&&(e.flags|=32),lg(t,e),Ne(t,e,o,n),e.child;case 6:return t===null&&au(e),null;case 13:return ug(t,e,n);case 4:return Nc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ur(e,null,r,n):Ne(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Mh(t,e,r,i,n);case 7:return Ne(t,e,e.pendingProps,n),e.child;case 8:return Ne(t,e,e.pendingProps.children,n),e.child;case 12:return Ne(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$(No,r._currentValue),r._currentValue=o,s!==null)if(ht(s.value,o)){if(s.children===i.children&&!Me.current){e=Ft(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=bt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),uu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),uu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ne(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Nr(e,n),i=Ze(i),r=r(i),e.flags|=1,Ne(t,e,r,n),e.child;case 14:return r=e.type,i=it(r,e.pendingProps),i=it(r.type,i),Lh(t,e,r,i,n);case 15:return sg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),oo(t,e),e.tag=1,Le(r)?(t=!0,ko(e)):t=!1,Nr(e,n),Dm(e,r,i),du(e,r,i,n),pu(null,e,r,!0,t,n);case 19:return cg(t,e,n);case 22:return og(t,e,n)}throw Error(S(156,e.tag))};function Tg(t,e){return Jp(t,e)}function Aw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,n,r){return new Aw(t,e,n,r)}function Hc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pw(t){if(typeof t=="function")return Hc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ac)return 11;if(t===uc)return 14}return 2}function cn(t,e){var n=t.alternate;return n===null?(n=qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Hc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case dr:return Mn(n.children,i,s,e);case lc:o=8,i|=8;break;case Ma:return t=qe(12,n,e,i|2),t.elementType=Ma,t.lanes=s,t;case La:return t=qe(13,n,e,i),t.elementType=La,t.lanes=s,t;case Fa:return t=qe(19,n,e,i),t.elementType=Fa,t.lanes=s,t;case Mp:return fl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Op:o=10;break e;case Dp:o=9;break e;case ac:o=11;break e;case uc:o=14;break e;case $t:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mn(t,e,n,r){return t=qe(7,t,r,e),t.lanes=n,t}function fl(t,e,n,r){return t=qe(22,t,r,e),t.elementType=Mp,t.lanes=n,t.stateNode={isHidden:!1},t}function ca(t,e,n){return t=qe(6,t,null,e),t.lanes=n,t}function da(t,e,n){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(t,e,n,r,i,s,o,l,a){return t=new bw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(s),t}function Ow(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function xg(t){if(!t)return gn;t=t._reactInternals;e:{if(Zn(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Le(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Le(n))return Tm(t,n,e)}return e}function Ng(t,e,n,r,i,s,o,l,a){return t=Vc(n,r,!0,t,i,s,o,l,a),t.context=xg(null),n=t.current,r=Re(),i=un(n),s=bt(r,i),s.callback=e!=null?e:null,ln(n,s,i),t.current.lanes=i,ps(t,i,r),Fe(t,r),t}function pl(t,e,n,r){var i=e.current,s=Re(),o=un(i);return n=xg(n),e.context===null?e.context=n:e.pendingContext=n,e=bt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ln(i,e,o),t!==null&&(ct(t,i,o,s),ro(t,i,o)),o}function Uo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $c(t,e){qh(t,e),(t=t.alternate)&&qh(t,e)}function Dw(){return null}var Rg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gc(t){this._internalRoot=t}ml.prototype.render=Gc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));pl(t,e,null,null)};ml.prototype.unmount=Gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jn(function(){pl(null,t,null,null)}),e[Mt]=null}};function ml(t){this._internalRoot=t}ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=sm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kt.length&&e!==0&&e<Kt[n].priority;n++);Kt.splice(n,0,t),n===0&&lm(t)}};function Kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yh(){}function Mw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Uo(o);s.call(u)}}var o=Ng(e,r,t,0,null,!1,!1,"",Yh);return t._reactRootContainer=o,t[Mt]=o.current,Yi(t.nodeType===8?t.parentNode:t),jn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Uo(a);l.call(u)}}var a=Vc(t,0,!1,null,null,!1,!1,"",Yh);return t._reactRootContainer=a,t[Mt]=a.current,Yi(t.nodeType===8?t.parentNode:t),jn(function(){pl(e,a,n,r)}),a}function _l(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Uo(o);l.call(a)}}pl(e,o,t,i)}else o=Mw(n,e,t,i,r);return Uo(o)}rm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ii(e.pendingLanes);n!==0&&(hc(e,n|1),Fe(e,ie()),(B&6)===0&&(Wr=ie()+500,wn()))}break;case 13:jn(function(){var r=Lt(t,1);if(r!==null){var i=Re();ct(r,t,1,i)}}),$c(t,1)}};fc=function(t){if(t.tag===13){var e=Lt(t,134217728);if(e!==null){var n=Re();ct(e,t,134217728,n)}$c(t,134217728)}};im=function(t){if(t.tag===13){var e=un(t),n=Lt(t,e);if(n!==null){var r=Re();ct(n,t,e,r)}$c(t,e)}};sm=function(){return j};om=function(t,e){var n=j;try{return j=t,e()}finally{j=n}};Ka=function(t,e,n){switch(e){case"input":if(Ba(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ll(r);if(!i)throw Error(S(90));Fp(r),Ba(r,i)}}}break;case"textarea":zp(t,n);break;case"select":e=n.value,e!=null&&Cr(t,!!n.multiple,e,!1)}};Gp=Bc;Kp=jn;var Lw={usingClientEntryPoint:!1,Events:[gs,mr,ll,Vp,$p,Bc]},mi={findFiberByHostInstance:Nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fw={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qp(t),t===null?null:t.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||Dw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{rl=Ks.inject(Fw),vt=Ks}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lw;Ve.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(e))throw Error(S(200));return Ow(t,e,null,n)};Ve.createRoot=function(t,e){if(!Kc(t))throw Error(S(299));var n=!1,r="",i=Rg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vc(t,1,!1,null,null,n,!1,r,i),t[Mt]=e.current,Yi(t.nodeType===8?t.parentNode:t),new Gc(e)};Ve.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Qp(e),t=t===null?null:t.stateNode,t};Ve.flushSync=function(t){return jn(t)};Ve.hydrate=function(t,e,n){if(!gl(e))throw Error(S(200));return _l(null,t,e,!0,n)};Ve.hydrateRoot=function(t,e,n){if(!Kc(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Rg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ng(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Mt]=e.current,Yi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ml(e)};Ve.render=function(t,e,n){if(!gl(e))throw Error(S(200));return _l(null,t,e,!1,n)};Ve.unmountComponentAtNode=function(t){if(!gl(t))throw Error(S(40));return t._reactRootContainer?(jn(function(){_l(null,null,t,!1,function(){t._reactRootContainer=null,t[Mt]=null})}),!0):!1};Ve.unstable_batchedUpdates=Bc;Ve.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return _l(t,e,n,!1,r)};Ve.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ve})(Np);var Qh=Np.exports;Oa.createRoot=Qh.createRoot,Oa.hydrateRoot=Qh.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},is.apply(this,arguments)}var tn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tn||(tn={}));const Xh="popstate";function Uw(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=er(i.location.hash.substr(1));return Tu("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,u=a.indexOf("#");l=u===-1?a:a.slice(0,u)}return l+"#"+(typeof s=="string"?s:ss(s))}function r(i,s){zw(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return jw(e,n,r,t)}function zw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Bw(){return Math.random().toString(36).substr(2,8)}function Jh(t){return{usr:t.state,key:t.key}}function Tu(t,e,n,r){return n===void 0&&(n=null),is({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?er(e):e,{state:n,key:e&&e.key||r||Bw()})}function ss(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function er(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ww(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:ss(t);return new URL(n,e)}function jw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tn.Pop,a=null;function u(){l=tn.Pop,a&&a({action:l,location:h.location})}function c(m,_){l=tn.Push;let v=Tu(h.location,m,_);n&&n(v,m);let R=Jh(v),p=h.createHref(v);try{o.pushState(R,"",p)}catch{i.location.assign(p)}s&&a&&a({action:l,location:h.location})}function d(m,_){l=tn.Replace;let v=Tu(h.location,m,_);n&&n(v,m);let R=Jh(v),p=h.createHref(v);o.replaceState(R,"",p),s&&a&&a({action:l,location:h.location})}let h={get action(){return l},get location(){return t(i,o)},listen(m){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Xh,u),a=m,()=>{i.removeEventListener(Xh,u),a=null}},createHref(m){return e(i,m)},encodeLocation(m){let _=Ww(ss(m));return is({},m,{pathname:_.pathname,search:_.search,hash:_.hash})},push:c,replace:d,go(m){return o.go(m)}};return h}var Zh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zh||(Zh={}));function Hw(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?er(e):e,i=Pg(r.pathname||"/",n);if(i==null)return null;let s=Ag(t);Vw(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=Zw(s[l],nS(i));return o}function Ag(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(ue(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let l=dn([r,o.relativePath]),a=n.concat(o);i.children&&i.children.length>0&&(ue(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Ag(i.children,e,a,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:Xw(l,i.index),routesMeta:a})}),e}function Vw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Jw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $w=/^:\w+$/,Gw=3,Kw=2,qw=1,Yw=10,Qw=-2,ef=t=>t==="*";function Xw(t,e){let n=t.split("/"),r=n.length;return n.some(ef)&&(r+=Qw),e&&(r+=Kw),n.filter(i=>!ef(i)).reduce((i,s)=>i+($w.test(s)?Gw:s===""?qw:Yw),r)}function Jw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Zw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=eS({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:dn([i,c.pathname]),pathnameBase:oS(dn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=dn([i,c.pathnameBase]))}return s}function eS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=rS(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function tS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,l)=>(r.push(l),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function nS(t){try{return decodeURI(t)}catch(e){return qc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rS(t,e){try{return decodeURIComponent(t)}catch(n){return qc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Pg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?er(t):t;return{pathname:n?n.startsWith("/")?n:sS(n,e):e,search:lS(r),hash:aS(i)}}function sS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ha(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bg(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Og(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=er(t):(i=is({},t),ue(!i.pathname||!i.pathname.includes("?"),ha("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),ha("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),ha("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=iS(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const dn=t=>t.join("/").replace(/\/\/+/g,"/"),oS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),lS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,aS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class uS{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function cS(t){return t instanceof uS}const dS=new Set(["POST","PUT","PATCH","DELETE"]);[...dS];var yl={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hS=E.exports,fS=Symbol.for("react.element"),pS=Symbol.for("react.fragment"),mS=Object.prototype.hasOwnProperty,gS=hS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_S={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mS.call(e,r)&&!_S.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fS,type:t,key:s,ref:o,props:i,_owner:gS.current}}vl.Fragment=pS;vl.jsx=Dg;vl.jsxs=Dg;(function(t){t.exports=vl})(yl);const yS=yl.exports.Fragment,y=yl.exports.jsx,A=yl.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xu(){return xu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xu.apply(this,arguments)}function vS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const wS=typeof Object.is=="function"?Object.is:vS,{useState:SS,useEffect:ES,useLayoutEffect:IS,useDebugValue:CS}=ba;function kS(t,e,n){const r=e(),[{inst:i},s]=SS({inst:{value:r,getSnapshot:e}});return IS(()=>{i.value=r,i.getSnapshot=e,fa(i)&&s({inst:i})},[t,r,e]),ES(()=>(fa(i)&&s({inst:i}),t(()=>{fa(i)&&s({inst:i})})),[t]),CS(r),r}function fa(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!wS(n,r)}catch{return!0}}function TS(t,e,n){return e()}const xS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NS=!xS,RS=NS?TS:kS;"useSyncExternalStore"in ba&&(t=>t.useSyncExternalStore)(ba);const AS=E.exports.createContext(null),PS=E.exports.createContext(null),Yc=E.exports.createContext(null),Qc=E.exports.createContext(null),wl=E.exports.createContext(null),ys=E.exports.createContext({outlet:null,matches:[]}),Mg=E.exports.createContext(null);function bS(t,e){let{relative:n}=e===void 0?{}:e;Yr()||ue(!1);let{basename:r,navigator:i}=E.exports.useContext(Qc),{hash:s,pathname:o,search:l}=Lg(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:dn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Yr(){return E.exports.useContext(wl)!=null}function Sl(){return Yr()||ue(!1),E.exports.useContext(wl).location}function Qr(){Yr()||ue(!1);let{basename:t,navigator:e}=E.exports.useContext(Qc),{matches:n}=E.exports.useContext(ys),{pathname:r}=Sl(),i=JSON.stringify(bg(n).map(l=>l.pathnameBase)),s=E.exports.useRef(!1);return E.exports.useEffect(()=>{s.current=!0}),E.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=Og(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:dn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function Lg(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.exports.useContext(ys),{pathname:i}=Sl(),s=JSON.stringify(bg(r).map(o=>o.pathnameBase));return E.exports.useMemo(()=>Og(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function OS(t,e){Yr()||ue(!1);let n=E.exports.useContext(Yc),{matches:r}=E.exports.useContext(ys),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let l=Sl(),a;if(e){var u;let _=typeof e=="string"?er(e):e;o==="/"||((u=_.pathname)==null?void 0:u.startsWith(o))||ue(!1),a=_}else a=l;let c=a.pathname||"/",d=o==="/"?c:c.slice(o.length)||"/",h=Hw(t,{pathname:d}),m=FS(h&&h.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:dn([o,_.pathname]),pathnameBase:_.pathnameBase==="/"?o:dn([o,_.pathnameBase])})),r,n||void 0);return e&&m?y(wl.Provider,{value:{location:xu({pathname:"/",search:"",hash:"",state:null,key:"default"},a),navigationType:tn.Pop},children:m}):m}function DS(){let t=zS(),e=cS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return A(yS,{children:[y("h2",{children:"Unhandled Thrown Error!"}),y("h3",{style:{fontStyle:"italic"},children:e}),n?y("pre",{style:i,children:n}):null,y("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),A("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",y("code",{style:s,children:"errorElement"})," props on\xA0",y("code",{style:s,children:"<Route>"})]})]})}class MS extends E.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?y(Mg.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function LS(t){let{routeContext:e,match:n,children:r}=t,i=E.exports.useContext(AS);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),y(ys.Provider,{value:e,children:r})}function FS(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ue(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||y(DS,{}):null,c=()=>y(LS,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,l+1))},children:a?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||l===0)?y(MS,{location:n.location,component:u,error:a,children:c()}):c()},null)}var tf;(function(t){t.UseRevalidator="useRevalidator"})(tf||(tf={}));var Nu;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Nu||(Nu={}));function US(t){let e=E.exports.useContext(Yc);return e||ue(!1),e}function zS(){var t;let e=E.exports.useContext(Mg),n=US(Nu.UseRouteError),r=E.exports.useContext(ys),i=r.matches[r.matches.length-1];return e||(r||ue(!1),i.route.id||ue(!1),(t=n.errors)==null?void 0:t[i.route.id])}function BS(t){let{to:e,replace:n,state:r,relative:i}=t;Yr()||ue(!1);let s=E.exports.useContext(Yc),o=Qr();return E.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function kn(t){ue(!1)}function WS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tn.Pop,navigator:s,static:o=!1}=t;Yr()&&ue(!1);let l=e.replace(/^\/*/,"/"),a=E.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=er(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:m="default"}=r,_=E.exports.useMemo(()=>{let v=Pg(u,l);return v==null?null:{pathname:v,search:c,hash:d,state:h,key:m}},[l,u,c,d,h,m]);return _==null?null:y(Qc.Provider,{value:a,children:y(wl.Provider,{children:n,value:{location:_,navigationType:i}})})}function jS(t){let{children:e,location:n}=t,r=E.exports.useContext(PS),i=r&&!e?r.router.routes:Ru(e);return OS(i,n)}var nf;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(nf||(nf={}));new Promise(()=>{});function Ru(t,e){e===void 0&&(e=[]);let n=[];return E.exports.Children.forEach(t,(r,i)=>{if(!E.exports.isValidElement(r))return;if(r.type===E.exports.Fragment){n.push.apply(n,Ru(r.props.children,e));return}r.type!==kn&&ue(!1),!r.props.index||!r.props.children||ue(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Ru(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function HS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function VS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $S(t,e){return t.button===0&&(!e||e==="_self")&&!VS(t)}const GS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function KS(t){let{basename:e,children:n,window:r}=t,i=E.exports.useRef();i.current==null&&(i.current=Uw({window:r,v5Compat:!0}));let s=i.current,[o,l]=E.exports.useState({action:s.action,location:s.location});return E.exports.useLayoutEffect(()=>s.listen(l),[s]),y(WS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const Hn=E.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=HS(e,GS),h=bS(u,{relative:i}),m=qS(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function _(v){r&&r(v),v.defaultPrevented||m(v)}return y("a",{...d,href:h,onClick:s?r:_,ref:n,target:a})});var rf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(rf||(rf={}));var sf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sf||(sf={}));function qS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=Qr(),a=Sl(),u=Lg(t,{relative:o});return E.exports.useCallback(c=>{if($S(c,n)){c.preventDefault();let d=r!==void 0?r:ss(a)===ss(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}function YS(t,e){const n=JSON.parse(localStorage.getItem(t));return n||(e instanceof Function?e():e)}function Au(t,e){const[n,r]=E.exports.useState(()=>YS(t,e));return E.exports.useEffect(()=>{localStorage.setItem(t,JSON.stringify(n))},[n]),[n,r]}function QS({onClick:t,icon:e}){return A("div",{className:"relative w-6 h-6 lg:w-12 lg:h-12 m-2",children:[y("button",{className:"absolute top-0 border border-black dark:border-white bg-white cursor-pointer rounded w-6 h-6 lg:w-12 lg:h-12 z-10",onClick:t}),y("img",{className:"absolute top-0 p-[3]px w-full h-full z-20 pointer-events-none",alt:"icon",src:e})]})}function XS(){const{character:t}=E.exports.useContext(si);return A("div",{children:[y("h1",{className:"text-base lg:text-xl font-bold",children:"Character"}),A("p",{children:["Name: ",t.name]}),A("p",{children:["Level: ",t.level]}),A("p",{children:["HP: ",t.currentHp,"/",t.hpMax]}),A("p",{children:["Encumbrence: ",t.encumbrence,"/",t.encumbrenceMax]})]})}function JS({changeTheme:t,themeIcon:e}){return A("div",{className:"flex flex-col p-2 w-1/5 h-full",children:[y(QS,{onClick:t,icon:e}),y(XS,{})]})}const pa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUvSURBVHic7ZtraB1FFMd/aWybFlpj1ZhaNYmkD2nrO0rFB9QX0qr1VXyAVMEoVT9IFHxBQVHQSrUKar+ooFawleIDivgCWwxofdZi1OpVa1EbK2rMw7yuH04XZs9s7r17d2Z31fxgPuzcnbP/mTtzZubsLIwzjmsOAe4CvgV+Ba7OVk56tALPAX8DRSP1AvtnqMs7M4A12BUP0ghQn5k6z1wEdBNd8SB9kJk6j0wB1lK64kG6NyON3jgU+JToyn4NDKi8U7OR6Ye5QAG74v3AKuBAYFTl75eJUg8sIHq8dwHz991zdMRv/wmagB+xK78RmGbcd7H6fXO6MuMzoYJ7ZgCvA7NU/pPAcqDHyDtM3VOoXlo6lGuAGuApZOybPAysRMa7yUR1vbd6aelQrgFuAi5UeRuBDqSLa7TDq6SHZUopga3AgyrvfWRtH1V5gNoy17mjVAM8AtQZ138iY76/RBn9W+6nwLEaYCmwROV1AN+XsbdbXc+sRlQe2EZ4OnsbcYjlOEWV2+ZLoE/OJFyJUeCkCsseocr2UFnD5YrNhCuxKUbZGiQIYpZvci3QJ43AMOEKnBbTxiuq/HUuBbpGO8HLCU9dXcDWmDa3qOulcUVlyRbC/15HFTbalI2/CE+nuWUqdlhrXhV2apC4gGnnCkcavbKYsOhdCWytUrY+4V8wG9xBWPQzCWy1EA6MFIGzEurzgukE56jfPk9gtwC8pvLuTGAvFbYS/sfOS2hvIRISN21eldCmV74juQPUbFA2u4GDHNj1wl7CYl1sZI7CjhI/78CuF/QUONWR3duV3WrXF97RS2BXi5daoFPZHgEucWTfGX8QFulyrM5FAiqm/T5y9tJkN2GBLY7tnwsMYjdCbnrCx4TFne7hGddi+4MRcuITXiQs7HpPz9ErTnN2yHSKvF8JWuvxWddgD4cisIcMF0vLlZgPPT/vHGzHaMYgU987NGKPTd9dcg7wHtGNUAQ+Aq5EziO44IB9aUy+VALS6I61yGJJrxjN1IuE2tqB5hi2JwJnAPchEeoRYAi4IbhB79FXA7ca128gXTUN5gH3AJdG6NL0Al8hf9gPSCMF1CNTeAsSkJ0UUf435CyDxfHYw6C5wgq44hjgZeydpMv0TSkBX6ibH3JYuTg0AXdjD0sXqWRsYqW6uQ85F5QlJwC3AC8BP1N5RUexfcsA0BAYjhprU5DYQIOR9wTSMHlhJnIYYxbyNiqYJfqQXe1PSDf/BXF+zUbZZ6ng9Krewg4Di5xIT5c12P/+kZUUnIx4WbNwF+7m4zRow97ir45j4HzsMbXOrUZv1GM78z2UWQRF8QJ2I9zsTKYfJgFvYeu+oBpj04GdytAQ9rmhPPE0duUfT2KwDTn6YhocBC5LJNM9E4BHid5PJI5vLsN2KMP4ixnEpQ47BF9EPtpodPWQ9ogHFJEul+XsMBs5vaZ1dWO/7UpMO3ZPKALbkfNBaVKDhNh6IvTsQs42e2EZtk8oIpuXdcg3Q75ZhB1qD9IO4HDfAk7Enh3MvcNjyBLVNYuRuIB+8xykDaT4ec50YP0YQoIe8SawgioWIAbzkUDq9hLP6qNKh+zi0MIS5FRpa4l7RpHX7e8CnyGvzwtIYCKgDjgY2XkuRGITJ1P+/cQmJKxeqEK7MyYDtyG7sDj78iSpEzg7jcrFoQ7pijvwU+kh4FUkzpd7jgUeIHlj9APvADcSjlE4Ia2DSw3IgcvjEF8xGwm5T0O89iBynO53ZA7fiZw060S+OxxISec4/zv+ATe8egSmBsifAAAAAElFTkSuQmCC",qs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAC7gAAAu4Bks13cwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASxSURBVHic7ZtNaFVHFMd/J+YDHglaqLgQJBFE2mehYLS460KkFltqXZR268qFrsUupIvgSogLwYW4UVDIplKhm+4lpW5SE7ISLLiotimlUHx5SU4XM21f5s28N/feue/e4DtwyLuXmfPxn8/7n4moKlWIiJwE5uzj16r6QyVxVAGAiOwCngEH7KtfgIOqujnoWEYG7dBKk/+Tx/5uVhFIVQD4/FYSS1UA1EaGAFQdQNUyBCC2oIjsF5FGIr/tyHeZRUQaIrI/uoKq9lXgJrAB/A5cjKnTx54Aq4BaXcXuSQravWhj3ABuRtWJMHoI2OoIVoHLCYKdBR5anU1g77IT4xZwKAUA+4B1x3gSEFKpJ3m1Me8rDIB1cMPjoBYgBJJX4EZU/UgnI8CduoHQI/k7wEgyACJAOF5B8seLJp8JgD4gXM+ZRANo5Kx7vWjymQHoAcKpiHp7gK+AB8DPwFpH/TX77j7wBTAVYe9U0eRzAWCdC/A5cM/+Da7hwGFgIbCShPQ1cBeY6RPDORvD2V4xJAcgEqTdwC3MDi82cVdbwDwwWVqcJSV/EFgpkLirS8B0GbEmp8RE5APgEfB2oEgbWAaeWAU4arUJjAXqvQI+UdXFdNGStgcA08BLwq34ITDRo/6ELbMUsPEKwx3WbwgAk4HANzDs73gGW+O2zobH3gqwu44AzHuCfQYcK2DzmLXh2r1VKwCAGcyM7bZ87uQdENye0AYO1wmAu55WmkvYu+Y89hdqAQAwhdm4uBNe9JiP8DHumV/WgT1FbafgBD/GzN6dcklV1xPYBsDauuS8HrO+C0kKAD5zntvA4wR2XXlMN2/4aVGjo/DfWV0TPyBtYEVtX/TIEed5WVVbRQNzRVVbIrIMvN/xOnicJiICvIt/Y7WFiXMT4CTwnN5b0VUCvB3bv+oUuJ1q7Ht83XZ8rQXKzbKddPXpc5s7i30K/qsPPY4annIXSgTggsdfF5+AIVpjclocYXg4wmnM+fwbOQRGVfV7EZkh/yT4Anir4/loJviziWv7ha+Qqv4kIu8QMQmO2gqbmI1GHnnK9pWgKSITqVcCEZmge9Z/GipvG2y5n90U4/9b53kMOJHArisn6G5N13d2STAuq9oKvyaCPO2nhXuAqv6FIT075T3galHbHXLV2uyUBeu7mCRqoUF/DrfowRhnsp+wmw6SEJlPFndCAAZFiS2RkCZPBoANfJpySdGXJKbHy6LFvwP2BorkpcV/A85onWlxpyeEWjGPrpCYDi9lCDggTGImRnd1yKJtzPFaMho8CQCYg8mzmIPJc/Q+HJ3BkKbuZqmXrmP2FkHmF9iFOUm+B5weGADkPx6fsgHfJ3w8/gBzhN6X7AS+dGK4VjoAgeSVai5I+Kj4zCCkSF6p5orMR4FYMoGQIvkqL0ldKwpCrKM6X5MLgXAlCQDsjIuSPhD+JOauUYTxnXJV1gWhRcKbojvlsvQV2/It4JuYOtHfAvYK+h+q+ndUhd62mnTzeUdUtS+HF2F7CrO0/hpTfjTWsKp6Gdic4vvgCX0EZRI1LFE0U/TGH4oMAag6gKplCEBFfrci35Uuw3+eHrRDAJvoeeBHq+erSB7gH8F+2j0aLdzTAAAAAElFTkSuQmCC";function ZS(t){const{character:e}=E.exports.useContext(si),[n,r]=E.exports.useState(!1),i={strength:"Affects physical strength and the power of attacks",dexterity:"Finesse and expertise",constitution:"Affects the player's hitpoints",intelligence:"How learnt one is",wisdom:"How much knowledge one has",charisma:"Willpower and charm"};return E.exports.useEffect(()=>{e.exp>e.expNext&&r(s=>!0)},[e.exp,e.expNext]),A("div",{className:"w-full h-full",children:[y("h1",{className:"text-center mb-5",children:"Character"}),A("div",{className:"grid gap-x-2 gap-y-4 lg:gap-x-4 lg:gap-y-8 md:grid-flow-row md:grid-cols-3 justify-center",children:[A("div",{className:"relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]",children:[A("p",{children:["Strength: ",e.strength," "]}),i.strength,n?y("button",{className:"absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black",children:"Upgrade"}):null]}),A("div",{className:"relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]",children:[A("p",{children:["Dexterity: ",e.dexterity]}),i.dexterity,n?y("button",{className:"absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black",children:"Upgrade"}):null]}),A("div",{className:"relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]",children:[A("p",{children:["Constitutuion: ",e.constitution]}),i.constitution,n?y("button",{className:"absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black",children:"Upgrade"}):null]}),A("div",{className:"relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]",children:[A("p",{children:["Intelligence: ",e.intelligence]}),i.intelligence,n?y("button",{className:"absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black",children:"Upgrade"}):null]}),A("div",{className:"relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]",children:[A("p",{children:["Wisdom: ",e.wisdom]}),i.wisdom,n?y("button",{className:"absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black",children:"Upgrade"}):null]}),A("div",{className:"relative border border-black dark:border-white p-2 rounded-md max-w-[30rem] min-h-[8rem]",children:[A("p",{children:["Charisma: ",e.charisma]}),i.charisma,n?y("button",{className:"absolute left-2 bottom-2 block mt-3 rounded p-1 text-xs lg:text-sm bg-black dark:bg-white text-white dark:text-black",children:"Upgrade"}):null]})]})]})}function lr({children:t,handleUpgrade:e,attribute:n}){return A("div",{children:[y("span",{className:"flex flex-col w-12 h-10 lg:w-24 lg:h-20 bg-red-800 border border-secondary-900 dark:border-white rounded justify-center text-[.5rem] lg:text-sm ",children:t}),y("button",{className:"cursor-pointer my-2 mx-1 p-1 border border-black dark:border-white rounded-md hover:bg-primary-300 focus:border-primary-600 text-center w-5 h-5 lg:w-7 lg:h-7 text-xs lg:text-base",onClick:()=>e(!0,n),children:"+1"}),y("button",{className:"cursor-pointer my-2 mx-1 p-1 border border-black dark:border-white rounded-md hover:bg-primary-300 focus:border-primary-600 text-center w-5 h-5 lg:w-7 lg:h-7 text-xs lg:text-base",onClick:()=>e(!1,n),children:"-1"})]})}function eE({tempChar:t,setTempChar:e,points:n,setPoints:r}){function i(s,o){!s&&t[o]>0?(r(++n),e(l=>({...l,[o]:l[o]-1}))):s&&n>0&&t[o]<20&&(r(--n),e(l=>({...l,[o]:l[o]+1})))}return A("div",{className:"mt-8 flex flex-row justify-evenly text-center",children:[A(lr,{handleUpgrade:i,attribute:"strength",children:[y("p",{children:"Strength"}),t.strength]}),A(lr,{handleUpgrade:i,attribute:"dexterity",children:[y("p",{children:"Dexterity"}),t.dexterity]}),A(lr,{handleUpgrade:i,attribute:"constitution",children:[y("p",{children:"Constitution"}),t.constitution]}),A(lr,{handleUpgrade:i,attribute:"intelligence",children:[y("p",{children:"Intelligence"}),t.intelligence]}),A(lr,{handleUpgrade:i,attribute:"wisdom",children:[y("p",{children:"Wisdom"}),t.wisdom]}),A(lr,{handleUpgrade:i,attribute:"charisma",children:[y("p",{children:"Charisma"}),t.charisma]})]})}/**
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
 */const Fg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw Xr(e)},Xr=function(t){return new Error("Firebase Database ("+Fg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ug=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ug(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw Error();const h=s<<2|l>>4;if(r.push(h),u!==64){const m=l<<4&240|u>>2;if(r.push(m),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},zg=function(t){const e=Ug(t);return Xc.encodeByteArray(e,!0)},zo=function(t){return zg(t).replace(/\./g,"")},Bo=function(t){try{return Xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nE(t){return Bg(void 0,t)}function Bg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rE(n)||(t[n]=Bg(t[n],e[n]));return t}function rE(t){return t!=="__proto__"}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Wg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iE(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hg(){return Fg.NODE_ADMIN===!0}function Vg(){return typeof indexedDB=="object"}function $g(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function sE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function oE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lE=()=>oE().__FIREBASE_DEFAULTS__,aE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bo(t[1]);return e&&JSON.parse(e)},Zc=()=>{try{return lE()||aE()||uE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gg=t=>{var e,n;return(n=(e=Zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cE=t=>{const e=Gg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dE=()=>{var t;return(t=Zc())===null||t===void 0?void 0:t.config},Kg=t=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class El{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),l].join(".")}/**
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
 */const fE="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fE,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tr.prototype.create)}}class tr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,l,r)}}function pE(t,e){return t.replace(mE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mE=/\{\$([^}]+)}/g;/**
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
 */function os(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
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
 */const qg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=os(Bo(s[0])||""),n=os(Bo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},gE=function(t){const e=qg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_E=function(t){const e=qg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function jt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ls(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(of(s)&&of(o)){if(!ls(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function of(t){return t!==null&&typeof t=="object"}/**
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
 */function Jr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class yE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function vE(t,e){const n=new wE(t,e);return n.subscribe.bind(n)}class wE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ma),i.error===void 0&&(i.error=ma),i.complete===void 0&&(i.complete=ma);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ma(){}function ed(t,e){return`${t} failed: ${e} argument `}/**
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
 */const EE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Il=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const IE=1e3,CE=2,kE=4*60*60*1e3,TE=.5;function lf(t,e=IE,n=CE){const r=e*Math.pow(n,t),i=Math.round(TE*r*(Math.random()-.5)*2);return Math.min(kE,r+i)}/**
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
 */function me(t){return t&&t._delegate?t._delegate:t}class ft{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tn="[DEFAULT]";/**
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
 */class xE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new El;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RE(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NE(t){return t===Tn?void 0:t}function RE(t){return t.instantiationMode==="EAGER"}/**
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
 */class AE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const PE={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},bE=V.INFO,OE={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},DE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=OE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=bE,this._logHandler=DE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const ME=(t,e)=>e.some(n=>t instanceof n);let af,uf;function LE(){return af||(af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FE(){return uf||(uf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yg=new WeakMap,bu=new WeakMap,Qg=new WeakMap,ga=new WeakMap,td=new WeakMap;function UE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yg.set(n,t)}).catch(()=>{}),td.set(e,t),e}function zE(t){if(bu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bu.set(t,e)}let Ou={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BE(t){Ou=t(Ou)}function WE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_a(this),e,...n);return Qg.set(r,e.sort?e.sort():[e]),hn(r)}:FE().includes(t)?function(...e){return t.apply(_a(this),e),hn(Yg.get(this))}:function(...e){return hn(t.apply(_a(this),e))}}function jE(t){return typeof t=="function"?WE(t):(t instanceof IDBTransaction&&zE(t),ME(t,LE())?new Proxy(t,Ou):t)}function hn(t){if(t instanceof IDBRequest)return UE(t);if(ga.has(t))return ga.get(t);const e=jE(t);return e!==t&&(ga.set(t,e),td.set(e,t)),e}const _a=t=>td.get(t);function Xg(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(hn(o.result),a.oldVersion,a.newVersion,hn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const HE=["get","getKey","getAll","getAllKeys","count"],VE=["put","add","delete","clear"],ya=new Map;function cf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ya.get(e))return ya.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ya.set(e,s),s}BE(t=>({...t,get:(e,n,r)=>cf(e,n)||t.get(e,n,r),has:(e,n)=>!!cf(e,n)||t.has(e,n)}));/**
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
 */class $E{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Du="@firebase/app",df="0.8.4";/**
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
 */const Vn=new Cl("@firebase/app"),KE="@firebase/app-compat",qE="@firebase/analytics-compat",YE="@firebase/analytics",QE="@firebase/app-check-compat",XE="@firebase/app-check",JE="@firebase/auth",ZE="@firebase/auth-compat",eI="@firebase/database",tI="@firebase/database-compat",nI="@firebase/functions",rI="@firebase/functions-compat",iI="@firebase/installations",sI="@firebase/installations-compat",oI="@firebase/messaging",lI="@firebase/messaging-compat",aI="@firebase/performance",uI="@firebase/performance-compat",cI="@firebase/remote-config",dI="@firebase/remote-config-compat",hI="@firebase/storage",fI="@firebase/storage-compat",pI="@firebase/firestore",mI="@firebase/firestore-compat",gI="firebase",_I="9.14.0";/**
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
 */const Mu="[DEFAULT]",yI={[Du]:"fire-core",[KE]:"fire-core-compat",[YE]:"fire-analytics",[qE]:"fire-analytics-compat",[XE]:"fire-app-check",[QE]:"fire-app-check-compat",[JE]:"fire-auth",[ZE]:"fire-auth-compat",[eI]:"fire-rtdb",[tI]:"fire-rtdb-compat",[nI]:"fire-fn",[rI]:"fire-fn-compat",[iI]:"fire-iid",[sI]:"fire-iid-compat",[oI]:"fire-fcm",[lI]:"fire-fcm-compat",[aI]:"fire-perf",[uI]:"fire-perf-compat",[cI]:"fire-rc",[dI]:"fire-rc-compat",[hI]:"fire-gcs",[fI]:"fire-gcs-compat",[pI]:"fire-fst",[mI]:"fire-fst-compat","fire-js":"fire-js",[gI]:"fire-js-all"};/**
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
 */const jo=new Map,Lu=new Map;function vI(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function It(t){const e=t.name;if(Lu.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Lu.set(e,t);for(const n of jo.values())vI(n,t);return!0}function nr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const wI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fn=new tr("app","Firebase",wI);/**
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
 */class SI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=_I;function Jg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(n||(n=dE()),!n)throw fn.create("no-options");const s=jo.get(i);if(s){if(ls(n,s.options)&&ls(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const o=new AE(i);for(const a of Lu.values())o.addComponent(a);const l=new SI(n,r,o);return jo.set(i,l),l}function nd(t=Mu){const e=jo.get(t);if(!e&&t===Mu)return Jg();if(!e)throw fn.create("no-app",{appName:t});return e}function Xe(t,e,n){var r;let i=(r=yI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}It(new ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const EI="firebase-heartbeat-database",II=1,as="firebase-heartbeat-store";let va=null;function Zg(){return va||(va=Xg(EI,II,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}}).catch(t=>{throw fn.create("idb-open",{originalErrorMessage:t.message})})),va}async function CI(t){var e;try{return(await Zg()).transaction(as).objectStore(as).get(e_(t))}catch(n){if(n instanceof Ct)Vn.warn(n.message);else{const r=fn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Vn.warn(r.message)}}}async function hf(t,e){var n;try{const i=(await Zg()).transaction(as,"readwrite");return await i.objectStore(as).put(e,e_(t)),i.done}catch(r){if(r instanceof Ct)Vn.warn(r.message);else{const i=fn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Vn.warn(i.message)}}}function e_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kI=1024,TI=30*24*60*60*1e3;class xI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ff();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=TI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ff(),{heartbeatsToSend:n,unsentEntries:r}=NI(this._heartbeatsCache.heartbeats),i=zo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ff(){return new Date().toISOString().substring(0,10)}function NI(t,e=kI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),pf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vg()?$g().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pf(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function AI(t){It(new ft("platform-logger",e=>new $E(e),"PRIVATE")),It(new ft("heartbeat",e=>new xI(e),"PRIVATE")),Xe(Du,df,t),Xe(Du,df,"esm2017"),Xe("fire-js","")}AI("");var PI="firebase",bI="9.14.0";/**
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
 */Xe(PI,bI,"app");function rd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function t_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OI=t_,n_=new tr("auth","Firebase",t_());/**
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
 */const mf=new Cl("@firebase/auth");function co(t,...e){mf.logLevel<=V.ERROR&&mf.error(`Auth (${vs}): ${t}`,...e)}/**
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
 */function pt(t,...e){throw id(t,...e)}function St(t,...e){return id(t,...e)}function DI(t,e,n){const r=Object.assign(Object.assign({},OI()),{[e]:n});return new tr("auth","Firebase",r).create(e,{appName:t.name})}function id(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return n_.create(t,...e)}function b(t,e,...n){if(!t)throw id(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw co(e),new Error(e)}function Ut(t,e){t||Rt(e)}/**
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
 */const gf=new Map;function At(t){Ut(t instanceof Function,"Expected a class definition");let e=gf.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gf.set(t,e),e)}/**
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
 */function MI(t,e){const n=nr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ls(s,e!=null?e:{}))return i;pt(i,"already-initialized")}return n.initialize({options:e})}function LI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FI(){return _f()==="http:"||_f()==="https:"}function _f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function UI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FI()||Wg()||"connection"in navigator)?navigator.onLine:!0}function zI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ws{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=Jc()||jg()}get(){return UI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sd(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class r_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const WI=new ws(3e4,6e4);function Zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ei(t,e,n,r,i={}){return i_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Jr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),r_.fetch()(s_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function i_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BI),e);try{const i=new jI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ys(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ys(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ys(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ys(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw DI(t,c,u);pt(t,c)}}catch(i){if(i instanceof Ct)throw i;pt(t,"network-request-failed")}}async function Ss(t,e,n,r,i={}){const s=await ei(t,e,n,r,i);return"mfaPendingCredential"in s&&pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function s_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sd(t.config,i):`${t.config.apiScheme}://${i}`}class jI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),WI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ys(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=St(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function HI(t,e){return ei(t,"POST","/v1/accounts:delete",e)}async function VI(t,e){return ei(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Li(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $I(t,e=!1){const n=me(t),r=await n.getIdToken(e),i=od(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Li(wa(i.auth_time)),issuedAtTime:Li(wa(i.iat)),expirationTime:Li(wa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wa(t){return Number(t)*1e3}function od(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bo(r);return s?JSON.parse(s):(co("Failed to decode base64 JWT payload"),null)}catch(s){return co("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function GI(t){const e=od(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&KI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class o_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ho(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hr(t,VI(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?XI(s.providerUserInfo):[],l=QI(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new o_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function YI(t){const e=me(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function XI(t){return t.map(e=>{var{providerId:n}=e,r=rd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function JI(t,e){const n=await i_(t,{},async()=>{const r=Jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=s_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",r_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):GI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new us;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Vt(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new o_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hr(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $I(this,e)}reload(){return YI(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hr(this,HI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:C,providerData:x,stsTokenManager:N}=n;b(g&&N,e,"internal-error");const P=us.fromJSON(this.name,N);b(typeof g=="string",e,"internal-error"),Vt(d,e.name),Vt(h,e.name),b(typeof w=="boolean",e,"internal-error"),b(typeof C=="boolean",e,"internal-error"),Vt(m,e.name),Vt(_,e.name),Vt(v,e.name),Vt(R,e.name),Vt(p,e.name),Vt(f,e.name);const G=new Ln({uid:g,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:C,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:f});return x&&Array.isArray(x)&&(G.providerData=x.map(M=>Object.assign({},M))),R&&(G._redirectEventId=R),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new us;i.updateFromServerResponse(n);const s=new Ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ho(s),s}}/**
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
 */class l_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}l_.type="NONE";const yf=l_;/**
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
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class Ar{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ho(this.userKey,i.apiKey,s),this.fullPersistenceKey=ho("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ar(At(yf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||At(yf);const o=ho(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Ln._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ar(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ar(s,e,r))}}/**
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
 */function vf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(h_(e))return"Blackberry";if(f_(e))return"Webos";if(ld(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(d_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function a_(t=xe()){return/firefox\//i.test(t)}function ld(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(t=xe()){return/crios\//i.test(t)}function c_(t=xe()){return/iemobile/i.test(t)}function d_(t=xe()){return/android/i.test(t)}function h_(t=xe()){return/blackberry/i.test(t)}function f_(t=xe()){return/webos/i.test(t)}function kl(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZI(t=xe()){var e;return kl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eC(){return iE()&&document.documentMode===10}function p_(t=xe()){return kl(t)||d_(t)||f_(t)||h_(t)||/windows phone/i.test(t)||c_(t)}function tC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function m_(t,e=[]){let n;switch(t){case"Browser":n=vf(xe());break;case"Worker":n=`${vf(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
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
 */class nC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class rC{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wf(this),this.idTokenSubscription=new wf(this),this.beforeStateQueue=new nC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=n_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ho(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?me(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&At(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Es(t){return me(t)}class wf{constructor(e){this.auth=e,this.observer=null,this.addObserver=vE(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function iC(t,e,n){const r=Es(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=g_(e),{host:o,port:l}=sC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||oC()}function g_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sC(t){const e=g_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sf(o)}}}function Sf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ad{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function __(t,e){return ei(t,"POST","/v1/accounts:update",e)}/**
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
 */async function lC(t,e){return Ss(t,"POST","/v1/accounts:signInWithPassword",Zr(t,e))}async function aC(t,e){return ei(t,"POST","/v1/accounts:sendOobCode",Zr(t,e))}async function uC(t,e){return aC(t,e)}/**
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
 */async function cC(t,e){return Ss(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}async function dC(t,e){return Ss(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}/**
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
 */class cs extends ad{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new cs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new cs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return lC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cC(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return __(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dC(e,{idToken:n,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pr(t,e){return Ss(t,"POST","/v1/accounts:signInWithIdp",Zr(t,e))}/**
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
 */const hC="http://localhost";class $n extends ad{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pr(e,n)}buildRequest(){const e={requestUri:hC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jr(n)}return e}}/**
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
 */function fC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pC(t){const e=ki(Ti(t)).link,n=e?ki(Ti(e)).deep_link_id:null,r=ki(Ti(t)).deep_link_id;return(r?ki(Ti(r)).link:null)||r||n||e||t}class ud{constructor(e){var n,r,i,s,o,l;const a=ki(Ti(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=fC((i=a.mode)!==null&&i!==void 0?i:null);b(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=pC(e);try{return new ud(n)}catch{return null}}}/**
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
 */class ti{constructor(){this.providerId=ti.PROVIDER_ID}static credential(e,n){return cs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ud.parseLink(n);return b(r,"argument-error"),cs._fromEmailAndCode(e,r.code,r.tenantId)}}ti.PROVIDER_ID="password";ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Is extends y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yt extends Is{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
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
 */class Qt extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com";Qt.PROVIDER_ID="google.com";/**
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
 */class Xt extends Is{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
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
 */class Jt extends Is{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
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
 */async function mC(t,e){return Ss(t,"POST","/v1/accounts:signUp",Zr(t,e))}/**
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
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ln._fromIdTokenResponse(e,r,i),o=Ef(r);return new Gn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ef(r);return new Gn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vo extends Ct{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vo(e,n,r,i)}}function v_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vo._fromErrorAndOperation(t,s,e,r):s})}async function gC(t,e,n=!1){const r=await Hr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gn._forOperation(t,"link",r)}/**
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
 */async function _C(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Hr(t,v_(i,s,e,t),n);b(o.idToken,i,"internal-error");const l=od(o.idToken);b(l,i,"internal-error");const{sub:a}=l;return b(t.uid===a,i,"user-mismatch"),Gn._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&pt(i,"user-mismatch"),o}}/**
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
 */async function w_(t,e,n=!1){const r="signIn",i=await v_(t,r,e),s=await Gn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function yC(t,e){return w_(Es(t),e)}/**
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
 */function vC(t,e,n){var r;b(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),b(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(b(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(b(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function wC(t,e,n){const r=me(t),i={requestType:"PASSWORD_RESET",email:e};n&&vC(r,i,n),await uC(r,i)}async function SC(t,e,n){const r=Es(t),i=await mC(r,{returnSecureToken:!0,email:e,password:n}),s=await Gn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function EC(t,e,n){return yC(me(t),ti.credential(e,n))}function IC(t,e){return S_(me(t),e,null)}function CC(t,e){return S_(me(t),null,e)}async function S_(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Hr(t,__(r,s));await t._updateTokensIfNecessary(o,!0)}function kC(t,e,n,r){return me(t).onIdTokenChanged(e,n,r)}function TC(t,e,n){return me(t).beforeAuthStateChanged(e,n)}function xC(t){return me(t).signOut()}const $o="__sak";/**
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
 */class E_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function NC(){const t=xe();return ld(t)||kl(t)}const RC=1e3,AC=10;class I_ extends E_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NC()&&tC(),this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}I_.type="LOCAL";const PC=I_;/**
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
 */class C_ extends E_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}C_.type="SESSION";const k_=C_;/**
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
 */function bC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await bC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tl.receivers=[];/**
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
 */function cd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class OC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=cd("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Et(){return window}function DC(t){Et().location.href=t}/**
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
 */function T_(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function MC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FC(){return T_()?self:null}/**
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
 */const x_="firebaseLocalStorageDb",UC=1,Go="firebaseLocalStorage",N_="fbase_key";class Cs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xl(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function zC(){const t=indexedDB.deleteDatabase(x_);return new Cs(t).toPromise()}function Uu(){const t=indexedDB.open(x_,UC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Go,{keyPath:N_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await zC(),e(await Uu()))})})}async function If(t,e,n){const r=xl(t,!0).put({[N_]:e,value:n});return new Cs(r).toPromise()}async function BC(t,e){const n=xl(t,!1).get(e),r=await new Cs(n).toPromise();return r===void 0?null:r.value}function Cf(t,e){const n=xl(t,!0).delete(e);return new Cs(n).toPromise()}const WC=800,jC=3;class R_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return T_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tl._getInstance(FC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MC(),!this.activeServiceWorker)return;this.sender=new OC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uu();return await If(e,$o,"1"),await Cf(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>If(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xl(i,!1).getAll();return new Cs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R_.type="LOCAL";const HC=R_;/**
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
 */function VC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $C(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=St("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",VC().appendChild(r)})}function GC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ws(3e4,6e4);/**
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
 */function KC(t,e){return e?At(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dd extends ad{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qC(t){return w_(t.auth,new dd(t),t.bypassAuthState)}function YC(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),_C(n,new dd(t),t.bypassAuthState)}async function QC(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),gC(n,new dd(t),t.bypassAuthState)}/**
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
 */class A_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qC;case"linkViaPopup":case"linkViaRedirect":return QC;case"reauthViaPopup":case"reauthViaRedirect":return YC;default:pt(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XC=new ws(2e3,1e4);class Er extends A_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,XC.get())};e()}}Er.currentPopupAction=null;/**
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
 */const JC="pendingRedirect",fo=new Map;class ZC extends A_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await ek(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ek(t,e){const n=rk(e),r=nk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tk(t,e){fo.set(t._key(),e)}function nk(t){return At(t._redirectPersistence)}function rk(t){return ho(JC,t.config.apiKey,t.name)}async function ik(t,e,n=!1){const r=Es(t),i=KC(r,e),o=await new ZC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sk=10*60*1e3;class ok{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!P_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sk&&this.cachedEventUids.clear(),this.cachedEventUids.has(kf(e))}saveEventToCache(e){this.cachedEventUids.add(kf(e)),this.lastProcessedEventTime=Date.now()}}function kf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function P_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P_(t);default:return!1}}/**
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
 */async function ak(t,e={}){return ei(t,"GET","/v1/projects",e)}/**
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
 */const uk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ck=/^https?/;async function dk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ak(t);for(const n of e)try{if(hk(n))return}catch{}pt(t,"unauthorized-domain")}function hk(t){const e=Fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ck.test(n))return!1;if(uk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const fk=new ws(3e4,6e4);function Tf(){const t=Et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pk(t){return new Promise((e,n)=>{var r,i,s;function o(){Tf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tf(),n(St(t,"network-request-failed"))},timeout:fk.get()})}if(!((i=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Et().gapi)===null||s===void 0)&&s.load)o();else{const l=GC("iframefcb");return Et()[l]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},$C(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw po=null,e})}let po=null;function mk(t){return po=po||pk(t),po}/**
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
 */const gk=new ws(5e3,15e3),_k="__/auth/iframe",yk="emulator/auth/iframe",vk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sk(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sd(e,yk):`https://${t.config.authDomain}/${_k}`,r={apiKey:e.apiKey,appName:t.name,v:vs},i=wk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jr(r).slice(1)}`}async function Ek(t){const e=await mk(t),n=Et().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:Sk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),l=Et().setTimeout(()=>{s(o)},gk.get());function a(){Et().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Ik={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ck=500,kk=600,Tk="_blank",xk="http://localhost";class xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nk(t,e,n,r=Ck,i=kk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Ik),{width:r.toString(),height:i.toString(),top:s,left:o}),u=xe().toLowerCase();n&&(l=u_(u)?Tk:n),a_(u)&&(e=e||xk,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(ZI(u)&&l!=="_self")return Rk(e||"",l),new xf(null);const d=window.open(e||"",l,c);b(d,t,"popup-blocked");try{d.focus()}catch{}return new xf(d)}function Rk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ak="__/auth/handler",Pk="emulator/auth/handler";function Nf(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:i};if(e instanceof y_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Is){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${bk(t)}?${Jr(l).slice(1)}`}function bk({config:t}){return t.emulator?sd(t,Pk):`https://${t.authDomain}/${Ak}`}/**
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
 */const Sa="webStorageSupport";class Ok{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k_,this._completeRedirectFn=ik,this._overrideRedirectResult=tk}async _openPopup(e,n,r,i){var s;Ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Nf(e,n,r,Fu(),i);return Nk(e,o,cd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),DC(Nf(e,n,r,Fu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ek(e),r=new ok(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sa,{type:Sa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sa];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p_()||ld()||kl()}}const Dk=Ok;var Rf="@firebase/auth",Af="0.20.11";/**
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
 */class Mk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Fk(t){It(new ft("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{b(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),b(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m_(t)},c=new rC(l,a,u);return LI(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),It(new ft("auth-internal",e=>{const n=Es(e.getProvider("auth").getImmediate());return(r=>new Mk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Rf,Af,Lk(t)),Xe(Rf,Af,"esm2017")}/**
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
 */const Uk=5*60,zk=Kg("authIdTokenMaxAge")||Uk;let Pf=null;const Bk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zk)return;const i=n==null?void 0:n.token;Pf!==i&&(Pf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wk(t=nd()){const e=nr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MI(t,{popupRedirectResolver:Dk,persistence:[HC,PC,k_]}),r=Kg("authTokenSyncURL");if(r){const s=Bk(r);TC(n,s,()=>s(n.currentUser)),kC(n,o=>s(o))}const i=Gg("auth");return i&&iC(n,`http://${i}`),n}Fk("Browser");const b_="@firebase/installations",hd="0.5.16";/**
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
 */const O_=1e4,D_=`w:${hd}`,M_="FIS_v2",jk="https://firebaseinstallations.googleapis.com/v1",Hk=60*60*1e3,Vk="installations",$k="Installations";/**
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
 */const Gk={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Kn=new tr(Vk,$k,Gk);function L_(t){return t instanceof Ct&&t.code.includes("request-failed")}/**
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
 */function F_({projectId:t}){return`${jk}/projects/${t}/installations`}function U_(t){return{token:t.token,requestStatus:2,expiresIn:qk(t.expiresIn),creationTime:Date.now()}}async function z_(t,e){const r=(await e.json()).error;return Kn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function B_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Kk(t,{refreshToken:e}){const n=B_(t);return n.append("Authorization",Yk(e)),n}async function W_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function qk(t){return Number(t.replace("s","000"))}function Yk(t){return`${M_} ${t}`}/**
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
 */async function Qk({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=F_(t),i=B_(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:M_,appId:t.appId,sdkVersion:D_},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await W_(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:U_(u.authToken)}}else throw await z_("Create Installation",a)}/**
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
 */function j_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Xk(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Jk=/^[cdef][\w-]{21}$/,zu="";function Zk(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=e1(t);return Jk.test(n)?n:zu}catch{return zu}}function e1(t){return Xk(t).substr(0,22)}/**
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
 */function Nl(t){return`${t.appName}!${t.appId}`}/**
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
 */const H_=new Map;function V_(t,e){const n=Nl(t);$_(n,e),t1(n,e)}function $_(t,e){const n=H_.get(t);if(!!n)for(const r of n)r(e)}function t1(t,e){const n=n1();n&&n.postMessage({key:t,fid:e}),r1()}let Pn=null;function n1(){return!Pn&&"BroadcastChannel"in self&&(Pn=new BroadcastChannel("[Firebase] FID Change"),Pn.onmessage=t=>{$_(t.data.key,t.data.fid)}),Pn}function r1(){H_.size===0&&Pn&&(Pn.close(),Pn=null)}/**
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
 */const i1="firebase-installations-database",s1=1,qn="firebase-installations-store";let Ea=null;function fd(){return Ea||(Ea=Xg(i1,s1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}})),Ea}async function Ko(t,e){const n=Nl(t),i=(await fd()).transaction(qn,"readwrite"),s=i.objectStore(qn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&V_(t,e.fid),e}async function G_(t){const e=Nl(t),r=(await fd()).transaction(qn,"readwrite");await r.objectStore(qn).delete(e),await r.done}async function Rl(t,e){const n=Nl(t),i=(await fd()).transaction(qn,"readwrite"),s=i.objectStore(qn),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&V_(t,l.fid),l}/**
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
 */async function pd(t){let e;const n=await Rl(t.appConfig,r=>{const i=o1(r),s=l1(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===zu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function o1(t){const e=t||{fid:Zk(),registrationStatus:0};return K_(e)}function l1(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Kn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=a1(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:u1(t)}:{installationEntry:e}}async function a1(t,e){try{const n=await Qk(t,e);return Ko(t.appConfig,n)}catch(n){throw L_(n)&&n.customData.serverCode===409?await G_(t.appConfig):await Ko(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function u1(t){let e=await bf(t.appConfig);for(;e.registrationStatus===1;)await j_(100),e=await bf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await pd(t);return r||n}return e}function bf(t){return Rl(t,e=>{if(!e)throw Kn.create("installation-not-found");return K_(e)})}function K_(t){return c1(t)?{fid:t.fid,registrationStatus:0}:t}function c1(t){return t.registrationStatus===1&&t.registrationTime+O_<Date.now()}/**
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
 */async function d1({appConfig:t,heartbeatServiceProvider:e},n){const r=h1(t,n),i=Kk(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:D_,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await W_(()=>fetch(r,l));if(a.ok){const u=await a.json();return U_(u)}else throw await z_("Generate Auth Token",a)}function h1(t,{fid:e}){return`${F_(t)}/${e}/authTokens:generate`}/**
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
 */async function md(t,e=!1){let n;const r=await Rl(t.appConfig,s=>{if(!q_(s))throw Kn.create("not-registered");const o=s.authToken;if(!e&&m1(o))return s;if(o.requestStatus===1)return n=f1(t,e),s;{if(!navigator.onLine)throw Kn.create("app-offline");const l=_1(s);return n=p1(t,l),l}});return n?await n:r.authToken}async function f1(t,e){let n=await Of(t.appConfig);for(;n.authToken.requestStatus===1;)await j_(100),n=await Of(t.appConfig);const r=n.authToken;return r.requestStatus===0?md(t,e):r}function Of(t){return Rl(t,e=>{if(!q_(e))throw Kn.create("not-registered");const n=e.authToken;return y1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function p1(t,e){try{const n=await d1(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ko(t.appConfig,r),n}catch(n){if(L_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await G_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ko(t.appConfig,r)}throw n}}function q_(t){return t!==void 0&&t.registrationStatus===2}function m1(t){return t.requestStatus===2&&!g1(t)}function g1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Hk}function _1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function y1(t){return t.requestStatus===1&&t.requestTime+O_<Date.now()}/**
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
 */async function v1(t){const e=t,{installationEntry:n,registrationPromise:r}=await pd(e);return r?r.catch(console.error):md(e).catch(console.error),n.fid}/**
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
 */async function w1(t,e=!1){const n=t;return await S1(n),(await md(n,e)).token}async function S1(t){const{registrationPromise:e}=await pd(t);e&&await e}/**
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
 */function E1(t){if(!t||!t.options)throw Ia("App Configuration");if(!t.name)throw Ia("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ia(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ia(t){return Kn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Y_="installations",I1="installations-internal",C1=t=>{const e=t.getProvider("app").getImmediate(),n=E1(e),r=nr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},k1=t=>{const e=t.getProvider("app").getImmediate(),n=nr(e,Y_).getImmediate();return{getId:()=>v1(n),getToken:i=>w1(n,i)}};function T1(){It(new ft(Y_,C1,"PUBLIC")),It(new ft(I1,k1,"PRIVATE"))}T1();Xe(b_,hd);Xe(b_,hd,"esm2017");/**
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
 */const qo="analytics",x1="firebase_id",N1="origin",R1=60*1e3,A1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Q_="https://www.googletagmanager.com/gtag/js";/**
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
 */const je=new Cl("@firebase/analytics");/**
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
 */function X_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function P1(t,e){const n=document.createElement("script");n.src=`${Q_}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function b1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function O1(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await X_(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(l){je.error(l)}t("config",i,s)}async function D1(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await X_(n);for(const a of o){const u=l.find(d=>d.measurementId===a),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){je.error(s)}}function M1(t,e,n,r){async function i(s,o,l){try{s==="event"?await D1(t,e,n,o,l):s==="config"?await O1(t,e,n,r,o,l):s==="consent"?t("consent","update",l):t("set",o)}catch(a){je.error(a)}}return i}function L1(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=M1(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function F1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Q_)&&n.src.includes(t))return n;return null}/**
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
 */const U1={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Je=new tr("analytics","Analytics",U1);/**
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
 */const z1=30,B1=1e3;class W1{constructor(e={},n=B1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const J_=new W1;function j1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function H1(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:j1(r)},s=A1.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw Je.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function V1(t,e=J_,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Je.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Je.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new K1;return setTimeout(async()=>{l.abort()},n!==void 0?n:R1),Z_({appId:r,apiKey:i,measurementId:s},o,l,e)}async function Z_(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=J_){var s,o;const{appId:l,measurementId:a}=t;try{await $1(r,e)}catch(u){if(a)return je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:l,measurementId:a};throw u}try{const u=await H1(t);return i.deleteThrottleMetadata(l),u}catch(u){const c=u;if(!G1(c)){if(i.deleteThrottleMetadata(l),a)return je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:l,measurementId:a};throw u}const d=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?lf(n,i.intervalMillis,z1):lf(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(l,h),je.debug(`Calling attemptFetch again in ${d} millis`),Z_(t,h,r,i)}}function $1(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function G1(t){if(!(t instanceof Ct)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class K1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function q1(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function Y1(){var t;if(Vg())try{await $g()}catch(e){return je.warn(Je.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return je.warn(Je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Q1(t,e,n,r,i,s,o){var l;const a=V1(t);a.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>je.error(m)),e.push(a);const u=Y1().then(m=>{if(m)return r.getId()}),[c,d]=await Promise.all([a,u]);F1(s)||P1(s,c.measurementId),i("js",new Date);const h=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return h[N1]="firebase",h.update=!0,d!=null&&(h[x1]=d),i("config",c.measurementId,h),c.measurementId}/**
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
 */class X1{constructor(e){this.app=e}_delete(){return delete Fi[this.app.options.appId],Promise.resolve()}}let Fi={},Df=[];const Mf={};let Ca="dataLayer",J1="gtag",Lf,ey,Ff=!1;function Z1(){const t=[];if(Wg()&&t.push("This is a browser extension environment."),sE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Je.create("invalid-analytics-context",{errorInfo:e});je.warn(n.message)}}function eT(t,e,n){Z1();const r=t.options.appId;if(!r)throw Je.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Je.create("no-api-key");if(Fi[r]!=null)throw Je.create("already-exists",{id:r});if(!Ff){b1(Ca);const{wrappedGtag:s,gtagCore:o}=L1(Fi,Df,Mf,Ca,J1);ey=s,Lf=o,Ff=!0}return Fi[r]=Q1(t,Df,Mf,e,Lf,Ca,n),new X1(t)}function tT(t=nd()){t=me(t);const e=nr(t,qo);return e.isInitialized()?e.getImmediate():nT(t)}function nT(t,e={}){const n=nr(t,qo);if(n.isInitialized()){const i=n.getImmediate();if(ls(e,n.getOptions()))return i;throw Je.create("already-initialized")}return n.initialize({options:e})}function ty(t,e,n,r){t=me(t),q1(ey,Fi[t.app.options.appId],e,n,r).catch(i=>je.error(i))}const Uf="@firebase/analytics",zf="0.8.4";function rT(){It(new ft(qo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return eT(r,i,n)},"PUBLIC")),It(new ft("analytics-internal",t,"PRIVATE")),Xe(Uf,zf),Xe(Uf,zf,"esm2017");function t(e){try{const n=e.getProvider(qo).getImmediate();return{logEvent:(r,i,s)=>ty(n,r,i,s)}}catch(n){throw Je.create("interop-component-reg-failed",{reason:n})}}}rT();const Bf="@firebase/database",Wf="0.13.10";/**
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
 */let ny="";function iT(t){ny=t}/**
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
 */class sT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class oT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ry=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sT(e)}}catch{}return new oT},bn=ry("localStorage"),Bu=ry("sessionStorage");/**
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
 */const br=new Cl("@firebase/database"),lT=function(){let t=1;return function(){return t++}}(),iy=function(t){const e=EE(t),n=new yE;n.update(e);const r=n.digest();return Xc.encodeByteArray(r)},ks=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ks.apply(null,r):typeof r=="object"?e+=ye(r):e+=r,e+=" "}return e};let Fn=null,jf=!0;const aT=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(br.logLevel=V.VERBOSE,Fn=br.log.bind(br),e&&Bu.set("logging_enabled",!0)):typeof t=="function"?Fn=t:(Fn=null,Bu.remove("logging_enabled"))},Ce=function(...t){if(jf===!0&&(jf=!1,Fn===null&&Bu.get("logging_enabled")===!0&&aT(!0)),Fn){const e=ks.apply(null,t);Fn(e)}},Ts=function(t){return function(...e){Ce(t,...e)}},Wu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ks(...t);br.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${ks(...t)}`;throw br.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+ks(...t);br.warn(e)},uT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vr="[MIN_NAME]",Yn="[MAX_NAME]",ni=function(t,e){if(t===e)return 0;if(t===Vr||e===Yn)return-1;if(e===Vr||t===Yn)return 1;{const n=Hf(t),r=Hf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},dT=function(t,e){return t===e?0:t<e?-1:1},gi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},gd=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ye(e[r]),n+=":",n+=gd(t[e[r]]);return n+="}",n},oy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ly=function(t){I(!sy(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},hT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},pT=new RegExp("^-?(0*)\\d{1,10}$"),mT=-2147483648,gT=2147483647,Hf=function(t){if(pT.test(t)){const e=Number(t);if(e>=mT&&e<=gT)return e}return null},ri=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},_T=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ui=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class yT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class vT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class Or{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Or.OWNER="owner";/**
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
 */const _d="5",ay="v",uy="s",cy="r",dy="f",hy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fy="ls",py="p",ju="ac",my="websocket",gy="long_polling";/**
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
 */class _y{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function yy(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===my)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===gy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wT(t)&&(n.ns=t.namespace);const i=[];return tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class ST{constructor(){this.counters_={}}incrementCounter(e,n=1){jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nE(this.counters_)}}/**
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
 */const ka={},Ta={};function yd(t){const e=t.toString();return ka[e]||(ka[e]=new ST),ka[e]}function ET(t,e){const n=t.toString();return Ta[n]||(Ta[n]=e()),Ta[n]}/**
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
 */class IT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ri(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Vf="start",CT="close",kT="pLPCommand",TT="pRTLPCB",vy="id",wy="pw",Sy="ser",xT="cb",NT="seg",RT="ts",AT="d",PT="dframe",Ey=1870,Iy=30,bT=Ey-Iy,OT=25e3,DT=3e4;class Ir{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ts(e),this.stats_=yd(n),this.urlFn=a=>(this.appCheckToken&&(a[ju]=this.appCheckToken),yy(n,gy,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new IT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(DT)),cT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vd((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vf)this.id=l,this.password=a;else if(o===CT)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Vf]="t",r[Sy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[xT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ay]=_d,this.transportSessionId&&(r[uy]=this.transportSessionId),this.lastSessionId&&(r[fy]=this.lastSessionId),this.applicationId&&(r[py]=this.applicationId),this.appCheckToken&&(r[ju]=this.appCheckToken),typeof location<"u"&&location.hostname&&hy.test(location.hostname)&&(r[cy]=dy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ir.forceAllow_=!0}static forceDisallow(){Ir.forceDisallow_=!0}static isAvailable(){return Ir.forceAllow_?!0:!Ir.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hT()&&!fT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=zg(n),i=oy(r,bT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[PT]="t",r[vy]=e,r[wy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lT(),window[kT+this.uniqueCallbackIdentifier]=e,window[TT+this.uniqueCallbackIdentifier]=n,this.myIFrame=vd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vy]=this.myID,e[wy]=this.myPW,e[Sy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Iy+r.length<=Ey;){const o=this.pendingSegs.shift();r=r+"&"+NT+i+"="+o.seg+"&"+RT+i+"="+o.ts+"&"+AT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(OT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const MT=16384,LT=45e3;let Yo=null;typeof MozWebSocket<"u"?Yo=MozWebSocket:typeof WebSocket<"u"&&(Yo=WebSocket);class lt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ts(this.connId),this.stats_=yd(n),this.connURL=lt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[ay]=_d,typeof location<"u"&&location.hostname&&hy.test(location.hostname)&&(o[cy]=dy),n&&(o[uy]=n),r&&(o[fy]=r),i&&(o[ju]=i),s&&(o[py]=s),yy(e,my,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bn.set("previous_websocket_failure",!0);try{let r;Hg(),this.mySock=new Yo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Yo!==null&&!lt.forceDisallow_}static previouslyFailed(){return bn.isInMemoryStorage||bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=os(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=oy(n,MT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(LT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lt.responsesRequiredToBeHealthy=2;lt.healthyTimeout=3e4;/**
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
 */class ds{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ir,lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=lt&&lt.isAvailable();let r=n&&!lt.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[lt];else{const i=this.transports_=[];for(const s of ds.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ds.globalTransportInitialized_=!1;/**
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
 */const FT=6e4,UT=5e3,zT=10*1024,BT=100*1024,xa="t",$f="d",WT="s",Gf="r",jT="e",Kf="o",qf="a",Yf="n",Qf="p",HT="h";class VT{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ts("c:"+this.id+":"),this.transportManager_=new ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ui(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>BT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xa in e){const n=e[xa];n===qf?this.upgradeIfSecondaryHealthy_():n===Gf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gi("t",e),r=gi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gi("t",e),r=gi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gi(xa,e);if($f in e){const r=e[$f];if(n===HT)this.onHandshake_(r);else if(n===Yf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===WT?this.onConnectionShutdown_(r):n===Gf?this.onReset_(r):n===jT?Wu("Server Error: "+r):n===Kf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_d!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ui(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(FT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ui(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(UT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Cy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ky{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Qo extends ky{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qo}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Xf=32,Jf=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new X("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function _n(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function Ty(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $T(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ny(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof X)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new X(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Ye(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return Ye(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ry(t,e){if(_n(t)!==_n(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function at(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(_n(t)>_n(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class GT{constructor(e,n){this.errorPrefix_=n,this.parts_=xy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Il(this.parts_[r]);Ay(this)}}function KT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Il(e),Ay(t)}function qT(t){const e=t.parts_.pop();t.byteLength_-=Il(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ay(t){if(t.byteLength_>Jf)throw new Error(t.errorPrefix_+"has a key path longer than "+Jf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xf+") or object contains a cycle "+xn(t))}function xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class wd extends ky{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new wd}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _i=1e3,YT=60*5*1e3,Zf=30*1e3,QT=1.3,XT=3e4,JT="server_kill",ep=3;class Ot extends Cy{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ot.nextPersistentConnectionId_++,this.log_=Ts("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_i,this.maxReconnectDelay_=YT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Hg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ye(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new El,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ot.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&jt(e,"w")){const r=jr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_E(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wu("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>XT&&(this.reconnectDelay_=_i),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ot.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new VT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Ue(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(JT)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ue(d),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pu(this.interruptReasons_)&&(this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>gd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new X(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ep&&(this.reconnectDelay_=Zf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ep&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ny.replace(/\./g,"-")]=1,Jc()?e["framework.cordova"]=1:jg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qo.getInstance().currentlyOnline();return Pu(this.interruptReasons_)&&e}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class Al{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Vr,e),i=new z(Vr,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
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
 */let Qs;class Py extends Al{static get __EMPTY_NODE(){return Qs}static set __EMPTY_NODE(e){Qs=e}compare(e,n){return ni(e.name,n.name)}isDefinedOn(e){throw Xr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Yn,Qs)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Qs)}toString(){return".key"}}const Dr=new Py;/**
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
 */class Xs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:fe.RED,this.left=i!=null?i:De.EMPTY_NODE,this.right=s!=null?s:De.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class ZT{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xs(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new ZT;/**
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
 */function ex(t,e){return ni(t.name,e.name)}function Sd(t,e){return ni(t,e)}/**
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
 */let Hu;function tx(t){Hu=t}const by=function(t){return typeof t=="number"?"number:"+ly(t):"string:"+t},Oy=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&jt(e,".sv"),"Priority must be a string or number.")}else I(t===Hu||t.isEmpty(),"priority of unexpected type.");I(t===Hu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let tp;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Oy(this.priorityNode_)}static set __childrenNodeConstructor(e){tp=e}static get __childrenNodeConstructor(){return tp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:L(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||_n(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+by(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ly(this.value_):e+=this.value_,this.lazyHash_=iy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Dy,My;function nx(t){Dy=t}function rx(t){My=t}class ix extends Al{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ni(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Yn,new de("[PRIORITY-POST]",My))}makePost(e,n){const r=Dy(e);return new z(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const ke=new ix;/**
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
 */const sx=Math.log(2);class ox{constructor(e){const n=s=>parseInt(Math.log(s)/sx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xo=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new fe(h,d.node,fe.BLACK,null,null);{const m=parseInt(c/2,10)+a,_=i(a,m),v=i(m+1,u);return d=t[m],h=n?n(d):d,new fe(h,d.node,fe.BLACK,_,v)}},s=function(a){let u=null,c=null,d=t.length;const h=function(_,v){const R=d-_,p=d;d-=_;const f=i(R+1,p),g=t[R],w=n?n(g):g;m(new fe(w,g.node,v,null,f))},m=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),R=Math.pow(2,a.count-(_+1));v?h(R,fe.BLACK):(h(R,fe.BLACK),h(R,fe.RED))}return c},o=new ox(t.length),l=s(o);return new De(r||e,l)};/**
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
 */let Na;const ar={};class Pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(ar&&ke,"ChildrenNode.ts has not been loaded"),Na=Na||new Pt({".priority":ar},{".priority":ke}),Na}get(e){const n=jr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return jt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Xo(r,e.getCompare()):l=ar;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Pt(c,u)}addToIndexes(e,n){const r=Wo(this.indexes_,(i,s)=>{const o=jr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===ar)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Xo(l,o.getCompare())}else return ar;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new Pt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Wo(this.indexes_,i=>{if(i===ar)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Pt(r,this.indexSet_)}}/**
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
 */let yi;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Oy(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yi||(yi=new W(new De(Sd),null,Pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yi}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yi:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?yi:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=L(e);if(r===null)return n;{I(L(e)!==".priority"||_n(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Y(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ke,(o,l)=>{n[o]=l.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+by(this.getPriority().val())+":"),this.forEachChild(ke,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":iy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xs?-1:0}withIndex(e){if(e===Dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ke),i=n.getIterator(ke);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dr?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lx extends W{constructor(){super(new De(Sd),W.EMPTY_NODE,Pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const xs=new lx;Object.defineProperties(z,{MIN:{value:new z(Vr,W.EMPTY_NODE)},MAX:{value:new z(Yn,xs)}});Py.__EMPTY_NODE=W.EMPTY_NODE;de.__childrenNodeConstructor=W;tx(xs);rx(xs);/**
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
 */const ax=!0;function _e(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,_e(e))}if(!(t instanceof Array)&&ax){const n=[];let r=!1;if(tt(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=_e(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return W.EMPTY_NODE;const s=Xo(n,ex,o=>o.name,Sd);if(r){const o=Xo(n,ke.getCompare());return new W(s,_e(e),new Pt({".priority":o},{".priority":ke}))}else return new W(s,_e(e),Pt.Default)}else{let n=W.EMPTY_NODE;return tt(t,(r,i)=>{if(jt(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}nx(_e);/**
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
 */class ux extends Al{constructor(e){super(),this.indexPath_=e,I(!U(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ni(e.name,n.name):s}makePost(e,n){const r=_e(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,xs);return new z(Yn,e)}toString(){return xy(this.indexPath_,0).join("/")}}/**
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
 */class cx extends Al{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ni(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=_e(e);return new z(n,r)}toString(){return".value"}}const dx=new cx;/**
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
 */function hx(t){return{type:"value",snapshotNode:t}}function fx(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function px(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function np(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ed{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new Ed;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rp(t){const e={};if(t.isDefault())return e;let n;return t.index_===ke?n="$priority":t.index_===dx?n="$value":t.index_===Dr?n="$key":(I(t.index_ instanceof ux,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_&&(e.startAt=ye(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ye(t.indexStartName_))),t.endSet_&&(e.endAt=ye(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ye(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ip(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ke&&(e.i=t.index_.toString()),e}/**
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
 */class Jo extends Cy{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ts("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Jo.getListenId_(e,r),l={};this.listens_[o]=l;const a=rp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),jr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Jo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=rp(e._queryParams),r=e._path.toString(),i=new El;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Jr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=os(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class gx{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Zo(){return{value:null,children:new Map}}function Ly(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,Zo());const i=t.children.get(r);e=Y(e),Ly(i,e,n)}}function Vu(t,e,n){t.value!==null?n(e,t.value):_x(t,(r,i)=>{const s=new X(e.toString()+"/"+r);Vu(i,s,n)})}function _x(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class yx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const sp=10*1e3,vx=30*1e3,wx=5*60*1e3;class Sx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new yx(e);const r=sp+(vx-sp)*Math.random();Ui(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;tt(e,(i,s)=>{s>0&&jt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ui(this.reportStats_.bind(this),Math.floor(Math.random()*2*wx))}}/**
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
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function Fy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Uy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class el{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yt.ACK_USER_WRITE,this.source=Fy()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new el(H(),n,this.revert)}}else return I(L(this.path)===e,"operationForChild called for unrelated child."),new el(Y(this.path),this.affectedTree,this.revert)}}/**
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
 */class Qn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yt.OVERWRITE}operationForChild(e){return U(this.path)?new Qn(this.source,H(),this.snap.getImmediateChild(e)):new Qn(this.source,Y(this.path),this.snap)}}/**
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
 */class hs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new Qn(this.source,H(),n.value):new hs(this.source,H(),n)}else return I(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hs(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Id{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Ex(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(mx(o.childName,o.snapshotNode))}),vi(t,i,"child_removed",e,r,n),vi(t,i,"child_added",e,r,n),vi(t,i,"child_moved",s,r,n),vi(t,i,"child_changed",e,r,n),vi(t,i,"value",e,r,n),i}function vi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>Cx(t,l,a)),o.forEach(l=>{const a=Ix(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function Ix(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Cx(t,e,n){if(e.childName==null||n.childName==null)throw Xr("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function By(t,e){return{eventCache:t,serverCache:e}}function zi(t,e,n,r){return By(new Id(e,n,r),t.serverCache)}function Wy(t,e,n,r){return By(t.eventCache,new Id(e,n,r))}function $u(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ra;const kx=()=>(Ra||(Ra=new De(dT)),Ra);class q{constructor(e,n=kx()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return tt(e,(r,i)=>{n=n.set(new X(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(U(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Y(e),n);return s!=null?{path:le(new X(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree(Y(e)):new q(null)}}set(e,n){if(U(e))return new q(n,this.children);{const r=L(e),s=(this.children.get(r)||new q(null)).set(Y(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove(Y(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get(Y(e)):null}}setTree(e,n){if(U(e))return n;{const r=L(e),s=(this.children.get(r)||new q(null)).setTree(Y(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=L(e),o=this.children.get(s);return o?o.findOnPath_(Y(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=L(e),s=this.children.get(i);return s?s.foreachOnPath_(Y(e),le(n,i),r):new q(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class dt{constructor(e){this.writeTree_=e}static empty(){return new dt(new q(null))}}function Bi(t,e,n){if(U(e))return new dt(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ye(i,e);return s=s.updateChild(o,n),new dt(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new dt(s)}}}function op(t,e,n){let r=t;return tt(n,(i,s)=>{r=Bi(r,le(e,i),s)}),r}function lp(t,e){if(U(e))return dt.empty();{const n=t.writeTree_.setTree(e,new q(null));return new dt(n)}}function Gu(t,e){return rr(t,e)!=null}function rr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ye(n.path,e)):null}function ap(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function pn(t,e){if(U(e))return t;{const n=rr(t,e);return n!=null?new dt(new q(n)):new dt(t.writeTree_.subtree(e))}}function Ku(t){return t.writeTree_.isEmpty()}function $r(t,e){return jy(H(),t.writeTree_,e)}function jy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=jy(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
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
 */function Hy(t,e){return qy(e,t)}function Tx(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Bi(t.visibleWrites,e,n)),t.lastWriteId=r}function xx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Nx(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Rx(l,r.path)?i=!1:at(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Ax(t),!0;if(r.snap)t.visibleWrites=lp(t.visibleWrites,r.path);else{const l=r.children;tt(l,a=>{t.visibleWrites=lp(t.visibleWrites,le(r.path,a))})}return!0}else return!1}function Rx(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(le(t.path,n),e))return!0;return!1}function Ax(t){t.visibleWrites=Vy(t.allWrites,Px,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Px(t){return t.visible}function Vy(t,e,n){let r=dt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)at(n,o)?(l=Ye(n,o),r=Bi(r,l,s.snap)):at(o,n)&&(l=Ye(o,n),r=Bi(r,H(),s.snap.getChild(l)));else if(s.children){if(at(n,o))l=Ye(n,o),r=op(r,l,s.children);else if(at(o,n))if(l=Ye(o,n),U(l))r=op(r,H(),s.children);else{const a=jr(s.children,L(l));if(a){const u=a.getChild(Y(l));r=Bi(r,H(),u)}}}else throw Xr("WriteRecord should have .snap or .children")}}return r}function $y(t,e,n,r,i){if(!r&&!i){const s=rr(t.visibleWrites,e);if(s!=null)return s;{const o=pn(t.visibleWrites,e);if(Ku(o))return n;if(n==null&&!Gu(o,H()))return null;{const l=n||W.EMPTY_NODE;return $r(o,l)}}}else{const s=pn(t.visibleWrites,e);if(!i&&Ku(s))return n;if(!i&&n==null&&!Gu(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(at(u.path,e)||at(e,u.path))},l=Vy(t.allWrites,o,e),a=n||W.EMPTY_NODE;return $r(l,a)}}}function bx(t,e,n){let r=W.EMPTY_NODE;const i=rr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ke,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=pn(t.visibleWrites,e);return n.forEachChild(ke,(o,l)=>{const a=$r(pn(s,new X(o)),l);r=r.updateImmediateChild(o,a)}),ap(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=pn(t.visibleWrites,e);return ap(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Ox(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(Gu(t.visibleWrites,s))return null;{const o=pn(t.visibleWrites,s);return Ku(o)?i.getChild(n):$r(o,i.getChild(n))}}function Dx(t,e,n,r){const i=le(e,n),s=rr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=pn(t.visibleWrites,i);return $r(o,r.getNode().getImmediateChild(n))}else return null}function Mx(t,e){return rr(t.visibleWrites,e)}function Lx(t,e,n,r,i,s,o){let l;const a=pn(t.visibleWrites,e),u=rr(a,H());if(u!=null)l=u;else if(n!=null)l=$r(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=h.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=h.getNext();return c}else return[]}function Fx(){return{visibleWrites:dt.empty(),allWrites:[],lastWriteId:-1}}function qu(t,e,n,r){return $y(t.writeTree,t.treePath,e,n,r)}function Gy(t,e){return bx(t.writeTree,t.treePath,e)}function up(t,e,n,r){return Ox(t.writeTree,t.treePath,e,n,r)}function tl(t,e){return Mx(t.writeTree,le(t.treePath,e))}function Ux(t,e,n,r,i,s){return Lx(t.writeTree,t.treePath,e,n,r,i,s)}function Cd(t,e,n){return Dx(t.writeTree,t.treePath,e,n)}function Ky(t,e){return qy(le(t.treePath,e),t.writeTree)}function qy(t,e){return{treePath:t,writeTree:e}}/**
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
 */class zx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,np(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,px(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,fx(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,np(r,e.snapshotNode,i.oldSnap));else throw Xr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Bx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Yy=new Bx;class kd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Id(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xn(this.viewCache_),s=Ux(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function Wx(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jx(t,e,n,r,i){const s=new zx;let o,l;if(n.type===yt.OVERWRITE){const u=n;u.source.fromUser?o=Yu(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=nl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===yt.MERGE){const u=n;u.source.fromUser?o=Vx(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Qu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===yt.ACK_USER_WRITE){const u=n;u.revert?o=Kx(t,e,u.path,r,i,s):o=$x(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===yt.LISTEN_COMPLETE)o=Gx(t,e,n.path,r,s);else throw Xr("Unknown operation type: "+n.type);const a=s.getChanges();return Hx(e,o,a),{viewCache:o,changes:a}}function Hx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$u(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(hx($u(e)))}}function Qy(t,e,n,r,i,s){const o=e.eventCache;if(tl(r,n)!=null)return e;{let l,a;if(U(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Xn(e),c=u instanceof W?u:W.EMPTY_NODE,d=Gy(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=qu(r,Xn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){I(_n(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=up(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=Y(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=up(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Cd(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return zi(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function nl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),m,null)}else{const m=L(n);if(!a.isCompleteForPath(n)&&_n(n)>1)return e;const _=Y(n),R=a.getNode().getImmediateChild(m).updateChild(_,r);m===".priority"?u=c.updatePriority(a.getNode(),R):u=c.updateChild(a.getNode(),m,R,_,Yy,null)}const d=Wy(e,u,a.isFullyInitialized()||U(n),c.filtersNodes()),h=new kd(i,d,s);return Qy(t,d,n,i,h,l)}function Yu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new kd(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=zi(e,u,!0,t.filter.filtersNodes());else{const d=L(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=zi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=Y(n),m=l.getNode().getImmediateChild(d);let _;if(U(h))_=r;else{const v=c.getCompleteChild(d);v!=null?Ty(h)===".priority"&&v.getChild(Ny(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=W.EMPTY_NODE}if(m.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),d,_,h,c,o);a=zi(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function cp(t,e){return t.eventCache.isCompleteForChild(e)}function Vx(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=le(n,a);cp(e,L(c))&&(l=Yu(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=le(n,a);cp(e,L(c))||(l=Yu(t,l,c,u,i,s,o))}),l}function dp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Qu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=dp(t,m,h);a=nl(t,a,new X(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),v=dp(t,_,h);a=nl(t,a,new X(d),v,i,s,o,l)}}),a}function $x(t,e,n,r,i,s,o){if(tl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return nl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new q(null);return a.getNode().forEachChild(Dr,(c,d)=>{u=u.set(new X(c),d)}),Qu(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((c,d)=>{const h=le(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Qu(t,e,n,u,i,s,l,o)}}function Gx(t,e,n,r,i){const s=e.serverCache,o=Wy(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return Qy(t,o,n,r,Yy,i)}function Kx(t,e,n,r,i,s){let o;if(tl(r,n)!=null)return e;{const l=new kd(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||L(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=qu(r,Xn(e));else{const d=e.serverCache.getNode();I(d instanceof W,"serverChildren would be complete if leaf node"),c=Gy(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=L(n);let d=Cd(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,Y(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,W.EMPTY_NODE,Y(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qu(r,Xn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||tl(r,H())!=null,zi(e,u,o,t.filter.filtersNodes())}}function qx(t,e){const n=Xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function hp(t,e,n,r){e.type===yt.MERGE&&e.source.queryId!==null&&(I(Xn(t.viewCache_),"We should always have a full cache before handling merges"),I($u(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=jx(t.processor_,i,e,n,r);return Wx(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Yx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Yx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Ex(t.eventGenerator_,e,n,i)}/**
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
 */let fp;function Qx(t){I(!fp,"__referenceConstructor has already been defined"),fp=t}function Td(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),hp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(hp(o,e,n,r));return s}}function xd(t,e){let n=null;for(const r of t.views.values())n=n||qx(r,e);return n}/**
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
 */let pp;function Xx(t){I(!pp,"__referenceConstructor has already been defined"),pp=t}class mp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=Fx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xy(t,e,n,r,i){return Tx(t.pendingWriteTree_,e,n,r,i),i?bl(t,new Qn(Fy(),e,n)):[]}function On(t,e,n=!1){const r=xx(t.pendingWriteTree_,e);if(Nx(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(H(),!0):tt(r.children,o=>{s=s.set(new X(o),!0)}),bl(t,new el(r.path,s,n))}else return[]}function Pl(t,e,n){return bl(t,new Qn(Uy(),e,n))}function Jx(t,e,n){const r=q.fromObject(n);return bl(t,new hs(Uy(),e,r))}function Zx(t,e,n,r){const i=ev(t,r);if(i!=null){const s=tv(i),o=s.path,l=s.queryId,a=Ye(o,e),u=new Qn(zy(l),a,n);return nv(t,o,u)}else return[]}function eN(t,e,n,r){const i=ev(t,r);if(i){const s=tv(i),o=s.path,l=s.queryId,a=Ye(o,e),u=q.fromObject(n),c=new hs(zy(l),a,u);return nv(t,o,c)}else return[]}function Nd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ye(o,e),u=xd(l,a);if(u)return u});return $y(i,e,s,n,!0)}function bl(t,e){return Jy(e,t.syncPointTree_,null,Hy(t.pendingWriteTree_,H()))}function Jy(t,e,n,r){if(U(t.path))return Zy(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=xd(i,H()));let s=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Ky(r,o);s=s.concat(Jy(l,a,u,c))}return i&&(s=s.concat(Td(i,t,r,n))),s}}function Zy(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=xd(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Ky(r,o),c=t.operationForChild(o);c&&(s=s.concat(Zy(c,l,a,u)))}),i&&(s=s.concat(Td(i,t,r,n))),s}function ev(t,e){return t.tagToQueryMap.get(e)}function tv(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function nv(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Hy(t.pendingWriteTree_,e);return Td(r,n,i,null)}/**
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
 */class Rd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Rd(n)}node(){return this.node_}}class Ad{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new Ad(this.syncTree_,n)}node(){return Nd(this.syncTree_,this.path_)}}const tN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gp=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return rN(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},rN=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},iN=function(t,e,n,r){return Pd(e,new Ad(n,t),r)},rv=function(t,e,n){return Pd(t,new Rd(e),n)};function Pd(t,e,n){const r=t.getPriority().val(),i=gp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=gp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(ke,(l,a)=>{const u=Pd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class bd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Od(t,e){let n=e instanceof X?e:new X(e),r=t,i=L(n);for(;i!==null;){const s=jr(r.node.children,i)||{children:{},childCount:0};r=new bd(i,r,s),n=Y(n),i=L(n)}return r}function ii(t){return t.node.value}function iv(t,e){t.node.value=e,Xu(t)}function sv(t){return t.node.childCount>0}function sN(t){return ii(t)===void 0&&!sv(t)}function Ol(t,e){tt(t.node.children,(n,r)=>{e(new bd(n,t,r))})}function ov(t,e,n,r){n&&!r&&e(t),Ol(t,i=>{ov(i,e,!0,r)}),n&&r&&e(t)}function oN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ns(t){return new X(t.parent===null?t.name:Ns(t.parent)+"/"+t.name)}function Xu(t){t.parent!==null&&lN(t.parent,t.name,t)}function lN(t,e,n){const r=sN(n),i=jt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Xu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Xu(t))}/**
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
 */const aN=/[\[\].#$\/\u0000-\u001F\u007F]/,uN=/[\[\].#$\u0000-\u001F\u007F]/,Aa=10*1024*1024,lv=function(t){return typeof t=="string"&&t.length!==0&&!aN.test(t)},av=function(t){return typeof t=="string"&&t.length!==0&&!uN.test(t)},cN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),av(t)},dN=function(t,e,n,r){r&&e===void 0||Dd(ed(t,"value"),e,n)},Dd=function(t,e,n){const r=n instanceof X?new GT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xn(r));if(typeof e=="function")throw new Error(t+"contains a function "+xn(r)+" with contents = "+e.toString());if(sy(e))throw new Error(t+"contains "+e.toString()+" "+xn(r));if(typeof e=="string"&&e.length>Aa/3&&Il(e)>Aa)throw new Error(t+"contains a string greater than "+Aa+" utf8 bytes "+xn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(tt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!lv(o)))throw new Error(t+" contains an invalid key ("+o+") "+xn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);KT(r,o),Dd(t,l,r),qT(r)}),i&&s)throw new Error(t+' contains ".value" child '+xn(r)+" in addition to actual children.")}},uv=function(t,e,n,r){if(!(r&&n===void 0)&&!av(n))throw new Error(ed(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),uv(t,e,n,r)},fN=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},pN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!cN(n))throw new Error(ed(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class mN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cv(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ry(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Bt(t,e,n){cv(t,n),gN(t,r=>at(r,e)||at(e,r))}function gN(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(_N(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _N(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Fn&&Ce("event: "+n.toString()),ri(r)}}}/**
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
 */const yN="repo_interrupt",vN=25;class wN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zo(),this.transactionQueueTree_=new bd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function SN(t,e,n){if(t.stats_=yd(t.repoInfo_),t.forceRestClient_||_T())t.server_=new Jo(t.repoInfo_,(r,i,s,o)=>{_p(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ot(t.repoInfo_,e,(r,i,s,o)=>{_p(t,r,i,s,o)},r=>{yp(t,r)},r=>{IN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ET(t.repoInfo_,()=>new Sx(t.stats_,t.server_)),t.infoData_=new gx,t.infoSyncTree_=new mp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Pl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ld(t,"connected",!1),t.serverSyncTree_=new mp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Bt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function EN(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Md(t){return tN({timestamp:EN(t)})}function _p(t,e,n,r,i){t.dataUpdateCount++;const s=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Wo(n,u=>_e(u));o=eN(t.serverSyncTree_,s,a,i)}else{const a=_e(n);o=Zx(t.serverSyncTree_,s,a,i)}else if(r){const a=Wo(n,u=>_e(u));o=Jx(t.serverSyncTree_,s,a)}else{const a=_e(n);o=Pl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Dl(t,s)),Bt(t.eventQueue_,l,o)}function yp(t,e){Ld(t,"connected",e),e===!1&&kN(t)}function IN(t,e){tt(e,(n,r)=>{Ld(t,n,r)})}function Ld(t,e,n){const r=new X("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=Pl(t.infoSyncTree_,r,i);Bt(t.eventQueue_,r,s)}function dv(t){return t.nextWriteId_++}function CN(t,e,n,r,i){Fd(t,"set",{path:e.toString(),value:n,priority:r});const s=Md(t),o=_e(n,r),l=Nd(t.serverSyncTree_,e),a=rv(o,l,s),u=dv(t),c=Xy(t.serverSyncTree_,e,a,u,!0);cv(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||Ue("set at "+e+" failed: "+h);const v=On(t.serverSyncTree_,u,!_);Bt(t.eventQueue_,e,v),xN(t,i,h,m)});const d=gv(t,e);Dl(t,d),Bt(t.eventQueue_,d,[])}function kN(t){Fd(t,"onDisconnectEvents");const e=Md(t),n=Zo();Vu(t.onDisconnect_,H(),(i,s)=>{const o=iN(i,s,t.serverSyncTree_,e);Ly(n,i,o)});let r=[];Vu(n,H(),(i,s)=>{r=r.concat(Pl(t.serverSyncTree_,i,s));const o=gv(t,i);Dl(t,o)}),t.onDisconnect_=Zo(),Bt(t.eventQueue_,H(),r)}function TN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yN)}function Fd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function xN(t,e,n,r){e&&ri(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function hv(t,e,n){return Nd(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function Ud(t,e=t.transactionQueueTree_){if(e||Ml(t,e),ii(e)){const n=pv(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&NN(t,Ns(e),n)}else sv(e)&&Ol(e,n=>{Ud(t,n)})}function NN(t,e,n){const r=n.map(u=>u.currentWriteId),i=hv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ye(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Fd(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(On(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ml(t,Od(t.transactionQueueTree_,e)),Ud(t,t.transactionQueueTree_),Bt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)ri(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ue("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Dl(t,e)}},o)}function Dl(t,e){const n=fv(t,e),r=Ns(n),i=pv(t,n);return RN(t,i,r),r}function RN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ye(n,a.path);let c=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(On(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=vN)c=!0,d="maxretry",i=i.concat(On(t.serverSyncTree_,a.currentWriteId,!0));else{const h=hv(t,a.path,o);a.currentInputSnapshot=h;const m=e[l].update(h.val());if(m!==void 0){Dd("transaction failed: Data returned ",m,a.path);let _=_e(m);typeof m=="object"&&m!=null&&jt(m,".priority")||(_=_.updatePriority(h.getPriority()));const R=a.currentWriteId,p=Md(t),f=rv(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=dv(t),o.splice(o.indexOf(R),1),i=i.concat(Xy(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(On(t.serverSyncTree_,R,!0))}else c=!0,d="nodata",i=i.concat(On(t.serverSyncTree_,a.currentWriteId,!0))}Bt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Ml(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ri(r[l]);Ud(t,t.transactionQueueTree_)}function fv(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&ii(r)===void 0;)r=Od(r,n),e=Y(e),n=L(e);return r}function pv(t,e){const n=[];return mv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function mv(t,e,n){const r=ii(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ol(e,i=>{mv(t,i,n)})}function Ml(t,e){const n=ii(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,iv(e,n.length>0?n:void 0)}Ol(e,r=>{Ml(t,r)})}function gv(t,e){const n=Ns(fv(t,e)),r=Od(t.transactionQueueTree_,e);return oN(r,i=>{Pa(t,i)}),Pa(t,r),ov(r,i=>{Pa(t,i)}),n}function Pa(t,e){const n=ii(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(On(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?iv(e,void 0):n.length=s+1,Bt(t.eventQueue_,Ns(e),i);for(let o=0;o<r.length;o++)ri(r[o])}}/**
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
 */function AN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function PN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const vp=function(t,e){const n=bN(t),r=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||uT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _y(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new X(n.pathString)}},bN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=AN(t.substring(c,d)));const h=PN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class zd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Ty(this._path)}get ref(){return new ir(this._repo,this._path)}get _queryIdentifier(){const e=ip(this._queryParams),n=gd(e);return n==="{}"?"default":n}get _queryObject(){return ip(this._queryParams)}isEqual(e){if(e=me(e),!(e instanceof zd))return!1;const n=this._repo===e._repo,r=Ry(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$T(this._path)}}class ir extends zd{constructor(e,n){super(e,n,new Ed,!1)}get parent(){const e=Ny(this._path);return e===null?null:new ir(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function ON(t,e){return t=me(t),t._checkNotDeleted("ref"),e!==void 0?DN(t._root,e):t._root}function DN(t,e){return t=me(t),L(t._path)===null?hN("child","path",e,!1):uv("child","path",e,!1),new ir(t._repo,le(t._path,e))}function MN(t,e){t=me(t),fN("set",t._path),dN("set",e,t._path,!1);const n=new El;return CN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}Qx(ir);Xx(ir);/**
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
 */const LN="FIREBASE_DATABASE_EMULATOR_HOST",Ju={};let FN=!1;function UN(t,e,n,r){t.repoInfo_=new _y(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function zN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[LN]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=vp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Or(Or.OWNER):new vT(t.name,t.options,e);pN("Invalid Firebase Database URL",o),U(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=WN(l,t,c,new yT(t.name,n));return new jN(d,t)}function BN(t,e){const n=Ju[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),TN(t),delete n[t.key]}function WN(t,e,n,r){let i=Ju[e.name];i||(i={},Ju[e.name]=i);let s=i[t.toURLString()];return s&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new wN(t,FN,n,r),i[t.toURLString()]=s,s}class jN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(SN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ir(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(BN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function HN(t=nd(),e){const n=nr(t,"database").getImmediate({identifier:e}),r=cE("database");return r&&VN(n,...r),n}function VN(t,e,n,r={}){t=me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Or(Or.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:hE(r.mockUserToken,t.app.options.projectId);s=new Or(o)}UN(i,e,n,s)}/**
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
 */function $N(t){iT(vs),It(new ft("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return zN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Xe(Bf,Wf,t),Xe(Bf,Wf,"esm2017")}Ot.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ot.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$N();const GN={apiKey:"AIzaSyDnFyr_cDoO-DIwYz8rMfr16tDAlRGtg7s",authDomain:"adventure-rpg-8a83c.firebaseapp.com",projectId:"adventure-rpg-8a83c",storageBucket:"adventure-rpg-8a83c.appspot.com",messagingSenderId:"397253047058",appId:"1:397253047058:web:1367278c983913af9839cb",measurementId:"G-HF586DWD4B",databaseURL:"https://adventure-rpg-8a83c-default-rtdb.europe-west1.firebasedatabase.app"},Bd=Jg(GN),wi=Wk(Bd),KN=tT(Bd);ty(KN,"notification_received");const qN=HN(Bd);function YN(t,e){const n=t.email.split("@")[0],r=ON(qN,`users/${n}/characters/${e.name}`);MN(r,{name:e.name,level:e.level,hpMax:e.hpMax,currentHp:e.currentHp,encumbrence:e.encumbrence,encumbrenceMax:e.encumbrenceMax,strength:e.strength,dexterity:e.dexterity,constitution:e.constitution,intelligence:e.intelligence,wisdom:e.wisdom,charisma:e.charisma,exp:e.exp,expNext:e.expNext})}const _v=rc.createContext();function sr(){return E.exports.useContext(_v)}function QN({children:t}){const[e,n]=E.exports.useState(),[r,i]=E.exports.useState(!0);async function s(h,m){return SC(wi,h,m).then(_=>{const v=_.user;console.log(v.email)}).catch(_=>{const v=_.code,R=_.message;console.log(v,R)})}async function o(h,m){return EC(wi,h,m).then(_=>{const v=_.user;console.log(v.email)}).catch(_=>{const v=_.code,R=_.message;console.log(v,R)})}function l(){return xC(wi)}async function a(h){return wC(wi,h).catch(m=>{const _=m.code,v=m.message;console.log(_,v)})}function u(h){return IC(e,h)}function c(h){return CC(e,h)}E.exports.useEffect(()=>wi.onAuthStateChanged(m=>{n(m),i(!1)}),[]);const d={currentUser:e,login:o,signup:s,logout:l,resetPassword:a,updateEmailAPI:u,updatePasswordAPI:c};return y(_v.Provider,{value:d,children:!r&&t})}const XN={name:"",level:0,hpMax:0,currentHp:0,encumbrence:0,encumbrenceMax:0,strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma:10,exp:0,expNext:0};function JN(){const[t,e]=E.exports.useState(null),[n,r]=E.exports.useState("typing"),[i,s]=E.exports.useState(XN),[o,l]=E.exports.useState(14),{currentUser:a}=sr(),{character:u,setCharacter:c}=E.exports.useContext(si),{setGameState:d}=E.exports.useContext(Ll);async function h(R){R.preventDefault(),r("submitting");try{await v(i.name),await c({name:i.name,level:1,hpMax:10+i.constitution*2,currentHp:10+i.constitution*2,encumbrenceMax:10+i.strength*5,encumbrence:u.encumbrenceMax,strength:i.strength,dexterity:i.dexterity,constitution:i.constitution,intelligence:i.intelligence,wisdom:i.wisdom,charisma:i.charisma,exp:0,expNext:100}),r("success")}catch(p){r("typing"),e(p)}}function m(){d("adventure"),YN(a,u)}function _(R){s({...i,name:R.target.value})}function v(R){return new Promise((p,f)=>{setTimeout(()=>{let g=R.toLowerCase()==="";//! List wrong answers
g?f(new Error("You can't make a character with this name. Try again!")):p()},1e3)})}return n!=="success"?A("div",{children:[y("h2",{children:"Choose the name of your character:"}),y("input",{className:"w-80 text-black bg-primary placeholder:italic p-1 placeholder:text-slate-400 border border-primary-dark dark:border-primary rounded-md shadow-sm focus:border-primary dark:focus:border-primary-light focus:ring-primary-light focus:ring-1 sm:text-sm",value:i.name,onChange:_,disabled:n==="submitting",placeholder:"Something like Edward Kenway or Guts"}),A("p",{className:"mt-4",children:["Remaining points: ",o]}),y(eE,{tempChar:i,setTempChar:s,points:o,setPoints:l}),y("button",{className:"border p-1 cursor-pointer border-black dark:border-white rounded-md enabled:hover:bg-primary-300 focus:border-primary-600 disabled:text-gray-400 disabled:border-gray-400",onClick:h,disabled:i.name.length===0||n==="submitting"||o!==0,children:"Create"}),t!==null&&y("p",{className:"border-1 md:border-2 border-primary-dark",children:t.message})]}):A("div",{children:[A("p",{children:["Character created:"," ",y("span",{className:"font-semibold",children:u.name})]}),y("button",{className:"p-1 mt-2 border border-black dark:border-white rounded-md hover:bg-primary-300 focus:border-primary-600 text-center",onClick:m,children:"Continue"})]})}const ZN=[{id:1,text:"As you open your eyes, you find yourself in a cell. You don't remember how you got here. As you look around, you see several dead bodies around you.",options:[{text:"Look around",setState:{coins:10},nextText:2}]},{id:2,text:"Searching the bodies you find 10 silver coins, and a golden amulet that resembles the sun hanging around one of the dead men's neck.",options:[{text:"Take the amulet",setState:{amulet:!0},nextText:3},{text:"Leave it",nextText:4},{text:"Don your armor",requiredState:t=>t.armor,setState:{armor:!1},nextText:3}]},{id:3,text:'You carefully take the amulet from his neck and observe it. It is made from an alloy of iron and gold. Whoever made it, they must be really skillful - you think, looking at the beautiful shape of the object. Suddenly, you hear a warm, eerie voice in your head. "Hang me around your neck, and we can devour the gods together".',options:[{text:"Hang the amulet around your neck",setState:{amuletEquipped:!0},nextText:5},{text:"Shove it in your pocket",setState:{amuletEquipped:!1},nextText:6}]},{id:4,text:"I wouldn't wanna steal from a dead man - you think to yourself, and stand up from the bodies.",options:[{text:"Continue",nextText:7}]},{id:5,text:"Mesmerized by the voice, you hang the amulet around your neck, and look through every part of your cell. After you inspected every nook and cranny and found nothing else, you decide it is the best if you lie down in one of the corners and go to sleep.",options:[{text:"Continue",nextText:7}]},{id:6,text:"Frightened by the voice, you quickly put the amulet away, and continue searching the cell. After you inspected every nook and cranny and found nothing else, you decide it is the best if you lie down in one of the corners and go to sleep.",options:[{text:"Continue",nextText:7}]},{id:7,text:"After you inspected every nook and cranny of your cell and found nothing else, you decide it is the best if you lie down in one of the corners and go to sleep.",options:[{text:"Continue",nextText:8}]},{id:8,text:"",options:[{},{}]},{id:7,text:"",options:[{},{}]},{id:8,text:"",options:[{},{}]},{id:9,text:"",options:[{},{}]},{id:10,text:"",options:[{},{}]},{id:11,text:"",options:[{},{}]},{id:12,text:"",options:[{},{}]},{id:13,text:"",options:[{},{}]},{id:14,text:"",options:[{},{}]},{id:15,text:"",options:[{},{}]}];function eR(){E.exports.useContext(si);const[t,e]=E.exports.useState(!1),[n,r]=Au("Adventure state",{}),[i,s]=E.exports.useState(1),[o,l]=E.exports.useState("Text"),[a,u]=E.exports.useState([]);function c(){e(_=>!_),d(i)}function d(_){const v=ZN.find(R=>R.id==_);s(v.id),u(v.options),l(v.text)}function h(_){return _.requiredState==null||_.requiredState(n)}function m(_){const v=_.nextText;if(v<=0)return c();const R=Object.assign({},n,_.setState);r(R),d(v)}return t?A("div",{className:"flex w-full h-full flex-col",children:[y("h1",{className:"text-center mb-5",children:"Adventure"}),y("div",{className:"",children:o}),y("div",{className:"flex h-fit w-fit",children:a.map((_,v)=>{if(h(_))return y("button",{className:"p-1 m-2 border border-black dark:border-white rounded-md hover:bg-primary-light  text-center",onClick:()=>m(_),children:_.text},v)})})]}):A("div",{children:[y("h2",{children:"Start you adventure"}),y("button",{className:"p-1 mt-2 border border-black dark:border-white rounded-md hover:bg-primary-light text-center",onClick:c,children:"Click here"})]})}function tR(){return y("div",{children:y("h1",{className:"font-italic text-3xl font-bold",children:"Encyclopedia"})})}function nR(){return E.exports.useContext(si),y("div",{className:"flex w-full h-full flex-col",children:y("h1",{className:"text-center mb-5",children:"Adventure"})})}function rR(){const{gameState:t}=E.exports.useContext(Ll);function e(){switch(t){case"character-creation":return y(JN,{});case"character-screen":return y(ZS,{});case"adventure":return y(eR,{});case"encyclopedia":return y(tR,{});case"battle":return y(nR,{});case"settings":return y("div",{children:"settings"});case"menu":return y("div",{children:"Menu"});default:throw new Error(`Unknown game state(${t}) in Main Screen component!`)}}return y("div",{className:"w-full h-full p-4",children:e()})}function iR(){const t=E.exports.useRef(),e=E.exports.useRef(),n=E.exports.useRef(),{signup:r}=sr(),[i,s]=E.exports.useState(""),[o,l]=E.exports.useState(!1),a=Qr();E.exports.useEffect(()=>{const c=d=>{d.key=="Enter"&&(d.preventDefault(),u(d))};return document.addEventListener("keypress",c),()=>{document.removeEventListener("keypress",c)}},[]);async function u(c){if(c.preventDefault(),e.current.value!==n.current.value)return s("Passwords do not match!");try{s(""),l(!0),await r(t.current.value,e.current.value),a("/")}catch{s("Failed to create an account")}l(!1)}return A("div",{className:"flex flex-row h-full w-full",children:[y("div",{className:"w-1/2 bg-primary-dark"}),A("div",{className:"w-1/2 text-center flex flex-col items-center justify-center",children:[y("h1",{className:"text-2xl lg:text-[2.5rem] mb-3 font-bold",children:"Sign Up"}),y("p",{className:"text-sm lg:text-base text-secondary-light mb-6",children:"Enter your details to continue"}),i&&y("div",{className:"text-primary",children:y("h2",{children:i})}),y("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your email"}),y("input",{type:"email",ref:t,required:!0,placeholder:"email@email.com",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),y("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your password"}),y("input",{type:"password",ref:e,required:!0,placeholder:"*****",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),y("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your password again"}),y("input",{type:"password",ref:n,required:!0,placeholder:"*****",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),y("button",{type:"button",onClick:u,disabled:o,className:"w-3/4 max-w-md h-10 mt-4 text-base text-white bg-primary border-primary rounded-lg",children:"Sign Up"}),A("div",{className:"w-3/4 max-w-md mt-6 flex flex-row justify-center",children:[y("p",{className:"px-2",children:"Already have an account?"}),y(Hn,{to:"/login",className:"font-semibold",children:"Log in"})]})]})]})}function sR(){const[t,e]=E.exports.useState(""),{currentUser:n,logout:r}=sr(),i=Qr();async function s(){e("");try{await r(),i("/login")}catch{e("Failed to log out.")}}return y("div",{className:"dashboard-container",children:A("div",{className:"dashboard",children:[A("div",{className:"profile",children:[y("h2",{children:"Profile"}),t&&y("div",{className:"profile-error",children:y("h2",{children:t})}),y("strong",{children:"Email:"})," ",n.email,y("button",{onClick:s,children:"Log Out"})]}),y("div",{children:y(Hn,{to:"/update-profile",children:"Update profile"})})]})})}function oR(){const t=E.exports.useRef(),e=E.exports.useRef(),{login:n}=sr(),[r,i]=E.exports.useState(""),[s,o]=E.exports.useState(!1),l=Qr();E.exports.useEffect(()=>{const u=c=>{c.key=="Enter"&&(c.preventDefault(),a(c))};return document.addEventListener("keypress",u),()=>{document.removeEventListener("keypress",u)}},[]);async function a(u){u.preventDefault();try{i(""),o(!0),await n(t.current.value,e.current.value),l("/")}catch{i("Failed to log in")}o(!1)}return A("div",{className:"flex flex-row h-full w-full",children:[y("div",{className:"w-1/2 bg-primary-dark"}),A("div",{className:"w-1/2 text-center flex flex-col items-center justify-center",children:[y("h1",{className:"text-2xl lg:text-[2.5rem] mb-3 font-bold",children:"Log in"}),y("p",{className:"text-sm lg:text-base text-secondary-light mb-6",children:"Enter your details to continue"}),r&&y("div",{className:"",children:y("h2",{children:r})}),y("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your email"}),y("input",{type:"email",ref:t,placeholder:"email@email.com",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),y("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your password"}),y("input",{type:"password",ref:e,placeholder:"******",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),A("div",{className:"flex w-3/4 max-w-md flex-row justify-between items-center m-3",children:[A("div",{children:[y("input",{type:"checkbox",className:"text-primary border border-primary accent-primary appearance-none"}),y("p",{className:"inline mx-2",children:"Remember me"})]}),y(Hn,{to:"/forgot-password",className:"text-primary",children:"Forgot password?"})]}),y("button",{type:"button",onClick:a,disabled:s,className:"w-3/4 max-w-md h-10 text-base text-white bg-primary border-primary rounded-lg",children:"Login"}),A("div",{className:"w-3/4 max-w-md mt-6 flex flex-row justify-center",children:[y("p",{className:"px-2",children:"I don't have an account."}),y(Hn,{to:"/signup",className:"font-semibold",children:"Sign Up"})]})]})]})}function ur({to:t}){const{gameState:e,setGameState:n}=E.exports.useContext(Ll);function r(){n(t)}return y("button",{className:"flex-auto transition ease-in-out duration-300 items-start justify-evenly bg-primary text-black enabled:hover:bg-primary-light cursor-pointer",onClick:r,disabled:e==="character-creation",children:t.charAt(0).toUpperCase()+t.slice(1)})}function lR(){return A("nav",{className:"w-100 flex h-10 flex-initial",children:[y(ur,{to:"character-screen"}),y(ur,{to:"adventure"}),y(ur,{to:"battle"}),y(ur,{to:"encyclopedia"}),y(ur,{to:"settings"}),y(ur,{to:"menu"})]})}function wp({children:t}){const{currentUser:e}=sr();return e?t:y(BS,{to:"/login"})}function aR(){const t=E.exports.useRef(),{resetPassword:e}=sr(),[n,r]=E.exports.useState(""),[i,s]=E.exports.useState(!1),[o,l]=E.exports.useState("");E.exports.useEffect(()=>{const u=c=>{c.key=="Enter"&&(c.preventDefault(),a(c))};return document.addEventListener("keypress",u),()=>{document.removeEventListener("keypress",u)}},[]);async function a(u){u.preventDefault();try{l(""),r(""),s(!0),await e(t.current.value),l("Check your inbox for further instructions!")}catch{r("Failed to reset password")}s(!1)}return A("div",{className:"flex flex-row h-full w-full",children:[y("div",{className:"w-1/2 bg-primary-dark"}),A("div",{className:"w-1/2 text-center flex flex-col items-center justify-center",children:[y("h1",{className:"text-2xl lg:text-[2.5rem] mb-3 font-bold",children:"Password reset"}),n&&y("div",{className:"text-primary",children:y("h2",{children:n})}),o&&y("div",{className:"text-secondary",children:y("h2",{children:o})}),y("label",{className:"text-xs lg:text-base m-2 font-bold",children:"Enter your email"}),y("input",{type:"email",ref:t,placeholder:"email@email.com",className:"w-3/4 max-w-md mb-3 text-xs lg:text-base border rounded border-gray-400"}),y("button",{type:"button",onClick:a,disabled:i,className:"w-3/4 max-w-md h-10 text-base text-white bg-primary border-primary rounded-lg",children:"Reset password"}),y("div",{className:"m-3",children:y(Hn,{to:"/login",className:"font-semibold",children:"Login"})}),A("div",{className:"w-3/4 max-w-md flex flex-row justify-center",children:[y("p",{className:"px-2",children:"Need an account?"}),y(Hn,{to:"/signup",className:"font-semibold",children:"Sign Up"})]})]})]})}function uR(){const t=E.exports.useRef(),e=E.exports.useRef(),n=E.exports.useRef(),{currentUser:r,updatePasswordAPI:i,updateEmailAPI:s}=sr(),[o,l]=E.exports.useState(""),[a,u]=E.exports.useState(!1),c=Qr();function d(h){if(h.preventDefault(),e.current.value!==n.current.value)return l("Passwords do not match!");const m=[];u(!0),l(""),t.current.value!==r.email&&m.push(s(t.current.value)),e.current.value&&m.push(i(e.current.value)),Promise.all(m).then(()=>{c("/dashboard")}).catch(()=>{l("Failed to update account")}).finally(()=>{u(!1)})}return y("div",{className:"sign-up-cpntainer",children:A("div",{className:"sign-up",children:[y("h1",{children:"Update Profile"}),o&&y("div",{className:"sign-up-error",children:y("h2",{children:o})}),A("form",{onSubmit:d,children:[y("label",{children:"Email:"}),y("br",{}),y("input",{type:"email",ref:t,defaultValue:r.email}),y("br",{}),y("label",{children:"Password"}),y("br",{}),y("input",{type:"password",ref:e,placeholder:"Leave blank to keep the same"}),y("br",{}),y("label",{children:"Password confirmation"}),y("br",{}),y("input",{type:"password",ref:n,placeholder:"Leave blank to keep the same"}),y("button",{type:"submit",disabled:a,children:"Update"})]}),y("div",{children:y(Hn,{to:"/dashboard",children:"Cancel"})})]})})}const si=E.exports.createContext(),Ll=E.exports.createContext(),cR={name:"",level:0,hpMax:0,currentHp:0,encumbrence:0,encumbrenceMax:0,strength:0,dexterity:0,constitution:0,intelligence:0,wisdom:0,charisma:0,exp:0,expNext:0};function dR(){const[t,e]=Au("currentCharacter",cR),[n,r]=Au("Game state","character-creation"),[i,s]=E.exports.useState({enabled:!1,icon:qs});function o(){s(l=>(l.enabled?localStorage.theme="light":localStorage.theme="dark",{enabled:!l.enabled,icon:l.enabled?qs:pa}))}return E.exports.useEffect(()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?s(()=>(localStorage.theme="dark",{enabled:!0,icon:qs})):s(()=>(localStorage.theme="light",{enabled:!1,icon:pa}))},[]),y("div",{className:`w-screen h-screen text-xs lg:text-base ${i.enabled?"dark":""}`,children:y(QN,{children:y(Ll.Provider,{value:{gameState:n,setGameState:r},children:y(si.Provider,{value:{character:t,setCharacter:e},children:y(KS,{children:A(jS,{children:[y(kn,{path:"/dashboard",element:y(wp,{children:y(sR,{})})}),y(kn,{path:"/signup",element:y(iR,{})}),y(kn,{path:"/login",element:y(oR,{})}),y(kn,{path:"/forgot-password",element:y(aR,{})}),y(kn,{exact:!0,path:"/",element:y(wp,{children:A("div",{className:"flex flex-col w-screen h-screen font-serif text-black dark:text-white bg-white dark:bg-black",children:[y("div",{children:y(lR,{})}),A("div",{className:"flex h-screen w-screen",children:[y(JS,{changeTheme:o,themeIcon:i.enabled?pa:qs,character:t}),y(rR,{})]})]})})}),y(kn,{path:"/update-profile",element:y(uR,{})})]})})})})})})}Oa.createRoot(document.getElementById("root")).render(y(rc.StrictMode,{children:y(dR,{})}));
