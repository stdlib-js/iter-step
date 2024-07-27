// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function o(d,m,l){var f,p,h,j;if(!t(d)||r(d))throw new TypeError(i("0Pt49",d));if(!t(m)||r(m))throw new TypeError(i("0Pt4A",m));if(arguments.length>2){if(!n(l))throw new TypeError(i("0Pt2m",l));h=l}else h=1e308;return j=-1,e(f={},"next",(function(){if(j+=1,p||j>=h)return{done:!0};return{value:d+j*m,done:!1}})),e(f,"return",(function(e){if(p=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s&&e(f,s,(function(){return o(d,m,h)})),f}export{o as default};
//# sourceMappingURL=index.mjs.map
