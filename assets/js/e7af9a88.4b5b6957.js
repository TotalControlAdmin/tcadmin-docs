"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[7737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"Game Information",sidebar_position:1},o="Game Information",l={unversionedId:"using-tcadmin/game-voice-configuration/game-information",id:"using-tcadmin/game-voice-configuration/game-information",title:"Game Information",description:"- Game Id - The id used to identify the game.",source:"@site/docs/using-tcadmin/game-voice-configuration/game-information.mdx",sourceDirName:"using-tcadmin/game-voice-configuration",slug:"/using-tcadmin/game-voice-configuration/game-information",permalink:"/using-tcadmin/game-voice-configuration/game-information",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/game-voice-configuration/game-information.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Game Information",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Game/Voice Configuration",permalink:"/using-tcadmin/game-voice-configuration/"},next:{title:"IP & Ports",permalink:"/using-tcadmin/game-voice-configuration/ip-ports"}},s={},m=[],u={toc:m},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"game-information"},"Game Information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Game Id")," - The id used to identify the game."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Name")," - The name used to identify the game."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Short Name")," - The short name used to identify the game."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Operating System")," - The operating system where this game can be installed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Min Slots")," - The minimum number of slots supported by this game."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Max Slots")," - The maximum number of slots supported by this game. Set to ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," for no limit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default Slots")," - The default number of slots shown when creating this game."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Query Protocol")," - Select the type of query used to get the status of the game server. If there is no compatible query try using ",(0,a.kt)("inlineCode",{parentName:"li"},"Config file parser"),". This will attempt to read server rules directly from the game's config files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Private Server Variable")," - The name of the server variable used to determine if the game server is private."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Private Rule Value")," - The value of the server variable used to determine if the game server is private."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Show in create list")," - Enable if you want the game to show up in the games available for auto setup. The game files must exist in the specified folder or file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RCon Protocol")," - Select the rcon protocol used to execute console commands.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you select 'ConsoleInput' the game server must have a text console. On Windows, ",(0,a.kt)("inlineCode",{parentName:"li"},"General Settings")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Interact with Desktop")," is required. On Linux, ",(0,a.kt)("inlineCode",{parentName:"li"},"Text Console")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Control Console's")," Input is required. Some games are not compatible with this option."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Is a voice server")," - Specifies if the game server will show up under the voices services list instead of the game services list."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Can be used as a game template")," - Enable if you want other games to use some or all of this game's settings. This allows you to update all the common settings for an engine or games with multiple configurations in a single place.")),(0,a.kt)("admonition",{title:"example",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Usually the Windows and Linux versions of a game share all the settings except the executable file name. You can create the full game configuration for Windows and enable it as a template. When you create the Linux configuration select the Templates tab. Configure it to use all the settings from the Windows configuration except Files & Directories. Then in the Files & Directories tab you can configure the specific executable and folder where the Linux files are located.")))}p.isMDXComponent=!0}}]);