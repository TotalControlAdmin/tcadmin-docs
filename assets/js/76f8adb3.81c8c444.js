"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[6518],{359:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=s(5893),i=s(1151);const r={sidebar_position:21,sidebar_label:"Support System"},c="Support System",o={id:"using-tcadmin/support-system",title:"Support System",description:"The support system can be configured by administrators and resellers. A reseller can have his own configuration except for the global settings (enable attachments, allowed extensions, size limit).",source:"@site/docs/using-tcadmin/support-system.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/support-system",permalink:"/using-tcadmin/support-system",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/support-system.mdx",tags:[],version:"current",lastUpdatedAt:1704877678,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:21,frontMatter:{sidebar_position:21,sidebar_label:"Support System"},sidebar:"tutorialSidebar",previous:{title:"Task Scheduler",permalink:"/using-tcadmin/task-scheduler"},next:{title:"SteamCmd",permalink:"/using-tcadmin/steamcmd/"}},a={},d=[{value:"Configuration",id:"configuration",level:2},{value:"General Settings",id:"general-settings",level:3},{value:"Global Settings",id:"global-settings",level:3},{value:"Support Departments",id:"support-departments",level:3},{value:"Configure the Recurring Task",id:"configure-the-recurring-task",level:3},{value:"Configure Sub Admin Access",id:"configure-sub-admin-access",level:3},{value:"Configure Sub User Access",id:"configure-sub-user-access",level:3},{value:"Mail Templates",id:"mail-templates",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"support-system",children:"Support System"}),"\n",(0,n.jsx)(t.p,{children:"The support system can be configured by administrators and resellers. A reseller can have his own configuration except for the global settings (enable attachments, allowed extensions, size limit)."}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.h3,{id:"general-settings",children:"General Settings"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Enabled"})," - Enable or disable the built in support ticket system."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Assign ticket to the first admin/subadmin that reads it"})," - If enabled, the ticket will be assigned to the first admin or sub admin that reads it. If the subadmin has ",(0,n.jsx)(t.code,{children:"Unassign own tickets"})," and ",(0,n.jsx)(t.code,{children:"Assign tickets"})," permission he can assign it to a different admin/subadmin."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Delete tickets when user is deleted"})," - Deletes all the user's tickets when the user is deleted."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Display Name"})," - The name shown to the user in the ticket's history."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Auto Close Tickets"})," - Specify the number of days to wait before the ticket is closed automatically after it has been answered. Set to 0 to disable. This requires the that the admin configure a recurring task with the ",(0,n.jsx)(t.code,{children:"Auto close support tickets "}),"action."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"global-settings",children:"Global Settings"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Enable attachments"})," - Enable or disable attachments."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Allowed Extensions"})," - The allowed extensions separated by ",(0,n.jsx)(t.code,{children:'";"'})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Max Upload Size"})," - The maximum file size in KB that can be uploaded. Set to 0 to have no limit. Default is 5MB."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"support-departments",children:"Support Departments"}),"\n",(0,n.jsx)(t.p,{children:"Create your support ticket departments. You can specify the sub admins that have access to each department."}),"\n",(0,n.jsx)(t.h3,{id:"configure-the-recurring-task",children:"Configure the Recurring Task"}),"\n",(0,n.jsxs)(t.p,{children:["The admin needs to configure a recurring task that executes the ",(0,n.jsx)(t.code,{children:"Auto close support tickets"})," action. Only the admin needs to configure a recurring task. The same task also processes the reseller's support tickets."]}),"\n",(0,n.jsxs)(t.p,{children:["To create the recurring task go to ",(0,n.jsx)(t.code,{children:"System"})," (on the left-hand navigation) > ",(0,n.jsx)(t.code,{children:"Settings"})," > ",(0,n.jsx)(t.code,{children:"(under Task Scheduler category)"})," > ",(0,n.jsx)(t.code,{children:"Recurring Tasks"})," > ",(0,n.jsx)(t.code,{children:"New"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Name"})," - Enter a name for the task."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Type"})," - Select Daily."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Start"})," - Enter the date of the first time you want the task to execute. Select tomorrow's date. Set the time when the task will be executed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Recur Every"})," - Leave the value to 1 day."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Select the Actions tab. Click on New. Set the action to ",(0,n.jsx)(t.code,{children:"Auto close support tickets"}),". Click on Apply, then on Save."]}),"\n",(0,n.jsx)(t.h3,{id:"configure-sub-admin-access",children:"Configure Sub Admin Access"}),"\n",(0,n.jsxs)(t.p,{children:["Access to the support system is configured in the sub admin roles. Go to ",(0,n.jsx)(t.code,{children:"User Management"})," (on the left-hand navigation) > ",(0,n.jsx)(t.code,{children:"Roles"})," > S",(0,n.jsx)(t.code,{children:"elect the sub admin role"}),". Under the Support System category you will see the following permissions."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"View assigned tickets"})," - The sub admin can view support tickets assigned to him."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"View all tickets"})," - The sub admin can view all support tickets."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Change ticket options"})," - The sub admin can change the support ticket's options."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Open tickets"})," - The sub admin can create new support tickets."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Close tickets"})," - The sub admin can close support tickets."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Re-open tickets"})," - The sub admin can re-open support tickets that are currently closed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Delete tickets"})," - The sub admin can delete support tickets."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"configure-sub-user-access",children:"Configure Sub User Access"}),"\n",(0,n.jsxs)(t.p,{children:["Sub user access to support tickets requires permissions from the ",(0,n.jsx)(t.code,{children:"admin/reseller"})," and from the sub user's owner."]}),"\n",(0,n.jsxs)(t.p,{children:["First the admin must allow a sub user access to the support system. This is configured in the user's role. Go to ",(0,n.jsx)(t.code,{children:"User Management"})," (on the left-hand navigation) > ",(0,n.jsx)(t.code,{children:"Roles"})," > ",(0,n.jsx)(t.code,{children:"Select the user role"}),". Under the Support category enable ",(0,n.jsx)(t.code,{children:"Sub users can create support tickets"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"With the previous permission enabled, the user can now enable access to his sub user. Select the sub user. In the Support Permissions you will see the following options."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"View support tickets"})," - The sub user can view existing support tickets"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Create/update support tickets"})," - The sub user can create and update support tickets."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"mail-templates",children:"Mail Templates"}),"\n",(0,n.jsxs)(t.p,{children:["You can find the mail templates used by the support system in ",(0,n.jsx)(t.code,{children:"System"})," (on the left-hand navigation) > ",(0,n.jsx)(t.code,{children:"Settings"})," > ",(0,n.jsx)(t.code,{children:"Mail Templates"})," > ",(0,n.jsx)(t.code,{children:"Support category"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Support ticket created by user (admin notification)"})," - Sent when a support ticket is created by a user. The email is sent to administrators and to users that have access to the support ticket's department."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Support ticket created by user (user notification)"})," - Sent to the user when the support ticket has been received."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Support ticket reply by user (admin notification)"})," - Sent when the user replies to the support ticket. The email is sent to administrators and to users that have access to the support ticket's department."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Support ticket reply by user (user notification)"})," - Sent to the user when the response has been received."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Support ticket created by admin (user notification)"})," - Sent to a user when an admin or sub admin creates a support ticket."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Support ticket reply by admin (user notification)"})," - Sent to the user when an admin or sub admin has answered his support ticket."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Support ticket assigned (admin notification)"})," - Sent when the support ticket is assigned to an admin or sub admin."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>c});var n=s(7294);const i={},r=n.createContext(i);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);