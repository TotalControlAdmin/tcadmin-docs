"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[9728],{6031:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=s(4848),t=s(8453);const o={sidebar_position:3,sidebar_label:"Setting up ASPNET IIS Classic"},r="Setting up ASPNET IIS Classic",c={id:"customizations/web-server-configurations/aspnet-iis-classic",title:"Setting up ASPNET IIS Classic",description:"Install IIS with support for ASP.NET 4.0/4.5",source:"@site/docs/customizations/web-server-configurations/aspnet-iis-classic.mdx",sourceDirName:"customizations/web-server-configurations",slug:"/customizations/web-server-configurations/aspnet-iis-classic",permalink:"/customizations/web-server-configurations/aspnet-iis-classic",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/web-server-configurations/aspnet-iis-classic.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Setting up ASPNET IIS Classic"},sidebar:"tutorialSidebar",previous:{title:"Setting up Nginx with TCAdmin",permalink:"/customizations/web-server-configurations/setting-up-nginx"},next:{title:"Live Stats",permalink:"/customizations/live-stats"}},a={},l=[{value:"Install IIS with support for ASP.NET 4.0/4.5",id:"install-iis-with-support-for-aspnet-4045",level:2},{value:"Execute these commands on your database to disable the built-in web server",id:"execute-these-commands-on-your-database-to-disable-the-built-in-web-server",level:2},{value:"If you ever need to enable the built-in web server again, execute this command",id:"if-you-ever-need-to-enable-the-built-in-web-server-again-execute-this-command",level:2},{value:"Disable Output Caching",id:"disable-output-caching",level:2},{value:"Configuring your IIS website with more than 1 worker process",id:"configuring-your-iis-website-with-more-than-1-worker-process",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"setting-up-aspnet-iis-classic",children:"Setting up ASPNET IIS Classic"})}),"\n",(0,n.jsx)(i.h2,{id:"install-iis-with-support-for-aspnet-4045",children:"Install IIS with support for ASP.NET 4.0/4.5"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["If you are using a SQLite database, copy ",(0,n.jsx)(i.code,{children:"TCAdmin2\\Monitor\\sqlite3.dll"})," to ",(0,n.jsx)(i.code,{children:"C:\\Windows\\System32"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Add ",(0,n.jsx)(i.code,{children:"TCAWeb"})," to the ",(0,n.jsx)(i.code,{children:"IIS_IUSRS"})," group."]}),"\n",(0,n.jsxs)(i.li,{children:["Manually create the website in IIS Manager with its web root pointing to ",(0,n.jsx)(i.code,{children:"Program Files\\TCAdmin2\\ControlPanel"}),'. The website\'s application pool should be ".NET v4.0 Classic".']}),"\n",(0,n.jsxs)(i.li,{children:['In IIS Manager, select the website, click on "Bindings", then on "Connect as...". Enter the user and password of the Windows user that runs your website. Make sure the user that runs your website has full permissions on the ',(0,n.jsx)(i.code,{children:"ControlPanel"}),", ",(0,n.jsx)(i.code,{children:"Cache"}),", ",(0,n.jsx)(i.code,{children:"Temp"}),", ",(0,n.jsx)(i.code,{children:"Logs"}),", and ",(0,n.jsx)(i.code,{children:"Database"})," folders, and read permissions on ",(0,n.jsx)(i.code,{children:"Monitor\\Shared"}),". If you want to use ",(0,n.jsx)(i.code,{children:"TCAWeb"}),", attach ",(0,n.jsx)(i.code,{children:"TCAdmin2\\Monitor\\TCAWeb.config"})," to a support ticket, and they will send you the decrypted password."]}),"\n",(0,n.jsx)(i.li,{children:"If you use Let's Encrypt, bind the website to a specific IP and hostname. This prevents TCAdmin from changing the website's certificate."}),"\n",(0,n.jsxs)(i.li,{children:["Give full permissions to ",(0,n.jsx)(i.code,{children:'"IIS APPPOOL\\.NET v4.5 Classic"'})," on ",(0,n.jsx)(i.code,{children:"C:\\Program Files\\TCAdmin2\\Cache"}),", ",(0,n.jsx)(i.code,{children:"C:\\Program Files\\TCAdmin2\\Temp"}),", and ",(0,n.jsx)(i.code,{children:"C:\\Program Files\\TCAdmin2\\Logs\\Web"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"execute-these-commands-on-your-database-to-disable-the-built-in-web-server",children:"Execute these commands on your database to disable the built-in web server"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sql",children:"DELETE FROM tc_server_enabled_components WHERE module_id = '07405876-e8c2-4b24-a774-4ef57f596384' AND component_id = 2 AND server_id = 1;\n"})}),"\n",(0,n.jsx)(i.h2,{id:"if-you-ever-need-to-enable-the-built-in-web-server-again-execute-this-command",children:"If you ever need to enable the built-in web server again, execute this command"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sql",children:"INSERT INTO tc_server_enabled_components (module_id, component_id, server_id) VALUES ('07405876-e8c2-4b24-a774-4ef57f596384', 2, 1);\n"})}),"\n",(0,n.jsx)(i.h2,{id:"disable-output-caching",children:"Disable Output Caching"}),"\n",(0,n.jsx)(i.p,{children:"Some clients have reported users randomly being logged in as other users. This is caused by IIS cache. To fix this:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Run IIS Manager."}),"\n",(0,n.jsx)(i.li,{children:"Select your website."}),"\n",(0,n.jsx)(i.li,{children:'Double click on "Output Caching".'}),"\n",(0,n.jsx)(i.li,{children:'On the right side under "Actions", click on "Edit Feature Settings".'}),"\n",(0,n.jsx)(i.li,{children:'Uncheck "Enable Cache" and "Enable kernel cache".'}),"\n",(0,n.jsx)(i.li,{children:"Click OK."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"configuring-your-iis-website-with-more-than-1-worker-process",children:"Configuring your IIS website with more than 1 worker process"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Disable the built-in web server with the instructions above."}),"\n",(0,n.jsx)(i.li,{children:'Go to Start > Administrative Tools > Services. Start the ASP.NET state service and set the startup to "Automatic".'}),"\n",(0,n.jsxs)(i.li,{children:["Edit your ",(0,n.jsx)(i.code,{children:"TCAdmin2\\ControlPanel\\Web.config"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Replace ",(0,n.jsx)(i.code,{children:'<sessionState timeout="30"/>'})," with ",(0,n.jsx)(i.code,{children:'<sessionState mode="StateServer" stateConnectionString="tcpip=localhost:42424" cookieless="false" timeout="30" />'}),"."]}),"\n",(0,n.jsx)(i.li,{children:"Open IIS Manager."}),"\n",(0,n.jsxs)(i.li,{children:["Select the advanced properties of the ",(0,n.jsx)(i.code,{children:".NET Application"})," pool and increase the number of worker processes."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>c});var n=s(6540);const t={},o=n.createContext(t);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);