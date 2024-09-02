"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[236],{7362:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=t(4848),s=t(8453),a=t(1470),n=t(9365);const l={sidebar_position:14,sidebar_label:"Limit Service CPU and Memory Usage"},o="Limit Service CPU and Memory Usage",c={id:"using-tcadmin/manage-game-voice-services/limit-service-cpu-memory",title:"Limit Service CPU and Memory Usage",description:"Limiting a service's CPU usage",source:"@site/docs/using-tcadmin/manage-game-voice-services/limit-service-cpu-memory.mdx",sourceDirName:"using-tcadmin/manage-game-voice-services",slug:"/using-tcadmin/manage-game-voice-services/limit-service-cpu-memory",permalink:"/using-tcadmin/manage-game-voice-services/limit-service-cpu-memory",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/manage-game-voice-services/limit-service-cpu-memory.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:14,frontMatter:{sidebar_position:14,sidebar_label:"Limit Service CPU and Memory Usage"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting Game & Voice Services",permalink:"/using-tcadmin/manage-game-voice-services/troubleshooting-game-voice-services"},next:{title:"Google Drive",permalink:"/using-tcadmin/manage-game-voice-services/google-drive"}},u={},m=[{value:"Limiting a service&#39;s CPU usage",id:"limiting-a-services-cpu-usage",level:3},{value:"Limiting a service&#39;s memory and virtual memory",id:"limiting-a-services-memory-and-virtual-memory",level:3},{value:"Virtual Servers",id:"virtual-servers",level:3},{value:"Limiting a service&#39;s CPU usage",id:"limiting-a-services-cpu-usage-1",level:3},{value:"Limiting a service&#39;s memory usage",id:"limiting-a-services-memory-usage",level:3},{value:"Billing API",id:"billing-api",level:2},{value:"Scripting",id:"scripting",level:2}];function d(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"limit-service-cpu-and-memory-usage",children:"Limit Service CPU and Memory Usage"})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(n.A,{value:"windows",label:"Windows",children:[(0,r.jsx)(i.h3,{id:"limiting-a-services-cpu-usage",children:"Limiting a service's CPU usage"}),(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"The maximum value for CPU limit is 100%. CPU limit is affected by the number of cores assigned to the service or virtual server. For example if the service has 1 core assigned and limit is set to 50% the actual limit is 50% of 1 core."})}),(0,r.jsx)(i.p,{children:"To set the CPU limit go to the game server's service settings, set the value of CPU limit and save. The CPU limit is applied immediately. The service does not need to be restarted."}),(0,r.jsx)(i.h3,{id:"limiting-a-services-memory-and-virtual-memory",children:"Limiting a service's memory and virtual memory"}),(0,r.jsx)(i.admonition,{title:"important notes",type:"info",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"If you limit a service's memory it will use more virtual memory. This can increase your server's disk activity."}),"\n",(0,r.jsx)(i.li,{children:"If you set the virtual memory limit too low the service might crash while starting up or it might crash later if it requires more memory than allowed."}),"\n",(0,r.jsx)(i.li,{children:"If you set the virtual memory limit and the service is currently using more than allowed you will have to restart it to apply the limit."}),"\n",(0,r.jsx)(i.li,{children:"Memory usage might go slightly over 100%, specially if the game server is started with a .bat because it will add memory usage from cmd.exe and from the main exe."}),"\n"]})}),(0,r.jsx)(i.p,{children:"To set the memory or virtual memory limit go to the game server's service settings, set the values and save. The memory and virtual memory limit is applied immediately. The service does not need to be restarted."}),(0,r.jsx)(i.h3,{id:"virtual-servers",children:"Virtual Servers"}),(0,r.jsx)(i.admonition,{title:"important notes",type:"info",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"When a service belongs to a virtual server the memory limit in service settings can't be set higher than the memory assigned to the virtual server."}),"\n",(0,r.jsx)(i.li,{children:"A single process can't use more memory than what is assigned in the virtual server's settings even if there is no limit assigned in service settings."}),"\n",(0,r.jsx)(i.li,{children:"CPU limit of a service is affected by the number of cores assigned to the service or virtual server. For example if the parent server has 16 cores, the virtual server has 4 cores and CPU limit of a service is set to 50% it will use up to 2 cores. In this case if you change the virtual server's cores the service needs to be restarted for the change to take effect."}),"\n"]})})]}),(0,r.jsxs)(n.A,{value:"linux",label:"Linux",children:[(0,r.jsx)(i.h3,{id:"limiting-a-services-cpu-usage-1",children:"Limiting a service's CPU usage"}),(0,r.jsx)(i.p,{children:"Each core is 100%. The maximum value is 100 multiplied by the number of cores. For example 200% means 2 full cores.\nTo set the CPU limit go to the game server's service settings, set the value of CPU limit and save. The CPU limit is applied after the service is restarted."}),(0,r.jsx)(i.h3,{id:"limiting-a-services-memory-usage",children:"Limiting a service's memory usage"}),(0,r.jsx)(i.p,{children:"This feature is supported starting in TCAdmin version 2.0.161 and greater."}),(0,r.jsx)(i.admonition,{type:"danger",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"CentOS 7.9"})," does not support setting memory/virtual memory. If the game server crashes when setting memory or virtual memory set the limit to 0."]})})]})]}),"\n",(0,r.jsx)(i.h2,{id:"billing-api",children:"Billing API"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"To limit the service's CPU configure your module to send a value for game_cpu"}),"\n",(0,r.jsx)(i.li,{children:"To limit the service's memory configure your module to send a value for game_memory or game_virtual_memory"}),"\n",(0,r.jsx)(i.li,{children:"The billing api supports setting these values when creating a new service and when updating the settings."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"scripting",children:"Scripting"}),"\n",(0,r.jsx)(i.p,{children:"This script sets the memory limit to 2GB, virtual memory to 10GB and CPU limit to 75%."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"ThisService.MemoryLimitMB = 2048\nThis service.VirtualMemoryLimitMB = 10240\nThisService.CpuLimit = 75\nThisService.Save()\nThisService.Configure()\n"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9365:(e,i,t)=>{t.d(i,{A:()=>n});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var a=t(4848);function n(e){let{children:i,hidden:t,className:n}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,n),hidden:t,children:i})}},1470:(e,i,t)=>{t.d(i,{A:()=>w});var r=t(6540),s=t(4164),a=t(3104),n=t(6347),l=t(205),o=t(7485),c=t(1682),u=t(679);function m(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:i,children:t}=e;return(0,r.useMemo)((()=>{const e=i??function(e){return m(e).map((e=>{let{props:{value:i,label:t,attributes:r,default:s}}=e;return{value:i,label:t,attributes:r,default:s}}))}(t);return function(e){const i=(0,c.XI)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,t])}function h(e){let{value:i,tabValues:t}=e;return t.some((e=>e.value===i))}function v(e){let{queryString:i=!1,groupId:t}=e;const s=(0,n.W6)(),a=function(e){let{queryString:i=!1,groupId:t}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:i,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const i=new URLSearchParams(s.location.search);i.set(a,e),s.replace({...s.location,search:i.toString()})}),[a,s])]}function g(e){const{defaultValue:i,queryString:t=!1,groupId:s}=e,a=d(e),[n,o]=(0,r.useState)((()=>function(e){let{defaultValue:i,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!h({value:i,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:a}))),[c,m]=v({queryString:t,groupId:s}),[g,p]=function(e){let{groupId:i}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(i),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),f=(()=>{const e=c??g;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:n,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),m(e),p(e)}),[m,p,a]),tabValues:a}}var p=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function b(e){let{className:i,block:t,selectedValue:r,selectValue:n,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const i=e.currentTarget,t=o.indexOf(i),s=l[t].value;s!==r&&(c(i),n(s))},m=e=>{let i=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;i=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;i=o[t]??o[o.length-1];break}}i?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},i),children:l.map((e=>{let{value:i,label:t,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===i?0:-1,"aria-selected":r===i,ref:e=>o.push(e),onKeyDown:m,onClick:u,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===i}),children:t??i},i)}))})}function x(e){let{lazy:i,children:t,selectedValue:a}=e;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(i){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:n.map(((e,i)=>(0,r.cloneElement)(e,{key:i,hidden:e.props.value!==a})))})}function j(e){const i=g(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,y.jsx)(b,{...i,...e}),(0,y.jsx)(x,{...i,...e})]})}function w(e){const i=(0,p.A)();return(0,y.jsx)(j,{...e,children:m(e.children)},String(i))}},8453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>l});var r=t(6540);const s={},a=r.createContext(s);function n(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);