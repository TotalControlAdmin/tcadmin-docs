"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[8321],{6396:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=r(5893),o=r(1151);const i={sidebar_position:8,sidebar_label:"Kill all processes running from the game server's root folder"},n="Kill all processes running from the game server's root folder",l={id:"customizations/scripts/general-scripts/kill-all-processes-running-from-the-game-servers-root-folder",title:"Kill all processes running from the game server's root folder",description:"This Windows batch script kills all running processes located in the game server's root directory and sub directories.",source:"@site/docs/customizations/scripts/general-scripts/kill-all-processes-running-from-the-game-servers-root-folder.mdx",sourceDirName:"customizations/scripts/general-scripts",slug:"/customizations/scripts/general-scripts/kill-all-processes-running-from-the-game-servers-root-folder",permalink:"/customizations/scripts/general-scripts/kill-all-processes-running-from-the-game-servers-root-folder",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/general-scripts/kill-all-processes-running-from-the-game-servers-root-folder.mdx",tags:[],version:"current",lastUpdatedAt:1704877678,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Kill all processes running from the game server's root folder"},sidebar:"tutorialSidebar",previous:{title:"Install mod from WHMCS",permalink:"/customizations/scripts/general-scripts/install-mod-from-whmcs"},next:{title:"Limit Service's Disk Space",permalink:"/customizations/scripts/general-scripts/limits-services-disk-space"}},c={},a=[];function d(e){const s={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"kill-all-processes-running-from-the-game-servers-root-folder",children:"Kill all processes running from the game server's root folder"}),"\n",(0,t.jsx)(s.p,{children:"This Windows batch script kills all running processes located in the game server's root directory and sub directories."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"set exelocation=%ThisService_RootDirectory:\\=\\\\%\nwmic path win32_process where \"ExecutablePath like '%%%exelocation%%%'\" call terminate\n"})}),"\n",(0,t.jsx)(s.p,{children:"This Windows batch script kills a specific process located in the game server's root directory."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"set executable=%ThisService_RootDirectory%CustomExe.exe\nwmic path win32_process where \"ExecutablePath like '%executable:\\=\\\\%'\" call terminate\n``\n"})})]})}function p(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>l,a:()=>n});var t=r(7294);const o={},i=t.createContext(o);function n(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);