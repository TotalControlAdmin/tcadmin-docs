"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[4050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const a={sidebar_position:15,sidebar_label:"Google Drive"},r="Google Drive",l={unversionedId:"using-tcadmin/manage-game-voice-services/google-drive",id:"using-tcadmin/manage-game-voice-services/google-drive",title:"Google Drive",description:"The TCAdmin file manager allows users to backup their files to Google Drive. These backups are stored within the user's Google account. The administrator's Google account is only required to activate the service on the domain.",source:"@site/docs/using-tcadmin/manage-game-voice-services/google-drive.mdx",sourceDirName:"using-tcadmin/manage-game-voice-services",slug:"/using-tcadmin/manage-game-voice-services/google-drive",permalink:"/using-tcadmin/manage-game-voice-services/google-drive",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/manage-game-voice-services/google-drive.mdx",tags:[],version:"current",lastUpdatedAt:1701001265,formattedLastUpdatedAt:"Nov 26, 2023",sidebarPosition:15,frontMatter:{sidebar_position:15,sidebar_label:"Google Drive"},sidebar:"tutorialSidebar",previous:{title:"Limit Service CPU and Memory Usage",permalink:"/using-tcadmin/manage-game-voice-services/limit-service-cpu-memory"},next:{title:"Manage Teamspeak Virtual Servers",permalink:"/using-tcadmin/manage-ts-virtual-servers"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Get your API key, client id and client secret",id:"get-your-api-key-client-id-and-client-secret",level:2},{value:"Configure the consent screen",id:"configure-the-consent-screen",level:2},{value:"Whitelist your domain",id:"whitelist-your-domain",level:2},{value:"Usage",id:"usage",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"google-drive"},"Google Drive"),(0,i.kt)("p",null,"The TCAdmin file manager allows users to backup their files to Google Drive. These backups are stored within the user's Google account. The administrator's Google account is only required to activate the service on the domain."),(0,i.kt)("p",null,"When backing up and restoring files using the TCAdmin file manager, the system applies the game's file system permissions. This means that if a user has permission to read a file, they can back it up to Google Drive. Similarly, if a user has permission to create a file, they can restore it from the backup."),(0,i.kt)("p",null,"Furthermore, the TCAdmin file manager provides configuration options to customize access to this feature for specific games. Administrators can choose which games have access to the backup functionality. Additionally, they can set upload and download limits, allowing them to control the amount of data being transferred."),(0,i.kt)("p",null,"In summary, the TCAdmin file manager enables users to conveniently backup their files to Google Drive, with the backups stored in their own Google account. The system leverages the game's file system permissions for backing up and restoring files. Administrators have control over access to this feature for different games and can set upload and download limits as needed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GoogleDrive1",src:n(960).Z,width:"800",height:"338"}),"\n",(0,i.kt)("img",{alt:"GoogleDrive1",src:n(827).Z,width:"800",height:"337"})),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your control panel must be accessible using a domain or subdomain. Direct IP access is not supported by Google."),(0,i.kt)("li",{parentName:"ul"},"If you don't have a domain you can do a reverse DNS lookup on your control panel's IP and use that hostname (if it has one). ",(0,i.kt)("a",{parentName:"li",href:"https://www.whatismyip.com/reverse-dns-lookup/"},"https://www.whatismyip.com/reverse-dns-lookup/"))),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TCAdmin can only restore files created by your control panel. It can't read other files in the client's Google Drive."),(0,i.kt)("li",{parentName:"ul"},"If you delete the Google project and create a new one TCAdmin will not be able to read backups created with the previous project.")),(0,i.kt)("h2",{id:"get-your-api-key-client-id-and-client-secret"},"Get your API key, client id and client secret"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/drive/api/v3/quickstart/js"},"Google Developers")," You only need to follow step 1. You do not need to install Python 2.4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Enable the Drive API"),". This will give you the client id and client secret."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Create API key"),". This will give you the API key."))),(0,i.kt)("li",{parentName:"ul"},"Log in to your control panel. Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"System")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Google Drive"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enter the client id, client secret and API key."),(0,i.kt)("li",{parentName:"ul"},"Enable it."),(0,i.kt)("li",{parentName:"ul"},"Click on games and select the games that have access to this feature.")))),(0,i.kt)("h2",{id:"configure-the-consent-screen"},"Configure the consent screen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Log in to with your Google account at ",(0,i.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"https://console.cloud.google.com/")),(0,i.kt)("li",{parentName:"ul"},"On the menu with the 3 bars on the upper left corner select ",(0,i.kt)("inlineCode",{parentName:"li"},"API & Services")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Oath consent screen")),(0,i.kt)("li",{parentName:"ul"},"Select EDIT APP next to Quickstart and select user type= external"),(0,i.kt)("li",{parentName:"ul"},"Change the application name to something more suitable for your company/domain")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"DO NOT upload an application logo. If you do this it will require extra verification steps.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on Add scope and add ",(0,i.kt)("strong",{parentName:"li"},"Google Drive API ../auth/drive.file"),". Do not add any other scopes."),(0,i.kt)("li",{parentName:"ul"},"Under Authorized domains enter your primary domain (not a sub domain)"),(0,i.kt)("li",{parentName:"ul"},"Under Application Homepage link enter your control panel url."),(0,i.kt)("li",{parentName:"ul"},"Under Application Privacy Policy link enter the link to your privacy policy. If you don't have one enter the control panel url."),(0,i.kt)("li",{parentName:"ul"},"Click on Save.")),(0,i.kt)("h2",{id:"whitelist-your-domain"},"Whitelist your domain"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Log in to with your Google account at ",(0,i.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"https://console.cloud.google.com/")),(0,i.kt)("li",{parentName:"ul"},"On the menu with the 3 bars on the upper left corner select ",(0,i.kt)("inlineCode",{parentName:"li"},"API & Services")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Credentials")),(0,i.kt)("li",{parentName:"ul"},"Click on OAuth client"),(0,i.kt)("li",{parentName:"ul"},"Under Authorized JavaScript origins add your control panel's domain and save. You can also add ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:8880"},"http://localhost:8880")," for development ",(0,i.kt)("strong",{parentName:"li"},"(ip will not work)."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This may take up to 10 minutes to take effect.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After this has been applied your clients will be able to log in to Google Drive from the file manager and backup/restore files.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the file manager click on the Google Drive toolbar button. It will ask you to log in with a Google account."),(0,i.kt)("li",{parentName:"ul"},"After logging in you can create a backup by right clicking on a file or folder and select Backup to Google Drive."),(0,i.kt)("li",{parentName:"ul"},"To restore a backup click on the Google Drive toolbar button. Select the files or folders and click on restore. The files are restored to their original location.")))}d.isMDXComponent=!0},960:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/800px-GoogleDrive1-91dee9323cd2d1bc537c9e14ab89a5cb.png"},827:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/800px-GoogleDrive2-084309ecb00895612ecad1328d1f8406.png"}}]);