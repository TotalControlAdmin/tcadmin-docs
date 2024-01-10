"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[7695],{4948:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=s(5893),r=s(1151);const t={sidebar_position:4,sidebar_label:"User Management"},a="User Management",l={id:"using-tcadmin/user-management",title:"User Management",description:"Overview",source:"@site/docs/using-tcadmin/user-management.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/user-management",permalink:"/using-tcadmin/user-management",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/user-management.mdx",tags:[],version:"current",lastUpdatedAt:1704877678,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"User Management"},sidebar:"tutorialSidebar",previous:{title:"Security Settings",permalink:"/using-tcadmin/security-settings"},next:{title:"Server Management",permalink:"/using-tcadmin/server-management/"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Roles",id:"roles",level:2},{value:"Reseller Roles",id:"reseller-roles",level:3},{value:"Users",id:"users",level:2},{value:"FTP Settings",id:"ftp-settings",level:2},{value:"Sub Users",id:"sub-users",level:2},{value:"Enable Sub Users",id:"enable-sub-users",level:3},{value:"Create a Sub User",id:"create-a-sub-user",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"user-management",children:"User Management"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["TCAdmin has 3 user types (",(0,i.jsx)(n.code,{children:"user"}),", ",(0,i.jsx)(n.code,{children:"sub administrator"}),", ",(0,i.jsx)(n.code,{children:"administrator"}),"). A user's permissions are determined by the ",(0,i.jsx)(n.code,{children:"role"})," assigned to it."]}),"\n",(0,i.jsx)(n.h2,{id:"roles",children:"Roles"}),"\n",(0,i.jsxs)(n.p,{children:["Roles for ",(0,i.jsx)(n.code,{children:"user"}),", ",(0,i.jsx)(n.code,{children:"reseller"}),", and ",(0,i.jsx)(n.code,{children:"sub administrator"})," are included by default. These can be modified or you can create new ones depending on your requirements. If a role with reseller permissions is assigned to a user they will be able to create their own roles and users. To create a new role go to ",(0,i.jsx)(n.code,{children:"User Management"})," (on the left hand navigation) > ",(0,i.jsx)(n.code,{children:"roles"})," > ",(0,i.jsx)(n.code,{children:"New."})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enter the role name"}),"\n",(0,i.jsx)(n.li,{children:"Specify the role permissions and allowed features"}),"\n",(0,i.jsx)(n.li,{children:"save"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"reseller-roles",children:"Reseller Roles"}),"\n",(0,i.jsx)(n.p,{children:"To create a new reseller role, follow these steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Navigate to the roles section mentioned above."}),"\n",(0,i.jsx)(n.li,{children:"Enter the role name."}),"\n",(0,i.jsx)(n.li,{children:"Specify the role permissions by ticking the reseller checkbox."}),"\n",(0,i.jsx)(n.li,{children:"save."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"users",children:"Users"}),"\n",(0,i.jsxs)(n.p,{children:["To create a new user go to ",(0,i.jsx)(n.code,{children:"User Management"})," (on the left hand navigation) > ",(0,i.jsx)(n.code,{children:"users"})," > ",(0,i.jsx)(n.code,{children:"New."}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enter the user name (used to login),"}),"\n",(0,i.jsx)(n.li,{children:"Specify the user type, role and password."}),"\n",(0,i.jsx)(n.li,{children:"To specify the contact information click on the Profile tab."}),"\n",(0,i.jsx)(n.li,{children:"click on Save."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ftp-settings",children:"FTP Settings"}),"\n",(0,i.jsx)(n.p,{children:"After making changes to a user and accessing their profile, you will notice a section labeled [username] Details. By selecting this section, you will find an icon labeled FTP settings."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["You ",(0,i.jsx)(n.strong,{children:"DO NOT"})," need to add folders for each game server. These are added automatically and they will not show up on this page."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"ExampleDetails",src:s(219).Z+"",width:"753",height:"432"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"FTPSettings",src:s(5778).Z+"",width:"547",height:"690"})}),"\n",(0,i.jsx)(n.p,{children:"Within the FTP Settings you are able to map a directory that is outside of their game server directory."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Example:  in a game like Satisfactory, the user's game saves are stored in the appdata folder. You have the ability to link that particular save folder to the user's FTP directory, enabling them to conveniently access their saved files."})}),"\n",(0,i.jsx)(n.h2,{id:"sub-users",children:"Sub Users"}),"\n",(0,i.jsx)(n.h3,{id:"enable-sub-users",children:"Enable Sub Users"}),"\n",(0,i.jsxs)(n.p,{children:["Sub users must be enabled in the user's role. Go to ",(0,i.jsx)(n.code,{children:"User Management"})," (on the left hand navigation) > ",(0,i.jsx)(n.code,{children:"Roles"})," > ",(0,i.jsx)(n.code,{children:"Basic Users"}),". Expand the ",(0,i.jsx)(n.code,{children:"User Management permissions."})," Check ",(0,i.jsx)(n.code,{children:"Create sub users"})," and save."]}),"\n",(0,i.jsx)(n.h3,{id:"create-a-sub-user",children:"Create a Sub User"}),"\n",(0,i.jsxs)(n.p,{children:["To create a sub user for an existing user while logged in as an administrator go to ",(0,i.jsx)(n.code,{children:"User Management"})," (on the left hand navigation) > ",(0,i.jsx)(n.code,{children:"Select the user"})," > Click on the ",(0,i.jsx)(n.code,{children:"Sub Users icon"})," > ",(0,i.jsx)(n.code,{children:"Create a User."})," Users can also create their ",(0,i.jsx)(n.em,{children:"own"})," ",(0,i.jsx)(n.code,{children:"sub users"})," using the ",(0,i.jsx)(n.code,{children:"User Management options"})," on the side bar."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},219:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/ExampleDetails-ed4eed7d9bd420749beb8ca6f74a47b8.png"},5778:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/FTPSettings-752e61a23464abced649e019448676b9.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var i=s(7294);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);