// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";var o=1e308;function d(m,l,p){var h,j,v,a;if(!t(m)||r(m))throw new TypeError(i("0Pt49,Hq",m));if(!t(l)||r(l))throw new TypeError(i("0Pt4A,Hr",l));if(arguments.length>2){if(!s(p))throw new TypeError(i("0Pt2m,L9",p));v=p}else v=o;return a=-1,e(h={},"next",f),e(h,"return",u),n&&e(h,n,g),h;function f(){return a+=1,j||a>=v?{done:!0}:{value:m+a*l,done:!1}}function u(e){return j=!0,arguments.length?{value:e,done:!0}:{done:!0}}function g(){return d(m,l,v)}}export{d as default};
//# sourceMappingURL=index.mjs.map
