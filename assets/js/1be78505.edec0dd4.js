"use strict";(self.webpackChunkconcrete_docs=self.webpackChunkconcrete_docs||[]).push([[514,75],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,h=m["".concat(i,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7465:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ye});var a=n(7294),o=n(4137),r=n(6291),l=n(2434),c=n(6010),i=n(5773),s=n(5537),d=n(7462);const u=function(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var m=n(5999),p=n(9960),h=n(3919),b=n(541);const y="menuLinkText_QVir",f="hasHref_VCh3";var g=n(2389);function v(e){let{item:t,...n}=e;return"category"===t.type?0===t.items.length?null:a.createElement(E,(0,d.Z)({item:t},n)):a.createElement(k,(0,d.Z)({item:t},n))}function E(e){let{item:t,onItemClick:n,activePath:o,level:r,index:l,...s}=e;const{items:u,label:h,collapsible:b,className:v,href:E}=t,k=function(e){const t=(0,g.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),C=(0,i._F)(t,o),{collapsed:Z,setCollapsed:_}=(0,i.uR)({initialState:()=>!!b&&(!C&&t.collapsed)});!function(e){let{isActive:t,collapsed:n,setCollapsed:o}=e;const r=(0,i.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&o(!1)}),[t,r,n,o])}({isActive:C,collapsed:Z,setCollapsed:_});const{expandedItem:T,setExpandedItem:S}=(0,i.fP)();function x(e){void 0===e&&(e=!Z),S(e?null:l),_(e)}const{autoCollapseSidebarCategories:I}=(0,i.LU)();return(0,a.useEffect)((()=>{b&&T&&T!==l&&I&&_(!0)}),[b,T,l,_,I]),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":Z},v)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(p.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":b&&!E,"menu__link--active":C,[y]:!b,[f]:!!k}),onClick:b?e=>{null==n||n(t),E?x(!1):(e.preventDefault(),x())}:()=>{null==n||n(t)},"aria-current":C?"page":void 0,href:b?null!=k?k:"#":k},s),h),E&&b&&a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:h}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),x()}})),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:Z},a.createElement(N,{items:u,tabIndex:Z?-1:0,onItemClick:n,activePath:o,level:r+1})))}function k(e){let{item:t,onItemClick:n,activePath:o,level:r,index:l,...s}=e;const{href:u,label:m,className:y}=t,f=(0,i._F)(t,o);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",y),key:m},a.createElement(p.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":f}),"aria-current":f?"page":void 0,to:u},(0,h.Z)(u)&&{onClick:n?()=>n(t):void 0},s),(0,h.Z)(u)?m:a.createElement("span",null,m,a.createElement(b.Z,null))))}function C(e){let{items:t,...n}=e;return a.createElement(i.D_,null,t.map(((e,t)=>a.createElement(v,(0,d.Z)({key:t,item:e,index:t},n)))))}const N=(0,a.memo)(C),Z="sidebar_CW9Y",_="sidebarWithHideableNavbar_FoYL",T="sidebarHidden_D64r",S="sidebarLogo_FJUI",x="menu_SkdO",I="menuWithAnnouncementBar_x19h",O="collapseSidebarButton_cwdi",P="collapseSidebarButtonIcon_xORG";function w(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",O),onClick:t},a.createElement(u,{className:P}))}function A(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const l=function(){const{isActive:e}=(0,i.nT)(),[t,n]=(0,a.useState)(e);return(0,i.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}(),{navbar:{hideOnScroll:d},hideableSidebar:u}=(0,i.LU)();return a.createElement("div",{className:(0,c.Z)(Z,{[_]:d,[T]:r})},d&&a.createElement(s.Z,{tabIndex:-1,className:S}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",x,{[I]:l})},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:n,activePath:t,level:1}))),u&&a.createElement(w,{onClick:o}))}const L=e=>{let{toggleSidebar:t,sidebar:n,path:o}=e;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:n,activePath:o,onItemClick:e=>{"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function B(e){return a.createElement(i.Cv,{component:L,props:e})}const M=a.memo(A),D=a.memo(B);function j(e){const t=(0,i.iP)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(M,e),o&&a.createElement(D,e))}var R=n(2859);const F={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var W={Prism:n(7410).default,theme:F};function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z.apply(this,arguments)}var V=/\r\n|\r|\n/,U=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},q=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=z({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=z({},n,{backgroundColor:null}),o};function X(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const G=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),H(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?q(e.theme,e.language):void 0;return t.themeDict=n})),H(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=z({},X(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?z({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),H(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(c))}})),H(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=z({},X(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?z({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),H(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,c=[],i=[c];l>-1;){for(;(r=a[l]++)<o[l];){var s=void 0,d=t[l],u=n[l][r];if("string"==typeof u?(d=l>0?d:["plain"],s=u):(d=Y(d,u.type),u.alias&&(d=Y(d,u.alias)),s=u.content),"string"==typeof s){var m=s.split(V),p=m.length;c.push({types:d,content:m[0]});for(var h=1;h<p;h++)U(c),i.push(c=[]),c.push({types:d,content:m[h]})}else l++,t.push(d),n.push(s),a.push(0),o.push(s.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return U(c),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const J="codeBlockContainer_I0IT",K="codeBlockContent_wNvx",Q="codeBlockTitle_BvAR",$="codeBlock_jd64",ee="codeBlockStandalone_csWH",te="copyButton_wuS7",ne="codeBlockLines_mRuA";function ae(e){var t;let{children:n,className:o="",metastring:r,title:l,language:s}=e;const{prism:u}=(0,i.LU)(),[p,h]=(0,a.useState)(!1),[b,y]=(0,a.useState)(!1);(0,a.useEffect)((()=>{y(!0)}),[]);const f=(0,i.bc)(r)||l,g=(0,i.pJ)();if(a.Children.toArray(n).some((e=>(0,a.isValidElement)(e))))return a.createElement(G,(0,d.Z)({},W,{key:String(b),theme:g,code:"",language:"text"}),(e=>{let{className:t,style:r}=e;return a.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,ee,"thin-scrollbar",J,o,i.kM.common.codeBlock),style:r},a.createElement("code",{className:ne},n))}));const v=Array.isArray(n)?n.join(""):n,E=null!=(t=null!=s?s:(0,i.Vo)(o))?t:u.defaultLanguage,{highlightLines:k,code:C}=(0,i.nZ)(v,r,E),N=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),o&&o.focus()}(C),h(!0),setTimeout((()=>h(!1)),2e3)};return a.createElement(G,(0,d.Z)({},W,{key:String(b),theme:g,code:C,language:null!=E?E:"text"}),(e=>{let{className:t,style:n,tokens:r,getLineProps:l,getTokenProps:s}=e;return a.createElement("div",{className:(0,c.Z)(J,o,{["language-"+E]:E&&!o.includes("language-"+E)},i.kM.common.codeBlock)},f&&a.createElement("div",{style:n,className:Q},f),a.createElement("div",{className:(0,c.Z)(K,E)},a.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,$,"thin-scrollbar"),style:n},a.createElement("code",{className:ne},r.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=l({line:e,key:t});return k.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,d.Z)({key:t},n),e.map(((e,t)=>a.createElement("span",(0,d.Z)({key:t},s({token:e,key:t}))))),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(te,"clean-btn"),onClick:N},p?a.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var oe=n(9649);const re="details_BAp3";function le(e){let{...t}=e;return a.createElement(i.PO,(0,d.Z)({},t,{className:(0,c.Z)("alert alert--info",re,t.className)}))}const ce={head:e=>{const t=a.Children.map(e.children,(e=>function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){const{mdxType:t,originalType:n,...o}=e.props;return a.createElement(e.props.originalType,o)}return e}(e)));return a.createElement(R.Z,e,t)},code:e=>a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?a.createElement("code",e):a.createElement(ae,e),a:e=>a.createElement(p.Z,e),pre:e=>{var t;return a.createElement(ae,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:{...e})},details:e=>{const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(le,(0,d.Z)({},e,{summary:n}),o)},h1:e=>a.createElement(oe.Z,(0,d.Z)({as:"h1"},e)),h2:e=>a.createElement(oe.Z,(0,d.Z)({as:"h2"},e)),h3:e=>a.createElement(oe.Z,(0,d.Z)({as:"h3"},e)),h4:e=>a.createElement(oe.Z,(0,d.Z)({as:"h4"},e)),h5:e=>a.createElement(oe.Z,(0,d.Z)({as:"h5"},e)),h6:e=>a.createElement(oe.Z,(0,d.Z)({as:"h6"},e))};var ie=n(4608);const se="backToTopButton_RiI4",de="backToTopButtonShow_ssHd";function ue(){const e=(0,a.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const n=document.documentElement.scrollTop;n>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*n)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>null==e.current?void 0:e.current()}}const me=function(){const[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(!1),{smoothScrollTop:o,cancelScrollToTop:r}=ue();return(0,i.RF)(((e,a)=>{let{scrollY:o}=e;const l=null==a?void 0:a.scrollY;if(!l)return;if(n.current)return void(n.current=!1);const c=o<l;if(c||r(),o<300)t(!1);else if(c){const e=document.documentElement.scrollHeight;o+window.innerHeight<e&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(n.current=!0,t(!1))})),a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,se,{[de]:e}),type:"button",onClick:()=>o()})};var pe=n(6775);const he={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"};function be(e){let{currentDocRoute:t,versionMetadata:n,children:r,sidebarName:s}=e;const d=(0,i.Vq)(),{pluginId:p,version:h}=n,[b,y]=(0,a.useState)(!1),[f,g]=(0,a.useState)(!1),v=(0,a.useCallback)((()=>{f&&g(!1),y((e=>!e))}),[f]);return a.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:h,tag:(0,i.os)(p,h)}},a.createElement("div",{className:he.docPage},a.createElement(me,null),d&&a.createElement("aside",{className:(0,c.Z)(i.kM.docs.docSidebarContainer,he.docSidebarContainer,{[he.docSidebarContainerHidden]:b}),onTransitionEnd:e=>{e.currentTarget.classList.contains(he.docSidebarContainer)&&b&&g(!0)}},a.createElement(j,{key:s,sidebar:d,path:t.path,onCollapse:v,isHidden:f}),f&&a.createElement("div",{className:he.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},a.createElement(u,{className:he.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(he.docMainContainer,{[he.docMainContainerEnhanced]:b||!d})},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,{[he.docItemWrapperEnhanced]:b})},a.createElement(o.Zo,{components:ce},r)))))}const ye=function(e){const{route:{routes:t},versionMetadata:n,location:o}=e,l=t.find((e=>(0,pe.LX)(o.pathname,e)));if(!l)return a.createElement(ie.default,null);const c=l.sidebar,s=c?n.docsSidebars[c]:null;return a.createElement(a.Fragment,null,a.createElement(R.Z,null,a.createElement("html",{className:n.className})),a.createElement(i.qu,{version:n},a.createElement(i.bT,{sidebar:s},a.createElement(be,{currentDocRoute:l,versionMetadata:n,sidebarName:c},(0,r.Z)(t,{versionMetadata:n})))))}},9649:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),o=n(7294),r=n(6010),l=n(5999),c=n(5773);const i="anchorWithStickyNavbar_mojV",s="anchorWithHideOnScrollNavbar_R0VQ";function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:u}}=(0,c.LU)();return n?o.createElement(t,(0,a.Z)({},d,{className:(0,r.Z)("anchor",{[s]:u,[i]:!u}),id:n}),d.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,d)}function u(e){let{as:t,...n}=e;return"h1"===t?o.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):o.createElement(d,(0,a.Z)({as:t},n))}},4608:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(7294),o=n(2434),r=n(5999);const l=function(){return a.createElement(o.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);