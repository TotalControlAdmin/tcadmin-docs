"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[5630],{7103:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>t,toc:()=>d});var r=a(4848),i=a(8453);const n={sidebar_position:19,sidebar_label:"Reseller Features"},l="Reseller Features",t={id:"using-tcadmin/reseller-features",title:"Reseller Features",description:"Administrators can create reseller packages. These packages allows users to create their own game, voice and Teamspeak services and assign them to their own users.",source:"@site/docs/using-tcadmin/reseller-features.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/reseller-features",permalink:"/using-tcadmin/reseller-features",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/reseller-features.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:19,frontMatter:{sidebar_position:19,sidebar_label:"Reseller Features"},sidebar:"tutorialSidebar",previous:{title:"Service Browser",permalink:"/using-tcadmin/service-browser"},next:{title:"Task Scheduler",permalink:"/using-tcadmin/task-scheduler"}},c={},d=[{value:"Billing API Support for Administrators",id:"billing-api-support-for-administrators",level:2},{value:"Billing API Support for Resellers",id:"billing-api-support-for-resellers",level:2},{value:"Reseller Package Management",id:"reseller-package-management",level:2},{value:"Create &amp; Update Packages",id:"create--update-packages",level:3},{value:"Package Information",id:"package-information",level:3},{value:"Game &amp; Voice Settings",id:"game--voice-settings",level:3},{value:"Assign a Package",id:"assign-a-package",level:3},{value:"View Package Usage",id:"view-package-usage",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"reseller-features",children:"Reseller Features"})}),"\n",(0,r.jsx)(s.p,{children:"Administrators can create reseller packages. These packages allows users to create their own game, voice and Teamspeak services and assign them to their own users."}),"\n",(0,r.jsx)(s.p,{children:"You can't have a reseller with both packages and assigned servers or Teamspeak servers. For example if a reseller has a package for creating game servers and you assign him a Teamspeak server it can cause unexpected results."}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"The billing API for resellers only supports packages. It does not support creating services on assigned servers or Teamspeak servers."})}),"\n",(0,r.jsx)(s.h2,{id:"billing-api-support-for-administrators",children:"Billing API Support for Administrators"}),"\n",(0,r.jsx)(s.p,{children:"Administrators can automate reseller packages with the billing API. Only 2 parameters are required:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"role_id"})," - The id of the reseller role that will be assigned to new resellers."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"package_id"})," - The id of the reseller package that will be assigned to the reseller account."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["If you use the ",(0,r.jsx)(s.code,{children:"tcadmin2_advanced"})," module for WHMCS create a copy of default_values.php and set the values of ",(0,r.jsx)(s.code,{children:"role_id"})," and ",(0,r.jsx)(s.code,{children:"package_id"})," as required. When you configure your reseller product in WHMCS, set the value of Config File to the new one that you created."]}),"\n",(0,r.jsxs)(s.p,{children:["For more information on using the WHMCS module read the ",(0,r.jsx)(s.a,{href:"/billing-api/tcadmin2-advanced-module-for-whmcs",children:"tcadmin2_advanced documentation"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"billing-api-support-for-resellers",children:"Billing API Support for Resellers"}),"\n",(0,r.jsxs)(s.p,{children:["Resellers can automate their own services using the billing api the same way and administrator would. For more information on using the WHMCS module read the ",(0,r.jsx)(s.a,{href:"/billing-api/tcadmin2-advanced-module-for-whmcs",children:"tcadmin2_advanced documentation"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"reseller-package-management",children:"Reseller Package Management"}),"\n",(0,r.jsx)(s.h3,{id:"create--update-packages",children:"Create & Update Packages"}),"\n",(0,r.jsxs)(s.p,{children:["Packages are created and updated in ",(0,r.jsx)(s.code,{children:"System"})," (on the left-hand navigation) > ",(0,r.jsx)(s.code,{children:"General Settings"})," > ",(0,r.jsx)(s.code,{children:"Reseller Packages"}),". To create a new one, click on New. To edit an existing package, select it from the list."]}),"\n",(0,r.jsx)(s.h3,{id:"package-information",children:"Package Information"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Name"})," - The name used to identify this package."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Mail"})," Template - The mail template sent to the user when the package is assigned."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Enabled"})," - Enable this package to make it available."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"game--voice-settings",children:"Game & Voice Settings"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Game Servers"})," - Select the game servers that are available in this package."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Voice Servers"})," - Select the voice servers that are available in this package."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Server Selection"}),": - The method used to determine where the game and voice server will be installed.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Server with less slots"}),": The server with the least number of slots will be used."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Round robin"}),": The server with the longest time since the last game or voice server installation will be used."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"CPU load balancing"}),": The server with the lowest average CPU usage will be used."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Servers"})," - Select the servers where the game and voice servers will be created. If you select ",(0,r.jsx)(s.code,{children:"[All Servers]"})," new servers will be selected automatically. Servers that are assigned to a user will not be used even if they are selected."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Enable Teamspeak reselling"})," - Enable the reselling of Teamspeak voice servers in this package."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Teamspeak Selection"})," - The method used to determine where the Teamspeak voice server will be installed.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"server with less slots"}),": The Teamspeak server with the least number of slots will be used"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Round robin"}),": The Teamspeak server with the longest time since the last Teamspeak voice server installation will be used.\n",(0,r.jsx)(s.code,{children:"Teamspeak Servers"})," - Select the Teamspeak servers where the virtual servers will be created. If you select ",(0,r.jsx)(s.code,{children:"[All Teamspeak Servers]"})," new Teamspeak servers will be selected automatically. Teamspeak servers that are assigned to a user will not be used even if they are selected."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Slots Type"})," - Select how the slots will be assigned to this package.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Shared slots"}),": The assigned slots are shared among all game and voice servers including Teamspeak."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Separate game and voice slots"}),": Assign separate slots for game and voice servers. Teamspeak voice servers use regular voice slots."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"All separate slots"}),": Assign separate slots for game, voice and Teamspeak servers."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"assign-a-package",children:"Assign a Package"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"First create a user"})," and assign it a reseller role."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Select the Assigned Packages icon"})," and click on New."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Select the package type"}),'. Optionally you can assign IPs to a user and in the Game Hosting Settings tab check "Use assigned IPs for game server" or "Use assigned IPs for voice servers" to use those IPs for the services.']}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"view-package-usage",children:"View Package Usage"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Go to ",(0,r.jsx)(s.code,{children:"User Management"})," > ",(0,r.jsx)(s.code,{children:"Users"})," and select the reseller."]}),"\n",(0,r.jsx)(s.li,{children:"Click on Assigned packages and select the package."}),"\n",(0,r.jsx)(s.li,{children:"Click on the Summary tab. It will display the slots used for each slot type."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>t});var r=a(6540);const i={},n=r.createContext(i);function l(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);