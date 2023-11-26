"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[2014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,sidebar_label:"Interface Overview"},o="Interface Overview",l={unversionedId:"using-tcadmin/interface-overview",id:"using-tcadmin/interface-overview",title:"Interface Overview",description:"Dates",source:"@site/docs/using-tcadmin/interface-overview.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/interface-overview",permalink:"/using-tcadmin/interface-overview",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/interface-overview.mdx",tags:[],version:"current",lastUpdatedAt:1701001265,formattedLastUpdatedAt:"Nov 26, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Interface Overview"},sidebar:"tutorialSidebar",previous:{title:"Using TCAdmin",permalink:"/category/using-tcadmin"},next:{title:"Two-Step Verification",permalink:"/using-tcadmin/two-step-verification"}},s={},c=[{value:"Dates",id:"dates",level:2},{value:"Hints",id:"hints",level:2},{value:"Grids",id:"grids",level:2},{value:"Widgets",id:"widgets",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-overview"},"Interface Overview"),(0,i.kt)("h2",{id:"dates"},"Dates"),(0,i.kt)("p",null,"All dates shown in the control panel are in the current user's local time. The time is configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"User Management")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Users")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Select a User")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"User's Details")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile Tab.")," The current user can modify his profile by clicking on My Profile under Session Information on the left."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dates",src:n(6652).Z,width:"223",height:"180"})),(0,i.kt)("h2",{id:"hints"},"Hints"),(0,i.kt)("p",null,"Most advanced settings have hints that explain how to use a specific feature or what value to enter for a field. To view it simply move the mouse over the control. The hint will close itself after a few seconds. You can hold your mouse over the hint to prevent it from closing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hint",src:n(7675).Z,width:"784",height:"281"})),(0,i.kt)("h2",{id:"grids"},"Grids"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"All changes are temporary unless you select ",(0,i.kt)("inlineCode",{parentName:"p"},"Grid Settings")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Save Settings.")," To reset settings to the default click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Grid Settings")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Reset Settings."))),(0,i.kt)("p",null,"Most grids can be personalized. You can sort rows by field value, ",(0,i.kt)("inlineCode",{parentName:"p"},"add/remove/resize/reorder")," columns, group by values and change the number of rows shown per page. These settings can be saved so next time you visit the page it will restore your personalization. Rows can be exported to Excel, Word and plain text formats."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To sort by field value simple click on the column header. Click again to reverse the order."),(0,i.kt)("li",{parentName:"ul"},"To add or remove columns select ",(0,i.kt)("inlineCode",{parentName:"li"},"Grid Settings")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Configure Columns.")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Check/unchecked")," the desired columns and click on Apply."),(0,i.kt)("li",{parentName:"ul"},"To resize a column, drag the column label's border from the left or right."),(0,i.kt)("li",{parentName:"ul"},"To reorder a column, drag by the column label to the left or right."),(0,i.kt)("li",{parentName:"ul"},"To group rows with similar values simply drag the column label to the space above it."),(0,i.kt)("li",{parentName:"ul"},"To change the number of rows per page select a new value next to Page size.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GroupedGrid",src:n(7559).Z,width:"1657",height:"283"})),(0,i.kt)("h2",{id:"widgets"},"Widgets"),(0,i.kt)("p",null,"Widgets can be configured in the home page by clicking on the icon on the top right of the page. Currently the following widgets are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Server Resources"),(0,i.kt)("li",{parentName:"ul"},"GameTracker.com Stats")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Widgets",src:n(895).Z,width:"938",height:"493"})))}u.isMDXComponent=!0},6652:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Dates-e57a129e2ffb6f2b8601ea7174e7619b.png"},7559:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/GroupedGrid-a8c0bba740598b1cf2b96b8dcd73b37b.png"},7675:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Hint-ad2b3cfd84df63d87b7f3c354baa40cd.png"},895:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Widgets-e5e86a6ea0b16300dfc366a33cd7c9be.png"}}]);