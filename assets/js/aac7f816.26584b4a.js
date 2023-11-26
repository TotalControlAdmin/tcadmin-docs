"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[4102],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,b=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return n?o.createElement(b,l(l({ref:t},c),{},{components:n})):o.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,sidebar_label:"Troubleshooting"},l="Troubleshooting",a={unversionedId:"billing-api/troubleshooting",id:"billing-api/troubleshooting",title:"Troubleshooting",description:"Error couldn't connect to host Url//x.x.x.x:8880/billingapi.aspx",source:"@site/docs/billing-api/troubleshooting.mdx",sourceDirName:"billing-api",slug:"/billing-api/troubleshooting",permalink:"/billing-api/troubleshooting",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/billing-api/troubleshooting.mdx",tags:[],version:"current",lastUpdatedAt:1701001265,formattedLastUpdatedAt:"Nov 26, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Configure Billing API",permalink:"/billing-api/intro"},next:{title:"TCAdmin2 advanced module for WHMCS",permalink:"/billing-api/tcadmin2-advanced-module-for-whmcs"}},s={},d=[{value:"Error: Curl error: couldn&#39;t connect to host Url: <code>http://x.x.x.x:8880/billingapi.aspx</code>",id:"error-curl-error-couldnt-connect-to-host-url-httpxxxx8880billingapiaspx",level:2},{value:"System.Exception: The billing API is disabled",id:"systemexception-the-billing-api-is-disabled",level:2},{value:"LogsWebBillingApi.LastCommand.log",id:"logswebbillingapilastcommandlog",level:2},{value:"Scheduled Task",id:"scheduled-task",level:2},{value:"Debug Mode",id:"debug-mode",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h2",{id:"error-curl-error-couldnt-connect-to-host-url-httpxxxx8880billingapiaspx"},"Error: Curl error: couldn't connect to host Url: ",(0,r.kt)("inlineCode",{parentName:"h2"},"http://x.x.x.x:8880/billingapi.aspx")),(0,r.kt)("p",null,"This error means the server where WHMCS is hosted has outbound connections to port 8880 blocked. Ask your hosting provider if connections to that IP and port can be unblocked."),(0,r.kt)("h2",{id:"systemexception-the-billing-api-is-disabled"},"System.Exception: The billing API is disabled"),(0,r.kt)("p",null,"You need to ",(0,r.kt)("a",{parentName:"p",href:"/billing-api/intro"},"enable and configure the billing API"),"."),(0,r.kt)("h2",{id:"logswebbillingapilastcommandlog"},"Logs\\Web\\BillingApi.LastCommand.log"),(0,r.kt)("p",null,"This log file contains the latest command parameters sent to the billing api. View the contents to troubleshoot your billing software configuration. Location is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/tcadmin/Logs/Web/BillingApi.LastCommand.log")," on Linux and ",(0,r.kt)("inlineCode",{parentName:"p"},"Program Files\\TCAdmin2\\Logs\\Web\\BillingApi.LastCommand.log")," on Windows."),(0,r.kt)("p",null,"The required values for a game server are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"game_id"),(0,r.kt)("li",{parentName:"ul"},"game_slots"),(0,r.kt)("li",{parentName:"ul"},"game_datacenter")),(0,r.kt)("p",null,"The required values for a voice server are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"voice_id"),(0,r.kt)("li",{parentName:"ul"},"voice_slots"),(0,r.kt)("li",{parentName:"ul"},"voice_datacenter")),(0,r.kt)("h2",{id:"scheduled-task"},"Scheduled Task"),(0,r.kt)("p",null,"When the create and delete commands are accepted by the billing api a scheduled task will be created. If there is an error when executing the task you should be able to view the error message by going to System > General Settings > Scheduled Tasks. Click on the task that was created. If there are too many tasks for a single day select the daily view."),(0,r.kt)("p",null,"If there is an error you don't need to send the command again after fixing it. Simply start the scheduled task and it will continue on the step that caused the error."),(0,r.kt)("p",null,"If the task says Completed but it only created the user it means you are not sending the values to create a game/voice server. Check your billing API log."),(0,r.kt)("h2",{id:"debug-mode"},"Debug Mode"),(0,r.kt)("p",null,"You can view debug messages while the scheduled task is being executed by configuring your master monitor in Debug Mode. After enabling debug mode start the monitor in console mode and start the scheduled task again. This is useful if you get an error similar to \"No Linux servers were found in datacenter 'XX' with the files for XXXX\"."))}p.isMDXComponent=!0}}]);