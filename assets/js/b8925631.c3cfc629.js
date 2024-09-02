"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[649],{3339:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=s(4848),r=s(8453);const t={sidebar_label:"Query Monitoring",sidebar_position:15},a="Query Monitoring",o={id:"using-tcadmin/game-voice-configuration/query-monitoring",title:"Query Monitoring",description:"The built-in game monitor continuously queries the services to make sure they are running perfectly and checks for configuration changes that are not allowed.",source:"@site/docs/using-tcadmin/game-voice-configuration/query-monitoring.mdx",sourceDirName:"using-tcadmin/game-voice-configuration",slug:"/using-tcadmin/game-voice-configuration/query-monitoring",permalink:"/using-tcadmin/game-voice-configuration/query-monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/game-voice-configuration/query-monitoring.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:15,frontMatter:{sidebar_label:"Query Monitoring",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"File System Permissions",permalink:"/using-tcadmin/game-voice-configuration/file-system-permissions"},next:{title:"Variables",permalink:"/using-tcadmin/game-voice-configuration/variables"}},l={},c=[{value:"Query Interval",id:"query-interval",level:2},{value:"Query Failure Detection",id:"query-failure-detection",level:2},{value:"Slot Detection",id:"slot-detection",level:2},{value:"Private Detection",id:"private-detection",level:2},{value:"Rule Detection",id:"rule-detection",level:2},{value:"Rule Detection Examples",id:"rule-detection-examples",level:3},{value:"Server Variables for Resource Usage",id:"server-variables-for-resource-usage",level:2},{value:"Stats",id:"stats",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"query-monitoring",children:"Query Monitoring"})}),"\n",(0,n.jsx)(i.p,{children:"The built-in game monitor continuously queries the services to make sure they are running perfectly and checks for configuration changes that are not allowed."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Enable the game monitor service"})," must be checked in the Game & Voice Hosting tab in each of your server settings. ",(0,n.jsx)(i.strong,{children:"This is enabled by default."})]}),"\n",(0,n.jsx)(i.h2,{id:"query-interval",children:"Query Interval"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Query Interval"})," - The seconds between queries. The default is ",(0,n.jsx)(i.code,{children:"5 minutes"})," ",(0,n.jsx)(i.code,{children:"(300 seconds)"}),". Set to ",(0,n.jsx)(i.code,{children:"0"})," to disable."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Query Interval"})," Retry - If the first query fails, the seconds to wait before trying again. The default is ",(0,n.jsx)(i.code,{children:"30"})," seconds. If the query fails the second time the configured actions are taken. Set to ",(0,n.jsx)(i.code,{children:"0"})," to disable."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"query-failure-detection",children:"Query Failure Detection"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Enable query failure detection"})," - Enables actions to be taken when the query does not return any results."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Failure Actions"})," - The actions to take when the query fails."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Max Failures"})," - The maximum number of restarts when the query does not respond. Set to ",(0,n.jsx)(i.code,{children:"0"})," to disable."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Max Failure Actions"})," - The actions to take when the query failures reaches the maximum allowed."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"slot-detection",children:"Slot Detection"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Enable slot detection"})," - Enables actions to be taken when the slots have been increased."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Additional Allowed"})," - The number of additional slots that are allowed for this game. For example this can be used to allow an additional slot for HLTV."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Actions"})," - The actions to take when the slots have been increased."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"private-detection",children:"Private Detection"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Enable private detection"})," - Enables actions to be taken when the service's branding has been removed."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Actions"})," - The actions to take when the service's branding has been removed."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"rule-detection",children:"Rule Detection"}),"\n",(0,n.jsxs)(i.p,{children:["You can get a list of rules available for a game type by querying a game server using Game Query Tool at ",(0,n.jsx)(i.code,{children:"System"})," (on the left hand navigation) > ",(0,n.jsx)(i.code,{children:"settings"})," > ",(0,n.jsx)(i.code,{children:"Game Query Tool"})," or by clicking on the ",(0,n.jsx)(i.code,{children:"Current Activity icon"})," of an existing service. The selected actions will be taken if the rule matches the specified condition."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Enable rule detection"})," - Enables actions to be taken when the game service's rules have changed."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"rule-detection-examples",children:"Rule Detection Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title="Restart the game server if it is using more than 1GB total."',children:"Server Variable: Service.CurrentMemory\nOperator: >=\nValue: 1024\nActions: [] StopService  [x] RestartService  [ ] DisableService  [ ] EmailUser\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title="Stop the game server if bot_quota is higher than 5."',children:"Server Variable: bot_quota\nOperator: >\nValue: 5\nActions: [x] StopService  [ ] RestartService  [ ] DisableService  [ ] EmailUser\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title="Email admins if the game server is using more than 50% CPU."',children:"Server Variable: Service.CurrentCpu\nOperator: >\nValue: 50\nActions: [] StopService  [] RestartService  [ ] DisableService  [ ] EmailUser\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-py",metastring:'title="Stops the game server if it is using 15% more memory than assigned. This example assumes you have a variable named Xmx with value specified in megabytes. An Iron Python script is used to get the value of the Xmx variable and increase it by 15%."',children:'Server Variable: Service.CurrentMemory\nOperator: >=\nValue: $ipy<%=float(ThisService.Variables["Xmx"]) * 1.15; %>\nActions: [x] StopService  [] RestartService  [ ] DisableService  [ ] EmailUser\n'})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-py",metastring:'title="Stops the game server if it is using more than 250MB for each connected player. If no players are connected it calculates the maximum memory using the assigned slots. An Iron Python script is used to calculate the maximum allowed memory."',children:"Server Variable: Service.CurrentMemory\nOperator: >=\nValue: $ipy<%=(QueryResults.NumPlayers if QueryResults.NumPlayers > 0 else ThisService.Slots) * 250; %>\nActions: [x] StopService  [] RestartService  [ ] DisableService  [ ] EmailUser\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-py",metastring:'title="Stops the game server if it is using more than 250MB for each assigned slot. An Iron Python script is used to calculate the maximum allowed memory."',children:"Server Variable: Service.CurrentMemory\nOperator: >=\nValue: $ipy<%=ThisService.Slots * 250; %>\nActions: [x] StopService  [] RestartService  [ ] DisableService  [ ] EmailUser\n"})}),"\n",(0,n.jsx)(i.h2,{id:"server-variables-for-resource-usage",children:"Server Variables for Resource Usage"}),"\n",(0,n.jsx)(i.p,{children:"The following server variables are available to monitor/restrict high resource usage on game/voice services:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Service.CurrentCpu"})," - The CPU usage of the service's process and sub processes."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Service.CurrentMemoryBytes"})," - The memory usage ",(0,n.jsx)(i.code,{children:"(in bytes)"})," of the service's process and sub processes."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Service.CurrentMemory"})," - The memory usage ",(0,n.jsx)(i.code,{children:"(in megabytes)"})," of the service's process and sub processes."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Service.CurrentBandwidthBytes"})," - The bandwidth usage ",(0,n.jsx)(i.code,{children:"(in bytes/per second)"})," of the service's process and sub processes."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Service.CurrentBandwidth"})," - The bandwidth usage ",(0,n.jsx)(i.code,{children:"(in megabytes/per second)"})," of the service's process and sub processes."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Service.MaxPlayers"})," - The maximum number of players according to the query results."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Service.NumPlayers"})," - The number of players connected according to the query results."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"stats",children:"Stats"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Enable live stats"})," - Saves the last query results to tc_game_service_live_stats. This allows custom coding on your website that shows the list of active services."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Enable activity and resource usage stats"})," - Enables the collection of player activity and resource usage for this game."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Collection Interval"})," - The interval in seconds at which the stats are collected. The default is 15 minutes (900 seconds). This value must be equal or greater than 'Query Interval'.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The lower the value, the more space and CPU time it will take to store this information."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Max Detailed Days"})," - The maximum number of days that the detailed data is kept in the database. The default is 7 days.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Records older than the specified number of days will be converted to historical information. Set to 0 to never convert to historical stats."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Max Historical Days"})," - The maximum number of days that the historical data is kept in the database.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The default is 30 days. Historical data uses less disk space, only 1 database record per service per hour. Set to 0 to never delete historical stats."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>a,x:()=>o});var n=s(6540);const r={},t=n.createContext(r);function a(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);