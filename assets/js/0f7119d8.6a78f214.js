"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[3619],{6052:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=o(5893),t=o(1151);const r={sidebar_position:2,sidebar_label:"Debug Mode"},s="Debug Mode",d={id:"misc/debug-mode",title:"Debug Mode",description:"Monitor Debugging",source:"@site/docs/misc/debug-mode.mdx",sourceDirName:"misc",slug:"/misc/debug-mode",permalink:"/misc/debug-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/misc/debug-mode.mdx",tags:[],version:"current",lastUpdatedAt:1704877678,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Debug Mode"},sidebar:"tutorialSidebar",previous:{title:"Compression",permalink:"/misc/compression"},next:{title:"Limit Service CPU and Memory Usage",permalink:"/misc/limit-service-cpu-andmemory-usage"}},c={},a=[{value:"Monitor Debugging",id:"monitor-debugging",level:2},{value:"Website Debugging",id:"website-debugging",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"debug-mode",children:"Debug Mode"}),"\n",(0,i.jsx)(n.h2,{id:"monitor-debugging",children:"Monitor Debugging"}),"\n",(0,i.jsxs)(n.p,{children:["To configure the monitor in debug mode edit ",(0,i.jsx)(n.code,{children:"C:\\Program Files\\TCAdmin2\\Monitor\\TCAdminMonitor.exe.config"})," or ",(0,i.jsx)(n.code,{children:"/home/tcadmin/Monitor/TCAdminMonitor.exe.config"}),". Change this line:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'<add key="TCAdmin.Debug" value="False" />\n'})}),"\n",(0,i.jsx)(n.p,{children:"To"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'<add key="TCAdmin.Debug" value="True" />\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Stop the monitor service and start it in ",(0,i.jsx)(n.a,{href:"/getting-started/server-components#startstop-in-console-mode",children:"console mode"}),". When the monitor starts up or a task is executed you should see debug messages."]}),"\n",(0,i.jsx)(n.h2,{id:"website-debugging",children:"Website Debugging"}),"\n",(0,i.jsxs)(n.p,{children:["To configure the website in debug mode edit ",(0,i.jsx)(n.code,{children:"ControlPanel\\Windows.config"})," or ",(0,i.jsx)(n.code,{children:"ControlPanel\\Linux.config"})," depending on your operating system. Change this line:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'<compilation debug="false" strict="true" explicit="true">\n'})}),"\n",(0,i.jsx)(n.p,{children:"To:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'<compilation debug="true" strict="true" explicit="true">\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then restart the monitor. When an error occurs you should see the stack trace so we can help you troubleshoot. Also additional information is shown in the footer."})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>s});var i=o(7294);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);