"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[3592],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=n,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2918:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_label:"Query Monitoring",sidebar_position:15},o="Query Monitoring",l={unversionedId:"using-tcadmin/game-voice-configuration/query-monitoring",id:"using-tcadmin/game-voice-configuration/query-monitoring",title:"Query Monitoring",description:"The built-in game monitor continuously queries the services to make sure they are running perfectly and checks for configuration changes that are not allowed.",source:"@site/docs/using-tcadmin/game-voice-configuration/query-monitoring.mdx",sourceDirName:"using-tcadmin/game-voice-configuration",slug:"/using-tcadmin/game-voice-configuration/query-monitoring",permalink:"/using-tcadmin/game-voice-configuration/query-monitoring",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/game-voice-configuration/query-monitoring.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_label:"Query Monitoring",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"File System Permissions",permalink:"/using-tcadmin/game-voice-configuration/file-system-permissions"},next:{title:"Variables",permalink:"/using-tcadmin/game-voice-configuration/variables"}},s={},u=[{value:"Query Interval",id:"query-interval",level:2},{value:"Query Failure Detection",id:"query-failure-detection",level:2},{value:"Slot Detection",id:"slot-detection",level:2},{value:"Private Detection",id:"private-detection",level:2},{value:"Rule Detection",id:"rule-detection",level:2},{value:"Rule Detection Examples",id:"rule-detection-examples",level:3},{value:"Server Variables for Resource Usage",id:"server-variables-for-resource-usage",level:2},{value:"Stats",id:"stats",level:2}],c={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"query-monitoring"},"Query Monitoring"),(0,n.kt)("p",null,"The built-in game monitor continuously queries the services to make sure they are running perfectly and checks for configuration changes that are not allowed."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Enable the game monitor service")," must be checked in the Game & Voice Hosting tab in each of your server settings. ",(0,n.kt)("strong",{parentName:"p"},"This is enabled by default.")),(0,n.kt)("h2",{id:"query-interval"},"Query Interval"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Query Interval")," - The seconds between queries. The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"5 minutes")," ",(0,n.kt)("inlineCode",{parentName:"li"},"(300 seconds)"),". Set to ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Query Interval")," Retry - If the first query fails, the seconds to wait before trying again. The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"30")," seconds. If the query fails the second time the configured actions are taken. Set to ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable.")),(0,n.kt)("h2",{id:"query-failure-detection"},"Query Failure Detection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Enable query failure detection")," - Enables actions to be taken when the query does not return any results."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Failure Actions")," - The actions to take when the query fails."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Max Failures")," - The maximum number of restarts when the query does not respond. Set to ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Max Failure Actions")," - The actions to take when the query failures reaches the maximum allowed.")),(0,n.kt)("h2",{id:"slot-detection"},"Slot Detection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Enable slot detection")," - Enables actions to be taken when the slots have been increased."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Additional Allowed")," - The number of additional slots that are allowed for this game. For example this can be used to allow an additional slot for HLTV."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Actions")," - The actions to take when the slots have been increased.")),(0,n.kt)("h2",{id:"private-detection"},"Private Detection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Enable private detection")," - Enables actions to be taken when the service's branding has been removed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Actions")," - The actions to take when the service's branding has been removed.")),(0,n.kt)("h2",{id:"rule-detection"},"Rule Detection"),(0,n.kt)("p",null,"You can get a list of rules available for a game type by querying a game server using Game Query Tool at ",(0,n.kt)("inlineCode",{parentName:"p"},"System")," (on the left hand navigation) > ",(0,n.kt)("inlineCode",{parentName:"p"},"settings")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Game Query Tool")," or by clicking on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Current Activity icon")," of an existing service. The selected actions will be taken if the rule matches the specified condition."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Enable rule detection")," - Enables actions to be taken when the game service's rules have changed.")),(0,n.kt)("h3",{id:"rule-detection-examples"},"Rule Detection Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Restart the game server if it is using more than 1GB total."',title:'"Restart',the:!0,game:!0,server:!0,if:!0,it:!0,is:!0,using:!0,more:!0,than:!0,"1GB":!0,'total."':!0},"Server Variable: Service.CurrentMemory\nOperator: >=\nValue: 1024\nActions: [] StopService  [x] RestartService  [ ] DisableService  [ ] EmailUser\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Stop the game server if bot_quota is higher than 5."',title:'"Stop',the:!0,game:!0,server:!0,if:!0,bot_quota:!0,is:!0,higher:!0,than:!0,'5."':!0},"Server Variable: bot_quota\nOperator: >\nValue: 5\nActions: [x] StopService  [ ] RestartService  [ ] DisableService  [ ] EmailUser\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Email admins if the game server is using more than 50% CPU."',title:'"Email',admins:!0,if:!0,the:!0,game:!0,server:!0,is:!0,using:!0,more:!0,than:!0,"50%":!0,'CPU."':!0},"Server Variable: Service.CurrentCpu\nOperator: >\nValue: 50\nActions: [] StopService  [] RestartService  [ ] DisableService  [ ] EmailUser\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Stops the game server if it is using 15% more memory than assigned. This example assumes you have a variable named Xmx with value specified in megabytes. An Iron Python script is used to get the value of the Xmx variable and increase it by 15%."',title:'"Stops',the:!0,game:!0,server:!0,if:!0,it:!0,is:!0,using:!0,"15%":!0,more:!0,memory:!0,than:!0,"assigned.":!0,This:!0,example:!0,assumes:!0,you:!0,have:!0,a:!0,variable:!0,named:!0,Xmx:!0,with:!0,value:!0,specified:!0,in:!0,"megabytes.":!0,An:!0,Iron:!0,Python:!0,script:!0,used:!0,to:!0,get:!0,of:!0,and:!0,increase:!0,by:!0,'15%."':!0},'Server Variable: Service.CurrentMemory\nOperator: >=\nValue: $ipy<%=float(ThisService.Variables["Xmx"]) * 1.15; %>\nActions: [x] StopService  [] RestartService  [ ] DisableService  [ ] EmailUser\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Stops the game server if it is using more than 250MB for each connected player. If no players are connected it calculates the maximum memory using the assigned slots. An Iron Python script is used to calculate the maximum allowed memory."',title:'"Stops',the:!0,game:!0,server:!0,if:!0,it:!0,is:!0,using:!0,more:!0,than:!0,"250MB":!0,for:!0,each:!0,connected:!0,"player.":!0,If:!0,no:!0,players:!0,are:!0,calculates:!0,maximum:!0,memory:!0,assigned:!0,"slots.":!0,An:!0,Iron:!0,Python:!0,script:!0,used:!0,to:!0,calculate:!0,allowed:!0,'memory."':!0},"Server Variable: Service.CurrentMemory\nOperator: >=\nValue: $ipy<%=(QueryResults.NumPlayers if QueryResults.NumPlayers > 0 else ThisService.Slots) * 250; %>\nActions: [x] StopService  [] RestartService  [ ] DisableService  [ ] EmailUser\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Stops the game server if it is using more than 250MB for each assigned slot. An Iron Python script is used to calculate the maximum allowed memory."',title:'"Stops',the:!0,game:!0,server:!0,if:!0,it:!0,is:!0,using:!0,more:!0,than:!0,"250MB":!0,for:!0,each:!0,assigned:!0,"slot.":!0,An:!0,Iron:!0,Python:!0,script:!0,used:!0,to:!0,calculate:!0,maximum:!0,allowed:!0,'memory."':!0},"Server Variable: Service.CurrentMemory\nOperator: >=\nValue: $ipy<%=ThisService.Slots * 250; %>\nActions: [x] StopService  [] RestartService  [ ] DisableService  [ ] EmailUser\n")),(0,n.kt)("h2",{id:"server-variables-for-resource-usage"},"Server Variables for Resource Usage"),(0,n.kt)("p",null,"The following server variables are available to monitor/restrict high resource usage on game/voice services:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Service.CurrentCpu")," - The CPU usage of the service's process and sub processes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Service.CurrentMemoryBytes")," - The memory usage ",(0,n.kt)("inlineCode",{parentName:"li"},"(in bytes)")," of the service's process and sub processes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Service.CurrentMemory")," - The memory usage ",(0,n.kt)("inlineCode",{parentName:"li"},"(in megabytes)")," of the service's process and sub processes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Service.CurrentBandwidthBytes")," - The bandwidth usage ",(0,n.kt)("inlineCode",{parentName:"li"},"(in bytes/per second)")," of the service's process and sub processes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Service.CurrentBandwidth")," - The bandwidth usage ",(0,n.kt)("inlineCode",{parentName:"li"},"(in megabytes/per second)")," of the service's process and sub processes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Service.MaxPlayers")," - The maximum number of players according to the query results."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Service.NumPlayers")," - The number of players connected according to the query results.")),(0,n.kt)("h2",{id:"stats"},"Stats"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Enable live stats")," - Saves the last query results to tc_game_service_live_stats. This allows custom coding on your website that shows the list of active services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Enable activity and resource usage stats")," - Enables the collection of player activity and resource usage for this game."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Collection Interval")," - The interval in seconds at which the stats are collected. The default is 15 minutes (900 seconds). This value must be equal or greater than 'Query Interval'.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The lower the value, the more space and CPU time it will take to store this information."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Max Detailed Days")," - The maximum number of days that the detailed data is kept in the database. The default is 7 days.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Records older than the specified number of days will be converted to historical information. Set to 0 to never convert to historical stats."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Max Historical Days")," - The maximum number of days that the historical data is kept in the database.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The default is 30 days. Historical data uses less disk space, only 1 database record per service per hour. Set to 0 to never delete historical stats.")))))}d.isMDXComponent=!0}}]);