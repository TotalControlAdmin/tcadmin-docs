"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[5120],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=i,k=p["".concat(s,".").concat(d)]||p[d]||c[d]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_label:"Feature Permissions",sidebar_position:11},l="Feature Permissions",o={unversionedId:"using-tcadmin/game-voice-configuration/feature-permissions",id:"using-tcadmin/game-voice-configuration/feature-permissions",title:"Feature Permissions",description:"Enable features for the specified user type. Most features also require that you have also configured it for the game.",source:"@site/docs/using-tcadmin/game-voice-configuration/feature-permissions.mdx",sourceDirName:"using-tcadmin/game-voice-configuration",slug:"/using-tcadmin/game-voice-configuration/feature-permissions",permalink:"/using-tcadmin/game-voice-configuration/feature-permissions",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/game-voice-configuration/feature-permissions.mdx",tags:[],version:"current",lastUpdatedAt:1686840661,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:11,frontMatter:{sidebar_label:"Feature Permissions",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Web Console",permalink:"/using-tcadmin/game-voice-configuration/web-console"},next:{title:"Run As",permalink:"/using-tcadmin/game-voice-configuration/run-as"}},s={},u=[],m={toc:u},p="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"feature-permissions"},"Feature Permissions"),(0,i.kt)("p",null,"Enable features for the specified user type. Most features also require that you have also configured it for the game."),(0,i.kt)("admonition",{title:"example",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"if you allow the Steam Update to Sub Admins you must also enable and configure the feature in the Steam Settings tab.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"File Manager"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable access to the file manager."),(0,i.kt)("li",{parentName:"ul"},"Configure in the File Manager tab."),(0,i.kt)("li",{parentName:"ul"},"Configure file permissions by clicking on the File Permissions icon."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FTP"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable access to the files via FTP."),(0,i.kt)("li",{parentName:"ul"},"Configure by clicking on the File Permissions icon."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Log Viewer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable access to the log viewer."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Log Viewer")," ",(0,i.kt)("strong",{parentName:"li"},"(Text Console Output)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable access to the console output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Text Console")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Control Console's Output")," is required."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Web Console"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable access to the web console."),(0,i.kt)("li",{parentName:"ul"},"Configure in the Web Console tab."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Predefined Commandlines"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable access to the predefined commandlines."),(0,i.kt)("li",{parentName:"ul"},"Configure in the Commandlines tab."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Custom Commandlines"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow creation of custom commandlines."),(0,i.kt)("li",{parentName:"ul"},"Configure in the Commandlines tab."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Updates"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow access to game server updates."),(0,i.kt)("li",{parentName:"ul"},"Configure by clicking on the Updates icon."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mod Manager"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow access to install/uninstall mods."),(0,i.kt)("li",{parentName:"ul"},"Configure by clicking on the Mods icon."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Steam Update"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow access to run the steam update."),(0,i.kt)("li",{parentName:"ul"},"Configure in the Steam Settings tab."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Punkbuster Update"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow access to run the punkbuster update."),(0,i.kt)("li",{parentName:"ul"},"Configure in the Punkbuster Settings tab."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Reinstall"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow access to reinstall the service."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scheduled Reinstall"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow access to schedule when the service will be reinstalled."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scheduled Script"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow access to schedule the game's scripts and the Steam/Punkbuster updates."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Fast Downloads Sync"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow the user to execute the fast download sync manually."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Player Stats"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow access to the game server's player stats."),(0,i.kt)("li",{parentName:"ul"},"Configure by clicking on the Query Monitoring icon."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CPU Stats"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow access to the game server's CPU usage stats."),(0,i.kt)("li",{parentName:"ul"},"Configure by clicking on the Query Monitoring icon."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Memory Stats"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow access to the game server's memory usage stats."),(0,i.kt)("li",{parentName:"ul"},"Configure by clicking on the Query Monitoring icon."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Live Player Stats")," - Allow access to the game server's player count in real time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Live CPU Stats")," - Allow access to the game server's CPU usage in real time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Live Memory Stats")," - Allow access to the game server's memory usage in real time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Live Bandwidth Stats")," - Allow access to the game server's bandwidth usage in real time.")))}c.isMDXComponent=!0}}]);