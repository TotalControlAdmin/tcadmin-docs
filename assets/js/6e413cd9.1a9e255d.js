"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[9259],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=i,d=m["".concat(o,".").concat(u)]||m[u]||g[u]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1,sidebar_label:"Configure Billing API"},l="Configure Billing API",s={unversionedId:"billing-api/intro",id:"billing-api/intro",title:"Configure Billing API",description:"To configure the billing API go to System > Settings > API Settings.",source:"@site/docs/billing-api/intro.mdx",sourceDirName:"billing-api",slug:"/billing-api/intro",permalink:"/billing-api/intro",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/billing-api/intro.mdx",tags:[],version:"current",lastUpdatedAt:1693210718,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Configure Billing API"},sidebar:"tutorialSidebar",previous:{title:"Billing API",permalink:"/category/billing-api"},next:{title:"Troubleshooting",permalink:"/billing-api/troubleshooting"}},o={},p=[{value:"General Settings",id:"general-settings",level:2},{value:"Game Hosting Settings (Administrators)",id:"game-hosting-settings-administrators",level:2},{value:"Game Hosting Settings (Resellers)",id:"game-hosting-settings-resellers",level:2}],c={toc:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-billing-api"},"Configure Billing API"),(0,i.kt)("p",null,"To configure the billing API go to ",(0,i.kt)("inlineCode",{parentName:"p"},"System")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"API Settings"),"."),(0,i.kt)("h2",{id:"general-settings"},"General Settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enabled:")," Enable or disable the TCAdmin API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Default Role:")," Select the default role for users when the role is not specified in the command parameters.")),(0,i.kt)("h2",{id:"game-hosting-settings-administrators"},"Game Hosting Settings (Administrators)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Server Selection:")," The method used to determine where the game and voice server will be installed.\nServer with less slots: The server with the least number of slots will be used.\nRound robin: The server with the longest time since the last game or voice server installation will be used.\nCPU load balancing: The server with the lowest average CPU usage will be used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Servers:")," Select the servers where the game and voice servers will be created. If you select ","[All Servers]"," new servers will be selected automatically.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Teamspeak Selection:")," The method used to determine where the Teamspeak voice server will be installed.\nServer with less slots: The Teamspeak server with the least number of slots will be used.\nRound robin: The Teamspeak server with the longest time since the last Teamspeak voice server installation will be used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Teamspeak Servers:")," Select the Teamspeak servers where the virtual servers will be created. If you select ","[All Teamspeak Servers]"," new Teamspeak servers will be selected automatically."))),(0,i.kt)("h2",{id:"game-hosting-settings-resellers"},"Game Hosting Settings (Resellers)"),(0,i.kt)("p",null,"Resellers must select the packages that will be used by the billing API for each service type."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Package for Game Services:")," The package used when creating a game service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Package for Voice Services:")," The package used when creating a voice service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Package for Teamspeak Services:")," The package used when creating a Teamspeak service.")))}g.isMDXComponent=!0}}]);