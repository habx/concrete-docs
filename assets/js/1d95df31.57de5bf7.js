"use strict";(self.webpackChunkconcrete_docs=self.webpackChunkconcrete_docs||[]).push([[757],{289:(n,e,r)=>{r.d(e,{Q:()=>g});var t=r(7294);var i,a,o,l=r(2125),d=r(336),c=r(1041),s=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},m=l.ZP.label(i||(i=s(["\n  user-select: none;\n  display: flex;\n  align-items: baseline;\n\n  margin: auto 0;\n\n  &[data-disabled='true'] {\n    color: ",";\n  }\n\n  [data-orientation='vertical'] > & {\n    padding-bottom: 8px;\n  }\n\n  [data-orientation='horizontal'] > & {\n    padding-right: 12px;\n  }\n\n  [data-orientation='horizontal-reverse'] > & {\n    padding-left: 12px;\n  }\n\n  &[data-type='regular'] {\n    ",";\n  }\n\n  &[data-type='small'] {\n    ",";\n  }\n\n  &[data-type='caption'] {\n    ",";\n  }\n\n  &[data-error='true'] {\n    color: ",";\n  }\n"],["\n  user-select: none;\n  display: flex;\n  align-items: baseline;\n\n  margin: auto 0;\n\n  &[data-disabled='true'] {\n    color: ",";\n  }\n\n  [data-orientation='vertical'] > & {\n    padding-bottom: 8px;\n  }\n\n  [data-orientation='horizontal'] > & {\n    padding-right: 12px;\n  }\n\n  [data-orientation='horizontal-reverse'] > & {\n    padding-left: 12px;\n  }\n\n  &[data-type='regular'] {\n    ",";\n  }\n\n  &[data-type='small'] {\n    ",";\n  }\n\n  &[data-type='caption'] {\n    ",";\n  }\n\n  &[data-error='true'] {\n    color: ",";\n  }\n"])),c.rS.neutralColor(400),d.sq.regular,d.sq.small,d.sq.caption,c.rS.color("error")),p=l.ZP.div(a||(a=s(["\n  display: flex;\n\n  &[data-orientation='vertical'] {\n    flex-direction: column;\n  }\n\n  &[data-orientation='horizontal'] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  &[data-orientation='horizontal-reverse'] {\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    align-items: center;\n  }\n"],["\n  display: flex;\n\n  &[data-orientation='vertical'] {\n    flex-direction: column;\n  }\n\n  &[data-orientation='horizontal'] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  &[data-orientation='horizontal-reverse'] {\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    align-items: center;\n  }\n"]))),u=l.ZP.div(o||(o=s(["\n  margin-left: 8px;\n"],["\n  margin-left: 8px;\n"]))),v=function(){return v=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},v.apply(this,arguments)},b=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(n);i<t.length;i++)e.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(r[t[i]]=n[t[i]])}return r},g=function(n){var e=void 0===n?{}:n,r=e.padding,i=void 0===r?"small":r,a=e.orientation,o=void 0===a?"vertical":a,l=e.type,d=void 0===l?"small":l,c=e.componentName;return function(n){var e=t.forwardRef((function(e,r){var a=e,l=a.label,s=a.labelType,g=void 0===s?d:s,h=a.labelElementRight,y=a.id,f=b(a,["label","labelType","labelElementRight","id"]),x=function(n){var e=t.useRef(null),r=t.useId();return null===e.current&&(e.current=n||r),e.current}(y);return l?t.createElement(p,{className:"label-line","data-orientation":o,"data-padding":i},t.createElement(m,{"data-type":g,"data-disabled":f.disabled,"data-testid":"".concat(null!=c?c:"input","-label"),"data-error":f.error,htmlFor:x},l,t.createElement(u,null,h)),t.createElement(n,v({},f,{ref:r,id:x}))):t.createElement(n,v({},f,{id:x,ref:r}))}));return e}}},6802:(n,e,r)=>{r.r(e),r.d(e,{AnimationActions:()=>M,AnimationContainer:()=>R,AnimationExample:()=>D,StyledAnimationExample:()=>I,assets:()=>z,contentTitle:()=>F,default:()=>q,frontMatter:()=>T,metadata:()=>Z,toc:()=>B});var t,i,a,o,l,d,c,s=r(7462),m=r(1880),p=r(7294),u=r(3905),v=r(2125),b=r(7213),g=r(224),h=r(7390),y=r(289),f=r(1041),x=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},k=v.ZP.div(t||(t=x(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: var(--radio-inner-circle-diameter);\n  width: var(--radio-inner-circle-diameter);\n  background-color: var(--radio-inner-circle-color);\n  border-radius: 50%;\n  transition: ",";\n"],["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: var(--radio-inner-circle-diameter);\n  width: var(--radio-inner-circle-diameter);\n  background-color: var(--radio-inner-circle-color);\n  border-radius: 50%;\n  transition: ",";\n"])),(0,h.eR)("all")),w=v.ZP.label(i||(i=x(["\n  flex: 0 0 auto;\n  position: relative;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  display: flex;\n\n  width: var(--radio-diameter);\n  min-width: var(--radio-diameter);\n  height: var(--radio-diameter);\n  border-radius: 50%;\n\n  background: var(--radio-background-color);\n  box-shadow: inset 0 0 0 var(--radio-border-width) var(--radio-border-color),\n    0 0 0 var(--radio-outline-width) var(--radio-outline-color);\n\n  transition: ",";\n\n  &:focus {\n    --radio-outline-width: 4px;\n  }\n"],["\n  flex: 0 0 auto;\n  position: relative;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  display: flex;\n\n  width: var(--radio-diameter);\n  min-width: var(--radio-diameter);\n  height: var(--radio-diameter);\n  border-radius: 50%;\n\n  background: var(--radio-background-color);\n  box-shadow: inset 0 0 0 var(--radio-border-width) var(--radio-border-color),\n    0 0 0 var(--radio-outline-width) var(--radio-outline-color);\n\n  transition: ",";\n\n  &:focus {\n    --radio-outline-width: 4px;\n  }\n"])),(0,h.eR)("all")),S=v.ZP.input(a||(a=x(["\n  display: none;\n\n  & + "," {\n    --radio-diameter: 22px;\n  }\n\n  &[data-small='true'] + "," {\n    --radio-diameter: 12px;\n  }\n\n  &:checked + "," {\n    --radio-inner-circle-diameter: 12px;\n  }\n\n  &:not(:disabled) + "," {\n    --radio-border-color: ",";\n    --radio-inner-circle-color: ",";\n  }\n\n  &:hover {\n    & + "," {\n      --radio-border-width: 4px;\n    }\n\n    &[data-small='true'] + "," {\n      --radio-inner-circle-diameter: 0;\n    }\n\n    &:checked + "," {\n      --radio-border-color: ",";\n    }\n\n    &:not([data-small='true']):not(:active):checked + "," {\n      --radio-inner-circle-color: ",";\n      --radio-inner-circle-diameter: 10px;\n    }\n  }\n\n  &:active {\n    &:not(:checked) + "," {\n      --radio-border-color: ",";\n    }\n\n    & + "," {\n      --radio-border-width: 3px;\n    }\n\n    &[data-small='true'] + "," {\n      --radio-inner-circle-diameter: 6px;\n    }\n  }\n\n  &:not(:disabled):not(:hover):not(:active)[data-error='true'] {\n    & + ",":not(:focus) {\n      --radio-outline-width: 4px;\n      --radio-outline-color: ",";\n      --radio-border-color: ",";\n      --radio-inner-circle-color: ",";\n    }\n  }\n\n  &:disabled {\n    pointer-events: none;\n\n    & + "," {\n      pointer-events: none;\n      --radio-background-color: ",";\n      --radio-inner-circle-color: ",";\n    }\n  }\n"],["\n  display: none;\n\n  & + "," {\n    --radio-diameter: 22px;\n  }\n\n  &[data-small='true'] + "," {\n    --radio-diameter: 12px;\n  }\n\n  &:checked + "," {\n    --radio-inner-circle-diameter: 12px;\n  }\n\n  &:not(:disabled) + "," {\n    --radio-border-color: ",";\n    --radio-inner-circle-color: ",";\n  }\n\n  &:hover {\n    & + "," {\n      --radio-border-width: 4px;\n    }\n\n    &[data-small='true'] + "," {\n      --radio-inner-circle-diameter: 0;\n    }\n\n    &:checked + "," {\n      --radio-border-color: ",";\n    }\n\n    &:not([data-small='true']):not(:active):checked + "," {\n      --radio-inner-circle-color: ",";\n      --radio-inner-circle-diameter: 10px;\n    }\n  }\n\n  &:active {\n    &:not(:checked) + "," {\n      --radio-border-color: ",";\n    }\n\n    & + "," {\n      --radio-border-width: 3px;\n    }\n\n    &[data-small='true'] + "," {\n      --radio-inner-circle-diameter: 6px;\n    }\n  }\n\n  &:not(:disabled):not(:hover):not(:active)[data-error='true'] {\n    & + ",":not(:focus) {\n      --radio-outline-width: 4px;\n      --radio-outline-color: ",";\n      --radio-border-color: ",";\n      --radio-inner-circle-color: ",";\n    }\n  }\n\n  &:disabled {\n    pointer-events: none;\n\n    & + "," {\n      pointer-events: none;\n      --radio-background-color: ",";\n      --radio-inner-circle-color: ",";\n    }\n  }\n"])),w,w,w,w,f.rS.color("primary"),f.rS.color("primary"),w,w,w,f.rS.color("primary",{variation:"louder"}),w,f.rS.color("primary",{variation:"louder"}),w,f.rS.color("primary"),w,w,w,f.rS.color("error",{opacity:.3}),f.rS.color("error"),f.rS.color("error"),w,f.rS.neutralColor(300),f.rS.neutralColor(300)),N=v.ZP.span(o||(o=x(["\n  display: inline-block;\n  position: relative;\n\n  --radio-background-color: transparent;\n\n  --radio-border-width: 2px;\n  --radio-border-color: ",";\n\n  --radio-outline-width: 0;\n  --radio-outline-color: ",";\n\n  --radio-inner-circle-diameter: 0;\n  --radio-inner-circle-color: ",";\n"],["\n  display: inline-block;\n  position: relative;\n\n  --radio-background-color: transparent;\n\n  --radio-border-width: 2px;\n  --radio-border-color: ",";\n\n  --radio-outline-width: 0;\n  --radio-outline-color: ",";\n\n  --radio-inner-circle-diameter: 0;\n  --radio-inner-circle-color: ",";\n"])),f.rS.neutralColor(400),f.rS.color("primary",{opacity:.3}),f.rS.neutralColor(400)),O=function(){return O=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},O.apply(this,arguments)},C=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(n);i<t.length;i++)e.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(r[t[i]]=n[t[i]])}return r},j=p.forwardRef((function(n,e){var r=n.error,t=n.small,i=void 0!==t&&t,a=C(n,["error","small"]);return p.createElement(N,null,p.createElement(S,O({},a,{"data-error":r,"data-small":i,ref:e,type:"radio"})),p.createElement(w,{htmlFor:a.id,tabIndex:a.disabled?void 0:0},p.createElement(k,null)))})),E=(0,y.Q)({orientation:"horizontal-reverse"})(j),P=r(5408),A=r(7745);const T={title:"Animations"},F=void 0,Z={unversionedId:"styling/animations",id:"styling/animations",title:"Animations",description:"Built in animations",source:"@site/docs/styling/animations.mdx",sourceDirName:"styling",slug:"/styling/animations",permalink:"/concrete-docs/docs/styling/animations",draft:!1,editUrl:"https://github.com/habx/concrete-docs/edit/dev/docs/styling/animations.mdx",tags:[],version:"current",frontMatter:{title:"Animations"},sidebar:"docs",previous:{title:"Theme",permalink:"/concrete-docs/docs/styling/theme"},next:{title:"Breakpoints",permalink:"/concrete-docs/docs/styling/breakpoints"}},z={},B=[{value:"Built in animations",id:"built-in-animations",level:2},{value:"Entering",id:"entering",level:3},{value:"Leaving",id:"leaving",level:3},{value:"Example",id:"example",level:4},{value:"Transition",id:"transition",level:2},{value:"Durations",id:"durations",level:2}],R=(0,v.ZP)(b.A)(l||(l=(0,m.Z)(["\n  padding: 32px 64px;\n"]))),I=(0,v.ZP)(g.Z)(d||(d=(0,m.Z)(['\n  height: 200px;\n  width: 200px;\n  margin: auto;\n  background: white !important;\n  &[data-animation="emerge"] {\n    animation: ',';\n  }\n  &[data-animation="emergeSlantFromTop"] {\n    animation: ',';\n  }\n  &[data-animation="emergeSlantFromBottom"] {\n    animation: ',';\n  }\n  &[data-animation="dive"] {\n    animation: ',';\n  }\n  &[data-animation="diveSlant"] {\n    animation: ',";\n  }\n"])),(0,h.sF)("emerge"),(0,h.sF)("emergeSlantFromTop",{duration:"l"}),(0,h.sF)("emergeSlantFromBottom",{duration:"l"}),(0,h.sF)("dive",{duration:"l"}),(0,h.sF)("diveSlant",{duration:"l"})),M=v.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n  > * {\n    margin-top: 12px;\n    margin-left: 12px;\n  }\n"]))),D=()=>{const n=["emerge","emergeSlantFromTop","emergeSlantFromBottom","dive","diveSlant"],[e,r]=p.useState(n[0]),[t,i]=p.useState(0);return(0,u.kt)("div",null,(0,u.kt)(I,{key:t,"data-animation":e,mdxType:"StyledAnimationExample"}),(0,u.kt)(M,{mdxType:"AnimationActions"},n.map((n=>(0,u.kt)(E,{key:n,label:n,checked:n===e,onClick:()=>r(n),mdxType:"RadioInput"})))),(0,u.kt)(P.z,{fullWidth:!0,onClick:()=>{i((n=>n+1))},mdxType:"Button"},"Voir l'animation"))},$={toc:B,AnimationContainer:R,StyledAnimationExample:I,AnimationActions:M,AnimationExample:D};function q(n){let{components:e,...r}=n;return(0,u.kt)("wrapper",(0,s.Z)({},$,r,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"built-in-animations"},"Built in animations"),(0,u.kt)("p",null,"You can use some of our built-in animations listed here"),(0,u.kt)("h3",{id:"entering"},"Entering"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"emerge")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"emergeSlantFromTop")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"emergeSlantFromBottom"))),(0,u.kt)("h3",{id:"leaving"},"Leaving"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"dive")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"diveSlant"))),(0,u.kt)("h4",{id:"example"},"Example"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},'import { animations } from "@habx/ui-core";\n\nconst MyComponent = styled.div`\n  animation: ${animations("emergeSlantFromTop")};\n`;\n')),(0,u.kt)(R,{backgroundColor:A.D.neutralWhiteWithIntensityFading[800],mdxType:"AnimationContainer"},(0,u.kt)(D,{mdxType:"AnimationExample"})),(0,u.kt)("h2",{id:"transition"},"Transition"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Concrete")," comes with small utility to help having consistent animation duration and type."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},'import { transition } from "@habx/ui-core";\n\nconst MyComponent = styled.div`\n  transition: ${transition($cssKey)};\n`;\n')),(0,u.kt)("h2",{id:"durations"},"Durations"),(0,u.kt)("p",null,"You can customize tue duration with the following keys:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"xs")," ",(0,u.kt)("em",{parentName:"li"},"30ms")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"s")," ",(0,u.kt)("em",{parentName:"li"},"75ms")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"m")," ",(0,u.kt)("em",{parentName:"li"},"150ms")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"l")," ",(0,u.kt)("em",{parentName:"li"},"250ms"))),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},'import { transition, animations } from "@habx/ui-core";\n\nconst MyComponent = styled.div`\n  transition: ${transition("all", { duration: "xs" })}\n  animation: ${animations("diveSlant", { duration: "l" })}\n`;\n')))}q.isMDXComponent=!0}}]);