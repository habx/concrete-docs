"use strict";(self.webpackChunkconcrete_docs=self.webpackChunkconcrete_docs||[]).push([[332],{2463:(e,n,t)=>{t.d(n,{K:()=>v});var r,a,o,l,i=t(7294),c=t(7379),p=t(6697),s=t(336),u=t(1041),d=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},m=c.ZP.div(r||(r=d(["\n  font-family: ",";\n  font-size: ","px;\n\n  &[data-small='true'] {\n    font-size: ","px;\n  }\n\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  align-items: flex-start;\n\n  padding: 12px 24px;\n  border-radius: 6px;\n\n  background: var(--alert-panel-background);\n  color: var(--alert-panel-color);\n\n  --alert-panel-background: ",";\n  --alert-panel-color: ",";\n  --alert-panel-title-color: ",";\n  --alert-panel-icon-color: ",";\n\n  &[data-warning='true'] {\n    --alert-panel-background: ",";\n    --alert-panel-color: ",";\n    --alert-panel-icon-color: var(--alert-panel-color);\n    --alert-panel-title-color: var(--alert-panel-color);\n  }\n  &[data-success='true'] {\n    --alert-panel-background: ",";\n    --alert-panel-color: ",";\n    --alert-panel-icon-color: var(--alert-panel-color);\n    --alert-panel-title-color: var(--alert-panel-color);\n  }\n  &[data-error='true'] {\n    --alert-panel-background: ",";\n    --alert-panel-color: ",";\n    --alert-panel-icon-color: var(--alert-panel-color);\n    --alert-panel-title-color: var(--alert-panel-color);\n  }\n\n  &[data-bare='true'] {\n    --alert-panel-background: none;\n    --alert-panel-color: ",";\n    --alert-panel-icon-color: var(--alert-panel-color);\n    --alert-panel-title-color: var(--alert-panel-color);\n  }\n"],["\n  font-family: ",";\n  font-size: ","px;\n\n  &[data-small='true'] {\n    font-size: ","px;\n  }\n\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  align-items: flex-start;\n\n  padding: 12px 24px;\n  border-radius: 6px;\n\n  background: var(--alert-panel-background);\n  color: var(--alert-panel-color);\n\n  --alert-panel-background: ",";\n  --alert-panel-color: ",";\n  --alert-panel-title-color: ",";\n  --alert-panel-icon-color: ",";\n\n  &[data-warning='true'] {\n    --alert-panel-background: ",";\n    --alert-panel-color: ",";\n    --alert-panel-icon-color: var(--alert-panel-color);\n    --alert-panel-title-color: var(--alert-panel-color);\n  }\n  &[data-success='true'] {\n    --alert-panel-background: ",";\n    --alert-panel-color: ",";\n    --alert-panel-icon-color: var(--alert-panel-color);\n    --alert-panel-title-color: var(--alert-panel-color);\n  }\n  &[data-error='true'] {\n    --alert-panel-background: ",";\n    --alert-panel-color: ",";\n    --alert-panel-icon-color: var(--alert-panel-color);\n    --alert-panel-title-color: var(--alert-panel-color);\n  }\n\n  &[data-bare='true'] {\n    --alert-panel-background: none;\n    --alert-panel-color: ",";\n    --alert-panel-icon-color: var(--alert-panel-color);\n    --alert-panel-title-color: var(--alert-panel-color);\n  }\n"])),u.rS.font(),p.d.moon.size,p.d.pluto.size,u.rS.neutralColor(100),u.rS.neutralColor(700),u.rS.neutralColor(700),u.rS.neutralColor(500),u.rS.color("warning",{variation:"calmer"}),u.rS.color("warning",{variation:"loud"}),u.rS.color("success",{variation:"calmer"}),u.rS.color("success"),u.rS.color("error",{variation:"calmer"}),u.rS.color("error"),u.rS.neutralColor(400)),f=c.ZP.div(a||(a=d(["\n  margin: 2px 12px 0 -12px;\n  color: var(--alert-panel-icon-color);\n"],["\n  margin: 2px 12px 0 -12px;\n  color: var(--alert-panel-icon-color);\n"]))),k=c.ZP.div(o||(o=d(["\n  flex: 0 0 auto;\n\n  margin: 2px 12px 0 -12px;\n  width: 48px;\n"],["\n  flex: 0 0 auto;\n\n  margin: 2px 12px 0 -12px;\n  width: 48px;\n"]))),y=(0,c.ZP)(s.xv)(l||(l=d(["\n  color: var(--alert-panel-title-color);\n  font-weight: 500;\n  margin-top: -2px;\n"],["\n  color: var(--alert-panel-title-color);\n  font-weight: 500;\n  margin-top: -2px;\n"]))),h=function(){return h=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},h.apply(this,arguments)},g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},v=i.forwardRef((function(e,n){var t=e.title,r=e.illustration,a=e.icon,o=e.warning,l=e.error,c=e.success,p=e.bare,s=e.small,u=e.children,d=g(e,["title","illustration","icon","warning","error","success","bare","small","children"]);return i.createElement(m,h({ref:n,"data-warning":o,"data-error":l,"data-success":c,"data-bare":p,"data-small":s},d),r&&i.createElement(k,null,r),a&&i.createElement(f,null,a),i.createElement("div",null,t&&i.createElement(y,{type:s?"small":"regular"},t),u))}))},6059:(e,n,t)=>{t.r(n),t.d(n,{BasicConfirmUsage:()=>R,TypeContainer:()=>A,contentTitle:()=>z,default:()=>D,frontMatter:()=>E,metadata:()=>L,toc:()=>I});var r,a,o=t(7462),l=t(1880),i=t(7294),c=t(4137),p=t(7379),s=t(1399),u=t(9864),d=t(8004),m=t(1887),f=t(6354),k=t(2056),y=function(){return y=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},y.apply(this,arguments)},h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},g=i.forwardRef((function(e,n){var t=e.children,r=h(e,["children"]),a=(0,d.H)(),o=(0,f.U)(),l=function(e){var n=function(e){if(!e)return[];var t=[];return i.Children.forEach(e,(function(e){(0,u.isFragment)(e)?t.push.apply(t,n(e.props.children)):t.push(e)})),t};return n(e).filter((function(e){return!!e}))}(t);return i.useLayoutEffect((function(){if(a.isInLayout)return a.registerChild(m.p.ActionBar)}),[a]),i.createElement(k.q,y({backgroundColor:o,"data-in-layout":a.isInLayout},r,{ref:n}),i.createElement(k.Y,{"data-count":i.Children.count(l)},i.Children.map(l,(function(e,n){return i.createElement(i.Fragment,{key:n},e)}))))})),v=t(5408),x=t(7629),b=t(6787),C=i.createContext({confirmLabel:"Valider",cancelLabel:"Annuler",deleteLabel:"Supprimer"}),w=t(336),N=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},T=p.ZP.div(r||(r=N(["\n  display: flex;\n  flex-direction: column;\n"],["\n  display: flex;\n  flex-direction: column;\n"]))),B=t(8987),O=t(1833),j=t(2463),M=t(224),P=t(4481),S=t(8517);const E={title:"Async prompts"},z=void 0,L={unversionedId:"async-prompts",id:"async-prompts",title:"Async prompts",description:"confirm,",source:"@site/docs/async-prompts.mdx",sourceDirName:".",slug:"/async-prompts",permalink:"/docs/async-prompts",editUrl:"https://github.com/habx/concrete-docs/edit/dev/docs/async-prompts.mdx",tags:[],version:"current",frontMatter:{title:"Async prompts"},sidebar:"docs",previous:{title:"Toggle Components",permalink:"/docs/modal-like"},next:{title:"Table usage",permalink:"/docs/table/usage"}},I=[{value:"Why async prompts ?",id:"why-async-prompts-",children:[],level:2},{value:"Confirm",id:"confirm",children:[{value:"Usage",id:"usage",children:[],level:3}],level:2},{value:"Notify",id:"notify",children:[{value:"Basic usage",id:"basic-usage",children:[],level:3},{value:"With illustration",id:"with-illustration",children:[],level:3},{value:"With JSX",id:"with-jsx",children:[],level:3},{value:"Markdown",id:"markdown",children:[],level:3},{value:"Options",id:"options",children:[{value:"Types",id:"types",children:[],level:4}],level:3}],level:2},{value:"Alert",id:"alert",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Prompt",id:"prompt",children:[{value:"Example",id:"example-1",children:[],level:3}],level:2}],R=()=>(0,c.kt)(v.z,{onClick:async()=>{const e=await(n={message:"Do you want to confirm ?",confirmLabel:"Yes",cancelLabel:"No"},t=(0,s.HD)(n)?{message:n}:n,(0,b.e)((function(e){var n=e.onResolve;return{title:t.title,hideCloseIcon:!0,persistent:!0,Component:function(){var e,r,a,o=i.useContext(C);return i.createElement(T,null,i.createElement(w.xv,null,t.message),i.createElement(g,null,i.createElement(v.z,{ghost:!0,secondary:!0,onClick:function(){return n(!1)}},null!==(e=t.cancelLabel)&&void 0!==e?e:o.cancelLabel),i.createElement(v.z,{error:"delete"===t.type,ghost:"delete"===t.type,elementLeft:null!==(r=t.confirmIcon)&&void 0!==r?r:"delete"===t.type?i.createElement(x.J,{icon:"trash-outline"}):void 0,onClick:function(){return n(!0)}},null!==(a=t.confirmLabel)&&void 0!==a?a:o["delete"===t.type?"deleteLabel":"confirmLabel"])))},onClose:function(){return n(!1)}}})));var n,t;(0,B.h)("User response is "+(e?"yes":"no"))},mdxType:"Button"},"Click Me!"),A=p.ZP.div(a||(a=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 24px;\n"]))),Z={toc:I,BasicConfirmUsage:R,TypeContainer:A};function D(e){let{components:n,...t}=e;return(0,c.kt)("wrapper",(0,o.Z)({},Z,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"why-async-prompts-"},"Why async prompts ?"),(0,c.kt)("p",null,"Sometimes we need to get user confirmation after a form submission or any other interaction.\nBorwsers have built-in functions like ",(0,c.kt)("inlineCode",{parentName:"p"},"confirm")," that can get user validation but it won't be style.\nWith React it can be a pain to add a validation modal after submition. We came up with functions helpers inspired by\n",(0,c.kt)("a",{parentName:"p",href:"https://sweetalert2.github.io/"},"sweeetAlert")," that help us adding confirmation modals or even more complexe form called\nasynchronously."),(0,c.kt)("h2",{id:"confirm"},"Confirm"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Concrete")," exports a ",(0,c.kt)("inlineCode",{parentName:"p"},"confirm")," function that return a ",(0,c.kt)("em",{parentName:"p"},"promise")," waiting for user response."),(0,c.kt)("h3",{id:"usage"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'import { confirm, notify, Button } from "@habx/ui-core";\n\nconst MyComponent = () => {\n  const handleSubmit = async () => {\n    const hasConfirmed = confirm("Do you want to confirm ?");\n    notify(`User response ${hasConfirmed ? "yes" : "no"}`);\n  };\n\n  return <Button onClick={handleSubmit}>Click Me!</Button>;\n};\n')),(0,c.kt)(R,{mdxType:"BasicConfirmUsage"}),(0,c.kt)("h2",{id:"notify"},"Notify"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"notify")," allows to render a sweet message at the bottom of the page from anywhere in the code\nas long as the code is behind the ",(0,c.kt)("inlineCode",{parentName:"p"},"Provider"),"."),(0,c.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'const MyComponent = () => (\n  <Button onClick={() => notify("I can be called from anwhere !")}>\n    Click Me!\n  </Button>\n);\n')),(0,c.kt)(v.z,{onClick:()=>(0,B.h)("I can be called from anwhere !"),mdxType:"Button"},"Click Me!"),(0,c.kt)("h3",{id:"with-illustration"},"With illustration"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'const MyComponent = () => (\n  <Button\n    onClick={() =>\n      notify({\n        message: "hi",\n        illustration: <Icon icon="3D-building-outline" />,\n      })\n    }\n  >\n    Click Me!\n  </Button>\n);\n')),(0,c.kt)(v.z,{onClick:()=>(0,B.h)({message:"hi",illustration:(0,c.kt)(x.J,{icon:"3D-building-outline",mdxType:"Icon"})}),mdxType:"Button"},"Click Me!"),(0,c.kt)("h3",{id:"with-jsx"},"With JSX"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'const MyComponent = () => {\n  const message = (\n    <div>\n      <Title type="regular">Title</Title>\n      <Text>Text</Text>\n    </div>\n  );\n  return <Button onClick={() => notify({ message })}>Click Me!</Button>;\n};\n')),(0,c.kt)(v.z,{onClick:()=>(0,B.h)({message:(0,c.kt)("div",null,(0,c.kt)(O.D,{type:"regular",mdxType:"Title"},"Title"),(0,c.kt)(w.xv,{mdxType:"Text"},"Text"))}),mdxType:"Button"},"Click Me!"),(0,c.kt)("h3",{id:"markdown"},"Markdown"),(0,c.kt)("p",null,"You can pass directly markdown to ",(0,c.kt)("inlineCode",{parentName:"p"},"notify")," if you need more complex rendering without passing jsx"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'const MyComponent = () => (\n  <Button onClick={() => notify({ message: "**hi in bold**", markdown: true })}>\n    Click Me!\n  </Button>\n);\n')),(0,c.kt)(v.z,{onClick:()=>(0,B.h)({message:"**hi in bold**",markdown:!0}),mdxType:"Button"},"Click Me!"),(0,c.kt)("h3",{id:"options"},"Options"),(0,c.kt)("p",null,"You can pass a 2nd argument to notify to configure the notification as you like"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"duration"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"number")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,c.kt)("inlineCode",{parentName:"li"},"'info | 'warning' | 'error'"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'const MyComponent = () => (\n  <Button\n    onClick={() => notify("ERROR !", { duration: 10_000, type: "error" })}\n  >\n    Click Me!\n  </Button>\n);\n')),(0,c.kt)("h4",{id:"types"},"Types"),(0,c.kt)(A,{mdxType:"TypeContainer"},(0,c.kt)(v.z,{small:!0,onClick:()=>(0,B.h)("info",{type:"info"}),mdxType:"Button"},"info"),(0,c.kt)(v.z,{small:!0,warning:!0,onClick:()=>(0,B.h)("warning",{type:"warning"}),mdxType:"Button"},"warning"),(0,c.kt)(v.z,{small:!0,error:!0,onClick:()=>(0,B.h)("error",{type:"error"}),mdxType:"Button"},"error")),(0,c.kt)("h2",{id:"alert"},"Alert"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"alert")," allows to add an ",(0,c.kt)("inlineCode",{parentName:"p"},"AlertBanner")," at the very top of your application, where you placed your ",(0,c.kt)("inlineCode",{parentName:"p"},"Provider"),"."),(0,c.kt)("h3",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'const MyComponent = () => {\n  return <Button onClick={() => alert("I\'m an alert !"}>Click Me!</Button>;\n};\n\n')),(0,c.kt)(j.K,{mdxType:"AlertPanel"},"In this example, the provider is scoped to the next Card"),(0,c.kt)("br",null),(0,c.kt)(M.Z,{spacing:"regular",outline:!0,mdxType:"Card"},(0,c.kt)(P.z,{mdxType:"Provider"},(0,c.kt)(v.z,{small:!0,onClick:()=>(0,S.Z)("I'm an alert !"),mdxType:"Button"},"Show me an alert"))),(0,c.kt)("h2",{id:"prompt"},"Prompt"),(0,c.kt)("p",null,"Prompt is a full customizable async util that render either a ",(0,c.kt)("inlineCode",{parentName:"p"},"Modal")," or a ",(0,c.kt)("inlineCode",{parentName:"p"},"LightBox")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"prompt")," takes a ",(0,c.kt)("em",{parentName:"p"},"function")," as first argument that should return an object with a ",(0,c.kt)("inlineCode",{parentName:"p"},"Component")," field.\nIt returns a promise that is resolved by calling the ",(0,c.kt)("inlineCode",{parentName:"p"},"onResolve")," function passed in the object of the first argument."),(0,c.kt)("p",null,"A ",(0,c.kt)("inlineCode",{parentName:"p"},"Modal")," is used by default but you can pass ",(0,c.kt)("inlineCode",{parentName:"p"},"fullscreen: true")," to use the ",(0,c.kt)("inlineCode",{parentName:"p"},"LightBox")," component.\nOther ",(0,c.kt)("inlineCode",{parentName:"p"},"Modal")," or ",(0,c.kt)("inlineCode",{parentName:"p"},"LightBox")," props can be passed as params."),(0,c.kt)("h3",{id:"example-1"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'import { prompt } from "@habx/ui-core";\n\nconst formResult = await prompt(({ onResolve }) => ({\n  Component: () => <form onSubmit={onResolve}>// you form</form>,\n}));\nif (formResult) {\n  // use your form result\n}\n')))}D.isMDXComponent=!0}}]);