"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[8827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,v=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(v,s(s({ref:t},m),{},{components:r})):n.createElement(v,s({ref:t},m))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7870:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:16,sidebar_label:"Manage Teamspeak Virtual Servers"},s="Manage Teamspeak Virtual Servers",o={unversionedId:"using-tcadmin/manage-ts-virtual-servers",id:"using-tcadmin/manage-ts-virtual-servers",title:"Manage Teamspeak Virtual Servers",description:"Service Actions",source:"@site/docs/using-tcadmin/manage-ts-virtual-servers.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/manage-ts-virtual-servers",permalink:"/using-tcadmin/manage-ts-virtual-servers",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/manage-ts-virtual-servers.mdx",tags:[],version:"current",lastUpdatedAt:1686840661,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:16,frontMatter:{sidebar_position:16,sidebar_label:"Manage Teamspeak Virtual Servers"},sidebar:"tutorialSidebar",previous:{title:"Google Drive",permalink:"/using-tcadmin/manage-game-voice-services/google-drive"},next:{title:"Game Tools",permalink:"/using-tcadmin/game-tools"}},l={},c=[{value:"Service Actions",id:"service-actions",level:2},{value:"Teamspeak Browser",id:"teamspeak-browser",level:2}],m={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manage-teamspeak-virtual-servers"},"Manage Teamspeak Virtual Servers"),(0,a.kt)("h2",{id:"service-actions"},"Service Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Send Email"),' - Send the "New Service" email to the client.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Suspend")," - Stop and suspend the service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Change Slots")," - Change the number of slots assigned to the service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Change Owner")," - Assign the service to a different user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Set Billing Info")," - Set the billing information used to manage the service with the billing api."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Delete")," - Delete the service from the Teamspeak server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Detach")," - This option will remove the service information from the database. The virtual server will not be deleted. Only use this option if the Teamspeak server is permanently offline or if the virtual server was deleted manually.")),(0,a.kt)("h2",{id:"teamspeak-browser"},"Teamspeak Browser"),(0,a.kt)("p",null,"Use the Teamspeak browser to manage the selected virtual server."))}p.isMDXComponent=!0}}]);