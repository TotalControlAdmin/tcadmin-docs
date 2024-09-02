"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[5476],{9880:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>r,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=i(4848),a=i(8453);const s={sidebar_label:"Commandlines",sidebar_position:5},o="Commandlines",d={id:"using-tcadmin/game-voice-configuration/commandlines",title:"Commandlines",description:"The default commandline used for this game. You may use default and custom variables",source:"@site/docs/using-tcadmin/game-voice-configuration/commandlines.mdx",sourceDirName:"using-tcadmin/game-voice-configuration",slug:"/using-tcadmin/game-voice-configuration/commandlines",permalink:"/using-tcadmin/game-voice-configuration/commandlines",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/game-voice-configuration/commandlines.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:5,frontMatter:{sidebar_label:"Commandlines",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"General Settings",permalink:"/using-tcadmin/game-voice-configuration/general-settings"},next:{title:"Steam Settings",permalink:"/using-tcadmin/game-voice-configuration/steam-settings"}},m={},c=[];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"commandlines",children:"Commandlines"})}),"\n",(0,t.jsx)(n.p,{children:"The default commandline used for this game. You may use default and custom variables"}),"\n",(0,t.jsx)(n.admonition,{title:"example",type:"info",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'+set dedicated 2 +set net_ip "$[Service.IpAddress]" +set net_port "$[Service.GamePort]" +set sv_maxclients "$[Service.Slots]" ![Game] ![ConfigFile]\n'})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Private Commandline"})," - The commandline used when the game is private. If no commandline is specified the default commandline will be used. You may use default and custom variables."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Default Custom Commandline"})," - The commandline used when building a custom commandline. Use the User Commandline variable to specify where the user's custom commandline will be inserted. You may use default and custom variables."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Private Custom Commandline"})," - The commandline used for private game servers when building a custom commandline. Use the User Commandline variable to specify where the user's custom commandline will be inserted. If no commandline is specified the default custom commandline will be used. You may use default and custom variables."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Predefined Commandlines"})," - Define one or more commandlines that the user can choose from. You may use default and custom variables. If you use a custom variable the user will be asked to enter the value before applying the commandline."]}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(6540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);