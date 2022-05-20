"use strict";(self.webpackChunkconcrete_docs=self.webpackChunkconcrete_docs||[]).push([[85],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(4137));const a={title:"Custom theme"},i=void 0,l={unversionedId:"styling/custom-theme",id:"styling/custom-theme",title:"Custom theme",description:"Definition",source:"@site/docs/styling/custom-theme.mdx",sourceDirName:"styling",slug:"/styling/custom-theme",permalink:"/docs/styling/custom-theme",draft:!1,editUrl:"https://github.com/habx/concrete-docs/edit/dev/docs/styling/custom-theme.mdx",tags:[],version:"current",frontMatter:{title:"Custom theme"},sidebar:"docs",previous:{title:"Breakpoints",permalink:"/docs/styling/breakpoints"},next:{title:"Utils",permalink:"/docs/styling/utils"}},c={},s=[{value:"Definition",id:"definition",level:2},{value:"Theme patch example",id:"theme-patch-example",level:4},{value:"Apply custom theme",id:"apply-custom-theme",level:3}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"Theme is defined with a set of 2 variations (dark and light) with a default background color.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"isDarkProperty")," defines the default theme variant."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export interface DesignSystemTheme {\n  light: ThemeVariant\n  dark: ThemeVariant\n\n  /**\n   * Automatically inferred from the background color to determine if we want to use the light theme or the dark theme\n   */\n  isDark: boolean\n\n  /**\n   * Background color applied on a <Background /> component\n   */\n  backgroundColor: Color\n}\n")),(0,o.kt)("p",null,"A custom theme can be only a partial definition of the theme and will only overwrite defined properties."),(0,o.kt)("h4",{id:"theme-patch-example"},"Theme patch example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "light": {\n    "colors": {\n      "primary": {\n        "base": "#50E3C2",\n        "calm": "#d9f9f2",\n        "loud": "#50E3C2",\n        "calmer": "#f8fefd",\n        "louder": "#329983"\n      },\n      "secondary": {\n        "base": "#003C71",\n        "calm": "#c8d5e0",\n        "loud": "#003C71",\n        "calmer": "#f5f7f9",\n        "louder": "#003C71"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/habx/ui-core/blob/dev/src/theme/theme.interface.ts#L72"},(0,o.kt)("em",{parentName:"a"},"see types definition for details"))),(0,o.kt)("h3",{id:"apply-custom-theme"},"Apply custom theme"),(0,o.kt)("p",null,"Add you theme through ",(0,o.kt)("inlineCode",{parentName:"p"},"ThemeProvider")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const Providers = ({ children }) => {\n  const theme = useMyCustomTheme();\n  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;\n};\n")))}p.isMDXComponent=!0}}]);