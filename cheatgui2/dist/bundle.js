(()=>{"use strict";var e={258:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(303),o=n.n(r),l=n(185),i=n.n(l)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Arvo:400,700|Sen:400,700,800&display=swap&subset=latin-ext);"]),i.push([e.id,'#game-wrapper{font-family:"Sen",sans-serif}#game-wrapper #cheat-menu{height:465px;background-color:rgba(238,238,238,.7333333333);padding:2px;position:absolute;top:0px;left:0px;transition:top .35s;padding:10px;border:10px solid rgba(0,0,0,.1);border-radius:15px;overflow-y:scroll;resize:none;overflow:auto}#game-wrapper .menu-left{width:100%;height:100%;float:center}#game-wrapper #menu-toggler{z-index:1;position:absolute;border-radius:3px;background-color:rgba(255,255,255,.7333333333);transition:background-color .15s;font-size:23px;height:26px;width:50px;border:1px solid rgba(0,0,0,.1)}#game-wrapper #menu-toggler:hover{background-color:rgba(221,221,221,.7333333333)}#game-wrapper #menu-toggler:active{background-color:rgba(187,187,187,.7333333333)}#game-wrapper #fps-counter{z-index:2;position:absolute;border-radius:3px;background-color:rgba(255,255,255,.7333333333);transition:background-color .15s;width:130px;height:26px;font-size:23px;border:1px solid rgba(0,0,0,.1);margin-left:83%}#game-wrapper #fps-counter:hover{background-color:rgba(221,221,221,.7333333333)}#game-wrapper #fps-counter:active{background-color:rgba(187,187,187,.7333333333)}#game-wrapper .menu-area h1{font-family:"Sen",sans-serif;font-size:30px;font-weight:700;color:#111;margin:10px}#game-wrapper .menu-area button{background-color:rgba(0,0,0,.55);color:#fff;border-radius:5px;border:1px solid #eee;padding:1%;transition:all .15s;margin:5px 5px;transition-property:border-color,background-color}#game-wrapper .menu-area button:hover{border-color:rgba(119,119,119,.8666666667);background-color:#ddd}#game-wrapper .menu-area button:active{border-color:#555;background-color:#bbb}#game-wrapper .menu-area button[status=true]{border-color:rgba(85,170,85,.8666666667);background-color:#9bee9b}#game-wrapper .menu-area button[status=true]:hover{border-color:rgba(179,187,176,.8666666667);background-color:#bffebf}#game-wrapper .menu-area button[status=true]:active{border-color:#4e5c50;background-color:#24be6a}#game-wrapper .menu-area button[status=false]{border-color:rgba(119,102,102,.8666666667);background-color:#9b9b9b}#game-wrapper .menu-area button[status=false]:hover{border-color:rgba(133,133,133,.8666666667);background-color:#bfbfbf}#game-wrapper .menu-area button[status=false]:active{border-color:#4c3e40;background-color:#be246a}#game-wrapper .menu-title{font-family:"Verdana",sans-serif;font-size:40px;font-weight:900;color:#fff}#chat-frame{width:12%;height:80%;top:-10%;bottom:-10%;left:80%;right:0%;position:fixed;z-index:4}.radioDiv{width:125px;height:125px;display:inline-block;margin:7px;background-color:#5a7e3f;color:#000;background-size:cover;outline:#000 5px solid;vertical-align:top;font-weight:700;user-select:none;-webkit-user-drag:none;cursor:pointer}.radioDiv:hover{background-blend-mode:overlay;color:#d3d3d3}.radioDiv:active{background-blend-mode:multiply;color:#fff}.radioDiv[checked]{background-blend-mode:color-dodge;color:#ffebcd}.radioDiv[checked]:active{background-blend-mode:color-burn;color:aqua}.radioSwal{width:fit-content !important;min-width:32em !important;max-width:46em !important}.centeredMenu{position:fixed;top:-10%;left:10%;right:10%;width:80%;height:80%;z-index:2;background-color:rgba(0,0,0,.5);backdrop-filter:blur(5px)}',""]);const a=i},185:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,l){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(i[u]=!0)}for(var _=0;_<e.length;_++){var c=[].concat(e[_]);r&&i[c[0]]||(void 0!==l&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=l),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},303:e=>{e.exports=function(e){return e[1]}},624:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var l={},i=[],a=0;a<e.length;a++){var u=e[a],_=r.base?u[0]+r.base:u[0],c=l[_]||0,s="".concat(_," ").concat(c);l[_]=c+1;var p=n(s),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var f=o(d,r);r.byIndex=a,t.splice(a,0,{identifier:s,updater:f,references:1})}i.push(s)}return i}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var l=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<l.length;i++){var a=n(l[i]);t[a].references--}for(var u=r(e,o),_=0;_<l.length;_++){var c=n(l[_]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}l=u}}},892:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},716:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},359:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},990:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var l=n.sourceMap;l&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},230:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={id:r,exports:{}};return e[r](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e,t,r,o,l,i={},a=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function _(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function s(t,n,r){var o,l,i,a={};for(i in n)"key"==i?o=n[i]:"ref"==i?l=n[i]:a[i]=n[i];if(arguments.length>2&&(a.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===a[i]&&(a[i]=t.defaultProps[i]);return p(t,a,o,l,null)}function p(e,n,o,l,i){var a={type:e,props:n,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++r:i};return null==i&&null!=t.vnode&&t.vnode(a),a}function d(e){return e.children}function f(e,t){this.props=e,this.context=t}function h(e,t){if(null==t)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?h(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function v(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!b.__r++||l!==t.debounceRendering)&&((l=t.debounceRendering)||setTimeout)(b)}function b(){for(var e;b.__r=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,r,o,l,i;e.__d&&(l=(o=(t=e).__v).__e,(i=t.__P)&&(n=[],(r=_({},o)).__v=o.__v+1,E(i,o,r,t.__n,void 0!==i.ownerSVGElement,null!=o.__h?[l]:null,n,null==l?h(o):l,o.__h),T(n,o),o.__e!=l&&g(o)))}))}function m(e,t,n,r,o,l,u,_,c,s){var f,g,v,b,m,x,w,S=r&&r.__k||a,C=S.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(b=n.__k[f]=null==(b=t[f])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?p(null,b,null,null,b):Array.isArray(b)?p(d,{children:b},null,null,null):b.__b>0?p(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(v=S[f])||v&&b.key==v.key&&b.type===v.type)S[f]=void 0;else for(g=0;g<C;g++){if((v=S[g])&&b.key==v.key&&b.type===v.type){S[g]=void 0;break}v=null}E(e,b,v=v||i,o,l,u,_,c,s),m=b.__e,(g=b.ref)&&v.ref!=g&&(w||(w=[]),v.ref&&w.push(v.ref,null,b),w.push(g,b.__c||m,b)),null!=m?(null==x&&(x=m),"function"==typeof b.type&&b.__k===v.__k?b.__d=c=y(b,c,e):c=k(e,b,v,S,m,c),"function"==typeof n.type&&(n.__d=c)):c&&v.__e==c&&c.parentNode!=e&&(c=h(v))}for(n.__e=x,f=C;f--;)null!=S[f]&&P(S[f],S[f]);if(w)for(f=0;f<w.length;f++)M(w[f],w[++f],w[++f])}function y(e,t,n){for(var r,o=e.__k,l=0;o&&l<o.length;l++)(r=o[l])&&(r.__=e,t="function"==typeof r.type?y(r,t,n):k(n,r,r,o,r.__e,t));return t}function k(e,t,n,r,o,l){var i,a,u;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),i=null;else{for(a=l,u=0;(a=a.nextSibling)&&u<r.length;u+=2)if(a==o)break e;e.insertBefore(o,l),i=l}return void 0!==i?i:o.nextSibling}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||u.test(t)?n:n+"px"}function w(e,t,n,r,o){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||x(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||x(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?r||e.addEventListener(t,l?C:S,l):e.removeEventListener(t,l?C:S,l);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function S(e){this.l[e.type+!1](t.event?t.event(e):e)}function C(e){this.l[e.type+!0](t.event?t.event(e):e)}function E(e,n,r,o,l,i,a,u,c){var s,p,h,g,v,b,y,k,x,w,S,C,E,T=n.type;if(void 0!==n.constructor)return null;null!=r.__h&&(c=r.__h,u=n.__e=r.__e,n.__h=null,i=[u]),(s=t.__b)&&s(n);try{e:if("function"==typeof T){k=n.props,x=(s=T.contextType)&&o[s.__c],w=s?x?x.props.value:s.__:o,r.__c?y=(p=n.__c=r.__c).__=p.__E:("prototype"in T&&T.prototype.render?n.__c=p=new T(k,w):(n.__c=p=new f(k,w),p.constructor=T,p.render=A),x&&x.sub(p),p.props=k,p.state||(p.state={}),p.context=w,p.__n=o,h=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=T.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=_({},p.__s)),_(p.__s,T.getDerivedStateFromProps(k,p.__s))),g=p.props,v=p.state;for(s=0;s<p._sb.length;s++)p.__h.push(p._sb[s]),p._sb=[];if(h)null==T.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==T.getDerivedStateFromProps&&k!==g&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,w)||n.__v===r.__v){p.props=k,p.state=p.__s,n.__v!==r.__v&&(p.__d=!1),p.__v=n,n.__e=r.__e,n.__k=r.__k,n.__k.forEach((function(e){e&&(e.__=n)})),p.__h.length&&a.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(g,v,b)}))}if(p.context=w,p.props=k,p.__v=n,p.__P=e,S=t.__r,C=0,"prototype"in T&&T.prototype.render)p.state=p.__s,p.__d=!1,S&&S(n),s=p.render(p.props,p.state,p.context);else do{p.__d=!1,S&&S(n),s=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++C<25);p.state=p.__s,null!=p.getChildContext&&(o=_(_({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(b=p.getSnapshotBeforeUpdate(g,v)),E=null!=s&&s.type===d&&null==s.key?s.props.children:s,m(e,Array.isArray(E)?E:[E],n,r,o,l,i,a,u,c),p.base=n.__e,n.__h=null,p.__h.length&&a.push(p),y&&(p.__E=p.__=null),p.__e=!1}else null==i&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=D(r.__e,n,r,o,l,i,a,c);(s=t.diffed)&&s(n)}catch(e){n.__v=null,(c||null!=i)&&(n.__e=u,n.__h=!!c,i[i.indexOf(u)]=null),t.__e(e,n,r)}}function T(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function D(t,n,r,o,l,a,u,_){var s,p,d,f=r.props,g=n.props,v=n.type,b=0;if("svg"===v&&(l=!0),null!=a)for(;b<a.length;b++)if((s=a[b])&&"setAttribute"in s==!!v&&(v?s.localName===v:3===s.nodeType)){t=s,a[b]=null;break}if(null==t){if(null===v)return document.createTextNode(g);t=l?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,g.is&&g),a=null,_=!1}if(null===v)f===g||_&&t.data===g||(t.data=g);else{if(a=a&&e.call(t.childNodes),p=(f=r.props||i).dangerouslySetInnerHTML,d=g.dangerouslySetInnerHTML,!_){if(null!=a)for(f={},b=0;b<t.attributes.length;b++)f[t.attributes[b].name]=t.attributes[b].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===t.innerHTML)||(t.innerHTML=d&&d.__html||""))}if(function(e,t,n,r,o){var l;for(l in n)"children"===l||"key"===l||l in t||w(e,l,null,n[l],r);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||w(e,l,t[l],n[l],r)}(t,g,f,l,_),d)n.__k=[];else if(b=n.props.children,m(t,Array.isArray(b)?b:[b],n,r,o,l&&"foreignObject"!==v,a,u,a?a[0]:r.__k&&h(r,0),_),null!=a)for(b=a.length;b--;)null!=a[b]&&c(a[b]);_||("value"in g&&void 0!==(b=g.value)&&(b!==t.value||"progress"===v&&!b||"option"===v&&b!==f.value)&&w(t,"value",b,f.value,!1),"checked"in g&&void 0!==(b=g.checked)&&b!==t.checked&&w(t,"checked",b,f.checked,!1))}return t}function M(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function P(e,n,r){var o,l;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||M(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&P(o[l],n,r||"function"!=typeof e.type);r||null==e.__e||c(e.__e),e.__=e.__e=e.__d=void 0}function A(e,t,n){return this.constructor(e,n)}function N(n,r,o){var l,a,u;t.__&&t.__(n,r),a=(l="function"==typeof o)?null:o&&o.__k||r.__k,u=[],E(r,n=(!l&&o||r).__k=s(d,null,[n]),a||i,i,void 0!==r.ownerSVGElement,!l&&o?[o]:a?null:r.firstChild?e.call(r.childNodes):null,u,!l&&o?o:a?a.__e:r.firstChild,l),T(u,n)}e=a.slice,t={__e:function(e,t,n,r){for(var o,l,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((l=o.constructor)&&null!=l.getDerivedStateFromError&&(o.setState(l.getDerivedStateFromError(e)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(t){e=t}throw e}},r=0,f.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof e&&(e=e(_({},n),this.props)),e&&_(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),v(this))},f.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},f.prototype.render=d,o=[],b.__r=0;var I=n(624),U=n.n(I),z=n(990),L=n.n(z),F=n(892),H=n.n(F),O=n(359),W=n.n(O),B=n(716),R=n.n(B),j=n(230),Z=n.n(j),V=n(258),$={};$.styleTagTransform=Z(),$.setAttributes=W(),$.insert=H().bind(null,"head"),$.domAPI=L(),$.insertStyleElement=R();U()(V.Z,$);V.Z&&V.Z.locals&&V.Z.locals;document.getElementById("cheat-menu")?.remove(),document.getElementById("menu-toggler")?.remove();!function e(t,n){N(t,n,e)}(s("div",{id:"cheat-menu",style:"position: fixed;top: -10%;left: 10%;right: 10%;width: 80%;height: 80%;z-index: 2;background-color: rgba(0, 0, 0, 0.5);backdrop-filter: blur(5px);"}),document.getElementById("external-content"))})()})();