"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[4333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:10,sidebar_label:"Open and close ports in Windows firewall"},i="Open and close ports in Windows firewall",s={unversionedId:"customizations/scripts/general-scripts/open-close-ports-in-windows-firewall",id:"customizations/scripts/general-scripts/open-close-ports-in-windows-firewall",title:"Open and close ports in Windows firewall",description:"If you enable support for Windows firewall in TCAdmin it will add the game server's executable to the firewall exceptions. If the game server is started with a .bat this will not work. You can set a custom batch script for the after created event that opens the game server's ports or adds the correct executable and a script for the after deleted event that closes the ports.",source:"@site/docs/customizations/scripts/general-scripts/open-close-ports-in-windows-firewall.mdx",sourceDirName:"customizations/scripts/general-scripts",slug:"/customizations/scripts/general-scripts/open-close-ports-in-windows-firewall",permalink:"/customizations/scripts/general-scripts/open-close-ports-in-windows-firewall",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/general-scripts/open-close-ports-in-windows-firewall.mdx",tags:[],version:"current",lastUpdatedAt:1693212227,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Open and close ports in Windows firewall"},sidebar:"tutorialSidebar",previous:{title:"Limit Service's Disk Space",permalink:"/customizations/scripts/general-scripts/limits-services-disk-space"},next:{title:"Restart service if used more than x cpu or memory for the last 3 queries",permalink:"/customizations/scripts/general-scripts/restart-service-if-used-more-than-x-cpu-mem"}},l={},c=[{value:"To open the game server&#39;s game, query and rcon ports",id:"to-open-the-game-servers-game-query-and-rcon-ports",level:2},{value:"To add the game server&#39;s executable to the firewall exceptions",id:"to-add-the-game-servers-executable-to-the-firewall-exceptions",level:2},{value:"To close the game server&#39;s ports or remove the executable",id:"to-close-the-game-servers-ports-or-remove-the-executable",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"open-and-close-ports-in-windows-firewall"},"Open and close ports in Windows firewall"),(0,n.kt)("p",null,"If you enable support for Windows firewall in TCAdmin it will add the game server's executable to the firewall exceptions. If the game server is started with a .bat this will not work. You can set a custom batch script for the after created event that opens the game server's ports or adds the correct executable and a script for the after deleted event that closes the ports."),(0,n.kt)("h2",{id:"to-open-the-game-servers-game-query-and-rcon-ports"},"To open the game server's game, query and rcon ports"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'netsh advfirewall firewall add rule name="%ThisService_ConnectionInfo%" dir=in action=allow protocol=TCP localport=%ThisService_GamePort%\nnetsh advfirewall firewall add rule name="%ThisService_ConnectionInfo%" dir=in action=allow protocol=TCP localport=%ThisService_QueryPort%\nnetsh advfirewall firewall add rule name="%ThisService_ConnectionInfo%" dir=in action=allow protocol=TCP localport=%ThisService_RConPort%\nnetsh advfirewall firewall add rule name="%ThisService_ConnectionInfo%" dir=in action=allow protocol=UDP localport=%ThisService_GamePort%\nnetsh advfirewall firewall add rule name="%ThisService_ConnectionInfo%" dir=in action=allow protocol=UDP localport=%ThisService_QueryPort%\nnetsh advfirewall firewall add rule name="%ThisService_ConnectionInfo%" dir=in action=allow protocol=UDP localport=%ThisService_RConPort%\n')),(0,n.kt)("h2",{id:"to-add-the-game-servers-executable-to-the-firewall-exceptions"},"To add the game server's executable to the firewall exceptions"),(0,n.kt)("p",null,"Replace MyGame.exe with the correct relative path and filename."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'netsh advfirewall firewall add rule name="%ThisService_ConnectionInfo%" dir=in action=allow program="%ThisService_RootDirectory%MyGame.exe" enable=yes\n')),(0,n.kt)("h2",{id:"to-close-the-game-servers-ports-or-remove-the-executable"},"To close the game server's ports or remove the executable"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'netsh advfirewall firewall delete rule name="%ThisService_ConnectionInfo%"\n')))}u.isMDXComponent=!0}}]);