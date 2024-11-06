(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=e(o);fetch(o.href,l)}})();const qt=!1;var Rt=Array.isArray,Pt=Array.from,It=Object.defineProperty,et=Object.getOwnPropertyDescriptor,Vt=Object.getOwnPropertyDescriptors,nt=Object.getPrototypeOf;const T=2,ft=4,J=8,Q=16,N=32,H=64,R=128,Y=256,m=512,O=1024,P=2048,ct=4096,I=8192,Bt=16384,jt=1<<18,Yt=1<<19;function $t(t){return t===this.v}function Ht(){throw new Error("effect_update_depth_exceeded")}function Kt(){throw new Error("state_unsafe_local_read")}function Ut(){throw new Error("state_unsafe_mutation")}function vt(t){return{f:0,v:t,reactions:null,equals:$t,version:0}}function Wt(t){return zt(vt(t))}function zt(t){return p!==null&&p.f&T&&(E===null?ir([t]):E.push(t)),t}function Gt(t,r){return p!==null&&Z()&&p.f&(T|Q)&&(E===null||!E.includes(t))&&Ut(),Jt(t,r)}function Jt(t,r){return t.equals(r)||(t.v=r,t.version=Tt(),_t(t,O),Z()&&s!==null&&s.f&m&&!(s.f&N)&&(d!==null&&d.includes(t)?(x(s,O),W(s)):b===null?ar([t]):b.push(t))),r}function _t(t,r){var e=t.reactions;if(e!==null)for(var n=Z(),o=e.length,l=0;l<o;l++){var u=e[l],i=u.f;i&O||!n&&u===s||(x(u,r),i&(m|R)&&(i&T?_t(u,P):W(u)))}}const Qt=2;var lt,dt,pt;function Xt(){if(lt===void 0){lt=window;var t=Element.prototype,r=Node.prototype;dt=et(r,"firstChild").get,pt=et(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Zt(t=""){return document.createTextNode(t)}function ht(t){return dt.call(t)}function gt(t){return pt.call(t)}function F(t,r){return ht(t)}function ot(t,r=1,e=!1){let n=t;for(;r--;)n=gt(n);return n}function mt(t){var r=t.children;if(r!==null){t.children=null;for(var e=0;e<r.length;e+=1){var n=r[e];n.f&T?X(n):V(n)}}}function wt(t){var r,e=s;D(t.parent);try{mt(t),r=Nt(t)}finally{D(e)}return r}function Et(t){var r=wt(t),e=(C||t.f&R)&&t.deps!==null?P:m;x(t,e),t.equals(r)||(t.v=r,t.version=Tt())}function X(t){mt(t),q(t,0),x(t,I),t.v=t.children=t.deps=t.ctx=t.reactions=null}function tr(t,r){var e=r.last;e===null?r.last=r.first=t:(e.next=t,t.prev=e,r.last=t)}function K(t,r,e,n=!0){var o=(t&H)!==0,l=s,u={ctx:w,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:r,last:null,next:null,parent:o?null:l,prev:null,teardown:null,transitions:null,version:0};if(e){var i=L;try{ut(!0),tt(u),u.f|=Bt}catch(c){throw V(u),c}finally{ut(i)}}else r!==null&&W(u);var f=e&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Yt)===0;if(!f&&!o&&n&&(l!==null&&tr(u,l),p!==null&&p.f&T)){var _=p;(_.children??(_.children=[])).push(u)}return u}function rr(t){const r=K(H,t,!0);return()=>{V(r)}}function er(t){return K(ft,t,!1)}function nr(t){return lr(t)}function lr(t,r=0){return K(J|Q|r,t,!0)}function or(t,r=!0){return K(J|N,t,!0,r)}function yt(t){var r=t.teardown;if(r!==null){const e=p;A(null);try{r.call(null)}finally{A(e)}}}function xt(t){var r=t.deriveds;if(r!==null){t.deriveds=null;for(var e=0;e<r.length;e+=1)X(r[e])}}function bt(t,r=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var n=e.next;V(e,r),e=n}}function ur(t){for(var r=t.first;r!==null;){var e=r.next;r.f&N||V(r),r=e}}function V(t,r=!0){var e=!1;if((r||t.f&jt)&&t.nodes_start!==null){for(var n=t.nodes_start,o=t.nodes_end;n!==null;){var l=n===o?null:gt(n);n.remove(),n=l}e=!0}bt(t,r&&!e),xt(t),q(t,0),x(t,I);var u=t.transitions;if(u!==null)for(const f of u)f.stop();yt(t);var i=t.parent;i!==null&&i.first!==null&&kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function kt(t){var r=t.parent,e=t.prev,n=t.next;e!==null&&(e.next=n),n!==null&&(n.prev=e),r!==null&&(r.first===t&&(r.first=n),r.last===t&&(r.last=e))}let $=!1,L=!1;function ut(t){L=t}let z=[],M=0;let p=null;function A(t){p=t}let s=null;function D(t){s=t}let E=null;function ir(t){E=t}let d=null,g=0,b=null;function ar(t){b=t}let Ot=0,C=!1,w=null;function Tt(){return++Ot}function Z(){return w!==null&&w.l===null}function U(t){var u,i;var r=t.f;if(r&O)return!0;if(r&P){var e=t.deps,n=(r&R)!==0;if(e!==null){var o;if(r&Y){for(o=0;o<e.length;o++)((u=e[o]).reactions??(u.reactions=[])).push(t);t.f^=Y}for(o=0;o<e.length;o++){var l=e[o];if(U(l)&&Et(l),n&&s!==null&&!C&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}n||x(t,m)}return!1}function sr(t,r,e){throw t}function Nt(t){var v;var r=d,e=g,n=b,o=p,l=C,u=E,i=w,f=t.f;d=null,g=0,b=null,p=f&(N|H)?null:t,C=!L&&(f&R)!==0,E=null,w=t.ctx;try{var _=(0,t.fn)(),c=t.deps;if(d!==null){var a;if(q(t,g),c!==null&&g>0)for(c.length=g+d.length,a=0;a<d.length;a++)c[g+a]=d[a];else t.deps=c=d;if(!C)for(a=g;a<c.length;a++)((v=c[a]).reactions??(v.reactions=[])).push(t)}else c!==null&&g<c.length&&(q(t,g),c.length=g);return _}finally{d=r,g=e,b=n,p=o,C=l,E=u,w=i}}function fr(t,r){let e=r.reactions;if(e!==null){var n=e.indexOf(t);if(n!==-1){var o=e.length-1;o===0?e=r.reactions=null:(e[n]=e[o],e.pop())}}e===null&&r.f&T&&(d===null||!d.includes(r))&&(x(r,P),r.f&(R|Y)||(r.f^=Y),q(r,0))}function q(t,r){var e=t.deps;if(e!==null)for(var n=r;n<e.length;n++)fr(t,e[n])}function tt(t){var r=t.f;if(!(r&I)){x(t,m);var e=s;s=t;try{r&Q?ur(t):bt(t),xt(t),yt(t);var n=Nt(t);t.teardown=typeof n=="function"?n:null,t.version=Ot}catch(o){sr(o)}finally{s=e}}}function cr(){M>1e3&&(M=0,Ht()),M++}function vr(t){var r=t.length;if(r!==0){cr();var e=L;L=!0;try{for(var n=0;n<r;n++){var o=t[n];o.f&m||(o.f^=m);var l=[];St(o,l),_r(l)}}finally{L=e}}}function _r(t){var r=t.length;if(r!==0)for(var e=0;e<r;e++){var n=t[e];!(n.f&(I|ct))&&U(n)&&(tt(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?kt(n):n.fn=null))}}function dr(){if($=!1,M>1001)return;const t=z;z=[],vr(t),$||(M=0)}function W(t){$||($=!0,queueMicrotask(dr));for(var r=t;r.parent!==null;){r=r.parent;var e=r.f;if(e&(H|N)){if(!(e&m))return;r.f^=m}}z.push(r)}function St(t,r){var e=t.first,n=[];t:for(;e!==null;){var o=e.f,l=(o&N)!==0,u=l&&(o&m)!==0;if(!u&&!(o&ct))if(o&J){l?e.f^=m:U(e)&&tt(e);var i=e.first;if(i!==null){e=i;continue}}else o&ft&&n.push(e);var f=e.next;if(f===null){let a=e.parent;for(;a!==null;){if(t===a)break t;var _=a.next;if(_!==null){e=_;continue t}a=a.parent}}e=f}for(var c=0;c<n.length;c++)i=n[c],r.push(i),St(i,r)}function Ft(t){var i;var r=t.f,e=(r&T)!==0;if(e&&r&I){var n=wt(t);return X(t),n}if(p!==null){E!==null&&E.includes(t)&&Kt();var o=p.deps;d===null&&o!==null&&o[g]===t?g++:d===null?d=[t]:d.push(t),b!==null&&s!==null&&s.f&m&&!(s.f&N)&&b.includes(t)&&(x(s,O),W(s))}else if(e&&t.deps===null){var l=t,u=l.parent;u!==null&&!((i=u.deriveds)!=null&&i.includes(l))&&(u.deriveds??(u.deriveds=[])).push(l)}return e&&(l=t,U(l)&&Et(l)),t.v}const pr=~(O|P|m);function x(t,r){t.f=t.f&pr|r}function hr(t,r=!1,e){w={p:w,c:null,e:null,m:!1,s:t,x:null,l:null},r||(w.l={s:null,u:null,r1:[],r2:vt(!1)})}function gr(t){const r=w;if(r!==null){const u=r.e;if(u!==null){var e=s,n=p;r.e=null;try{for(var o=0;o<u.length;o++){var l=u[o];D(l.effect),A(l.reaction),er(l.fn)}}finally{D(e),A(n)}}w=r.p,r.m=!0}return{}}const Ct=new Set,G=new Set;function mr(t){for(var r=0;r<t.length;r++)Ct.add(t[r]);for(var e of G)e(t)}function j(t){var rt;var r=this,e=r.ownerDocument,n=t.type,o=((rt=t.composedPath)==null?void 0:rt.call(t))||[],l=o[0]||t.target,u=0,i=t.__root;if(i){var f=o.indexOf(i);if(f!==-1&&(r===document||r===window)){t.__root=r;return}var _=o.indexOf(r);if(_===-1)return;f<=_&&(u=f)}if(l=o[u]||t.target,l!==r){It(t,"currentTarget",{configurable:!0,get(){return l||e}});var c=p,a=s;A(null),D(null);try{for(var v,h=[];l!==null;){var y=l.assignedSlot||l.parentNode||l.host||null;try{var k=l["__"+n];if(k!==void 0&&!l.disabled)if(Rt(k)){var[Dt,...Mt]=k;Dt.apply(l,[t,...Mt])}else k.call(l,t)}catch(B){v?h.push(B):v=B}if(t.cancelBubble||y===r||y===null)break;l=y}if(v){for(let B of h)queueMicrotask(()=>{throw B});throw v}}finally{t.__root=r,delete t.currentTarget,A(c),D(a)}}}function wr(t){var r=document.createElement("template");return r.innerHTML=t,r.content}function Er(t,r){var e=s;e.nodes_start===null&&(e.nodes_start=t,e.nodes_end=r)}function Lt(t,r){var e=(r&Qt)!==0,n,o=!t.startsWith("<!>");return()=>{n===void 0&&(n=wr(o?t:"<!>"+t),n=ht(n));var l=e?document.importNode(n,!0):n.cloneNode(!0);return Er(l,l),l}}function At(t,r){t!==null&&t.before(r)}const yr=["touchstart","touchmove"];function xr(t){return yr.includes(t)}function br(t,r){var e=r==null?"":typeof r=="object"?r+"":r;e!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=e,t.nodeValue=e==null?"":e+"")}function kr(t,r){return Or(t,r)}const S=new Map;function Or(t,{target:r,anchor:e,props:n={},events:o,context:l,intro:u=!0}){Xt();var i=new Set,f=a=>{for(var v=0;v<a.length;v++){var h=a[v];if(!i.has(h)){i.add(h);var y=xr(h);r.addEventListener(h,j,{passive:y});var k=S.get(h);k===void 0?(document.addEventListener(h,j,{passive:y}),S.set(h,1)):S.set(h,k+1)}}};f(Pt(Ct)),G.add(f);var _=void 0,c=rr(()=>{var a=e??r.appendChild(Zt());return or(()=>{if(l){hr({});var v=w;v.c=l}o&&(n.$$events=o),_=t(a,n)||{},l&&gr()}),()=>{var y;for(var v of i){r.removeEventListener(v,j);var h=S.get(v);--h===0?(document.removeEventListener(v,j),S.delete(v)):S.set(v,h)}G.delete(f),it.delete(_),a!==e&&((y=a.parentNode)==null||y.removeChild(a))}});return it.set(_,c),_}let it=new WeakMap;function at(t,r,e,n){var o=t.__attributes??(t.__attributes={});o[r]!==(o[r]=e)&&(e==null?t.removeAttribute(r):typeof e!="string"&&Tr(t).includes(r)?t[r]=e:t.setAttribute(r,e))}var st=new Map;function Tr(t){var r=st.get(t.nodeName);if(r)return r;st.set(t.nodeName,r=[]);for(var e,n=nt(t),o=Element.prototype;o!==n;){e=Vt(n);for(var l in e)e[l].set&&r.push(l);n=nt(n)}return r}const Nr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Nr);const Sr="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='26.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20308'%3e%3cpath%20fill='%23FF3E00'%20d='M239.682%2040.707C211.113-.182%20154.69-12.301%20113.895%2013.69L42.247%2059.356a82.198%2082.198%200%200%200-37.135%2055.056a86.566%2086.566%200%200%200%208.536%2055.576a82.425%2082.425%200%200%200-12.296%2030.719a87.596%2087.596%200%200%200%2014.964%2066.244c28.574%2040.893%2084.997%2053.007%20125.787%2027.016l71.648-45.664a82.182%2082.182%200%200%200%2037.135-55.057a86.601%2086.601%200%200%200-8.53-55.577a82.409%2082.409%200%200%200%2012.29-30.718a87.573%2087.573%200%200%200-14.963-66.244'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M106.889%20270.841c-23.102%206.007-47.497-3.036-61.103-22.648a52.685%2052.685%200%200%201-9.003-39.85a49.978%2049.978%200%200%201%201.713-6.693l1.35-4.115l3.671%202.697a92.447%2092.447%200%200%200%2028.036%2014.007l2.663.808l-.245%202.659a16.067%2016.067%200%200%200%202.89%2010.656a17.143%2017.143%200%200%200%2018.397%206.828a15.786%2015.786%200%200%200%204.403-1.935l71.67-45.672a14.922%2014.922%200%200%200%206.734-9.977a15.923%2015.923%200%200%200-2.713-12.011a17.156%2017.156%200%200%200-18.404-6.832a15.78%2015.78%200%200%200-4.396%201.933l-27.35%2017.434a52.298%2052.298%200%200%201-14.553%206.391c-23.101%206.007-47.497-3.036-61.101-22.649a52.681%2052.681%200%200%201-9.004-39.849a49.428%2049.428%200%200%201%2022.34-33.114l71.664-45.677a52.218%2052.218%200%200%201%2014.563-6.398c23.101-6.007%2047.497%203.036%2061.101%2022.648a52.685%2052.685%200%200%201%209.004%2039.85a50.559%2050.559%200%200%201-1.713%206.692l-1.35%204.116l-3.67-2.693a92.373%2092.373%200%200%200-28.037-14.013l-2.664-.809l.246-2.658a16.099%2016.099%200%200%200-2.89-10.656a17.143%2017.143%200%200%200-18.398-6.828a15.786%2015.786%200%200%200-4.402%201.935l-71.67%2045.674a14.898%2014.898%200%200%200-6.73%209.975a15.9%2015.9%200%200%200%202.709%2012.012a17.156%2017.156%200%200%200%2018.404%206.832a15.841%2015.841%200%200%200%204.402-1.935l27.345-17.427a52.147%2052.147%200%200%201%2014.552-6.397c23.101-6.006%2047.497%203.037%2061.102%2022.65a52.681%2052.681%200%200%201%209.003%2039.848a49.453%2049.453%200%200%201-22.34%2033.12l-71.664%2045.673a52.218%2052.218%200%200%201-14.563%206.398'%3e%3c/path%3e%3c/svg%3e",Fr="/vite_3/vite.svg",Cr=(t,r)=>{Gt(r,Ft(r)+1)};var Lr=Lt("<button> </button>");function Ar(t){let r=Wt(0);var e=Lr();e.__click=[Cr,r];var n=F(e);nr(()=>br(n,`count is ${Ft(r)??""}`)),At(t,e)}mr(["click"]);var Dr=Lt('<main><div><a href="https://vite.dev" target="_blank" rel="noreferrer"><img class="logo svelte-11cv5lq" alt="Vite Logo"></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img class="logo svelte svelte-11cv5lq" alt="Svelte Logo"></a></div> <h1>Vite + Svelte</h1> <div class="card"><!></div> <p>Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!</p> <p class="read-the-docs svelte-11cv5lq">Click on the Vite and Svelte logos to learn more</p></main>');function Mr(t){var r=Dr(),e=F(r),n=F(e),o=F(n);at(o,"src",Fr);var l=ot(n,2),u=F(l);at(u,"src",Sr);var i=ot(e,4),f=F(i);Ar(f),At(t,r)}kr(Mr,{target:document.getElementById("app")});
