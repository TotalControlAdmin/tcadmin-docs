"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[9407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_label:"IP & Ports",sidebar_position:2},a="IP & Ports",s={unversionedId:"using-tcadmin/game-voice-configuration/ip-ports",id:"using-tcadmin/game-voice-configuration/ip-ports",title:"IP & Ports",description:"- Only use the server's primary IP - Enable if the game server should only use the server's primary IP. Some game servers only work correctly with the primary IP.",source:"@site/docs/using-tcadmin/game-voice-configuration/ip-ports.mdx",sourceDirName:"using-tcadmin/game-voice-configuration",slug:"/using-tcadmin/game-voice-configuration/ip-ports",permalink:"/using-tcadmin/game-voice-configuration/ip-ports",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/game-voice-configuration/ip-ports.mdx",tags:[],version:"current",lastUpdatedAt:1686260731,formattedLastUpdatedAt:"Jun 8, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"IP & Ports",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Game Information",permalink:"/using-tcadmin/game-voice-configuration/game-information"},next:{title:"Files & Directories",permalink:"/using-tcadmin/game-voice-configuration/files-directories"}},l={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ip--ports"},"IP & Ports"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Only use the server's primary IP")," - Enable if the game server should only use the server's primary IP. Some game servers only work correctly with the primary IP."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Only use the default ports")," - Enable if the game server should only use the default ports. Some game servers have no way of changing the default ports."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Game Port")," - The default game port used by the game server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Query Port")," - The default query port used by the game server. Use the query port expression below to specify a formula to get the query port."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RCon Port")," - The default rcon port used by the game server. Use the rcon port expression below to specify a formula to get the rcon port.")),(0,o.kt)("admonition",{title:"examples",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"game port + 10"),(0,o.kt)("p",{parentName:"admonition"},"Rcon port + 10")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Custom Port 1 - 5")," - Use the custom ports for any additional ports you might need."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Port Increment")," - The value added to the default ports if they are not available."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Query Port Expression")," - An expression used to generate the query port."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RCon Port Expression")," - An expression used to generate the rcon port.")),(0,o.kt)("admonition",{title:"examples",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"$","[Service.QueryPort]"," + 10"),(0,o.kt)("p",{parentName:"admonition"},"$","[Service.RconPort]"," + 10")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Custom Port 1 - 5 Expression")," - Use the custom port expressions for any additional ports that require a special formula.")))}m.isMDXComponent=!0}}]);