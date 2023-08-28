"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[2434],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(i),u=r,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return i?n.createElement(f,l(l({ref:t},c),{},{components:i})):n.createElement(f,l({ref:t},c))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<a;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},6403:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(7462),r=(i(7294),i(3905));const a={sidebar_position:5,sidebar_label:"Override config"},l="Override config",o={unversionedId:"misc/override-config",id:"misc/override-config",title:"Override config",description:"To disable or override specific features on a single server create a file named Override.config in /home/tcadmin/Monitor or Program Files\\TCAdmin2\\Monitor. The available options are:",source:"@site/docs/misc/override-config.mdx",sourceDirName:"misc",slug:"/misc/override-config",permalink:"/misc/override-config",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/misc/override-config.mdx",tags:[],version:"current",lastUpdatedAt:1693210718,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Override config"},sidebar:"tutorialSidebar",previous:{title:"Linux Quotas",permalink:"/misc/linux-quotas"},next:{title:"User Assigned Servers",permalink:"/misc/user-assigned-servers"}},s={},d=[{value:"Example",id:"example",level:2}],c={toc:d},m="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"override-config"},"Override config"),(0,r.kt)("p",null,"To disable or override specific features on a single server create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"Override.config")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/tcadmin/Monitor")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Program Files\\TCAdmin2\\Monitor"),". The available options are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RestrictedFileNames")," - The files that will always be restricted. These can't be ",(0,r.kt)("inlineCode",{parentName:"li"},"uploaded"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"downloaded"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"modified")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"deleted"),". Specify more than one file by separating them with ",(0,r.kt)("inlineCode",{parentName:"li"},";")," Wildcards are supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RestrictServiceExe")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"True/False")," : The service's executable will always be restricted. The file can't be ",(0,r.kt)("inlineCode",{parentName:"li"},"downloaded"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"modified")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"deleted"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RestrictLinuxExe")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"True/False")," : On Linux, all files with execute permissions are restricted. If you set this value to False it is recommended that you set ",(0,r.kt)("inlineCode",{parentName:"li"},"RestrictServiceExe")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," and use the game's File System Permissions and restrict access to the game's main executables."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DisableServiceChanges")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"True/False")," : Prevent a service's executable file and paths from being changed in the service settings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DisableNewService")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"True/False")," : Prevent manual service creation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DisableCustomFtpDirectories")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"True/False")," : Disable custom ",(0,r.kt)("inlineCode",{parentName:"li"},"FTP")," directories for all users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DisableScripts")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"True/False")," : It is not recommended to disable this feature. Disable execution of scripts that execute on install, uninstall and other events for this server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DisableUnsafeTasks")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"True/False")," : Disable creation of recurring tasks that can be unsafe (",(0,r.kt)("inlineCode",{parentName:"li"},"database backup"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ftp upload"),", etc)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DisableDownloads")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"True/False")," : Disables automatic download of files from external servers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AllowedLinkPaths")," - Paths separated by semicolon. List of paths allowed for symlink targets. Wildcards are supported")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-16" standalone="yes"?>\n<values>\n    <add key="RestrictedFileNames" value="" type="System.String,mscorlib" />\n    <add key="RestrictServiceExe" value="True" type="System.Boolean,mscorlib" />\n    <add key="RestrictLinuxExe" value="True" type="System.Boolean,mscorlib" />\n    <add key="DisableServiceChanges" value="False" type="System.Boolean,mscorlib" />\n    <add key="DisableNewService" value="False" type="System.Boolean,mscorlib" />\n    <add key="DisableCustomFtpDirectories" value="False" type="System.Boolean,mscorlib" />\n    <add key="DisableScripts" value="False" type="System.Boolean,mscorlib" />\n    <add key="DisableUnsafeTasks" value="False" type="System.Boolean,mscorlib" />\n    <add key="DisableDownloads" value="False" type="System.Boolean,mscorlib" />\n    <add key="AllowedLinkPaths" value="" type="System.String,mscorlib" />\n</values>\n')))}p.isMDXComponent=!0}}]);