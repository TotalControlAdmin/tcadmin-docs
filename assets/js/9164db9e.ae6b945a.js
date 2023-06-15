"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[4877],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),o=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(a),k=i,N=c["".concat(l,".").concat(k)]||c[k]||u[k]||n;return a?r.createElement(N,s(s({ref:t},m),{},{components:a})):r.createElement(N,s({ref:t},m))}));function N(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:i,s[1]=p;for(var o=2;o<n;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1901:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>o});var r=a(7462),i=(a(7294),a(3905));const n={sidebar_label:"This Service",sidebar_position:4},s="This Service",p={unversionedId:"customizations/scripts/script-objects/this-service",id:"customizations/scripts/script-objects/this-service",title:"This Service",description:"Properties",source:"@site/docs/customizations/scripts/script-objects/this-service.mdx",sourceDirName:"customizations/scripts/script-objects",slug:"/customizations/scripts/script-objects/this-service",permalink:"/customizations/scripts/script-objects/this-service",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/script-objects/this-service.mdx",tags:[],version:"current",lastUpdatedAt:1686840661,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"This Service",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"This User",permalink:"/customizations/scripts/script-objects/this-user"},next:{title:"Game Switcher Scripting Variables",permalink:"/customizations/scripts/script-objects/game-switcher-scripting-variables"}},l={},o=[{value:"Properties",id:"properties",level:2},{value:"Custom Variables",id:"custom-variables",level:2}],m={toc:o},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"this-service"},"This Service"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Affinity")," - Get/set the game service's processor affinity.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"BillingId")," - The service's id in your billing software.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"BillingStatus")," - The service's status in your billing software.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Branded")," - Get/set if the game service is branded.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionInfo")," - Get the IP and port of the game server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CurrentPid")," - Current process id of the game server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CustomPort1")," - Get/set the game service's custom port 1.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CustomPort2")," - Get/set the game service's custom port 2.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CustomPort3")," - Get/set the game service's custom port 3.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CustomPort4")," - Get/set the game service's custom port 4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CustomPort5")," - Get/set the game service's custom port 5.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Executable")," - Get/set the executable of this game service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FtpInfo")," - Get the IP and port of the FTP server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GameId")," - Get/set this service's game id.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GameKey")," - The game key assigned to this service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GameName")," - Get this service's game name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GamePort")," - Get/set the game service's game port.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GameShortName")," - Get this service's game short name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GameShortNameAndConnectionInfo")," - Get the game type and IP and port of the game server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"IpAddress")," - Get/set if the game service's IP address.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"IpHostname")," - Get the IP's hostname. If the IP does not have a hostname, the IP is returned.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"IsVoiceServer")," - Get if this service is a voice server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Name")," - Get/set the name of this game service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NameNoHtml")," - Get the name of this service without HTML tags.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"OverrideCommandLine")," - Specify if the service uses a custom commandline.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Priority")," - Get/set the game service's process priority.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Private")," - Get/set if the game service is private.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PublicIpAddress")," - Returns the service's public IP address (resolves the IP's configured hostname).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"QueryPort")," - Get/set the game service's query port.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"RConPort")," - Get/set the game service's RCon port.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"RootDirectory")," - Get/set the root directory of this game service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"RunAsUserName")," - Get the Windows/Linux user that executes the process.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ServerId")," - Get/set the server where this game service is located.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ServerName")," - Get this service's server name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ServiceId")," - Get/set the game service id.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Slots")," - Get/set the slots for this game service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Startup")," - Get/set the game service's startup type.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Status")," - Get the service status information.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"StatusFromCache")," - Get the service status information from cache if available.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"UnparsedCommandLine")," - Get/set the command line of this game service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"UserId")," - Get/set the owner of this game service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"UserName")," - Get this service's user name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"UserPackageId")," - Get/set the user package id assigned to this service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Variables")," - Get/set the service variables. This field is in XML format.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"WorkingDirectory")," - Get/set the working directory of this game service."))),(0,i.kt)("h2",{id:"custom-variables"},"Custom Variables"),(0,i.kt)("p",null,"Custom variable values can be accessed from scripts using the following formats."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Iron Python"',title:'"Iron','Python"':!0},'ThisService.Variables["CustomVariableName"]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Windows batch script"',title:'"Windows',batch:!0,'script"':!0},"%ThisService_CustomVariableName%\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Linux shell script"',title:'"Linux',shell:!0,'script"':!0},"${ThisService_CustomVariableName}\n")))}u.isMDXComponent=!0}}]);