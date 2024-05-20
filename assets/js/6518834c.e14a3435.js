"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[8675],{9846:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=s(4848),i=s(8453);const r={sidebar_position:17,sidebar_label:"Game Tools"},n="Game Tools",o={id:"using-tcadmin/game-tools",title:"Game Tools",description:"All of these features are available from within TCAdmin by going to System (on the left-hand navigation) > Settings > Game & Voice Hosting > Game Tools.",source:"@site/docs/using-tcadmin/game-tools.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/game-tools",permalink:"/using-tcadmin/game-tools",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/game-tools.mdx",tags:[],version:"current",lastUpdatedAt:1716196388e3,sidebarPosition:17,frontMatter:{sidebar_position:17,sidebar_label:"Game Tools"},sidebar:"tutorialSidebar",previous:{title:"Manage Teamspeak Virtual Servers",permalink:"/using-tcadmin/manage-ts-virtual-servers"},next:{title:"Service Browser",permalink:"/using-tcadmin/service-browser"}},l={},d=[{value:"Batch Update",id:"batch-update",level:2},{value:"Create Steam Update File",id:"create-steam-update-file",level:2},{value:"Steam Game Downloader",id:"steam-game-downloader",level:2},{value:"Stop/Start/Restart Services",id:"stopstartrestart-services",level:2},{value:"Verify/Repair Game Accounts",id:"verifyrepair-game-accounts",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"game-tools",children:"Game Tools"}),"\n",(0,a.jsxs)(t.p,{children:["All of these features are available from within TCAdmin by going to ",(0,a.jsx)(t.code,{children:"System"})," (on the left-hand navigation) > ",(0,a.jsx)(t.code,{children:"Settings"})," > ",(0,a.jsx)(t.code,{children:"Game & Voice Hosting"})," > ",(0,a.jsx)(t.code,{children:"Game Tools"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"batch-update",children:"Batch Update"}),"\n",(0,a.jsx)(t.p,{children:"This tool applies a game update to all the services on the specified servers."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Game"})," - Select the game that has the update that you want to apply."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Update to Install"})," - Select the update that you want to install."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Servers"})," - Select the servers where the update will be installed. Use ctrl + click to select more than one server."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Current Update"})," - Select the updates that the service must currently have installed. If the service does not have one of the selected updates it will be skipped. Use ctrl + click to select more than one server."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Create One Task Per Server"})," - Enable this option if you want to create separate scheduled tasks for each server. If all your servers download files from the same file server it is recommended to leave this option unchecked. It can use up all the file server's bandwidth if you have lots of servers."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"create-steam-update-file",children:"Create Steam Update File"}),"\n",(0,a.jsxs)(t.p,{children:["This tool runs the steam update on your base game files and creates a zip or tar with the new/updated files. After the file is created it adds the update to the game's settings. Use the ",(0,a.jsx)(t.a,{href:"/using-tcadmin/game-tools#batch-update",children:"Batch Update tool"})," to apply it on all services or allow your clients to install it themselves. hldsupdatetool and steamcmd are supported."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"If the base game files are already updated TCAdmin will create an empty or incomplete zip file."})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Game"})," - Select the game. Only games that have Steam enabled are shown in the list. If the game is configured to use steamcmd it will ask for the Steam user, password and Steam Guard code."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Server"})," - Select the server where the steam update will be executed. The base game files will be updated."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Steam User"})," - The account used to log in to Steam."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Steam Password"})," - The password used to log in to Steam."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Steam Guard Code"})," - The steam guard code (if required). If you have Steam Guard enabled, click on [ Request Code ] and check your e-mail for your access code. You only need to do this once per server."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"steam-game-downloader",children:"Steam Game Downloader"}),"\n",(0,a.jsx)(t.p,{children:"This tool is similar to the Create Steam Update File tool. It downloads or updates a game from Steam but it will not create an update file."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Game"})," - Select the game. Only games that have Steam enabled are shown in the list. If the game is configured to use steamcmd it will ask for the Steam user, password and Steam Guard code."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Server"})," - Select the server where the steam update will be executed. The base game files will be updated."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Steam User"})," - The account used to log in to Steam."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Steam Password"})," - The password used to log in to Steam."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Steam Guard Code"})," - The steam guard code (if required). If you have Steam Guard enabled, click on [ Request Code ] and check your e-mail for your access code. You only need to do this once per server."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"stopstartrestart-services",children:"Stop/Start/Restart Services"}),"\n",(0,a.jsx)(t.p,{children:"This tool stops/stars/restarts the specified services. You can specify the games and servers to include."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Service Action"})," - Select the action to take (Start/Stop/Restart)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Only if Empty"})," - Enable this option if you want to apply the action only if the game server is empty."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Servers"})," - Select the servers where the action will be executed."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Games"})," - Select the games to apply the action to."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Create One Task Per Server"})," - Enable if you want to create separate tasks for each selected server. Separate tasks can run at the same time on different servers. If you don't check this option each server is processed one after the other."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"verifyrepair-game-accounts",children:"Verify/Repair Game Accounts"}),"\n",(0,a.jsx)(t.p,{children:"This tool creates missing accounts that run the services and repairs file system permissions. This can be useful if you have to reload the operating system and you need to reset the permissions on all services. This tool is executed on all services in the selected server. To run the repair tool for an individual service run the command from the service's Actions tab."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Server"})," - Select the server that will be repaired."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Update Run As User"})," - Enable this option if you want to update user that runs the service according to the game's current run as settings."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>o});var a=s(6540);const i={},r=a.createContext(i);function n(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);