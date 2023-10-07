"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[3500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,v=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return r?a.createElement(v,s(s({ref:t},m),{},{components:r})):a.createElement(v,s({ref:t},m))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:4,sidebar_label:"Live Stats"},s="Live Stats",l={unversionedId:"customizations/live-stats",id:"customizations/live-stats",title:"Live Stats",description:"Game Service Live Stats",source:"@site/docs/customizations/live-stats.mdx",sourceDirName:"customizations",slug:"/customizations/live-stats",permalink:"/customizations/live-stats",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/live-stats.mdx",tags:[],version:"current",lastUpdatedAt:1696666871,formattedLastUpdatedAt:"Oct 7, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Live Stats"},sidebar:"tutorialSidebar",previous:{title:"Setting up ASPNET IIS Classic",permalink:"/customizations/web-server-configurations/aspnet-iis-classic"},next:{title:"Billing API",permalink:"/category/billing-api"}},o={},c=[{value:"Game Service Live Stats",id:"game-service-live-stats",level:2},{value:"Examples",id:"examples",level:2},{value:"Get a list of services that are currently running:",id:"get-a-list-of-services-that-are-currently-running",level:3},{value:"Get the total number of players connected on each server:",id:"get-the-total-number-of-players-connected-on-each-server",level:3},{value:"Get the total RAM assigned to Minecraft/Craftbukkit services per server. The results are ordered from lowest to highest.",id:"get-the-total-ram-assigned-to-minecraftcraftbukkit-services-per-server-the-results-are-ordered-from-lowest-to-highest",level:3}],m={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"live-stats"},"Live Stats"),(0,n.kt)("h2",{id:"game-service-live-stats"},"Game Service Live Stats"),(0,n.kt)("p",null,"Every time the game monitors query a service, the statistics are saved to the table named ",(0,n.kt)("inlineCode",{parentName:"p"},"tc_game_service_live_stats"),". This table can be used to create a list of services on your website along with their current status."),(0,n.kt)("p",null,"The following information is currently available in the ",(0,n.kt)("inlineCode",{parentName:"p"},"tc_game_service_live_stats")," table:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Service Id"),": The unique identifier for the service."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Online (1/0)"),": Indicates whether the service is online (1) or offline (0)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Process ID"),": The ID of the process associated with the service."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bandwidth (bytes)"),": The amount of bandwidth used in bytes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CPU (%)"),": The CPU usage percentage."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Memory (bytes)"),": The amount of memory used in bytes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Memory Limit (bytes)"),": The memory limit assigned to Minecraft and Craftbukkit services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Game"),": The name of the game associated with the service."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Game type"),": The type of game."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Map"),": The current map being played."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name"),": The name of the service."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HTML name"),": The HTML-formatted name of the service."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Max players"),": The maximum number of players allowed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Number of current players"),": The current number of players."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Number of current spectators"),": The current number of spectators."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Player details in XML format"),": Player details presented in XML format."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rules in XML format"),": Game rules presented in XML format."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Query time (UTC/GMT)"),": The time the query was made, in UTC/GMT.")),(0,n.kt)("p",null,"This table can be a valuable resource for displaying real-time service status and game information on your website."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"get-a-list-of-services-that-are-currently-running"},"Get a list of services that are currently running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"SELECT a.ip_address, a.game_port, b.*\nFROM tc_game_services a, tc_game_service_live_stats b\nWHERE online = 1 AND a.service_id = b.service_id;\n")),(0,n.kt)("h3",{id:"get-the-total-number-of-players-connected-on-each-server"},"Get the total number of players connected on each server:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"SELECT a.display_name, sum(b.players) as players\nFROM tc_servers a, tc_game_service_live_stats b, tc_services c\nWHERE c.server_id=a.server_id AND b.service_id=c.service_id AND b.online=1 \nGROUP BY a.server_id;\n")),(0,n.kt)("h3",{id:"get-the-total-ram-assigned-to-minecraftcraftbukkit-services-per-server-the-results-are-ordered-from-lowest-to-highest"},"Get the total RAM assigned to Minecraft/Craftbukkit services per server. The results are ordered from lowest to highest."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"SELECT a.server_id ,a.display_name, ROUND(SUM(b.memory_limit)/1024/1024, 0) AS memory_limit_mb\nFROM tc_servers a, tc_game_service_live_stats b, tc_services c\nWHERE c.server_id=a.server_id AND b.service_id=c.service_id\nGROUP BY a.server_id\nORDER BY SUM(b.memory_limit) ASC\n")))}p.isMDXComponent=!0}}]);