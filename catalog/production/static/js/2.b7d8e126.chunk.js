(this["webpackJsonp@js-widgets/widget-registry-boilerplate"]=this["webpackJsonp@js-widgets/widget-registry-boilerplate"]||[]).push([[2],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(6),o=n.n(r),a=n(0),l=n.n(a),i=n(10),c=n.n(i),s=n(34),u=n(39);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=s.a.prefix,_=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,r,o=y(a);function a(){return h(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e,t,n=this,r=this.props,o=r.id,a=r.className,i=r.handleTabClick,s=r.handleTabKeyDown,u=r.disabled,f=r.href,h=void 0===f?"#":f,v=r.index,p=r.label,y=r.selected,O=r.tabIndex,w=void 0===O?0:O,_=r.onClick,T=r.onKeyDown,S=r.renderAnchor,C=(r.renderContent,b(r,["id","className","handleTabClick","handleTabKeyDown","disabled","href","index","label","selected","tabIndex","onClick","onKeyDown","renderAnchor","renderContent"])),N=c()(a,"".concat(g,"--tabs--scrollable__nav-item"),(m(e={},"".concat(g,"--tabs__nav-item--disabled"),u),m(e,"".concat(g,"--tabs__nav-item--selected"),y),m(e,"".concat(g,"--tabs--scrollable__nav-item--disabled"),u),m(e,"".concat(g,"--tabs--scrollable__nav-item--selected"),y),e)),j=(m(t={},"aria-selected",y),m(t,"aria-disabled",u),m(t,"aria-controls","".concat(o,"__panel")),m(t,"id",o),m(t,"className","".concat(g,"--tabs--scrollable__nav-link")),m(t,"href",h),m(t,"tabIndex",u?-1:w),m(t,"ref",(function(e){n.tabAnchor=e})),t);return l.a.createElement("li",d({},C,{className:N,onClick:function(e){u||(i&&i(v,e),_(e))},onKeyDown:function(e){u||(s&&s(v,e),T(e))},role:"presentation"}),S?S(j):l.a.createElement("button",d({type:"button",role:"tab"},j),p))}}])&&v(t.prototype,n),r&&v(t,r),a}(l.a.Component);m(_,"propTypes",{className:o.a.string,disabled:o.a.bool,handleTabClick:o.a.func,handleTabKeyDown:o.a.func,href:Object(u.a)(o.a.string),id:o.a.string,index:o.a.number,label:o.a.node,onClick:o.a.func.isRequired,onKeyDown:o.a.func.isRequired,renderAnchor:Object(u.a)(o.a.func),renderContent:o.a.func,role:o.a.string.isRequired,selected:o.a.bool.isRequired,tabIndex:o.a.number}),m(_,"defaultProps",{role:"presentation",label:"provide a label",selected:!1,onClick:function(){},onKeyDown:function(){}})},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(6),o=n.n(r),a=n(0),l=n.n(a),i=n(10),c=n.n(i),s=n(34),u=n(105),f=n(48),d=n.n(f),b=n(44),h=n(40);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=s.a.prefix,O=function(e){var t,n,r,o=e.className,a=e.selected,i=e.children,s=p(e,["className","selected","children"]),u=c()("".concat(y,"--tab-content"),(r=o,(n=o)in(t={})?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t));return l.a.createElement("div",v({role:"tabpanel"},s,{className:u,selected:a,hidden:!a}),i)};O.propTypes={children:o.a.node,className:o.a.string,selected:o.a.bool},O.defaultProps={selected:!1};var w=O;function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=s.a.prefix,k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,n,r,o=N(a);function a(){var e;T(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(E(e=o.call.apply(o,[this].concat(n))),"state",{horizontalOverflow:!1}),x(E(e),"tablist",l.a.createRef()),x(E(e),"leftOverflowNavButton",l.a.createRef()),x(E(e),"rightOverflowNavButton",l.a.createRef()),x(E(e),"OVERFLOW_BUTTON_OFFSET",40),x(E(e),"handleScroll",(function(){var t;if(null===(t=e.tablist)||void 0===t?void 0:t.current){var n=e.tablist.current,r=n.clientWidth,o=n.scrollLeft,a=n.scrollWidth;e.setState({tablistClientWidth:r,horizontalOverflow:a>r,tablistScrollWidth:a,tablistScrollLeft:o})}})),x(E(e),"_debouncedHandleWindowResize",null),x(E(e),"_handleWindowResize",e.handleScroll),x(E(e),"getEnabledTabs",(function(){return l.a.Children.toArray(e.props.children).reduce((function(e,t,n){return t.props.disabled?e:e.concat(n)}),[])})),x(E(e),"getNextIndex",(function(t,n){var r=e.getEnabledTabs(),o=Math.max(r.indexOf(t)+n,-1);return r[o>=0&&o<r.length?o:o-Math.sign(o)*r.length]})),x(E(e),"getDirection",(function(e){return Object(b.a)(e,h.a.ArrowLeft)?-1:Object(b.a)(e,h.a.ArrowRight)?1:0})),x(E(e),"getTabAt",(function(t,n){return!n&&e["tab".concat(t)]||l.a.Children.toArray(e.props.children)[t]})),x(E(e),"scrollTabIntoView",(function(t,n){var r=n.index,o=e.getTabAt(r);if(Object(b.b)(t,[h.a.ArrowLeft,h.a.ArrowRight])||"click"===t.type){var a,l=e.state.tablistScrollLeft;null===o||void 0===o||null===(a=o.tabAnchor)||void 0===a||a.scrollIntoView({block:"nearest",inline:"nearest"}),e.tablist.current.scrollLeft>l&&(e.tablist.current.scrollLeft+=e.OVERFLOW_BUTTON_OFFSET)}})),x(E(e),"selectTabAt",(function(t,n){var r=n.index,o=n.onSelectionChange;e.scrollTabIntoView(t,{index:r}),e.state.selected!==r&&(e.setState({selected:r}),"function"===typeof o&&o(r))})),x(E(e),"handleTabKeyDown",(function(t){return function(n,r){Object(b.b)(r,[h.a.Enter,h.a.Space])&&e.selectTabAt(r,{index:n,onSelectionChange:t});var o,a=Object(b.b)(r,[h.a.ArrowLeft,h.a.ArrowRight])?e.getNextIndex(n,e.getDirection(r)):Object(b.a)(r,h.a.Home)?0:Object(b.a)(r,h.a.End)?e.getEnabledTabs().pop():void 0,l=e.getTabAt(a);Object(b.b)(r,[h.a.ArrowLeft,h.a.ArrowRight,h.a.Home,h.a.End])&&(r.preventDefault(),"manual"!==e.props.selectionMode?e.selectTabAt(r,{index:a,onSelectionChange:t}):e.scrollTabIntoView(r,{index:a}),null===l||void 0===l||null===(o=l.tabAnchor)||void 0===o||o.focus())}})),x(E(e),"getTabs",(function(){return l.a.Children.map(e.props.children,(function(e){return e}))})),x(E(e),"handleTabClick",(function(t){return function(n,r){r.preventDefault(),e.selectTabAt(r,{index:n,onSelectionChange:t})}})),x(E(e),"setTabAt",(function(t,n){e["tab".concat(t)]=n})),x(E(e),"overflowNavInterval",null),x(E(e),"handleOverflowNavClick",(function(t,n){var r,o=n.direction,a=n.multiplier,l=void 0===a?10:a,i=null===(r=e.tablist)||void 0===r?void 0:r.current,c=i.clientWidth,s=i.scrollLeft,u=i.scrollWidth;1!==o||s||(e.tablist.current.scrollLeft+=e.OVERFLOW_BUTTON_OFFSET),e.tablist.current.scrollLeft+=o*l;var f=-1===o&&s<e.OVERFLOW_BUTTON_OFFSET,d=1===o&&s+c>=u-e.OVERFLOW_BUTTON_OFFSET;if(f||d){var b,h,v,p;if(f)null===(b=e.rightOverflowNavButton)||void 0===b||null===(h=b.current)||void 0===h||h.focus();if(d)null===(v=e.leftOverflowNavButton)||void 0===v||null===(p=v.current)||void 0===p||p.focus()}})),x(E(e),"handleOverflowNavMouseDown",(function(t,n){var r=n.direction;1===t.buttons&&(e.overflowNavInterval=setInterval((function(){var n,o=null===(n=e.tablist)||void 0===n?void 0:n.current,a=o.clientWidth,l=o.scrollLeft,i=o.scrollWidth,c=-1===r&&l<e.OVERFLOW_BUTTON_OFFSET,s=1===r&&l+a>=i-e.OVERFLOW_BUTTON_OFFSET;(c||s)&&clearInterval(e.overflowNavInterval),e.handleOverflowNavClick(t,{direction:r})})))})),x(E(e),"handleOverflowNavMouseUp",(function(){clearInterval(e.overflowNavInterval)})),e}return t=a,r=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.selected;return t.prevSelected===n?null:{selected:n,prevSelected:n}}}],(n=[{key:"componentDidMount",value:function(){var e;this._debouncedHandleWindowResize||(this._debouncedHandleWindowResize=d()(this._handleWindowResize,200)),this._handleWindowResize(),window.addEventListener("resize",this._debouncedHandleWindowResize);var t=(null===(e=this.tablist)||void 0===e?void 0:e.current)||{},n=t.clientWidth,r=t.scrollLeft,o=t.scrollWidth,a=this.getTabAt(this.state.selected);if(o>n){var l,i,c,s=(null===a||void 0===a||null===(l=a.tabAnchor)||void 0===l?void 0:l.getBoundingClientRect().right)<(null===a||void 0===a||null===(i=a.tabAnchor)||void 0===i?void 0:i.offsetParent.getBoundingClientRect().right),u=r+n===o;null===a||void 0===a||null===(c=a.tabAnchor)||void 0===c||c.scrollIntoView({block:"nearest",inline:"nearest"}),s||u||(this.tablist.current.scrollLeft+=2*this.OVERFLOW_BUTTON_OFFSET)}}},{key:"componentWillUnmount",value:function(){this._debouncedHandleWindowResize&&this._debouncedHandleWindowResize.cancel(),window.removeEventListener("resize",this._debouncedHandleWindowResize)}},{key:"componentDidUpdate",value:function(e,t){var n,r,o=this.tablist.current,a=o.clientWidth,l=o.scrollLeft,i=o.scrollWidth,c=this.state,s=c.tablistClientWidth,u=c.tablistScrollLeft,f=c.tablistScrollWidth,d=c.selected;a===s&&l===u&&i===f||this.setState({horizontalOverflow:i>a,tablistClientWidth:a,tablistScrollLeft:l,tablistScrollWidth:i}),t.selected!==d&&(null===(n=this.getTabAt(d))||void 0===n||null===(r=n.tabAnchor)||void 0===r||r.scrollIntoView({block:"nearest",inline:"nearest"}))}},{key:"render",value:function(){var e,t,n,r=this,o=this.props,a=o.className,i=o.type,s=o.light,f=o.onSelectionChange,d=(o.selectionMode,o.tabContentClassName),b=_(o,["className","type","light","onSelectionChange","selectionMode","tabContentClassName"]),h=this.getTabs().map((function(e,t){var n=t===r.state.selected?0:-1;return l.a.cloneElement(e,{index:t,selected:t===r.state.selected,handleTabClick:r.handleTabClick(f),tabIndex:n,ref:function(e){r.setTabAt(t,e)},handleTabKeyDown:r.handleTabKeyDown(f)})})),v=l.a.Children.map(h,(function(e){var t=e.props,n=t.id,r=t.children,o=t.selected,a=t.renderContent,i=void 0===a?w:a;return l.a.createElement(i,{id:n&&"".concat(n,"__panel"),className:d,hidden:!o,selected:o,"aria-labelledby":n},r)})),p=!this.state.horizontalOverflow||!this.state.tablistScrollLeft,y=!this.state.horizontalOverflow||this.state.tablistScrollLeft+this.state.tablistClientWidth===this.state.tablistScrollWidth,O={tabs:c()(a,"".concat(W,"--tabs--scrollable"),(e={},x(e,"".concat(W,"--tabs--scrollable--container"),"container"===i),x(e,"".concat(W,"--tabs--scrollable--light"),s),e)),tablist:c()("".concat(W,"--tabs--scrollable__nav")),leftOverflowButtonClasses:c()((t={},x(t,"".concat(W,"--tab--overflow-nav-button"),this.state.horizontalOverflow),x(t,"".concat(W,"--tab--overflow-nav-button--hidden"),p),t)),rightOverflowButtonClasses:c()((n={},x(n,"".concat(W,"--tab--overflow-nav-button"),this.state.horizontalOverflow),x(n,"".concat(W,"--tab--overflow-nav-button--hidden"),y),n))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",g({},b,{className:O.tabs,onScroll:this.handleScroll}),l.a.createElement("button",{"aria-hidden":"true",className:O.leftOverflowButtonClasses,onClick:function(e){return r.handleOverflowNavClick(e,{direction:-1})},onMouseDown:function(e){return r.handleOverflowNavMouseDown(e,{direction:-1})},onMouseUp:this.handleOverflowNavMouseUp,ref:this.leftOverflowNavButton,tabIndex:"-1",type:"button"},l.a.createElement(u.d,null)),!p&&l.a.createElement("div",{className:"".concat(W,"--tabs__overflow-indicator--left")}),l.a.createElement("ul",{role:"tablist",tabIndex:-1,className:O.tablist,ref:this.tablist},h),!y&&l.a.createElement("div",{className:"".concat(W,"--tabs__overflow-indicator--right")}),l.a.createElement("button",{"aria-hidden":"true",className:O.rightOverflowButtonClasses,onClick:function(e){return r.handleOverflowNavClick(e,{direction:1})},onMouseDown:function(e){return r.handleOverflowNavMouseDown(e,{direction:1})},onMouseUp:this.handleOverflowNavMouseUp,ref:this.rightOverflowNavButton,tabIndex:"-1",type:"button"},l.a.createElement(u.e,null))),v)}}])&&S(t.prototype,n),r&&S(t,r),a}(l.a.Component);x(k,"propTypes",{children:o.a.node,className:o.a.string,hidden:o.a.bool,light:o.a.bool,onClick:o.a.func,onKeyDown:o.a.func,onSelectionChange:o.a.func,selected:o.a.number,selectionMode:o.a.oneOf(["automatic","manual"]),tabContentClassName:o.a.string,type:o.a.oneOf(["default","container"])}),x(k,"defaultProps",{type:"default",selected:0,selectionMode:"automatic"})}}]);
//# sourceMappingURL=2.b7d8e126.chunk.js.map