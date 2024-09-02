"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[6399],{9464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(4848),a=n(8453);const r={sidebar_position:1,sidebar_label:"Convert SQLite Database to MySQL"},s="Convert SQLite Database to MySQL",i={id:"database/convert-sqlite-to-mysql",title:"Convert SQLite Database to MySQL",description:"Convert your Database",source:"@site/docs/database/convert-sqlite-to-mysql.mdx",sourceDirName:"database",slug:"/database/convert-sqlite-to-mysql",permalink:"/database/convert-sqlite-to-mysql",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/database/convert-sqlite-to-mysql.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Convert SQLite Database to MySQL"},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/category/database"},next:{title:"MySQL Replication",permalink:"/database/mysql-replication"}},c={},d=[{value:"Convert your Database",id:"convert-your-database",level:2},{value:"Configure Remote Servers",id:"configure-remote-servers",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"convert-sqlite-database-to-mysql",children:"Convert SQLite Database to MySQL"})}),"\n",(0,o.jsx)(t.h2,{id:"convert-your-database",children:"Convert your Database"}),"\n",(0,o.jsxs)(t.p,{children:["You can convert your SQLite database to MySQL using the tool available at ",(0,o.jsx)(t.code,{children:"General Settings"})," > ",(0,o.jsx)(t.code,{children:"Tools"}),"."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Install MySQL on your master server."}),"\n",(0,o.jsx)(t.li,{children:"Create an empty MySQL database and user."}),"\n",(0,o.jsxs)(t.li,{children:["Go to ",(0,o.jsx)(t.code,{children:"General Settings"})," > ",(0,o.jsx)(t.code,{children:"Tools."})," Select ",(0,o.jsx)(t.code,{children:"Convert SQLite Database to MySQL"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Enter the required information and click on Execute."}),"\n",(0,o.jsxs)(t.li,{children:["After the process completes run the configuration utility and configure TCAdmin to use the MySQL database and restart. ",(0,o.jsx)(t.a,{href:"http://x.x.x.x:8880/Interface/Config/Default",children:"http://x.x.x.x:8880/Interface/Config/Default"})," for MVC and ",(0,o.jsx)(t.a,{href:"http://x.x.x.x:8880/Interface/Configuration/Default.aspx",children:"http://x.x.x.x:8880/Interface/Configuration/Default.aspx"})," for ASP.NET"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"If you get an error about missing tables uninstall any modules that you have installed. Then install them again after converting the database successfully."})}),"\n",(0,o.jsx)(t.h2,{id:"configure-remote-servers",children:"Configure Remote Servers"}),"\n",(0,o.jsxs)(t.p,{children:["After you have configured your master it is recommended that you enable remote db connections. Go to ",(0,o.jsx)(t.code,{children:"Server Management"})," > ",(0,o.jsx)(t.code,{children:"Remote DB Connections"}),". Enter the information required to connect to the database there."]}),"\n",(0,o.jsxs)(t.p,{children:["Generate a new ",(0,o.jsx)(t.code,{children:"ConfigUtility.config"})," for each of your remote servers. Place it in the remote's Monitor folder (",(0,o.jsx)(t.code,{children:"/home/tcadmin/Monitor"})," or ",(0,o.jsx)(t.code,{children:"Program Files\\TCAdmin2\\Monitor"}),") and restart the monitor. It is recommended that you start the monitor in ",(0,o.jsx)(t.a,{href:"/getting-started/server-components#startstop-in-console-mode",children:"console mode"})," first to make sure it connects to the database correctly."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(6540);const a={},r=o.createContext(a);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);