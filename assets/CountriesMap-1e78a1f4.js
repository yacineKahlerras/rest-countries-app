var C=Object.defineProperty;var R=(s,e,t)=>e in s?C(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var g=(s,e,t)=>(R(s,typeof e!="symbol"?e+"":e,t),t);import{r as a,R as b,j as h,O,_ as M,F as P}from"./index-ed900c43.js";var n={},_={get exports(){return n},set exports(s){n=s}},W="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",x=W,N=x;function y(){}function E(){}E.resetWarningCache=y;var F=function(){function s(r,o,i,l,p,u){if(u!==N){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}s.isRequired=s;function e(){return s}var t={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:e,element:s,elementType:s,instanceOf:e,node:s,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:E,resetWarningCache:y};return t.PropTypes=t,t};_.exports=F();class L extends a.Component{constructor(e){super(e),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let e=!1;const t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch{}return e}eventListenerOptions(){let e=this.props.useCapture;return this.isPassiveSupported()?e={useCapture:this.props.useCapture,passive:!0}:e={passive:!1},e}setDefaultLoader(e){this.defaultLoader=e}detachMousewheelListener(){let e=window;this.props.useWindow===!1&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let e=window;this.props.useWindow===!1&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(e){const t=this.props.getScrollParent&&this.props.getScrollParent();return t??(e&&e.parentNode)}filterProps(e){return e}attachScrollListener(){const e=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!e)return;let t=window;this.props.useWindow===!1&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(e){e.deltaY===1&&!this.isPassiveSupported()&&e.preventDefault()}scrollListener(){const e=this.scrollComponent,t=window,r=this.getParentElement(e);let o;if(this.props.useWindow){const i=document.documentElement||document.body.parentNode||document.body,l=t.pageYOffset!==void 0?t.pageYOffset:i.scrollTop;this.props.isReverse?o=l:o=this.calculateOffset(e,l)}else this.props.isReverse?o=r.scrollTop:o=e.scrollHeight-r.scrollTop-r.clientHeight;o<Number(this.props.threshold)&&e&&e.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=r.scrollHeight,this.beforeScrollTop=r.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}calculateTopPosition(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}render(){const e=this.filterProps(this.props),{children:t,element:r,hasMore:o,initialLoad:i,isReverse:l,loader:p,loadMore:u,pageStart:c,ref:f,threshold:m,useCapture:v,useWindow:A,getScrollParent:Y,...S}=e;S.ref=w=>{this.scrollComponent=w,f&&f(w)};const d=[t];return o&&(p?l?d.unshift(p):d.push(p):this.defaultLoader&&(l?d.unshift(this.defaultLoader):d.push(this.defaultLoader))),b.createElement(r,S,d)}}g(L,"propTypes",{children:n.node.isRequired,element:n.node,hasMore:n.bool,initialLoad:n.bool,isReverse:n.bool,loader:n.node,loadMore:n.func.isRequired,pageStart:n.number,ref:n.func,getScrollParent:n.func,threshold:n.number,useCapture:n.bool,useWindow:n.bool}),g(L,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null});function H(){return h("div",{className:" p-12 ",children:h(O,{height:80,width:80,color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4fa94d",strokeWidth:2,strokeWidthSecondary:2})})}function D(s,e,t,r){const o=new RegExp(r,"i");return s.filter(i=>{let l=!0;return e!=null&&i.region!=t[e]&&(l=!1),r!=""&&!o.test(i.name.common)&&(l=!1),l})}const j=(s,e,t,r,o)=>{if(s.length===t.length||s.length>t.length)r(!1);else{const i=s.length+o>=t.length;e(i?s.concat(t.slice(s.length)):s.concat(t.slice(s.length,s.length+o)))}};let T=(s=21)=>crypto.getRandomValues(new Uint8Array(s)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");const k=a.lazy(()=>M(()=>import("./index-ed900c43.js").then(s=>s.C),["assets/index-ed900c43.js","assets/index-85ec84e4.css"]));function U(s){const{infiniteScrollList:e}=s,{favoriteCountries:t}=a.useContext(P);for(var r=[],o=0;o<e.length;o++)t&&t[e[o].name.common]?e[o]={...e[o],isFavorite:!0}:e[o]={...e[o],isFavorite:!1},r.push(h(k,{country:e[o]},T()));return r}function I(s){const{countriesList:e}=s,{searchFilter:t,regionIndex:r,dropDownContent:o}=a.useContext(P),[i,l]=a.useState(e),p=20,[u,c]=a.useState(i.slice(0,p)),[f,m]=a.useState(!0);a.useEffect(()=>{m(!0),l(()=>D(e,r,o,t))},[t,r]),a.useEffect(()=>{i.length>p?c(i.slice(0,p)):c(i)},[i]);function v(){j(u,c,i,m,p)}return h(L,{pageStart:0,loadMore:v,hasMore:f,loader:h(H,{},T()),threshold:500,className:"grid justify-center justify-items-center gap-5 grid-cols-countriesMap mx-auto pb-14",children:h(U,{infiniteScrollList:u})})}const V=a.memo(I);export{V as default};