"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[434],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=o(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:20,sidebar_label:"Task Scheduler"},s="Task Scheduler",l={unversionedId:"using-tcadmin/task-scheduler",id:"using-tcadmin/task-scheduler",title:"Task Scheduler",description:"The Task Scheduler is a component that enables the scheduling of program or script launches at predetermined times. Whenever a service is created, reinstalled, or deleted, an associated task is automatically generated.",source:"@site/docs/using-tcadmin/task-scheduler.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/task-scheduler",permalink:"/using-tcadmin/task-scheduler",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/task-scheduler.mdx",tags:[],version:"current",lastUpdatedAt:1696666871,formattedLastUpdatedAt:"Oct 7, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Task Scheduler"},sidebar:"tutorialSidebar",previous:{title:"Reseller Features",permalink:"/using-tcadmin/reseller-features"},next:{title:"Support System",permalink:"/using-tcadmin/support-system"}},c={},o=[{value:"Recurring Tasks",id:"recurring-tasks",level:2},{value:"Schedule",id:"schedule",level:3},{value:"Actions",id:"actions",level:3},{value:"Action Chaining",id:"action-chaining",level:3}],d={toc:o},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"task-scheduler"},"Task Scheduler"),(0,r.kt)("p",null,"The Task Scheduler is a component that enables the scheduling of program or script launches at predetermined times. Whenever a service is created, reinstalled, or deleted, an associated task is automatically generated."),(0,r.kt)("p",null,"These tasks can be individualized to run once or may have already been executed. To manually initiate a task, simply select it and click on the Start button. If a previously failed task is started, it will resume from the point where the error occurred."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ScheduledTasks",src:a(448).Z,width:"1641",height:"921"})),(0,r.kt)("h2",{id:"recurring-tasks"},"Recurring Tasks"),(0,r.kt)("p",null,"These tasks are user-defined and designed to run either once or multiple times. When a recurring task is created, it automatically generates a scheduled task that executes at the specified time. Upon executing the scheduled task, a new scheduled task is created based on the recurrence pattern defined for the original task."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RecurringTasks",src:a(1481).Z,width:"1657",height:"920"})),(0,r.kt)("h3",{id:"schedule"},"Schedule"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"One Time")," - The task will only run once at the specified time. If the task has already executed you can schedule it again simply by updating the start time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Daily")," - The task will run once a day at the specified time. It can also be configured to run every other day, every 3 days, etc by using the ",(0,r.kt)("inlineCode",{parentName:"li"},"recur every x days")," field."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Weekly")," - The task will run every week on the specified days and time. It can also be configured to run every other week, every 3 weeks, etc by using the ",(0,r.kt)("inlineCode",{parentName:"li"},"recur every x weeks")," field."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Monthly")," - The task will run on the selected months on the specified days and time.")),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("p",null,"Each recurring task can have one or more actions that execute on the specified server. If one action fails the task execution will be cancelled and set to error status."),(0,r.kt)("h3",{id:"action-chaining"},"Action Chaining"),(0,r.kt)("p",null,"Some actions can work with the results from previous actions."),(0,r.kt)("admonition",{title:"example",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"you can configure a task that does the following:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Backup the database"),(0,r.kt)("li",{parentName:"ul"},"Compress the database backup file"),(0,r.kt)("li",{parentName:"ul"},"Upload the compressed file to an FTP server\n:::"))))}p.isMDXComponent=!0},1481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/RecurringTasks-c9ac6de08972b3394efeec8bf0bda40d.png"},448:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ScheduledTasks-08b7ec5065f751cb8987be2525d6b4ae.png"}}]);