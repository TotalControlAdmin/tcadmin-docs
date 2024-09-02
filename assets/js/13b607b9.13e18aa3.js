"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[5995],{2722:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=s(4848),i=s(8453);const a={sidebar_position:20,sidebar_label:"Task Scheduler"},r="Task Scheduler",c={id:"using-tcadmin/task-scheduler",title:"Task Scheduler",description:"The Task Scheduler is a component that enables the scheduling of program or script launches at predetermined times. Whenever a service is created, reinstalled, or deleted, an associated task is automatically generated.",source:"@site/docs/using-tcadmin/task-scheduler.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/task-scheduler",permalink:"/using-tcadmin/task-scheduler",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/task-scheduler.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Task Scheduler"},sidebar:"tutorialSidebar",previous:{title:"Reseller Features",permalink:"/using-tcadmin/reseller-features"},next:{title:"Support System",permalink:"/using-tcadmin/support-system"}},d={},l=[{value:"Recurring Tasks",id:"recurring-tasks",level:2},{value:"Schedule",id:"schedule",level:3},{value:"Actions",id:"actions",level:3},{value:"Action Chaining",id:"action-chaining",level:3}];function o(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"task-scheduler",children:"Task Scheduler"})}),"\n",(0,n.jsx)(t.p,{children:"The Task Scheduler is a component that enables the scheduling of program or script launches at predetermined times. Whenever a service is created, reinstalled, or deleted, an associated task is automatically generated."}),"\n",(0,n.jsx)(t.p,{children:"These tasks can be individualized to run once or may have already been executed. To manually initiate a task, simply select it and click on the Start button. If a previously failed task is started, it will resume from the point where the error occurred."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ScheduledTasks",src:s(7896).A+"",width:"1641",height:"921"})}),"\n",(0,n.jsx)(t.h2,{id:"recurring-tasks",children:"Recurring Tasks"}),"\n",(0,n.jsx)(t.p,{children:"These tasks are user-defined and designed to run either once or multiple times. When a recurring task is created, it automatically generates a scheduled task that executes at the specified time. Upon executing the scheduled task, a new scheduled task is created based on the recurrence pattern defined for the original task."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"RecurringTasks",src:s(9156).A+"",width:"1657",height:"920"})}),"\n",(0,n.jsx)(t.h3,{id:"schedule",children:"Schedule"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"One Time"})," - The task will only run once at the specified time. If the task has already executed you can schedule it again simply by updating the start time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Daily"})," - The task will run once a day at the specified time. It can also be configured to run every other day, every 3 days, etc by using the ",(0,n.jsx)(t.code,{children:"recur every x days"})," field."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Weekly"})," - The task will run every week on the specified days and time. It can also be configured to run every other week, every 3 weeks, etc by using the ",(0,n.jsx)(t.code,{children:"recur every x weeks"})," field."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Monthly"})," - The task will run on the selected months on the specified days and time."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"actions",children:"Actions"}),"\n",(0,n.jsx)(t.p,{children:"Each recurring task can have one or more actions that execute on the specified server. If one action fails the task execution will be cancelled and set to error status."}),"\n",(0,n.jsx)(t.h3,{id:"action-chaining",children:"Action Chaining"}),"\n",(0,n.jsx)(t.p,{children:"Some actions can work with the results from previous actions."}),"\n",(0,n.jsxs)(t.admonition,{title:"example",type:"info",children:[(0,n.jsx)(t.p,{children:"you can configure a task that does the following:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Backup the database"}),"\n",(0,n.jsx)(t.li,{children:"Compress the database backup file"}),"\n",(0,n.jsx)(t.li,{children:"Upload the compressed file to an FTP server"}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},9156:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/RecurringTasks-c9ac6de08972b3394efeec8bf0bda40d.png"},7896:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ScheduledTasks-08b7ec5065f751cb8987be2525d6b4ae.png"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(6540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);