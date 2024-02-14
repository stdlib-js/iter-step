// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function y(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,m,"$1e"),t=f.call(t,v,"e"),t=f.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,b,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,_=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,i,t,a,o,p,l,u,f;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=T(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,i,t,n;for(i=[],n=0,t=V.exec(e);t;)(r=e.slice(n,V.lastIndex-t[0].length)).length&&i.push(r),i.push(F(t)),n=V.lastIndex,t=V.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function j(e){return"string"==typeof e}function O(e){var r,i;if(!j(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return I.apply(null,r)}var A=Object.prototype,C=A.toString,N=A.__defineGetter__,R=A.__defineSetter__,P=A.__lookupGetter__,Z=A.__lookupSetter__,W=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===C.call(i))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(P.call(e,r)||Z.call(e,r)?(t=e.__proto__,e.__proto__=A,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,i.get),o&&R&&R.call(e,r,i.set),e};function G(e,r,i){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function L(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function Y(e,r){return null!=e&&z.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"",D=X()?function(e){var r,i,t;if(null==e)return M.call(e);i=e[B],r=Y(e,B);try{e[B]=void 0}catch(r){return M.call(e)}return t=M.call(e),r?e[B]=i:delete e[B],t}:function(e){return M.call(e)},H=Number,J=H.prototype.toString,K=X();function Q(e){return"object"==typeof e&&(e instanceof H||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function ee(e){return L(e)||Q(e)}function re(e){return e!=e}G(ee,"isPrimitive",L),G(ee,"isObject",Q);var ie=Number.POSITIVE_INFINITY,te=H.NEGATIVE_INFINITY,ne=Math.floor;function ae(e){return e<ie&&e>te&&ne(r=e)===r;var r}function oe(e){return L(e)&&ae(e)}function se(e){return Q(e)&&ae(e.valueOf())}function ce(e){return oe(e)||se(e)}function pe(e){return oe(e)&&e>=0}function le(e){return se(e)&&e.valueOf()>=0}function ue(e){return pe(e)||le(e)}G(ce,"isPrimitive",oe),G(ce,"isObject",se),G(ue,"isPrimitive",pe),G(ue,"isObject",le);var fe="function"==typeof q&&"symbol"==typeof q("foo")&&Y(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;function ge(e){return"number"==typeof e}function de(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function he(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+de(n):de(n)+e,t&&(e="-"+e)),e}var be=String.prototype.toLowerCase,we=String.prototype.toUpperCase;function ve(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ge(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=he(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=he(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===we.call(e.specifier)?we.call(i):be.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function me(e){return"string"==typeof e}var ye=Math.abs,Ee=String.prototype.toLowerCase,xe=String.prototype.toUpperCase,ke=String.prototype.replace,Se=/e\+(\d)$/,_e=/e-(\d)$/,Te=/^(\d+)$/,Ie=/^(\d+)e/,Ve=/\.0$/,Fe=/\.0*e/,$e=/(\..*[^0])0*e/;function je(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ge(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ye(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ke.call(i,$e,"$1e"),i=ke.call(i,Fe,"e"),i=ke.call(i,Ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ke.call(i,Se,"e+0$1"),i=ke.call(i,_e,"e-0$1"),e.alternate&&(i=ke.call(i,Te,"$1."),i=ke.call(i,Ie,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===xe.call(e.specifier)?xe.call(i):Ee.call(i)}function Oe(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ae(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Oe(t):Oe(t)+e}var Ce=String.fromCharCode,Ne=isNaN,Re=Array.isArray;function Pe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ze(e){var r,i,t,n,a,o,s,c,p;if(!Re(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(me(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Pe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ne(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ne(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ve(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ne(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ne(a)?String(t.arg):Ce(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=je(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=he(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ae(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var We=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ge(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Le(e){var r,i,t,n;for(i=[],n=0,t=We.exec(e);t;)(r=e.slice(n,We.lastIndex-t[0].length)).length&&i.push(r),i.push(Ge(t)),n=We.lastIndex,t=We.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ue(e){return"string"==typeof e}function Xe(e){var r,i,t;if(!Ue(e))throw new TypeError(Xe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Le(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Ze.apply(null,i)}var Me=1e308;return function e(r,i,t){var n,a,o,s;if(!L(r)||re(r))throw new TypeError(Xe("invalid argument. First argument must be a number. Value: `%s`.",r));if(!L(i)||re(i))throw new TypeError(Xe("invalid argument. Second argument must be a number. Value: `%s`.",i));if(arguments.length>2){if(!pe(t))throw new TypeError(Xe("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));o=t}else o=Me;return s=-1,G(n={},"next",c),G(n,"return",p),fe&&G(n,fe,l),n;function c(){return s+=1,a||s>=o?{done:!0}:{value:r+s*i,done:!1}}function p(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return e(r,i,o)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterStep=r();
//# sourceMappingURL=browser.js.map
