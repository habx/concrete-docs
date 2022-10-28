"use strict";(self.webpackChunkconcrete_docs=self.webpackChunkconcrete_docs||[]).push([[156],{3905:(t,e,i)=>{i.d(e,{Zo:()=>c,kt:()=>m});var n=i(7294);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}var l=n.createContext({}),h=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):a(a({},e),t)),i},c=function(t){var e=h(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var i=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),g=h(i),m=o,f=g["".concat(l,".").concat(m)]||g[m]||d[m]||r;return i?n.createElement(f,a(a({ref:e},c),{},{components:i})):n.createElement(f,a({ref:e},c))}));function m(t,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=i.length,a=new Array(r);a[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var h=2;h<r;h++)a[h]=i[h];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},7435:()=>{},9378:(t,e,i)=>{i.d(e,{Z:()=>v});var n=i(7294);const o=(t,e)=>t===e?.tagName?.toUpperCase?.(),r=t=>o("DIV",t)||o("SPAN",t),a=t=>o("IMG",t),s=t=>o("SVG",t),l=({height:t,offset:e,width:i})=>Math.min(window.innerWidth/(i+e),window.innerHeight/(t+e)),h=({containerHeight:t,containerWidth:e,hasScalableSrc:i,offset:n,targetHeight:o,targetWidth:r})=>!i&&o&&r?(({containerHeight:t,containerWidth:e,offset:i,targetHeight:n,targetWidth:o})=>{const r=l({height:n,offset:i,width:o}),a=o>n?o/e:n/t;return r>1?a:r*a})({containerHeight:t,containerWidth:e,offset:n,targetHeight:o,targetWidth:r}):l({height:t,offset:n,width:e}),c=/url(?:\(['"]?)(.*?)(?:['"]?\))/,d=t=>{if(t){if(a(t))return t.currentSrc;if(r(t)){const e=window.getComputedStyle(t).backgroundImage;if(e)return c.exec(e)?.[1]}}},g=({position:t,relativeNum:e})=>{const i=parseFloat(t);return t.endsWith("%")?e*i/100:i},m=/\.svg$/i,f=({hasZoomImg:t,imgSrc:e,isSvg:i,isZoomed:n,loadedImgEl:o,offset:a,shouldRefresh:s,targetEl:l})=>{const c=i||"data:image/svg+xml"===e?.slice?.(0,18)||t||!(!e||!m.test(e)),d=l.getBoundingClientRect(),f=window.getComputedStyle(l),u=(({containerHeight:t,containerLeft:e,containerTop:i,containerWidth:n,hasScalableSrc:o,offset:r,targetHeight:a,targetWidth:s})=>{const l=h({containerHeight:t,containerWidth:n,hasScalableSrc:o,offset:r,targetHeight:a,targetWidth:s});return{top:i,left:e,width:n*l,height:t*l,transform:`translate(0,0) scale(${1/l})`}})({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:c,offset:a,targetHeight:o?.naturalHeight??d.height,targetWidth:o?.naturalWidth??d.width}),p=o&&f.objectFit?(({containerHeight:t,containerLeft:e,containerTop:i,containerWidth:n,hasScalableSrc:o,objectFit:r,objectPosition:a,offset:s,targetHeight:l,targetWidth:c})=>{if("scale-down"===r&&(r=c<=n&&l<=t?"none":"contain"),"cover"===r||"contain"===r){const d=n/c,m=t/l,f="cover"===r?Math.max(d,m):Math.min(d,m),[u="50%",p="50%"]=a.split(" "),v=g({position:u,relativeNum:n-c*f}),b=g({position:p,relativeNum:t-l*f}),w=h({containerHeight:l*f,containerWidth:c*f,hasScalableSrc:o,offset:s,targetHeight:l,targetWidth:c});return{top:i+b,left:e+v,width:c*f*w,height:l*f*w,transform:`translate(0,0) scale(${1/w})`}}if("none"===r){const[r="50%",d="50%"]=a.split(" "),m=g({position:r,relativeNum:n-c}),f=g({position:d,relativeNum:t-l}),u=h({containerHeight:l,containerWidth:c,hasScalableSrc:o,offset:s,targetHeight:l,targetWidth:c});return{top:i+f,left:e+m,width:c*u,height:l*u,transform:`translate(0,0) scale(${1/u})`}}if("fill"===r){const e=n/c,i=t/l,r=Math.max(e,i),a=h({containerHeight:l*r,containerWidth:c*r,hasScalableSrc:o,offset:s,targetHeight:l,targetWidth:c});return{width:n*a,height:t*a,transform:`translate(0,0) scale(${1/a})`}}return{}})({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:c,objectFit:f.objectFit,objectPosition:f.objectPosition,offset:a,targetHeight:o.naturalHeight,targetWidth:o.naturalWidth}):void 0,v=o&&r(l)?(({backgroundPosition:t,backgroundSize:e,containerHeight:i,containerLeft:n,containerTop:o,containerWidth:r,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:c})=>{if("cover"===e||"contain"===e){const d=r/c,m=i/l,f="cover"===e?Math.max(d,m):Math.min(d,m),[u="50%",p="50%"]=t.split(" "),v=g({position:u,relativeNum:r-c*f}),b=g({position:p,relativeNum:i-l*f}),w=h({containerHeight:l*f,containerWidth:c*f,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:c});return{top:o+b,left:n+v,width:c*f*w,height:l*f*w,transform:`translate(0,0) scale(${1/w})`}}if("auto"===e){const[e="50%",d="50%"]=t.split(" "),m=g({position:e,relativeNum:r-c}),f=g({position:d,relativeNum:i-l}),u=h({containerHeight:l,containerWidth:c,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:c});return{top:o+f,left:n+m,width:c*u,height:l*u,transform:`translate(0,0) scale(${1/u})`}}{const[d="50%",m="50%"]=e.split(" "),f=g({position:d,relativeNum:r})/c,u=g({position:m,relativeNum:i})/l,p=Math.min(f,u),[v="50%",b="50%"]=t.split(" "),w=g({position:v,relativeNum:r-c*p}),S=g({position:b,relativeNum:i-l*p}),E=h({containerHeight:l*p,containerWidth:c*p,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:c});return{top:o+S,left:n+w,width:c*p*E,height:l*p*E,transform:`translate(0,0) scale(${1/E})`}}})({backgroundPosition:f.backgroundPosition,backgroundSize:f.backgroundSize,containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:c,offset:a,targetHeight:o.naturalHeight,targetWidth:o.naturalWidth}):void 0,b=Object.assign({},u,p,v);if(n){const t=window.innerWidth/2,e=window.innerHeight/2,i=t-(parseFloat(String(b.left||0))+parseFloat(String(b.width||0))/2),n=e-(parseFloat(String(b.top||0))+parseFloat(String(b.height||0))/2);s&&(b.transitionDuration="0.01ms"),b.transform=`translate(${i}px,${n}px) scale(1)`}return b};function u(t){return n.createElement(p,{...t})}class p extends n.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:2,shouldRefresh:!1},this.refContent=(0,n.createRef)(),this.refDialog=(0,n.createRef)(),this.refModalImg=(0,n.createRef)(),this.refWrap=(0,n.createRef)(),this.imgEl=null,this.styleModalImg={},this.setId=()=>{const t=()=>Math.random().toString(16).slice(-4);this.setState({id:t()+t()+t()})},this.setAndTrackImg=()=>{const t=this.refContent.current;t&&(this.imgEl=t.querySelector(':is(img, svg, [role="img"], [data-zoom]):not([aria-hidden="true"])'),this.imgEl?(this.changeObserver?.disconnect?.(),this.imgEl?.addEventListener?.("load",this.handleImgLoad),this.imgEl?.addEventListener?.("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElObserver=new ResizeObserver((t=>{const e=t[0];e?.target&&(this.imgEl=e.target,this.setState({}))})),this.imgElObserver.observe(this.imgEl)):this.changeObserver||(this.changeObserver=new MutationObserver(this.setAndTrackImg),this.changeObserver.observe(t,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=t=>{const{isZoomed:e}=this.props;!t&&e?this.zoom():t&&!e&&this.unzoom()},this.handleImgLoad=()=>{const{imgEl:t}=this,e=d(t);if(!e)return;const i=new Image;a(t)&&(i.sizes=t.sizes,i.srcset=t.srcset),i.src=e;const n=()=>{this.setState({loadedImgEl:i})};i.decode().then(n).catch((()=>{i.onload=n}))},this.handleZoom=()=>{this.props.onZoomChange?.(!0)},this.handleUnzoom=()=>{this.props.onZoomChange?.(!1)},this.handleDialogKeyDown=t=>{"Escape"!==t.key&&27!==t.keyCode||(t.preventDefault(),t.stopPropagation(),this.handleUnzoom())},this.handleScroll=()=>{this.setState({shouldRefresh:!0}),this.handleUnzoom()},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.zoom=()=>{const{handleResize:t,handleScroll:e,loadZoomImg:i,props:{scrollableEl:n=window},refDialog:o,refModalImg:r}=this;o.current?.showModal?.(),this.setState({modalState:1}),i(),r.current?.addEventListener?.("transitionend",(()=>{setTimeout((()=>{this.setState({modalState:0}),n.addEventListener("scroll",e),window.addEventListener("resize",t)}),0)}),{once:!0})},this.unzoom=()=>{const{handleResize:t,handleScroll:e,refDialog:i,refModalImg:n,props:{scrollableEl:o=window}}=this;this.setState({modalState:3}),n.current?.addEventListener?.("transitionend",(()=>{setTimeout((()=>{window.removeEventListener("resize",t),o.removeEventListener("scroll",e),this.setState({shouldRefresh:!1,modalState:2}),i.current?.close?.()}),0)}),{once:!0})},this.loadZoomImg=()=>{const{props:{zoomImg:t}}=this,e=t?.src;if(e){const i=new Image;i.sizes=t?.sizes??"",i.srcset=t?.srcSet??"",i.src=e;const n=()=>{this.setState({isZoomImgLoaded:!0})};i.decode().then(n).catch((()=>{i.onload=n}))}},this.UNSAFE_handleSvg=()=>{const{imgEl:t,refModalImg:e,styleModalImg:i}=this;if(s(t)){const n=document.createElement("div");n.innerHTML=t.outerHTML;const o=n.firstChild;o.style.width=`${i.width??0}px`,o.style.height=`${i.height??0}px`,e.current?.firstChild?.remove?.(),e.current?.appendChild?.(o)}}}render(){const{handleDialogKeyDown:t,handleUnzoom:e,handleZoom:i,imgEl:o,props:{a11yNameButtonUnzoom:l,a11yNameButtonZoom:h,children:c,IconUnzoom:g,IconZoom:m,isZoomed:u,zoomImg:p,zoomMargin:v},refContent:b,refDialog:w,refModalImg:S,refWrap:E,state:{id:y,isZoomImgLoaded:L,loadedImgEl:z,modalState:I,shouldRefresh:W}}=this,H=`rmiz-modal-img-${y}`,O=r(o),M=a(o),C=s(o),Z=(t=>{if(t)return a(t)?t.alt??void 0:t.getAttribute("aria-label")??void 0})(o),N=d(o),j=M?o.sizes:void 0,k=M?o.srcset:void 0,x=!!p?.src,P=o&&(z||C),T=Z?`${h}: ${Z}`:h,R=1===I||0===I,D=P?"found":"not-found",$=2===I||3===I?"hidden":"visible",U={visibility:2===I?"visible":"hidden"},F=(t=>{if(!t)return{};if(s(t)){const e=t.parentNode?.getBoundingClientRect?.(),i=t.getBoundingClientRect();return{height:i.height,left:e.left-i.left,width:i.width,top:e.top-i.top}}return{height:t.offsetHeight,left:t.offsetLeft,width:t.offsetWidth,top:t.offsetTop}})(o);return this.styleModalImg=P?f({hasZoomImg:x,imgSrc:N,isSvg:C,isZoomed:u&&R,loadedImgEl:z,offset:v,shouldRefresh:W,targetEl:o}):{},n.createElement("div",{"data-rmiz":"",ref:E},n.createElement("div",{"data-rmiz-content":D,ref:b,style:U},c),P&&n.createElement("div",{"data-rmiz-ghost":"",style:F},n.createElement("button",{"aria-label":T,"data-rmiz-btn-zoom":"",onClick:i,type:"button"},n.createElement(m,null))),P&&n.createElement("dialog",{"aria-labelledby":H,"aria-modal":"true","data-rmiz-modal":"",ref:w,onClick:e,onClose:e,onKeyDown:t,role:"dialog"},n.createElement("div",{"data-rmiz-modal-overlay":$}),n.createElement("div",{"data-rmiz-modal-content":""},(M||O)&&n.createElement("img",{alt:Z,sizes:j,src:N,srcSet:k,...L&&0===I?p:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height,id:H,ref:S,style:this.styleModalImg,width:this.styleModalImg.width}),C&&n.createElement("div",{"data-rmiz-modal-img":"",ref:S,style:this.styleModalImg}),n.createElement("button",{"aria-label":l,"data-rmiz-btn-unzoom":"",onClick:e,type:"button"},n.createElement(g,null)))))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){this.changeObserver?.disconnect?.(),this.imgElObserver?.disconnect?.(),this.imgEl?.removeEventListener?.("load",this.handleImgLoad),this.imgEl?.removeEventListener?.("click",this.handleZoom),window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)}componentDidUpdate(t){this.UNSAFE_handleSvg(),this.handleIfZoomChanged(t.isZoomed)}}function v(t){const[e,i]=(0,n.useState)(!1);return n.createElement(u,{...t,isZoomed:e,onZoomChange:i})}p.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",IconUnzoom:function(){return n.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))},IconZoom:function(){return n.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))},zoomMargin:0}}}]);