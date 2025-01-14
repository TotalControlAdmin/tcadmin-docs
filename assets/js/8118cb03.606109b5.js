"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[8825],{3172:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"misc/limit-service-cpu-andmemory-usage","title":"Limit Service CPU and Memory Usage","description":"If you updated your Windows server to TCAdmin 2.0.142 you must reboot before you can apply memory and CPU limits.","source":"@site/docs/misc/limit-service-cpu-andmemory-usage.mdx","sourceDirName":"misc","slug":"/misc/limit-service-cpu-andmemory-usage","permalink":"/misc/limit-service-cpu-andmemory-usage","draft":false,"unlisted":false,"editUrl":"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/misc/limit-service-cpu-andmemory-usage.mdx","tags":[],"version":"current","lastUpdatedAt":1736865147000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Limit Service CPU and Memory Usage"},"sidebar":"tutorialSidebar","previous":{"title":"Debug Mode","permalink":"/misc/debug-mode"},"next":{"title":"Linux Quotas","permalink":"/misc/linux-quotas"}}');var t=s(4848),n=s(8453);const o={sidebar_position:3,sidebar_label:"Limit Service CPU and Memory Usage"},a="Limit Service CPU and Memory Usage",l={},m=[{value:"Windows",id:"windows",level:2},{value:"Limiting a service&#39;s CPU usage",id:"limiting-a-services-cpu-usage",level:3},{value:"Limiting a service&#39;s memory and virtual memory",id:"limiting-a-services-memory-and-virtual-memory",level:3},{value:"Virtual Servers",id:"virtual-servers",level:3},{value:"Linux",id:"linux",level:2},{value:"Limiting a service&#39;s CPU usage",id:"limiting-a-services-cpu-usage-1",level:3},{value:"Limiting a service&#39;s memory usage",id:"limiting-a-services-memory-usage",level:3},{value:"Billing API",id:"billing-api",level:2},{value:"Scripting",id:"scripting",level:2}];function c(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"limit-service-cpu-and-memory-usage",children:"Limit Service CPU and Memory Usage"})}),"\n",(0,t.jsx)(i.admonition,{type:"danger",children:(0,t.jsxs)(i.p,{children:["If you updated your Windows server to TCAdmin ",(0,t.jsx)(i.strong,{children:"2.0.142"})," you must reboot before you can apply memory and CPU limits."]})}),"\n",(0,t.jsx)(i.h2,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(i.h3,{id:"limiting-a-services-cpu-usage",children:"Limiting a service's CPU usage"}),"\n",(0,t.jsx)(i.p,{children:"The maximum value for CPU limit is 100%. CPU limit is affected by the number of cores assigned to the service or virtual server. For example if the service has 1 core assigned and limit is set to 50% the actual limit is 50% of 1 core."}),"\n",(0,t.jsx)(i.p,{children:"To set the CPU limit go to the game server's service settings, set the value of CPU limit and save. The CPU limit is applied immediately. The service does not need to be restarted."}),"\n",(0,t.jsx)(i.h3,{id:"limiting-a-services-memory-and-virtual-memory",children:"Limiting a service's memory and virtual memory"}),"\n",(0,t.jsx)(i.admonition,{title:"Important notes",type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"If you limit a service's memory it will use more virtual memory. This can increase your server's disk activity."}),"\n",(0,t.jsx)(i.li,{children:"If you set the virtual memory limit too low the service might crash while starting up or it might crash later if it requires more memory than allowed."}),"\n",(0,t.jsx)(i.li,{children:"If you set the virtual memory limit and the service is currently using more than allowed"}),"\n"]})}),"\n",(0,t.jsx)(i.p,{children:"To set the memory or virtual memory limit go to the game server's service settings, set the values and save. The memory and virtual memory limit is applied immediately. The service does not need to be restarted."}),"\n",(0,t.jsx)(i.h3,{id:"virtual-servers",children:"Virtual Servers"}),"\n",(0,t.jsx)(i.admonition,{title:"Important notes",type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"When a service belongs to a virtual server the memory limit in service settings can't be set higher than the memory assigned to the virtual server."}),"\n",(0,t.jsx)(i.li,{children:"A single process can't use more memory than what is assigned in the virtual server's settings even if there is no limit assigned in service settings."}),"\n",(0,t.jsx)(i.li,{children:"CPU limit of a service is affected by the number of cores assigned to the service or virtual server. For example if the parent server has 16 cores, the virtual server has 4 cores and CPU limit of a service is set to 50% it will use up to 2 cores. In this case if you change the virtual server's cores the service needs to be restarted for the change to take effect."}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"linux",children:"Linux"}),"\n",(0,t.jsx)(i.h3,{id:"limiting-a-services-cpu-usage-1",children:"Limiting a service's CPU usage"}),"\n",(0,t.jsx)(i.p,{children:"Each core is 100%. The maximum value is 100 multiplied by the number of cores. For example 200% means 2 full cores."}),"\n",(0,t.jsx)(i.p,{children:"To set the CPU limit go to the game server's service settings, set the value of CPU limit and save. The CPU limit is applied after the service is restarted."}),"\n",(0,t.jsx)(i.h3,{id:"limiting-a-services-memory-usage",children:"Limiting a service's memory usage"}),"\n",(0,t.jsx)(i.p,{children:"This feature is supported starting in TCAdmin version 2.0.161 and greater."}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"CentOS 7.9 does not support setting memory/virtual memory. If the game server crashes when setting memory or virtual memory set the limit to 0."})}),"\n",(0,t.jsx)(i.h2,{id:"billing-api",children:"Billing API"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["To limit the service's CPU configure your module to send a value for ",(0,t.jsx)(i.code,{children:"game_cpu"})]}),"\n",(0,t.jsxs)(i.li,{children:["To limit the service's memory configure your module to send a value for ",(0,t.jsx)(i.code,{children:"game_memory"})," or ",(0,t.jsx)(i.code,{children:"game_virtual_memory"})]}),"\n",(0,t.jsx)(i.li,{children:"The billing api supports setting these values when creating a new service and when updating the settings."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"scripting",children:"Scripting"}),"\n",(0,t.jsx)(i.p,{children:"This script sets the memory limit to 2GB, virtual memory to 10GB and CPU limit to 75%."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"ThisService.MemoryLimitMB = 2048\nThis service.VirtualMemoryLimitMB = 10240\nThisService.CpuLimit = 75\nThisService.Save()\nThisService.Configure()\n"})})]})}function d(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>a});var r=s(6540);const t={},n=r.createContext(t);function o(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);