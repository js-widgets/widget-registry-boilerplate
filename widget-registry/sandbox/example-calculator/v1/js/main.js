/*! For license information please see main.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-calculator/v1/",n(n.s=11)}([function(e,t,n){"use strict";e.exports=n(4)},function(e,t){e.exports=React},function(e,t,n){var r;!function(o){"use strict";var i,c=1e6,l=1e6,s="[big.js] ",a=s+"Invalid ",u=a+"decimal places",f=a+"rounding mode",h=s+"Division by zero",p={},d=void 0,b=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function v(e,t,n,r){var o=e.c,i=e.e+t+1;if(i<o.length){if(1===n)r=o[i]>=5;else if(2===n)r=o[i]>5||5==o[i]&&(r||i<0||o[i+1]!==d||1&o[i-1]);else if(3===n)r=r||!!o[0];else if(r=!1,0!==n)throw Error(f);if(i<1)o.length=1,r?(e.e=-t,o[0]=1):o[0]=e.e=0;else{if(o.length=i--,r)for(;++o[i]>9;)o[i]=0,i--||(++e.e,o.unshift(1));for(i=o.length;!o[--i];)o.pop()}}else if(n<0||n>3||n!==~~n)throw Error(f);return e}function j(e,t,n,r){var o,i,l=e.constructor,s=!e.c[0];if(n!==d){if(n!==~~n||n<(3==t)||n>c)throw Error(3==t?a+"precision":u);for(n=r-(e=new l(e)).e,e.c.length>++r&&v(e,n,l.RM),2==t&&(r=e.e+n+1);e.c.length<r;)e.c.push(0)}if(o=e.e,n=(i=e.c.join("")).length,2!=t&&(1==t||3==t&&r<=o||o<=l.NE||o>=l.PE))i=i.charAt(0)+(n>1?"."+i.slice(1):"")+(o<0?"e":"e+")+o;else if(o<0){for(;++o;)i="0"+i;i="0."+i}else if(o>0)if(++o>n)for(o-=n;o--;)i+="0";else o<n&&(i=i.slice(0,o)+"."+i.slice(o));else n>1&&(i=i.charAt(0)+"."+i.slice(1));return e.s<0&&(!s||4==t)?"-"+i:i}p.abs=function(){var e=new this.constructor(this);return e.s=1,e},p.cmp=function(e){var t,n=this,r=n.c,o=(e=new n.constructor(e)).c,i=n.s,c=e.s,l=n.e,s=e.e;if(!r[0]||!o[0])return r[0]?i:o[0]?-c:0;if(i!=c)return i;if(t=i<0,l!=s)return l>s^t?1:-1;for(c=(l=r.length)<(s=o.length)?l:s,i=-1;++i<c;)if(r[i]!=o[i])return r[i]>o[i]^t?1:-1;return l==s?0:l>s^t?1:-1},p.div=function(e){var t=this,n=t.constructor,r=t.c,o=(e=new n(e)).c,i=t.s==e.s?1:-1,l=n.DP;if(l!==~~l||l<0||l>c)throw Error(u);if(!o[0])throw Error(h);if(!r[0])return new n(0*i);var s,a,f,p,b,j=o.slice(),m=s=o.length,x=r.length,g=r.slice(0,s),y=g.length,O=e,w=O.c=[],k=0,C=l+(O.e=t.e-e.e)+1;for(O.s=i,i=C<0?0:C,j.unshift(0);y++<s;)g.push(0);do{for(f=0;f<10;f++){if(s!=(y=g.length))p=s>y?1:-1;else for(b=-1,p=0;++b<s;)if(o[b]!=g[b]){p=o[b]>g[b]?1:-1;break}if(!(p<0))break;for(a=y==s?o:j;y;){if(g[--y]<a[y]){for(b=y;b&&!g[--b];)g[b]=9;--g[b],g[y]+=10}g[y]-=a[y]}for(;!g[0];)g.shift()}w[k++]=p?f:++f,g[0]&&p?g[y]=r[m]||0:g=[r[m]]}while((m++<x||g[0]!==d)&&i--);return w[0]||1==k||(w.shift(),O.e--),k>C&&v(O,l,n.RM,g[0]!==d),O},p.eq=function(e){return!this.cmp(e)},p.gt=function(e){return this.cmp(e)>0},p.gte=function(e){return this.cmp(e)>-1},p.lt=function(e){return this.cmp(e)<0},p.lte=function(e){return this.cmp(e)<1},p.minus=p.sub=function(e){var t,n,r,o,i=this,c=i.constructor,l=i.s,s=(e=new c(e)).s;if(l!=s)return e.s=-s,i.plus(e);var a=i.c.slice(),u=i.e,f=e.c,h=e.e;if(!a[0]||!f[0])return f[0]?(e.s=-s,e):new c(a[0]?i:0);if(l=u-h){for((o=l<0)?(l=-l,r=a):(h=u,r=f),r.reverse(),s=l;s--;)r.push(0);r.reverse()}else for(n=((o=a.length<f.length)?a:f).length,l=s=0;s<n;s++)if(a[s]!=f[s]){o=a[s]<f[s];break}if(o&&(r=a,a=f,f=r,e.s=-e.s),(s=(n=f.length)-(t=a.length))>0)for(;s--;)a[t++]=0;for(s=t;n>l;){if(a[--n]<f[n]){for(t=n;t&&!a[--t];)a[t]=9;--a[t],a[n]+=10}a[n]-=f[n]}for(;0===a[--s];)a.pop();for(;0===a[0];)a.shift(),--h;return a[0]||(e.s=1,a=[h=0]),e.c=a,e.e=h,e},p.mod=function(e){var t,n=this,r=n.constructor,o=n.s,i=(e=new r(e)).s;if(!e.c[0])throw Error(h);return n.s=e.s=1,t=1==e.cmp(n),n.s=o,e.s=i,t?new r(n):(o=r.DP,i=r.RM,r.DP=r.RM=0,n=n.div(e),r.DP=o,r.RM=i,this.minus(n.times(e)))},p.plus=p.add=function(e){var t,n=this,r=n.constructor,o=n.s,i=(e=new r(e)).s;if(o!=i)return e.s=-i,n.minus(e);var c=n.e,l=n.c,s=e.e,a=e.c;if(!l[0]||!a[0])return a[0]?e:new r(l[0]?n:0*o);if(l=l.slice(),o=c-s){for(o>0?(s=c,t=a):(o=-o,t=l),t.reverse();o--;)t.push(0);t.reverse()}for(l.length-a.length<0&&(t=a,a=l,l=t),o=a.length,i=0;o;l[o]%=10)i=(l[--o]=l[o]+a[o]+i)/10|0;for(i&&(l.unshift(i),++s),o=l.length;0===l[--o];)l.pop();return e.c=l,e.e=s,e},p.pow=function(e){var t=this,n=new t.constructor(1),r=n,o=e<0;if(e!==~~e||e<-1e6||e>l)throw Error(a+"exponent");for(o&&(e=-e);1&e&&(r=r.times(t)),e>>=1;)t=t.times(t);return o?n.div(r):r},p.round=function(e,t){var n=this.constructor;if(e===d)e=0;else if(e!==~~e||e<-c||e>c)throw Error(u);return v(new n(this),e,t===d?n.RM:t)},p.sqrt=function(){var e,t,n,r=this,o=r.constructor,i=r.s,c=r.e,l=new o(.5);if(!r.c[0])return new o(r);if(i<0)throw Error(s+"No square root");0===(i=Math.sqrt(r+""))||i===1/0?((t=r.c.join("")).length+c&1||(t+="0"),c=((c+1)/2|0)-(c<0||1&c),e=new o(((i=Math.sqrt(t))==1/0?"1e":(i=i.toExponential()).slice(0,i.indexOf("e")+1))+c)):e=new o(i),c=e.e+(o.DP+=4);do{n=e,e=l.times(n.plus(r.div(n)))}while(n.c.slice(0,c).join("")!==e.c.slice(0,c).join(""));return v(e,o.DP-=4,o.RM)},p.times=p.mul=function(e){var t,n=this,r=n.constructor,o=n.c,i=(e=new r(e)).c,c=o.length,l=i.length,s=n.e,a=e.e;if(e.s=n.s==e.s?1:-1,!o[0]||!i[0])return new r(0*e.s);for(e.e=s+a,c<l&&(t=o,o=i,i=t,a=c,c=l,l=a),t=new Array(a=c+l);a--;)t[a]=0;for(s=l;s--;){for(l=0,a=c+s;a>s;)l=t[a]+i[s]*o[a-s-1]+l,t[a--]=l%10,l=l/10|0;t[a]=(t[a]+l)%10}for(l?++e.e:t.shift(),s=t.length;!t[--s];)t.pop();return e.c=t,e},p.toExponential=function(e){return j(this,1,e,e)},p.toFixed=function(e){return j(this,2,e,this.e+e)},p.toPrecision=function(e){return j(this,3,e,e-1)},p.toString=function(){return j(this)},p.valueOf=p.toJSON=function(){return j(this,4)},(i=function e(){function t(n){var r=this;if(!(r instanceof t))return n===d?e():new t(n);n instanceof t?(r.s=n.s,r.e=n.e,r.c=n.c.slice()):function(e,t){var n,r,o;if(0===t&&1/t<0)t="-0";else if(!b.test(t+=""))throw Error(a+"number");e.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(n=t.indexOf("."))>-1&&(t=t.replace(".",""));(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length);for(o=t.length,r=0;r<o&&"0"==t.charAt(r);)++r;if(r==o)e.c=[e.e=0];else{for(;o>0&&"0"==t.charAt(--o););for(e.e=n-r-1,e.c=[],n=0;r<=o;)e.c[n++]=+t.charAt(r++)}}(r,n),r.constructor=t}return t.prototype=p,t.DP=20,t.RM=1,t.NE=-7,t.PE=21,t.version="5.2.2",t}()).default=i.Big=i,void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n(5);var r=n(1),o=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,i={},a=null,u=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:c.current}}t.jsx=a,t.jsxs=a},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function c(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,s=c(e),a=1;a<arguments.length;a++){for(var u in n=Object(arguments[a]))o.call(n,u)&&(s[u]=n[u]);if(r){l=r(n);for(var f=0;f<l.length;f++)i.call(n,l[f])&&(s[l[f]]=n[l[f]])}}return s}},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),i=n.n(o),c=n(3),l=n.n(c);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}n(6);var j=function(e){h(n,e);var t=v(n);function n(){return s(this,n),t.apply(this,arguments)}return u(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"component-display",children:Object(r.jsx)("div",{children:this.props.value})})}}]),n}(i.a.Component),m=(n(7),function(e){h(n,e);var t=v(n);function n(){var e;s(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).handleClick=function(){e.props.clickHandler(e.props.name)},e}return u(n,[{key:"render",value:function(){var e=["component-button",this.props.orange?"orange":"",this.props.wide?"wide":""];return Object(r.jsx)("div",{className:e.join(" ").trim(),children:Object(r.jsx)("button",{onClick:this.handleClick,children:this.props.name})})}}]),n}(i.a.Component)),x=(n(8),function(e){h(n,e);var t=v(n);function n(){var e;s(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).handleClick=function(t){e.props.clickHandler(t)},e}return u(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"component-button-panel",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{name:"AC",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"+/-",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"%",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"\xf7",clickHandler:this.handleClick,orange:!0})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{name:"7",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"8",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"9",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"x",clickHandler:this.handleClick,orange:!0})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{name:"4",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"5",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"6",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"-",clickHandler:this.handleClick,orange:!0})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{name:"1",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"2",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"3",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"+",clickHandler:this.handleClick,orange:!0})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{name:"0",clickHandler:this.handleClick,wide:!0}),Object(r.jsx)(m,{name:".",clickHandler:this.handleClick}),Object(r.jsx)(m,{name:"=",clickHandler:this.handleClick,orange:!0})]})]})}}]),n}(i.a.Component)),g=n(2),y=n.n(g);function O(e,t,n){var r=y()(e||"0"),o=y()(t||("\xf7"===n||"x"===n?"1":"0"));if("+"===n)return r.plus(o).toString();if("-"===n)return r.minus(o).toString();if("x"===n)return r.times(o).toString();if("\xf7"===n)return"0"===o?(alert("Divide by 0 error"),"0"):r.div(o).toString();throw Error("Unknown operation '".concat(n,"'"))}function w(e,t){if("AC"===t)return{total:null,next:null,operation:null};if(/[0-9]+/.test(t))return"0"===t&&"0"===e.next?{}:e.operation?e.next?{next:e.next+t}:{next:t}:e.next?{next:"0"===e.next?t:e.next+t,total:null}:{next:t,total:null};if("%"===t){if(e.operation&&e.next){var n=O(e.total,e.next,e.operation);return{total:y()(n).div(y()("100")).toString(),next:null,operation:null}}return e.next?{next:y()(e.next).div(y()("100")).toString()}:{}}return"."===t?e.next?e.next.includes(".")?{}:{next:e.next+"."}:{next:"0."}:"="===t?e.next&&e.operation?{total:O(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===t?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:O(e.total,e.next,e.operation),next:null,operation:t}:e.next?{total:e.next,next:null,operation:t}:{operation:t}}n(9);var k=function(e){h(n,e);var t=v(n);function n(){var e;s(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={total:null,next:null,operation:null},e.handleClick=function(t){e.setState(w(e.state,t))},e}return u(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"component-app",children:[Object(r.jsx)(j,{value:this.state.next||this.state.total||"0"}),Object(r.jsx)(x,{clickHandler:this.handleClick})]})}}]),n}(i.a.Component);n(10),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.renderExampleWidget=function(e,t,n,o){var i=document.getElementById(e);l.a.render(Object(r.jsx)(k,{}),i,(function(){return o(i)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}}]);
//# sourceMappingURL=main.js.map