"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[9641],{5276:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});var s=i(5893),r=i(1151);const a={sidebar_label:"Game Switcher Scripting Variables",sidebar_position:5},c="Game Switcher Scripting Variables",n={id:"customizations/scripts/script-objects/game-switcher-scripting-variables",title:"Game Switcher Scripting Variables",description:"These variables are available in the before game switch and after game switch events.",source:"@site/docs/customizations/scripts/script-objects/game-switcher-scripting-variables.mdx",sourceDirName:"customizations/scripts/script-objects",slug:"/customizations/scripts/script-objects/game-switcher-scripting-variables",permalink:"/customizations/scripts/script-objects/game-switcher-scripting-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/script-objects/game-switcher-scripting-variables.mdx",tags:[],version:"current",lastUpdatedAt:1704877678,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:5,frontMatter:{sidebar_label:"Game Switcher Scripting Variables",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"This Service",permalink:"/customizations/scripts/script-objects/this-service"},next:{title:"Query Results",permalink:"/customizations/scripts/script-objects/query-results"}},o={},l=[{value:"Examples",id:"examples",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"game-switcher-scripting-variables",children:"Game Switcher Scripting Variables"}),"\n",(0,s.jsx)(t.p,{children:"These variables are available in the before game switch and after game switch events."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"SwitchGameFrom"})," - If the game server is being switched to a new game, this value is the current game id."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"SwitchGameTo"})," - If the game server is being switched to a new game, this value is the new game id."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Windows batch script"',children:"@echo off\necho Switching from game id %SwitchGameFrom% to %SwitchGameTo%\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Linux shell script"',children:"echo Switching from game id $SwitchGameFrom to $SwitchGameTo\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",metastring:'title="IronPython script"',children:' Script.WriteToConsole("Switching from game id " + str(SwitchGameFrom) + " to " + str(SwitchGameTo))\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>n,a:()=>c});var s=i(7294);const r={},a=s.createContext(r);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);