// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";var o=1e308;function d(m,l,p){var h,j,a,f;if(!r(m)||t(m))throw new TypeError(i("0Cr4M",m));if(!r(l)||t(l))throw new TypeError(i("0Cr4N",l));if(arguments.length>2){if(!s(p))throw new TypeError(i("0Cr2y",p));a=p}else a=o;return f=-1,e(h={},"next",u),e(h,"return",v),n&&e(h,n,g),h;function u(){return f+=1,j||f>=a?{done:!0}:{value:m+f*l,done:!1}}function v(e){return j=!0,arguments.length?{value:e,done:!0}:{done:!0}}function g(){return d(m,l,a)}}export{d as default};
//# sourceMappingURL=index.mjs.map
