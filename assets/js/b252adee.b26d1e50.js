"use strict";(self.webpackChunkconcrete_docs=self.webpackChunkconcrete_docs||[]).push([[984],{7642:(e,t,n)=>{n.r(t),n.d(t,{ExportComponent:()=>I,contentTitle:()=>C,default:()=>j,frontMatter:()=>N,metadata:()=>T,toc:()=>E});var a=n(7462),r=n(7294),o=n(4137),i=n(7315),l=n(3548),s=n(1006),p=n(336),d=n(6486),u=["always","imex-only"],c=n(7745),m=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function l(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((a=a.apply(e,t||[])).next())}))},v=function(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(l){o=[6,l],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},h=function(){return n.e(295).then(n.t.bind(n,4295,23))},f=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function l(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((a=a.apply(e,t||[])).next())}))},y=function(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(l){o=[6,l],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},k=function(e,t,n,a){return f(void 0,void 0,void 0,(function(){var r,o,i,l;return y(this,(function(s){switch(s.label){case 0:return[4,m(void 0,void 0,void 0,(function(){return v(this,(function(e){switch(e.label){case 0:return[4,h()];case 1:return[2,new(e.sent().Workbook)]}}))}))];case 1:return r=s.sent(),(o=r.addWorksheet(e)).columns=t.map((function(e){var t,n,a,r,o,i,l;return{header:e.Header+((null===(n=null===(t=e.meta)||void 0===t?void 0:t.imex)||void 0===n?void 0:n.required)?"*":""),key:null!==(a=e.id)&&void 0!==a?a:e.Header,width:null===(o=null===(r=e.meta)||void 0===r?void 0:r.imex)||void 0===o?void 0:o.width,hidden:null===(l=null===(i=e.meta)||void 0===i?void 0:i.imex)||void 0===l?void 0:l.hidden}})),o.addRows(n),[4,null===(l=a.editWorkbookBeforeSave)||void 0===l?void 0:l.call(a,r)];case 2:return s.sent(),"xls"!==a.type?[3,4]:(function(e,t,n){var a,r,o,i,l,s,p,u=e.getRow(1);u.font={bold:!0},u.border={bottom:{style:"medium",color:{argb:c.D.neutralWhiteWithIntensityFading[500].replace("#","")}}},e.addRows(new Array(null!==(a=n.extraRows)&&void 0!==a?a:50).fill([]));var m=function(n){var a=t[n],u=Number(n)+1,c=null===(o=null===(r=a.meta)||void 0===r?void 0:r.imex)||void 0===o?void 0:o.dataValidation,m=!!(null===(l=null===(i=a.meta)||void 0===i?void 0:i.imex)||void 0===l?void 0:l.identifier),v=null===(p=null===(s=a.meta)||void 0===s?void 0:s.imex)||void 0===p?void 0:p.note;(c||m||v)&&e.getColumn(u).eachCell({includeEmpty:!0},(function(t,n){if(1===n&&v&&(t.note=v),n>1&&t){if(c&&(t.dataValidation=c,"list"===c.type&&c.formulae.some((function(e){return e.length>255})))){var r=(0,d.capitalize)((0,d.snakeCase)((0,d.escape)("".concat(a.Header)))),o=e.workbook.addWorksheet(r);c.formulae.forEach((function(e,t){var n=e.replace(/"/g,"").split(",");n.forEach((function(e,n){o.getCell(n+1,t+1).value=e}));var a=String.fromCharCode("A".charCodeAt(0)+t);c.formulae[t]="".concat(r,"!$").concat(a,"$1:$").concat(a,"$").concat(n.length+1)}))}m&&t.value&&(t.protection={locked:!0})}}))};for(var v in t)m(v)}(o,t,a),[4,r.xlsx.writeBuffer()]);case 3:return i=s.sent(),[3,6];case 4:return[4,r.csv.writeBuffer()];case 5:i=s.sent(),s.label=6;case 6:return function(e,t,n){var a=new Blob([n],{type:"xls"===e?"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"text/csv;charset=utf-8"});t+=".".concat("xls"===e?"xlsx":"csv");var r=navigator.msSaveBlob;if(r)r(a,t);else{var o=document.createElement("a");if(void 0!==o.download){var i=URL.createObjectURL(a);o.setAttribute("href",i),o.setAttribute("download",t),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}}(a.type,e,i),[2]}}))}))},x=function(){return x=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},x.apply(this,arguments)},b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=new Set(["string[]","number[]"]),w=function(e){var t=r.useRef(e);return t.current=e,[r.useCallback((function(e,n){var a=x(x({data:[],type:"xls"},t.current),n),r=a.data,o=a.columns,i=b(a,["data","columns"]),l=function(e){var t=e.flatMap((function(e){var t,n;return null!==(n=null===(t=e)||void 0===t?void 0:t.columns)&&void 0!==n?n:[e]})).filter((function(e){var t,n;return!!(null===(t=e.meta)||void 0===t?void 0:t.imex)&&u.includes(null!==(n=e.enabled)&&void 0!==n?n:"always")}));return t.forEach((function(e){if("string"!=typeof e.accessor)throw new Error("Cannot include data with a non-string accessor");if("string"!=typeof e.Header)throw new Error("Cannot include non string Header")})),t}(o),s=r.map((function(e){return l.map((function(t){var n,a=null===(n=t.meta)||void 0===n?void 0:n.imex,r=null==a?void 0:a.type,o=(0,d.get)(e,t.accessor);return(null==a?void 0:a.parse)?o=a.parse(o,Object.values(e)):g.has(r)&&Array.isArray(o)&&(o=o.join(",")),"xls"!==i.type||"number"!==r||(0,d.isFinite)(o)||null==o?o:Number(o)}))}));return k(e,l,s,i)}),[])]};const N={title:"Import / Export"},C=void 0,T={unversionedId:"table/imex",id:"table/imex",isDocsHomePage:!1,title:"Import / Export",description:"Overview",source:"@site/docs/table/imex.mdx",sourceDirName:"table",slug:"/table/imex",permalink:"/docs/table/imex",editUrl:"https://github.com/habx/concrete-docs/edit/dev/docs/table/imex.mdx",tags:[],version:"current",frontMatter:{title:"Import / Export"},sidebar:"docs",previous:{title:"Table usage",permalink:"/docs/table/usage"},next:{title:"Theme",permalink:"/docs/styling/theme"}},E=[{value:"Overview",id:"overview",children:[],level:2},{value:"Columns",id:"columns",children:[{value:"Identifier (required)",id:"identifier-required",children:[{value:"Example",id:"example",children:[],level:5}],level:3},{value:"Type (required)",id:"type-required",children:[{value:"Example",id:"example-1",children:[],level:5}],level:3},{value:"Parse &amp; Format",id:"parse--format",children:[{value:"Example",id:"example-2",children:[],level:5}],level:3},{value:"Validation",id:"validation",children:[{value:"Example",id:"example-3",children:[],level:5},{value:"Excel data validation",id:"excel-data-validation",children:[{value:"Example",id:"example-4",children:[],level:5}],level:4}],level:3},{value:"Excel Styling properties",id:"excel-styling-properties",children:[{value:"Width",id:"width",children:[],level:4},{value:"Hidden",id:"hidden",children:[],level:4}],level:3}],level:2},{value:"Export",id:"export",children:[{value:"Example",id:"example-5",children:[{value:"Columns",id:"columns-1",children:[],level:5},{value:"Columns",id:"columns-2",children:[],level:5},{value:"Basic Usage",id:"basic-usage",children:[],level:5}],level:4}],level:2},{value:"Import",id:"import",children:[{value:"Overview",id:"overview-1",children:[{value:"Validation",id:"validation-1",children:[],level:4}],level:3},{value:"Rules",id:"rules",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"With Drag &amp; Drop",id:"with-drag--drop",children:[],level:4}],level:3}],level:2}],I=()=>{const[e]=w({data:[{name:"Alexis",age:26},{name:"Benjamin",age:10}],columns:[{Header:"Name",accessor:"name",meta:{imex:{type:"string"}}},{Header:"Age",accessor:"age",meta:{imex:{type:"number"}}}],type:"xls"});return(0,o.kt)(i.z,{onClick:()=>e("export"),mdxType:"Button"},"Download XLS")},O={toc:E,ExportComponent:I};function j(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Concrete Table")," exports two hooks that use ",(0,o.kt)("inlineCode",{parentName:"p"},"react-table")," column types to export and import data.\nFor now, it supports ",(0,o.kt)("inlineCode",{parentName:"p"},"csv"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"xls")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"xlsx")," files using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/exceljs/exceljs"},"exceljs"),"."),(0,o.kt)("h2",{id:"columns"},"Columns"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Concrete Table")," extends ",(0,o.kt)("inlineCode",{parentName:"p"},"react-table")," column types with a new property ",(0,o.kt)("inlineCode",{parentName:"p"},"meta"),". If you want to use the import/export feature,\nyou will need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"imex")," property in ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," of the column you want to export and/or import."),(0,o.kt)(l.K,{warning:!0,icon:(0,o.kt)(s.J,{icon:"exclam-outline",mdxType:"Icon"}),mdxType:"AlertPanel"},(0,o.kt)(p.xv,{markdown:!0,mdxType:"Text"},"Columns without `meta.imex` will be ignored during export or import.")),(0,o.kt)("h3",{id:"identifier-required"},"Identifier (required)"),(0,o.kt)("p",null,"Columns definition for an import should always contain ",(0,o.kt)("em",{parentName:"p"},"one")," column with the property ",(0,o.kt)("inlineCode",{parentName:"p"},"identifier")," set to true.\nIt will allow finding existing value in your original data and update it instead of creating new values."),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},";[\n  {\n    Header: 'ID',\n    accessor: 'id',\n    meta: {\n      imex: {\n        identifier: true,\n        type: 'string' as const,\n      },\n    },\n  },\n]\n")),(0,o.kt)(l.K,{icon:(0,o.kt)(s.J,{icon:"information",mdxType:"Icon"}),mdxType:"AlertPanel"},(0,o.kt)(p.xv,{markdown:!0,mdxType:"Text"},"Sometimes your data has a more complex way to defines uniqness. In this case, you can pass `findPrevValPredicate` to the hook to avoid data duplication")),(0,o.kt)("h3",{id:"type-required"},"Type (required)"),(0,o.kt)("p",null,"Parsing is done by our hooks so you need to specify what type of data you are expecting. Possible values are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"string[]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"number[]"))),(0,o.kt)("p",null,"If given data cannot be converted into ",(0,o.kt)("em",{parentName:"p"},"type")," specified in column it will be considered as an error."),(0,o.kt)("h5",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},";[\n  {\n    Header: 'Name',\n    accessor: 'name',\n    meta: {\n      imex: {\n        type: 'string' as const,\n      },\n    },\n  },\n  {\n    Header: 'Age',\n    accessor: 'age',\n    meta: {\n      imex: {\n        type: 'number' as const,\n      },\n    },\n  },\n]\n")),(0,o.kt)("h3",{id:"parse--format"},"Parse & Format"),(0,o.kt)("p",null,"Inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://final-form.org/"},"final-form"),", columns imex property accept ",(0,o.kt)("inlineCode",{parentName:"p"},"parse")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," properties that should be functions\nthat returns either ",(0,o.kt)("em",{parentName:"p"},"parsed")," or ",(0,o.kt)("em",{parentName:"p"},"formated")," value.\n",(0,o.kt)("inlineCode",{parentName:"p"},"parse")," parses your raw data to give it to exported values when ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," formats data given from import to store it in your database."),(0,o.kt)("h5",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},";[\n  {\n    Header: 'type de pi\xe8ce',\n    accessor: 'category',\n    meta: {\n      imex: {\n        parse: (value: string | number) =>\n          roomOptions.find((option) => option.value === value)?.label ?? value,\n        format: (label: string | number) =>\n          roomOptions.find(\n            (option) =>\n              trim(lowerCase(option.label)) === trim(lowerCase(`${label}`))\n          )?.value ?? label,\n\n        type: 'string' as const,\n      },\n    },\n  },\n]\n")),(0,o.kt)("h3",{id:"validation"},"Validation"),(0,o.kt)("p",null,"You can validate data given in you import with the ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," property. If you return a ",(0,o.kt)("em",{parentName:"p"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", user won't\nbe able to import this data."),(0,o.kt)(l.K,{icon:(0,o.kt)(s.J,{icon:"information",mdxType:"Icon"}),mdxType:"AlertPanel"},(0,o.kt)(p.xv,{markdown:!0,mdxType:"Text"},"Rows with error are ignored for import. They are just displayed to user as warnings but won't be imported")),(0,o.kt)("h5",{id:"example-3"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},";[\n  {\n    Header: 'type de pi\xe8ce',\n    accessor: 'category',\n    meta: {\n      imex: {\n        validate: (value: string) =>\n          Object.values(RoomCategories).includes(value as RoomCategories),\n        type: 'string' as const,\n      },\n    },\n  },\n]\n")),(0,o.kt)("h4",{id:"excel-data-validation"},"Excel data validation"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"dataValidation")," property to set excel specific validation defined ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/exceljs/exceljs#data-validations"},"by exceljs"),".\nIt will be applied every existing rows plus 50 rows. This can be overwritten by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"extraRows")," property manually to the ",(0,o.kt)("inlineCode",{parentName:"p"},"useExportTable")," hook."),(0,o.kt)("h5",{id:"example-4"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},";[\n  {\n    Header: 'type de pi\xe8ce',\n    accessor: 'category',\n    meta: {\n      imex: {\n        dataValidation: {\n          type: 'list',\n          allowBlank: false,\n          formulae: [`\"${roomOptions.map(({ label }) => label).join(',')}\"`],\n        },\n        validate: (value: string) =>\n          Object.values(RoomCategories).includes(value as RoomCategories),\n        type: 'string' as const,\n      },\n    },\n  },\n]\n")),(0,o.kt)("h3",{id:"excel-styling-properties"},"Excel Styling properties"),(0,o.kt)("h4",{id:"width"},"Width"),(0,o.kt)("p",null,"You can pass a width property to force excel to display your column with a specific width."),(0,o.kt)("h4",{id:"hidden"},"Hidden"),(0,o.kt)("p",null,"Sometimes you will want to hide a column (like the one you use as identifier), to make your table easier to read."),(0,o.kt)("h2",{id:"export"},"Export"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useExportTable")," hook takes ",(0,o.kt)("inlineCode",{parentName:"p"},"columns")," as mandatory argument for its call. All other argument can be passed either in\nthe hook call or in its function call.\nIt returns an array with first property is a function that will trigger the download of the exported file with data passed as params."),(0,o.kt)("h4",{id:"example-5"},"Example"),(0,o.kt)("h5",{id:"columns-1"},"Columns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = [\n  { name: 'Alexis', age: 26 },\n  { name: 'Benjamin', age: 10 },\n]\n")),(0,o.kt)("h5",{id:"columns-2"},"Columns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const columns = [\n  {\n    Header: 'Name',\n    accessor: 'name',\n    meta: {\n      imex: {\n        type: 'string' as const,\n      },\n    },\n  },\n  {\n    Header: 'Age',\n    accessor: 'age',\n    meta: {\n      imex: {\n        type: 'number' as const,\n      },\n    },\n  },\n]\n")),(0,o.kt)("h5",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const [downloadTableData] = useExportTable({\n  data,\n  columns,\n})\n\n//\n\ndownloadTableData('export')\n")),(0,o.kt)(I,{mdxType:"ExportComponent"}),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("p",null,"We tried to make import validation as clear as possible with a validation prompt that displays the table of modifications."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/habx/image/upload/v1616507243/tech/ui-table/imex.gif",alt:"Import gif"})),(0,o.kt)("h4",{id:"validation-1"},"Validation"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/habx/image/upload/v1620664728/tech/ui-table/imex_compare.png",alt:"Import validation"})),(0,o.kt)("p",null,"You can see 3 state of rows: ",(0,o.kt)("em",{parentName:"p"},"Insertions"),", ",(0,o.kt)("em",{parentName:"p"},"modifications")," and ",(0,o.kt)("em",{parentName:"p"},"errors"),".\nThe total of theses rows are displayed next to the submit button.\nThe number of impacted entity for a specific key is shown in the footer."),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can remove columns in your sheet file as long as they are not required or tagged as identifier"),(0,o.kt)("li",{parentName:"ul"},"If you pass an empty string, the hooks consider that you did not pass any value at all"),(0,o.kt)("li",{parentName:"ul"},"Any error in a cell of a row will prevent the import of the entire row even if other values are valid"),(0,o.kt)("li",{parentName:"ul"},"If the comparison result shows that the is no difference between current data and imported rows, they are ignored.")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"export const MyTableWithImport = () => {\n  const tableInstance = useTable({\n    data,\n    columns,\n  })\n  const upsertRow = () => new Promise((resolve) => setTimeout(resolve, 1000))\n\n  const importTable = useImportTable({\n    columns,\n    upsertRow: upsertRow,\n    getOriginalData: () => data,\n    confirmLightBoxTitle: 'Import',\n  })\n}\n")),(0,o.kt)("h4",{id:"with-drag--drop"},"With Drag & Drop"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"export const MyTableWithImport = () => {\n  const tableInstance = useTable({\n    data,\n    columns,\n  })\n  const upsertRow = () => new Promise((resolve) => setTimeout(resolve, 1000))\n  const dropzoneProps = {\n    columns: IMEX_COLUMNS,\n    upsertRow: upsertRow,\n    getOriginalData: () => FAKE_DATA,\n    confirmLightBoxTitle: 'Import',\n  }\n\n  return (\n    <ImportTableDropzone {...dropzoneProps}>\n      <Table instance={tableInstance} />\n    </ImportTableDropzone>\n  )\n}\n")))}j.isMDXComponent=!0}}]);