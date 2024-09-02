"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[5540],{2005:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=i(4848),n=i(8453);const t={sidebar_position:5,sidebar_label:"Override config"},l="Override config",o={id:"misc/override-config",title:"Override config",description:"To disable or override specific features on a single server create a file named Override.config in /home/tcadmin/Monitor or Program Files\\TCAdmin2\\Monitor. The available options are:",source:"@site/docs/misc/override-config.mdx",sourceDirName:"misc",slug:"/misc/override-config",permalink:"/misc/override-config",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/misc/override-config.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Override config"},sidebar:"tutorialSidebar",previous:{title:"Linux Quotas",permalink:"/misc/linux-quotas"},next:{title:"User Assigned Servers",permalink:"/misc/user-assigned-servers"}},c={},d=[{value:"Example",id:"example",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"override-config",children:"Override config"})}),"\n",(0,r.jsxs)(s.p,{children:["To disable or override specific features on a single server create a file named ",(0,r.jsx)(s.code,{children:"Override.config"})," in ",(0,r.jsx)(s.code,{children:"/home/tcadmin/Monitor"})," or ",(0,r.jsx)(s.code,{children:"Program Files\\TCAdmin2\\Monitor"}),". The available options are:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"RestrictedFileNames"})," - The files that will always be restricted. These can't be ",(0,r.jsx)(s.code,{children:"uploaded"}),", ",(0,r.jsx)(s.code,{children:"downloaded"}),", ",(0,r.jsx)(s.code,{children:"modified"})," or ",(0,r.jsx)(s.code,{children:"deleted"}),". Specify more than one file by separating them with ",(0,r.jsx)(s.code,{children:";"})," Wildcards are supported."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"RestrictServiceExe"})," - ",(0,r.jsx)(s.code,{children:"True/False"})," : The service's executable will always be restricted. The file can't be ",(0,r.jsx)(s.code,{children:"downloaded"}),", ",(0,r.jsx)(s.code,{children:"modified"})," or ",(0,r.jsx)(s.code,{children:"deleted"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"RestrictLinuxExe"})," - ",(0,r.jsx)(s.code,{children:"True/False"})," : On Linux, all files with execute permissions are restricted. If you set this value to False it is recommended that you set ",(0,r.jsx)(s.code,{children:"RestrictServiceExe"})," to ",(0,r.jsx)(s.code,{children:"True"})," and use the game's File System Permissions and restrict access to the game's main executables."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DisableServiceChanges"})," - ",(0,r.jsx)(s.code,{children:"True/False"})," : Prevent a service's executable file and paths from being changed in the service settings."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DisableNewService"})," - ",(0,r.jsx)(s.code,{children:"True/False"})," : Prevent manual service creation."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DisableCustomFtpDirectories"})," - ",(0,r.jsx)(s.code,{children:"True/False"})," : Disable custom ",(0,r.jsx)(s.code,{children:"FTP"})," directories for all users."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DisableScripts"})," - ",(0,r.jsx)(s.code,{children:"True/False"})," : It is not recommended to disable this feature. Disable execution of scripts that execute on install, uninstall and other events for this server."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DisableUnsafeTasks"})," - ",(0,r.jsx)(s.code,{children:"True/False"})," : Disable creation of recurring tasks that can be unsafe (",(0,r.jsx)(s.code,{children:"database backup"}),", ",(0,r.jsx)(s.code,{children:"ftp upload"}),", etc)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DisableDownloads"})," - ",(0,r.jsx)(s.code,{children:"True/False"})," : Disables automatic download of files from external servers."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"AllowedLinkPaths"})," - Paths separated by semicolon. List of paths allowed for symlink targets. Wildcards are supported"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-16" standalone="yes"?>\n<values>\n\t<add key="RestrictedFileNames" value="" type="System.String,mscorlib" />\n\t<add key="RestrictServiceExe" value="True" type="System.Boolean,mscorlib" />\n\t<add key="RestrictLinuxExe" value="True" type="System.Boolean,mscorlib" />\n\t<add key="DisableServiceChanges" value="False" type="System.Boolean,mscorlib" />\n\t<add key="DisableNewService" value="False" type="System.Boolean,mscorlib" />\n\t<add key="DisableCustomFtpDirectories" value="False" type="System.Boolean,mscorlib" />\n\t<add key="DisableScripts" value="False" type="System.Boolean,mscorlib" />\n\t<add key="DisableUnsafeTasks" value="False" type="System.Boolean,mscorlib" />\n\t<add key="DisableDownloads" value="False" type="System.Boolean,mscorlib" />\n\t<add key="AllowedLinkPaths" value="" type="System.String,mscorlib" />\n</values>\n'})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>o});var r=i(6540);const n={},t=r.createContext(n);function l(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);