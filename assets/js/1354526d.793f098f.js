"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[1624],{4916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(7624),o=t(2172);const r={sidebar_position:26,sidebar_label:"Hosting the control panel website separately"},s="Hosting the control panel website separately",l={id:"using-tcadmin/hosting-control-panel-seperatly",title:"Hosting the control panel website separately",description:"Requirements",source:"@site/docs/using-tcadmin/hosting-control-panel-seperatly.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/hosting-control-panel-seperatly",permalink:"/using-tcadmin/hosting-control-panel-seperatly",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/hosting-control-panel-seperatly.mdx",tags:[],version:"current",lastUpdatedAt:1707174221,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:26,frontMatter:{sidebar_position:26,sidebar_label:"Hosting the control panel website separately"},sidebar:"tutorialSidebar",previous:{title:"Console Wrapper",permalink:"/using-tcadmin/console-wrapper"},next:{title:"Configuring a Plesk website as a reverse proxy for the control panel",permalink:"/using-tcadmin/configuring-plesk-website-as-reverse-proxy"}},a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Configure the master to accept connections from the web server",id:"configure-the-master-to-accept-connections-from-the-web-server",level:2},{value:"Installation of the website on Linux",id:"installation-of-the-website-on-linux",level:2},{value:"Installation of the website on Windows",id:"installation-of-the-website-on-windows",level:2},{value:"Disable the master&#39;s control panel",id:"disable-the-masters-control-panel",level:2},{value:"Enable the master&#39;s control panel (optional)",id:"enable-the-masters-control-panel-optional",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"hosting-the-control-panel-website-separately",children:"Hosting the control panel website separately"}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.p,{children:"If you want to host the control panel website on a separate server without requiring an additional license you will need:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Remote desktop or SSH access to the web server"}),"\n",(0,i.jsxs)(n.li,{children:["TCAdmin ",(0,i.jsx)(n.strong,{children:"2.0.152.1"})," or greater"]}),"\n",(0,i.jsx)(n.li,{children:"TCAdmin configured with a MySQL database"}),"\n",(0,i.jsx)(n.li,{children:"Low latency from MySQL to the web server"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When you update TCAdmin the seperate control panel needs to be ",(0,i.jsx)(n.a,{href:"/getting-started/updating#manual-update",children:"updated manually"})]}),"\n",(0,i.jsx)(n.li,{children:"Some modules might not be compatible"}),"\n",(0,i.jsx)(n.li,{children:"Built in DDoS protection for the control panel is not available"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configure-the-master-to-accept-connections-from-the-web-server",children:"Configure the master to accept connections from the web server"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The master should already be configured and have a working control panel."}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.code,{children:"Server Management (on the left-hand navigation)"})," > ",(0,i.jsx)(n.code,{children:"Servers"})," > ",(0,i.jsx)(n.code,{children:"Master"})," > ",(0,i.jsx)(n.code,{children:"Server IPs"}),". Add the web server's IP but ",(0,i.jsx)(n.strong,{children:"disable game and voice servers on it"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation-of-the-website-on-linux",children:"Installation of the website on Linux"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Install Mono and TCAdmin as you would normally. You don't need to run the configuration utility to enter a license."}),"\n",(0,i.jsxs)(n.li,{children:["Download the ",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3264).c+"",children:"Hosting.zip"}),", extract and edit with notepad or your favorite text editor."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["We recommend ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," for all configuration edits that need to be made."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Update the value of ",(0,i.jsx)(n.code,{children:"TCAdmin.ConfigUtility.Database.ConnectionString"})," with the information required to make the connection to the MySQL server."]}),"\n",(0,i.jsxs)(n.li,{children:["Save your updated ",(0,i.jsx)(n.code,{children:"Hosting.config"})," to your web server in the path ",(0,i.jsx)(n.code,{children:"/home/tcadmin/Monitor/Hosting.config"})]}),"\n",(0,i.jsx)(n.li,{children:"Restart the web server's monitor:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"/home/tcadmin/Monitor/monitor-service restart\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["After restarting the monitor you should be able to log in to the control panel and test the connection to the master in ",(0,i.jsx)(n.code,{children:"Server Management (on the left-hand navigation)"})," > ",(0,i.jsx)(n.code,{children:"Servers"})," > ",(0,i.jsx)(n.code,{children:"Show Versions"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["After the control panel is working correctly you can ",(0,i.jsx)(n.a,{href:"/customizations/web-server-configurations/setting-up-nginx",children:"configure the control panel website to run with Nginx"})," for improved performance."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation-of-the-website-on-windows",children:"Installation of the website on Windows"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Install TCAdmin as you would normally. You don't need to run the configuration utility to enter a license."}),"\n",(0,i.jsxs)(n.li,{children:["Download the ",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3264).c+"",children:"Hosting.zip"}),", extract and edit with notepad or your favorite text editor."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["We recommend ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," for all configuration edits that need to be made."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Update the value of ",(0,i.jsx)(n.code,{children:"TCAdmin.ConfigUtility.Database.ConnectionString"})," with the information required to make the connection to the MySQL server."]}),"\n",(0,i.jsxs)(n.li,{children:["Save your updated Hosting.config to your web server in the path ",(0,i.jsx)(n.code,{children:"C:\\Program Files\\TCAdmin2\\Monitor\\Hosting.config"})]}),"\n",(0,i.jsxs)(n.li,{children:["On the web server go to ",(0,i.jsx)(n.code,{children:"Start"})," > ",(0,i.jsx)(n.code,{children:"Services"})," and restart the TCAdmin Monitor service."]}),"\n",(0,i.jsxs)(n.li,{children:["After restarting the monitor you should be able to log in to the control panel and test the connection to the master in ",(0,i.jsx)(n.code,{children:"Server Management (on the left-hand navigation)"})," > ",(0,i.jsx)(n.code,{children:"Servers"})," > ",(0,i.jsx)(n.code,{children:"Show Versions"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["After the control panel is working correctly you can ",(0,i.jsx)(n.a,{href:"/customizations/web-server-configurations/setting-up-iis",children:"configure the control panel website to run with IIS"})," for improved performance."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"disable-the-masters-control-panel",children:"Disable the master's control panel"}),"\n",(0,i.jsx)(n.p,{children:"Execute this command on your database if you want to disable the master's built in web server."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM tc_server_enabled_components WHERE module_id = '07405876-e8c2-4b24-a774-4ef57f596384' AND component_id = 2 AND server_id = 1;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"enable-the-masters-control-panel-optional",children:"Enable the master's control panel (optional)"}),"\n",(0,i.jsx)(n.p,{children:"If you ever need to enable the built in web server again execute this command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO tc_server_enabled_components (module_id, component_id, server_id) values ('07405876-e8c2-4b24-a774-4ef57f596384', 2, 1);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3264:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/files/Hosting-1a05a6153df911e0c43929dabce0a04e.zip"},2172:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>s});var i=t(1504);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);