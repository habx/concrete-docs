"use strict";(self.webpackChunkconcrete_docs=self.webpackChunkconcrete_docs||[]).push([[757],{4956:(n,e,r)=>{r.d(e,{G:()=>i});var t=r(7294),i=function(n){var e=t.useRef(null);return null===e.current&&(e.current=n||"".concat(Math.random())),e.current}},881:(n,e,r)=>{r.d(e,{Q:()=>g});var t,i,a,o=r(7294),l=r(4956),d=r(7379),c=r(336),s=r(1041),m=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},p=d.ZP.label(t||(t=m(["\n  user-select: none;\n  display: flex;\n  align-items: baseline;\n\n  margin: auto 0;\n\n  &[data-disabled='true'] {\n    color: ",";\n  }\n\n  [data-orientation='vertical'] > & {\n    padding-bottom: 8px;\n  }\n\n  [data-orientation='horizontal'] > & {\n    padding-right: 12px;\n  }\n\n  [data-orientation='horizontal-reverse'] > & {\n    padding-left: 12px;\n  }\n\n  &[data-type='regular'] {\n    ",";\n  }\n\n  &[data-type='small'] {\n    ",";\n  }\n\n  &[data-type='caption'] {\n    ",";\n  }\n\n  &[data-error='true'] {\n    color: ",";\n  }\n"],["\n  user-select: none;\n  display: flex;\n  align-items: baseline;\n\n  margin: auto 0;\n\n  &[data-disabled='true'] {\n    color: ",";\n  }\n\n  [data-orientation='vertical'] > & {\n    padding-bottom: 8px;\n  }\n\n  [data-orientation='horizontal'] > & {\n    padding-right: 12px;\n  }\n\n  [data-orientation='horizontal-reverse'] > & {\n    padding-left: 12px;\n  }\n\n  &[data-type='regular'] {\n    ",";\n  }\n\n  &[data-type='small'] {\n    ",";\n  }\n\n  &[data-type='caption'] {\n    ",";\n  }\n\n  &[data-error='true'] {\n    color: ",";\n  }\n"])),s.rS.neutralColor(400),c.sq.regular,c.sq.small,c.sq.caption,s.rS.color("error")),u=d.ZP.div(i||(i=m(["\n  display: flex;\n\n  &[data-orientation='vertical'] {\n    flex-direction: column;\n  }\n\n  &[data-orientation='horizontal'] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  &[data-orientation='horizontal-reverse'] {\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    align-items: center;\n  }\n"],["\n  display: flex;\n\n  &[data-orientation='vertical'] {\n    flex-direction: column;\n  }\n\n  &[data-orientation='horizontal'] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  &[data-orientation='horizontal-reverse'] {\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    align-items: center;\n  }\n"]))),v=d.ZP.div(a||(a=m(["\n  margin-left: 8px;\n"],["\n  margin-left: 8px;\n"]))),b=function(){return b=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},b.apply(this,arguments)},h=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(n);i<t.length;i++)e.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(r[t[i]]=n[t[i]])}return r},g=function(n){var e=void 0===n?{}:n,r=e.padding,t=void 0===r?"small":r,i=e.orientation,a=void 0===i?"vertical":i,d=e.type,c=void 0===d?"small":d,s=e.componentName;return function(n){var e=o.forwardRef((function(e,r){var i=e,d=i.label,m=i.labelType,g=void 0===m?c:m,y=i.labelElementRight,f=i.id,x=h(i,["label","labelType","labelElementRight","id"]),k=(0,l.G)(f);return d?o.createElement(u,{className:"label-line","data-orientation":a,"data-padding":t},o.createElement(p,{"data-type":g,"data-disabled":x.disabled,"data-testid":"".concat(null!=s?s:"input","-label"),"data-error":x.error,htmlFor:k},d,o.createElement(v,null,y)),o.createElement(n,b({},x,{ref:r,id:k}))):o.createElement(n,b({},x,{ref:r}))}));return e}}},6802:(n,e,r)=>{r.r(e),r.d(e,{AnimationActions:()=>D,AnimationContainer:()=>M,AnimationExample:()=>I,StyledAnimationExample:()=>R,contentTitle:()=>Z,default:()=>q,frontMatter:()=>F,metadata:()=>z,toc:()=>B});var t,i,a,o,l,d,c,s=r(7462),m=r(1880),p=r(7294),u=r(4137),v=r(7379),b=r(4956),h=r(881),g=r(7390),y=r(1041),f=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},x=v.ZP.div(t||(t=f(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: var(--radio-inner-circle-diameter);\n  width: var(--radio-inner-circle-diameter);\n  background-color: var(--radio-inner-circle-color);\n  border-radius: 50%;\n  transition: ",";\n"],["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: var(--radio-inner-circle-diameter);\n  width: var(--radio-inner-circle-diameter);\n  background-color: var(--radio-inner-circle-color);\n  border-radius: 50%;\n  transition: ",";\n"])),(0,g.eR)("all")),k=v.ZP.label(i||(i=f(["\n  flex: 0 0 auto;\n  position: relative;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  display: flex;\n\n  width: var(--radio-diameter);\n  min-width: var(--radio-diameter);\n  height: var(--radio-diameter);\n  border-radius: 50%;\n\n  background: var(--radio-background-color);\n  box-shadow: inset 0 0 0 var(--radio-border-width) var(--radio-border-color),\n    0 0 0 var(--radio-outline-width) var(--radio-outline-color);\n\n  transition: ",";\n\n  &:focus {\n    --radio-outline-width: 4px;\n  }\n"],["\n  flex: 0 0 auto;\n  position: relative;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  display: flex;\n\n  width: var(--radio-diameter);\n  min-width: var(--radio-diameter);\n  height: var(--radio-diameter);\n  border-radius: 50%;\n\n  background: var(--radio-background-color);\n  box-shadow: inset 0 0 0 var(--radio-border-width) var(--radio-border-color),\n    0 0 0 var(--radio-outline-width) var(--radio-outline-color);\n\n  transition: ",";\n\n  &:focus {\n    --radio-outline-width: 4px;\n  }\n"])),(0,g.eR)("all")),w=v.ZP.input(a||(a=f(["\n  display: none;\n\n  & + "," {\n    --radio-diameter: 22px;\n  }\n\n  &[data-small='true'] + "," {\n    --radio-diameter: 12px;\n  }\n\n  &:checked + "," {\n    --radio-inner-circle-diameter: 12px;\n  }\n\n  &:not(:disabled) + "," {\n    --radio-border-color: ",";\n    --radio-inner-circle-color: ",";\n  }\n\n  &:hover {\n    & + "," {\n      --radio-border-width: 4px;\n    }\n\n    &[data-small='true'] + "," {\n      --radio-inner-circle-diameter: 0;\n    }\n\n    &:checked + "," {\n      --radio-border-color: ",";\n    }\n\n    &:not([data-small='true']):not(:active):checked + "," {\n      --radio-inner-circle-color: ",";\n      --radio-inner-circle-diameter: 10px;\n    }\n  }\n\n  &:active {\n    &:not(:checked) + "," {\n      --radio-border-color: ",";\n    }\n\n    & + "," {\n      --radio-border-width: 3px;\n    }\n\n    &[data-small='true'] + "," {\n      --radio-inner-circle-diameter: 6px;\n    }\n  }\n\n  &:not(:disabled):not(:hover):not(:active)[data-error='true'] {\n    & + ",":not(:focus) {\n      --radio-outline-width: 4px;\n      --radio-outline-color: ",";\n      --radio-border-color: ",";\n      --radio-inner-circle-color: ",";\n    }\n  }\n\n  &:disabled {\n    pointer-events: none;\n\n    & + "," {\n      pointer-events: none;\n      --radio-background-color: ",";\n      --radio-inner-circle-color: ",";\n    }\n  }\n"],["\n  display: none;\n\n  & + "," {\n    --radio-diameter: 22px;\n  }\n\n  &[data-small='true'] + "," {\n    --radio-diameter: 12px;\n  }\n\n  &:checked + "," {\n    --radio-inner-circle-diameter: 12px;\n  }\n\n  &:not(:disabled) + "," {\n    --radio-border-color: ",";\n    --radio-inner-circle-color: ",";\n  }\n\n  &:hover {\n    & + "," {\n      --radio-border-width: 4px;\n    }\n\n    &[data-small='true'] + "," {\n      --radio-inner-circle-diameter: 0;\n    }\n\n    &:checked + "," {\n      --radio-border-color: ",";\n    }\n\n    &:not([data-small='true']):not(:active):checked + "," {\n      --radio-inner-circle-color: ",";\n      --radio-inner-circle-diameter: 10px;\n    }\n  }\n\n  &:active {\n    &:not(:checked) + "," {\n      --radio-border-color: ",";\n    }\n\n    & + "," {\n      --radio-border-width: 3px;\n    }\n\n    &[data-small='true'] + "," {\n      --radio-inner-circle-diameter: 6px;\n    }\n  }\n\n  &:not(:disabled):not(:hover):not(:active)[data-error='true'] {\n    & + ",":not(:focus) {\n      --radio-outline-width: 4px;\n      --radio-outline-color: ",";\n      --radio-border-color: ",";\n      --radio-inner-circle-color: ",";\n    }\n  }\n\n  &:disabled {\n    pointer-events: none;\n\n    & + "," {\n      pointer-events: none;\n      --radio-background-color: ",";\n      --radio-inner-circle-color: ",";\n    }\n  }\n"])),k,k,k,k,y.rS.color("primary"),y.rS.color("primary"),k,k,k,y.rS.color("primary",{variation:"louder"}),k,y.rS.color("primary",{variation:"louder"}),k,y.rS.color("primary"),k,k,k,y.rS.color("error",{opacity:.3}),y.rS.color("error"),y.rS.color("error"),k,y.rS.neutralColor(300),y.rS.neutralColor(300)),S=v.ZP.span(o||(o=f(["\n  display: inline-block;\n  position: relative;\n\n  --radio-background-color: transparent;\n\n  --radio-border-width: 2px;\n  --radio-border-color: ",";\n\n  --radio-outline-width: 0;\n  --radio-outline-color: ",";\n\n  --radio-inner-circle-diameter: 0;\n  --radio-inner-circle-color: ",";\n"],["\n  display: inline-block;\n  position: relative;\n\n  --radio-background-color: transparent;\n\n  --radio-border-width: 2px;\n  --radio-border-color: ",";\n\n  --radio-outline-width: 0;\n  --radio-outline-color: ",";\n\n  --radio-inner-circle-diameter: 0;\n  --radio-inner-circle-color: ",";\n"])),y.rS.neutralColor(400),y.rS.color("primary",{opacity:.3}),y.rS.neutralColor(400)),N=function(){return N=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},N.apply(this,arguments)},O=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(n);i<t.length;i++)e.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(r[t[i]]=n[t[i]])}return r},C=p.forwardRef((function(n,e){var r=n.error,t=n.disabled,i=n.id,a=n.small,o=void 0!==a&&a,l=O(n,["error","disabled","id","small"]),d=(0,b.G)(i);return p.createElement(S,null,p.createElement(w,N({ref:e},l,{"data-error":r,"data-small":o,disabled:t,type:"radio",id:d})),p.createElement(k,{tabIndex:t?void 0:0,htmlFor:d},p.createElement(x,null)))})),j=(0,h.Q)({orientation:"horizontal-reverse"})(C),E=r(7213),P=r(224),A=r(5408),T=r(7745);const F={title:"Animations"},Z=void 0,z={unversionedId:"styling/animations",id:"styling/animations",title:"Animations",description:"animations,",source:"@site/docs/styling/animations.mdx",sourceDirName:"styling",slug:"/styling/animations",permalink:"/docs/styling/animations",editUrl:"https://github.com/habx/concrete-docs/edit/dev/docs/styling/animations.mdx",tags:[],version:"current",frontMatter:{title:"Animations"},sidebar:"docs",previous:{title:"Theme",permalink:"/docs/styling/theme"},next:{title:"Breakpoints",permalink:"/docs/styling/breakpoints"}},B=[{value:"Built in animations",id:"built-in-animations",children:[{value:"Entering",id:"entering",children:[],level:3},{value:"Leaving",id:"leaving",children:[{value:"Example",id:"example",children:[],level:4}],level:3}],level:2},{value:"Transition",id:"transition",children:[],level:2},{value:"Durations",id:"durations",children:[],level:2}],M=(0,v.ZP)(E.A)(l||(l=(0,m.Z)(["\n  padding: 32px 64px;\n"]))),R=(0,v.ZP)(P.Z)(d||(d=(0,m.Z)(['\n  height: 200px;\n  width: 200px;\n  margin: auto;\n  background: white !important;\n  &[data-animation="emerge"] {\n    animation: ',';\n  }\n  &[data-animation="emergeSlantFromTop"] {\n    animation: ',';\n  }\n  &[data-animation="emergeSlantFromBottom"] {\n    animation: ',';\n  }\n  &[data-animation="dive"] {\n    animation: ',';\n  }\n  &[data-animation="diveSlant"] {\n    animation: ',";\n  }\n"])),(0,g.sF)("emerge"),(0,g.sF)("emergeSlantFromTop",{duration:"l"}),(0,g.sF)("emergeSlantFromBottom",{duration:"l"}),(0,g.sF)("dive",{duration:"l"}),(0,g.sF)("diveSlant",{duration:"l"})),D=v.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n  > * {\n    margin-top: 12px;\n    margin-left: 12px;\n  }\n"]))),I=()=>{const n=["emerge","emergeSlantFromTop","emergeSlantFromBottom","dive","diveSlant"],[e,r]=p.useState(n[0]),[t,i]=p.useState(0);return(0,u.kt)("div",null,(0,u.kt)(R,{key:t,"data-animation":e,mdxType:"StyledAnimationExample"}),(0,u.kt)(D,{mdxType:"AnimationActions"},n.map((n=>(0,u.kt)(j,{key:n,label:n,checked:n===e,onClick:()=>r(n),mdxType:"RadioInput"})))),(0,u.kt)(A.z,{fullWidth:!0,onClick:()=>{i((n=>n+1))},mdxType:"Button"},"Voir l'animation"))},$={toc:B,AnimationContainer:M,StyledAnimationExample:R,AnimationActions:D,AnimationExample:I};function q(n){let{components:e,...r}=n;return(0,u.kt)("wrapper",(0,s.Z)({},$,r,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"built-in-animations"},"Built in animations"),(0,u.kt)("p",null,"You can use some of our built-in animations listed here"),(0,u.kt)("h3",{id:"entering"},"Entering"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"emerge")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"emergeSlantFromTop")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"emergeSlantFromBottom"))),(0,u.kt)("h3",{id:"leaving"},"Leaving"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"dive")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"diveSlant"))),(0,u.kt)("h4",{id:"example"},"Example"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},'import { animations } from "@habx/ui-core";\n\nconst MyComponent = styled.div`\n  animation: ${animations("emergeSlantFromTop")};\n`;\n')),(0,u.kt)(M,{backgroundColor:T.D.neutralWhiteWithIntensityFading[800],mdxType:"AnimationContainer"},(0,u.kt)(I,{mdxType:"AnimationExample"})),(0,u.kt)("h2",{id:"transition"},"Transition"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Concrete")," comes with small utility to help having consistent animation duration and type."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},'import { transition } from "@habx/ui-core";\n\nconst MyComponent = styled.div`\n  transition: ${transition($cssKey)};\n`;\n')),(0,u.kt)("h2",{id:"durations"},"Durations"),(0,u.kt)("p",null,"You can customize tue duration with the following keys:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"xs")," ",(0,u.kt)("em",{parentName:"li"},"30ms")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"s")," ",(0,u.kt)("em",{parentName:"li"},"75ms")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"m")," ",(0,u.kt)("em",{parentName:"li"},"150ms")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"l")," ",(0,u.kt)("em",{parentName:"li"},"250ms"))),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},'import { transition, animations } from "@habx/ui-core";\n\nconst MyComponent = styled.div`\n  transition: ${transition("all", { duration: "xs" })}\n  animation: ${animations("diveSlant", { duration: "l" })}\n`;\n')))}q.isMDXComponent=!0}}]);