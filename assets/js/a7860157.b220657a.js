"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[7324],{6705:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>l});var s=i(4848),r=i(8453);const c={sidebar_label:"Game Switcher Scripting Variables",sidebar_position:5},a="Game Switcher Scripting Variables",n={id:"customizations/scripts/script-objects/game-switcher-scripting-variables",title:"Game Switcher Scripting Variables",description:"These variables are available in the before game switch and after game switch events.",source:"@site/docs/customizations/scripts/script-objects/game-switcher-scripting-variables.mdx",sourceDirName:"customizations/scripts/script-objects",slug:"/customizations/scripts/script-objects/game-switcher-scripting-variables",permalink:"/customizations/scripts/script-objects/game-switcher-scripting-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/script-objects/game-switcher-scripting-variables.mdx",tags:[],version:"current",lastUpdatedAt:1716196388e3,sidebarPosition:5,frontMatter:{sidebar_label:"Game Switcher Scripting Variables",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"This Service",permalink:"/customizations/scripts/script-objects/this-service"},next:{title:"Query Results",permalink:"/customizations/scripts/script-objects/query-results"}},o={},l=[{value:"Examples",id:"examples",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"game-switcher-scripting-variables",children:"Game Switcher Scripting Variables"}),"\n",(0,s.jsx)(t.p,{children:"These variables are available in the before game switch and after game switch events."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"SwitchGameFrom"})," - If the game server is being switched to a new game, this value is the current game id."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"SwitchGameTo"})," - If the game server is being switched to a new game, this value is the new game id."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Windows batch script"',children:"@echo off\necho Switching from game id %SwitchGameFrom% to %SwitchGameTo%\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Linux shell script"',children:"echo Switching from game id $SwitchGameFrom to $SwitchGameTo\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",metastring:'title="IronPython script"',children:' Script.WriteToConsole("Switching from game id " + str(SwitchGameFrom) + " to " + str(SwitchGameTo))\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>n});var s=i(6540);const r={},c=s.createContext(r);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);