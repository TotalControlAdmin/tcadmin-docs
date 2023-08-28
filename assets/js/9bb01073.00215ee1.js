"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[7222],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return a?i.createElement(f,o(o({ref:t},m),{},{components:a})):i.createElement(f,o({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_label:"Variables",sidebar_position:16},o="Variables",l={unversionedId:"using-tcadmin/game-voice-configuration/variables",id:"using-tcadmin/game-voice-configuration/variables",title:"Variables",description:"Variables are an important part of TCAdmin. They allow you to set predefined values for specific elements (e.g. settings in a configuration file) or the command line. You can also use variables in custom scripts.",source:"@site/docs/using-tcadmin/game-voice-configuration/variables.mdx",sourceDirName:"using-tcadmin/game-voice-configuration",slug:"/using-tcadmin/game-voice-configuration/variables",permalink:"/using-tcadmin/game-voice-configuration/variables",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/game-voice-configuration/variables.mdx",tags:[],version:"current",lastUpdatedAt:1693212227,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:16,frontMatter:{sidebar_label:"Variables",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Query Monitoring",permalink:"/using-tcadmin/game-voice-configuration/query-monitoring"},next:{title:"Configuration Files",permalink:"/using-tcadmin/game-voice-configuration/configuration-files"}},s={},u=[{value:"Default Variables",id:"default-variables",level:2},{value:"Custom Variables",id:"custom-variables",level:2},{value:"Commandline Parameter Options",id:"commandline-parameter-options",level:3},{value:"Display formatting for File System ComboBox",id:"display-formatting-for-file-system-combobox",level:3}],m={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"variables"},"Variables"),(0,n.kt)("p",null,"Variables are an important part of TCAdmin. They allow you to set predefined values for specific elements (e.g. settings in a configuration file) or the command line. You can also use variables in custom scripts.\nIf you want to use a variable in a configuration file or the commandline, you should use ",(0,n.kt)("inlineCode",{parentName:"p"},"$[DefaultVariableName]")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"![CustomVariable]"),".\nIf you want to use a variable in a custom script, please see the documentation for ",(0,n.kt)("a",{parentName:"p",href:"/customizations/scripts/script-objects/this-service#custom-variables"},"ThisService"),"."),(0,n.kt)("h2",{id:"default-variables"},"Default Variables"),(0,n.kt)("p",null,"All services have a few default variables configured. Some of these could be for the hostname, rcon password and private password."),(0,n.kt)("h2",{id:"custom-variables"},"Custom Variables"),(0,n.kt)("p",null,'You can create your own variables for each of your game templates. This is done under the "Variables" tab in the game settings.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Variable Name")," - The unformatted name of the variable. You should not change the name if this variable is already in use."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Default Value")," - The default value for this variable. ",(0,n.kt)("inlineCode",{parentName:"li"},"For example 'changeme'."))),(0,n.kt)("h3",{id:"commandline-parameter-options"},"Commandline Parameter Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Admin/Sub admin/Reseller/User/Server owner access")," - Specify if the given role is able to set the value of this variable when using the commandline builder or executing a custom script."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Value is required")," - Specify if the value is required."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Item Type")," - Select the type of item that will be used to capture the user's input."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Parent Variable")," - Select the item's parent value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Parent Value")," - The item will only be displayed if the parent variable has this value.")),(0,n.kt)("h3",{id:"display-formatting-for-file-system-combobox"},"Display formatting for File System ComboBox"),(0,n.kt)("p",null,"Starting from TCAdmin 2.0.187.5, you have the ability to manipulate how a specific variable is shown to the user.\nThis is done using the 'Display Regex' and 'Display Format' fields."),(0,n.kt)("p",null,"The following is an example on how you could manipulate the value of a ComboBox that is generated based on folders in ",(0,n.kt)("inlineCode",{parentName:"p"},"backups/worlds/")," on the game service.\nThe folders inside ",(0,n.kt)("inlineCode",{parentName:"p"},"backups/worlds/")," are named based on the date and time they were created (%Y-%m-%d_%H%M%S):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2023-08-27_220030"),(0,n.kt)("li",{parentName:"ul"},"2023-08-27_100030"),(0,n.kt)("li",{parentName:"ul"},"2023-08-26_220030")),(0,n.kt)("p",null,"If you want to manipulate how this is shown in the ComboBox, you can use regex to change how the values are shown:\n",(0,n.kt)("strong",{parentName:"p"},"Display Regex"),": (\\d{4}-\\d{2}-\\d{2})_(\\d{2})(\\d{2})(\\d{2})\n",(0,n.kt)("strong",{parentName:"p"},"Display Format"),": $1 $2:$3:$4"),(0,n.kt)("p",null,"The above will result in the following formatting:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2023-08-27 22:00:30"),(0,n.kt)("li",{parentName:"ul"},"2023-08-27 10:00:30"),(0,n.kt)("li",{parentName:"ul"},"2023-08-26 22:00:30")),(0,n.kt)("p",null,"The actual value of the variable is not affected by the formatting."))}p.isMDXComponent=!0}}]);