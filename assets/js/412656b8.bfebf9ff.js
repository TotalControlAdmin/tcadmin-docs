"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[2821],{2835:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=s(4848),r=s(8453);const o={sidebar_position:7,sidebar_label:"Recommended Registry Changes"},i="Recommended Registry Changes",a={id:"misc/recommended-registry-changes",title:"Recommended Registry Changes",description:"These registry changes adjust the memory available for desktop heaps created by non-interactive services. This resolves start errors that may happen on some servers a few days after a reboot.",source:"@site/docs/misc/recommended-registry-changes.mdx",sourceDirName:"misc",slug:"/misc/recommended-registry-changes",permalink:"/misc/recommended-registry-changes",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/misc/recommended-registry-changes.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Recommended Registry Changes"},sidebar:"tutorialSidebar",previous:{title:"User Assigned Servers",permalink:"/misc/user-assigned-servers"},next:{title:"Database",permalink:"/category/database"}},d={},c=[{value:"Windows 2008/2012/2016/2019/2022",id:"windows-20082012201620192022",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"recommended-registry-changes",children:"Recommended Registry Changes"})}),"\n",(0,n.jsx)(t.p,{children:"These registry changes adjust the memory available for desktop heaps created by non-interactive services. This resolves start errors that may happen on some servers a few days after a reboot."}),"\n",(0,n.jsx)(t.h2,{id:"windows-20082012201620192022",children:"Windows 2008/2012/2016/2019/2022"}),"\n",(0,n.jsx)(t.p,{children:"Open the Registry (regedit.exe) and go to:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management\n"})}),"\n",(0,n.jsx)(t.p,{children:"And adjust two keys:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"SessionPoolSize (this is 4 by default, put it to be 10 - remember, 10 as hexadecimal)\nSessionViewSize (this is 30 by default, put it to 80 - again, hexadecimal)\n"})}),"\n",(0,n.jsx)(t.p,{children:"Go to:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\SubSystems\n"})}),"\n",(0,n.jsx)(t.p,{children:"Double-click on the Windows key. What is important (and the only thing that gets changed for that matter) is"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"SharedSection=1024,20480,2048\n"})}),"\n",(0,n.jsx)(t.p,{children:"Close the registry and reboot the server for changes to take affect."})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(6540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);