"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[9368],{3754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(4848),o=t(8453);const i={sidebar_position:2,sidebar_label:"Windows FAQ"},r="Windows FAQ",c={id:"FAQ/windows-faq",title:"Windows FAQ",description:"Configure the TCAdmin Website to Run with IIS",source:"@site/docs/FAQ/windows-faq.mdx",sourceDirName:"FAQ",slug:"/FAQ/windows-faq",permalink:"/FAQ/windows-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/FAQ/windows-faq.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Windows FAQ"},sidebar:"tutorialSidebar",previous:{title:"Common FAQ",permalink:"/FAQ/common-faq"},next:{title:"Linux FAQ",permalink:"/FAQ/linux-faq"}},l={},a=[{value:"Configure the TCAdmin Website to Run with IIS",id:"configure-the-tcadmin-website-to-run-with-iis",level:2},{value:"Use a Custom SSL Certificate (Windows)",id:"use-a-custom-ssl-certificate-windows",level:2},{value:"Enable Web Console for Game Servers with Text Console",id:"enable-web-console-for-game-servers-with-text-console",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"windows-faq",children:"Windows FAQ"})}),"\n",(0,s.jsx)(n.h2,{id:"configure-the-tcadmin-website-to-run-with-iis",children:"Configure the TCAdmin Website to Run with IIS"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Q1."})," How can I configure the TCAdmin website to run with IIS on Windows?"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A1."})," To configure the TCAdmin website to run with IIS on Windows, follow the instructions provided in the article titled ",(0,s.jsx)(n.a,{href:"/customizations/web-server-configurations/setting-up-iis",children:"Setting Up IIS With TCAdmin."})]}),"\n",(0,s.jsx)(n.h2,{id:"use-a-custom-ssl-certificate-windows",children:"Use a Custom SSL Certificate (Windows)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Q2."})," How can I use a custom SSL certificate for the control panel website on Windows?"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A2."})," To use a custom SSL certificate for the control panel website on Windows, follow these steps: ",(0,s.jsx)(n.a,{href:"/customizations/web-server-configurations/setting-up-iis#use-custom-ssl-certificate-windows-optional",children:"Use Custom SSL Certificate (Windows)"})]}),"\n",(0,s.jsx)(n.h2,{id:"enable-web-console-for-game-servers-with-text-console",children:"Enable Web Console for Game Servers with Text Console"}),"\n",(0,s.jsx)(n.p,{children:"This method allows you to enable the web console for Windows game servers that have a text console, even if they don't create a log file with the output."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Q3."})," How can I enable the web console for a game server with a text console on Windows?"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"A3."})," To enable the web console for a game server with a text console on Windows, follow these steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Go to "Settings" > "Games."'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select the specific game for which you want to enable the web console."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Navigate to the "Custom Scripts" section.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Add a new batch script for the after-start event with the following command. Leave "Execute as the service\'s user" unchecked and set the order to 0:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-batch",children:'copy /y "%TCAdminFolder%\\Monitor\\Tools\\TCAdminConsoleWrapper.exe" "%ThisService_RootDirectory%TCAdminConsoleWrapper.exe"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Add another batch script for the after-start event with this command. This time, check "Execute as the service\'s user" and set the order to 1:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-batch",children:'cd /d "%ThisService_RootDirectory%"\nstart TCAdminConsoleWrapper.exe -pid=%ThisService_Pid% -output=console.log\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Return to the game settings."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['In the "Web Console" tab, enable the web console and set the web console output to ',(0,s.jsx)(n.code,{children:"console.log"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Save your changes and click on "Update Existing Services."'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Go to the game server and restart it. If you click on the web console, it should work."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now, the web console should be enabled for your Windows game server with a text console, allowing you to access it via the TCAdmin control panel."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);