"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[6425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_label:"General Settings",sidebar_position:4},o="General Settings",s={unversionedId:"using-tcadmin/game-voice-configuration/general-settings",id:"using-tcadmin/game-voice-configuration/general-settings",title:"General Settings",description:"- Always start on CPU 0 - Enable if you want the game server to be started using CPU 0. The game server is set to use all CPUs after a few seconds. This can fix a problem with CPU affinity on Halflife games.",source:"@site/docs/using-tcadmin/game-voice-configuration/general-settings.mdx",sourceDirName:"using-tcadmin/game-voice-configuration",slug:"/using-tcadmin/game-voice-configuration/general-settings",permalink:"/using-tcadmin/game-voice-configuration/general-settings",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/game-voice-configuration/general-settings.mdx",tags:[],version:"current",lastUpdatedAt:1696666871,formattedLastUpdatedAt:"Oct 7, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"General Settings",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Files & Directories",permalink:"/using-tcadmin/game-voice-configuration/files-directories"},next:{title:"Commandlines",permalink:"/using-tcadmin/game-voice-configuration/commandlines"}},l={},c=[],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"general-settings"},"General Settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Always start on CPU 0")," - Enable if you want the game server to be started using CPU 0. The game server is set to use all CPUs after a few seconds. This can fix a problem with CPU affinity on Halflife games."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Enable interact with desktop")," - Enable if you want to be able to view the game server's console in remote desktop. You must be logged in to the server's desktop console."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Enable the configuration files icon")," - Enable if you want the user to be able to view a list of the game server's configuration files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Enable the log viewer")," - Enable if you want the user to be able to view a list of the game server's log files and download or view them from the server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Log Extensions")," - Enter the extensions of the game server's log files. You can specify more than one extension by separating with ",(0,i.kt)("inlineCode",{parentName:"li"},";"),". For example ",(0,i.kt)("inlineCode",{parentName:"li"},".log;``.txt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Branded Text")," - Enter a regular expression used to check if the hostname has the specified branding. If no regular expression is specified a text search will be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Add a space between brand and hostname")," - Enable if a space should be added between the game server's hostname and brand."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Place branded text at the end")," - Enable if the brand should be placed at the end of the hostname."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Brand Regular Exp")," - Enter a regular expression used to check if the hostname has the specified branding. If no regular expression is specified a text search will be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Regular expression is case insensitive")," - Enable if you want the regular expression to be case insensitive."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stop Delay")," - The number of seconds TCAdmin will wait after stopping a game server. Sometimes the server needs time to release the port and resources. 2 seconds or more is recommended."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scheduled Tasks Limit")," - Specify the number or scheduled tasks that are allowed. Set to 0 to have no limit. Enable task types in the Feature Permissions tab.")))}u.isMDXComponent=!0}}]);