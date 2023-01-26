"use strict";(self.webpackChunkconcrete_docs=self.webpackChunkconcrete_docs||[]).push([[777],{5588:(e,t,a)=>{a.d(t,{R:()=>i});var n=a(2949),o=a(7294),r=a(2125),s=a(7213),l=a(7745);const c=(0,r.ZP)(s.A).withConfig({displayName:"DocuBackground__TransparentBackground",componentId:"sc-1wf4edp-0"})(["background:transparent !important;"]),i=e=>{let{children:t}=e;const{isDarkTheme:a}=(0,n.I)();return o.createElement(c,{backgroundColor:a?l.D.neutralWhiteWithIntensityFading[0]:l.D.neutralWhiteWithIntensityFading[1e3]},t)}},5864:(e,t,a)=>{a.r(t),a.d(t,{TableExample:()=>k,assets:()=>m,columns:()=>g,contentTitle:()=>d,data:()=>b,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(7462),o=(a(7294),a(3905)),r=a(5588);const s=a(2125).ZP.div.withConfig({displayName:"ResetTable__ResetTableStyles",componentId:"sc-4i7akp-0"})(["table tr{background-color:transparent;border-top:none;}table tr:nth-child(2n){background-color:transparent;}table th,table td{border:none;}table th{background-color:transparent;color:initial;font-weight:initial;}table td{color:initial;}"]);var l=a(6418),c=a(9370);const i={title:"Table usage"},d=void 0,p={unversionedId:"table/usage",id:"table/usage",title:"Table usage",description:"Overview",source:"@site/docs/table/usage.mdx",sourceDirName:"table",slug:"/table/usage",permalink:"/concrete-docs/docs/table/usage",draft:!1,editUrl:"https://github.com/habx/concrete-docs/edit/dev/docs/table/usage.mdx",tags:[],version:"current",frontMatter:{title:"Table usage"},sidebar:"docs",previous:{title:"Async prompts",permalink:"/concrete-docs/docs/async-prompts"},next:{title:"Import / Export",permalink:"/concrete-docs/docs/table/imex"}},m={},u=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Example",id:"example",level:3}],b=[{name:"Jon",age:19},{name:"Eddy",age:30},{name:"Michel",age:40}],g=[{Header:"Name",accessor:"name"},{Header:"Age",accessor:"age"}],k=()=>{const e=(0,l.x)({data:b,columns:g});return(0,o.kt)(c.i,{instance:e,mdxType:"Table"})},h={toc:u,data:b,columns:g,TableExample:k};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Concrete")," has a table UI implementation based on ",(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com/"},"react-table")," hooks.\nSo be sure to understand how ",(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com/"},"react-table")," hooks work before doing anything."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Concrete")," table needs other dependencies to work. So first run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  npm i @habx/ui-table react-table\n")),(0,o.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Concrete Table")," exports an abstraction of ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook and a component to render the ui of the table."),(0,o.kt)("p",null,"Here is how it works."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useTable, Table } from "@habx/ui-table";\n\nexport const data = [\n  { name: "Jon", age: 19 },\n  { name: "Eddy", age: 30 },\n  { name: "Michel", age: 40 },\n];\n\nexport const columns = [\n  {\n    Header: "Name",\n    accessor: "name",\n  },\n  {\n    Header: "Age",\n    accessor: "age",\n  },\n];\n\nexport const TableExample = () => {\n  const tableInstance = useTable({\n    data, // should be memoized\n    columns, // should be memoized\n  });\n  return <Table instance={tableInstance} />;\n};\n')),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)(r.R,{mdxType:"DocuBackground"},(0,o.kt)(s,{mdxType:"ResetTableStyles"},(0,o.kt)(k,{mdxType:"TableExample"}))))}v.isMDXComponent=!0}}]);