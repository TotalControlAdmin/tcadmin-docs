"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[2117],{8033:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=s(4848),o=s(8453);const r={sidebar_position:2,sidebar_label:"Allow User to Change Slots"},a="Allow User to Change Slots",i={id:"customizations/scripts/general-scripts/allow-user-to-change-slots",title:"Allow User to Change Slots",description:'1. Create an iron python script for the game\'s Custom Icon event with these lines. Check "Prompt for variable values" and allow user access.',source:"@site/docs/customizations/scripts/general-scripts/allow-user-to-change-slots.mdx",sourceDirName:"customizations/scripts/general-scripts",slug:"/customizations/scripts/general-scripts/allow-user-to-change-slots",permalink:"/customizations/scripts/general-scripts/allow-user-to-change-slots",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/general-scripts/allow-user-to-change-slots.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Allow User to Change Slots"},sidebar:"tutorialSidebar",previous:{title:"Allow User to Change the Exe",permalink:"/customizations/scripts/general-scripts/allow-user-to-change-exe"},next:{title:"Automatically Create a MySQL Database",permalink:"/customizations/scripts/general-scripts/automatically-create-mysql-database"}},l={},c=[];function h(e){const t={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"allow-user-to-change-slots",children:"Allow User to Change Slots"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'Create an iron python script for the game\'s Custom Icon event with these lines. Check "Prompt for variable values" and allow user access.'}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'ThisService.Slots = int(ThisService.Variables["CustomSlots"]);\nThisService.Save();\nThisService.Configure();\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Create a new variable named "CustomSlots". In the variable settings tab check "Script parameter" and "Save script parameter value".'}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Allow user access. Set the type to NumericTextBox."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"With that your user should be able to see the icon in the service home page to change the slots."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(6540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);