function T(){}function V(t,n){for(const e in n)t[e]=n[e];return t}function C(t){return t()}function j(){return Object.create(null)}function y(t){t.forEach(C)}function B(t){return"function"==typeof t}function mt(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function J(t){return 0===Object.keys(t).length}function pt(t,n,e,o){if(t){const i=D(t,n,e,o);return t[0](i)}}function D(t,n,e,o){return t[1]&&o?V(e.ctx.slice(),t[1](o(n))):e.ctx}function gt(t,n,e,o){if(t[2]&&o){const i=t[2](o(e));if(void 0===n.dirty)return i;if("object"==typeof i){const t=[],e=Math.max(n.dirty.length,i.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|i[o];return t}return n.dirty|i}return n.dirty}function yt(t,n,e,o,i,r){if(i){const c=D(n,e,o,r);t.p(c,i)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function wt(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}let $=!1;function K(){$=!0}function Q(){$=!1}function W(t,n,e,o){for(;t<n;){const i=t+(n-t>>1);e(i)<=o?t=i+1:n=i}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let i=0;for(let t=0;t<n.length;t++){const r=n[t].claim_order,c=(i>0&&n[e[i]].claim_order<=r?i+1:W(1,i,(t=>n[e[t]].claim_order),r))-1;o[t]=e[c]+1;const s=c+1;e[s]=t,i=Math.max(s,i)}const r=[],c=[];let s=n.length-1;for(let t=e[i]+1;0!=t;t=o[t-1]){for(r.push(n[t-1]);s>=t;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);r.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<c.length;n++){for(;e<r.length&&c[n].claim_order>=r[e].claim_order;)e++;const o=e<r.length?r[e]:null;t.insertBefore(c[n],o)}}function Y(t,n){if($){for(X(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(void 0!==n.claim_order||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||null!==n.nextSibling)&&t.appendChild(n)}function Z(t,n,e){t.insertBefore(n,e||null)}function tt(t,n,e){$&&!e?Y(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function I(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function $t(){return S(" ")}function Et(){return S("")}function bt(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function R(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const et=["width","height"];function Tt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set&&-1===et.indexOf(o)?t[o]=n[o]:R(t,o,n[o])}function Nt(t,n){for(const e in n)R(t,e,n[e])}function At(t){return t.dataset.svelteH}function St(t){return""===t?null:+t}function nt(t){return Array.from(t.childNodes)}function q(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,o,i=!1){q(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const r=t[o];if(n(r)){const n=e(r);return void 0===n?t.splice(o,1):t[o]=n,i||(t.claim_info.last_index=o),r}}for(let o=t.claim_info.last_index-1;o>=0;o--){const r=t[o];if(n(r)){const n=e(r);return void 0===n?t.splice(o,1):t[o]=n,i?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,r}}return o()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function F(t,n,e,o){return z(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const i=t.attributes[o];e[i.name]||n.push(i.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}function Lt(t,n,e){return F(t,n,e,I)}function Mt(t,n,e){return F(t,n,e,G)}function it(t,n){return z(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>S(n)),!0)}function kt(t){return it(t," ")}function H(t,n,e){for(let o=e;o<t.length;o+=1){const e=t[o];if(8===e.nodeType&&e.textContent.trim()===n)return o}return-1}function jt(t,n){const e=H(t,"HTML_TAG_START",0),o=H(t,"HTML_TAG_END",e+1);if(-1===e||-1===o)return new E(n);q(t);const i=t.splice(e,o-e+1);v(i[0]),v(i[i.length-1]);const r=i.slice(1,i.length-1);if(0===r.length)return new E(n);for(const n of r)n.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new E(n,r)}function Ht(t,n){n=""+n,t.data!==n&&(t.data=n)}function Ot(t,n){t.value=n??""}function Pt(t,n,e,o){t.style.setProperty(n,e,"")}function Ct(t,n,e){t.classList.toggle(n,!!e)}function rt(t,n,{bubbles:e=!1,cancelable:o=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:o})}class st{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(t=!1){this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,e=null){this.e||(this.is_svg?this.e=G(n.nodeName):this.e=I(11===n.nodeType?"TEMPLATE":n.nodeName),this.t="TEMPLATE"!==n.tagName?n:n.content,this.c(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)Z(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(v)}}class E extends st{l=void 0;constructor(t=!1,n){super(t),this.e=this.n=null,this.l=n}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let n=0;n<this.n.length;n+=1)tt(this.t,this.n[n],t)}}let g;function p(t){g=t}function L(){if(!g)throw new Error("Function called outside component initialization");return g}function Bt(t){L().$$.on_mount.push(t)}function Dt(t){L().$$.on_destroy.push(t)}function It(){const t=L();return(n,e,{cancelable:o=!1}={})=>{const i=t.$$.callbacks[n];if(i){const r=rt(n,e,{cancelable:o});return i.slice().forEach((n=>{n.call(t,r)})),!r.defaultPrevented}return!0}}const h=[],O=[];let m=[];const P=[],lt=Promise.resolve();let N=!1;function ct(){N||(N=!0,lt.then(U))}function A(t){m.push(t)}const b=new Set;let d=0;function U(){if(0!==d)return;const t=g;do{try{for(;d<h.length;){const t=h[d];d++,p(t),ot(t.$$)}}catch(t){throw h.length=0,d=0,t}for(p(null),h.length=0,d=0;O.length;)O.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];b.has(n)||(b.add(n),n())}m.length=0}while(h.length);for(;P.length;)P.pop()();N=!1,b.clear(),p(t)}function ot(t){if(null!==t.fragment){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}function ut(t){const n=[],e=[];m.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),m=n}const w=new Set;let _;function Gt(){_={r:0,c:[],p:_}}function Rt(){_.r||y(_.c),_=_.p}function at(t,n){t&&t.i&&(w.delete(t),t.i(n))}function qt(t,n,e,o){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push((()=>{w.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function zt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function ft(t,n,e){const{fragment:o,after_update:i}=t.$$;o&&o.m(n,e),A((()=>{const n=t.$$.on_mount.map(C).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...n):y(n),t.$$.on_mount=[]})),i.forEach(A)}function _t(t,n){const e=t.$$;null!==e.fragment&&(ut(e.after_update),y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){-1===t.$$.dirty[0]&&(h.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ut(t,n,e,o,i,r,c=null,s=[-1]){const a=g;p(t);const l=t.$$={fragment:null,ctx:[],props:r,update:T,not_equal:i,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(a?a.$$.context:[])),callbacks:j(),dirty:s,skip_bound:!1,root:n.target||a.$$.root};c&&c(l.root);let u=!1;if(l.ctx=e?e(t,n.props||{},((n,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&i(l.ctx[n],l.ctx[n]=r)&&(!l.skip_bound&&l.bound[n]&&l.bound[n](r),u&&dt(t,n)),e})):[],l.update(),u=!0,y(l.before_update),l.fragment=!!o&&o(l.ctx),n.target){if(n.hydrate){K();const t=nt(n.target);l.fragment&&l.fragment.l(t),t.forEach(v)}else l.fragment&&l.fragment.c();n.intro&&at(t.$$.fragment),ft(t,n.target,n.anchor),Q(),U()}p(a)}class Vt{$$=void 0;$$set=void 0;$destroy(){_t(this,1),this.$destroy=T}$on(t,n){if(!B(n))return T;const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ht="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ht);export{Ht as A,Gt as B,Ct as C,Pt as D,St as E,Et as F,T as G,E as H,Dt as I,V as J,wt as K,Tt as L,G as M,Mt as N,Nt as O,It as P,zt as Q,Ft as R,Vt as S,ft as T,_t as U,At as V,$t as a,Lt as b,pt as c,nt as d,I as e,kt as f,v as g,R as h,Ut as i,tt as j,Y as k,Ot as l,bt as m,xt as n,gt as o,Rt as p,qt as q,vt as r,mt as s,at as t,yt as u,y as v,Bt as w,S as x,it as y,jt as z};