"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[8532],{4238:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var r=t(4848),i=t(8453);const n={sidebar_position:4,sidebar_label:"Live Stats"},a="Live Stats",l={id:"customizations/live-stats",title:"Live Stats",description:"Game Service Live Stats",source:"@site/docs/customizations/live-stats.mdx",sourceDirName:"customizations",slug:"/customizations/live-stats",permalink:"/customizations/live-stats",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/live-stats.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Live Stats"},sidebar:"tutorialSidebar",previous:{title:"Setting up ASPNET IIS Classic",permalink:"/customizations/web-server-configurations/aspnet-iis-classic"},next:{title:"Billing API",permalink:"/category/billing-api"}},c={},o=[{value:"Game Service Live Stats",id:"game-service-live-stats",level:2},{value:"Examples",id:"examples",level:2},{value:"Get a list of services that are currently running:",id:"get-a-list-of-services-that-are-currently-running",level:3},{value:"Get the total number of players connected on each server:",id:"get-the-total-number-of-players-connected-on-each-server",level:3},{value:"Get the total RAM assigned to Minecraft/Craftbukkit services per server. The results are ordered from lowest to highest.",id:"get-the-total-ram-assigned-to-minecraftcraftbukkit-services-per-server-the-results-are-ordered-from-lowest-to-highest",level:3}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"live-stats",children:"Live Stats"})}),"\n",(0,r.jsx)(s.h2,{id:"game-service-live-stats",children:"Game Service Live Stats"}),"\n",(0,r.jsxs)(s.p,{children:["Every time the game monitors query a service, the statistics are saved to the table named ",(0,r.jsx)(s.code,{children:"tc_game_service_live_stats"}),". This table can be used to create a list of services on your website along with their current status."]}),"\n",(0,r.jsxs)(s.p,{children:["The following information is currently available in the ",(0,r.jsx)(s.code,{children:"tc_game_service_live_stats"})," table:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Service Id"}),": The unique identifier for the service."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Online (1/0)"}),": Indicates whether the service is online (1) or offline (0)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Process ID"}),": The ID of the process associated with the service."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Bandwidth (bytes)"}),": The amount of bandwidth used in bytes."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"CPU (%)"}),": The CPU usage percentage."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Memory (bytes)"}),": The amount of memory used in bytes."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Memory Limit (bytes)"}),": The memory limit assigned to Minecraft and Craftbukkit services."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Game"}),": The name of the game associated with the service."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Game type"}),": The type of game."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Map"}),": The current map being played."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Name"}),": The name of the service."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"HTML name"}),": The HTML-formatted name of the service."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Max players"}),": The maximum number of players allowed."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Number of current players"}),": The current number of players."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Number of current spectators"}),": The current number of spectators."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Player details in XML format"}),": Player details presented in XML format."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Rules in XML format"}),": Game rules presented in XML format."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Query time (UTC/GMT)"}),": The time the query was made, in UTC/GMT."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"This table can be a valuable resource for displaying real-time service status and game information on your website."}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.h3,{id:"get-a-list-of-services-that-are-currently-running",children:"Get a list of services that are currently running:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",metastring:"showLineNumbers",children:"SELECT a.ip_address, a.game_port, b.*\nFROM tc_game_services a, tc_game_service_live_stats b\nWHERE online = 1 AND a.service_id = b.service_id;\n"})}),"\n",(0,r.jsx)(s.h3,{id:"get-the-total-number-of-players-connected-on-each-server",children:"Get the total number of players connected on each server:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",metastring:"showLineNumbers",children:"SELECT a.display_name, sum(b.players) as players\nFROM tc_servers a, tc_game_service_live_stats b, tc_services c\nWHERE c.server_id=a.server_id AND b.service_id=c.service_id AND b.online=1 \nGROUP BY a.server_id;\n"})}),"\n",(0,r.jsx)(s.h3,{id:"get-the-total-ram-assigned-to-minecraftcraftbukkit-services-per-server-the-results-are-ordered-from-lowest-to-highest",children:"Get the total RAM assigned to Minecraft/Craftbukkit services per server. The results are ordered from lowest to highest."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",metastring:"showLineNumbers",children:"SELECT a.server_id ,a.display_name, ROUND(SUM(b.memory_limit)/1024/1024, 0) AS memory_limit_mb\nFROM tc_servers a, tc_game_service_live_stats b, tc_services c\nWHERE c.server_id=a.server_id AND b.service_id=c.service_id\nGROUP BY a.server_id\nORDER BY SUM(b.memory_limit) ASC\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var r=t(6540);const i={},n=r.createContext(i);function a(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);