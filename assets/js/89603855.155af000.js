"use strict";(self.webpackChunkconcrete_docs=self.webpackChunkconcrete_docs||[]).push([[484],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(7294).createContext(void 0)},5350:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(2924);const a=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},5588:(e,t,n)=>{n.d(t,{R:()=>d});var r,o=n(1880),a=n(5350),i=n(7294),l=n(9163),c=n(3392),s=n(7745);const u=(0,l.ZP)(c.A)(r||(r=(0,o.Z)(["\n  background: transparent !important;\n"]))),d=e=>{let{children:t}=e;const{isDarkTheme:n}=(0,a.Z)();return i.createElement(u,{backgroundColor:n?s.D.neutralWhiteWithIntensityFading[0]:s.D.neutralWhiteWithIntensityFading[1e3]},t)}},4985:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>y,contentTitle:()=>g,metadata:()=>h,toc:()=>b,Color:()=>v,COLORS_KEYS:()=>O,COLORS_VARIATIONS:()=>x,ColorVariationsContainer:()=>T,ColorVariations:()=>C,default:()=>w});var r,o,a=n(7462),i=n(1880),l=(n(7294),n(4137)),c=n(5588),s=n(9163),u=n(3392),d=n(1593),p=n(6825),m=n(1833),f=n(336);const y={title:"Default Theme"},g=void 0,h={unversionedId:"styling/defaultTheme",id:"styling/defaultTheme",isDocsHomePage:!1,title:"Default Theme",description:"Background,",source:"@site/docs/styling/defaultTheme.mdx",sourceDirName:"styling",slug:"/styling/defaultTheme",permalink:"/docs/styling/defaultTheme",editUrl:"https://github.com/habx/concrete-docs/edit/dev/docs/styling/defaultTheme.mdx",tags:[],version:"current",frontMatter:{title:"Default Theme"},sidebar:"docs",previous:{title:"Palette",permalink:"/docs/styling/palette"},next:{title:"Icons",permalink:"/docs/icons"}},b=[{value:"Colors",id:"colors",children:[],level:2}],v=(0,s.ZP)(u.A)(r||(r=(0,i.Z)(["\n  height: 150px;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"]))),O=["primary","secondary","warning","error","success"],x=["calmer","calm","base","loud","louder","contrastText"],T=s.ZP.div(o||(o=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  margin-bottom: 32px;\n  @media (",") {\n    grid-template-columns: repeat(",", 1fr);\n  }\n"])),x.length,d.A.below.tablet,x.length/2),C=e=>{let{colorKey:t}=e;const n=(0,p.O)();return(0,l.kt)("div",null,(0,l.kt)(m.D,{type:"section",mdxType:"Title"},t),(0,l.kt)(T,{mdxType:"ColorVariationsContainer"},x.map((e=>(0,l.kt)(v,{key:e,backgroundColor:()=>n.colors[t][e],mdxType:"Color"},(0,l.kt)(f.xv,{mdxType:"Text"},e))))))},k={toc:b,Color:v,COLORS_KEYS:O,ColorVariationsContainer:T,ColorVariations:C};function w(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"colors"},"Colors"),(0,l.kt)(c.R,{mdxType:"DocuBackground"},O.map((e=>(0,l.kt)(C,{key:e,colorKey:e,mdxType:"ColorVariations"})))))}w.isMDXComponent=!0}}]);