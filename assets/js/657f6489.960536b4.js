"use strict";(self.webpackChunkconcrete_docs=self.webpackChunkconcrete_docs||[]).push([[279],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},979:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>l,toc:()=>s,default:()=>c});var r=n(7462),a=(n(7294),n(4137));const i={title:"Breakpoints"},o=void 0,l={unversionedId:"styling/breakpoints",id:"styling/breakpoints",title:"Breakpoints",description:"Media queries presets",source:"@site/docs/styling/breakpoints.mdx",sourceDirName:"styling",slug:"/styling/breakpoints",permalink:"/docs/styling/breakpoints",editUrl:"https://github.com/habx/concrete-docs/edit/dev/docs/styling/breakpoints.mdx",tags:[],version:"current",frontMatter:{title:"Breakpoints"},sidebar:"docs",previous:{title:"Animations",permalink:"/docs/styling/animations"},next:{title:"Custom theme",permalink:"/docs/styling/custom-theme"}},s=[{value:"Media queries presets",id:"media-queries-presets",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Hooks",id:"hooks",children:[{value:"useResponsiveType",id:"useresponsivetype",children:[],level:3}],level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"media-queries-presets"},"Media queries presets"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Concrete")," makes use of ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/CSS/Media_Queries/Using_media_queries"},"media queries"),"\neasy by providing a set of breakpoints media presets for your styles."),(0,a.kt)("p",null,"Breakpoints are"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"desktop")," ",(0,a.kt)("em",{parentName:"li"},"(1296em)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tablet")," ",(0,a.kt)("em",{parentName:"li"},"(1024em)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"smallTablet")," ",(0,a.kt)("em",{parentName:"li"},"(768em)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"phone")," ",(0,a.kt)("em",{parentName:"li"},"(600em)"))),(0,a.kt)("p",null,"Breakpoint object has 2 presets for media queries. ",(0,a.kt)("inlineCode",{parentName:"p"},"below")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"above"),"\nIf we want a media query that apply on media with screen size bellow tablets,\nyou should use ",(0,a.kt)("inlineCode",{parentName:"p"},"breakpoints.below.tablet")," preset."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@media (${breakpoints.below.tablet}) {\n  padding: 32px;\n}\n")),(0,a.kt)("p",null,"Becomes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@media (max-width: 64em) {\n  padding: 32px;\n}\n")),(0,a.kt)("h2",{id:"hooks"},"Hooks"),(0,a.kt)("h3",{id:"useresponsivetype"},"useResponsiveType"),(0,a.kt)("p",null,"Returns the current breakpoint of the screen. Default value can be passed as parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'useResponsiveType("phone"); // => desktop\n')))}c.isMDXComponent=!0}}]);