import{U as We,A as ze,T as Ue,d as $e,s as He,r as he,F as Ce,j as J,b as qe,n as Ae,c as ge,L as Ye,e as Ge,S as Xe}from"./index-3c069e17.js";async function Je(L,v,y){const k=y?!0:He();await We(ze(Ue($e,"users"),L),{[v]:k},{merge:!0}).then(()=>{}).catch(u=>{console.log(`Unsuccessful returned error ${u}`),setIsFavoriteCountry(f=>!f)})}function Ke(L,v){L=L.toLowerCase(),v=v.toLowerCase();for(var y=[],k,u=0;(k=L.indexOf(v,u))>=0;)u!==k&&y.push(L.substr(u,k-u)),y.push(v),u=k+v.length;return u<L.length&&y.push(L.substr(u)),y}function Qe(L){const{country:v}=L,{searchFilter:y}=he.useContext(Ce);return J("h2",{className:"font-bold text-lg mb-3",children:y==""?v.name.common:Ke(v.name.common,y).map((k,u)=>k==y?J("b",{className:"text-DarkGray underline font-extrabold",children:k},u):k)})}var Se={},Ze={get exports(){return Se},set exports(L){Se=L}};(()=>{var L={296:(u,f,s)=>{var K=/^\s+|\s+$/g,Q=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,j=/^0o[0-7]+$/i,B=parseInt,oe=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g,ue=typeof self=="object"&&self&&self.Object===Object&&self,ae=oe||ue||Function("return this")(),le=Object.prototype.toString,se=Math.max,fe=Math.min,q=function(){return ae.Date.now()};function M(d){var l=typeof d;return!!d&&(l=="object"||l=="function")}function ee(d){if(typeof d=="number")return d;if(function(S){return typeof S=="symbol"||function(_){return!!_&&typeof _=="object"}(S)&&le.call(S)=="[object Symbol]"}(d))return NaN;if(M(d)){var l=typeof d.valueOf=="function"?d.valueOf():d;d=M(l)?l+"":l}if(typeof d!="string")return d===0?d:+d;d=d.replace(K,"");var T=Z.test(d);return T||j.test(d)?B(d.slice(2),T?2:8):Q.test(d)?NaN:+d}u.exports=function(d,l,T){var S,_,V,A,P,R,F=0,Y=!1,z=!1,U=!0;if(typeof d!="function")throw new TypeError("Expected a function");function E(g){var W=S,X=_;return S=_=void 0,F=g,A=d.apply(X,W)}function $(g){return F=g,P=setTimeout(te,l),Y?E(g):A}function G(g){var W=g-R;return R===void 0||W>=l||W<0||z&&g-F>=V}function te(){var g=q();if(G(g))return re(g);P=setTimeout(te,function(W){var X=l-(W-R);return z?fe(X,V-(W-F)):X}(g))}function re(g){return P=void 0,U&&S?E(g):(S=_=void 0,A)}function ie(){var g=q(),W=G(g);if(S=arguments,_=this,R=g,W){if(P===void 0)return $(R);if(z)return P=setTimeout(te,l),E(R)}return P===void 0&&(P=setTimeout(te,l)),A}return l=ee(l)||0,M(T)&&(Y=!!T.leading,V=(z="maxWait"in T)?se(ee(T.maxWait)||0,l):V,U="trailing"in T?!!T.trailing:U),ie.cancel=function(){P!==void 0&&clearTimeout(P),F=0,S=R=_=P=void 0},ie.flush=function(){return P===void 0?A:re(q())},ie}},96:(u,f,s)=>{var K="Expected a function",Q=/^\s+|\s+$/g,Z=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,B=/^0o[0-7]+$/i,oe=parseInt,ue=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g,ae=typeof self=="object"&&self&&self.Object===Object&&self,le=ue||ae||Function("return this")(),se=Object.prototype.toString,fe=Math.max,q=Math.min,M=function(){return le.Date.now()};function ee(l){var T=typeof l;return!!l&&(T=="object"||T=="function")}function d(l){if(typeof l=="number")return l;if(function(_){return typeof _=="symbol"||function(V){return!!V&&typeof V=="object"}(_)&&se.call(_)=="[object Symbol]"}(l))return NaN;if(ee(l)){var T=typeof l.valueOf=="function"?l.valueOf():l;l=ee(T)?T+"":T}if(typeof l!="string")return l===0?l:+l;l=l.replace(Q,"");var S=j.test(l);return S||B.test(l)?oe(l.slice(2),S?2:8):Z.test(l)?NaN:+l}u.exports=function(l,T,S){var _=!0,V=!0;if(typeof l!="function")throw new TypeError(K);return ee(S)&&(_="leading"in S?!!S.leading:_,V="trailing"in S?!!S.trailing:V),function(A,P,R){var F,Y,z,U,E,$,G=0,te=!1,re=!1,ie=!0;if(typeof A!="function")throw new TypeError(K);function g(I){var H=F,de=Y;return F=Y=void 0,G=I,U=A.apply(de,H)}function W(I){return G=I,E=setTimeout(pe,P),te?g(I):U}function X(I){var H=I-$;return $===void 0||H>=P||H<0||re&&I-G>=z}function pe(){var I=M();if(X(I))return ve(I);E=setTimeout(pe,function(H){var de=P-(H-$);return re?q(de,z-(H-G)):de}(I))}function ve(I){return E=void 0,ie&&F?g(I):(F=Y=void 0,U)}function ye(){var I=M(),H=X(I);if(F=arguments,Y=this,$=I,H){if(E===void 0)return W($);if(re)return E=setTimeout(pe,P),g($)}return E===void 0&&(E=setTimeout(pe,P)),U}return P=d(P)||0,ee(R)&&(te=!!R.leading,z=(re="maxWait"in R)?fe(d(R.maxWait)||0,P):z,ie="trailing"in R?!!R.trailing:ie),ye.cancel=function(){E!==void 0&&clearTimeout(E),G=0,F=$=Y=E=void 0},ye.flush=function(){return E===void 0?U:ve(M())},ye}(l,T,{leading:_,maxWait:T,trailing:V})}},703:(u,f,s)=>{var K=s(414);function Q(){}function Z(){}Z.resetWarningCache=Q,u.exports=function(){function j(ue,ae,le,se,fe,q){if(q!==K){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}function B(){return j}j.isRequired=j;var oe={array:j,bool:j,func:j,number:j,object:j,string:j,symbol:j,any:j,arrayOf:B,element:j,elementType:j,instanceOf:B,node:j,objectOf:B,oneOf:B,oneOfType:B,shape:B,exact:B,checkPropTypes:Z,resetWarningCache:Q};return oe.PropTypes=oe,oe}},697:(u,f,s)=>{u.exports=s(703)()},414:u=>{u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},v={};function y(u){var f=v[u];if(f!==void 0)return f.exports;var s=v[u]={exports:{}};return L[u](s,s.exports,y),s.exports}y.n=u=>{var f=u&&u.__esModule?()=>u.default:()=>u;return y.d(f,{a:f}),f},y.d=(u,f)=>{for(var s in f)y.o(f,s)&&!y.o(u,s)&&Object.defineProperty(u,s,{enumerable:!0,get:f[s]})},y.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),y.o=(u,f)=>Object.prototype.hasOwnProperty.call(u,f),y.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var k={};(()=>{y.r(k),y.d(k,{LazyLoadComponent:()=>Ee,LazyLoadImage:()=>Fe,trackWindowScroll:()=>te});const u=he;var f=y.n(u),s=y(697);const K=qe;var Q=y.n(K);function Z(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function j(r){return(j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function B(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(N){return Object.getOwnPropertyDescriptor(r,N).enumerable})),i.push.apply(i,o)}return i}function oe(r,e,i){return e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function ue(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function ae(r,e){return(ae=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function le(r,e){if(e&&(j(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(r)}function se(r){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var fe=function(r){r.forEach(function(e){e.isIntersecting&&e.target.onVisible()})},q={},M=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&ae(t,n)})(h,r);var e,i,o,N,ne=(o=h,N=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=se(o);if(N){var a=se(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return le(this,t)});function h(t){var n;if(function(c,p){if(!(c instanceof p))throw new TypeError("Cannot call a class as a function")}(this,h),(n=ne.call(this,t)).supportsObserver=!t.scrollPosition&&t.useIntersectionObserver&&Z(),n.supportsObserver){var a=t.threshold;n.observer=function(c){return q[c]=q[c]||new IntersectionObserver(fe,{rootMargin:c+"px"}),q[c]}(a)}return n}return e=h,(i=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,n=this.placeholder.getBoundingClientRect(),a=Q().findDOMNode(this.placeholder).style,c={left:parseInt(a.getPropertyValue("margin-left"),10)||0,top:parseInt(a.getPropertyValue("margin-top"),10)||0};return{bottom:t.y+n.bottom+c.top,left:t.x+n.left+c.left,right:t.x+n.right+c.left,top:t.y+n.top+c.top}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var t=this.props,n=t.scrollPosition,a=t.threshold,c=this.getPlaceholderBoundingBox(n),p=n.y+window.innerHeight,b=n.x,O=n.x+window.innerWidth,w=n.y;return Boolean(w-a<=c.bottom&&p+a>=c.top&&b-a<=c.right&&O+a>=c.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var t=this,n=this.props,a=n.className,c=n.height,p=n.placeholder,b=n.style,O=n.width;if(p&&typeof p.type!="function")return f().cloneElement(p,{ref:function(m){return t.placeholder=m}});var w=function(m){for(var C=1;C<arguments.length;C++){var x=arguments[C]!=null?arguments[C]:{};C%2?B(Object(x),!0).forEach(function(D){oe(m,D,x[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(x)):B(Object(x)).forEach(function(D){Object.defineProperty(m,D,Object.getOwnPropertyDescriptor(x,D))})}return m}({display:"inline-block"},b);return O!==void 0&&(w.width=O),c!==void 0&&(w.height=c),f().createElement("span",{className:a,ref:function(m){return t.placeholder=m},style:w},p)}}])&&ue(e.prototype,i),h}(f().Component);M.propTypes={onVisible:s.PropTypes.func.isRequired,className:s.PropTypes.string,height:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string]),placeholder:s.PropTypes.element,threshold:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool,scrollPosition:s.PropTypes.shape({x:s.PropTypes.number.isRequired,y:s.PropTypes.number.isRequired}),width:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string])},M.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const ee=M;var d=y(296),l=y.n(d),T=y(96),S=y.n(T),_=function(r){var e=getComputedStyle(r,null);return e.getPropertyValue("overflow")+e.getPropertyValue("overflow-y")+e.getPropertyValue("overflow-x")};const V=function(r){if(!(r instanceof HTMLElement))return window;for(var e=r;e&&e instanceof HTMLElement;){if(/(scroll|auto)/.test(_(e)))return e;e=e.parentNode}return window};function A(r){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}var P=["delayMethod","delayTime"];function R(){return(R=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r}).apply(this,arguments)}function F(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function Y(r,e){return(Y=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function z(r,e){if(e&&(A(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return U(r)}function U(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function E(r){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var $=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},G=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const te=function(r){var e=function(i){(function(a,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(c&&c.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),c&&Y(a,c)})(n,i);var o,N,ne,h,t=(ne=n,h=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,c=E(ne);if(h){var p=E(this).constructor;a=Reflect.construct(c,arguments,p)}else a=c.apply(this,arguments);return z(this,a)});function n(a){var c;if(function(b,O){if(!(b instanceof O))throw new TypeError("Cannot call a class as a function")}(this,n),(c=t.call(this,a)).useIntersectionObserver=a.useIntersectionObserver&&Z(),c.useIntersectionObserver)return z(c);var p=c.onChangeScroll.bind(U(c));return a.delayMethod==="debounce"?c.delayedScroll=l()(p,a.delayTime):a.delayMethod==="throttle"&&(c.delayedScroll=S()(p,a.delayTime)),c.state={scrollPosition:{x:$(),y:G()}},c.baseComponentRef=f().createRef(),c}return o=n,(N=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||V(Q().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=V(Q().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:$(),y:G()}})}},{key:"render",value:function(){var a=this.props,c=(a.delayMethod,a.delayTime,function(b,O){if(b==null)return{};var w,m,C=function(D,be){if(D==null)return{};var ce,me,Ne={},Re=Object.keys(D);for(me=0;me<Re.length;me++)ce=Re[me],be.indexOf(ce)>=0||(Ne[ce]=D[ce]);return Ne}(b,O);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(b);for(m=0;m<x.length;m++)w=x[m],O.indexOf(w)>=0||Object.prototype.propertyIsEnumerable.call(b,w)&&(C[w]=b[w])}return C}(a,P)),p=this.useIntersectionObserver?null:this.state.scrollPosition;return f().createElement(r,R({forwardRef:this.baseComponentRef,scrollPosition:p},c))}}])&&F(o.prototype,N),n}(f().Component);return e.propTypes={delayMethod:s.PropTypes.oneOf(["debounce","throttle"]),delayTime:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool},e.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},e};function re(r){return(re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function ie(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function g(r,e){return(g=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function W(r,e){if(e&&(re(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(r)}function X(r){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var pe=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&g(t,n)})(h,r);var e,i,o,N,ne=(o=h,N=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=X(o);if(N){var a=X(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return W(this,t)});function h(t){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,h),ne.call(this,t)}return e=h,(i=[{key:"render",value:function(){return f().createElement(ee,this.props)}}])&&ie(e.prototype,i),h}(f().Component);const ve=te(pe);function ye(r){return(ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function I(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function H(r,e){return(H=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function de(r,e){if(e&&(ye(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xe(r)}function xe(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Oe(r){return(Oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var we=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&H(t,n)})(h,r);var e,i,o,N,ne=(o=h,N=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=Oe(o);if(N){var a=Oe(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return de(this,t)});function h(t){var n;(function(O,w){if(!(O instanceof w))throw new TypeError("Cannot call a class as a function")})(this,h),n=ne.call(this,t);var a=t.afterLoad,c=t.beforeLoad,p=t.scrollPosition,b=t.visibleByDefault;return n.state={visible:b},b&&(c(),a()),n.onVisible=n.onVisible.bind(xe(n)),n.isScrollTracked=Boolean(p&&Number.isFinite(p.x)&&p.x>=0&&Number.isFinite(p.y)&&p.y>=0),n}return e=h,(i=[{key:"componentDidUpdate",value:function(t,n){n.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var t=this.props,n=t.className,a=t.delayMethod,c=t.delayTime,p=t.height,b=t.placeholder,O=t.scrollPosition,w=t.style,m=t.threshold,C=t.useIntersectionObserver,x=t.width;return this.isScrollTracked||C&&Z()?f().createElement(ee,{className:n,height:p,onVisible:this.onVisible,placeholder:b,scrollPosition:O,style:w,threshold:m,useIntersectionObserver:C,width:x}):f().createElement(ve,{className:n,delayMethod:a,delayTime:c,height:p,onVisible:this.onVisible,placeholder:b,style:w,threshold:m,width:x})}}])&&I(e.prototype,i),h}(f().Component);we.propTypes={afterLoad:s.PropTypes.func,beforeLoad:s.PropTypes.func,useIntersectionObserver:s.PropTypes.bool,visibleByDefault:s.PropTypes.bool},we.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Ee=we;function Le(r){return(Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}var De=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function ke(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(N){return Object.getOwnPropertyDescriptor(r,N).enumerable})),i.push.apply(i,o)}return i}function _e(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?ke(Object(i),!0).forEach(function(o){Be(r,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):ke(Object(i)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(i,o))})}return r}function Be(r,e,i){return e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function Pe(){return(Pe=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r}).apply(this,arguments)}function Me(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function Ie(r,e){return(Ie=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function Ve(r,e){if(e&&(Le(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(r)}function je(r){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var Te=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&Ie(t,n)})(h,r);var e,i,o,N,ne=(o=h,N=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=je(o);if(N){var a=je(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Ve(this,t)});function h(t){var n;return function(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}(this,h),(n=ne.call(this,t)).state={loaded:!1},n}return e=h,(i=[{key:"onImageLoad",value:function(){var t=this;return this.state.loaded?null:function(){t.props.afterLoad(),t.setState({loaded:!0})}}},{key:"getImg",value:function(){var t=this.props,n=(t.afterLoad,t.beforeLoad,t.delayMethod,t.delayTime,t.effect,t.placeholder,t.placeholderSrc,t.scrollPosition,t.threshold,t.useIntersectionObserver,t.visibleByDefault,t.wrapperClassName,t.wrapperProps,function(a,c){if(a==null)return{};var p,b,O=function(m,C){if(m==null)return{};var x,D,be={},ce=Object.keys(m);for(D=0;D<ce.length;D++)x=ce[D],C.indexOf(x)>=0||(be[x]=m[x]);return be}(a,c);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(a);for(b=0;b<w.length;b++)p=w[b],c.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(a,p)&&(O[p]=a[p])}return O}(t,De));return f().createElement("img",Pe({onLoad:this.onImageLoad()},n))}},{key:"getLazyLoadImage",value:function(){var t=this.props,n=t.beforeLoad,a=t.className,c=t.delayMethod,p=t.delayTime,b=t.height,O=t.placeholder,w=t.scrollPosition,m=t.style,C=t.threshold,x=t.useIntersectionObserver,D=t.visibleByDefault,be=t.width;return f().createElement(Ee,{beforeLoad:n,className:a,delayMethod:c,delayTime:p,height:b,placeholder:O,scrollPosition:w,style:m,threshold:C,useIntersectionObserver:x,visibleByDefault:D,width:be},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(t){var n=this.props,a=n.effect,c=n.height,p=n.placeholderSrc,b=n.width,O=n.wrapperClassName,w=n.wrapperProps,m=this.state.loaded,C=m?" lazy-load-image-loaded":"",x=m||!p?{}:{backgroundImage:"url(".concat(p,")"),backgroundSize:"100% 100%"};return f().createElement("span",Pe({className:O+" lazy-load-image-background "+a+C,style:_e(_e({},x),{},{color:"transparent",display:"inline-block",height:c,width:b})},w),t)}},{key:"render",value:function(){var t=this.props,n=t.effect,a=t.placeholderSrc,c=t.visibleByDefault,p=t.wrapperClassName,b=t.wrapperProps,O=this.getLazyLoadImage();return(n||a)&&!c||p||b?this.getWrappedLazyLoadImage(O):O}}])&&Me(e.prototype,i),h}(f().Component);Te.propTypes={afterLoad:s.PropTypes.func,beforeLoad:s.PropTypes.func,delayMethod:s.PropTypes.string,delayTime:s.PropTypes.number,effect:s.PropTypes.string,placeholderSrc:s.PropTypes.string,threshold:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool,visibleByDefault:s.PropTypes.bool,wrapperClassName:s.PropTypes.string,wrapperProps:s.PropTypes.object},Te.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Fe=Te})(),Ze.exports=k})();const et="/rest-countries-app/assets/heart-fill-da91aa2c.svg",tt="/rest-countries-app/assets/heart-a8ec3de0.svg";function rt(L){const{user:v,isFavorite:y,country:k}=L,[u,f]=he.useState(y);async function s(){f(!u),await Je(v.uid,k.name.common,!u)}return v?J("button",{onClick:s,className:"min-w-[1.5em] absolute bottom-5 right-7",children:J("img",{className:"dark:invert w-full",src:u?et:tt,alt:"favorite icon"})}):""}function nt(L){const{country:v}=L,{isFavorite:y}=v,{user:k}=he.useContext(Ce),u=v.name.common.replace(/\s+/g,"_").toLowerCase(),f=[{label:"population",value:Ae(v.population)},{label:"region",value:v.region},{label:"capital",value:v.capital}];return ge("div",{className:`max-w-xs w-full relative bg-White  dark:bg-DarkBlue 
      overflow-hidden rounded-md capitalize drop-shadow-xl shadow-DarkBlue`,children:[ge(Ye,{to:`${Ge}${u}`,className:"w-full",children:[J("div",{className:"h-[12rem] relative",children:J(Se.LazyLoadImage,{className:"h-full w-full absolute object-cover object-center",src:v.flags.svg,placeholder:J(Xe,{height:"100%",sx:{transform:"scale(1)"},animation:"wave"}),alt:"country flag"})}),ge("div",{className:"p-6",children:[J(Qe,{country:v}),f.map((s,K)=>J("div",{className:"flex gap-2",children:ge("span",{className:"dark:text-White",children:[s.label," :",J("span",{className:"dark:text-VeryLightGray font-light ml-1",children:s.value})]})},K))]})]}),J(rt,{user:k,isFavorite:y,country:v})]})}const it=he.memo(nt);export{it as default};
