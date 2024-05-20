"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[6598],{6085:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>o,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=a(4848),t=a(8453);const r={sidebar_position:11,sidebar_label:"Create Game Voice & Teamspeak Services"},n="Create Game, Voice & Teamspeak Services",c={id:"using-tcadmin/create-game-voice-ts-services",title:"Create Game, Voice & Teamspeak Services",description:"Requirements",source:"@site/docs/using-tcadmin/create-game-voice-ts-services.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/create-game-voice-ts-services",permalink:"/using-tcadmin/create-game-voice-ts-services",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/create-game-voice-ts-services.mdx",tags:[],version:"current",lastUpdatedAt:1716196388e3,sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Create Game Voice & Teamspeak Services"},sidebar:"tutorialSidebar",previous:{title:"Teamspeak Server Configuration",permalink:"/using-tcadmin/teamspeak-server-configuration"},next:{title:"Manage Game & Voice Services",permalink:"/using-tcadmin/manage-game-voice-services/"}},o={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Game/Voice Services",id:"gamevoice-services",level:3},{value:"Teamspeak Virtual Servers",id:"teamspeak-virtual-servers",level:3},{value:"Create a Game/Voice/Teamspeak Service",id:"create-a-gamevoiceteamspeak-service",level:2},{value:"Scheduled Creation Time",id:"scheduled-creation-time",level:2},{value:"Automatic Deletion",id:"automatic-deletion",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"create-game-voice--teamspeak-services",children:"Create Game, Voice & Teamspeak Services"}),"\n",(0,s.jsx)(i.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(i.h3,{id:"gamevoice-services",children:"Game/Voice Services"}),"\n",(0,s.jsxs)(i.p,{children:["The game and voice server files should be placed in the ",(0,s.jsx)(i.code,{children:"Game Files Path"})," specified in the server settings ",(0,s.jsx)(i.code,{children:"(C:\\TCAFiles\\Games and /home/tcadmin/tcafiles/games by default)"}),". Optionally the server can be configured to download the files from another server."]}),"\n",(0,s.jsxs)(i.p,{children:["If the game's server files can be obtained from SteamCMD, you can use the ",(0,s.jsx)(i.a,{href:"/using-tcadmin/game-tools#steam-game-downloader",children:"Steam Game Downloader"})," feature to install the files."]}),"\n",(0,s.jsxs)(i.p,{children:["Each game has a specific subfolder where the files should be placed. To find out the name of the subfolder go to ",(0,s.jsx)(i.code,{children:"System"})," > ",(0,s.jsx)(i.code,{children:"General Settings"})," > ",(0,s.jsx)(i.code,{children:"Supported Games"})," > ",(0,s.jsx)(i.code,{children:"Select a Game"})," > ",(0,s.jsx)(i.code,{children:"Files and Directories"})," > ",(0,s.jsx)(i.code,{children:"Files Folder Name"}),". For your convenience, each Steam game has a batch/shell script that you can execute to download the game files. If you imported a Steam game and you don't see this file restart the monitor and it will be created."]}),"\n",(0,s.jsx)(i.admonition,{title:"example",type:"info",children:(0,s.jsxs)(i.p,{children:["If the value of ",(0,s.jsx)(i.code,{children:"Files Folder Name"})," is bf2 the files should be placed in ",(0,s.jsx)(i.code,{children:"C:\\TCAFiles\\Games\\bf2"})," or ",(0,s.jsx)(i.code,{children:"/home/tcadmin/tcafiles/games/bf2"}),"\nThe files can be left uncompressed in the subfolder or compressed in one of the supported formats. If your server downloads from another server the use of compressed files is recommended. The compressed files should only contain the contents of the subfolder, not the subfolder itself. Do not include the special TCAdmin folders in the compressed file ",(0,s.jsx)(i.code,{children:"(TCA.Mods, TCA.Updates, TCA.Maps)"}),"."]})}),"\n",(0,s.jsx)(i.admonition,{title:"example",type:"info",children:(0,s.jsxs)(i.p,{children:["You can place the files for Counterstrike in a folder ",(0,s.jsx)(i.code,{children:"C:\\TCAFiles\\Games\\cs"})," or compressed in a zip file ",(0,s.jsx)(i.code,{children:"C:\\TCAFiles\\Games\\cs.zip."})," If both exist, the compressed file will be used."]})}),"\n",(0,s.jsx)(i.h3,{id:"teamspeak-virtual-servers",children:"Teamspeak Virtual Servers"}),"\n",(0,s.jsx)(i.p,{children:"Before creating Teamspeak virtual server you must configure at least one Teamspeak server."}),"\n",(0,s.jsx)(i.h2,{id:"create-a-gamevoiceteamspeak-service",children:"Create a Game/Voice/Teamspeak Service"}),"\n",(0,s.jsx)(i.p,{children:"To create a service follow these steps:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Go to Game & Voice Management > Create a Game or Voice Service."}),"\n",(0,s.jsx)(i.li,{children:"In the Service Owner tab you can select user that will own the service or create a new one."}),"\n",(0,s.jsxs)(i.li,{children:["If you want to create a game service click on the ",(0,s.jsx)(i.code,{children:"Create a Game Service"})," tab. Select the server, game and enter the required information."]}),"\n",(0,s.jsxs)(i.li,{children:["If you want to create a voice or Teamspeak service click on the ",(0,s.jsx)(i.code,{children:"Create a Voice Service"})," tab. Select if you want to create a Teamspeak service or other voice server. Select the server/Teamspeak server depending on the previous selection and enter the required information."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"scheduled-creation-time",children:"Scheduled Creation Time"}),"\n",(0,s.jsx)(i.p,{children:"In the Advanced tab you can specify if the service(s) will be created now or at a specific date and time."}),"\n",(0,s.jsx)(i.h2,{id:"automatic-deletion",children:"Automatic Deletion"}),"\n",(0,s.jsx)(i.p,{children:"In the Advanced tab you can specify if the service(s) and user will be deleted at a specific date and time."})]})}function m(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,i,a)=>{a.d(i,{R:()=>n,x:()=>c});var s=a(6540);const t={},r=s.createContext(t);function n(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);