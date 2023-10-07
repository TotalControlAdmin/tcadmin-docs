"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[9954],{3905:(e,i,t)=>{t.d(i,{Zo:()=>p,kt:()=>f});var n=t(7294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function s(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?s(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),m=function(e){var i=n.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},p=function(e){var i=m(e.components);return n.createElement(l.Provider,{value:i},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},u=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(t),u=r,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||s;return t?n.createElement(f,a(a({ref:i},p),{},{components:t})):n.createElement(f,a({ref:i},p))}));function f(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=u;var o={};for(var l in i)hasOwnProperty.call(i,l)&&(o[l]=i[l]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var m=2;m<s;m++)a[m]=t[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3656:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=t(7462),r=(t(7294),t(3905));const s={sidebar_label:"File System Permissions",sidebar_position:14},a="File System Permissions",o={unversionedId:"using-tcadmin/game-voice-configuration/file-system-permissions",id:"using-tcadmin/game-voice-configuration/file-system-permissions",title:"File System Permissions",description:"Specify permissions for sub administrators, resellers and users. Each user type can have different permissions depending on your requirements.",source:"@site/docs/using-tcadmin/game-voice-configuration/file-system-permissions.mdx",sourceDirName:"using-tcadmin/game-voice-configuration",slug:"/using-tcadmin/game-voice-configuration/file-system-permissions",permalink:"/using-tcadmin/game-voice-configuration/file-system-permissions",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/game-voice-configuration/file-system-permissions.mdx",tags:[],version:"current",lastUpdatedAt:1696666871,formattedLastUpdatedAt:"Oct 7, 2023",sidebarPosition:14,frontMatter:{sidebar_label:"File System Permissions",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Game Mail Templates",permalink:"/using-tcadmin/game-voice-configuration/game-mail-templates"},next:{title:"Query Monitoring",permalink:"/using-tcadmin/game-voice-configuration/query-monitoring"}},l={},m=[{value:"Permissions",id:"permissions",level:2},{value:"Permission Types",id:"permission-types",level:2},{value:"Basic Permissions",id:"basic-permissions",level:3},{value:"Advanced Permissions",id:"advanced-permissions",level:3},{value:"No Permissions",id:"no-permissions",level:3}],p={toc:m},d="wrapper";function c(e){let{components:i,...t}=e;return(0,r.kt)(d,(0,n.Z)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-system-permissions"},"File System Permissions"),(0,r.kt)("p",null,"Specify permissions for sub administrators, resellers and users. Each user type can have different permissions depending on your requirements."),(0,r.kt)("admonition",{title:"note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"By default the following extensions are blocked\n",(0,r.kt)("inlineCode",{parentName:"p"},"*.exe;*.dll;*.so;*.bat;*.sh;*.cmd;*.vbs;*.pif;*.scr;*.com"))),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Add permissions by file name")," - Specify permissions for specific files and extensions. Specify more than one file by separating them with ",(0,r.kt)("inlineCode",{parentName:"li"},";")," Wildcards are supported.")),(0,r.kt)("admonition",{title:"example",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"app.exe;mod*.dll;game*.dll;pak?.pk?"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Add permissions by file path")," - Specify permissions for relative path to files. Wildcards are supported. Specify more than one path by separating them with ",(0,r.kt)("inlineCode",{parentName:"li"},";"))),(0,r.kt)("admonition",{title:"example",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"images\\*.png;logs\\*.log"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"images\\*.png")," will only apply the permissions to files with the png extension inside the images directory.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Add permissions by sub directory")," - Specify permissions to a relative directory. Specify more than one path by separating with ",(0,r.kt)("inlineCode",{parentName:"li"},";"))),(0,r.kt)("admonition",{title:"example",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"server\\cfg;server\\dll"))),(0,r.kt)("h2",{id:"permission-types"},"Permission Types"),(0,r.kt)("h3",{id:"basic-permissions"},"Basic Permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read")," - Grants permissions to read files and list directories."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"write")," - Grants permissions to write files, , create directories, rename files and directories."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delete")," - Grants permissions to delete files and directories.")),(0,r.kt)("h3",{id:"advanced-permissions"},"Advanced Permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Read files")," - Grants permissions to read files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Write files")," - Grants permissions to write files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Rename files")," - Grants permissions to rename files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Delete files")," - Grants permissions to delete files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List directories")," - Grants permissions to list directories."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Create directories")," - Grants permissions to create directories."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Rename directories")," - Grants permissions to rename directories."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Delete directories")," - Grants permissions to delete directories.")),(0,r.kt)("h3",{id:"no-permissions"},"No Permissions"),(0,r.kt)("p",null,"Deny access to all files and directories that match the specified criteria."))}c.isMDXComponent=!0}}]);