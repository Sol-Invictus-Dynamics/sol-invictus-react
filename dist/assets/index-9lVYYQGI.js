function Df(a,d){for(var s=0;s<d.length;s++){const f=d[s];if(typeof f!="string"&&!Array.isArray(f)){for(const y in f)if(y!=="default"&&!(y in a)){const w=Object.getOwnPropertyDescriptor(f,y);w&&Object.defineProperty(a,y,w.get?w:{enumerable:!0,get:()=>f[y]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))f(y);new MutationObserver(y=>{for(const w of y)if(w.type==="childList")for(const k of w.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&f(k)}).observe(document,{childList:!0,subtree:!0});function s(y){const w={};return y.integrity&&(w.integrity=y.integrity),y.referrerPolicy&&(w.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?w.credentials="include":y.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function f(y){if(y.ep)return;y.ep=!0;const w=s(y);fetch(y.href,w)}})();function wc(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var $i={exports:{}},Tt={},Qi={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju;function bf(){if(Ju)return Y;Ju=1;var a=Symbol.for("react.element"),d=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),k=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),T=Symbol.iterator;function A(h){return h===null||typeof h!="object"?null:(h=T&&h[T]||h["@@iterator"],typeof h=="function"?h:null)}var ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,H={};function L(h,j,K){this.props=h,this.context=j,this.refs=H,this.updater=K||ne}L.prototype.isReactComponent={},L.prototype.setState=function(h,j){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,j,"setState")},L.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function le(){}le.prototype=L.prototype;function ie(h,j,K){this.props=h,this.context=j,this.refs=H,this.updater=K||ne}var re=ie.prototype=new le;re.constructor=ie,X(re,L.prototype),re.isPureReactComponent=!0;var ae=Array.isArray,je=Object.prototype.hasOwnProperty,Me={current:null},be={key:!0,ref:!0,__self:!0,__source:!0};function Ze(h,j,K){var G,Z={},q=null,se=null;if(j!=null)for(G in j.ref!==void 0&&(se=j.ref),j.key!==void 0&&(q=""+j.key),j)je.call(j,G)&&!be.hasOwnProperty(G)&&(Z[G]=j[G]);var te=arguments.length-2;if(te===1)Z.children=K;else if(1<te){for(var fe=Array(te),Qe=0;Qe<te;Qe++)fe[Qe]=arguments[Qe+2];Z.children=fe}if(h&&h.defaultProps)for(G in te=h.defaultProps,te)Z[G]===void 0&&(Z[G]=te[G]);return{$$typeof:a,type:h,key:q,ref:se,props:Z,_owner:Me.current}}function Rn(h,j){return{$$typeof:a,type:h.type,key:j,ref:h.ref,props:h.props,_owner:h._owner}}function Sn(h){return typeof h=="object"&&h!==null&&h.$$typeof===a}function er(h){var j={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(K){return j[K]})}var hn=/\/+/g;function $e(h,j){return typeof h=="object"&&h!==null&&h.key!=null?er(""+h.key):j.toString(36)}function ln(h,j,K,G,Z){var q=typeof h;(q==="undefined"||q==="boolean")&&(h=null);var se=!1;if(h===null)se=!0;else switch(q){case"string":case"number":se=!0;break;case"object":switch(h.$$typeof){case a:case d:se=!0}}if(se)return se=h,Z=Z(se),h=G===""?"."+$e(se,0):G,ae(Z)?(K="",h!=null&&(K=h.replace(hn,"$&/")+"/"),ln(Z,j,K,"",function(Qe){return Qe})):Z!=null&&(Sn(Z)&&(Z=Rn(Z,K+(!Z.key||se&&se.key===Z.key?"":(""+Z.key).replace(hn,"$&/")+"/")+h)),j.push(Z)),1;if(se=0,G=G===""?".":G+":",ae(h))for(var te=0;te<h.length;te++){q=h[te];var fe=G+$e(q,te);se+=ln(q,j,K,fe,Z)}else if(fe=A(h),typeof fe=="function")for(h=fe.call(h),te=0;!(q=h.next()).done;)q=q.value,fe=G+$e(q,te++),se+=ln(q,j,K,fe,Z);else if(q==="object")throw j=String(h),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return se}function gn(h,j,K){if(h==null)return h;var G=[],Z=0;return ln(h,G,"","",function(q){return j.call(K,q,Z++)}),G}function Fe(h){if(h._status===-1){var j=h._result;j=j(),j.then(function(K){(h._status===0||h._status===-1)&&(h._status=1,h._result=K)},function(K){(h._status===0||h._status===-1)&&(h._status=2,h._result=K)}),h._status===-1&&(h._status=0,h._result=j)}if(h._status===1)return h._result.default;throw h._result}var ge={current:null},O={transition:null},$={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:O,ReactCurrentOwner:Me};function b(){throw Error("act(...) is not supported in production builds of React.")}return Y.Children={map:gn,forEach:function(h,j,K){gn(h,function(){j.apply(this,arguments)},K)},count:function(h){var j=0;return gn(h,function(){j++}),j},toArray:function(h){return gn(h,function(j){return j})||[]},only:function(h){if(!Sn(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},Y.Component=L,Y.Fragment=s,Y.Profiler=y,Y.PureComponent=ie,Y.StrictMode=f,Y.Suspense=S,Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,Y.act=b,Y.cloneElement=function(h,j,K){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var G=X({},h.props),Z=h.key,q=h.ref,se=h._owner;if(j!=null){if(j.ref!==void 0&&(q=j.ref,se=Me.current),j.key!==void 0&&(Z=""+j.key),h.type&&h.type.defaultProps)var te=h.type.defaultProps;for(fe in j)je.call(j,fe)&&!be.hasOwnProperty(fe)&&(G[fe]=j[fe]===void 0&&te!==void 0?te[fe]:j[fe])}var fe=arguments.length-2;if(fe===1)G.children=K;else if(1<fe){te=Array(fe);for(var Qe=0;Qe<fe;Qe++)te[Qe]=arguments[Qe+2];G.children=te}return{$$typeof:a,type:h.type,key:Z,ref:q,props:G,_owner:se}},Y.createContext=function(h){return h={$$typeof:k,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:w,_context:h},h.Consumer=h},Y.createElement=Ze,Y.createFactory=function(h){var j=Ze.bind(null,h);return j.type=h,j},Y.createRef=function(){return{current:null}},Y.forwardRef=function(h){return{$$typeof:P,render:h}},Y.isValidElement=Sn,Y.lazy=function(h){return{$$typeof:I,_payload:{_status:-1,_result:h},_init:Fe}},Y.memo=function(h,j){return{$$typeof:_,type:h,compare:j===void 0?null:j}},Y.startTransition=function(h){var j=O.transition;O.transition={};try{h()}finally{O.transition=j}},Y.unstable_act=b,Y.useCallback=function(h,j){return ge.current.useCallback(h,j)},Y.useContext=function(h){return ge.current.useContext(h)},Y.useDebugValue=function(){},Y.useDeferredValue=function(h){return ge.current.useDeferredValue(h)},Y.useEffect=function(h,j){return ge.current.useEffect(h,j)},Y.useId=function(){return ge.current.useId()},Y.useImperativeHandle=function(h,j,K){return ge.current.useImperativeHandle(h,j,K)},Y.useInsertionEffect=function(h,j){return ge.current.useInsertionEffect(h,j)},Y.useLayoutEffect=function(h,j){return ge.current.useLayoutEffect(h,j)},Y.useMemo=function(h,j){return ge.current.useMemo(h,j)},Y.useReducer=function(h,j,K){return ge.current.useReducer(h,j,K)},Y.useRef=function(h){return ge.current.useRef(h)},Y.useState=function(h){return ge.current.useState(h)},Y.useSyncExternalStore=function(h,j,K){return ge.current.useSyncExternalStore(h,j,K)},Y.useTransition=function(){return ge.current.useTransition()},Y.version="18.3.1",Y}var Zu;function ea(){return Zu||(Zu=1,Qi.exports=bf()),Qi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu;function Ff(){if(qu)return Tt;qu=1;var a=ea(),d=Symbol.for("react.element"),s=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,y=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function k(P,S,_){var I,T={},A=null,ne=null;_!==void 0&&(A=""+_),S.key!==void 0&&(A=""+S.key),S.ref!==void 0&&(ne=S.ref);for(I in S)f.call(S,I)&&!w.hasOwnProperty(I)&&(T[I]=S[I]);if(P&&P.defaultProps)for(I in S=P.defaultProps,S)T[I]===void 0&&(T[I]=S[I]);return{$$typeof:d,type:P,key:A,ref:ne,props:T,_owner:y.current}}return Tt.Fragment=s,Tt.jsx=k,Tt.jsxs=k,Tt}var ec;function Uf(){return ec||(ec=1,$i.exports=Ff()),$i.exports}var u=Uf(),R=ea();const kc=wc(R),Bf=Df({__proto__:null,default:kc},[R]);var Qo={},Ki={exports:{}},He={},Yi={exports:{}},Gi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc;function Af(){return nc||(nc=1,(function(a){function d(O,$){var b=O.length;O.push($);e:for(;0<b;){var h=b-1>>>1,j=O[h];if(0<y(j,$))O[h]=$,O[b]=j,b=h;else break e}}function s(O){return O.length===0?null:O[0]}function f(O){if(O.length===0)return null;var $=O[0],b=O.pop();if(b!==$){O[0]=b;e:for(var h=0,j=O.length,K=j>>>1;h<K;){var G=2*(h+1)-1,Z=O[G],q=G+1,se=O[q];if(0>y(Z,b))q<j&&0>y(se,Z)?(O[h]=se,O[q]=b,h=q):(O[h]=Z,O[G]=b,h=G);else if(q<j&&0>y(se,b))O[h]=se,O[q]=b,h=q;else break e}}return $}function y(O,$){var b=O.sortIndex-$.sortIndex;return b!==0?b:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;a.unstable_now=function(){return w.now()}}else{var k=Date,P=k.now();a.unstable_now=function(){return k.now()-P}}var S=[],_=[],I=1,T=null,A=3,ne=!1,X=!1,H=!1,L=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(O){for(var $=s(_);$!==null;){if($.callback===null)f(_);else if($.startTime<=O)f(_),$.sortIndex=$.expirationTime,d(S,$);else break;$=s(_)}}function ae(O){if(H=!1,re(O),!X)if(s(S)!==null)X=!0,Fe(je);else{var $=s(_);$!==null&&ge(ae,$.startTime-O)}}function je(O,$){X=!1,H&&(H=!1,le(Ze),Ze=-1),ne=!0;var b=A;try{for(re($),T=s(S);T!==null&&(!(T.expirationTime>$)||O&&!er());){var h=T.callback;if(typeof h=="function"){T.callback=null,A=T.priorityLevel;var j=h(T.expirationTime<=$);$=a.unstable_now(),typeof j=="function"?T.callback=j:T===s(S)&&f(S),re($)}else f(S);T=s(S)}if(T!==null)var K=!0;else{var G=s(_);G!==null&&ge(ae,G.startTime-$),K=!1}return K}finally{T=null,A=b,ne=!1}}var Me=!1,be=null,Ze=-1,Rn=5,Sn=-1;function er(){return!(a.unstable_now()-Sn<Rn)}function hn(){if(be!==null){var O=a.unstable_now();Sn=O;var $=!0;try{$=be(!0,O)}finally{$?$e():(Me=!1,be=null)}}else Me=!1}var $e;if(typeof ie=="function")$e=function(){ie(hn)};else if(typeof MessageChannel<"u"){var ln=new MessageChannel,gn=ln.port2;ln.port1.onmessage=hn,$e=function(){gn.postMessage(null)}}else $e=function(){L(hn,0)};function Fe(O){be=O,Me||(Me=!0,$e())}function ge(O,$){Ze=L(function(){O(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_continueExecution=function(){X||ne||(X=!0,Fe(je))},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rn=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return A},a.unstable_getFirstCallbackNode=function(){return s(S)},a.unstable_next=function(O){switch(A){case 1:case 2:case 3:var $=3;break;default:$=A}var b=A;A=$;try{return O()}finally{A=b}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var b=A;A=O;try{return $()}finally{A=b}},a.unstable_scheduleCallback=function(O,$,b){var h=a.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?h+b:h):b=h,O){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=b+j,O={id:I++,callback:$,priorityLevel:O,startTime:b,expirationTime:j,sortIndex:-1},b>h?(O.sortIndex=b,d(_,O),s(S)===null&&O===s(_)&&(H?(le(Ze),Ze=-1):H=!0,ge(ae,b-h))):(O.sortIndex=j,d(S,O),X||ne||(X=!0,Fe(je))),O},a.unstable_shouldYield=er,a.unstable_wrapCallback=function(O){var $=A;return function(){var b=A;A=$;try{return O.apply(this,arguments)}finally{A=b}}}})(Gi)),Gi}var rc;function Vf(){return rc||(rc=1,Yi.exports=Af()),Yi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc;function Wf(){if(tc)return He;tc=1;var a=ea(),d=Vf();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,y={};function w(e,n){k(e,n),k(e+"Capture",n)}function k(e,n){for(y[e]=n,e=0;e<n.length;e++)f.add(n[e])}var P=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},T={};function A(e){return S.call(T,e)?!0:S.call(I,e)?!1:_.test(e)?T[e]=!0:(I[e]=!0,!1)}function ne(e,n,r,t){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,n,r,t){if(n===null||typeof n>"u"||ne(e,n,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function H(e,n,r,t,o,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){L[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];L[n]=new H(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){L[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){L[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){L[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){L[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){L[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){L[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){L[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function ie(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(le,ie);L[n]=new H(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(le,ie);L[n]=new H(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(le,ie);L[n]=new H(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){L[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),L.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){L[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function re(e,n,r,t){var o=L.hasOwnProperty(n)?L[n]:null;(o!==null?o.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(X(n,r,o,t)&&(r=null),t||o===null?A(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(n=o.attributeName,t=o.attributeNamespace,r===null?e.removeAttribute(n):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,t?e.setAttributeNS(t,n,r):e.setAttribute(n,r))))}var ae=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),Me=Symbol.for("react.portal"),be=Symbol.for("react.fragment"),Ze=Symbol.for("react.strict_mode"),Rn=Symbol.for("react.profiler"),Sn=Symbol.for("react.provider"),er=Symbol.for("react.context"),hn=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),ln=Symbol.for("react.suspense_list"),gn=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),O=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,h;function j(e){if(h===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);h=n&&n[1]||""}return`
`+h+e}var K=!1;function G(e,n){if(!e||K)return"";K=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(x){var t=x}Reflect.construct(e,[],n)}else{try{n.call()}catch(x){t=x}e.call(n.prototype)}else{try{throw Error()}catch(x){t=x}e()}}catch(x){if(x&&t&&typeof x.stack=="string"){for(var o=x.stack.split(`
`),l=t.stack.split(`
`),i=o.length-1,c=l.length-1;1<=i&&0<=c&&o[i]!==l[c];)c--;for(;1<=i&&0<=c;i--,c--)if(o[i]!==l[c]){if(i!==1||c!==1)do if(i--,c--,0>c||o[i]!==l[c]){var p=`
`+o[i].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=i&&0<=c);break}}}finally{K=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?j(e):""}function Z(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function q(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case be:return"Fragment";case Me:return"Portal";case Rn:return"Profiler";case Ze:return"StrictMode";case $e:return"Suspense";case ln:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case er:return(e.displayName||"Context")+".Consumer";case Sn:return(e._context.displayName||"Context")+".Provider";case hn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gn:return n=e.displayName||null,n!==null?n:q(e.type)||"Memo";case Fe:n=e._payload,e=e._init;try{return q(e(n))}catch{}}return null}function se(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(n);case 8:return n===Ze?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e){var n=fe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,l=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){t=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function It(e){e._valueTracker||(e._valueTracker=Qe(e))}function ta(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),t="";return e&&(t=fe(e)?e.checked?"true":"false":e.value),e=t,e!==r?(n.setValue(e),!0):!1}function Dt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zo(e,n){var r=n.checked;return b({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function oa(e,n){var r=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;r=te(n.value!=null?n.value:r),e._wrapperState={initialChecked:t,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function la(e,n){n=n.checked,n!=null&&re(e,"checked",n,!1)}function qo(e,n){la(e,n);var r=te(n.value),t=n.type;if(r!=null)t==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?el(e,n.type,r):n.hasOwnProperty("defaultValue")&&el(e,n.type,te(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ia(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function el(e,n,r){(n!=="number"||Dt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var $r=Array.isArray;function vr(e,n,r,t){if(e=e.options,n){n={};for(var o=0;o<r.length;o++)n["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=n.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&t&&(e[r].defaultSelected=!0)}else{for(r=""+te(r),n=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,t&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function nl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return b({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function aa(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(s(92));if($r(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:te(r)}}function sa(e,n){var r=te(n.value),t=te(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),t!=null&&(e.defaultValue=""+t)}function ua(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ca(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ca(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bt,da=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,t,o){MSApp.execUnsafeLocalFunction(function(){return e(n,r,t,o)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(bt=bt||document.createElement("div"),bt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=bt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Qr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uc=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){Uc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Kr[n]=Kr[e]})});function fa(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+n).trim():n+"px"}function pa(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var t=r.indexOf("--")===0,o=fa(r,n[r],t);r==="float"&&(r="cssFloat"),t?e.setProperty(r,o):e[r]=o}}var Bc=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(e,n){if(n){if(Bc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function ol(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ll=null;function il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,yr=null,xr=null;function ma(e){if(e=ht(e)){if(typeof al!="function")throw Error(s(280));var n=e.stateNode;n&&(n=io(n),al(e.stateNode,e.type,n))}}function ha(e){yr?xr?xr.push(e):xr=[e]:yr=e}function ga(){if(yr){var e=yr,n=xr;if(xr=yr=null,ma(e),n)for(e=0;e<n.length;e++)ma(n[e])}}function va(e,n){return e(n)}function ya(){}var sl=!1;function xa(e,n,r){if(sl)return e(n,r);sl=!0;try{return va(e,n,r)}finally{sl=!1,(yr!==null||xr!==null)&&(ya(),ga())}}function Yr(e,n){var r=e.stateNode;if(r===null)return null;var t=io(r);if(t===null)return null;r=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var ul=!1;if(P)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){ul=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{ul=!1}function Ac(e,n,r,t,o,l,i,c,p){var x=Array.prototype.slice.call(arguments,3);try{n.apply(r,x)}catch(C){this.onError(C)}}var Xr=!1,Ft=null,Ut=!1,cl=null,Vc={onError:function(e){Xr=!0,Ft=e}};function Wc(e,n,r,t,o,l,i,c,p){Xr=!1,Ft=null,Ac.apply(Vc,arguments)}function Hc(e,n,r,t,o,l,i,c,p){if(Wc.apply(this,arguments),Xr){if(Xr){var x=Ft;Xr=!1,Ft=null}else throw Error(s(198));Ut||(Ut=!0,cl=x)}}function nr(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function wa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ka(e){if(nr(e)!==e)throw Error(s(188))}function $c(e){var n=e.alternate;if(!n){if(n=nr(e),n===null)throw Error(s(188));return n!==e?null:e}for(var r=e,t=n;;){var o=r.return;if(o===null)break;var l=o.alternate;if(l===null){if(t=o.return,t!==null){r=t;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===r)return ka(o),e;if(l===t)return ka(o),n;l=l.sibling}throw Error(s(188))}if(r.return!==t.return)r=o,t=l;else{for(var i=!1,c=o.child;c;){if(c===r){i=!0,r=o,t=l;break}if(c===t){i=!0,t=o,r=l;break}c=c.sibling}if(!i){for(c=l.child;c;){if(c===r){i=!0,r=l,t=o;break}if(c===t){i=!0,t=l,r=o;break}c=c.sibling}if(!i)throw Error(s(189))}}if(r.alternate!==t)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:n}function Sa(e){return e=$c(e),e!==null?Ea(e):null}function Ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ea(e);if(n!==null)return n;e=e.sibling}return null}var ja=d.unstable_scheduleCallback,Ca=d.unstable_cancelCallback,Qc=d.unstable_shouldYield,Kc=d.unstable_requestPaint,ye=d.unstable_now,Yc=d.unstable_getCurrentPriorityLevel,dl=d.unstable_ImmediatePriority,Na=d.unstable_UserBlockingPriority,Bt=d.unstable_NormalPriority,Gc=d.unstable_LowPriority,za=d.unstable_IdlePriority,At=null,vn=null;function Xc(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(At,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:qc,Jc=Math.log,Zc=Math.LN2;function qc(e){return e>>>=0,e===0?32:31-(Jc(e)/Zc|0)|0}var Vt=64,Wt=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ht(e,n){var r=e.pendingLanes;if(r===0)return 0;var t=0,o=e.suspendedLanes,l=e.pingedLanes,i=r&268435455;if(i!==0){var c=i&~o;c!==0?t=Jr(c):(l&=i,l!==0&&(t=Jr(l)))}else i=r&~o,i!==0?t=Jr(i):l!==0&&(t=Jr(l));if(t===0)return 0;if(n!==0&&n!==t&&(n&o)===0&&(o=t&-t,l=n&-n,o>=l||o===16&&(l&4194240)!==0))return n;if((t&4)!==0&&(t|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)r=31-an(n),o=1<<r,t|=e[r],n&=~o;return t}function ed(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(e,n){for(var r=e.suspendedLanes,t=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-an(l),c=1<<i,p=o[i];p===-1?((c&r)===0||(c&t)!==0)&&(o[i]=ed(c,n)):p<=n&&(e.expiredLanes|=c),l&=~c}}function fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pa(){var e=Vt;return Vt<<=1,(Vt&4194240)===0&&(Vt=64),e}function pl(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Zr(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-an(n),e[n]=r}function rd(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-an(r),l=1<<o;n[o]=0,t[o]=-1,e[o]=-1,r&=~l}}function ml(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var t=31-an(r),o=1<<t;o&n|e[t]&n&&(e[t]|=n),r&=~o}}var oe=0;function _a(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ta,hl,Ra,La,Oa,gl=!1,$t=[],Ln=null,On=null,Mn=null,qr=new Map,et=new Map,In=[],td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ma(e,n){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":qr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":et.delete(n.pointerId)}}function nt(e,n,r,t,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:r,eventSystemFlags:t,nativeEvent:l,targetContainers:[o]},n!==null&&(n=ht(n),n!==null&&hl(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function od(e,n,r,t,o){switch(n){case"focusin":return Ln=nt(Ln,e,n,r,t,o),!0;case"dragenter":return On=nt(On,e,n,r,t,o),!0;case"mouseover":return Mn=nt(Mn,e,n,r,t,o),!0;case"pointerover":var l=o.pointerId;return qr.set(l,nt(qr.get(l)||null,e,n,r,t,o)),!0;case"gotpointercapture":return l=o.pointerId,et.set(l,nt(et.get(l)||null,e,n,r,t,o)),!0}return!1}function Ia(e){var n=rr(e.target);if(n!==null){var r=nr(n);if(r!==null){if(n=r.tag,n===13){if(n=wa(r),n!==null){e.blockedOn=n,Oa(e.priority,function(){Ra(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qt(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=yl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var t=new r.constructor(r.type,r);ll=t,r.target.dispatchEvent(t),ll=null}else return n=ht(r),n!==null&&hl(n),e.blockedOn=r,!1;n.shift()}return!0}function Da(e,n,r){Qt(e)&&r.delete(n)}function ld(){gl=!1,Ln!==null&&Qt(Ln)&&(Ln=null),On!==null&&Qt(On)&&(On=null),Mn!==null&&Qt(Mn)&&(Mn=null),qr.forEach(Da),et.forEach(Da)}function rt(e,n){e.blockedOn===n&&(e.blockedOn=null,gl||(gl=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,ld)))}function tt(e){function n(o){return rt(o,e)}if(0<$t.length){rt($t[0],e);for(var r=1;r<$t.length;r++){var t=$t[r];t.blockedOn===e&&(t.blockedOn=null)}}for(Ln!==null&&rt(Ln,e),On!==null&&rt(On,e),Mn!==null&&rt(Mn,e),qr.forEach(n),et.forEach(n),r=0;r<In.length;r++)t=In[r],t.blockedOn===e&&(t.blockedOn=null);for(;0<In.length&&(r=In[0],r.blockedOn===null);)Ia(r),r.blockedOn===null&&In.shift()}var wr=ae.ReactCurrentBatchConfig,Kt=!0;function id(e,n,r,t){var o=oe,l=wr.transition;wr.transition=null;try{oe=1,vl(e,n,r,t)}finally{oe=o,wr.transition=l}}function ad(e,n,r,t){var o=oe,l=wr.transition;wr.transition=null;try{oe=4,vl(e,n,r,t)}finally{oe=o,wr.transition=l}}function vl(e,n,r,t){if(Kt){var o=yl(e,n,r,t);if(o===null)Il(e,n,t,Yt,r),Ma(e,t);else if(od(o,e,n,r,t))t.stopPropagation();else if(Ma(e,t),n&4&&-1<td.indexOf(e)){for(;o!==null;){var l=ht(o);if(l!==null&&Ta(l),l=yl(e,n,r,t),l===null&&Il(e,n,t,Yt,r),l===o)break;o=l}o!==null&&t.stopPropagation()}else Il(e,n,t,null,r)}}var Yt=null;function yl(e,n,r,t){if(Yt=null,e=il(t),e=rr(e),e!==null)if(n=nr(e),n===null)e=null;else if(r=n.tag,r===13){if(e=wa(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Yt=e,null}function ba(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case dl:return 1;case Na:return 4;case Bt:case Gc:return 16;case za:return 536870912;default:return 16}default:return 16}}var Dn=null,xl=null,Gt=null;function Fa(){if(Gt)return Gt;var e,n=xl,r=n.length,t,o="value"in Dn?Dn.value:Dn.textContent,l=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[l-t];t++);return Gt=o.slice(e,1<t?1-t:void 0)}function Xt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jt(){return!0}function Ua(){return!1}function Ke(e){function n(r,t,o,l,i){this._reactName=r,this._targetInst=o,this.type=t,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Jt:Ua,this.isPropagationStopped=Ua,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Jt)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Jt)},persist:function(){},isPersistent:Jt}),n}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=Ke(kr),ot=b({},kr,{view:0,detail:0}),sd=Ke(ot),kl,Sl,lt,Zt=b({},ot,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lt&&(lt&&e.type==="mousemove"?(kl=e.screenX-lt.screenX,Sl=e.screenY-lt.screenY):Sl=kl=0,lt=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),Ba=Ke(Zt),ud=b({},Zt,{dataTransfer:0}),cd=Ke(ud),dd=b({},ot,{relatedTarget:0}),El=Ke(dd),fd=b({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),pd=Ke(fd),md=b({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hd=Ke(md),gd=b({},kr,{data:0}),Aa=Ke(gd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xd[e])?!!n[e]:!1}function jl(){return wd}var kd=b({},ot,{key:function(e){if(e.key){var n=vd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Xt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sd=Ke(kd),Ed=b({},Zt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Va=Ke(Ed),jd=b({},ot,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Cd=Ke(jd),Nd=b({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zd=Ke(Nd),Pd=b({},Zt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_d=Ke(Pd),Td=[9,13,27,32],Cl=P&&"CompositionEvent"in window,it=null;P&&"documentMode"in document&&(it=document.documentMode);var Rd=P&&"TextEvent"in window&&!it,Wa=P&&(!Cl||it&&8<it&&11>=it),Ha=" ",$a=!1;function Qa(e,n){switch(e){case"keyup":return Td.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ka(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function Ld(e,n){switch(e){case"compositionend":return Ka(n);case"keypress":return n.which!==32?null:($a=!0,Ha);case"textInput":return e=n.data,e===Ha&&$a?null:e;default:return null}}function Od(e,n){if(Sr)return e==="compositionend"||!Cl&&Qa(e,n)?(e=Fa(),Gt=xl=Dn=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wa&&n.locale!=="ko"?null:n.data;default:return null}}var Md={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ya(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Md[e.type]:n==="textarea"}function Ga(e,n,r,t){ha(t),n=to(n,"onChange"),0<n.length&&(r=new wl("onChange","change",null,r,t),e.push({event:r,listeners:n}))}var at=null,st=null;function Id(e){ps(e,0)}function qt(e){var n=zr(e);if(ta(n))return e}function Dd(e,n){if(e==="change")return n}var Xa=!1;if(P){var Nl;if(P){var zl="oninput"in document;if(!zl){var Ja=document.createElement("div");Ja.setAttribute("oninput","return;"),zl=typeof Ja.oninput=="function"}Nl=zl}else Nl=!1;Xa=Nl&&(!document.documentMode||9<document.documentMode)}function Za(){at&&(at.detachEvent("onpropertychange",qa),st=at=null)}function qa(e){if(e.propertyName==="value"&&qt(st)){var n=[];Ga(n,st,e,il(e)),xa(Id,n)}}function bd(e,n,r){e==="focusin"?(Za(),at=n,st=r,at.attachEvent("onpropertychange",qa)):e==="focusout"&&Za()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qt(st)}function Ud(e,n){if(e==="click")return qt(n)}function Bd(e,n){if(e==="input"||e==="change")return qt(n)}function Ad(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sn=typeof Object.is=="function"?Object.is:Ad;function ut(e,n){if(sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var o=r[t];if(!S.call(n,o)||!sn(e[o],n[o]))return!1}return!0}function es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ns(e,n){var r=es(e);e=0;for(var t;r;){if(r.nodeType===3){if(t=e+r.textContent.length,e<=n&&t>=n)return{node:r,offset:n-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=es(r)}}function rs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?rs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ts(){for(var e=window,n=Dt();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Dt(e.document)}return n}function Pl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Vd(e){var n=ts(),r=e.focusedElem,t=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&rs(r.ownerDocument.documentElement,r)){if(t!==null&&Pl(r)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,l=Math.min(t.start,o);t=t.end===void 0?l:Math.min(t.end,o),!e.extend&&l>t&&(o=t,t=l,l=o),o=ns(r,l);var i=ns(r,t);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),l>t?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wd=P&&"documentMode"in document&&11>=document.documentMode,Er=null,_l=null,ct=null,Tl=!1;function os(e,n,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Tl||Er==null||Er!==Dt(t)||(t=Er,"selectionStart"in t&&Pl(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ct&&ut(ct,t)||(ct=t,t=to(_l,"onSelect"),0<t.length&&(n=new wl("onSelect","select",null,n,r),e.push({event:n,listeners:t}),n.target=Er)))}function eo(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var jr={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},Rl={},ls={};P&&(ls=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function no(e){if(Rl[e])return Rl[e];if(!jr[e])return e;var n=jr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in ls)return Rl[e]=n[r];return e}var is=no("animationend"),as=no("animationiteration"),ss=no("animationstart"),us=no("transitionend"),cs=new Map,ds="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,n){cs.set(e,n),w(n,[e])}for(var Ll=0;Ll<ds.length;Ll++){var Ol=ds[Ll],Hd=Ol.toLowerCase(),$d=Ol[0].toUpperCase()+Ol.slice(1);bn(Hd,"on"+$d)}bn(is,"onAnimationEnd"),bn(as,"onAnimationIteration"),bn(ss,"onAnimationStart"),bn("dblclick","onDoubleClick"),bn("focusin","onFocus"),bn("focusout","onBlur"),bn(us,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(dt));function fs(e,n,r){var t=e.type||"unknown-event";e.currentTarget=r,Hc(t,n,void 0,e),e.currentTarget=null}function ps(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var t=e[r],o=t.event;t=t.listeners;e:{var l=void 0;if(n)for(var i=t.length-1;0<=i;i--){var c=t[i],p=c.instance,x=c.currentTarget;if(c=c.listener,p!==l&&o.isPropagationStopped())break e;fs(o,c,x),l=p}else for(i=0;i<t.length;i++){if(c=t[i],p=c.instance,x=c.currentTarget,c=c.listener,p!==l&&o.isPropagationStopped())break e;fs(o,c,x),l=p}}}if(Ut)throw e=cl,Ut=!1,cl=null,e}function ce(e,n){var r=n[Al];r===void 0&&(r=n[Al]=new Set);var t=e+"__bubble";r.has(t)||(ms(n,e,2,!1),r.add(t))}function Ml(e,n,r){var t=0;n&&(t|=4),ms(r,e,t,n)}var ro="_reactListening"+Math.random().toString(36).slice(2);function ft(e){if(!e[ro]){e[ro]=!0,f.forEach(function(r){r!=="selectionchange"&&(Qd.has(r)||Ml(r,!1,e),Ml(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ro]||(n[ro]=!0,Ml("selectionchange",!1,n))}}function ms(e,n,r,t){switch(ba(n)){case 1:var o=id;break;case 4:o=ad;break;default:o=vl}r=o.bind(null,n,r,e),o=void 0,!ul||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),t?o!==void 0?e.addEventListener(n,r,{capture:!0,passive:o}):e.addEventListener(n,r,!0):o!==void 0?e.addEventListener(n,r,{passive:o}):e.addEventListener(n,r,!1)}function Il(e,n,r,t,o){var l=t;if((n&1)===0&&(n&2)===0&&t!==null)e:for(;;){if(t===null)return;var i=t.tag;if(i===3||i===4){var c=t.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(i===4)for(i=t.return;i!==null;){var p=i.tag;if((p===3||p===4)&&(p=i.stateNode.containerInfo,p===o||p.nodeType===8&&p.parentNode===o))return;i=i.return}for(;c!==null;){if(i=rr(c),i===null)return;if(p=i.tag,p===5||p===6){t=l=i;continue e}c=c.parentNode}}t=t.return}xa(function(){var x=l,C=il(r),N=[];e:{var E=cs.get(e);if(E!==void 0){var M=wl,F=e;switch(e){case"keypress":if(Xt(r)===0)break e;case"keydown":case"keyup":M=Sd;break;case"focusin":F="focus",M=El;break;case"focusout":F="blur",M=El;break;case"beforeblur":case"afterblur":M=El;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Cd;break;case is:case as:case ss:M=pd;break;case us:M=zd;break;case"scroll":M=sd;break;case"wheel":M=_d;break;case"copy":case"cut":case"paste":M=hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Va}var U=(n&4)!==0,xe=!U&&e==="scroll",g=U?E!==null?E+"Capture":null:E;U=[];for(var m=x,v;m!==null;){v=m;var z=v.stateNode;if(v.tag===5&&z!==null&&(v=z,g!==null&&(z=Yr(m,g),z!=null&&U.push(pt(m,z,v)))),xe)break;m=m.return}0<U.length&&(E=new M(E,F,null,r,C),N.push({event:E,listeners:U}))}}if((n&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",E&&r!==ll&&(F=r.relatedTarget||r.fromElement)&&(rr(F)||F[En]))break e;if((M||E)&&(E=C.window===C?C:(E=C.ownerDocument)?E.defaultView||E.parentWindow:window,M?(F=r.relatedTarget||r.toElement,M=x,F=F?rr(F):null,F!==null&&(xe=nr(F),F!==xe||F.tag!==5&&F.tag!==6)&&(F=null)):(M=null,F=x),M!==F)){if(U=Ba,z="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(U=Va,z="onPointerLeave",g="onPointerEnter",m="pointer"),xe=M==null?E:zr(M),v=F==null?E:zr(F),E=new U(z,m+"leave",M,r,C),E.target=xe,E.relatedTarget=v,z=null,rr(C)===x&&(U=new U(g,m+"enter",F,r,C),U.target=v,U.relatedTarget=xe,z=U),xe=z,M&&F)n:{for(U=M,g=F,m=0,v=U;v;v=Cr(v))m++;for(v=0,z=g;z;z=Cr(z))v++;for(;0<m-v;)U=Cr(U),m--;for(;0<v-m;)g=Cr(g),v--;for(;m--;){if(U===g||g!==null&&U===g.alternate)break n;U=Cr(U),g=Cr(g)}U=null}else U=null;M!==null&&hs(N,E,M,U,!1),F!==null&&xe!==null&&hs(N,xe,F,U,!0)}}e:{if(E=x?zr(x):window,M=E.nodeName&&E.nodeName.toLowerCase(),M==="select"||M==="input"&&E.type==="file")var B=Dd;else if(Ya(E))if(Xa)B=Bd;else{B=Fd;var V=bd}else(M=E.nodeName)&&M.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(B=Ud);if(B&&(B=B(e,x))){Ga(N,B,r,C);break e}V&&V(e,E,x),e==="focusout"&&(V=E._wrapperState)&&V.controlled&&E.type==="number"&&el(E,"number",E.value)}switch(V=x?zr(x):window,e){case"focusin":(Ya(V)||V.contentEditable==="true")&&(Er=V,_l=x,ct=null);break;case"focusout":ct=_l=Er=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,os(N,r,C);break;case"selectionchange":if(Wd)break;case"keydown":case"keyup":os(N,r,C)}var W;if(Cl)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Sr?Qa(e,r)&&(Q="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Q="onCompositionStart");Q&&(Wa&&r.locale!=="ko"&&(Sr||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Sr&&(W=Fa()):(Dn=C,xl="value"in Dn?Dn.value:Dn.textContent,Sr=!0)),V=to(x,Q),0<V.length&&(Q=new Aa(Q,e,null,r,C),N.push({event:Q,listeners:V}),W?Q.data=W:(W=Ka(r),W!==null&&(Q.data=W)))),(W=Rd?Ld(e,r):Od(e,r))&&(x=to(x,"onBeforeInput"),0<x.length&&(C=new Aa("onBeforeInput","beforeinput",null,r,C),N.push({event:C,listeners:x}),C.data=W))}ps(N,n)})}function pt(e,n,r){return{instance:e,listener:n,currentTarget:r}}function to(e,n){for(var r=n+"Capture",t=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Yr(e,r),l!=null&&t.unshift(pt(e,l,o)),l=Yr(e,n),l!=null&&t.push(pt(e,l,o))),e=e.return}return t}function Cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hs(e,n,r,t,o){for(var l=n._reactName,i=[];r!==null&&r!==t;){var c=r,p=c.alternate,x=c.stateNode;if(p!==null&&p===t)break;c.tag===5&&x!==null&&(c=x,o?(p=Yr(r,l),p!=null&&i.unshift(pt(r,p,c))):o||(p=Yr(r,l),p!=null&&i.push(pt(r,p,c)))),r=r.return}i.length!==0&&e.push({event:n,listeners:i})}var Kd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function gs(e){return(typeof e=="string"?e:""+e).replace(Kd,`
`).replace(Yd,"")}function oo(e,n,r){if(n=gs(n),gs(e)!==n&&r)throw Error(s(425))}function lo(){}var Dl=null,bl=null;function Fl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ul=typeof setTimeout=="function"?setTimeout:void 0,Gd=typeof clearTimeout=="function"?clearTimeout:void 0,vs=typeof Promise=="function"?Promise:void 0,Xd=typeof queueMicrotask=="function"?queueMicrotask:typeof vs<"u"?function(e){return vs.resolve(null).then(e).catch(Jd)}:Ul;function Jd(e){setTimeout(function(){throw e})}function Bl(e,n){var r=n,t=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0){e.removeChild(o),tt(n);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=o}while(r);tt(n)}function Fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ys(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var Nr=Math.random().toString(36).slice(2),yn="__reactFiber$"+Nr,mt="__reactProps$"+Nr,En="__reactContainer$"+Nr,Al="__reactEvents$"+Nr,Zd="__reactListeners$"+Nr,qd="__reactHandles$"+Nr;function rr(e){var n=e[yn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[En]||r[yn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=ys(e);e!==null;){if(r=e[yn])return r;e=ys(e)}return n}e=r,r=e.parentNode}return null}function ht(e){return e=e[yn]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function io(e){return e[mt]||null}var Vl=[],Pr=-1;function Un(e){return{current:e}}function de(e){0>Pr||(e.current=Vl[Pr],Vl[Pr]=null,Pr--)}function ue(e,n){Pr++,Vl[Pr]=e.current,e.current=n}var Bn={},Te=Un(Bn),Ue=Un(!1),tr=Bn;function _r(e,n){var r=e.type.contextTypes;if(!r)return Bn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in r)o[l]=n[l];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Be(e){return e=e.childContextTypes,e!=null}function ao(){de(Ue),de(Te)}function xs(e,n,r){if(Te.current!==Bn)throw Error(s(168));ue(Te,n),ue(Ue,r)}function ws(e,n,r){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var o in t)if(!(o in n))throw Error(s(108,se(e)||"Unknown",o));return b({},r,t)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,tr=Te.current,ue(Te,e),ue(Ue,Ue.current),!0}function ks(e,n,r){var t=e.stateNode;if(!t)throw Error(s(169));r?(e=ws(e,n,tr),t.__reactInternalMemoizedMergedChildContext=e,de(Ue),de(Te),ue(Te,e)):de(Ue),ue(Ue,r)}var jn=null,uo=!1,Wl=!1;function Ss(e){jn===null?jn=[e]:jn.push(e)}function ef(e){uo=!0,Ss(e)}function An(){if(!Wl&&jn!==null){Wl=!0;var e=0,n=oe;try{var r=jn;for(oe=1;e<r.length;e++){var t=r[e];do t=t(!0);while(t!==null)}jn=null,uo=!1}catch(o){throw jn!==null&&(jn=jn.slice(e+1)),ja(dl,An),o}finally{oe=n,Wl=!1}}return null}var Tr=[],Rr=0,co=null,fo=0,qe=[],en=0,or=null,Cn=1,Nn="";function lr(e,n){Tr[Rr++]=fo,Tr[Rr++]=co,co=e,fo=n}function Es(e,n,r){qe[en++]=Cn,qe[en++]=Nn,qe[en++]=or,or=e;var t=Cn;e=Nn;var o=32-an(t)-1;t&=~(1<<o),r+=1;var l=32-an(n)+o;if(30<l){var i=o-o%5;l=(t&(1<<i)-1).toString(32),t>>=i,o-=i,Cn=1<<32-an(n)+o|r<<o|t,Nn=l+e}else Cn=1<<l|r<<o|t,Nn=e}function Hl(e){e.return!==null&&(lr(e,1),Es(e,1,0))}function $l(e){for(;e===co;)co=Tr[--Rr],Tr[Rr]=null,fo=Tr[--Rr],Tr[Rr]=null;for(;e===or;)or=qe[--en],qe[en]=null,Nn=qe[--en],qe[en]=null,Cn=qe[--en],qe[en]=null}var Ye=null,Ge=null,pe=!1,un=null;function js(e,n){var r=on(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function Cs(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ye=e,Ge=Fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ye=e,Ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=or!==null?{id:Cn,overflow:Nn}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=on(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,Ye=e,Ge=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(pe){var n=Ge;if(n){var r=n;if(!Cs(e,n)){if(Ql(e))throw Error(s(418));n=Fn(r.nextSibling);var t=Ye;n&&Cs(e,n)?js(t,r):(e.flags=e.flags&-4097|2,pe=!1,Ye=e)}}else{if(Ql(e))throw Error(s(418));e.flags=e.flags&-4097|2,pe=!1,Ye=e}}}function Ns(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function po(e){if(e!==Ye)return!1;if(!pe)return Ns(e),pe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Fl(e.type,e.memoizedProps)),n&&(n=Ge)){if(Ql(e))throw zs(),Error(s(418));for(;n;)js(e,n),n=Fn(n.nextSibling)}if(Ns(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){Ge=Fn(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}Ge=null}}else Ge=Ye?Fn(e.stateNode.nextSibling):null;return!0}function zs(){for(var e=Ge;e;)e=Fn(e.nextSibling)}function Lr(){Ge=Ye=null,pe=!1}function Yl(e){un===null?un=[e]:un.push(e)}var nf=ae.ReactCurrentBatchConfig;function gt(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var t=r.stateNode}if(!t)throw Error(s(147,e));var o=t,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var c=o.refs;i===null?delete c[l]:c[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function mo(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ps(e){var n=e._init;return n(e._payload)}function _s(e){function n(g,m){if(e){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function r(g,m){if(!e)return null;for(;m!==null;)n(g,m),m=m.sibling;return null}function t(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=Gn(g,m),g.index=0,g.sibling=null,g}function l(g,m,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function c(g,m,v,z){return m===null||m.tag!==6?(m=Ui(v,g.mode,z),m.return=g,m):(m=o(m,v),m.return=g,m)}function p(g,m,v,z){var B=v.type;return B===be?C(g,m,v.props.children,z,v.key):m!==null&&(m.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Fe&&Ps(B)===m.type)?(z=o(m,v.props),z.ref=gt(g,m,v),z.return=g,z):(z=Fo(v.type,v.key,v.props,null,g.mode,z),z.ref=gt(g,m,v),z.return=g,z)}function x(g,m,v,z){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Bi(v,g.mode,z),m.return=g,m):(m=o(m,v.children||[]),m.return=g,m)}function C(g,m,v,z,B){return m===null||m.tag!==7?(m=pr(v,g.mode,z,B),m.return=g,m):(m=o(m,v),m.return=g,m)}function N(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ui(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case je:return v=Fo(m.type,m.key,m.props,null,g.mode,v),v.ref=gt(g,null,m),v.return=g,v;case Me:return m=Bi(m,g.mode,v),m.return=g,m;case Fe:var z=m._init;return N(g,z(m._payload),v)}if($r(m)||$(m))return m=pr(m,g.mode,v,null),m.return=g,m;mo(g,m)}return null}function E(g,m,v,z){var B=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return B!==null?null:c(g,m,""+v,z);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case je:return v.key===B?p(g,m,v,z):null;case Me:return v.key===B?x(g,m,v,z):null;case Fe:return B=v._init,E(g,m,B(v._payload),z)}if($r(v)||$(v))return B!==null?null:C(g,m,v,z,null);mo(g,v)}return null}function M(g,m,v,z,B){if(typeof z=="string"&&z!==""||typeof z=="number")return g=g.get(v)||null,c(m,g,""+z,B);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case je:return g=g.get(z.key===null?v:z.key)||null,p(m,g,z,B);case Me:return g=g.get(z.key===null?v:z.key)||null,x(m,g,z,B);case Fe:var V=z._init;return M(g,m,v,V(z._payload),B)}if($r(z)||$(z))return g=g.get(v)||null,C(m,g,z,B,null);mo(m,z)}return null}function F(g,m,v,z){for(var B=null,V=null,W=m,Q=m=0,ze=null;W!==null&&Q<v.length;Q++){W.index>Q?(ze=W,W=null):ze=W.sibling;var ee=E(g,W,v[Q],z);if(ee===null){W===null&&(W=ze);break}e&&W&&ee.alternate===null&&n(g,W),m=l(ee,m,Q),V===null?B=ee:V.sibling=ee,V=ee,W=ze}if(Q===v.length)return r(g,W),pe&&lr(g,Q),B;if(W===null){for(;Q<v.length;Q++)W=N(g,v[Q],z),W!==null&&(m=l(W,m,Q),V===null?B=W:V.sibling=W,V=W);return pe&&lr(g,Q),B}for(W=t(g,W);Q<v.length;Q++)ze=M(W,g,Q,v[Q],z),ze!==null&&(e&&ze.alternate!==null&&W.delete(ze.key===null?Q:ze.key),m=l(ze,m,Q),V===null?B=ze:V.sibling=ze,V=ze);return e&&W.forEach(function(Xn){return n(g,Xn)}),pe&&lr(g,Q),B}function U(g,m,v,z){var B=$(v);if(typeof B!="function")throw Error(s(150));if(v=B.call(v),v==null)throw Error(s(151));for(var V=B=null,W=m,Q=m=0,ze=null,ee=v.next();W!==null&&!ee.done;Q++,ee=v.next()){W.index>Q?(ze=W,W=null):ze=W.sibling;var Xn=E(g,W,ee.value,z);if(Xn===null){W===null&&(W=ze);break}e&&W&&Xn.alternate===null&&n(g,W),m=l(Xn,m,Q),V===null?B=Xn:V.sibling=Xn,V=Xn,W=ze}if(ee.done)return r(g,W),pe&&lr(g,Q),B;if(W===null){for(;!ee.done;Q++,ee=v.next())ee=N(g,ee.value,z),ee!==null&&(m=l(ee,m,Q),V===null?B=ee:V.sibling=ee,V=ee);return pe&&lr(g,Q),B}for(W=t(g,W);!ee.done;Q++,ee=v.next())ee=M(W,g,Q,ee.value,z),ee!==null&&(e&&ee.alternate!==null&&W.delete(ee.key===null?Q:ee.key),m=l(ee,m,Q),V===null?B=ee:V.sibling=ee,V=ee);return e&&W.forEach(function(If){return n(g,If)}),pe&&lr(g,Q),B}function xe(g,m,v,z){if(typeof v=="object"&&v!==null&&v.type===be&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case je:e:{for(var B=v.key,V=m;V!==null;){if(V.key===B){if(B=v.type,B===be){if(V.tag===7){r(g,V.sibling),m=o(V,v.props.children),m.return=g,g=m;break e}}else if(V.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Fe&&Ps(B)===V.type){r(g,V.sibling),m=o(V,v.props),m.ref=gt(g,V,v),m.return=g,g=m;break e}r(g,V);break}else n(g,V);V=V.sibling}v.type===be?(m=pr(v.props.children,g.mode,z,v.key),m.return=g,g=m):(z=Fo(v.type,v.key,v.props,null,g.mode,z),z.ref=gt(g,m,v),z.return=g,g=z)}return i(g);case Me:e:{for(V=v.key;m!==null;){if(m.key===V)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){r(g,m.sibling),m=o(m,v.children||[]),m.return=g,g=m;break e}else{r(g,m);break}else n(g,m);m=m.sibling}m=Bi(v,g.mode,z),m.return=g,g=m}return i(g);case Fe:return V=v._init,xe(g,m,V(v._payload),z)}if($r(v))return F(g,m,v,z);if($(v))return U(g,m,v,z);mo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(r(g,m.sibling),m=o(m,v),m.return=g,g=m):(r(g,m),m=Ui(v,g.mode,z),m.return=g,g=m),i(g)):r(g,m)}return xe}var Or=_s(!0),Ts=_s(!1),ho=Un(null),go=null,Mr=null,Gl=null;function Xl(){Gl=Mr=go=null}function Jl(e){var n=ho.current;de(ho),e._currentValue=n}function Zl(e,n,r){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===r)break;e=e.return}}function Ir(e,n){go=e,Gl=Mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ae=!0),e.firstContext=null)}function nn(e){var n=e._currentValue;if(Gl!==e)if(e={context:e,memoizedValue:n,next:null},Mr===null){if(go===null)throw Error(s(308));Mr=e,go.dependencies={lanes:0,firstContext:e}}else Mr=Mr.next=e;return n}var ir=null;function ql(e){ir===null?ir=[e]:ir.push(e)}function Rs(e,n,r,t){var o=n.interleaved;return o===null?(r.next=r,ql(n)):(r.next=o.next,o.next=r),n.interleaved=r,zn(e,t)}function zn(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Vn=!1;function ei(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ls(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Wn(e,n,r){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(J&2)!==0){var o=t.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n,zn(e,r)}return o=t.interleaved,o===null?(n.next=n,ql(t)):(n.next=o.next,o.next=n),t.interleaved=n,zn(e,r)}function vo(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,ml(e,r)}}function Os(e,n){var r=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var o=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?o=l=i:l=l.next=i,r=r.next}while(r!==null);l===null?o=l=n:l=l.next=n}else o=l=n;r={baseState:t.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:t.shared,effects:t.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function yo(e,n,r,t){var o=e.updateQueue;Vn=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var p=c,x=p.next;p.next=null,i===null?l=x:i.next=x,i=p;var C=e.alternate;C!==null&&(C=C.updateQueue,c=C.lastBaseUpdate,c!==i&&(c===null?C.firstBaseUpdate=x:c.next=x,C.lastBaseUpdate=p))}if(l!==null){var N=o.baseState;i=0,C=x=p=null,c=l;do{var E=c.lane,M=c.eventTime;if((t&E)===E){C!==null&&(C=C.next={eventTime:M,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var F=e,U=c;switch(E=n,M=r,U.tag){case 1:if(F=U.payload,typeof F=="function"){N=F.call(M,N,E);break e}N=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=U.payload,E=typeof F=="function"?F.call(M,N,E):F,E==null)break e;N=b({},N,E);break e;case 2:Vn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,E=o.effects,E===null?o.effects=[c]:E.push(c))}else M={eventTime:M,lane:E,tag:c.tag,payload:c.payload,callback:c.callback,next:null},C===null?(x=C=M,p=N):C=C.next=M,i|=E;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;E=c,c=E.next,E.next=null,o.lastBaseUpdate=E,o.shared.pending=null}}while(!0);if(C===null&&(p=N),o.baseState=p,o.firstBaseUpdate=x,o.lastBaseUpdate=C,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else l===null&&(o.shared.lanes=0);ur|=i,e.lanes=i,e.memoizedState=N}}function Ms(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],o=t.callback;if(o!==null){if(t.callback=null,t=r,typeof o!="function")throw Error(s(191,o));o.call(t)}}}var vt={},xn=Un(vt),yt=Un(vt),xt=Un(vt);function ar(e){if(e===vt)throw Error(s(174));return e}function ni(e,n){switch(ue(xt,n),ue(yt,e),ue(xn,vt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:rl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=rl(n,e)}de(xn),ue(xn,n)}function Dr(){de(xn),de(yt),de(xt)}function Is(e){ar(xt.current);var n=ar(xn.current),r=rl(n,e.type);n!==r&&(ue(yt,e),ue(xn,r))}function ri(e){yt.current===e&&(de(xn),de(yt))}var me=Un(0);function xo(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ti=[];function oi(){for(var e=0;e<ti.length;e++)ti[e]._workInProgressVersionPrimary=null;ti.length=0}var wo=ae.ReactCurrentDispatcher,li=ae.ReactCurrentBatchConfig,sr=0,he=null,Se=null,Ce=null,ko=!1,wt=!1,kt=0,rf=0;function Re(){throw Error(s(321))}function ii(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!sn(e[r],n[r]))return!1;return!0}function ai(e,n,r,t,o,l){if(sr=l,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,wo.current=e===null||e.memoizedState===null?af:sf,e=r(t,o),wt){l=0;do{if(wt=!1,kt=0,25<=l)throw Error(s(301));l+=1,Ce=Se=null,n.updateQueue=null,wo.current=uf,e=r(t,o)}while(wt)}if(wo.current=jo,n=Se!==null&&Se.next!==null,sr=0,Ce=Se=he=null,ko=!1,n)throw Error(s(300));return e}function si(){var e=kt!==0;return kt=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?he.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function rn(){if(Se===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var n=Ce===null?he.memoizedState:Ce.next;if(n!==null)Ce=n,Se=e;else{if(e===null)throw Error(s(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ce===null?he.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function St(e,n){return typeof n=="function"?n(e):n}function ui(e){var n=rn(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var t=Se,o=t.baseQueue,l=r.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}t.baseQueue=o=l,r.pending=null}if(o!==null){l=o.next,t=t.baseState;var c=i=null,p=null,x=l;do{var C=x.lane;if((sr&C)===C)p!==null&&(p=p.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),t=x.hasEagerState?x.eagerState:e(t,x.action);else{var N={lane:C,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};p===null?(c=p=N,i=t):p=p.next=N,he.lanes|=C,ur|=C}x=x.next}while(x!==null&&x!==l);p===null?i=t:p.next=c,sn(t,n.memoizedState)||(Ae=!0),n.memoizedState=t,n.baseState=i,n.baseQueue=p,r.lastRenderedState=t}if(e=r.interleaved,e!==null){o=e;do l=o.lane,he.lanes|=l,ur|=l,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function ci(e){var n=rn(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var t=r.dispatch,o=r.pending,l=n.memoizedState;if(o!==null){r.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);sn(l,n.memoizedState)||(Ae=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),r.lastRenderedState=l}return[l,t]}function Ds(){}function bs(e,n){var r=he,t=rn(),o=n(),l=!sn(t.memoizedState,o);if(l&&(t.memoizedState=o,Ae=!0),t=t.queue,di(Bs.bind(null,r,t,e),[e]),t.getSnapshot!==n||l||Ce!==null&&Ce.memoizedState.tag&1){if(r.flags|=2048,Et(9,Us.bind(null,r,t,o,n),void 0,null),Ne===null)throw Error(s(349));(sr&30)!==0||Fs(r,n,o)}return o}function Fs(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=he.updateQueue,n===null?(n={lastEffect:null,stores:null},he.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Us(e,n,r,t){n.value=r,n.getSnapshot=t,As(n)&&Vs(e)}function Bs(e,n,r){return r(function(){As(n)&&Vs(e)})}function As(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!sn(e,r)}catch{return!0}}function Vs(e){var n=zn(e,1);n!==null&&pn(n,e,1,-1)}function Ws(e){var n=wn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:St,lastRenderedState:e},n.queue=e,e=e.dispatch=lf.bind(null,he,e),[n.memoizedState,e]}function Et(e,n,r,t){return e={tag:e,create:n,destroy:r,deps:t,next:null},n=he.updateQueue,n===null?(n={lastEffect:null,stores:null},he.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(t=r.next,r.next=e,e.next=t,n.lastEffect=e)),e}function Hs(){return rn().memoizedState}function So(e,n,r,t){var o=wn();he.flags|=e,o.memoizedState=Et(1|n,r,void 0,t===void 0?null:t)}function Eo(e,n,r,t){var o=rn();t=t===void 0?null:t;var l=void 0;if(Se!==null){var i=Se.memoizedState;if(l=i.destroy,t!==null&&ii(t,i.deps)){o.memoizedState=Et(n,r,l,t);return}}he.flags|=e,o.memoizedState=Et(1|n,r,l,t)}function $s(e,n){return So(8390656,8,e,n)}function di(e,n){return Eo(2048,8,e,n)}function Qs(e,n){return Eo(4,2,e,n)}function Ks(e,n){return Eo(4,4,e,n)}function Ys(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gs(e,n,r){return r=r!=null?r.concat([e]):null,Eo(4,4,Ys.bind(null,n,e),r)}function fi(){}function Xs(e,n){var r=rn();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&ii(n,t[1])?t[0]:(r.memoizedState=[e,n],e)}function Js(e,n){var r=rn();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&ii(n,t[1])?t[0]:(e=e(),r.memoizedState=[e,n],e)}function Zs(e,n,r){return(sr&21)===0?(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=r):(sn(r,n)||(r=Pa(),he.lanes|=r,ur|=r,e.baseState=!0),n)}function tf(e,n){var r=oe;oe=r!==0&&4>r?r:4,e(!0);var t=li.transition;li.transition={};try{e(!1),n()}finally{oe=r,li.transition=t}}function qs(){return rn().memoizedState}function of(e,n,r){var t=Kn(e);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},eu(e))nu(n,r);else if(r=Rs(e,n,r,t),r!==null){var o=De();pn(r,e,t,o),ru(r,n,t)}}function lf(e,n,r){var t=Kn(e),o={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(eu(e))nu(n,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,c=l(i,r);if(o.hasEagerState=!0,o.eagerState=c,sn(c,i)){var p=n.interleaved;p===null?(o.next=o,ql(n)):(o.next=p.next,p.next=o),n.interleaved=o;return}}catch{}finally{}r=Rs(e,n,o,t),r!==null&&(o=De(),pn(r,e,t,o),ru(r,n,t))}}function eu(e){var n=e.alternate;return e===he||n!==null&&n===he}function nu(e,n){wt=ko=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function ru(e,n,r){if((r&4194240)!==0){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,ml(e,r)}}var jo={readContext:nn,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},af={readContext:nn,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:$s,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,So(4194308,4,Ys.bind(null,n,e),r)},useLayoutEffect:function(e,n){return So(4194308,4,e,n)},useInsertionEffect:function(e,n){return So(4,2,e,n)},useMemo:function(e,n){var r=wn();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var t=wn();return n=r!==void 0?r(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=of.bind(null,he,e),[t.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:Ws,useDebugValue:fi,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=Ws(!1),n=e[0];return e=tf.bind(null,e[1]),wn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var t=he,o=wn();if(pe){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),Ne===null)throw Error(s(349));(sr&30)!==0||Fs(t,n,r)}o.memoizedState=r;var l={value:r,getSnapshot:n};return o.queue=l,$s(Bs.bind(null,t,l,e),[e]),t.flags|=2048,Et(9,Us.bind(null,t,l,r,n),void 0,null),r},useId:function(){var e=wn(),n=Ne.identifierPrefix;if(pe){var r=Nn,t=Cn;r=(t&~(1<<32-an(t)-1)).toString(32)+r,n=":"+n+"R"+r,r=kt++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=rf++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},sf={readContext:nn,useCallback:Xs,useContext:nn,useEffect:di,useImperativeHandle:Gs,useInsertionEffect:Qs,useLayoutEffect:Ks,useMemo:Js,useReducer:ui,useRef:Hs,useState:function(){return ui(St)},useDebugValue:fi,useDeferredValue:function(e){var n=rn();return Zs(n,Se.memoizedState,e)},useTransition:function(){var e=ui(St)[0],n=rn().memoizedState;return[e,n]},useMutableSource:Ds,useSyncExternalStore:bs,useId:qs,unstable_isNewReconciler:!1},uf={readContext:nn,useCallback:Xs,useContext:nn,useEffect:di,useImperativeHandle:Gs,useInsertionEffect:Qs,useLayoutEffect:Ks,useMemo:Js,useReducer:ci,useRef:Hs,useState:function(){return ci(St)},useDebugValue:fi,useDeferredValue:function(e){var n=rn();return Se===null?n.memoizedState=e:Zs(n,Se.memoizedState,e)},useTransition:function(){var e=ci(St)[0],n=rn().memoizedState;return[e,n]},useMutableSource:Ds,useSyncExternalStore:bs,useId:qs,unstable_isNewReconciler:!1};function cn(e,n){if(e&&e.defaultProps){n=b({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function pi(e,n,r,t){n=e.memoizedState,r=r(t,n),r=r==null?n:b({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Co={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var t=De(),o=Kn(e),l=Pn(t,o);l.payload=n,r!=null&&(l.callback=r),n=Wn(e,l,o),n!==null&&(pn(n,e,o,t),vo(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var t=De(),o=Kn(e),l=Pn(t,o);l.tag=1,l.payload=n,r!=null&&(l.callback=r),n=Wn(e,l,o),n!==null&&(pn(n,e,o,t),vo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=De(),t=Kn(e),o=Pn(r,t);o.tag=2,n!=null&&(o.callback=n),n=Wn(e,o,t),n!==null&&(pn(n,e,t,r),vo(n,e,t))}};function tu(e,n,r,t,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,l,i):n.prototype&&n.prototype.isPureReactComponent?!ut(r,t)||!ut(o,l):!0}function ou(e,n,r){var t=!1,o=Bn,l=n.contextType;return typeof l=="object"&&l!==null?l=nn(l):(o=Be(n)?tr:Te.current,t=n.contextTypes,l=(t=t!=null)?_r(e,o):Bn),n=new n(r,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Co,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),n}function lu(e,n,r,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,t),n.state!==e&&Co.enqueueReplaceState(n,n.state,null)}function mi(e,n,r,t){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},ei(e);var l=n.contextType;typeof l=="object"&&l!==null?o.context=nn(l):(l=Be(n)?tr:Te.current,o.context=_r(e,l)),o.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(pi(e,n,l,r),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Co.enqueueReplaceState(o,o.state,null),yo(e,r,o,t),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function br(e,n){try{var r="",t=n;do r+=Z(t),t=t.return;while(t);var o=r}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:o,digest:null}}function hi(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function gi(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function iu(e,n,r){r=Pn(-1,r),r.tag=3,r.payload={element:null};var t=n.value;return r.callback=function(){Lo||(Lo=!0,Ri=t),gi(e,n)},r}function au(e,n,r){r=Pn(-1,r),r.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var o=n.value;r.payload=function(){return t(o)},r.callback=function(){gi(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){gi(e,n),typeof t!="function"&&($n===null?$n=new Set([this]):$n.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),r}function su(e,n,r){var t=e.pingCache;if(t===null){t=e.pingCache=new cf;var o=new Set;t.set(n,o)}else o=t.get(n),o===void 0&&(o=new Set,t.set(n,o));o.has(r)||(o.add(r),e=jf.bind(null,e,n,r),n.then(e,e))}function uu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cu(e,n,r,t,o){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=Pn(-1,1),n.tag=2,Wn(r,n,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var df=ae.ReactCurrentOwner,Ae=!1;function Ie(e,n,r,t){n.child=e===null?Ts(n,null,r,t):Or(n,e.child,r,t)}function du(e,n,r,t,o){r=r.render;var l=n.ref;return Ir(n,o),t=ai(e,n,r,t,l,o),r=si(),e!==null&&!Ae?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,_n(e,n,o)):(pe&&r&&Hl(n),n.flags|=1,Ie(e,n,t,o),n.child)}function fu(e,n,r,t,o){if(e===null){var l=r.type;return typeof l=="function"&&!Fi(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=l,pu(e,n,l,t,o)):(e=Fo(r.type,null,t,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(r=r.compare,r=r!==null?r:ut,r(i,t)&&e.ref===n.ref)return _n(e,n,o)}return n.flags|=1,e=Gn(l,t),e.ref=n.ref,e.return=n,n.child=e}function pu(e,n,r,t,o){if(e!==null){var l=e.memoizedProps;if(ut(l,t)&&e.ref===n.ref)if(Ae=!1,n.pendingProps=t=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ae=!0);else return n.lanes=e.lanes,_n(e,n,o)}return vi(e,n,r,t,o)}function mu(e,n,r){var t=n.pendingProps,o=t.children,l=e!==null?e.memoizedState:null;if(t.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Ur,Xe),Xe|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ue(Ur,Xe),Xe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=l!==null?l.baseLanes:r,ue(Ur,Xe),Xe|=t}else l!==null?(t=l.baseLanes|r,n.memoizedState=null):t=r,ue(Ur,Xe),Xe|=t;return Ie(e,n,o,r),n.child}function hu(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function vi(e,n,r,t,o){var l=Be(r)?tr:Te.current;return l=_r(n,l),Ir(n,o),r=ai(e,n,r,t,l,o),t=si(),e!==null&&!Ae?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,_n(e,n,o)):(pe&&t&&Hl(n),n.flags|=1,Ie(e,n,r,o),n.child)}function gu(e,n,r,t,o){if(Be(r)){var l=!0;so(n)}else l=!1;if(Ir(n,o),n.stateNode===null)zo(e,n),ou(n,r,t),mi(n,r,t,o),t=!0;else if(e===null){var i=n.stateNode,c=n.memoizedProps;i.props=c;var p=i.context,x=r.contextType;typeof x=="object"&&x!==null?x=nn(x):(x=Be(r)?tr:Te.current,x=_r(n,x));var C=r.getDerivedStateFromProps,N=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function";N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==t||p!==x)&&lu(n,i,t,x),Vn=!1;var E=n.memoizedState;i.state=E,yo(n,t,i,o),p=n.memoizedState,c!==t||E!==p||Ue.current||Vn?(typeof C=="function"&&(pi(n,r,C,t),p=n.memoizedState),(c=Vn||tu(n,r,c,t,E,p,x))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=p),i.props=t,i.state=p,i.context=x,t=c):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{i=n.stateNode,Ls(e,n),c=n.memoizedProps,x=n.type===n.elementType?c:cn(n.type,c),i.props=x,N=n.pendingProps,E=i.context,p=r.contextType,typeof p=="object"&&p!==null?p=nn(p):(p=Be(r)?tr:Te.current,p=_r(n,p));var M=r.getDerivedStateFromProps;(C=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==N||E!==p)&&lu(n,i,t,p),Vn=!1,E=n.memoizedState,i.state=E,yo(n,t,i,o);var F=n.memoizedState;c!==N||E!==F||Ue.current||Vn?(typeof M=="function"&&(pi(n,r,M,t),F=n.memoizedState),(x=Vn||tu(n,r,x,t,E,F,p)||!1)?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(t,F,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(t,F,p)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=F),i.props=t,i.state=F,i.context=p,t=x):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(n.flags|=1024),t=!1)}return yi(e,n,r,t,l,o)}function yi(e,n,r,t,o,l){hu(e,n);var i=(n.flags&128)!==0;if(!t&&!i)return o&&ks(n,r,!1),_n(e,n,l);t=n.stateNode,df.current=n;var c=i&&typeof r.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&i?(n.child=Or(n,e.child,null,l),n.child=Or(n,null,c,l)):Ie(e,n,c,l),n.memoizedState=t.state,o&&ks(n,r,!0),n.child}function vu(e){var n=e.stateNode;n.pendingContext?xs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&xs(e,n.context,!1),ni(e,n.containerInfo)}function yu(e,n,r,t,o){return Lr(),Yl(o),n.flags|=256,Ie(e,n,r,t),n.child}var xi={dehydrated:null,treeContext:null,retryLane:0};function wi(e){return{baseLanes:e,cachePool:null,transitions:null}}function xu(e,n,r){var t=n.pendingProps,o=me.current,l=!1,i=(n.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ue(me,o&1),e===null)return Kl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(i=t.children,e=t.fallback,l?(t=n.mode,l=n.child,i={mode:"hidden",children:i},(t&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Uo(i,t,0,null),e=pr(e,t,r,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=wi(r),n.memoizedState=xi,e):ki(n,i));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return ff(e,n,i,t,c,o,r);if(l){l=t.fallback,i=n.mode,o=e.child,c=o.sibling;var p={mode:"hidden",children:t.children};return(i&1)===0&&n.child!==o?(t=n.child,t.childLanes=0,t.pendingProps=p,n.deletions=null):(t=Gn(o,p),t.subtreeFlags=o.subtreeFlags&14680064),c!==null?l=Gn(c,l):(l=pr(l,i,r,null),l.flags|=2),l.return=n,t.return=n,t.sibling=l,n.child=t,t=l,l=n.child,i=e.child.memoizedState,i=i===null?wi(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~r,n.memoizedState=xi,t}return l=e.child,e=l.sibling,t=Gn(l,{mode:"visible",children:t.children}),(n.mode&1)===0&&(t.lanes=r),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t,n.memoizedState=null,t}function ki(e,n){return n=Uo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function No(e,n,r,t){return t!==null&&Yl(t),Or(n,e.child,null,r),e=ki(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ff(e,n,r,t,o,l,i){if(r)return n.flags&256?(n.flags&=-257,t=hi(Error(s(422))),No(e,n,i,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=t.fallback,o=n.mode,t=Uo({mode:"visible",children:t.children},o,0,null),l=pr(l,o,i,null),l.flags|=2,t.return=n,l.return=n,t.sibling=l,n.child=t,(n.mode&1)!==0&&Or(n,e.child,null,i),n.child.memoizedState=wi(i),n.memoizedState=xi,l);if((n.mode&1)===0)return No(e,n,i,null);if(o.data==="$!"){if(t=o.nextSibling&&o.nextSibling.dataset,t)var c=t.dgst;return t=c,l=Error(s(419)),t=hi(l,t,void 0),No(e,n,i,t)}if(c=(i&e.childLanes)!==0,Ae||c){if(t=Ne,t!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(t.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,zn(e,o),pn(t,e,o,-1))}return bi(),t=hi(Error(s(421))),No(e,n,i,t)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Cf.bind(null,e),o._reactRetry=n,null):(e=l.treeContext,Ge=Fn(o.nextSibling),Ye=n,pe=!0,un=null,e!==null&&(qe[en++]=Cn,qe[en++]=Nn,qe[en++]=or,Cn=e.id,Nn=e.overflow,or=n),n=ki(n,t.children),n.flags|=4096,n)}function wu(e,n,r){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),Zl(e.return,n,r)}function Si(e,n,r,t,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:o}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=r,l.tailMode=o)}function ku(e,n,r){var t=n.pendingProps,o=t.revealOrder,l=t.tail;if(Ie(e,n,t.children,r),t=me.current,(t&2)!==0)t=t&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wu(e,r,n);else if(e.tag===19)wu(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(ue(me,t),(n.mode&1)===0)n.memoizedState=null;else switch(o){case"forwards":for(r=n.child,o=null;r!==null;)e=r.alternate,e!==null&&xo(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=n.child,n.child=null):(o=r.sibling,r.sibling=null),Si(n,!1,o,r,l);break;case"backwards":for(r=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&xo(e)===null){n.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Si(n,!0,r,null,l);break;case"together":Si(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zo(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function _n(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),ur|=n.lanes,(r&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,r=Gn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Gn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function pf(e,n,r){switch(n.tag){case 3:vu(n),Lr();break;case 5:Is(n);break;case 1:Be(n.type)&&so(n);break;case 4:ni(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,o=n.memoizedProps.value;ue(ho,t._currentValue),t._currentValue=o;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(ue(me,me.current&1),n.flags|=128,null):(r&n.child.childLanes)!==0?xu(e,n,r):(ue(me,me.current&1),e=_n(e,n,r),e!==null?e.sibling:null);ue(me,me.current&1);break;case 19:if(t=(r&n.childLanes)!==0,(e.flags&128)!==0){if(t)return ku(e,n,r);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ue(me,me.current),t)break;return null;case 22:case 23:return n.lanes=0,mu(e,n,r)}return _n(e,n,r)}var Su,Ei,Eu,ju;Su=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ei=function(){},Eu=function(e,n,r,t){var o=e.memoizedProps;if(o!==t){e=n.stateNode,ar(xn.current);var l=null;switch(r){case"input":o=Zo(e,o),t=Zo(e,t),l=[];break;case"select":o=b({},o,{value:void 0}),t=b({},t,{value:void 0}),l=[];break;case"textarea":o=nl(e,o),t=nl(e,t),l=[];break;default:typeof o.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=lo)}tl(r,t);var i;r=null;for(x in o)if(!t.hasOwnProperty(x)&&o.hasOwnProperty(x)&&o[x]!=null)if(x==="style"){var c=o[x];for(i in c)c.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(y.hasOwnProperty(x)?l||(l=[]):(l=l||[]).push(x,null));for(x in t){var p=t[x];if(c=o!=null?o[x]:void 0,t.hasOwnProperty(x)&&p!==c&&(p!=null||c!=null))if(x==="style")if(c){for(i in c)!c.hasOwnProperty(i)||p&&p.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in p)p.hasOwnProperty(i)&&c[i]!==p[i]&&(r||(r={}),r[i]=p[i])}else r||(l||(l=[]),l.push(x,r)),r=p;else x==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,c=c?c.__html:void 0,p!=null&&c!==p&&(l=l||[]).push(x,p)):x==="children"?typeof p!="string"&&typeof p!="number"||(l=l||[]).push(x,""+p):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(y.hasOwnProperty(x)?(p!=null&&x==="onScroll"&&ce("scroll",e),l||c===p||(l=[])):(l=l||[]).push(x,p))}r&&(l=l||[]).push("style",r);var x=l;(n.updateQueue=x)&&(n.flags|=4)}},ju=function(e,n,r,t){r!==t&&(n.flags|=4)};function jt(e,n){if(!pe)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,t=0;if(n)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,t|=o.subtreeFlags&14680064,t|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,t|=o.subtreeFlags,t|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=t,e.childLanes=r,n}function mf(e,n,r){var t=n.pendingProps;switch($l(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Be(n.type)&&ao(),Le(n),null;case 3:return t=n.stateNode,Dr(),de(Ue),de(Te),oi(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(po(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,un!==null&&(Mi(un),un=null))),Ei(e,n),Le(n),null;case 5:ri(n);var o=ar(xt.current);if(r=n.type,e!==null&&n.stateNode!=null)Eu(e,n,r,t,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(s(166));return Le(n),null}if(e=ar(xn.current),po(n)){t=n.stateNode,r=n.type;var l=n.memoizedProps;switch(t[yn]=n,t[mt]=l,e=(n.mode&1)!==0,r){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(o=0;o<dt.length;o++)ce(dt[o],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":oa(t,l),ce("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!l.multiple},ce("invalid",t);break;case"textarea":aa(t,l),ce("invalid",t)}tl(r,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="children"?typeof c=="string"?t.textContent!==c&&(l.suppressHydrationWarning!==!0&&oo(t.textContent,c,e),o=["children",c]):typeof c=="number"&&t.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&oo(t.textContent,c,e),o=["children",""+c]):y.hasOwnProperty(i)&&c!=null&&i==="onScroll"&&ce("scroll",t)}switch(r){case"input":It(t),ia(t,l,!0);break;case"textarea":It(t),ua(t);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(t.onclick=lo)}t=o,n.updateQueue=t,t!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ca(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=i.createElement(r,{is:t.is}):(e=i.createElement(r),r==="select"&&(i=e,t.multiple?i.multiple=!0:t.size&&(i.size=t.size))):e=i.createElementNS(e,r),e[yn]=n,e[mt]=t,Su(e,n,!1,!1),n.stateNode=e;e:{switch(i=ol(r,t),r){case"dialog":ce("cancel",e),ce("close",e),o=t;break;case"iframe":case"object":case"embed":ce("load",e),o=t;break;case"video":case"audio":for(o=0;o<dt.length;o++)ce(dt[o],e);o=t;break;case"source":ce("error",e),o=t;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=t;break;case"details":ce("toggle",e),o=t;break;case"input":oa(e,t),o=Zo(e,t),ce("invalid",e);break;case"option":o=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},o=b({},t,{value:void 0}),ce("invalid",e);break;case"textarea":aa(e,t),o=nl(e,t),ce("invalid",e);break;default:o=t}tl(r,o),c=o;for(l in c)if(c.hasOwnProperty(l)){var p=c[l];l==="style"?pa(e,p):l==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&da(e,p)):l==="children"?typeof p=="string"?(r!=="textarea"||p!=="")&&Qr(e,p):typeof p=="number"&&Qr(e,""+p):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(y.hasOwnProperty(l)?p!=null&&l==="onScroll"&&ce("scroll",e):p!=null&&re(e,l,p,i))}switch(r){case"input":It(e),ia(e,t,!1);break;case"textarea":It(e),ua(e);break;case"option":t.value!=null&&e.setAttribute("value",""+te(t.value));break;case"select":e.multiple=!!t.multiple,l=t.value,l!=null?vr(e,!!t.multiple,l,!1):t.defaultValue!=null&&vr(e,!!t.multiple,t.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=lo)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)ju(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(s(166));if(r=ar(xt.current),ar(xn.current),po(n)){if(t=n.stateNode,r=n.memoizedProps,t[yn]=n,(l=t.nodeValue!==r)&&(e=Ye,e!==null))switch(e.tag){case 3:oo(t.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(t.nodeValue,r,(e.mode&1)!==0)}l&&(n.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[yn]=n,n.stateNode=t}return Le(n),null;case 13:if(de(me),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&Ge!==null&&(n.mode&1)!==0&&(n.flags&128)===0)zs(),Lr(),n.flags|=98560,l=!1;else if(l=po(n),t!==null&&t.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[yn]=n}else Lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Le(n),l=!1}else un!==null&&(Mi(un),un=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=r,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(me.current&1)!==0?Ee===0&&(Ee=3):bi())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return Dr(),Ei(e,n),e===null&&ft(n.stateNode.containerInfo),Le(n),null;case 10:return Jl(n.type._context),Le(n),null;case 17:return Be(n.type)&&ao(),Le(n),null;case 19:if(de(me),l=n.memoizedState,l===null)return Le(n),null;if(t=(n.flags&128)!==0,i=l.rendering,i===null)if(t)jt(l,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=xo(e),i!==null){for(n.flags|=128,jt(l,!1),t=i.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=r,r=n.child;r!==null;)l=r,e=t,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ue(me,me.current&1|2),n.child}e=e.sibling}l.tail!==null&&ye()>Br&&(n.flags|=128,t=!0,jt(l,!1),n.lanes=4194304)}else{if(!t)if(e=xo(i),e!==null){if(n.flags|=128,t=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),jt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!pe)return Le(n),null}else 2*ye()-l.renderingStartTime>Br&&r!==1073741824&&(n.flags|=128,t=!0,jt(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(r=l.last,r!==null?r.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ye(),n.sibling=null,r=me.current,ue(me,t?r&1|2:r&1),n):(Le(n),null);case 22:case 23:return Di(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&(n.mode&1)!==0?(Xe&1073741824)!==0&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function hf(e,n){switch($l(n),n.tag){case 1:return Be(n.type)&&ao(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Dr(),de(Ue),de(Te),oi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return ri(n),null;case 13:if(de(me),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Lr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return de(me),null;case 4:return Dr(),null;case 10:return Jl(n.type._context),null;case 22:case 23:return Di(),null;case 24:return null;default:return null}}var Po=!1,Oe=!1,gf=typeof WeakSet=="function"?WeakSet:Set,D=null;function Fr(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){ve(e,n,t)}else r.current=null}function ji(e,n,r){try{r()}catch(t){ve(e,n,t)}}var Cu=!1;function vf(e,n){if(Dl=Kt,e=ts(),Pl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var o=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var i=0,c=-1,p=-1,x=0,C=0,N=e,E=null;n:for(;;){for(var M;N!==r||o!==0&&N.nodeType!==3||(c=i+o),N!==l||t!==0&&N.nodeType!==3||(p=i+t),N.nodeType===3&&(i+=N.nodeValue.length),(M=N.firstChild)!==null;)E=N,N=M;for(;;){if(N===e)break n;if(E===r&&++x===o&&(c=i),E===l&&++C===t&&(p=i),(M=N.nextSibling)!==null)break;N=E,E=N.parentNode}N=M}r=c===-1||p===-1?null:{start:c,end:p}}else r=null}r=r||{start:0,end:0}}else r=null;for(bl={focusedElem:e,selectionRange:r},Kt=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var F=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(F!==null){var U=F.memoizedProps,xe=F.memoizedState,g=n.stateNode,m=g.getSnapshotBeforeUpdate(n.elementType===n.type?U:cn(n.type,U),xe);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(z){ve(n,n.return,z)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return F=Cu,Cu=!1,F}function Ct(e,n,r){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ji(n,r,l)}o=o.next}while(o!==t)}}function _o(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var t=r.create;r.destroy=t()}r=r.next}while(r!==n)}}function Ci(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function Nu(e){var n=e.alternate;n!==null&&(e.alternate=null,Nu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[yn],delete n[mt],delete n[Al],delete n[Zd],delete n[qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zu(e){return e.tag===5||e.tag===3||e.tag===4}function Pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ni(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=lo));else if(t!==4&&(e=e.child,e!==null))for(Ni(e,n,r),e=e.sibling;e!==null;)Ni(e,n,r),e=e.sibling}function zi(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(zi(e,n,r),e=e.sibling;e!==null;)zi(e,n,r),e=e.sibling}var Pe=null,dn=!1;function Hn(e,n,r){for(r=r.child;r!==null;)_u(e,n,r),r=r.sibling}function _u(e,n,r){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(At,r)}catch{}switch(r.tag){case 5:Oe||Fr(r,n);case 6:var t=Pe,o=dn;Pe=null,Hn(e,n,r),Pe=t,dn=o,Pe!==null&&(dn?(e=Pe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Pe.removeChild(r.stateNode));break;case 18:Pe!==null&&(dn?(e=Pe,r=r.stateNode,e.nodeType===8?Bl(e.parentNode,r):e.nodeType===1&&Bl(e,r),tt(e)):Bl(Pe,r.stateNode));break;case 4:t=Pe,o=dn,Pe=r.stateNode.containerInfo,dn=!0,Hn(e,n,r),Pe=t,dn=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){o=t=t.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&ji(r,n,i),o=o.next}while(o!==t)}Hn(e,n,r);break;case 1:if(!Oe&&(Fr(r,n),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(c){ve(r,n,c)}Hn(e,n,r);break;case 21:Hn(e,n,r);break;case 22:r.mode&1?(Oe=(t=Oe)||r.memoizedState!==null,Hn(e,n,r),Oe=t):Hn(e,n,r);break;default:Hn(e,n,r)}}function Tu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new gf),n.forEach(function(t){var o=Nf.bind(null,e,t);r.has(t)||(r.add(t),t.then(o,o))})}}function fn(e,n){var r=n.deletions;if(r!==null)for(var t=0;t<r.length;t++){var o=r[t];try{var l=e,i=n,c=i;e:for(;c!==null;){switch(c.tag){case 5:Pe=c.stateNode,dn=!1;break e;case 3:Pe=c.stateNode.containerInfo,dn=!0;break e;case 4:Pe=c.stateNode.containerInfo,dn=!0;break e}c=c.return}if(Pe===null)throw Error(s(160));_u(l,i,o),Pe=null,dn=!1;var p=o.alternate;p!==null&&(p.return=null),o.return=null}catch(x){ve(o,n,x)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ru(n,e),n=n.sibling}function Ru(e,n){var r=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fn(n,e),kn(e),t&4){try{Ct(3,e,e.return),_o(3,e)}catch(U){ve(e,e.return,U)}try{Ct(5,e,e.return)}catch(U){ve(e,e.return,U)}}break;case 1:fn(n,e),kn(e),t&512&&r!==null&&Fr(r,r.return);break;case 5:if(fn(n,e),kn(e),t&512&&r!==null&&Fr(r,r.return),e.flags&32){var o=e.stateNode;try{Qr(o,"")}catch(U){ve(e,e.return,U)}}if(t&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=r!==null?r.memoizedProps:l,c=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&la(o,l),ol(c,i);var x=ol(c,l);for(i=0;i<p.length;i+=2){var C=p[i],N=p[i+1];C==="style"?pa(o,N):C==="dangerouslySetInnerHTML"?da(o,N):C==="children"?Qr(o,N):re(o,C,N,x)}switch(c){case"input":qo(o,l);break;case"textarea":sa(o,l);break;case"select":var E=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var M=l.value;M!=null?vr(o,!!l.multiple,M,!1):E!==!!l.multiple&&(l.defaultValue!=null?vr(o,!!l.multiple,l.defaultValue,!0):vr(o,!!l.multiple,l.multiple?[]:"",!1))}o[mt]=l}catch(U){ve(e,e.return,U)}}break;case 6:if(fn(n,e),kn(e),t&4){if(e.stateNode===null)throw Error(s(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(U){ve(e,e.return,U)}}break;case 3:if(fn(n,e),kn(e),t&4&&r!==null&&r.memoizedState.isDehydrated)try{tt(n.containerInfo)}catch(U){ve(e,e.return,U)}break;case 4:fn(n,e),kn(e);break;case 13:fn(n,e),kn(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ti=ye())),t&4&&Tu(e);break;case 22:if(C=r!==null&&r.memoizedState!==null,e.mode&1?(Oe=(x=Oe)||C,fn(n,e),Oe=x):fn(n,e),kn(e),t&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!C&&(e.mode&1)!==0)for(D=e,C=e.child;C!==null;){for(N=D=C;D!==null;){switch(E=D,M=E.child,E.tag){case 0:case 11:case 14:case 15:Ct(4,E,E.return);break;case 1:Fr(E,E.return);var F=E.stateNode;if(typeof F.componentWillUnmount=="function"){t=E,r=E.return;try{n=t,F.props=n.memoizedProps,F.state=n.memoizedState,F.componentWillUnmount()}catch(U){ve(t,r,U)}}break;case 5:Fr(E,E.return);break;case 22:if(E.memoizedState!==null){Mu(N);continue}}M!==null?(M.return=E,D=M):Mu(N)}C=C.sibling}e:for(C=null,N=e;;){if(N.tag===5){if(C===null){C=N;try{o=N.stateNode,x?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=N.stateNode,p=N.memoizedProps.style,i=p!=null&&p.hasOwnProperty("display")?p.display:null,c.style.display=fa("display",i))}catch(U){ve(e,e.return,U)}}}else if(N.tag===6){if(C===null)try{N.stateNode.nodeValue=x?"":N.memoizedProps}catch(U){ve(e,e.return,U)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;C===N&&(C=null),N=N.return}C===N&&(C=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:fn(n,e),kn(e),t&4&&Tu(e);break;case 21:break;default:fn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(zu(r)){var t=r;break e}r=r.return}throw Error(s(160))}switch(t.tag){case 5:var o=t.stateNode;t.flags&32&&(Qr(o,""),t.flags&=-33);var l=Pu(e);zi(e,l,o);break;case 3:case 4:var i=t.stateNode.containerInfo,c=Pu(e);Ni(e,c,i);break;default:throw Error(s(161))}}catch(p){ve(e,e.return,p)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yf(e,n,r){D=e,Lu(e)}function Lu(e,n,r){for(var t=(e.mode&1)!==0;D!==null;){var o=D,l=o.child;if(o.tag===22&&t){var i=o.memoizedState!==null||Po;if(!i){var c=o.alternate,p=c!==null&&c.memoizedState!==null||Oe;c=Po;var x=Oe;if(Po=i,(Oe=p)&&!x)for(D=o;D!==null;)i=D,p=i.child,i.tag===22&&i.memoizedState!==null?Iu(o):p!==null?(p.return=i,D=p):Iu(o);for(;l!==null;)D=l,Lu(l),l=l.sibling;D=o,Po=c,Oe=x}Ou(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,D=l):Ou(e)}}function Ou(e){for(;D!==null;){var n=D;if((n.flags&8772)!==0){var r=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Oe||_o(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!Oe)if(r===null)t.componentDidMount();else{var o=n.elementType===n.type?r.memoizedProps:cn(n.type,r.memoizedProps);t.componentDidUpdate(o,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Ms(n,l,t);break;case 3:var i=n.updateQueue;if(i!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}Ms(n,i,r)}break;case 5:var c=n.stateNode;if(r===null&&n.flags&4){r=c;var p=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&r.focus();break;case"img":p.src&&(r.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var x=n.alternate;if(x!==null){var C=x.memoizedState;if(C!==null){var N=C.dehydrated;N!==null&&tt(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Oe||n.flags&512&&Ci(n)}catch(E){ve(n,n.return,E)}}if(n===e){D=null;break}if(r=n.sibling,r!==null){r.return=n.return,D=r;break}D=n.return}}function Mu(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var r=n.sibling;if(r!==null){r.return=n.return,D=r;break}D=n.return}}function Iu(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{_o(4,n)}catch(p){ve(n,r,p)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var o=n.return;try{t.componentDidMount()}catch(p){ve(n,o,p)}}var l=n.return;try{Ci(n)}catch(p){ve(n,l,p)}break;case 5:var i=n.return;try{Ci(n)}catch(p){ve(n,i,p)}}}catch(p){ve(n,n.return,p)}if(n===e){D=null;break}var c=n.sibling;if(c!==null){c.return=n.return,D=c;break}D=n.return}}var xf=Math.ceil,To=ae.ReactCurrentDispatcher,Pi=ae.ReactCurrentOwner,tn=ae.ReactCurrentBatchConfig,J=0,Ne=null,we=null,_e=0,Xe=0,Ur=Un(0),Ee=0,Nt=null,ur=0,Ro=0,_i=0,zt=null,Ve=null,Ti=0,Br=1/0,Tn=null,Lo=!1,Ri=null,$n=null,Oo=!1,Qn=null,Mo=0,Pt=0,Li=null,Io=-1,Do=0;function De(){return(J&6)!==0?ye():Io!==-1?Io:Io=ye()}function Kn(e){return(e.mode&1)===0?1:(J&2)!==0&&_e!==0?_e&-_e:nf.transition!==null?(Do===0&&(Do=Pa()),Do):(e=oe,e!==0||(e=window.event,e=e===void 0?16:ba(e.type)),e)}function pn(e,n,r,t){if(50<Pt)throw Pt=0,Li=null,Error(s(185));Zr(e,r,t),((J&2)===0||e!==Ne)&&(e===Ne&&((J&2)===0&&(Ro|=r),Ee===4&&Yn(e,_e)),We(e,t),r===1&&J===0&&(n.mode&1)===0&&(Br=ye()+500,uo&&An()))}function We(e,n){var r=e.callbackNode;nd(e,n);var t=Ht(e,e===Ne?_e:0);if(t===0)r!==null&&Ca(r),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(r!=null&&Ca(r),n===1)e.tag===0?ef(bu.bind(null,e)):Ss(bu.bind(null,e)),Xd(function(){(J&6)===0&&An()}),r=null;else{switch(_a(t)){case 1:r=dl;break;case 4:r=Na;break;case 16:r=Bt;break;case 536870912:r=za;break;default:r=Bt}r=$u(r,Du.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function Du(e,n){if(Io=-1,Do=0,(J&6)!==0)throw Error(s(327));var r=e.callbackNode;if(Ar()&&e.callbackNode!==r)return null;var t=Ht(e,e===Ne?_e:0);if(t===0)return null;if((t&30)!==0||(t&e.expiredLanes)!==0||n)n=bo(e,t);else{n=t;var o=J;J|=2;var l=Uu();(Ne!==e||_e!==n)&&(Tn=null,Br=ye()+500,dr(e,n));do try{Sf();break}catch(c){Fu(e,c)}while(!0);Xl(),To.current=l,J=o,we!==null?n=0:(Ne=null,_e=0,n=Ee)}if(n!==0){if(n===2&&(o=fl(e),o!==0&&(t=o,n=Oi(e,o))),n===1)throw r=Nt,dr(e,0),Yn(e,t),We(e,ye()),r;if(n===6)Yn(e,t);else{if(o=e.current.alternate,(t&30)===0&&!wf(o)&&(n=bo(e,t),n===2&&(l=fl(e),l!==0&&(t=l,n=Oi(e,l))),n===1))throw r=Nt,dr(e,0),Yn(e,t),We(e,ye()),r;switch(e.finishedWork=o,e.finishedLanes=t,n){case 0:case 1:throw Error(s(345));case 2:fr(e,Ve,Tn);break;case 3:if(Yn(e,t),(t&130023424)===t&&(n=Ti+500-ye(),10<n)){if(Ht(e,0)!==0)break;if(o=e.suspendedLanes,(o&t)!==t){De(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ul(fr.bind(null,e,Ve,Tn),n);break}fr(e,Ve,Tn);break;case 4:if(Yn(e,t),(t&4194240)===t)break;for(n=e.eventTimes,o=-1;0<t;){var i=31-an(t);l=1<<i,i=n[i],i>o&&(o=i),t&=~l}if(t=o,t=ye()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*xf(t/1960))-t,10<t){e.timeoutHandle=Ul(fr.bind(null,e,Ve,Tn),t);break}fr(e,Ve,Tn);break;case 5:fr(e,Ve,Tn);break;default:throw Error(s(329))}}}return We(e,ye()),e.callbackNode===r?Du.bind(null,e):null}function Oi(e,n){var r=zt;return e.current.memoizedState.isDehydrated&&(dr(e,n).flags|=256),e=bo(e,n),e!==2&&(n=Ve,Ve=r,n!==null&&Mi(n)),e}function Mi(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function wf(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var o=r[t],l=o.getSnapshot;o=o.value;try{if(!sn(l(),o))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Yn(e,n){for(n&=~_i,n&=~Ro,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-an(n),t=1<<r;e[r]=-1,n&=~t}}function bu(e){if((J&6)!==0)throw Error(s(327));Ar();var n=Ht(e,0);if((n&1)===0)return We(e,ye()),null;var r=bo(e,n);if(e.tag!==0&&r===2){var t=fl(e);t!==0&&(n=t,r=Oi(e,t))}if(r===1)throw r=Nt,dr(e,0),Yn(e,n),We(e,ye()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,fr(e,Ve,Tn),We(e,ye()),null}function Ii(e,n){var r=J;J|=1;try{return e(n)}finally{J=r,J===0&&(Br=ye()+500,uo&&An())}}function cr(e){Qn!==null&&Qn.tag===0&&(J&6)===0&&Ar();var n=J;J|=1;var r=tn.transition,t=oe;try{if(tn.transition=null,oe=1,e)return e()}finally{oe=t,tn.transition=r,J=n,(J&6)===0&&An()}}function Di(){Xe=Ur.current,de(Ur)}function dr(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Gd(r)),we!==null)for(r=we.return;r!==null;){var t=r;switch($l(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&ao();break;case 3:Dr(),de(Ue),de(Te),oi();break;case 5:ri(t);break;case 4:Dr();break;case 13:de(me);break;case 19:de(me);break;case 10:Jl(t.type._context);break;case 22:case 23:Di()}r=r.return}if(Ne=e,we=e=Gn(e.current,null),_e=Xe=n,Ee=0,Nt=null,_i=Ro=ur=0,Ve=zt=null,ir!==null){for(n=0;n<ir.length;n++)if(r=ir[n],t=r.interleaved,t!==null){r.interleaved=null;var o=t.next,l=r.pending;if(l!==null){var i=l.next;l.next=o,t.next=i}r.pending=t}ir=null}return e}function Fu(e,n){do{var r=we;try{if(Xl(),wo.current=jo,ko){for(var t=he.memoizedState;t!==null;){var o=t.queue;o!==null&&(o.pending=null),t=t.next}ko=!1}if(sr=0,Ce=Se=he=null,wt=!1,kt=0,Pi.current=null,r===null||r.return===null){Ee=1,Nt=n,we=null;break}e:{var l=e,i=r.return,c=r,p=n;if(n=_e,c.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var x=p,C=c,N=C.tag;if((C.mode&1)===0&&(N===0||N===11||N===15)){var E=C.alternate;E?(C.updateQueue=E.updateQueue,C.memoizedState=E.memoizedState,C.lanes=E.lanes):(C.updateQueue=null,C.memoizedState=null)}var M=uu(i);if(M!==null){M.flags&=-257,cu(M,i,c,l,n),M.mode&1&&su(l,x,n),n=M,p=x;var F=n.updateQueue;if(F===null){var U=new Set;U.add(p),n.updateQueue=U}else F.add(p);break e}else{if((n&1)===0){su(l,x,n),bi();break e}p=Error(s(426))}}else if(pe&&c.mode&1){var xe=uu(i);if(xe!==null){(xe.flags&65536)===0&&(xe.flags|=256),cu(xe,i,c,l,n),Yl(br(p,c));break e}}l=p=br(p,c),Ee!==4&&(Ee=2),zt===null?zt=[l]:zt.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var g=iu(l,p,n);Os(l,g);break e;case 1:c=p;var m=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&($n===null||!$n.has(v)))){l.flags|=65536,n&=-n,l.lanes|=n;var z=au(l,c,n);Os(l,z);break e}}l=l.return}while(l!==null)}Au(r)}catch(B){n=B,we===r&&r!==null&&(we=r=r.return);continue}break}while(!0)}function Uu(){var e=To.current;return To.current=jo,e===null?jo:e}function bi(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Ne===null||(ur&268435455)===0&&(Ro&268435455)===0||Yn(Ne,_e)}function bo(e,n){var r=J;J|=2;var t=Uu();(Ne!==e||_e!==n)&&(Tn=null,dr(e,n));do try{kf();break}catch(o){Fu(e,o)}while(!0);if(Xl(),J=r,To.current=t,we!==null)throw Error(s(261));return Ne=null,_e=0,Ee}function kf(){for(;we!==null;)Bu(we)}function Sf(){for(;we!==null&&!Qc();)Bu(we)}function Bu(e){var n=Hu(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,n===null?Au(e):we=n,Pi.current=null}function Au(e){var n=e;do{var r=n.alternate;if(e=n.return,(n.flags&32768)===0){if(r=mf(r,n,Xe),r!==null){we=r;return}}else{if(r=hf(r,n),r!==null){r.flags&=32767,we=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,we=null;return}}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);Ee===0&&(Ee=5)}function fr(e,n,r){var t=oe,o=tn.transition;try{tn.transition=null,oe=1,Ef(e,n,r,t)}finally{tn.transition=o,oe=t}return null}function Ef(e,n,r,t){do Ar();while(Qn!==null);if((J&6)!==0)throw Error(s(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(rd(e,l),e===Ne&&(we=Ne=null,_e=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Oo||(Oo=!0,$u(Bt,function(){return Ar(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=tn.transition,tn.transition=null;var i=oe;oe=1;var c=J;J|=4,Pi.current=null,vf(e,r),Ru(r,e),Vd(bl),Kt=!!Dl,bl=Dl=null,e.current=r,yf(r),Kc(),J=c,oe=i,tn.transition=l}else e.current=r;if(Oo&&(Oo=!1,Qn=e,Mo=o),l=e.pendingLanes,l===0&&($n=null),Xc(r.stateNode),We(e,ye()),n!==null)for(t=e.onRecoverableError,r=0;r<n.length;r++)o=n[r],t(o.value,{componentStack:o.stack,digest:o.digest});if(Lo)throw Lo=!1,e=Ri,Ri=null,e;return(Mo&1)!==0&&e.tag!==0&&Ar(),l=e.pendingLanes,(l&1)!==0?e===Li?Pt++:(Pt=0,Li=e):Pt=0,An(),null}function Ar(){if(Qn!==null){var e=_a(Mo),n=tn.transition,r=oe;try{if(tn.transition=null,oe=16>e?16:e,Qn===null)var t=!1;else{if(e=Qn,Qn=null,Mo=0,(J&6)!==0)throw Error(s(331));var o=J;for(J|=4,D=e.current;D!==null;){var l=D,i=l.child;if((D.flags&16)!==0){var c=l.deletions;if(c!==null){for(var p=0;p<c.length;p++){var x=c[p];for(D=x;D!==null;){var C=D;switch(C.tag){case 0:case 11:case 15:Ct(8,C,l)}var N=C.child;if(N!==null)N.return=C,D=N;else for(;D!==null;){C=D;var E=C.sibling,M=C.return;if(Nu(C),C===x){D=null;break}if(E!==null){E.return=M,D=E;break}D=M}}}var F=l.alternate;if(F!==null){var U=F.child;if(U!==null){F.child=null;do{var xe=U.sibling;U.sibling=null,U=xe}while(U!==null)}}D=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,D=i;else e:for(;D!==null;){if(l=D,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Ct(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,D=g;break e}D=l.return}}var m=e.current;for(D=m;D!==null;){i=D;var v=i.child;if((i.subtreeFlags&2064)!==0&&v!==null)v.return=i,D=v;else e:for(i=m;D!==null;){if(c=D,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:_o(9,c)}}catch(B){ve(c,c.return,B)}if(c===i){D=null;break e}var z=c.sibling;if(z!==null){z.return=c.return,D=z;break e}D=c.return}}if(J=o,An(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(At,e)}catch{}t=!0}return t}finally{oe=r,tn.transition=n}}return!1}function Vu(e,n,r){n=br(r,n),n=iu(e,n,1),e=Wn(e,n,1),n=De(),e!==null&&(Zr(e,1,n),We(e,n))}function ve(e,n,r){if(e.tag===3)Vu(e,e,r);else for(;n!==null;){if(n.tag===3){Vu(n,e,r);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&($n===null||!$n.has(t))){e=br(r,e),e=au(n,e,1),n=Wn(n,e,1),e=De(),n!==null&&(Zr(n,1,e),We(n,e));break}}n=n.return}}function jf(e,n,r){var t=e.pingCache;t!==null&&t.delete(n),n=De(),e.pingedLanes|=e.suspendedLanes&r,Ne===e&&(_e&r)===r&&(Ee===4||Ee===3&&(_e&130023424)===_e&&500>ye()-Ti?dr(e,0):_i|=r),We(e,n)}function Wu(e,n){n===0&&((e.mode&1)===0?n=1:(n=Wt,Wt<<=1,(Wt&130023424)===0&&(Wt=4194304)));var r=De();e=zn(e,n),e!==null&&(Zr(e,n,r),We(e,r))}function Cf(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Wu(e,r)}function Nf(e,n){var r=0;switch(e.tag){case 13:var t=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(s(314))}t!==null&&t.delete(n),Wu(e,r)}var Hu;Hu=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ue.current)Ae=!0;else{if((e.lanes&r)===0&&(n.flags&128)===0)return Ae=!1,pf(e,n,r);Ae=(e.flags&131072)!==0}else Ae=!1,pe&&(n.flags&1048576)!==0&&Es(n,fo,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;zo(e,n),e=n.pendingProps;var o=_r(n,Te.current);Ir(n,r),o=ai(null,n,t,e,o,r);var l=si();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Be(t)?(l=!0,so(n)):l=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ei(n),o.updater=Co,n.stateNode=o,o._reactInternals=n,mi(n,t,e,r),n=yi(null,n,t,!0,l,r)):(n.tag=0,pe&&l&&Hl(n),Ie(null,n,o,r),n=n.child),n;case 16:t=n.elementType;e:{switch(zo(e,n),e=n.pendingProps,o=t._init,t=o(t._payload),n.type=t,o=n.tag=Pf(t),e=cn(t,e),o){case 0:n=vi(null,n,t,e,r);break e;case 1:n=gu(null,n,t,e,r);break e;case 11:n=du(null,n,t,e,r);break e;case 14:n=fu(null,n,t,cn(t.type,e),r);break e}throw Error(s(306,t,""))}return n;case 0:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:cn(t,o),vi(e,n,t,o,r);case 1:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:cn(t,o),gu(e,n,t,o,r);case 3:e:{if(vu(n),e===null)throw Error(s(387));t=n.pendingProps,l=n.memoizedState,o=l.element,Ls(e,n),yo(n,t,null,r);var i=n.memoizedState;if(t=i.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){o=br(Error(s(423)),n),n=yu(e,n,t,r,o);break e}else if(t!==o){o=br(Error(s(424)),n),n=yu(e,n,t,r,o);break e}else for(Ge=Fn(n.stateNode.containerInfo.firstChild),Ye=n,pe=!0,un=null,r=Ts(n,null,t,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Lr(),t===o){n=_n(e,n,r);break e}Ie(e,n,t,r)}n=n.child}return n;case 5:return Is(n),e===null&&Kl(n),t=n.type,o=n.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Fl(t,o)?i=null:l!==null&&Fl(t,l)&&(n.flags|=32),hu(e,n),Ie(e,n,i,r),n.child;case 6:return e===null&&Kl(n),null;case 13:return xu(e,n,r);case 4:return ni(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=Or(n,null,t,r):Ie(e,n,t,r),n.child;case 11:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:cn(t,o),du(e,n,t,o,r);case 7:return Ie(e,n,n.pendingProps,r),n.child;case 8:return Ie(e,n,n.pendingProps.children,r),n.child;case 12:return Ie(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(t=n.type._context,o=n.pendingProps,l=n.memoizedProps,i=o.value,ue(ho,t._currentValue),t._currentValue=i,l!==null)if(sn(l.value,i)){if(l.children===o.children&&!Ue.current){n=_n(e,n,r);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var c=l.dependencies;if(c!==null){i=l.child;for(var p=c.firstContext;p!==null;){if(p.context===t){if(l.tag===1){p=Pn(-1,r&-r),p.tag=2;var x=l.updateQueue;if(x!==null){x=x.shared;var C=x.pending;C===null?p.next=p:(p.next=C.next,C.next=p),x.pending=p}}l.lanes|=r,p=l.alternate,p!==null&&(p.lanes|=r),Zl(l.return,r,n),c.lanes|=r;break}p=p.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(s(341));i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Zl(i,r,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Ie(e,n,o.children,r),n=n.child}return n;case 9:return o=n.type,t=n.pendingProps.children,Ir(n,r),o=nn(o),t=t(o),n.flags|=1,Ie(e,n,t,r),n.child;case 14:return t=n.type,o=cn(t,n.pendingProps),o=cn(t.type,o),fu(e,n,t,o,r);case 15:return pu(e,n,n.type,n.pendingProps,r);case 17:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:cn(t,o),zo(e,n),n.tag=1,Be(t)?(e=!0,so(n)):e=!1,Ir(n,r),ou(n,t,o),mi(n,t,o,r),yi(null,n,t,!0,e,r);case 19:return ku(e,n,r);case 22:return mu(e,n,r)}throw Error(s(156,n.tag))};function $u(e,n){return ja(e,n)}function zf(e,n,r,t){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,n,r,t){return new zf(e,n,r,t)}function Fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pf(e){if(typeof e=="function")return Fi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hn)return 11;if(e===gn)return 14}return 2}function Gn(e,n){var r=e.alternate;return r===null?(r=on(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Fo(e,n,r,t,o,l){var i=2;if(t=e,typeof e=="function")Fi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case be:return pr(r.children,o,l,n);case Ze:i=8,o|=8;break;case Rn:return e=on(12,r,n,o|2),e.elementType=Rn,e.lanes=l,e;case $e:return e=on(13,r,n,o),e.elementType=$e,e.lanes=l,e;case ln:return e=on(19,r,n,o),e.elementType=ln,e.lanes=l,e;case ge:return Uo(r,o,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sn:i=10;break e;case er:i=9;break e;case hn:i=11;break e;case gn:i=14;break e;case Fe:i=16,t=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=on(i,r,n,o),n.elementType=e,n.type=t,n.lanes=l,n}function pr(e,n,r,t){return e=on(7,e,t,n),e.lanes=r,e}function Uo(e,n,r,t){return e=on(22,e,t,n),e.elementType=ge,e.lanes=r,e.stateNode={isHidden:!1},e}function Ui(e,n,r){return e=on(6,e,null,n),e.lanes=r,e}function Bi(e,n,r){return n=on(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function _f(e,n,r,t,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=t,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ai(e,n,r,t,o,l,i,c,p){return e=new _f(e,n,r,c,p),n===1?(n=1,l===!0&&(n|=8)):n=0,l=on(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ei(l),e}function Tf(e,n,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Me,key:t==null?null:""+t,children:e,containerInfo:n,implementation:r}}function Qu(e){if(!e)return Bn;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(Be(r))return ws(e,r,n)}return n}function Ku(e,n,r,t,o,l,i,c,p){return e=Ai(r,t,!0,e,o,l,i,c,p),e.context=Qu(null),r=e.current,t=De(),o=Kn(r),l=Pn(t,o),l.callback=n??null,Wn(r,l,o),e.current.lanes=o,Zr(e,o,t),We(e,t),e}function Bo(e,n,r,t){var o=n.current,l=De(),i=Kn(o);return r=Qu(r),n.context===null?n.context=r:n.pendingContext=r,n=Pn(l,i),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=Wn(o,n,i),e!==null&&(pn(e,o,i,l),vo(e,o,i)),i}function Ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Vi(e,n){Yu(e,n),(e=e.alternate)&&Yu(e,n)}function Rf(){return null}var Gu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wi(e){this._internalRoot=e}Vo.prototype.render=Wi.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));Bo(e,n,null,null)},Vo.prototype.unmount=Wi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;cr(function(){Bo(null,e,null,null)}),n[En]=null}};function Vo(e){this._internalRoot=e}Vo.prototype.unstable_scheduleHydration=function(e){if(e){var n=La();e={blockedOn:null,target:e,priority:n};for(var r=0;r<In.length&&n!==0&&n<In[r].priority;r++);In.splice(r,0,e),r===0&&Ia(e)}};function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xu(){}function Lf(e,n,r,t,o){if(o){if(typeof t=="function"){var l=t;t=function(){var x=Ao(i);l.call(x)}}var i=Ku(n,t,e,0,null,!1,!1,"",Xu);return e._reactRootContainer=i,e[En]=i.current,ft(e.nodeType===8?e.parentNode:e),cr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof t=="function"){var c=t;t=function(){var x=Ao(p);c.call(x)}}var p=Ai(e,0,!1,null,null,!1,!1,"",Xu);return e._reactRootContainer=p,e[En]=p.current,ft(e.nodeType===8?e.parentNode:e),cr(function(){Bo(n,p,r,t)}),p}function Ho(e,n,r,t,o){var l=r._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var c=o;o=function(){var p=Ao(i);c.call(p)}}Bo(n,i,e,o)}else i=Lf(r,n,e,o,t);return Ao(i)}Ta=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=Jr(n.pendingLanes);r!==0&&(ml(n,r|1),We(n,ye()),(J&6)===0&&(Br=ye()+500,An()))}break;case 13:cr(function(){var t=zn(e,1);if(t!==null){var o=De();pn(t,e,1,o)}}),Vi(e,1)}},hl=function(e){if(e.tag===13){var n=zn(e,134217728);if(n!==null){var r=De();pn(n,e,134217728,r)}Vi(e,134217728)}},Ra=function(e){if(e.tag===13){var n=Kn(e),r=zn(e,n);if(r!==null){var t=De();pn(r,e,n,t)}Vi(e,n)}},La=function(){return oe},Oa=function(e,n){var r=oe;try{return oe=e,n()}finally{oe=r}},al=function(e,n,r){switch(n){case"input":if(qo(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var t=r[n];if(t!==e&&t.form===e.form){var o=io(t);if(!o)throw Error(s(90));ta(t),qo(t,o)}}}break;case"textarea":sa(e,r);break;case"select":n=r.value,n!=null&&vr(e,!!r.multiple,n,!1)}},va=Ii,ya=cr;var Of={usingClientEntryPoint:!1,Events:[ht,zr,io,ha,ga,Ii]},_t={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mf={bundleType:_t.bundleType,version:_t.version,rendererPackageName:_t.rendererPackageName,rendererConfig:_t.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sa(e),e===null?null:e.stateNode},findFiberByHostInstance:_t.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{At=$o.inject(Mf),vn=$o}catch{}}return He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Of,He.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hi(n))throw Error(s(200));return Tf(e,n,null,r)},He.createRoot=function(e,n){if(!Hi(e))throw Error(s(299));var r=!1,t="",o=Gu;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Ai(e,1,!1,null,null,r,!1,t,o),e[En]=n.current,ft(e.nodeType===8?e.parentNode:e),new Wi(n)},He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Sa(n),e=e===null?null:e.stateNode,e},He.flushSync=function(e){return cr(e)},He.hydrate=function(e,n,r){if(!Wo(n))throw Error(s(200));return Ho(null,e,n,!0,r)},He.hydrateRoot=function(e,n,r){if(!Hi(e))throw Error(s(405));var t=r!=null&&r.hydratedSources||null,o=!1,l="",i=Gu;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),n=Ku(n,null,e,1,r??null,o,!1,l,i),e[En]=n.current,ft(e),t)for(e=0;e<t.length;e++)r=t[e],o=r._getVersion,o=o(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,o]:n.mutableSourceEagerHydrationData.push(r,o);return new Vo(n)},He.render=function(e,n,r){if(!Wo(n))throw Error(s(200));return Ho(null,e,n,!1,r)},He.unmountComponentAtNode=function(e){if(!Wo(e))throw Error(s(40));return e._reactRootContainer?(cr(function(){Ho(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1},He.unstable_batchedUpdates=Ii,He.unstable_renderSubtreeIntoContainer=function(e,n,r,t){if(!Wo(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ho(e,n,r,!1,t)},He.version="18.3.1-next-f1338f8080-20240426",He}var oc;function Sc(){if(oc)return Ki.exports;oc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(d){console.error(d)}}return a(),Ki.exports=Wf(),Ki.exports}var lc;function Hf(){if(lc)return Qo;lc=1;var a=Sc();return Qo.createRoot=a.createRoot,Qo.hydrateRoot=a.hydrateRoot,Qo}var $f=Hf();const Qf=wc($f);Sc();/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rt(){return Rt=Object.assign?Object.assign.bind():function(a){for(var d=1;d<arguments.length;d++){var s=arguments[d];for(var f in s)({}).hasOwnProperty.call(s,f)&&(a[f]=s[f])}return a},Rt.apply(null,arguments)}var Zn;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(Zn||(Zn={}));const ic="popstate";function Kf(a){a===void 0&&(a={});function d(y,w){let{pathname:k="/",search:P="",hash:S=""}=mr(y.location.hash.substr(1));return!k.startsWith("/")&&!k.startsWith(".")&&(k="/"+k),Ji("",{pathname:k,search:P,hash:S},w.state&&w.state.usr||null,w.state&&w.state.key||"default")}function s(y,w){let k=y.document.querySelector("base"),P="";if(k&&k.getAttribute("href")){let S=y.location.href,_=S.indexOf("#");P=_===-1?S:S.slice(0,_)}return P+"#"+(typeof w=="string"?w:Yo(w))}function f(y,w){Go(y.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(w)+")")}return Gf(d,s,f,a)}function ke(a,d){if(a===!1||a===null||typeof a>"u")throw new Error(d)}function Go(a,d){if(!a){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Yf(){return Math.random().toString(36).substr(2,8)}function ac(a,d){return{usr:a.state,key:a.key,idx:d}}function Ji(a,d,s,f){return s===void 0&&(s=null),Rt({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof d=="string"?mr(d):d,{state:s,key:d&&d.key||f||Yf()})}function Yo(a){let{pathname:d="/",search:s="",hash:f=""}=a;return s&&s!=="?"&&(d+=s.charAt(0)==="?"?s:"?"+s),f&&f!=="#"&&(d+=f.charAt(0)==="#"?f:"#"+f),d}function mr(a){let d={};if(a){let s=a.indexOf("#");s>=0&&(d.hash=a.substr(s),a=a.substr(0,s));let f=a.indexOf("?");f>=0&&(d.search=a.substr(f),a=a.substr(0,f)),a&&(d.pathname=a)}return d}function Gf(a,d,s,f){f===void 0&&(f={});let{window:y=document.defaultView,v5Compat:w=!1}=f,k=y.history,P=Zn.Pop,S=null,_=I();_==null&&(_=0,k.replaceState(Rt({},k.state,{idx:_}),""));function I(){return(k.state||{idx:null}).idx}function T(){P=Zn.Pop;let L=I(),le=L==null?null:L-_;_=L,S&&S({action:P,location:H.location,delta:le})}function A(L,le){P=Zn.Push;let ie=Ji(H.location,L,le);s&&s(ie,L),_=I()+1;let re=ac(ie,_),ae=H.createHref(ie);try{k.pushState(re,"",ae)}catch(je){if(je instanceof DOMException&&je.name==="DataCloneError")throw je;y.location.assign(ae)}w&&S&&S({action:P,location:H.location,delta:1})}function ne(L,le){P=Zn.Replace;let ie=Ji(H.location,L,le);s&&s(ie,L),_=I();let re=ac(ie,_),ae=H.createHref(ie);k.replaceState(re,"",ae),w&&S&&S({action:P,location:H.location,delta:0})}function X(L){let le=y.location.origin!=="null"?y.location.origin:y.location.href,ie=typeof L=="string"?L:Yo(L);return ie=ie.replace(/ $/,"%20"),ke(le,"No window.location.(origin|href) available to create URL for href: "+ie),new URL(ie,le)}let H={get action(){return P},get location(){return a(y,k)},listen(L){if(S)throw new Error("A history only accepts one active listener");return y.addEventListener(ic,T),S=L,()=>{y.removeEventListener(ic,T),S=null}},createHref(L){return d(y,L)},createURL:X,encodeLocation(L){let le=X(L);return{pathname:le.pathname,search:le.search,hash:le.hash}},push:A,replace:ne,go(L){return k.go(L)}};return H}var sc;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(sc||(sc={}));function Xf(a,d,s){return s===void 0&&(s="/"),Jf(a,d,s)}function Jf(a,d,s,f){let y=typeof d=="string"?mr(d):d,w=na(y.pathname||"/",s);if(w==null)return null;let k=Ec(a);Zf(k);let P=null,S=cp(w);for(let _=0;P==null&&_<k.length;++_)P=ap(k[_],S);return P}function Ec(a,d,s,f){d===void 0&&(d=[]),s===void 0&&(s=[]),f===void 0&&(f="");let y=(w,k,P)=>{let S={relativePath:P===void 0?w.path||"":P,caseSensitive:w.caseSensitive===!0,childrenIndex:k,route:w};S.relativePath.startsWith("/")&&(ke(S.relativePath.startsWith(f),'Absolute route path "'+S.relativePath+'" nested under path '+('"'+f+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),S.relativePath=S.relativePath.slice(f.length));let _=qn([f,S.relativePath]),I=s.concat(S);w.children&&w.children.length>0&&(ke(w.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),Ec(w.children,d,I,_)),!(w.path==null&&!w.index)&&d.push({path:_,score:lp(_,w.index),routesMeta:I})};return a.forEach((w,k)=>{var P;if(w.path===""||!((P=w.path)!=null&&P.includes("?")))y(w,k);else for(let S of jc(w.path))y(w,k,S)}),d}function jc(a){let d=a.split("/");if(d.length===0)return[];let[s,...f]=d,y=s.endsWith("?"),w=s.replace(/\?$/,"");if(f.length===0)return y?[w,""]:[w];let k=jc(f.join("/")),P=[];return P.push(...k.map(S=>S===""?w:[w,S].join("/"))),y&&P.push(...k),P.map(S=>a.startsWith("/")&&S===""?"/":S)}function Zf(a){a.sort((d,s)=>d.score!==s.score?s.score-d.score:ip(d.routesMeta.map(f=>f.childrenIndex),s.routesMeta.map(f=>f.childrenIndex)))}const qf=/^:[\w-]+$/,ep=3,np=2,rp=1,tp=10,op=-2,uc=a=>a==="*";function lp(a,d){let s=a.split("/"),f=s.length;return s.some(uc)&&(f+=op),d&&(f+=np),s.filter(y=>!uc(y)).reduce((y,w)=>y+(qf.test(w)?ep:w===""?rp:tp),f)}function ip(a,d){return a.length===d.length&&a.slice(0,-1).every((f,y)=>f===d[y])?a[a.length-1]-d[d.length-1]:0}function ap(a,d,s){let{routesMeta:f}=a,y={},w="/",k=[];for(let P=0;P<f.length;++P){let S=f[P],_=P===f.length-1,I=w==="/"?d:d.slice(w.length)||"/",T=sp({path:S.relativePath,caseSensitive:S.caseSensitive,end:_},I),A=S.route;if(!T)return null;Object.assign(y,T.params),k.push({params:y,pathname:qn([w,T.pathname]),pathnameBase:hp(qn([w,T.pathnameBase])),route:A}),T.pathnameBase!=="/"&&(w=qn([w,T.pathnameBase]))}return k}function sp(a,d){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[s,f]=up(a.path,a.caseSensitive,a.end),y=d.match(s);if(!y)return null;let w=y[0],k=w.replace(/(.)\/+$/,"$1"),P=y.slice(1);return{params:f.reduce((_,I,T)=>{let{paramName:A,isOptional:ne}=I;if(A==="*"){let H=P[T]||"";k=w.slice(0,w.length-H.length).replace(/(.)\/+$/,"$1")}const X=P[T];return ne&&!X?_[A]=void 0:_[A]=(X||"").replace(/%2F/g,"/"),_},{}),pathname:w,pathnameBase:k,pattern:a}}function up(a,d,s){d===void 0&&(d=!1),s===void 0&&(s=!0),Go(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let f=[],y="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(k,P,S)=>(f.push({paramName:P,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(f.push({paramName:"*"}),y+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?y+="\\/*$":a!==""&&a!=="/"&&(y+="(?:(?=\\/|$))"),[new RegExp(y,d?void 0:"i"),f]}function cp(a){try{return a.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Go(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+d+").")),a}}function na(a,d){if(d==="/")return a;if(!a.toLowerCase().startsWith(d.toLowerCase()))return null;let s=d.endsWith("/")?d.length-1:d.length,f=a.charAt(s);return f&&f!=="/"?null:a.slice(s)||"/"}const dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fp=a=>dp.test(a);function pp(a,d){d===void 0&&(d="/");let{pathname:s,search:f="",hash:y=""}=typeof a=="string"?mr(a):a,w;if(s)if(fp(s))w=s;else{if(s.includes("//")){let k=s;s=zc(s),Go(!1,"Pathnames cannot have embedded double slashes - normalizing "+(k+" -> "+s))}s.startsWith("/")?w=cc(s.substring(1),"/"):w=cc(s,d)}else w=d;return{pathname:w,search:gp(f),hash:vp(y)}}function cc(a,d){let s=d.replace(/\/+$/,"").split("/");return a.split("/").forEach(y=>{y===".."?s.length>1&&s.pop():y!=="."&&s.push(y)}),s.length>1?s.join("/"):"/"}function Xi(a,d,s,f){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+d+"` field ["+JSON.stringify(f)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mp(a){return a.filter((d,s)=>s===0||d.route.path&&d.route.path.length>0)}function Cc(a,d){let s=mp(a);return d?s.map((f,y)=>y===s.length-1?f.pathname:f.pathnameBase):s.map(f=>f.pathnameBase)}function Nc(a,d,s,f){f===void 0&&(f=!1);let y;typeof a=="string"?y=mr(a):(y=Rt({},a),ke(!y.pathname||!y.pathname.includes("?"),Xi("?","pathname","search",y)),ke(!y.pathname||!y.pathname.includes("#"),Xi("#","pathname","hash",y)),ke(!y.search||!y.search.includes("#"),Xi("#","search","hash",y)));let w=a===""||y.pathname==="",k=w?"/":y.pathname,P;if(k==null)P=s;else{let T=d.length-1;if(!f&&k.startsWith("..")){let A=k.split("/");for(;A[0]==="..";)A.shift(),T-=1;y.pathname=A.join("/")}P=T>=0?d[T]:"/"}let S=pp(y,P),_=k&&k!=="/"&&k.endsWith("/"),I=(w||k===".")&&s.endsWith("/");return!S.pathname.endsWith("/")&&(_||I)&&(S.pathname+="/"),S}const zc=a=>a.replace(/\/\/+/g,"/"),qn=a=>zc(a.join("/")),hp=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),gp=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,vp=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function yp(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const Pc=["post","put","patch","delete"];new Set(Pc);const xp=["get",...Pc];new Set(xp);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lt(){return Lt=Object.assign?Object.assign.bind():function(a){for(var d=1;d<arguments.length;d++){var s=arguments[d];for(var f in s)({}).hasOwnProperty.call(s,f)&&(a[f]=s[f])}return a},Lt.apply(null,arguments)}const ra=R.createContext(null),wp=R.createContext(null),hr=R.createContext(null),Xo=R.createContext(null),gr=R.createContext({outlet:null,matches:[],isDataRoute:!1}),_c=R.createContext(null);function kp(a,d){let{relative:s}=d===void 0?{}:d;Ot()||ke(!1);let{basename:f,navigator:y}=R.useContext(hr),{hash:w,pathname:k,search:P}=Lc(a,{relative:s}),S=k;return f!=="/"&&(S=k==="/"?f:qn([f,k])),y.createHref({pathname:S,search:P,hash:w})}function Ot(){return R.useContext(Xo)!=null}function Vr(){return Ot()||ke(!1),R.useContext(Xo).location}function Tc(a){R.useContext(hr).static||R.useLayoutEffect(a)}function Rc(){let{isDataRoute:a}=R.useContext(gr);return a?Mp():Sp()}function Sp(){Ot()||ke(!1);let a=R.useContext(ra),{basename:d,future:s,navigator:f}=R.useContext(hr),{matches:y}=R.useContext(gr),{pathname:w}=Vr(),k=JSON.stringify(Cc(y,s.v7_relativeSplatPath)),P=R.useRef(!1);return Tc(()=>{P.current=!0}),R.useCallback(function(_,I){if(I===void 0&&(I={}),!P.current)return;if(typeof _=="number"){f.go(_);return}let T=Nc(_,JSON.parse(k),w,I.relative==="path");a==null&&d!=="/"&&(T.pathname=T.pathname==="/"?d:qn([d,T.pathname])),(I.replace?f.replace:f.push)(T,I.state,I)},[d,f,k,w,a])}function Lc(a,d){let{relative:s}=d===void 0?{}:d,{future:f}=R.useContext(hr),{matches:y}=R.useContext(gr),{pathname:w}=Vr(),k=JSON.stringify(Cc(y,f.v7_relativeSplatPath));return R.useMemo(()=>Nc(a,JSON.parse(k),w,s==="path"),[a,k,w,s])}function Ep(a,d){return jp(a,d)}function jp(a,d,s,f){Ot()||ke(!1);let{navigator:y}=R.useContext(hr),{matches:w}=R.useContext(gr),k=w[w.length-1],P=k?k.params:{};k&&k.pathname;let S=k?k.pathnameBase:"/";k&&k.route;let _=Vr(),I;if(d){var T;let L=typeof d=="string"?mr(d):d;S==="/"||(T=L.pathname)!=null&&T.startsWith(S)||ke(!1),I=L}else I=_;let A=I.pathname||"/",ne=A;if(S!=="/"){let L=S.replace(/^\//,"").split("/");ne="/"+A.replace(/^\//,"").split("/").slice(L.length).join("/")}let X=Xf(a,{pathname:ne}),H=_p(X&&X.map(L=>Object.assign({},L,{params:Object.assign({},P,L.params),pathname:qn([S,y.encodeLocation?y.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?S:qn([S,y.encodeLocation?y.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),w,s,f);return d&&H?R.createElement(Xo.Provider,{value:{location:Lt({pathname:"/",search:"",hash:"",state:null,key:"default"},I),navigationType:Zn.Pop}},H):H}function Cp(){let a=Op(),d=yp(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),s=a instanceof Error?a.stack:null,y={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},d),s?R.createElement("pre",{style:y},s):null,null)}const Np=R.createElement(Cp,null);class zp extends R.Component{constructor(d){super(d),this.state={location:d.location,revalidation:d.revalidation,error:d.error}}static getDerivedStateFromError(d){return{error:d}}static getDerivedStateFromProps(d,s){return s.location!==d.location||s.revalidation!=="idle"&&d.revalidation==="idle"?{error:d.error,location:d.location,revalidation:d.revalidation}:{error:d.error!==void 0?d.error:s.error,location:s.location,revalidation:d.revalidation||s.revalidation}}componentDidCatch(d,s){console.error("React Router caught the following error during render",d,s)}render(){return this.state.error!==void 0?R.createElement(gr.Provider,{value:this.props.routeContext},R.createElement(_c.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pp(a){let{routeContext:d,match:s,children:f}=a,y=R.useContext(ra);return y&&y.static&&y.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(y.staticContext._deepestRenderedBoundaryId=s.route.id),R.createElement(gr.Provider,{value:d},f)}function _p(a,d,s,f){var y;if(d===void 0&&(d=[]),s===void 0&&(s=null),f===void 0&&(f=null),a==null){var w;if(!s)return null;if(s.errors)a=s.matches;else if((w=f)!=null&&w.v7_partialHydration&&d.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let k=a,P=(y=s)==null?void 0:y.errors;if(P!=null){let I=k.findIndex(T=>T.route.id&&(P==null?void 0:P[T.route.id])!==void 0);I>=0||ke(!1),k=k.slice(0,Math.min(k.length,I+1))}let S=!1,_=-1;if(s&&f&&f.v7_partialHydration)for(let I=0;I<k.length;I++){let T=k[I];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(_=I),T.route.id){let{loaderData:A,errors:ne}=s,X=T.route.loader&&A[T.route.id]===void 0&&(!ne||ne[T.route.id]===void 0);if(T.route.lazy||X){S=!0,_>=0?k=k.slice(0,_+1):k=[k[0]];break}}}return k.reduceRight((I,T,A)=>{let ne,X=!1,H=null,L=null;s&&(ne=P&&T.route.id?P[T.route.id]:void 0,H=T.route.errorElement||Np,S&&(_<0&&A===0?(Ip("route-fallback"),X=!0,L=null):_===A&&(X=!0,L=T.route.hydrateFallbackElement||null)));let le=d.concat(k.slice(0,A+1)),ie=()=>{let re;return ne?re=H:X?re=L:T.route.Component?re=R.createElement(T.route.Component,null):T.route.element?re=T.route.element:re=I,R.createElement(Pp,{match:T,routeContext:{outlet:I,matches:le,isDataRoute:s!=null},children:re})};return s&&(T.route.ErrorBoundary||T.route.errorElement||A===0)?R.createElement(zp,{location:s.location,revalidation:s.revalidation,component:H,error:ne,children:ie(),routeContext:{outlet:null,matches:le,isDataRoute:!0}}):ie()},null)}var Oc=(function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a})(Oc||{}),Mc=(function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a})(Mc||{});function Tp(a){let d=R.useContext(ra);return d||ke(!1),d}function Rp(a){let d=R.useContext(wp);return d||ke(!1),d}function Lp(a){let d=R.useContext(gr);return d||ke(!1),d}function Ic(a){let d=Lp(),s=d.matches[d.matches.length-1];return s.route.id||ke(!1),s.route.id}function Op(){var a;let d=R.useContext(_c),s=Rp(),f=Ic();return d!==void 0?d:(a=s.errors)==null?void 0:a[f]}function Mp(){let{router:a}=Tp(Oc.UseNavigateStable),d=Ic(Mc.UseNavigateStable),s=R.useRef(!1);return Tc(()=>{s.current=!0}),R.useCallback(function(y,w){w===void 0&&(w={}),s.current&&(typeof y=="number"?a.navigate(y):a.navigate(y,Lt({fromRouteId:d},w)))},[a,d])}const dc={};function Ip(a,d,s){dc[a]||(dc[a]=!0)}function Dp(a,d){a==null||a.v7_startTransition,a==null||a.v7_relativeSplatPath}function Jn(a){ke(!1)}function bp(a){let{basename:d="/",children:s=null,location:f,navigationType:y=Zn.Pop,navigator:w,static:k=!1,future:P}=a;Ot()&&ke(!1);let S=d.replace(/^\/*/,"/"),_=R.useMemo(()=>({basename:S,navigator:w,static:k,future:Lt({v7_relativeSplatPath:!1},P)}),[S,P,w,k]);typeof f=="string"&&(f=mr(f));let{pathname:I="/",search:T="",hash:A="",state:ne=null,key:X="default"}=f,H=R.useMemo(()=>{let L=na(I,S);return L==null?null:{location:{pathname:L,search:T,hash:A,state:ne,key:X},navigationType:y}},[S,I,T,A,ne,X,y]);return H==null?null:R.createElement(hr.Provider,{value:_},R.createElement(Xo.Provider,{children:s,value:H}))}function Fp(a){let{children:d,location:s}=a;return Ep(Zi(d),s)}new Promise(()=>{});function Zi(a,d){d===void 0&&(d=[]);let s=[];return R.Children.forEach(a,(f,y)=>{if(!R.isValidElement(f))return;let w=[...d,y];if(f.type===R.Fragment){s.push.apply(s,Zi(f.props.children,w));return}f.type!==Jn&&ke(!1),!f.props.index||!f.props.children||ke(!1);let k={id:f.props.id||w.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,loader:f.props.loader,action:f.props.action,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(k.children=Zi(f.props.children,w)),s.push(k)}),s}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(a){for(var d=1;d<arguments.length;d++){var s=arguments[d];for(var f in s)({}).hasOwnProperty.call(s,f)&&(a[f]=s[f])}return a},qi.apply(null,arguments)}function Up(a,d){if(a==null)return{};var s={};for(var f in a)if({}.hasOwnProperty.call(a,f)){if(d.indexOf(f)!==-1)continue;s[f]=a[f]}return s}function Bp(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Ap(a,d){return a.button===0&&(!d||d==="_self")&&!Bp(a)}const Vp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Wp="6";try{window.__reactRouterVersion=Wp}catch{}const Hp="startTransition",fc=Bf[Hp];function $p(a){let{basename:d,children:s,future:f,window:y}=a,w=R.useRef();w.current==null&&(w.current=Kf({window:y,v5Compat:!0}));let k=w.current,[P,S]=R.useState({action:k.action,location:k.location}),{v7_startTransition:_}=f||{},I=R.useCallback(T=>{_&&fc?fc(()=>S(T)):S(T)},[S,_]);return R.useLayoutEffect(()=>k.listen(I),[k,I]),R.useEffect(()=>Dp(f),[f]),R.createElement(bp,{basename:d,children:s,location:P.location,navigationType:P.action,navigator:k,future:f})}const Qp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ko=R.forwardRef(function(d,s){let{onClick:f,relative:y,reloadDocument:w,replace:k,state:P,target:S,to:_,preventScrollReset:I,viewTransition:T}=d,A=Up(d,Vp),{basename:ne}=R.useContext(hr),X,H=!1;if(typeof _=="string"&&Kp.test(_)&&(X=_,Qp))try{let re=new URL(window.location.href),ae=_.startsWith("//")?new URL(re.protocol+_):new URL(_),je=na(ae.pathname,ne);ae.origin===re.origin&&je!=null?_=je+ae.search+ae.hash:H=!0}catch{}let L=kp(_,{relative:y}),le=Yp(_,{replace:k,state:P,target:S,preventScrollReset:I,relative:y,viewTransition:T});function ie(re){f&&f(re),re.defaultPrevented||le(re)}return R.createElement("a",qi({},A,{href:X||L,onClick:H||w?f:ie,ref:s,target:S}))});var pc;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(pc||(pc={}));var mc;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(mc||(mc={}));function Yp(a,d){let{target:s,replace:f,state:y,preventScrollReset:w,relative:k,viewTransition:P}=d===void 0?{}:d,S=Rc(),_=Vr(),I=Lc(a,{relative:k});return R.useCallback(T=>{if(Ap(T,s)){T.preventDefault();let A=f!==void 0?f:Yo(_)===Yo(I);S(a,{replace:A,state:y,preventScrollReset:w,relative:k,viewTransition:P})}},[_,S,I,f,y,s,a,w,k,P])}function Je(a){const s=String(a).replace(/^\/+/,"");return"./".endsWith("/")?"./"+s:".//"+s}function Mt(){const a=Vr(),d=Rc();function s(f,y){var w;f.preventDefault(),a.pathname==="/"?(w=document.getElementById(y))==null||w.scrollIntoView({behavior:"smooth"}):d("/",{state:{scrollTo:y}})}return u.jsx("nav",{children:u.jsxs("div",{className:"nav-inner",children:[u.jsxs(Ko,{to:"/",className:"nav-brand",onClick:()=>{a.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"})},children:[u.jsx("img",{src:Je("Logo.png"),alt:"Logo",className:"nav-logo-img",onError:f=>{f.currentTarget.style.display="none"}}),u.jsxs("div",{className:"nav-logo",children:[u.jsx("span",{className:"sol",children:"SOL"}),u.jsx("span",{className:"invictus",children:"INVICTUS"}),u.jsx("span",{className:"dynamics-tag",children:"[Dynamics]"})]})]}),u.jsxs("ul",{className:"nav-links",children:[u.jsx("li",{children:u.jsx("a",{href:"#car",onClick:f=>s(f,"car"),children:"The Car"})}),u.jsx("li",{children:u.jsx("a",{href:"#mission",onClick:f=>s(f,"mission"),children:"Our Mission"})}),u.jsx("li",{children:u.jsx("a",{href:"#universities",onClick:f=>s(f,"universities"),children:"Universities"})}),u.jsx("li",{children:u.jsx(Ko,{to:"/team",children:"Team"})}),u.jsx("li",{children:u.jsx(Ko,{to:"/sponsors",children:"Sponsors"})}),u.jsx("li",{children:u.jsx("a",{href:"#goals",onClick:f=>s(f,"goals"),children:"Goals"})}),u.jsx("li",{children:u.jsx("a",{href:"#contact",onClick:f=>s(f,"contact"),children:"Contact"})})]})]})})}function Dc(){return u.jsxs("footer",{children:[u.jsxs("div",{className:"footer-logo",children:[u.jsx("span",{className:"sol",children:"SOL"}),u.jsx("span",{className:"invictus",children:"INVICTUS"})," ",u.jsx("span",{className:"dynamics-tag",children:"[Dynamics]"})]}),u.jsx("p",{children:"Sasol Solar Car Challenge — SOL-1 — Unconquered by the Sun"}),u.jsx("p",{className:"sasol-tag",children:"Powered by Renewable Energy • Built by Students • Racing for the Future"})]})}function Wr(a,d){R.useLayoutEffect(()=>{const s=Array.isArray(d)?d.join(`
`):d,f=document.createElement("style");return f.setAttribute("data-page",a),f.textContent=s,document.head.appendChild(f),()=>{f.parentNode&&f.parentNode.removeChild(f)}},[a])}function Hr(a){R.useLayoutEffect(()=>{a&&(document.title=a)},[a])}const Gp=[{icon:"📧",title:"Email",value:"teammanager@solinvictus.org.za",action:"mailto:teammanager@solinvictus.org.za",buttonText:"Send Email",buttonClass:"contact-link mailto"},{icon:"📱",title:"Phone",value:"+27 (0) 72 385 9447",action:"tel:+27723859447",buttonText:"Call Us",buttonClass:"contact-link phone"}],Jo=`\r
*\r
{\r
        margin: 0;\r
        padding: 0;\r
        box-sizing: border-box;\r
      }\r
      :root {\r
        --sol-gold: #ffca2f;\r
        --deep-navy: #004987;\r
        --maroon: #8b1526;\r
        --charcoal: #1f2128;\r
        --white: #ffffff;\r
        --mid: #4b4f58;\r
        --light: #ffffff;\r
      }\r
      html {\r
        scroll-behavior: smooth;\r
      }\r
      body {\r
        font-family: "Inter", sans-serif;\r
        background: var(--white);\r
        color: var(--charcoal);\r
        line-height: 1.6;\r
      }\r
      h1,\r
      h2,\r
      h3 {\r
        font-family: "Orbitron", sans-serif;\r
        text-transform: uppercase;\r
      }\r
      .dynamics-tag {\r
        font-family: "Roboto Mono", monospace;\r
        font-weight: 500;\r
      }\r
\r
      /* NAV */\r
      nav {\r
        position: fixed;\r
        top: 0;\r
        width: 100%;\r
        z-index: 100;\r
        background: rgba(255, 255, 255, 0.95);\r
        backdrop-filter: blur(10px);\r
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);\r
        padding: 0 5%;\r
      }\r
      .nav-inner {\r
        display: flex;\r
        align-items: center;\r
        justify-content: space-between;\r
        height: 90px;\r
        max-width: 1400px;\r
        margin: 0 auto;\r
      }\r
      .nav-brand {\r
        display: flex;\r
        align-items: center;\r
        gap: 15px;\r
        text-decoration: none;\r
      }\r
      .nav-logo-img {\r
        height: 65px;\r
        object-fit: contain;\r
      }\r
      .nav-logo {\r
        font-size: 1.4rem;\r
        font-weight: 700;\r
        letter-spacing: 1px;\r
        color: var(--charcoal);\r
        display: flex;\r
        align-items: center;\r
        gap: 6px;\r
      }\r
      .nav-logo .sol {\r
        color: var(--sol-gold);\r
      }\r
      .nav-logo .invictus {\r
        color: var(--charcoal);\r
      }\r
      .nav-logo .dynamics-tag {\r
        color: var(--charcoal);\r
        font-size: 1rem;\r
        letter-spacing: 0;\r
      }\r
      .nav-links {\r
        display: flex;\r
        gap: 2rem;\r
        list-style: none;\r
      }\r
      .nav-links a {\r
        color: var(--mid);\r
        text-decoration: none;\r
        font-size: 0.85rem;\r
        letter-spacing: 1.5px;\r
        text-transform: uppercase;\r
        transition: color 0.3s;\r
        font-weight: 600;\r
      }\r
      .nav-links a:hover {\r
        color: var(--sol-gold);\r
      }\r
\r
      /* HERO */\r
      #hero {\r
        min-height: 100vh;\r
        display: flex;\r
        align-items: center;\r
        justify-content: center;\r
        text-align: center;\r
        position: relative;\r
        overflow: hidden;\r
        padding: 120px 5% 60px;\r
        background: var(--white);\r
      }\r
      .hero-bg {\r
        position: absolute;\r
        inset: 0;\r
        background: url('data:image/svg+xml;utf8,<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M20 0l20 10v20l-20 10L0 30V10z" fill="none" stroke="rgba(31,33,40,0.03)"/></svg>')\r
          repeat;\r
      }\r
      .hero-content {\r
        position: relative;\r
        z-index: 2;\r
        max-width: 900px;\r
      }\r
      .hero-logo-large {\r
        max-width: 350px;\r
        margin: 0 auto 2.5rem;\r
        display: block;\r
      }\r
      .hero-eyebrow {\r
        font-family: "Roboto Mono", monospace;\r
        font-size: 0.9rem;\r
        font-weight: 500;\r
        letter-spacing: 4px;\r
        text-transform: uppercase;\r
        color: var(--deep-navy);\r
        margin-bottom: 1.5rem;\r
      }\r
      .hero-title {\r
        font-size: clamp(2.5rem, 6vw, 5rem);\r
        font-weight: 900;\r
        letter-spacing: -1px;\r
        line-height: 1.1;\r
        margin-bottom: 1rem;\r
        color: var(--charcoal);\r
      }\r
      .hero-title .sol {\r
        color: var(--sol-gold);\r
      }\r
      .hero-title .dynamics-tag {\r
        color: var(--charcoal);\r
        font-size: clamp(1.2rem, 3vw, 2rem);\r
        display: inline-block;\r
        vertical-align: middle;\r
        margin-left: 10px;\r
      }\r
      .hero-sub {\r
        font-size: clamp(1rem, 2vw, 1.2rem);\r
        color: var(--mid);\r
        margin-bottom: 2.5rem;\r
        letter-spacing: 1px;\r
        font-weight: 400;\r
      }\r
      .hero-cta {\r
        display: inline-block;\r
        background: var(--sol-gold);\r
        color: var(--charcoal);\r
        padding: 1rem 2.5rem;\r
        font-weight: 700;\r
        font-size: 0.9rem;\r
        letter-spacing: 1px;\r
        text-transform: uppercase;\r
        text-decoration: none;\r
        transition: all 0.3s;\r
      }\r
      .hero-cta:hover {\r
        background: var(--charcoal);\r
        color: var(--sol-gold);\r
        box-shadow: 0 8px 24px var(--sol-gold);\r
      }\r
\r
      /* CAR SHOWCASE */\r
      #car {\r
        padding: 100px 5%;\r
        background: var(--light);\r
        position: relative;\r
      }\r
      .car-bg {\r
        position: absolute;\r
        inset: 0;\r
        background: repeating-linear-gradient(\r
          45deg,\r
          transparent,\r
          transparent 10px,\r
          rgba(0, 0, 0, 0.01) 10px,\r
          rgba(0, 0, 0, 0.01) 20px\r
        );\r
      }\r
      .car-inner {\r
        max-width: 1200px;\r
        margin: 0 auto;\r
        display: grid;\r
        grid-template-columns: 1fr 1fr;\r
        gap: 4rem;\r
        align-items: center;\r
        position: relative;\r
        z-index: 2;\r
      }\r
      .car-img-wrap {\r
        position: relative;\r
      }\r
      .car-img-wrap img {\r
        width: 100%;\r
        border-radius: 2px;\r
        display: block;\r
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\r
      }\r
      .car-info .section-tag {\r
        font-family: "Roboto Mono", monospace;\r
        font-size: 0.85rem;\r
        letter-spacing: 2px;\r
        text-transform: uppercase;\r
        color: var(--deep-navy);\r
        margin-bottom: 1rem;\r
      }\r
      .car-info h2 {\r
        font-size: clamp(2rem, 4vw, 3.5rem);\r
        font-weight: 700;\r
        line-height: 1.1;\r
        margin-bottom: 1.5rem;\r
      }\r
      .car-info p {\r
        color: var(--mid);\r
        margin-bottom: 2rem;\r
        font-size: 1rem;\r
      }\r
      .car-specs {\r
        display: grid;\r
        grid-template-columns: 1fr 1fr;\r
        gap: 1.5rem;\r
      }\r
      .spec {\r
        border-left: 3px solid var(--maroon);\r
        padding-left: 1rem;\r
      }\r
      .spec-val {\r
        font-family: "Orbitron", sans-serif;\r
        font-size: 1.4rem;\r
        font-weight: 700;\r
        color: var(--charcoal);\r
      }\r
      .spec-label {\r
        font-family: "Roboto Mono", monospace;\r
        font-size: 0.7rem;\r
        letter-spacing: 1px;\r
        text-transform: uppercase;\r
        color: var(--mid);\r
        font-weight: 500;\r
        margin-top: 0.2rem;\r
      }\r
\r
      /* SECTION COMMONS */\r
      section {\r
        padding: 100px 5%;\r
      }\r
      .section-center {\r
        max-width: 1200px;\r
        margin: 0 auto;\r
        position: relative;\r
        z-index: 2;\r
      }\r
      .section-header {\r
        text-align: center;\r
        margin-bottom: 5rem;\r
      }\r
      .section-tag {\r
        font-family: "Roboto Mono", monospace;\r
        font-size: 0.9rem;\r
        font-weight: 500;\r
        letter-spacing: 2px;\r
        text-transform: uppercase;\r
        color: var(--deep-navy);\r
        margin-bottom: 1rem;\r
        display: block;\r
      }\r
      .section-header h2 {\r
        font-size: clamp(2rem, 4vw, 3rem);\r
        font-weight: 700;\r
        margin-bottom: 1rem;\r
      }\r
      .section-header p {\r
        color: var(--mid);\r
        max-width: 600px;\r
        margin: 0 auto;\r
      }\r
      .divider {\r
        width: 60px;\r
        height: 4px;\r
        background: var(--sol-gold);\r
        margin: 1.5rem auto 0;\r
      }\r
\r
      /* MISSION */\r
      #mission {\r
        background: var(--white);\r
      }\r
      .pillars {\r
        display: grid;\r
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\r
        gap: 2rem;\r
      }\r
      .pillar {\r
        background: var(--light);\r
        border: 3px solid #000000d3;\r
        padding: 2.5rem;\r
        transition: transform 0.3s;\r
        position: relative;\r
        overflow: hidden;\r
      }\r
      .pillar::before {\r
        content: "";\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 4px;\r
        background: var(--deep-navy);\r
        transform: scaleX(0);\r
        transform-origin: left;\r
        transition: transform 0.3s;\r
      }\r
      .pillar:hover {\r
        transform: translateY(-5px);\r
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\r
      }\r
      .pillar:hover::before {\r
        transform: scaleX(1);\r
      }\r
      .pillar-num {\r
        font-family: "Orbitron", sans-serif;\r
        font-size: 3.5rem;\r
        font-weight: 900;\r
        color: rgba(31, 33, 40, 0.05);\r
        line-height: 1;\r
        margin-bottom: 1rem;\r
        position: absolute;\r
        top: 1rem;\r
        right: 1rem;\r
      }\r
      .pillar h3 {\r
        font-size: 1.1rem;\r
        font-weight: 700;\r
        margin-bottom: 0.75rem;\r
      }\r
      .pillar p {\r
        color: var(--mid);\r
        font-size: 0.95rem;\r
      }\r
\r
\r
\r
      /* UNIVERSITIES */\r
      #universities {\r
        background: var(--light);\r
        position: relative;\r
      }\r
\r
      .university-links {\r
        text-decoration: none;\r
        color: var(--charcoal);\r
        transition: color 0.3s;\r
      }\r
\r
      .uni-bg {\r
        position: absolute;\r
        inset: 0;\r
        background: url('data:image/svg+xml;utf8,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M30 0l30 15v30l-30 15L0 45V15z" fill="none" stroke="rgba(31,33,40,0.02)"/></svg>')\r
          repeat;\r
      }\r
      .uni-grid {\r
        display: flex;\r
        flex-wrap: wrap;\r
        justify-content: center;\r
        gap: 2rem;\r
      }\r
      .uni-card {\r
        background: var(--white);\r
        border: 1px solid #e637370d;\r
        padding: 2rem;\r
        text-align: center;\r
        transition: all 0.3s;\r
        display: flex;\r
        flex-direction: column;\r
        align-items: center;\r
        justify-content: center;\r
        min-height: 160px;\r
        width: 220px;\r
      }\r
       .uni-card:hover {\r
        border-color: var(--maroon);\r
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\r
        transform: translateY(-4px);\r
      } */\r
\r
      #belgium-campus-card{\r
        background: var(--white);\r
        border: 1px solid #e637370d;\r
        padding: 2rem;\r
        text-align: center;\r
        transition: all 0.3s;\r
        display: flex;\r
        flex-direction: column;\r
        align-items: center;\r
        justify-content: center;\r
        min-height: 160px;\r
        width: 220px;\r
      }\r
\r
      #belgium-campus-card:hover {\r
        border-color: 0 0 12px ;\r
        box-shadow: -1px 1px 5px 5px #ffca2f;\r
        border-block: 3px #ffca2f solid;\r
        padding-block: 2rem;\r
        font-weight: 500;\r
      }\r
\r
      #ctu-card{\r
        background: var(--white);\r
        border: 1px solid #e637370d;\r
        padding: 2rem;\r
        text-align: center;\r
        transition: all 0.3s;\r
        display: flex;\r
        flex-direction: column;\r
        align-items: center;\r
        justify-content: center;\r
        min-height: 160px;\r
        width: 220px;\r
      }\r
\r
      #ctu-card:hover {\r
        border-color: 0 0 12px #861e2c;\r
        box-shadow: -1px 1px 5px 5px #861e2c;\r
        border-block: 3px #861e2c solid;\r
        padding-block: 2rem;\r
        font-weight: 500;\r
      }\r
\r
      #open-window-card{\r
        background: var(--white);\r
        border: 1px solid rgba(0, 0, 0, 0.05);\r
        padding: 2rem;\r
        text-align: center;\r
        transition: all 0.3s;\r
        display: flex;\r
        flex-direction: column;\r
        align-items: center;\r
        justify-content: center;\r
        min-height: 160px;\r
        width: 220px;\r
      }\r
\r
      #open-window-card:hover {\r
        border-color: 0 0 12px #ff3f00;\r
        box-shadow: -1px 1px 5px 5px #ff3f00;\r
        border-block: 3px #ff3f00 solid;\r
        padding-block: 2rem;\r
        font-weight: 500;\r
      }\r
\r
      #IMM-card{\r
        background: var(--white);\r
        border: 1px solid rgba(0, 0, 0, 0.05);\r
        padding: 2rem;\r
        text-align: center;\r
        transition: all 0.3s;\r
        display: flex;\r
        flex-direction: column;\r
        align-items: center;\r
        justify-content: center;\r
        min-height: 160px;\r
        width: 220px;\r
      }\r
\r
      #IMM-card:hover {\r
        border-color: 0 0 12px #004987;\r
        box-shadow: -1px 1px 5px 5px #004987;\r
        border-block: 3px #004987 solid;\r
        padding-block: 2rem;\r
        font-weight: 500;\r
      }\r
\r
      .uni-card img {\r
        max-width: 100%;\r
        max-height: 80px;\r
        object-fit: contain;\r
        filter: grayscale(100%);\r
        opacity: 0.8;\r
        transition: all 0.3s;\r
      }\r
      .uni-card:hover img {\r
        filter: grayscale(0%);\r
        opacity: 1;\r
      }\r
\r
      #uxi-card {\r
        max-width: 100%;\r
        max-height: 80px;\r
        object-fit: contain;\r
        filter: grayscale(100%);\r
        opacity: 0.8;\r
        transition: all 0.3s;\r
      }\r
\r
        #uxi-card:hover {\r
        filter: grayscale(0%);\r
        opacity: 1;\r
        border-color: 0 0 12px #000000;\r
        box-shadow: -1px 1px 5px 5px #000000;\r
        border-block: 3px #000000 solid;\r
        padding-block: 2rem;\r
        font-weight: 500;\r
        }\r
\r
      .uni-card h3 {\r
        font-family: "Inter", sans-serif;\r
        font-size: 0.9rem;\r
        font-weight: 600;\r
        margin-top: 1.5rem;\r
        color: var(--mid);\r
      }\r
\r
      /* TEAM */\r
      #team {\r
        background: var(--white);\r
      }\r
      .team-grid {\r
        display: grid;\r
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r
        gap: 2.5rem;\r
      }\r
      .member {\r
        text-align: center;\r
      }\r
      .member-photo {\r
        width: 160px;\r
        height: 160px;\r
        margin: 0 auto 1.5rem;\r
        overflow: hidden;\r
        border-bottom: 4px solid var(--maroon);\r
        background: var(--light);\r
        position: relative;\r
      }\r
      .member-photo::after {\r
        content: "";\r
        position: absolute;\r
        inset: 0;\r
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\r
      }\r
      .member-photo img {\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
        display: block;\r
      }\r
      .member h3 {\r
        font-size: 1.1rem;\r
        font-weight: 700;\r
        margin-bottom: 0.3rem;\r
      }\r
      .member-role {\r
        font-family: "Roboto Mono", monospace;\r
        font-size: 0.85rem;\r
        font-weight: 600;\r
        letter-spacing: 1px;\r
        text-transform: uppercase;\r
        color: var(--deep-navy);\r
      }\r
      .member-dept {\r
        font-size: 0.85rem;\r
        color: var(--mid);\r
        margin-top: 0.3rem;\r
      }\r
\r
      /* GOALS */\r
      #goals {\r
        background: var(--light);\r
      }\r
      .goals-grid {\r
        display: grid;\r
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\r
        gap: 2.5rem;\r
      }\r
      .goal {\r
        display: flex;\r
        gap: 1.5rem;\r
        align-items: flex-start;\r
        background: var(--white);\r
        padding: 2rem;\r
        border: 1px solid rgba(0, 0, 0, 0.05);\r
      }\r
      .goal-num {\r
        font-family: "Orbitron", sans-serif;\r
        font-size: 3rem;\r
        font-weight: 900;\r
        color: var(--sol-gold);\r
        line-height: 1;\r
        flex-shrink: 0;\r
        width: 3.5rem;\r
      }\r
      .goal-text h3 {\r
        font-size: 1rem;\r
        font-weight: 700;\r
        margin-bottom: 0.5rem;\r
      }\r
      .goal-text p {\r
        color: var(--mid);\r
        font-size: 0.95rem;\r
      }\r
\r
      /* FOOTER */\r
      footer {\r
        background: var(--charcoal);\r
        color: var(--white);\r
        border-top: 4px solid var(--maroon);\r
        padding: 4rem 5% 2rem;\r
        text-align: center;\r
      }\r
\r
      /* CONTACT */\r
      #contact {\r
        background: var(--white);\r
      }\r
\r
      .contact-grid {\r
        display: grid;\r
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\r
        gap: 2rem;\r
        max-width: 1100px;\r
        margin: 0 auto;\r
      }\r
\r
      .contact-method {\r
        display: flex;\r
        flex-direction: column;\r
        align-items: center;\r
        justify-content: center;\r
        text-align: center;\r
        padding: 2.5rem 2rem;\r
        background: var(--light);\r
        border: 2px solid rgba(31, 33, 40, 0.08);\r
        transition: all 0.3s ease;\r
        position: relative;\r
        overflow: hidden;\r
      }\r
\r
      /* .contact-method::before {\r
        content: "";\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 4px;\r
        background: var(--deep-navy);\r
        transform: scaleX(0);\r
        transform-origin: left;\r
        transition: transform 0.3s ease;\r
      } */\r
\r
      .contact-method:hover {\r
        border-color: var(--sol-gold);\r
        box-shadow: 0 8px 24px rgba(255, 202, 47, 0.15);\r
        transform: translateY(-4px);\r
      }\r
\r
      .contact-method:hover::before {\r
        transform: scaleX(1);\r
      }\r
\r
      .contact-icon {\r
        width: 60px;\r
        height: 60px;\r
        display: flex;\r
        align-items: center;\r
        justify-content: center;\r
        background: linear-gradient(135deg, var(--sol-gold), rgba(255, 202, 47, 0.5));\r
        border-radius: 50%;\r
        margin-bottom: 1.5rem;\r
        font-size: 1.8rem;\r
        transition: transform 0.3s ease;\r
        color: var(--charcoal);\r
      }\r
\r
      .contact-method:hover .contact-icon {\r
        transform: scale(1.1) rotate(5deg);\r
      }\r
\r
      .contact-title {\r
        font-family: "Orbitron", sans-serif;\r
        font-size: 1rem;\r
        font-weight: 700;\r
        text-transform: uppercase;\r
        letter-spacing: 1px;\r
        margin-bottom: 0.75rem;\r
        color: var(--charcoal);\r
      }\r
\r
      .contact-value {\r
        color: var(--mid);\r
        font-size: 0.95rem;\r
        margin-bottom: 1rem;\r
        word-break: break-word;\r
      }\r
\r
      .contact-link {\r
        display: inline-block;\r
        padding: 0.6rem 1.2rem;\r
        background: var(--deep-navy);\r
        color: var(--sol-gold);\r
        text-decoration: none;\r
        font-size: 0.85rem;\r
        font-weight: 600;\r
        letter-spacing: 1px;\r
        text-transform: uppercase;\r
        transition: all 0.3s ease;\r
        border: 2px solid var(--maroon);\r
      }\r
\r
      .contact-link:hover {\r
        background: transparent;\r
        color: var(--maroon);\r
      }\r
\r
      .contact-link.mailto {\r
        background: var(--maroon);\r
        border-color: var(--maroon);\r
        color: var(--white);\r
      }\r
\r
      .contact-link.mailto:hover {\r
        background: transparent;\r
        color: var(--maroon);\r
      }\r
\r
      .contact-link.phone {\r
      background: var(--maroon);\r
      color: var(--white);\r
      }\r
\r
      .contact-link.phone:hover {\r
        background: transparent;\r
        color: var(--maroon);\r
      }\r
      .footer-logo {\r
        font-family: "Orbitron", sans-serif;\r
        font-size: 1.8rem;\r
        font-weight: 700;\r
        letter-spacing: 1px;\r
        margin-bottom: 1.5rem;\r
      }\r
      .footer-logo .sol {\r
        color: var(--sol-gold);\r
      }\r
      .footer-logo .invictus {\r
        color: var(--white);\r
      }\r
      .footer-logo .dynamics-tag {\r
        color: var(--white);\r
        font-size: 1.2rem;\r
        letter-spacing: 0;\r
      }\r
      footer p {\r
        color: rgba(255, 255, 255, 0.7);\r
        font-size: 0.95rem;\r
        letter-spacing: 1px;\r
        margin-bottom: 0.5rem;\r
      }\r
      .sasol-tag {\r
        margin-top: 1.5rem;\r
        color: var(--sol-gold);\r
        font-family: "Roboto Mono", monospace;\r
        font-size: 0.85rem;\r
        font-weight: 500;\r
        text-transform: uppercase;\r
      }\r
\r
      /* RESPONSIVE */\r
      @media (max-width: 768px) {\r
        .car-inner {\r
          grid-template-columns: 1fr;\r
        }\r
        .nav-links {\r
          display: none;\r
        }\r
        .car-specs {\r
          grid-template-columns: 1fr 1fr;\r
        }\r
        .contact-grid {\r
          grid-template-columns: 1fr;\r
        }\r
      }\r
\r
      @media (max-width: 480px) {\r
        .contact-method {\r
          padding: 2rem 1.5rem;\r
        }\r
        .contact-icon {\r
          width: 50px;\r
          height: 50px;\r
          font-size: 1.5rem;\r
        }\r
      }\r
`,bc=`  :root {\r
        --sol-gold: #ffca2f;\r
        --deep-navy: #004987;\r
        --maroon: #8b1526;\r
        --charcoal: #1f2128;\r
        --white: #ffffff;\r
        --mid: #4b4f58;\r
        --light: #ffffff;\r
      }\r
  \r
  * {\r
              margin: 0;\r
              padding: 0;\r
              box-sizing: border-box;\r
          }\r
\r
          body {\r
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;\r
              background: var(--charcoal);\r
              color: #1e293b;\r
              line-height: 1.6;\r
              overflow-x: hidden;\r
          }\r
\r
          .hero {\r
              position: relative;\r
              min-height: 100vh;\r
              display: flex;\r
              align-items: center;\r
              justify-content: center;\r
              background: linear-gradient(135deg,var(--white) 0%, var(--sol-gold) 100%);\r
              padding: 2rem;\r
              overflow: hidden;\r
          }\r
\r
          .hero::before {\r
              content: '';\r
              position: absolute;\r
              inset: 0;\r
              background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg%3E%3Cgfill=nonefill-rule=evenodd%3E%3Cgfill=%23fffffffill-opacity=0.05%3E%3Cpathd=M36-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM64V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");\r
              pointer-events: none;\r
          }\r
\r
          .hero-content {\r
              position: relative;\r
              text-align: center;\r
              max-width: 800px;\r
              z-index: 10;\r
              padding: 3rem 2rem;\r
          }\r
\r
          .hero h1 {\r
              font-size: clamp(2.5rem, 6vw, 4rem);\r
              font-weight: 700;\r
              color: var(--charcoal);\r
              margin-bottom: 1rem;\r
              line-height: 1.1;\r
          }\r
\r
          .hero p {\r
              font-size: clamp(1rem, 3vw, 1.25rem);\r
              color: var(--mid);\r
              margin-bottom: 2rem;\r
              max-width: 600px;\r
              margin-left: auto;\r
              margin-right: auto;\r
          }\r
\r
          /* Popup Modal */\r
          .popup-overlay {\r
              position: fixed;\r
              inset: 0;\r
              background: rgba(0, 0, 0, 0.6);\r
              backdrop-filter: blur(8px);\r
              z-index: 1000;\r
              display: none;\r
              opacity: 0;\r
              transition: opacity 0.3s ease;\r
              align-items: center;\r
              justify-content: center;\r
              padding: 1rem;\r
          }\r
\r
          .popup-overlay.active {\r
              display: flex;\r
              opacity: 1;\r
          }\r
\r
          .popup-modal {\r
              background: white;\r
              border-radius: 16px;\r
              max-width: 500px;\r
              width: 100%;\r
              padding: 2.5rem 2rem;\r
              text-align: center;\r
              transform: translateY(20px) scale(0.95);\r
              transition: transform 0.3s cubic-bezier(0.33, 1, 0.68, 1);\r
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\r
          }\r
\r
          .popup-overlay.active .popup-modal {\r
              transform: translateY(0) scale(1);\r
          }\r
\r
          .popup-header {\r
              margin-bottom: 1.5rem;\r
          }\r
\r
          .popup-header h2 {\r
              font-size: 1.75rem;\r
              font-weight: 700;\r
              color: #1e293b;\r
              margin-bottom: 0.5rem;\r
          }\r
\r
          .popup-header p {\r
              color: #64748b;\r
              font-size: 0.95rem;\r
          }\r
\r
          .popup-form input[type="email"] {\r
              width: 100%;\r
              padding: 1rem 1.25rem;\r
              border: 2px solid #e2e8f0;\r
              border-radius: 12px;\r
              font-size: 1rem;\r
              outline: none;\r
              transition: border-color 0.2s;\r
          }\r
\r
          /* Popup Modal */\r
          .popup-overlay {\r
              position: fixed;\r
              inset: 0;\r
              background: rgba(0, 0, 0, 0.6);\r
              backdrop-filter: blur(8px);\r
              z-index: 1000;\r
              display: none;\r
              opacity: 0;\r
              transition: opacity 0.3s ease;\r
              align-items: center;\r
              justify-content: center;\r
              padding: 1rem;\r
          }\r
\r
          .popup-overlay.active {\r
              display: flex;\r
              opacity: 1;\r
          }\r
\r
          .popup-modal {\r
              background: white;\r
              border-radius: 16px;\r
              max-width: 500px;\r
              width: 100%;\r
              padding: 2.5rem 2rem;\r
              text-align: center;\r
              transform: translateY(20px)\r
  scale(0.95);\r
              transition: transform 0.3s\r
  cubic-bezier(0.33, 1, 0.68, 1);\r
              box-shadow: 0 25px 50px -12px\r
  rgba(0, 0, 0, 0.25);\r
          }\r
\r
          .popup-overlay.active .popup-modal {\r
              transform: translateY(0) scale(1);\r
          }\r
\r
          .popup-header {\r
              margin-bottom: 1.5rem;\r
          }\r
\r
          .popup-header h2 {\r
              font-size: 1.75rem;\r
              font-weight: 700;\r
              color: #1e293b;\r
              margin-bottom: 0.5rem;\r
          }\r
\r
          .popup-header p {\r
              color: #64748b;\r
              font-size: 0.95rem;\r
          }\r
\r
          .popup-form {\r
              margin-bottom: 1.5rem;\r
          }\r
\r
          .popup-form input[type="email"] {\r
              width: 100%;\r
              padding: 1rem 1.25rem;\r
              border: 2px solid #e2e8f0;\r
              border-radius: 12px;\r
              font-size: 1rem;\r
              outline: none;\r
              transition: border-color 0.2s;\r
              background: #f8fafc;\r
              color: #1e293b;\r
              outline: none;\r
              transition: border-color 0.2s;\r
              background: #f8fafc;\r
              color: #1e293b;\r
          }\r
\r
          .popup-form input[type="email"]:focus {\r
              border-color: var(--maroon);\r
              background: white;\r
          }\r
\r
          .popup-form button {\r
              width: 100%;\r
              padding: 1rem;\r
              background: var(--maroon);\r
              color: white;\r
              border: none;\r
              border-radius: 12px;\r
              font-size: 1rem;\r
              font-weight: 600;\r
              cursor: pointer;\r
              transition: transform 0.2s, box-shadow 0.2s;\r
              margin-top: 0.75rem;\r
          }\r
\r
          .popup-form button:hover {\r
              transform: translateY(-2px);\r
              box-shadow: 0 10px 20px -10px var(--maroon);\r
          }\r
\r
          .popup-close {\r
              position: absolute;\r
              top: 1rem;\r
              right: 1rem;\r
              background: transparent;\r
              border: none;\r
              font-size: 1.5rem;\r
              color: #64748b;\r
              cursor: pointer;\r
              transition: color 0.2s;\r
              padding: 0.5rem;\r
              line-height: 1;\r
          }\r
\r
          .popup-close:hover {\r
              color: #1e293b;\r
          }\r
\r
          /* Trigger Button */\r
          .hero-cta {\r
              display: inline-flex;\r
              align-items: center;\r
              gap: 0.75rem;\r
              padding: 1rem 2rem;\r
              background: linear-gradient(135deg, var(--maroon) 0%, var(--maroon) 100%);\r
              color: white;\r
              border: none;\r
              border-radius: 12px;\r
              font-size: 1.1rem;\r
              font-weight: 600;\r
              cursor: pointer;\r
              transition: all 0.3s;\r
              box-shadow: 0 4px 15px -3px rgba(139, 21, 38, 0.4);\r
          }\r
\r
          .hero-cta:hover {\r
              transform: translateY(-2px);\r
              box-shadow: 0 10px 25px -5px var(--maroon);\r
          }\r
\r
          .hero-cta svg {\r
              width: 24px;\r
              height: 24px;\r
          }\r
\r
          /* Footer */\r
          footer {\r
              text-align: center;\r
              padding: 2rem;\r
              color: #64748b;\r
              font-size: 0.9rem;\r
          }`,Xp=a=>{a.currentTarget.style.display="none"};function hc(){Wr("home",[Jo,bc]),Hr("Home - SOL-Invictus | Sasol Solar Car Challenge");const a=Vr();R.useEffect(()=>{var f;const s=(f=a.state)==null?void 0:f.scrollTo;if(s){const y=setTimeout(()=>{var w;(w=document.getElementById(s))==null||w.scrollIntoView({behavior:"smooth"})},60);return()=>clearTimeout(y)}window.scrollTo(0,0)},[]);const d=(s,f)=>{var y;s.preventDefault(),(y=document.getElementById(f))==null||y.scrollIntoView({behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[u.jsx(Mt,{}),u.jsxs("section",{id:"hero",children:[u.jsx("div",{className:"hero-bg"}),u.jsxs("div",{className:"hero-content",children:[u.jsx("img",{src:Je("Logo.png"),alt:"SOLINVICTUS Logo",className:"hero-logo-large",onError:Xp}),u.jsx("div",{className:"hero-eyebrow",children:"Sasol Solar Car Challenge 2026"}),u.jsxs("h1",{className:"hero-title",children:[u.jsx("span",{className:"sol",children:"SOL"}),u.jsx("span",{className:"invictus",children:"INVICTUS"}),u.jsx("br",{}),u.jsx("span",{className:"dynamics-tag",children:"[Dynamics]"})]}),u.jsx("p",{className:"hero-sub",children:"Unconquered by the Sun. Driven by High-Performance Engineering."}),u.jsx("a",{href:"#car",className:"hero-cta",onClick:s=>d(s,"car"),children:"Discover Our Journey"})]})]}),u.jsxs("section",{id:"car",children:[u.jsx("div",{className:"car-bg"}),u.jsxs("div",{className:"car-inner section-center",children:[u.jsx("div",{className:"car-img-wrap",children:u.jsx("img",{src:Je("pictures/SOL-1.jpg"),alt:"SOL-1 Solar Race Car",id:"car-image",onError:s=>{s.currentTarget.style.background="#e8e8e8",s.currentTarget.style.height="340px",s.currentTarget.alt="SOL-1 — Car image coming soon"}})}),u.jsxs("div",{className:"car-info",children:[u.jsx("span",{className:"section-tag",children:"Our Machine"}),u.jsxs("h2",{children:["Meet",u.jsx("br",{}),"SOL-1"]}),u.jsx("p",{children:"SOL-1 is a purpose-built solar-electric race car engineered by the students of SOLINVICTUS [Dynamics]. Every component has been designed, tested, and refined to push the boundaries of what student-led engineering can achieve."}),u.jsxs("div",{className:"car-specs",children:[u.jsxs("div",{className:"spec",children:[u.jsx("div",{className:"spec-val",children:"Solar"}),u.jsx("div",{className:"spec-label",children:"Power Source"})]}),u.jsxs("div",{className:"spec",children:[u.jsx("div",{className:"spec-val",children:"Student"}),u.jsx("div",{className:"spec-label",children:"Built & Designed"})]}),u.jsxs("div",{className:"spec",children:[u.jsx("div",{className:"spec-val",children:"100%"}),u.jsx("div",{className:"spec-label",children:"Renewable Energy"})]}),u.jsxs("div",{className:"spec",children:[u.jsx("div",{className:"spec-val",children:"2026"}),u.jsx("div",{className:"spec-label",children:"Competition Year"})]})]})]})]})]}),u.jsx("section",{id:"mission",children:u.jsxs("div",{className:"section-center",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-tag",children:"What We Stand For"}),u.jsx("h2",{children:"Our Mission"}),u.jsx("p",{children:"We are united by a commitment to sustainable innovation, academic excellence, and high-performance engineering leadership."}),u.jsx("div",{className:"divider"})]}),u.jsxs("div",{className:"pillars",children:[u.jsxs("div",{className:"pillar",children:[u.jsx("div",{className:"pillar-num",children:"01"}),u.jsx("h3",{children:"Sustainable Innovation"}),u.jsx("p",{children:"We believe in building a cleaner future through renewable energy technology, proving that sustainable transport is achievable today."})]}),u.jsxs("div",{className:"pillar",children:[u.jsx("div",{className:"pillar-num",children:"02"}),u.jsx("h3",{children:"Academic Excellence"}),u.jsx("p",{children:"Every challenge we face on the track mirrors the rigor we apply in the classroom. Real-world engineering begins here."})]}),u.jsxs("div",{className:"pillar",children:[u.jsx("div",{className:"pillar-num",children:"03"}),u.jsx("h3",{children:"Collaborative Spirit"}),u.jsx("p",{children:"Across disciplines and universities, we work as one team united by a common goal — to win and to inspire."})]}),u.jsxs("div",{className:"pillar",children:[u.jsx("div",{className:"pillar-num",children:"04"}),u.jsx("h3",{children:"Student Empowerment"}),u.jsx("p",{children:"We equip students with hands-on experience, leadership skills, and industry exposure that no lecture hall can replicate."})]})]})]})}),u.jsxs("section",{id:"universities",children:[u.jsx("div",{className:"uni-bg"}),u.jsxs("div",{className:"section-center",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-tag",children:"Our Consortium"}),u.jsx("h2",{children:"Participating Institutions"}),u.jsx("p",{children:"SOLINVICTUS [Dynamics] is a proud multi-university collaboration, bringing together the brightest minds across South African academic institutions."}),u.jsx("div",{className:"divider"})]}),u.jsxs("div",{className:"uni-grid",children:[u.jsx("a",{href:"https://www.belgiumcampus.ac.za/",style:{textDecoration:"none",color:"inherit"},children:u.jsxs("div",{className:"uni-card",children:[u.jsx("img",{src:Je("pictures/belgium-campus-logo.webp"),alt:"Belgium Campus iTversity"}),u.jsx("h3",{children:u.jsx("span",{className:"university-links",children:"Belgium Campus iTversity"})})]})}),u.jsx("a",{href:"https://www.ctutraining.ac.za/",style:{textDecoration:"none",color:"inherit"},children:u.jsxs("div",{className:"uni-card",children:[u.jsx("img",{src:Je("pictures/ctu-logo.png"),alt:"CTU Training Solutions"}),u.jsx("h3",{children:u.jsx("span",{className:"university-links",children:"CTU"})})]})}),u.jsx("a",{href:"https://www.openwindow.co.za/",style:{textDecoration:"none",color:"inherit"},children:u.jsxs("div",{className:"uni-card",children:[u.jsx("img",{src:Je("pictures/open-window-logo.png"),alt:"Open Window"}),u.jsx("h3",{children:u.jsx("span",{className:"university-links",children:"Open Window"})})]})}),u.jsx("a",{href:"https://www.imm.ac.za/",style:{textDecoration:"none",color:"inherit"},children:u.jsxs("div",{className:"uni-card",children:[u.jsx("img",{src:Je("pictures/imm-logo.png"),alt:"IMM"}),u.jsx("h3",{children:u.jsx("span",{className:"university-links",children:"IMM"})})]})}),u.jsxs("div",{className:"uni-card",children:[u.jsx("img",{src:Je("pictures/uxi-logo.png"),alt:"UXI"}),u.jsx("h3",{children:u.jsx("a",{className:"university-links",href:"",target:"_blank",rel:"noreferrer",children:"UXI"})})]})]})]})]}),u.jsx("section",{id:"goals",children:u.jsxs("div",{className:"section-center",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-tag",children:"Looking Ahead"}),u.jsx("h2",{children:"Strategic Objectives"}),u.jsx("p",{children:"Beyond the race, we are committed to creating lasting impact for students, institutions, and the engineering community."}),u.jsx("div",{className:"divider"})]}),u.jsxs("div",{className:"goals-grid",children:[u.jsxs("div",{className:"goal",children:[u.jsx("div",{className:"goal-num",children:"01"}),u.jsxs("div",{className:"goal-text",children:[u.jsx("h3",{children:"Race & Win"}),u.jsx("p",{children:"Compete at the highest level of the Sasol Solar Car Challenge."})]})]}),u.jsxs("div",{className:"goal",children:[u.jsx("div",{className:"goal-num",children:"02"}),u.jsxs("div",{className:"goal-text",children:[u.jsx("h3",{children:"Inspire Next Gen"}),u.jsx("p",{children:"Show younger students that engineering is impactful and within reach."})]})]}),u.jsxs("div",{className:"goal",children:[u.jsx("div",{className:"goal-num",children:"03"}),u.jsxs("div",{className:"goal-text",children:[u.jsx("h3",{children:"Clean Energy Research"}),u.jsx("p",{children:"Apply findings to real research contributing to renewable energy."})]})]}),u.jsxs("div",{className:"goal",children:[u.jsx("div",{className:"goal-num",children:"04"}),u.jsxs("div",{className:"goal-text",children:[u.jsx("h3",{children:"Industry Bridges"}),u.jsx("p",{children:"Connect students with partners for internships and opportunities."})]})]})]})]})}),u.jsx("section",{id:"contact",children:u.jsxs("div",{className:"section-center",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-tag",children:"Get in Touch"}),u.jsx("h2",{children:"Contact Us"}),u.jsx("p",{children:"Reach out through any of our communication channels. We'd love to hear from you."}),u.jsx("div",{className:"divider"})]}),u.jsx("div",{id:"contact-methods",className:"contact-grid",children:Gp.map((s,f)=>u.jsxs("div",{className:"contact-method",children:[u.jsx("div",{className:"contact-icon",children:s.icon}),u.jsx("div",{className:"contact-title",children:s.title}),u.jsx("div",{className:"contact-value",children:s.value}),u.jsx("a",{href:s.action,className:s.buttonClass,...s.target?{target:s.target}:{},children:s.buttonText})]},f))})]})}),u.jsx(Dc,{})]})}const Jp=[{uni:"Belgium Campus iTversity",cls:"uni-belgium",members:[{name:"Fourie van der Walt",role:"Software Engineer",img:"pictures/mugshots/Fourie Van der Walt.png"},{name:"Michael van der Berg",role:"Software Engineer",img:"pictures/mugshots/Michael van der Berg.jpeg"},{name:"Mpho Maaga",role:"Software Engineer",img:"pictures/mugshots/Mpho Maaga.png"},{name:"Henning Coetzer",role:"Software Engineer",img:"pictures/mugshots/Henning Coetzer.jpg"},{name:"Schalk van den Berg",role:"Software Engineer",img:"pictures/mugshots/Schalk van den Berg.jpg"},{name:"Tshego Mashego",role:"Software Engineer",img:"pictures/mugshots/Tshego Mashego.jpg"},{name:"Reitumetse Given Moreke",role:"Software Engineer",img:"pictures/mugshots/Reitumetse Given Moreke.jpeg"}]},{uni:"CTU Training Solutions",cls:"uni-ctu",members:[{name:"Tyler Davel",role:"Software Engineer",img:"pictures/mugshots/Tyler Davel.jpg"},{name:"Dewald van Jaarsveld",role:"Software Engineer",img:"pictures/mugshots/Dewald van Jaarsveld.jpg"},{name:"Aneesah Rehman",role:"Software Engineer",img:"pictures/mugshots/Aneesah Rehman.jpg"},{name:"Paul Dolski",role:"Mechanical Engineer",img:"pictures/mugshots/Paul Dolski.jpg"},{name:"Monde Msomi",role:"Mechanical Engineer",img:"pictures/mugshots/Monde Msomi.jpg"},{name:"Unarine Netshivhale",role:"Electrical Engineer",img:"pictures/mugshots/Unarine Netshivhale.jpg",imgId:"Unarine"},{name:"Altus Smit",role:"Project Manager",img:"pictures/mugshots/Altus Smit.jpg"}]}],Zp=[{uni:"Belgium Campus iTversity",cls:"uni-belgium",members:[{name:"Francois Venter",img:"pictures/mugshots/mentor-mugshots/Francois Venter.webp"},{name:"Prof. HB Klopper",img:"pictures/mugshots/mentor-mugshots/Prof. HB Klopper.jpg"},{name:"Prof. Japie Greeff",img:"pictures/mugshots/mentor-mugshots/Prof Japie Greeff.webp"},{name:"Jacqui Muller",img:"pictures/mugshots/mentor-mugshots/Jacqui Muller.jpg"},{name:"Richard Du Plessis",img:"pictures/mugshots/mentor-mugshots/Richard Du Plessis.jpg"}]}],qp=[{uni:"Belgium Campus IT Versity",cls:"uni-belgium",tba:!1,members:[{name:"Francois Venter",img:"pictures/mugshots/mentor-mugshots/Francois Venter.webp"},{name:"Prof. HB Klopper",img:"pictures/mugshots/mentor-mugshots/Prof. HB Klopper.jpg"},{name:"Prof. Japie Greeff",img:"pictures/mugshots/mentor-mugshots/Prof Japie Greeff.webp"},{name:"Jacqui Muller",img:"pictures/mugshots/mentor-mugshots/Jacqui Muller.jpg"},{name:"Richard du Plessis",img:"pictures/mugshots/mentor-mugshots/temp stock image.png"}]},{uni:"Open Window",cls:"uni-openwindow",tba:!0,members:[]},{uni:"IMM",cls:"uni-imm",tba:!0,members:[]}],Fc=`:root {\r
  --sol-gold: #ffca2f;\r
  --deep-navy: #004987;\r
  --maroon: #8b1526;\r
  --charcoal: #1f2128;\r
  --white: #ffffff;\r
  --mid: #4b4f58;\r
  --light: #ffffff;\r
}\r
      /* TEAM */\r
      #team {\r
        background: var(--white);\r
      }\r
      .team-grid {\r
        display: grid;\r
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r
        gap: 2.5rem;\r
      }\r
      .member {\r
        text-align: center;\r
      }\r
      .member-photo {\r
        width: 160px;\r
        height: 160px;\r
        margin: 0 auto 1.5rem;\r
        overflow: hidden;\r
        border-bottom: 4px solid var(--maroon);\r
        background: var(--light);\r
        position: relative;\r
      }\r
      .member-photo::after {\r
        content: "";\r
        position: absolute;\r
        inset: 0;\r
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\r
      }\r
      .member-photo img {\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
        display: block;\r
      }\r
      .member h3 {\r
        font-size: 1.1rem;\r
        font-weight: 700;\r
        margin-bottom: 0.3rem;\r
      }\r
      .member-role {\r
        font-family: "Roboto Mono", monospace;\r
        font-size: 0.85rem;\r
        font-weight: 600;\r
        letter-spacing: 1px;\r
        text-transform: uppercase;\r
        color: var(--deep-navy);\r
      }\r
      .member-dept {\r
        font-size: 0.85rem;\r
        color: var(--mid);\r
        margin-top: 0.3rem;\r
      }\r
\r
\r
      /* Team Page Styling */\r
      *, *::before, *::after {\r
        box-sizing: border-box;\r
        margin: 0;\r
        padding: 0;\r
      }\r
      \r
      /* ── Team page ────────────────────────────────────────────── */\r
      .team-page {\r
        max-width: 1200px;\r
        margin: 0 auto;\r
        padding: 5rem 2rem 6rem;\r
      }\r
      \r
      .team-heading {\r
        text-align: center;\r
        margin-top: 2rem;\r
        margin-bottom: 4rem;\r
      }\r
      \r
      .team-heading h1 {\r
        font-size: clamp(2.6rem, 5vw, 4rem);\r
        font-weight: 800;\r
        letter-spacing: -0.02em;\r
        text-transform: uppercase;\r
        color: #1a1a1a;\r
        line-height: 1;\r
      }\r
      \r
      .team-heading h1 .accent {\r
        color: #f5c518;\r
      }\r
      \r
      /* ── University sections ──────────────────────────────────── */\r
      .uni-section {\r
        margin-bottom: 4.5rem;\r
      }\r
      \r
      .uni-title {\r
        font-size: clamp(1.1rem, 2.2vw, 1.4rem);\r
        font-weight: 700;\r
        letter-spacing: 0.08em;\r
        text-transform: uppercase;\r
        color: #1a1a1a;\r
        margin-bottom: 1.6rem;\r
        padding-bottom: 0.6rem;\r
        border-bottom: 1px solid #e8e8e8;\r
      }\r
      \r
      /* ── Grid ─────────────────────────────────────────────────── */\r
      .team-grid {\r
        display: grid;\r
        grid-template-columns: repeat(3, 1fr);\r
        column-gap: 2.4rem;\r
        row-gap: 1.5rem;\r
      }\r
      \r
      /* ── Card ─────────────────────────────────────────────────── */\r
      .team-card {\r
        background: #ffffff;\r
        margin: 1rem;\r
        border: 3px solid #e8e8e8;\r
        border-radius: 4px;\r
        overflow: hidden;\r
        transition: border-color 0.25s, transform 0.25s;\r
        cursor: pointer;\r
      }\r
      \r
      .team-card:hover {\r
        transform: translateY(-3px);\r
      }\r
      \r
      .uni-belgium:hover    { border-color: #f5c518; }\r
      .uni-ctu:hover        { border-color: #800020; }\r
      .uni-openwindow:hover { border-color: #e86c1a; }\r
      .uni-imm:hover        { border-color: #89c4e1; }\r
      \r
      .card-img-wrap {\r
        position: relative;\r
        width: 100%;\r
        aspect-ratio: 1 / 1;\r
        overflow: hidden;\r
        background: #f0f0f0;\r
      }\r
      \r
      .card-img-wrap img {\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
        display: block;\r
      }\r
      \r
\r
      \r
      .card-info {\r
        padding: 0.75rem 1rem 0.85rem;\r
        border-top: 3px solid transparent;\r
        transition: border-color 0.25s;\r
      }\r
      \r
      .uni-belgium:hover    .card-info { border-top-color: #f5c518; }\r
      .uni-ctu:hover        .card-info { border-top-color: #800020; }\r
      .uni-openwindow:hover .card-info { border-top-color: #e86c1a; }\r
      .uni-imm:hover        .card-info { border-top-color: #89c4e1; }\r
      \r
      .card-name {\r
        font-size: 0.82rem;\r
        font-weight: 700;\r
        letter-spacing: 0.03em;\r
        text-transform: uppercase;\r
        color: #1a1a1a;\r
        margin-bottom: 0.2rem;\r
      }\r
      \r
      .card-role {\r
        font-size: 0.75rem;\r
        font-weight: 500;\r
        color: #444;\r
        margin-bottom: 0.12rem;\r
      }\r
      \r
      .card-dept {\r
        font-size: 0.68rem;\r
        font-weight: 600;\r
        letter-spacing: 0.08em;\r
        text-transform: uppercase;\r
        color: #888;\r
      }\r
\r
      \r
/* ── MENTOR FIXES ADDED 10 JUL 2026 ───────────────────────────────────────────── */\r
      .team-link {\r
        text-decoration: none !important;\r
        border-bottom: none !important;\r
      }\r
\r
      .team-link:hover {\r
        opacity: 0.8;\r
        cursor: pointer;\r
      }\r
      \r
      /* ── Responsive ───────────────────────────────────────────── */\r
      @media (max-width: 900px) {\r
        .team-grid {\r
          grid-template-columns: repeat(2, 1fr);\r
        }\r
      }\r
      \r
      @media (max-width: 560px) {\r
        .team-grid {\r
          grid-template-columns: 1fr;\r
        }\r
      \r
      }`;function gc({section:a}){return u.jsxs("section",{className:"uni-section",children:[u.jsx("h2",{className:"uni-title",children:a.uni}),u.jsx("div",{className:"team-grid",children:a.members.map((d,s)=>u.jsxs("div",{className:`team-card ${a.cls}`,children:[u.jsx("div",{className:"card-img-wrap",children:u.jsx("img",{src:Je(d.img),alt:d.name,...d.imgId?{id:d.imgId}:{}})}),u.jsxs("div",{className:"card-info",children:[u.jsx("p",{className:"card-name",children:d.name}),d.role?u.jsx("p",{className:"card-role",children:d.role}):null]})]},s))})]})}function em(){return Wr("team",[Jo,Fc]),Hr("Team — SOL-Invictus | Sasol Solar Car Challenge"),R.useEffect(()=>{window.scrollTo(0,0)},[]),u.jsxs(u.Fragment,{children:[u.jsx(Mt,{}),u.jsxs("main",{className:"team-page",children:[u.jsx("div",{className:"team-heading",children:u.jsxs("h1",{children:["Meet the ",u.jsx("span",{className:"accent",children:"Team"})]})}),Jp.map((a,d)=>u.jsx(gc,{section:a},d)),u.jsx("div",{className:"team-heading",children:u.jsxs("h1",{children:["Meet our ",u.jsx("span",{className:"accent",children:"Mentors"})]})}),Zp.map((a,d)=>u.jsx(gc,{section:a},d))]})]})}const nm=`:root {\r
  --sol-gold: #ffca2f;\r
  --deep-navy: #004987;\r
  --maroon: #8b1526;\r
  --charcoal: #1f2128;\r
  --white: #ffffff;\r
  --mid: #4b4f58;\r
  --light: #ffffff;\r
}\r
      /* TEAM */\r
      #team {\r
        background: var(--white);\r
      }\r
      .team-grid {\r
        display: grid;\r
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r
        gap: 2.5rem;\r
      }\r
      .member {\r
        text-align: center;\r
      }\r
      .member-photo {\r
        width: 160px;\r
        height: 160px;\r
        margin: 0 auto 1.5rem;\r
        overflow: hidden;\r
        border-bottom: 4px solid var(--maroon);\r
        background: var(--light);\r
        position: relative;\r
      }\r
      .member-photo::after {\r
        content: "";\r
        position: absolute;\r
        inset: 0;\r
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\r
      }\r
      .member-photo img {\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
        display: block;\r
      }\r
      .member h3 {\r
        font-size: 1.1rem;\r
        font-weight: 700;\r
        margin-bottom: 0.3rem;\r
      }\r
      .member-role {\r
        font-family: "Roboto Mono", monospace;\r
        font-size: 0.85rem;\r
        font-weight: 600;\r
        letter-spacing: 1px;\r
        text-transform: uppercase;\r
        color: var(--deep-navy);\r
      }\r
      .member-dept {\r
        font-size: 0.85rem;\r
        color: var(--mid);\r
        margin-top: 0.3rem;\r
      }\r
\r
\r
      /* Team Page Styling */\r
      *, *::before, *::after {\r
        box-sizing: border-box;\r
        margin: 0;\r
        padding: 0;\r
      }\r
      \r
      /* ── Team page ────────────────────────────────────────────── */\r
      .team-page {\r
        max-width: 1200px;\r
        margin: 0 auto;\r
        padding: 5rem 2rem 6rem;\r
      }\r
      \r
      .team-heading {\r
        text-align: center;\r
        margin-top: 2rem;\r
        margin-bottom: 4rem;\r
      }\r
      \r
      .team-heading h1 {\r
        font-size: clamp(2.6rem, 5vw, 4rem);\r
        font-weight: 800;\r
        letter-spacing: -0.02em;\r
        text-transform: uppercase;\r
        color: #1a1a1a;\r
        line-height: 1;\r
      }\r
      \r
      .team-heading h1 .accent {\r
        color: #f5c518;\r
      }\r
      \r
      /* ── University sections ──────────────────────────────────── */\r
      .uni-section {\r
        margin-bottom: 4.5rem;\r
      }\r
      \r
      .uni-title {\r
        font-size: clamp(1.1rem, 2.2vw, 1.4rem);\r
        font-weight: 700;\r
        letter-spacing: 0.08em;\r
        text-transform: uppercase;\r
        color: #1a1a1a;\r
        margin-bottom: 1.6rem;\r
        padding-bottom: 0.6rem;\r
        border-bottom: 1px solid #e8e8e8;\r
      }\r
      \r
      /* ── Grid ─────────────────────────────────────────────────── */\r
      .team-grid {\r
        display: grid;\r
        grid-template-columns: repeat(3, 1fr);\r
        column-gap: 2.4rem;\r
        row-gap: 1.5rem;\r
      }\r
      \r
      /* ── Card ─────────────────────────────────────────────────── */\r
      .team-card {\r
        background: #ffffff;\r
        margin: 1rem;\r
        border: 3px solid #e8e8e8;\r
        border-radius: 4px;\r
        overflow: hidden;\r
        transition: border-color 0.25s, transform 0.25s;\r
        cursor: pointer;\r
      }\r
      \r
      .team-card:hover {\r
        transform: translateY(-3px);\r
      }\r
      \r
      .uni-belgium:hover    { border-color: #f5c518; }\r
      .uni-ctu:hover        { border-color: #800020; }\r
      .uni-openwindow:hover { border-color: #e86c1a; }\r
      .uni-imm:hover        { border-color: #89c4e1; }\r
      \r
      .card-img-wrap {\r
        position: relative;\r
        width: 100%;\r
        aspect-ratio: 1 / 1;\r
        overflow: hidden;\r
        background: #f0f0f0;\r
      }\r
      \r
      .card-img-wrap img {\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
        display: block;\r
      }\r
      \r
\r
      \r
      .card-info {\r
        padding: 0.75rem 1rem 0.85rem;\r
        border-top: 3px solid transparent;\r
        transition: border-color 0.25s;\r
      }\r
      \r
      .uni-belgium:hover    .card-info { border-top-color: #f5c518; }\r
      .uni-ctu:hover        .card-info { border-top-color: #800020; }\r
      .uni-openwindow:hover .card-info { border-top-color: #e86c1a; }\r
      .uni-imm:hover        .card-info { border-top-color: #89c4e1; }\r
      \r
      .card-name {\r
        font-size: 0.82rem;\r
        font-weight: 700;\r
        letter-spacing: 0.03em;\r
        text-transform: uppercase;\r
        color: #1a1a1a;\r
        margin-bottom: 0.2rem;\r
      }\r
      \r
      .card-role {\r
        font-size: 0.75rem;\r
        font-weight: 500;\r
        color: #444;\r
        margin-bottom: 0.12rem;\r
      }\r
      \r
      .card-dept {\r
        font-size: 0.68rem;\r
        font-weight: 600;\r
        letter-spacing: 0.08em;\r
        text-transform: uppercase;\r
        color: #888;\r
      }\r
\r
/* ── MENTOR FIXES ADDED 10 JUL 2026 ───────────────────────────────────────────── */\r
      .team-link {\r
        text-decoration: none !important;\r
        border-bottom: none !important;\r
      }\r
\r
      .team-link:hover {\r
        opacity: 0.8;\r
        cursor: pointer;\r
      }\r
      \r
      /* ── Responsive ───────────────────────────────────────────── */\r
      @media (max-width: 900px) {\r
        .team-grid {\r
          grid-template-columns: repeat(2, 1fr);\r
        }\r
      }\r
      \r
      @media (max-width: 560px) {\r
        .team-grid {\r
          grid-template-columns: 1fr;\r
        }\r
      \r
      }`;function rm(){return Wr("mentors",[Jo,Fc,nm]),Hr("Team — SOL-Invictus | Sasol Solar Car Challenge"),R.useEffect(()=>{window.scrollTo(0,0)},[]),u.jsxs(u.Fragment,{children:[u.jsx(Mt,{}),u.jsxs("main",{className:"team-page",children:[u.jsx("div",{className:"team-heading",children:u.jsxs("h1",{children:["Meet our",u.jsx("span",{className:"accent",children:" Mentors"})]})}),qp.map((a,d)=>u.jsxs("section",{className:"uni-section",children:[u.jsx("h2",{className:"uni-title",children:a.uni}),a.tba?u.jsx("h1",{children:"TBA"}):u.jsx("div",{className:"team-grid",children:a.members.map((s,f)=>u.jsxs("div",{className:`team-card ${a.cls}`,children:[u.jsx("div",{className:"card-img-wrap",children:u.jsx("img",{src:Je(s.img),alt:s.name})}),u.jsx("div",{className:"card-info",children:u.jsx("p",{className:"card-name",children:s.name})})]},f))})]},d)),u.jsx("div",{className:"team-heading",children:u.jsxs("h1",{children:["Meet our"," ",u.jsx(Ko,{to:"/team",className:"team-link",children:u.jsx("span",{className:"accent",children:"Team"})})]})})]})]})}const tm=`:root {\r
  --sol-gold: #ffca2f;\r
  --deep-navy: #004987;\r
  --maroon: #8b1526;\r
  --charcoal: #1f2128;\r
  --white: #ffffff;\r
  --mid: #4b4f58;\r
  --light: #ffffff;\r
}\r
        \r
        .sponsor-container {\r
            display: flex;\r
            justify-content: center;\r
            align-items: center;\r
            height: 100vh;\r
            background-color: var(--white);\r
        }\r
        .sponsor-content {\r
            text-align: center;\r
        }\r
        .sponsor-heading {\r
            font-size: 2rem;\r
            font-weight: 700;\r
            color: var(--deep-navy);\r
            margin-bottom: 1rem;\r
        }\r
        .sponsor-subheading {\r
            font-size: 1.2rem;\r
            color: var(--mid);\r
        }  \r
\r
h1, h2{\r
    text-align: center;\r
    color: var(--charcoal);\r
}`;function om(){return Wr("sponsors",[Jo,tm]),Hr("Sponsors — SOL-Invictus | Sasol Solar Car Challenge"),R.useEffect(()=>{window.scrollTo(0,0)},[]),u.jsxs(u.Fragment,{children:[u.jsx(Mt,{}),u.jsx("div",{className:"sponsor-container",children:u.jsxs("div",{className:"sponsor-content",children:[u.jsx("h1",{className:"sponsor-heading",children:"Our sponsors will be announced soon!"}),u.jsx("h2",{className:"sponsor-subheading",children:"Stay tuned for updates."})]})})]})}const vc={build:"Build Log",race:"Race Reports",tech:"Tech Deep-Dive",team:"Team News"},yc={build:"cat-build",race:"cat-race",tech:"cat-tech",team:"cat-team"},lm=[{filter:"all",label:"All Posts"},{filter:"build",label:"Build Log"},{filter:"race",label:"Race Reports"},{filter:"tech",label:"Tech Deep-Dive"},{filter:"team",label:"Team News"}],mn={category:"build",date:"25 May 2026",img:"blog/featured.jpg",title:"Chassis Assembly Complete — SOL-1 Takes Shape",excerpt:"After three months of fabrication and late nights in the workshop, the SOL-1 chassis is fully assembled. Here's how we got here and what's coming next.",author:{name:"Team Member",role:"Team Lead",avatar:"team/member1.jpg"}},im=[{category:"tech",date:"18 May 2026",img:"blog/post-solar-cells.jpg",title:"Choosing Our Solar Cells: Why We Went with Monocrystalline",excerpt:"An engineering breakdown of the cell selection process, efficiency benchmarks, and why monocrystalline silicon was the right call for SOL-1."},{category:"team",date:"10 May 2026",img:"blog/post-team-workshop.jpg",title:"Meet the Electrical Sub-Team: The Current Behind the Car",excerpt:"Five students. One battery management system. A lot of wire. Get to know the team responsible for SOL-1's electrical architecture."},{category:"build",date:"28 Apr 2026",img:"blog/post-aero-test.jpg",title:"Aero Shell v2: Lessons from the Wind Tunnel",excerpt:"Our first aero shell didn't survive testing. The second one did. Here's what changed and why we rebuilt from scratch."},{category:"race",date:"15 Apr 2026",img:"blog/post-sasol-prep.jpg",title:"Race Strategy 101: How We Plan to Tackle the Sasol Route",excerpt:"Solar racing isn't just about speed. It's about energy management, weather, and strategy. Here's our approach to the 2026 route."},{category:"tech",date:"2 Apr 2026",img:"blog/post-bms.jpg",title:"Building a BMS from Scratch: Our Battery Management Journey",excerpt:"Off-the-shelf wasn't going to cut it. We designed a custom battery management system tailored to SOL-1's power profile."},{category:"team",date:"20 Mar 2026",img:"blog/post-sponsors.jpg",title:"New Sponsors On Board — And What It Means for SOL-1",excerpt:"We've secured partnerships that will directly impact the car's development. Here's who joined and what they're bringing."}],am=`/* ══════════════════════════════════════════\r
   SOL-Invictus Blog — Stylesheet\r
   ══════════════════════════════════════════ */\r
\r
* {\r
  margin: 0;\r
  padding: 0;\r
  box-sizing: border-box;\r
}\r
\r
:root {\r
  --sol-gold: #ffca2f;\r
  --deep-navy: #004987;\r
  --maroon: #8b1526;\r
  --charcoal: #1f2128;\r
  --white: #ffffff;\r
  --mid: #4b4f58;\r
  --light: #f8f8f8;\r
}\r
\r
html {\r
  scroll-behavior: smooth;\r
}\r
\r
body {\r
  font-family: "Inter", sans-serif;\r
  background: var(--white);\r
  color: var(--charcoal);\r
  line-height: 1.6;\r
}\r
\r
h1, h2, h3 {\r
  font-family: "Orbitron", sans-serif;\r
  text-transform: uppercase;\r
}\r
\r
.dynamics-tag {\r
  font-family: "Roboto Mono", monospace;\r
  font-weight: 500;\r
}\r
\r
.section-center {\r
  max-width: 1200px;\r
  margin: 0 auto;\r
  padding: 0 5%;\r
}\r
\r
\r
/* ══════════════════════════════════════════\r
   NAV BAR\r
   ══════════════════════════════════════════ */\r
\r
nav {\r
  position: fixed;\r
  top: 0;\r
  width: 100%;\r
  z-index: 100;\r
  background: rgba(255, 255, 255, 0.95);\r
  backdrop-filter: blur(10px);\r
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\r
  padding: 0 5%;\r
}\r
\r
.nav-inner {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  height: 90px;\r
  max-width: 1400px;\r
  margin: 0 auto;\r
}\r
\r
.nav-brand {\r
  display: flex;\r
  align-items: center;\r
  gap: 15px;\r
  text-decoration: none;\r
}\r
\r
.nav-logo-img {\r
  height: 65px;\r
  object-fit: contain;\r
}\r
\r
.nav-logo {\r
  font-size: 1.4rem;\r
  font-weight: 700;\r
  letter-spacing: 1px;\r
  color: var(--charcoal);\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
}\r
\r
.sol {\r
  color: var(--sol-gold);\r
}\r
\r
.invictus {\r
  color: var(--charcoal);\r
}\r
\r
.nav-logo .dynamics-tag {\r
  color: var(--charcoal);\r
  font-size: 1rem;\r
  letter-spacing: 0;\r
}\r
\r
.nav-links {\r
  display: flex;\r
  gap: 2rem;\r
  list-style: none;\r
}\r
\r
.nav-links a {\r
  color: var(--mid);\r
  text-decoration: none;\r
  font-size: 0.85rem;\r
  letter-spacing: 1.5px;\r
  text-transform: uppercase;\r
  transition: color 0.3s;\r
  font-weight: 600;\r
}\r
\r
.nav-links a:hover,\r
.nav-links a.nav-active {\r
  color: var(--sol-gold);\r
}\r
\r
.section-tag {\r
  font-family: "Roboto Mono", monospace;\r
  font-size: 0.9rem;\r
  font-weight: 500;\r
  letter-spacing: 2px;\r
  text-transform: uppercase;\r
  color: var(--deep-navy);\r
  display: block;\r
}\r
\r
\r
/* ══════════════════════════════════════════\r
   BLOG HERO\r
   ══════════════════════════════════════════ */\r
\r
.blog-hero {\r
  padding: 180px 5% 80px;\r
  text-align: center;\r
  position: relative;\r
  overflow: hidden;\r
  background: var(--white);\r
}\r
\r
.blog-hero-bg {\r
  position: absolute;\r
  inset: 0;\r
  background:\r
    url('data:image/svg+xml;utf8,<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M20 0l20 10v20l-20 10L0 30V10z" fill="none" stroke="rgba(31,33,40,0.03)"/></svg>') repeat;\r
}\r
\r
.blog-hero-content {\r
  position: relative;\r
  z-index: 2;\r
  max-width: 700px;\r
  margin: 0 auto;\r
}\r
\r
.blog-hero-content .section-tag {\r
  margin-bottom: 1.2rem;\r
}\r
\r
.blog-hero-content h1 {\r
  font-size: clamp(2.2rem, 5vw, 3.8rem);\r
  font-weight: 900;\r
  letter-spacing: -1px;\r
  line-height: 1.1;\r
  margin-bottom: 1rem;\r
  color: var(--charcoal);\r
}\r
\r
.blog-hero-content p {\r
  font-size: 1.05rem;\r
  color: var(--mid);\r
  max-width: 520px;\r
  margin: 0 auto;\r
  letter-spacing: 0.5px;\r
}\r
\r
\r
/* ══════════════════════════════════════════\r
   FILTER BAR\r
   ══════════════════════════════════════════ */\r
\r
.filter-bar {\r
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\r
  background: var(--white);\r
  position: sticky;\r
  top: 90px;\r
  z-index: 50;\r
}\r
\r
.filter-inner {\r
  max-width: 1200px;\r
  margin: 0 auto;\r
  padding: 0 5%;\r
  display: flex;\r
  gap: 0.5rem;\r
  overflow-x: auto;\r
  -webkit-overflow-scrolling: touch;\r
  scrollbar-width: none;\r
}\r
\r
.filter-inner::-webkit-scrollbar {\r
  display: none;\r
}\r
\r
.filter-btn {\r
  font-family: "Roboto Mono", monospace;\r
  font-size: 0.78rem;\r
  font-weight: 500;\r
  letter-spacing: 1.5px;\r
  text-transform: uppercase;\r
  color: var(--mid);\r
  background: none;\r
  border: none;\r
  padding: 1.1rem 1.2rem;\r
  cursor: pointer;\r
  white-space: nowrap;\r
  border-bottom: 3px solid transparent;\r
  transition: all 0.25s;\r
}\r
\r
.filter-btn:hover {\r
  color: var(--charcoal);\r
}\r
\r
.filter-btn.active {\r
  color: var(--charcoal);\r
  border-bottom-color: var(--sol-gold);\r
}\r
\r
\r
/* ══════════════════════════════════════════\r
   FEATURED POST\r
   ══════════════════════════════════════════ */\r
\r
.featured-section {\r
  padding: 4rem 0;\r
  background: var(--light);\r
}\r
\r
.featured-card {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
  gap: 0;\r
  text-decoration: none;\r
  color: inherit;\r
  background: var(--white);\r
  border: 1px solid rgba(0, 0, 0, 0.06);\r
  overflow: hidden;\r
  transition: box-shadow 0.3s, transform 0.3s;\r
}\r
\r
.featured-card:hover {\r
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);\r
  transform: translateY(-3px);\r
}\r
\r
.featured-img {\r
  position: relative;\r
  min-height: 360px;\r
  background: var(--light);\r
  overflow: hidden;\r
}\r
\r
.featured-img img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
  display: block;\r
  transition: transform 0.4s;\r
}\r
\r
.featured-card:hover .featured-img img {\r
  transform: scale(1.03);\r
}\r
\r
.featured-img.no-img {\r
  background: linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 100%);\r
}\r
\r
.featured-badge {\r
  position: absolute;\r
  top: 1.2rem;\r
  left: 1.2rem;\r
  font-family: "Roboto Mono", monospace;\r
  font-size: 0.7rem;\r
  font-weight: 500;\r
  letter-spacing: 2px;\r
  text-transform: uppercase;\r
  background: var(--sol-gold);\r
  color: var(--charcoal);\r
  padding: 0.35rem 0.9rem;\r
}\r
\r
.featured-body {\r
  padding: 3rem;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: center;\r
}\r
\r
.featured-body h2 {\r
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);\r
  font-weight: 700;\r
  line-height: 1.2;\r
  margin-bottom: 1rem;\r
  color: var(--charcoal);\r
}\r
\r
.featured-body p {\r
  color: var(--mid);\r
  font-size: 0.95rem;\r
  margin-bottom: 1.5rem;\r
  line-height: 1.65;\r
}\r
\r
\r
/* ── POST META ── */\r
\r
.post-meta-row {\r
  display: flex;\r
  align-items: center;\r
  gap: 1rem;\r
  margin-bottom: 0.8rem;\r
}\r
\r
.post-category {\r
  font-family: "Roboto Mono", monospace;\r
  font-size: 0.7rem;\r
  font-weight: 500;\r
  letter-spacing: 1.5px;\r
  text-transform: uppercase;\r
  padding: 0.25rem 0.7rem;\r
}\r
\r
.cat-build {\r
  background: var(--sol-gold);\r
  color: var(--charcoal);\r
}\r
\r
.cat-race {\r
  background: var(--maroon);\r
  color: var(--white);\r
}\r
\r
.cat-tech {\r
  background: var(--deep-navy);\r
  color: var(--white);\r
}\r
\r
.cat-team {\r
  background: var(--charcoal);\r
  color: var(--white);\r
}\r
\r
.post-date {\r
  font-family: "Roboto Mono", monospace;\r
  font-size: 0.78rem;\r
  color: var(--mid);\r
  letter-spacing: 0.5px;\r
}\r
\r
\r
/* ── POST AUTHOR ── */\r
\r
.post-author {\r
  display: flex;\r
  align-items: center;\r
  gap: 0.75rem;\r
  margin-top: auto;\r
}\r
\r
.author-avatar {\r
  width: 36px;\r
  height: 36px;\r
  background: var(--light);\r
  border-bottom: 2px solid var(--maroon);\r
  overflow: hidden;\r
}\r
\r
.author-avatar img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
}\r
\r
.author-name {\r
  font-size: 0.85rem;\r
  font-weight: 600;\r
  display: block;\r
  color: var(--charcoal);\r
}\r
\r
.author-role {\r
  font-family: "Roboto Mono", monospace;\r
  font-size: 0.72rem;\r
  color: var(--mid);\r
  letter-spacing: 1px;\r
  text-transform: uppercase;\r
}\r
\r
\r
/* ══════════════════════════════════════════\r
   POST GRID\r
   ══════════════════════════════════════════ */\r
\r
.posts-section {\r
  padding: 4rem 0 5rem;\r
  background: var(--white);\r
}\r
\r
.posts-grid {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\r
  gap: 2rem;\r
}\r
\r
.post-card {\r
  text-decoration: none;\r
  color: inherit;\r
  background: var(--white);\r
  border: 1px solid rgba(0, 0, 0, 0.06);\r
  overflow: hidden;\r
  transition: box-shadow 0.3s, transform 0.3s;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.post-card:hover {\r
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);\r
  transform: translateY(-3px);\r
}\r
\r
.post-card-img {\r
  height: 220px;\r
  background: var(--light);\r
  overflow: hidden;\r
}\r
\r
.post-card-img img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
  display: block;\r
  transition: transform 0.4s;\r
}\r
\r
.post-card:hover .post-card-img img {\r
  transform: scale(1.04);\r
}\r
\r
.post-card-img.no-img {\r
  background:\r
    repeating-linear-gradient(\r
      45deg,\r
      transparent,\r
      transparent 10px,\r
      rgba(0, 0, 0, 0.02) 10px,\r
      rgba(0, 0, 0, 0.02) 20px\r
    ),\r
    linear-gradient(135deg, #e8e8e8 0%, #ddd 100%);\r
}\r
\r
.post-card-body {\r
  padding: 1.8rem;\r
  display: flex;\r
  flex-direction: column;\r
  flex: 1;\r
}\r
\r
.post-card-body h3 {\r
  font-size: 1.05rem;\r
  font-weight: 700;\r
  line-height: 1.25;\r
  margin-bottom: 0.7rem;\r
  color: var(--charcoal);\r
}\r
\r
.post-card-body p {\r
  color: var(--mid);\r
  font-size: 0.9rem;\r
  line-height: 1.6;\r
}\r
\r
\r
/* ══════════════════════════════════════════\r
   LOAD MORE\r
   ══════════════════════════════════════════ */\r
\r
.load-more-wrap {\r
  text-align: center;\r
  margin-top: 3rem;\r
}\r
\r
.load-more-btn {\r
  font-family: "Inter", sans-serif;\r
  font-size: 0.85rem;\r
  font-weight: 700;\r
  letter-spacing: 1.5px;\r
  text-transform: uppercase;\r
  color: var(--charcoal);\r
  background: none;\r
  border: 2px solid var(--charcoal);\r
  padding: 0.9rem 2.5rem;\r
  cursor: pointer;\r
  transition: all 0.3s;\r
}\r
\r
.load-more-btn:hover {\r
  background: var(--charcoal);\r
  color: var(--sol-gold);\r
}\r
\r
\r
/* ══════════════════════════════════════════\r
   NEWSLETTER\r
   ══════════════════════════════════════════ */\r
\r
.newsletter-section {\r
  padding: 5rem 0;\r
  background: var(--light);\r
}\r
\r
.newsletter-card {\r
  background: var(--charcoal);\r
  padding: 3.5rem;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 3rem;\r
  border-top: 4px solid var(--sol-gold);\r
}\r
\r
.newsletter-text h2 {\r
  font-size: 1.6rem;\r
  font-weight: 700;\r
  color: var(--white);\r
  margin-bottom: 0.5rem;\r
}\r
\r
.newsletter-text p {\r
  color: rgba(255, 255, 255, 0.65);\r
  font-size: 0.95rem;\r
  max-width: 400px;\r
}\r
\r
.newsletter-form {\r
  display: flex;\r
  gap: 0;\r
  flex-shrink: 0;\r
}\r
\r
.newsletter-form input {\r
  font-family: "Inter", sans-serif;\r
  font-size: 0.9rem;\r
  padding: 0.9rem 1.2rem;\r
  border: 1px solid rgba(255, 255, 255, 0.15);\r
  background: rgba(255, 255, 255, 0.06);\r
  color: var(--white);\r
  width: 260px;\r
  outline: none;\r
  transition: border-color 0.2s;\r
}\r
\r
.newsletter-form input::placeholder {\r
  color: rgba(255, 255, 255, 0.35);\r
}\r
\r
.newsletter-form input:focus {\r
  border-color: var(--sol-gold);\r
}\r
\r
.newsletter-form button {\r
  font-family: "Inter", sans-serif;\r
  font-size: 0.8rem;\r
  font-weight: 700;\r
  letter-spacing: 1px;\r
  text-transform: uppercase;\r
  background: var(--sol-gold);\r
  color: var(--charcoal);\r
  border: none;\r
  padding: 0.9rem 1.8rem;\r
  cursor: pointer;\r
  transition: opacity 0.2s;\r
}\r
\r
.newsletter-form button:hover {\r
  opacity: 0.85;\r
}\r
\r
\r
/* ══════════════════════════════════════════\r
   FOOTER\r
   ══════════════════════════════════════════ */\r
\r
footer {\r
  background: var(--charcoal);\r
  color: var(--white);\r
  border-top: 4px solid var(--maroon);\r
  padding: 4rem 5% 2rem;\r
  text-align: center;\r
}\r
\r
.footer-logo {\r
  font-family: "Orbitron", sans-serif;\r
  font-size: 1.8rem;\r
  font-weight: 700;\r
  letter-spacing: 1px;\r
  margin-bottom: 1.5rem;\r
}\r
\r
.footer-logo .invictus {\r
  color: var(--white);\r
}\r
\r
.footer-logo .dynamics-tag {\r
  color: var(--white);\r
  font-size: 1.2rem;\r
  letter-spacing: 0;\r
}\r
\r
footer p {\r
  color: rgba(255, 255, 255, 0.7);\r
  font-size: 0.95rem;\r
  letter-spacing: 1px;\r
  margin-bottom: 0.5rem;\r
}\r
\r
.sasol-tag {\r
  margin-top: 1.5rem;\r
  color: var(--sol-gold);\r
  font-family: "Roboto Mono", monospace;\r
  font-size: 0.85rem;\r
  font-weight: 500;\r
  text-transform: uppercase;\r
}\r
\r
\r
/* ══════════════════════════════════════════\r
   RESPONSIVE FEATURES\r
   ══════════════════════════════════════════ */\r
\r
@media (max-width: 900px) {\r
  .featured-card {\r
    grid-template-columns: 1fr;\r
  }\r
\r
  .featured-img {\r
    min-height: 240px;\r
  }\r
\r
  .newsletter-card {\r
    flex-direction: column;\r
    text-align: center;\r
    padding: 2.5rem;\r
  }\r
\r
  .newsletter-text p {\r
    margin: 0 auto;\r
  }\r
\r
  .newsletter-form {\r
    flex-direction: column;\r
    width: 100%;\r
  }\r
\r
  .newsletter-form input {\r
    width: 100%;\r
  }\r
}\r
\r
@media (max-width: 768px) {\r
  .nav-links {\r
    display: none;\r
  }\r
\r
  .posts-grid {\r
    grid-template-columns: 1fr;\r
  }\r
\r
  .blog-hero {\r
    padding: 140px 5% 60px;\r
  }\r
\r
  .featured-body {\r
    padding: 2rem;\r
  }\r
}`,xc=a=>a.preventDefault();function sm(){Wr("blog",am),Hr("Blog — SOL-Invictus | Sasol Solar Car Challenge");const[a,d]=R.useState("all");R.useEffect(()=>{window.scrollTo(0,0)},[]);const s=f=>a==="all"||f===a;return u.jsxs(u.Fragment,{children:[u.jsx(Mt,{}),u.jsxs("header",{className:"blog-hero",children:[u.jsx("div",{className:"blog-hero-bg"}),u.jsxs("div",{className:"blog-hero-content",children:[u.jsx("span",{className:"section-tag",children:"Dispatches from the Workshop"}),u.jsxs("h1",{children:["The ",u.jsx("span",{className:"sol",children:"SOL"})," Journal"]}),u.jsx("p",{children:"Build updates, race reports, engineering deep-dives, and team news from the SOLINVICTUS [Dynamics] crew."})]})]}),u.jsx("div",{className:"filter-bar",children:u.jsx("div",{className:"filter-inner",children:lm.map(f=>u.jsx("button",{className:`filter-btn${a===f.filter?" active":""}`,"data-filter":f.filter,onClick:()=>d(f.filter),children:f.label},f.filter))})}),u.jsx("section",{className:"featured-section",children:u.jsx("div",{className:"section-center",children:u.jsxs("a",{href:"blog-post.html",className:"featured-card","data-category":mn.category,onClick:xc,style:{display:s(mn.category)?"":"none"},children:[u.jsxs("div",{className:"featured-img",children:[u.jsx("img",{src:Je(mn.img),alt:"SOL-1 chassis assembly",onError:f=>f.currentTarget.parentElement.classList.add("no-img")}),u.jsx("span",{className:"featured-badge",children:"Latest"})]}),u.jsxs("div",{className:"featured-body",children:[u.jsxs("div",{className:"post-meta-row",children:[u.jsx("span",{className:`post-category ${yc[mn.category]}`,children:vc[mn.category]}),u.jsx("span",{className:"post-date",children:mn.date})]}),u.jsx("h2",{children:mn.title}),u.jsx("p",{children:mn.excerpt}),u.jsxs("div",{className:"post-author",children:[u.jsx("div",{className:"author-avatar",children:u.jsx("img",{src:Je(mn.author.avatar),alt:"Author",onError:f=>{f.currentTarget.style.display="none"}})}),u.jsxs("div",{children:[u.jsx("span",{className:"author-name",children:mn.author.name}),u.jsx("span",{className:"author-role",children:mn.author.role})]})]})]})]})})}),u.jsx("section",{className:"posts-section",children:u.jsxs("div",{className:"section-center",children:[u.jsx("div",{className:"posts-grid",children:im.map((f,y)=>u.jsxs("a",{href:"blog-post.html",className:"post-card","data-category":f.category,onClick:xc,style:{display:s(f.category)?"":"none"},children:[u.jsx("div",{className:"post-card-img",children:u.jsx("img",{src:Je(f.img),alt:f.title,onError:w=>w.currentTarget.parentElement.classList.add("no-img")})}),u.jsxs("div",{className:"post-card-body",children:[u.jsxs("div",{className:"post-meta-row",children:[u.jsx("span",{className:`post-category ${yc[f.category]}`,children:vc[f.category]}),u.jsx("span",{className:"post-date",children:f.date})]}),u.jsx("h3",{children:f.title}),u.jsx("p",{children:f.excerpt})]})]},y))}),u.jsx("div",{className:"load-more-wrap",children:u.jsx("button",{className:"load-more-btn",children:"Load More Posts"})})]})}),u.jsx("section",{className:"newsletter-section",children:u.jsx("div",{className:"section-center",children:u.jsxs("div",{className:"newsletter-card",children:[u.jsxs("div",{className:"newsletter-text",children:[u.jsx("h2",{children:"Stay in the Loop"}),u.jsx("p",{children:"Build updates, race results, and team announcements — straight to your inbox. No spam, just solar."})]}),u.jsxs("div",{className:"newsletter-form",children:[u.jsx("input",{type:"email",placeholder:"your@email.com"}),u.jsx("button",{type:"button",children:"Subscribe"})]})]})})}),u.jsx(Dc,{})]})}function um(){Wr("newsletter",bc),Hr("SOl Invictus - Hero & Popup");const[a,d]=R.useState(!1),[s,f]=R.useState(!1),y=R.useRef(null),w=R.useRef(null),k=()=>{d(!0),setTimeout(()=>{var _;return(_=y.current)==null?void 0:_.focus()},300)},P=()=>d(!1);R.useEffect(()=>{const _=setTimeout(k,5e3);return()=>clearTimeout(_)},[]),R.useEffect(()=>{const _=I=>{I.key==="Escape"&&a&&P()};return document.addEventListener("keydown",_),()=>document.removeEventListener("keydown",_)},[a]);const S=_=>{_.preventDefault(),f(!0),setTimeout(()=>{var I;P(),f(!1),(I=w.current)==null||I.reset()},2e3)};return u.jsxs(u.Fragment,{children:[u.jsx("section",{className:"hero",children:u.jsxs("div",{className:"hero-content",children:[u.jsx("h1",{children:"Welcome to SOl Invictus"}),u.jsx("p",{children:"Empowering your potential through cutting-edge solutions and innovative thinking"}),u.jsxs("button",{className:"hero-cta",id:"openPopup",onClick:k,children:[u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),"Get Weekly Insights"]})]})}),u.jsx("div",{className:`popup-overlay${a?" active":""}`,id:"popupOverlay",onClick:_=>{_.target===_.currentTarget&&P()},children:u.jsxs("div",{className:"popup-modal",children:[u.jsx("button",{className:"popup-close",id:"closePopup",onClick:P,children:"×"}),u.jsxs("div",{className:"popup-header",children:[u.jsx("h2",{children:"Stay Ahead of the Curve"}),u.jsx("p",{children:"Subscribe to our weekly newsletter and receive exclusive insights, tips, and updates straight to your inbox."})]}),u.jsxs("form",{className:"popup-form",ref:w,onSubmit:S,children:[u.jsx("input",{type:"email",name:"email",placeholder:"Enter your email address",required:!0,"aria-label":"Email address",ref:y}),u.jsx("button",{type:"submit",style:s?{background:"#10b981"}:void 0,children:s?"Subscribed! ✓":"Subscribe Free"})]}),u.jsxs("p",{style:{fontSize:"0.85rem",color:"#94a3b8",marginTop:"1rem"},children:["By subscribing, you agree to our"," ",u.jsx("a",{href:"#",style:{color:"#3b82f6",textDecoration:"none"},children:"Privacy Policy"}),". We respect your inbox."]})]})}),u.jsx("footer",{children:"© 2024 SOl Invictus. All rights reserved."})]})}function cm(){return u.jsx($p,{children:u.jsxs(Fp,{children:[u.jsx(Jn,{path:"/",element:u.jsx(hc,{})}),u.jsx(Jn,{path:"/team",element:u.jsx(em,{})}),u.jsx(Jn,{path:"/mentors",element:u.jsx(rm,{})}),u.jsx(Jn,{path:"/sponsors",element:u.jsx(om,{})}),u.jsx(Jn,{path:"/blog",element:u.jsx(sm,{})}),u.jsx(Jn,{path:"/newsletter",element:u.jsx(um,{})}),u.jsx(Jn,{path:"*",element:u.jsx(hc,{})})]})})}Qf.createRoot(document.getElementById("root")).render(u.jsx(kc.StrictMode,{children:u.jsx(cm,{})}));
