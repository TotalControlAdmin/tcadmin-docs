"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[6013],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),v=n,p=d["".concat(l,".").concat(v)]||d[v]||m[v]||a;return r?i.createElement(p,s(s({ref:t},c),{},{components:r})):i.createElement(p,s({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var u=2;u<a;u++)s[u]=r[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}v.displayName="MDXCreateElement"},232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:6,sidebar_label:"Virtual Servers"},s="Virtual Servers",o={unversionedId:"using-tcadmin/virtual-servers",id:"using-tcadmin/virtual-servers",title:"Virtual Servers",description:"TCAdmin allows you to split your server's resources into virtual servers. This feature does not use virtualization software. Basically you can create a virtual server with 1 or more IPs, cores, x amount of ram and x amount of disk space. In TCAdmin manages the virtual server's disk space and CPU usage. In the control panel it will look like a normal server. You can assign this virtual server to a user. The user does not get root/administrator access to his virtual server.",source:"@site/docs/using-tcadmin/virtual-servers.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/virtual-servers",permalink:"/using-tcadmin/virtual-servers",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/virtual-servers.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Virtual Servers"},sidebar:"tutorialSidebar",previous:{title:"Lets Encrypt",permalink:"/using-tcadmin/server-management/lets-encrypt"},next:{title:"Mail Server Configuration",permalink:"/using-tcadmin/mail-server-config"}},l={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"Possible Implementations",id:"possible-implementations",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Recommendations",id:"recommendations",level:2},{value:"Licensing",id:"licensing",level:2}],c={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"virtual-servers"},"Virtual Servers"),(0,n.kt)("p",null,"TCAdmin allows you to split your server's resources into virtual servers. This feature does not use virtualization software. Basically you can create a virtual server with 1 or more IPs, cores, x amount of ram and x amount of disk space. In TCAdmin manages the virtual server's disk space and CPU usage. In the control panel it will look like a normal server. You can assign this virtual server to a user. The user does not get ",(0,n.kt)("inlineCode",{parentName:"p"},"root/administrator")," access to his virtual server."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("h3",{id:"windows"},"Windows"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enable quotas on the drive where the services will be created. The configuration shown in the screenshot is recommended. This is only required if you want to limit a virtual server's disk space.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WindowsQuotas",src:r(8136).Z,width:"363",height:"519"})),(0,n.kt)("h3",{id:"linux"},"Linux"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#"},"Linux Quotas")," must be enabled on the file systems where virtual server's space will be located. This is only required if you want to limit a virtual server's disk space."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#"},"schedutils")," must be installed to set process affinity.")),(0,n.kt)("h2",{id:"possible-implementations"},"Possible Implementations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Sell dedicated cores and memory")," - Assign a virtual server to a user or reseller so he can create game servers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Distribute your game servers across different drives.")," - If you have 3 hard drives you can create 2 additional virtual servers with unlimited memory and disk space. Set the user files path of each virtual server to different drives."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Configure game servers on specific IPs.")," - If you want a game type to only use a specific IP you can create a virtual server with that IP. In the virtual server's game and voice settings only allow that game to be created. In the main server's settings allow all games except that one. In the main server's IP settings disable game and voice servers for the virtual server's IP")),(0,n.kt)("h2",{id:"limitations"},"Limitations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Windows Service Manager")," - On Windows, the service manager must always run in service mode. If you start a service that is assigned to a virtual server while the service manager is running in console mode it will be stopped after a few seconds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Games and Services")," - The game must be able to run as a guest (non-root) user. Each virtual server has its own user. The game servers run as that user, overriding any setting in the game's Run As tab.\nThe game server must be able to run with affinity set to a single CPU. For example MW3 is not compatible with the virtual server feature. It has a CPU check at start up. It will show an error if it detects there is not enough CPU power."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"IP Usage")," - If each virtual server has a different IP the game must support running on a specific IP instead of binding to all IPs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CPU usage shown in the System Resources Widget")," - There are 2 different ways CPU usage is displayed for a virtual server.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If the virtual server only has 1 core it will show CPU usage of all the services in that virtual server."),(0,n.kt)("li",{parentName:"ul"},"If the virtual server has 2 or more cores it will display the actual CPU usage of those cores. If other processes are running on that core their CPU usage will be visible even if it does not belong to that virtual server.")))),(0,n.kt)("p",null,"In other words, you can only oversell virtual servers that have one core assigned."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Memory Usage")," - Services running in the virtual server may use more memory than assigned. Memory limits are enforced by the system monitor depending on your configuration. Configure the system monitor in the main server's settings."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Linux Disk Usage")," - The quota package must be installed and configured so TCAdmin can restrict disk usage according to the virtual server's configuration. For more information read your distro's documentation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Service Affinity")," - It is up to you to set the affinity of existing game servers that run on the main server so they don't use cores assigned to virtual servers. You can set the default affinity of new services in the main server's Game and Voice Settings tab."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SSH/Remote Desktop Access")," - The virtual server created by TCAdmin is not a standard VPS. TCAdmin manages the main server's resources so it looks like more than one server in the control panel. Your client can't have access to SSH or remote desktop.")),(0,n.kt)("h2",{id:"recommendations"},"Recommendations"),(0,n.kt)("p",null,"If you plan on selling dedicated cores, It is recommended that you assign TCAdmin to CPU0 and sell the others. That way TCAdmin will not use the other CPUs. The monitor affinity can be configured in the main server's settings."),(0,n.kt)("h2",{id:"licensing"},"Licensing"),(0,n.kt)("p",null,"Virtual servers do not require additional licenses. You only need 1 license for the parent server."),(0,n.kt)("p",null,"Enterprise licenses are limited to 10 user assigned servers or dedicated reseller packages. If one or more virtual server are assigned to a user the parent server will be counted towards your limit only once. To increase the limit add a leased or purchased remote to your master license."))}m.isMDXComponent=!0},8136:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/WindowsQuotas-d48dd2fb2bedfd2a14ec5df169faa7ae.png"}}]);