"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[6611],{1873:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var t=r(4848),s=r(8453);const n={sidebar_label:"Service Manager Scripting Variables",sidebar_position:7},c="Service Manager Scripting Variables",a={id:"customizations/scripts/script-objects/service-manager-scripting-variables",title:"Service Manager Scripting Variables",description:"The following variables are available in the Before Started, After Started, Before Stopped and After Stopped events.",source:"@site/docs/customizations/scripts/script-objects/service-manager-scripting-variables.mdx",sourceDirName:"customizations/scripts/script-objects",slug:"/customizations/scripts/script-objects/service-manager-scripting-variables",permalink:"/customizations/scripts/script-objects/service-manager-scripting-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/script-objects/service-manager-scripting-variables.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:7,frontMatter:{sidebar_label:"Service Manager Scripting Variables",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Query Results",permalink:"/customizations/scripts/script-objects/query-results"},next:{title:"Themes",permalink:"/category/themes"}},o={},d=[];function l(e){const i={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"service-manager-scripting-variables",children:"Service Manager Scripting Variables"})}),"\n",(0,t.jsxs)(i.p,{children:["The following variables are available in the ",(0,t.jsx)(i.code,{children:"Before Started"}),", ",(0,t.jsx)(i.code,{children:"After Started"}),", ",(0,t.jsx)(i.code,{children:"Before Stopped"})," and ",(0,t.jsx)(i.code,{children:"After Stopped"})," events."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"ThisService_CustomVariableName\nThisService_Affinity\nThisService_CommandLineArguments\nThisService_CustomPort1\nThisService_CustomPort2\nThisService_CustomPort3\nThisService_CustomPort4\nThisService_CustomPort5\nThisService_Description\nThisService_Executable\nThisService_FriendlyName\nThisService_GamePort\nThisService_ServiceId\nThisService_InteractWithDesktop\nThisService_IpAddress\nThisService_ManagedInput\nThisService_ManagedOutput\nThisService_Owner\nThisService_Priority\nThisService_QueryPort\nThisService_RConPort\nThisService_RootDirectory\nThisService_Slots\nThisService_StartOnCPU0\nThisService_Startup\nThisService_StopCommands\nThisService_StopCommandWait\nThisService_StopDelay\nThisService_WorkingDirectory\nThisService_RunAsUserName\nThisServiceController - In IronPython and C# scripts, this can be used to read and update values in the game server's `TCAdmin2\\Monitor\\Services\\ServiceId\\Service.cfg`.\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The following variables are available in the ",(0,t.jsx)(i.code,{children:"After Started"}),", ",(0,t.jsx)(i.code,{children:"Before Stopped"})," and ",(0,t.jsx)(i.code,{children:"After Stopped"})," events."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"ThisService_Pid"})," - Id of the process that was started/stopped."]}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{title:"example",type:"note",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'commandline = ThisServiceController.ServiceConfig["Service.CommandLineArguments"]\n'})})})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>c,x:()=>a});var t=r(6540);const s={},n=t.createContext(s);function c(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);