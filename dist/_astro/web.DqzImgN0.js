const c={context:void 0,registry:void 0};function N(e){c.context=e}function ge(){return{...c.context,id:`${c.context.id}${c.context.count++}-`,count:0}}const ye=(e,t)=>e===t,j=Symbol("solid-proxy"),L={equals:ye};let be=oe;const C=1,M=2,z={owned:null,cleanups:null,context:null,owner:null};var h=null;let I=null,we=null,g=null,y=null,A=null,D=0;function ee(e,t){const n=g,s=h,i=e.length===0,r=t===void 0?s:t,l=i?z:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=i?e:()=>e(()=>m(()=>q(l)));h=l,g=null;try{return T(o,!0)}finally{g=n,h=s}}function R(e,t){t=t?Object.assign({},L,t):L;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),ie(n,i));return[se.bind(n),s]}function p(e,t,n){const s=re(e,t,!1,C);H(s)}function x(e,t,n){n=n?Object.assign({},L,n):L;const s=re(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,H(s),se.bind(s)}function m(e){if(g===null)return e();const t=g;g=null;try{return e()}finally{g=t}}function xe(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function me(){return h}function Ae(e){A.push.apply(A,e),e.length=0}function te(e,t){const n=Symbol("context");return{id:n,Provider:Ne(n),defaultValue:e}}function Se(e){return h&&h.context&&h.context[e.id]!==void 0?h.context[e.id]:e.defaultValue}function ne(e){const t=x(e),n=x(()=>B(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let X;function pe(){return X||(X=te())}function se(){if(this.sources&&this.state)if(this.state===C)H(this);else{const e=y;y=null,T(()=>v(this),!1),y=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function ie(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=I&&I.running;l&&I.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?y.push(r):A.push(r),r.observers&&fe(r)),l||(r.state=C)}if(y.length>1e6)throw y=[],new Error},!1)),t}function H(e){if(!e.fn)return;q(e);const t=D;Ce(e,e.value,t)}function Ce(e,t,n){let s;const i=h,r=g;g=h=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=C,e.owned&&e.owned.forEach(q),e.owned=null),e.updatedAt=n+1,ce(l)}finally{g=r,h=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ie(e,s):e.value=s,e.updatedAt=n)}function re(e,t,n,s=C,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return h===null||h!==z&&(h.owned?h.owned.push(r):h.owned=[r]),r}function le(e){if(e.state===0)return;if(e.state===M)return v(e);if(e.suspense&&m(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===C)H(e);else if(e.state===M){const s=y;y=null,T(()=>v(e,t[0]),!1),y=s}}function T(e,t){if(y)return e();let n=!1;t||(y=[]),A?n=!0:A=[],D++;try{const s=e();return Ee(n),s}catch(s){n||(A=null),y=null,ce(s)}}function Ee(e){if(y&&(oe(y),y=null),e)return;const t=A;A=null,t.length&&T(()=>be(t),!1)}function oe(e){for(let t=0;t<e.length;t++)le(e[t])}function v(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===C?s!==t&&(!s.updatedAt||s.updatedAt<D)&&le(s):i===M&&v(s,t)}}}function fe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=M,n.pure?y.push(n):A.push(n),n.observers&&fe(n))}}function q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function $e(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ce(e,t=h){throw $e(e)}function B(e){if(typeof e=="function"&&!e.length)return B(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=B(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ne(e,t){return function(s){let i;return p(()=>i=m(()=>(h.context={...h.context,[e]:s.value},ne(()=>s.children))),void 0),i}}let ue=!1;function Oe(){ue=!0}function Pe(e,t){if(ue&&c.context){const n=c.context;N(ge());const s=m(()=>e(t||{}));return N(n),s}return m(()=>e(t||{}))}function k(){return!0}const K={get(e,t,n){return t===j?n:e.get(t)},has(e,t){return t===j?!0:e.has(t)},set:k,deleteProperty:k,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:k,deleteProperty:k}},ownKeys(e){return e.keys()}};function U(e){return(e=typeof e=="function"?e():e)?e:{}}function Te(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ze(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&j in o,e[l]=typeof o=="function"?(t=!0,x(o)):o}if(t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const f=U(e[o])[l];if(f!==void 0)return f}},has(l){for(let o=e.length-1;o>=0;o--)if(l in U(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(U(e[o])));return[...new Set(l)]}},K);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const f=Object.getOwnPropertyNames(o);for(let d=f.length-1;d>=0;d--){const u=f[d];if(u==="__proto__"||u==="constructor")continue;const a=Object.getOwnPropertyDescriptor(o,u);if(!s[u])s[u]=a.get?{enumerable:!0,configurable:!0,get:Te.bind(n[u]=[a.get.bind(o)])}:a.value!==void 0?a:void 0;else{const b=n[u];b&&(a.get?b.push(a.get.bind(o)):a.value!==void 0&&b.push(()=>a.value))}}}const i={},r=Object.keys(s);for(let l=r.length-1;l>=0;l--){const o=r[l],f=s[o];f&&f.get?Object.defineProperty(i,o,f):i[o]=f?f.value:void 0}return i}function ze(e,...t){if(j in e){const i=new Set(t.length>1?t.flat():t[0]),r=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},K));return r.push(new Proxy({get(l){return i.has(l)?void 0:e[l]},has(l){return i.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!i.has(l))}},K)),r}const n={},s=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const r=Object.getOwnPropertyDescriptor(e,i),l=!r.get&&!r.set&&r.enumerable&&r.writable&&r.configurable;let o=!1,f=0;for(const d of t)d.includes(i)&&(o=!0,l?s[f][i]=r.value:Object.defineProperty(s[f],i,r)),++f;o||(l?n[i]=r.value:Object.defineProperty(n,i,r))}return[...s,n]}const ae=e=>`Stale read from <${e}>.`;function et(e){const t=e.keyed,n=x(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return x(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?m(()=>i(t?s:()=>{if(!m(n))throw ae("Show");return e.when})):i}return e.fallback},void 0,void 0)}function tt(e){let t=!1;const n=(r,l)=>(t?r[1]===l[1]:!r[1]==!l[1])&&r[2]===l[2],s=ne(()=>e.children),i=x(()=>{let r=s();Array.isArray(r)||(r=[r]);for(let l=0;l<r.length;l++){const o=r[l].when;if(o)return t=!!r[l].keyed,[l,o,r[l]]}return[-1]},void 0,{equals:n});return x(()=>{const[r,l,o]=i();if(r<0)return e.fallback;const f=o.children;return typeof f=="function"&&f.length>0?m(()=>f(t?l:()=>{if(m(i)[0]!==r)throw ae("Match");return o.when})):f},void 0,void 0)}function nt(e){return e}const ke=te();function st(e){let t=0,n,s,i,r,l;const[o,f]=R(!1),d=pe(),u={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:o,effects:[],resolved:!1},a=me();if(c.context&&c.load){const S=c.context.id+c.context.count;let E=c.load(S);if(E&&(typeof E!="object"||E.status!=="success"?i=E:c.gather(S)),i&&i!=="$$f"){const[_,P]=R(void 0,{equals:!1});r=_,i.then(()=>{if(c.done)return P();c.gather(S),N(s),P(),N()},F=>{l=F,P()})}}const b=Se(ke);b&&(n=b.register(u.inFallback));let w;return xe(()=>w&&w()),Pe(d.Provider,{value:u,get children(){return x(()=>{if(l)throw l;if(s=c.context,r)return r(),r=void 0;s&&i==="$$f"&&N();const S=x(()=>e.children);return x(E=>{const _=u.inFallback(),{showContent:P=!0,showFallback:F=!0}=n?n():{};if((!_||i&&i!=="$$f")&&P)return u.resolved=!0,w&&w(),w=s=i=void 0,Ae(u.effects),S();if(F)return w?E:ee(he=>(w=he,s&&(N({id:s.id+"f",count:0}),s=void 0),e.fallback),a)})})}})}const je=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Le=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...je]),Me=new Set(["innerHTML","textContent","innerText","children"]),ve=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),De=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function He(e,t){const n=De[e];return typeof n=="object"?n[t]?n.$:void 0:n}const qe=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),_e={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Fe(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,f=t[i-1].nextSibling,d=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const u=r<s?o?n[o-1].nextSibling:n[r-o]:f;for(;o<r;)e.insertBefore(n[o++],u)}else if(r===o)for(;l<i;)(!d||!d.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const u=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],u),t[i]=n[r]}else{if(!d){d=new Map;let a=o;for(;a<r;)d.set(n[a],a++)}const u=d.get(t[l]);if(u!=null)if(o<u&&u<r){let a=l,b=1,w;for(;++a<i&&a<r&&!((w=d.get(t[a]))==null||w!==u+b);)b++;if(b>u-o){const S=t[l];for(;o<u;)e.insertBefore(n[o++],S)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const G="_$DX_DELEGATE";function Ie(e,t,n,s={}){let i;return ee(r=>{i=r,t===document?e():Xe(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function it(e,t,n){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>m(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function Ue(e,t=window.document){const n=t[G]||(t[G]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,de))}}function V(e,t,n){c.context&&e.isConnected||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Be(e,t,n,s){c.context&&e.isConnected||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function Ke(e,t){c.context&&e.isConnected||(t==null?e.removeAttribute("class"):e.className=t)}function Ve(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function Ye(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,l;for(r=0,l=i.length;r<l;r++){const o=i[r];!o||o==="undefined"||t[o]||(W(e,o,!1),delete n[o])}for(r=0,l=s.length;r<l;r++){const o=s[r],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(W(e,o,!0),n[o]=f)}return n}function Re(e,t,n){if(!t)return n?V(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function rt(e,t={},n,s){const i={};return s||p(()=>i.children=O(e,t.children,i.children)),p(()=>t.ref&&t.ref(e)),p(()=>Ge(e,t,n,!0,i,!0)),i}function Xe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return O(e,t,s,n);p(i=>O(e,t(),i,n),s)}function Ge(e,t,n,s,i={},r=!1){t||(t={});for(const l in i)if(!(l in t)){if(l==="children")continue;i[l]=Q(e,l,null,i[l],n,r)}for(const l in t){if(l==="children"){s||O(e,t.children);continue}const o=t[l];i[l]=Q(e,l,o,i[l],n,r)}}function We(e,t,n={}){c.completed=globalThis._$HY.completed,c.events=globalThis._$HY.events,c.load=i=>globalThis._$HY.r[i],c.has=i=>i in globalThis._$HY.r,c.gather=i=>Z(t,i),c.registry=new Map,c.context={id:n.renderId||"",count:0},Z(t,n.renderId);const s=Ie(e,t,[...t.childNodes],n);return c.context=null,s}function lt(e){let t,n;return!c.context||!(t=c.registry.get(n=Je()))?e():(c.completed&&c.completed.add(t),c.registry.delete(n),t)}function ot(){c.events&&!c.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=c;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;de(s),t.shift()}}),c.events.queued=!0)}function Qe(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function W(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function Q(e,t,n,s,i,r){let l,o,f,d,u;if(t==="style")return Re(e,n,s);if(t==="classList")return Ye(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const a=t.slice(3);s&&e.removeEventListener(a,s),n&&e.addEventListener(a,n)}else if(t.slice(0,10)==="oncapture:"){const a=t.slice(10);s&&e.removeEventListener(a,s,!0),n&&e.addEventListener(a,n,!0)}else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),b=qe.has(a);if(!b&&s){const w=Array.isArray(s)?s[0]:s;e.removeEventListener(a,w)}(b||n)&&(Ve(e,a,n,b),b&&Ue([a]))}else if(t.slice(0,5)==="attr:")V(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(f=Me.has(t))||!i&&((d=He(t,e.tagName))||(o=Le.has(t)))||(l=e.nodeName.includes("-"))){if(u)t=t.slice(5),o=!0;else if(c.context&&e.isConnected)return n;t==="class"||t==="className"?Ke(e,n):l&&!o&&!f?e[Qe(t)]=n:e[d||t]=n}else{const a=i&&t.indexOf(":")>-1&&_e[t.split(":")[0]];a?Be(e,a,t,n):V(e,ve[t]||t,n)}return n}function de(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),c.registry&&!c.done&&(c.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function O(e,t,n,s,i){const r=!!c.context&&e.isConnected;if(r){!n&&(n=[...e.childNodes]);let f=[];for(let d=0;d<n.length;d++){const u=n[d];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():f.push(u)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(r)return n;if(l==="number"&&(t=t.toString()),o){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=$(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(r)return n;n=$(e,n,s)}else{if(l==="function")return p(()=>{let f=t();for(;typeof f=="function";)f=f();n=O(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[],d=n&&Array.isArray(n);if(Y(f,t,n,i))return p(()=>n=O(e,f,n,s,!0)),()=>n;if(r){if(!f.length)return n;if(s===void 0)return[...e.childNodes];let u=f[0],a=[u];for(;(u=u.nextSibling)!==s;)a.push(u);return n=a}if(f.length===0){if(n=$(e,n,s),o)return n}else d?n.length===0?J(e,f,s):Fe(e,n,f):(n&&$(e),J(e,f));n=f}else if(t.nodeType){if(r&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=$(e,n,s,t);$(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Y(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],f=n&&n[e.length],d;if(!(o==null||o===!0||o===!1))if((d=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=Y(e,o,f)||i;else if(d==="function")if(s){for(;typeof o=="function";)o=o();i=Y(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const u=String(o);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function J(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function $(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const f=o.parentNode===e;!r&&!l?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function Z(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!c.registry.has(r)&&c.registry.set(r,i)}}function Je(){const e=c.context;return`${e.id}${e.count++}`}const ft=(...e)=>(Oe(),We(...e));export{nt as M,tt as S,rt as a,p as b,Pe as c,Ue as d,Ke as e,V as f,lt as g,et as h,Xe as i,ft as j,Ie as k,st as l,Ze as m,ot as r,ze as s,it as t};
