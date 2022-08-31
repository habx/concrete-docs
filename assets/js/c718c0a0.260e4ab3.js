"use strict";(self.webpackChunkconcrete_docs=self.webpackChunkconcrete_docs||[]).push([[201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,y=m["".concat(p,".").concat(u)]||m[u]||s[u]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5588:(e,t,n)=>{n.d(t,{R:()=>d});var r=n(2949),o=n(7294),a=n(2125),i=n(7213),l=n(7745);const p=(0,a.ZP)(i.A).withConfig({displayName:"DocuBackground__TransparentBackground",componentId:"sc-1wf4edp-0"})(["background:transparent !important;"]),d=e=>{let{children:t}=e;const{isDarkTheme:n}=(0,r.I)();return o.createElement(p,{backgroundColor:n?l.D.neutralWhiteWithIntensityFading[0]:l.D.neutralWhiteWithIntensityFading[1e3]},t)}},2032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var r=n(7462),o=(n(7294),n(3905)),a=n(5588),i=n(1833),l=n(336);const p={title:"Typography"},d=void 0,c={unversionedId:"typo",id:"typo",title:"Typography",description:"Concrete has two components for text. Title and Text which has different size type according to the usage.",source:"@site/docs/typo.mdx",sourceDirName:".",slug:"/typo",permalink:"/docs/typo",draft:!1,editUrl:"https://github.com/habx/concrete-docs/edit/dev/docs/typo.mdx",tags:[],version:"current",frontMatter:{title:"Typography"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Toggle Components",permalink:"/docs/modal-like"}},s={},m=[{value:"Title",id:"title",level:2},{value:"Types",id:"types",level:3},{value:"Text",id:"text",level:2},{value:"Types",id:"types-1",level:3},{value:"Variations",id:"variations",level:3},{value:"Markdown",id:"markdown",level:3},{value:"Markdown example",id:"markdown-example",level:4},{value:"Font Family",id:"font-family",level:2}],u={toc:m};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Concrete")," has two components for text. ",(0,o.kt)("inlineCode",{parentName:"p"},"Title")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," which has different size type according to the usage."),(0,o.kt)("h2",{id:"title"},"Title"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Title")," is a styled header component and should be use as such to keep a clean html structure."),(0,o.kt)("h3",{id:"types"},"Types"),(0,o.kt)(a.R,{mdxType:"DocuBackground"},(0,o.kt)(i.D,{type:"headerMaxi",mdxType:"Title"},"headerMaxi"),(0,o.kt)(i.D,{type:"headerBig",mdxType:"Title"},"headerBig"),(0,o.kt)(i.D,{type:"header",mdxType:"Title"},"header"),(0,o.kt)(i.D,{type:"headerSmall",mdxType:"Title"},"headerSmall"),(0,o.kt)(i.D,{type:"section",mdxType:"Title"},"section"),(0,o.kt)(i.D,{type:"regular",mdxType:"Title"},"regular")),(0,o.kt)("h2",{id:"text"},"Text"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," component should be used for any text that is not directly in a component like a ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"Title"),".\nThis will allow keeping consistent ui across your application."),(0,o.kt)("h3",{id:"types-1"},"Types"),(0,o.kt)(a.R,{mdxType:"DocuBackground"},(0,o.kt)(l.xv,{type:"veryLarge",mdxType:"Text"},"veryLarge"),(0,o.kt)(l.xv,{type:"large",mdxType:"Text"},"large"),(0,o.kt)(l.xv,{type:"emphasis",mdxType:"Text"},"emphasis"),(0,o.kt)(l.xv,{type:"regular",mdxType:"Text"},"regular"),(0,o.kt)(l.xv,{type:"small",mdxType:"Text"},"small"),(0,o.kt)(l.xv,{type:"caption",mdxType:"Text"},"caption"),(0,o.kt)(l.xv,{type:"captionSmall",mdxType:"Text"},"captionSmall")),(0,o.kt)("h3",{id:"variations"},"Variations"),(0,o.kt)("p",null,"Sometimes you will want to highlight or add some variations to your text. ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," comes with a variation prop with a\nset of predefined variations"),(0,o.kt)(a.R,{mdxType:"DocuBackground"},(0,o.kt)(l.xv,{variation:"title",mdxType:"Text"},"title"),(0,o.kt)(l.xv,{variation:"button",mdxType:"Text"},"button"),(0,o.kt)(l.xv,{variation:"text",mdxType:"Text"},"text"),(0,o.kt)(l.xv,{variation:"lowContrast",mdxType:"Text"},"lowContrast")),(0,o.kt)("h3",{id:"markdown"},"Markdown"),(0,o.kt)("p",null,"Sometimes your text will come from server and users will want to have rich text UI. With the props ",(0,o.kt)("inlineCode",{parentName:"p"},"markdown"),",\nyou will allow the display of rich text in markdown format."),(0,o.kt)("h4",{id:"markdown-example"},"Markdown example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<Text markdown>**I'm bold**</Text>\n")),(0,o.kt)(l.xv,{markdown:!0,mdxType:"Text"},"**I'm bold**"),(0,o.kt)("h2",{id:"font-family"},"Font Family"),(0,o.kt)("p",null,"To use the right font with ",(0,o.kt)("strong",{parentName:"p"},"Concrete")," you will need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"EuclidFont")," component at the root of your app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { EuclidFont, Provider } from "@habx/ui-core";\nexport const App = () => {\n  return (\n    <Provider>\n      <EuclidFont />\n    </Provider>\n  );\n};\n')))}y.isMDXComponent=!0}}]);