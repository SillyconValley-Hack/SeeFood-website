function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e){t.$$.on_destroy.push(function(t,n){const e=t.subscribe(n);return e.unsubscribe?()=>e.unsubscribe():e}(n,e))}function a(t,n,e){if(t){const o=i(t,n,e);return t[0](o)}}function i(t,e,o){return t[1]?n({},n(e.$$scope.ctx,t[1](o?o(e):{}))):e.$$scope.ctx}function f(t,e,o,r){return t[1]?n({},n(e.$$scope.changed||{},t[1](r?r(o):{}))):e.$$scope.changed||{}}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function h(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function b(){return g(" ")}function y(){return g("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function v(t){return Array.from(t.childNodes)}function w(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?m(n):h(n)}function E(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return g(n)}function A(t){return E(t," ")}function N(t,n){n=""+n,t.data!==n&&(t.data=n)}function j(t,n,e){t.classList[e?"add":"remove"](n)}let k;function S(t){k=t}function C(t,n){(function(){if(!k)throw new Error("Function called outside component initialization");return k})().$$.context.set(t,n)}const L=[],q=[],z=[],B=[],F=Promise.resolve();let O=!1;function T(t){z.push(t)}function D(){const t=new Set;do{for(;L.length;){const t=L.shift();S(t),G(t.$$)}for(;q.length;)q.pop()();for(let n=0;n<z.length;n+=1){const e=z[n];t.has(e)||(e(),t.add(e))}z.length=0}while(L.length);for(;B.length;)B.pop()();O=!1}function G(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(T))}const H=new Set;let M;function P(){M={r:0,c:[],p:M}}function I(){M.r||r(M.c),M=M.p}function J(t,n){t&&t.i&&(H.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),M.c.push(()=>{H.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function Q(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],s=n[c];if(s){for(const t in u)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function R(t){return"object"==typeof t&&null!==t?t:{}}function U(t,n,o){const{fragment:u,on_mount:s,on_destroy:a,after_update:i}=t.$$;u.m(n,o),T(()=>{const n=s.map(e).filter(c);a?a.push(...n):r(n),t.$$.on_mount=[]}),i.forEach(T)}function V(t,n){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function W(t,n){t.$$.dirty||(L.push(t),O||(O=!0,F.then(D)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function X(n,e,c,u,s,a){const i=k;S(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:null};let d=!1;l.ctx=c?c(n,f,(t,e,o=e)=>(l.ctx&&s(l.ctx[t],l.ctx[t]=o)&&(l.bound[t]&&l.bound[t](o),d&&W(n,t)),e)):f,l.update(),d=!0,r(l.before_update),l.fragment=u(l.ctx),e.target&&(e.hydrate?l.fragment.l(v(e.target)):l.fragment.c(),e.intro&&J(n.$$.fragment),U(n,e.target,e.anchor),D()),S(i)}class Y{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{y as A,n as B,Q as C,R as D,C as E,P as F,I as G,p as H,Y as S,b as a,v as b,w as c,$ as d,h as e,A as f,_ as g,d as h,X as i,l as j,m as k,E as l,a as m,t as n,j as o,x as p,U as q,f as r,u as s,g as t,i as u,J as v,K as w,V as x,s as y,N as z};
