"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4,sidebar_label:"Initial Configuration"},i="Inital Configuration",s={unversionedId:"getting-started/initial-configuration",id:"getting-started/initial-configuration",title:"Inital Configuration",description:"How to get going with TCAdmin once installed",source:"@site/docs/getting-started/initial-configuration.mdx",sourceDirName:"getting-started",slug:"/getting-started/initial-configuration",permalink:"/getting-started/initial-configuration",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/getting-started/initial-configuration.mdx",tags:[],version:"current",lastUpdatedAt:1686840661,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Initial Configuration"},sidebar:"tutorialSidebar",previous:{title:"Linux Installation",permalink:"/getting-started/Installation/linux-installation"},next:{title:"Server Components",permalink:"/getting-started/server-components"}},l={},p=[{value:"Access your Control Panel",id:"access-your-control-panel",level:2},{value:"Windows Servers",id:"windows-servers",level:3},{value:"Linux Servers",id:"linux-servers",level:3},{value:"License Information",id:"license-information",level:2},{value:"Database Configuration",id:"database-configuration",level:2},{value:"IP and Ports",id:"ip-and-ports",level:2},{value:"Override Configuration",id:"override-configuration",level:2},{value:"Apply Settings and Restart the Monitor",id:"apply-settings-and-restart-the-monitor",level:2},{value:"Change your Password",id:"change-your-password",level:2},{value:"Update the Admin Profile",id:"update-the-admin-profile",level:2},{value:"Enable support for Let&#39;s Encrypt",id:"enable-support-for-lets-encrypt",level:2},{value:"Mail Server Configuration",id:"mail-server-configuration",level:2},{value:"Company Information",id:"company-information",level:2},{value:"Server Configuration",id:"server-configuration",level:2},{value:"Server IPs",id:"server-ips",level:2},{value:"Download Steam Games",id:"download-steam-games",level:2},{value:"Other Games",id:"other-games",level:2},{value:"Install Plugins",id:"install-plugins",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inital-configuration"},"Inital Configuration"),(0,r.kt)("p",null,"How to get going with TCAdmin once installed"),(0,r.kt)("h2",{id:"access-your-control-panel"},"Access your Control Panel"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The default ",(0,r.kt)("strong",{parentName:"p"},"username")," and ",(0,r.kt)("strong",{parentName:"p"},"password")," is the following"),(0,r.kt)("p",{parentName:"admonition"},"Username: ",(0,r.kt)("strong",{parentName:"p"},"admin")),(0,r.kt)("p",{parentName:"admonition"},"Password: ",(0,r.kt)("strong",{parentName:"p"},"password"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"if you are using NAT make sure you have port forworded in windows firewall, your router, or IPtables/ufw"),(0,r.kt)("p",{parentName:"admonition"},"If you are sure the port is not being blocked by a firewall enable debug mode to figure out what's wrong.")),(0,r.kt)("h3",{id:"windows-servers"},"Windows Servers"),(0,r.kt)("p",null,"View ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8880"},"http://127.0.0.1:8880")," using the server's browser or ",(0,r.kt)("a",{parentName:"p",href:"http://public_server_ip:8880"},"http://public_server_ip:8880")," using your PC's browser."),(0,r.kt)("h3",{id:"linux-servers"},"Linux Servers"),(0,r.kt)("p",null,"View ",(0,r.kt)("a",{parentName:"p",href:"http://public_server_ip:8880"},"http://public_server_ip:8880")," using your PC's browser."),(0,r.kt)("h2",{id:"license-information"},"License Information"),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},'"The master server"')," and click on Next. Enter your TCAdmin key, name and company information and click on Next again."),(0,r.kt)("h2",{id:"database-configuration"},"Database Configuration"),(0,r.kt)("p",null,"Select SQLite or MySQL database. ODBC drivers are not required. Click on Next when you are done."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SQLite")," - The database has already been created for you. Just click on Next."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MySQL")," - You must create an empty database and database user. TCAdmin will execute the database script automatically. Enter the required information and click on Next."),(0,r.kt)("h2",{id:"ip-and-ports"},"IP and Ports"),(0,r.kt)("p",null,"Select the server's primary IP, firewall IP and ports that TCAdmin will use. If you change the secure and standard ports make sure they are available."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Primary IP")," - Select the server's primary IP."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Router/Hardware Firewall IP")," - If this server is behind a hardware firewall enter the external IP. Leave blank if there is no hardware firewall configured."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Standard Port")," - The port used by the TCAdmin monitor for standard connections. This port is used for http uploads and downloads. Default port is ",(0,r.kt)("strong",{parentName:"p"},"8880")," on Windows and ",(0,r.kt)("strong",{parentName:"p"},"8890")," on Linux."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Secure Port")," - The port used by the TCAdmin monitor for secure connections. Default port is ",(0,r.kt)("strong",{parentName:"p"},"8881")," on Windows and ",(0,r.kt)("strong",{parentName:"p"},"8891")," on Linux."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enable support for Windows Firewall")," - If enabled, ports required by TCAdmin and game servers will be opened in Windows Firewall automatically."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enable support for uPnP port forwarding")," - If enabled, required ports will be forward in the router/firewall automatically. Only enable if the server is behind a router or hardware firewall with uPnP enabled."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The below feature is only supported on Windows")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use custom server certificate")," - TCAdmin creates a default certificate for secure connections. With a valid certificate you can access your control panel with a secure connection without receiving a security warning. If you have installed a custom certificate you can select it."),(0,r.kt)("h2",{id:"override-configuration"},"Override Configuration"),(0,r.kt)("p",null,"Select the features that you want to disable or override on this server (Override.config). These will always override the settings specified in the database. Use these features in case you have access to files that you have to protect because they can't be made available publicly. If someone gains admin access to your control panel they will be limited by this configuration even if they try to change the settings from the control panel."),(0,r.kt)("h2",{id:"apply-settings-and-restart-the-monitor"},"Apply Settings and Restart the Monitor"),(0,r.kt)("p",null,"Click on Finish to apply your configuration and restart the monitor. After the monitor is restarted you will be redirected to the Admin home page."),(0,r.kt)("h2",{id:"change-your-password"},"Change your Password"),(0,r.kt)("p",null,"While logged in to your control panel click on ",(0,r.kt)("strong",{parentName:"p"},"Account Security")," on the menu and change the default admin password."),(0,r.kt)("h2",{id:"update-the-admin-profile"},"Update the Admin Profile"),(0,r.kt)("p",null,"Click on ",(0,r.kt)("strong",{parentName:"p"},"My Profile.")," Enter your email and select your time zone. All times shown in the control panel will appear in your time zone."),(0,r.kt)("h2",{id:"enable-support-for-lets-encrypt"},"Enable support for Let's Encrypt"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://null"},"Follow these instructions")),(0,r.kt)("h2",{id:"mail-server-configuration"},"Mail Server Configuration"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"System")," > ",(0,r.kt)("strong",{parentName:"p"},"General Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"Mail Server")," Settings and configure your mail server."),(0,r.kt)("h2",{id:"company-information"},"Company Information"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"System")," > ",(0,r.kt)("strong",{parentName:"p"},"General Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"Company")," information and enter your company's details. This information is used in the mail templates."),(0,r.kt)("h2",{id:"server-configuration"},"Server Configuration"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use the default paths you don't need to make any changes."),(0,r.kt)("p",{parentName:"admonition"},"On Windows the default paths are ",(0,r.kt)("strong",{parentName:"p"},"C:\\TCAFiles\\Games")," and ",(0,r.kt)("strong",{parentName:"p"},"C:\\TCAFiles\\Users")),(0,r.kt)("p",{parentName:"admonition"},"On Linux the default paths are ",(0,r.kt)("strong",{parentName:"p"},"/home/tcadmin/tcafiles/games")," and ",(0,r.kt)("strong",{parentName:"p"},"/home/tcadmin/tcafiles/users"),".")),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Server Management")," > ",(0,r.kt)("strong",{parentName:"p"},"Servers")," and select the master server."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Game & Voice Settings")," tab configure the paths for the game and user files. Make sure they exist on the server or restart the monitor and they will be created automatically.")),(0,r.kt)("h2",{id:"server-ips"},"Server IPs"),(0,r.kt)("p",null,"If you made any changes to the server settings click on Save. Then click on the ",(0,r.kt)("strong",{parentName:"p"},"Server IPs")," icon at the bottom of the page. Click on ",(0,r.kt)("strong",{parentName:"p"},"Import IPs")," and configure the hostnames as needed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It is recommended that you only use the Import button to add IPs.")," Normally you should not have to add any IPs manually. If all the server's IPs are not imported this means you need to configure them in your server's network settings first. After they have been configured you can try importing them again."),(0,r.kt)("p",null,"If you are behind a router/hardware firewall only the server's private IP will be imported. ",(0,r.kt)("strong",{parentName:"p"},"Do not add the public IP manually.")," Set the value of hostname to the public IP or a hostname that resolves to the public IP. Game servers should be configured to use the private IP. Ports in the public IP should be manually forwarded to the private IP or enable uPnP support in the server settings and in your firewall."),(0,r.kt)("h2",{id:"download-steam-games"},"Download Steam Games"),(0,r.kt)("p",null,"For your convenience, the steam game files are downloaded the first time you create a game server. Each Steam game also has a batch/shell script that you can execute to download the game files. If you imported a Steam game config and you don't see this file restart the monitor and it will be created. The files are created in ",(0,r.kt)("strong",{parentName:"p"},"C:\\TCAFiles\\Games")," and ",(0,r.kt)("strong",{parentName:"p"},"/home/tcadmin/tcafiles/games")," by default. See Game/Voice_Configuration and Create Game, Voice & Teamspeak Services for more information on configuring additional games."),(0,r.kt)("h2",{id:"other-games"},"Other Games"),(0,r.kt)("p",null,"Other games require you to place the files in the ",(0,r.kt)("strong",{parentName:"p"},"C:\\TCAFiles\\Games")," or ",(0,r.kt)("strong",{parentName:"p"},"/home/tcadmin/tcafiles/games.")," Each game has its own sub folder."),(0,r.kt)("h2",{id:"install-plugins"},"Install Plugins"),(0,r.kt)("p",null,"You can go to Settings > ",(0,r.kt)("a",{parentName:"p",href:"http://null"},"Plugin Repository")," and install plugins shared by the community (games, themes, languages, modules.)"))}m.isMDXComponent=!0}}]);