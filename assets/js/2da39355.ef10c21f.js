"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[826],{1864:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7624),r=t(2172);const a={sidebar_position:4,sidebar_label:"Changed the MySQL Server or Password and TCAdmin can't Connect"},i="Changed the MySQL Server or Password and TCAdmin can't Connect",s={id:"database/changed-the-mysql-server-or-password-and-tcadmin-cant-connect",title:"Changed the MySQL Server or Password and TCAdmin can't Connect",description:"If you changed your MySQL password or server IP and TCAdmin doesn't start correctly replace the contents of C:\\Program Files\\TCAdmin2\\Monitor\\ConfigUtility.config or /home/tcadmin/Monitor/ConfigUtility.config with the following. Replace MYSQLIP, MYSQLDB, MYSQLUSER and MYSQLPASSWORD with the correct information. Then restart the monitor.",source:"@site/docs/database/changed-the-mysql-server-or-password-and-tcadmin-cant-connect.mdx",sourceDirName:"database",slug:"/database/changed-the-mysql-server-or-password-and-tcadmin-cant-connect",permalink:"/database/changed-the-mysql-server-or-password-and-tcadmin-cant-connect",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/database/changed-the-mysql-server-or-password-and-tcadmin-cant-connect.mdx",tags:[],version:"current",lastUpdatedAt:1707174221,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Changed the MySQL Server or Password and TCAdmin can't Connect"},sidebar:"tutorialSidebar",previous:{title:"Improve MySQL Connection Speed",permalink:"/database/improve-mysql-connection-speed"},next:{title:"Customizations",permalink:"/category/customizations"}},d={},c=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"changed-the-mysql-server-or-password-and-tcadmin-cant-connect",children:"Changed the MySQL Server or Password and TCAdmin can't Connect"}),"\n",(0,o.jsxs)(n.p,{children:["If you changed your MySQL password or server IP and TCAdmin doesn't start correctly replace the contents of ",(0,o.jsx)(n.code,{children:"C:\\Program Files\\TCAdmin2\\Monitor\\ConfigUtility.config"})," or ",(0,o.jsx)(n.code,{children:"/home/tcadmin/Monitor/ConfigUtility.config"})," with the following. Replace ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"MYSQLIP"})}),", ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"MYSQLDB"})}),", ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"MYSQLUSER"})})," and ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"MYSQLPASSWORD"})})," with the correct information. Then restart the monitor."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-16" standalone="yes"?>\n<values>\n  <add key="TCAdmin.ConfigUtility.Database.ConnectionString" value="Data Source=MYSQLIP;User Id=MYSQLUSER;Password=MYSQLPASSWORD;Database=MYSQLDB;Pooling=false;Compress=false;Connection Lifetime=900;Connect Timeout=30;Protocol=TCP" type="System.String,mscorlib" />\n  <add key="TCAdmin.ConfigUtility.Database.DBMS" value="MySql" type="System.String,mscorlib" />\n  <add key="TCAdmin.ConfigUtility.Database.Provider" value="TCAdmin.DatabaseProviders.MySql.MySqlManager,TCAdmin.DatabaseProviders.MySql" type="System.String,mscorlib" />\n  <add key="TCAdmin.ConfigUtility.Database.ConnectionString.Encrypted" value="False" type="System.String,mscorlib" />\n  <add key="TCAdmin.ConfigUtility.Monitor.ServerId" value="1" type="System.String,mscorlib" />\n  <add key="TCAdmin.ConfigUtility.Certificate.Thumbprint" value="" type="System.String,mscorlib" />\n</values>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For remote servers go to ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"Remote DB Connection"})," and configure the new connection info. Then download a new ",(0,o.jsx)(n.code,{children:"ConfigUtility.config"})," from the remote server settings and save it to the remote server's Monitor folder. Then restart the monitor."]})]})}function m(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>i});var o=t(1504);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);