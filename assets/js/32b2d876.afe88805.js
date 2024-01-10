"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[1008],{9521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(5893),i=t(1151),s=t(4866),a=t(5162);const o={sidebar_position:13,sidebar_label:"Troubleshooting Game & Voice Services"},l="Troubleshooting Game & Voice Services",c={id:"using-tcadmin/manage-game-voice-services/troubleshooting-game-voice-services",title:"Troubleshooting Game & Voice Services",description:"Running the Service with Interact with Desktop Enabled",source:"@site/docs/using-tcadmin/manage-game-voice-services/troubleshooting-game-voice-services.mdx",sourceDirName:"using-tcadmin/manage-game-voice-services",slug:"/using-tcadmin/manage-game-voice-services/troubleshooting-game-voice-services",permalink:"/using-tcadmin/manage-game-voice-services/troubleshooting-game-voice-services",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/manage-game-voice-services/troubleshooting-game-voice-services.mdx",tags:[],version:"current",lastUpdatedAt:1704877678,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:13,frontMatter:{sidebar_position:13,sidebar_label:"Troubleshooting Game & Voice Services"},sidebar:"tutorialSidebar",previous:{title:"Manage Game & Voice Services",permalink:"/using-tcadmin/manage-game-voice-services/"},next:{title:"Limit Service CPU and Memory Usage",permalink:"/using-tcadmin/manage-game-voice-services/limit-service-cpu-memory"}},u={},d=[{value:"Running the Service with <code>Interact with Desktop</code> Enabled",id:"running-the-service-with-interact-with-desktop-enabled",level:3},{value:"Running the Service Manually",id:"running-the-service-manually",level:3},{value:"Running the Service Manually",id:"running-the-service-manually-1",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"troubleshooting-game--voice-services",children:"Troubleshooting Game & Voice Services"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(a.Z,{value:"windows",label:"Windows",children:[(0,r.jsxs)(n.h3,{id:"running-the-service-with-interact-with-desktop-enabled",children:["Running the Service with ",(0,r.jsx)(n.code,{children:"Interact with Desktop"})," Enabled"]}),(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["Some old games require ",(0,r.jsx)(n.code,{children:"Interact with Desktop"})," enabled. The feature was removed in ",(0,r.jsx)(n.code,{children:"Windows 10 Version 1803"})," and ",(0,r.jsx)(n.code,{children:"Windows Server 2019"})," but services can still start in ",(0,r.jsx)(n.code,{children:"Session 0"}),".\nYou won't be able to interact with the services from the Windows Desktop unless you are running an ",(0,r.jsx)("u",{children:(0,r.jsx)(n.strong,{children:"older version of Windows"})}),"."]}),(0,r.jsx)(n.p,{children:"We recommend not enabling this option unless it is required for the application to work."})]}),(0,r.jsx)(n.h3,{id:"running-the-service-manually",children:"Running the Service Manually"}),(0,r.jsx)(n.p,{children:"You can stop the service in TCAdmin and start it manually from remote desktop so you can see any errors:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Go to Game/Voice Services > Select the service > Click on Service Settings."}),"\n",(0,r.jsx)(n.li,{children:"Click on the Preview link next to Commandline."}),"\n",(0,r.jsx)(n.li,{children:"Copy the command shown."}),"\n",(0,r.jsx)(n.li,{children:"Log in to remote desktop."}),"\n",(0,r.jsx)(n.li,{children:"Open a command prompt."}),"\n",(0,r.jsx)(n.li,{children:"Paste the commands one by one."}),"\n",(0,r.jsx)(n.li,{children:"Check for errors while the game server is starting up."}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"windows-cmd-preview",src:t(473).Z+"",width:"560",height:"226"})}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"After running the game server manually and fixing any errors you might have to run the Repair tool in the game server's Actions tab. This will fix permissions on files created by Administrator so the game server can be started by TCAGame."})})]}),(0,r.jsxs)(a.Z,{value:"linux",label:"Linux",children:[(0,r.jsx)(n.h3,{id:"running-the-service-manually-1",children:"Running the Service Manually"}),(0,r.jsx)(n.p,{children:"You can stop the service in TCAdmin and start it manually from ssh so you can see any errors:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.code,{children:"Game/Voice Services"})," > ",(0,r.jsx)(n.code,{children:"Select the service"})," > ",(0,r.jsx)(n.code,{children:"Click on Service Settings"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Click on the Preview link next to Commandline."}),"\n",(0,r.jsx)(n.li,{children:"Copy the commands shown."}),"\n",(0,r.jsx)(n.li,{children:"Paste the commands in your ssh session."}),"\n",(0,r.jsx)(n.li,{children:"Check for errors while the game server is starting up."}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"linux-cmd-preview",src:t(1299).Z+"",width:"943",height:"203"})})]})]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(512);const i={tabItem:"tabItem_Ymn6"};var s=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(7294),i=t(512),s=t(2466),a=t(6550),o=t(469),l=t(1980),c=t(7392),u=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=v({queryString:t,groupId:i}),[g,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,u.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),b=(()=>{const e=c??g;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(5893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==r&&(c(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...e,...n}),(0,f.jsx)(w,{...e,...n})]})}function y(e){const n=(0,p.Z)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(n))}},1299:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/linux-cmd-preview-5c676766f17f8845024824df4cd33cc1.png"},473:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/windows-cmd-preview-db5aec49cba98b99ccf861860ba06fd3.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(7294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);