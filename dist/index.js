"use strict";var w=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=w(function(x,l){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,f=require('@stdlib/symbol-iterator/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),T=1e308;function g(r,e,t){var n,v,i,u;if(!s(r)||m(r))throw new TypeError(o('0Pt49',r));if(!s(e)||m(e))throw new TypeError(o('0Pt4A',e));if(arguments.length>2){if(!y(t))throw new TypeError(o('0Pt2m',t));i=t}else i=T;return u=-1,n={},a(n,"next",b),a(n,"return",q),f&&a(n,f,h),n;function b(){return u+=1,v||u>=i?{done:!0}:{value:r+u*e,done:!1}}function q(p){return v=!0,arguments.length?{value:p,done:!0}:{done:!0}}function h(){return g(r,e,i)}}l.exports=g
});var E=d();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
