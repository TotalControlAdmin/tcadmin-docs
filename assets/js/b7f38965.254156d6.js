"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[5853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=a,h=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return r?n.createElement(h,o(o({ref:t},m),{},{components:r})):n.createElement(h,o({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:5,sidebar_label:"Server Management"},o="Server Management",s={unversionedId:"using-tcadmin/server-management/index",id:"using-tcadmin/server-management/index",title:"Server Management",description:"Datacenters",source:"@site/docs/using-tcadmin/server-management/index.mdx",sourceDirName:"using-tcadmin/server-management",slug:"/using-tcadmin/server-management/",permalink:"/using-tcadmin/server-management/",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/server-management/index.mdx",tags:[],version:"current",lastUpdatedAt:1686840661,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Server Management"},sidebar:"tutorialSidebar",previous:{title:"User Management",permalink:"/using-tcadmin/user-management"},next:{title:"Lets Encrypt",permalink:"/using-tcadmin/server-management/lets-encrypt"}},l={},d=[{value:"Datacenters",id:"datacenters",level:2},{value:"Servers",id:"servers",level:2},{value:"Creating a New Server",id:"creating-a-new-server",level:2},{value:"IPs",id:"ips",level:2},{value:"Router/Hardware Firewall",id:"routerhardware-firewall",level:2},{value:"Test Connectivity",id:"test-connectivity",level:2},{value:"Override Settings",id:"override-settings",level:2},{value:"Server Owner",id:"server-owner",level:2},{value:"Remote DB Connections",id:"remote-db-connections",level:2},{value:"File Servers",id:"file-servers",level:2}],m={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server-management"},"Server Management"),(0,a.kt)("h2",{id:"datacenters"},"Datacenters"),(0,a.kt)("p",null,"Datacenters are used to organize your servers and Teamspeak servers by location. To create a new datacenter go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Server Management")," (on the left hand navigation) > ",(0,a.kt)("inlineCode",{parentName:"p"},"Datacenters")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"New.")," A datacenter can't be deleted if it is currently assigned to a server or Teamspeak server."),(0,a.kt)("h2",{id:"servers"},"Servers"),(0,a.kt)("p",null,"Each server represents a dedicated or virtual server. Your primary server is named ",(0,a.kt)("inlineCode",{parentName:"p"},"Master.")," This server usually runs the TCAdmin website and database. Additional servers are ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," servers. They require a connection to the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," to function properly."),(0,a.kt)("h2",{id:"creating-a-new-server"},"Creating a New Server"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you have a SQLite database it is recommended that you ",(0,a.kt)("a",{parentName:"p",href:"/database/convert-sqlite-to-mysql"},"convert it to MySQL"),".")),(0,a.kt)("p",null,"Before adding a new server make sure you have enough remote licenses. Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"System")," (on the left hand navigation) > ",(0,a.kt)("inlineCode",{parentName:"p"},"License Info.")," If you recently added a new remote license and it does show up yet click on the Update License button. The number of remote licenses should increase."),(0,a.kt)("p",null,"If you have a MySQL database go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Server Management")," (on the left hand navigation) > ",(0,a.kt)("inlineCode",{parentName:"p"},"Remote DB Connections.")," Enable and configure the database connection. This is the information used by the remotes to connect to the master's MySQL database."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Server Management")," (on the left hand navigation) > ",(0,a.kt)("inlineCode",{parentName:"p"},"Servers")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"New.")," The following information is required:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Server Settings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Datacenter")," : Select the datacenter where the server is located."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Operating System")," : Select the server's operating system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Primary IP")," : Enter the server's primary IP. If the server is behind a hardware firewall/router enter the private IP."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Firewall IP")," : Only enter the firewall IP if your server is behind a hardware firewall/router."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Name")," : Enter the name that will identify the server."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Router/Firewall settings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Enable support for ",(0,a.kt)("inlineCode",{parentName:"li"},"Windows Firewall")," : Enable this option if the server is running Windows Firewall. Required ports will be opened automatically. If you enable this option and the firewall is disabled you might receive errors in the monitor console."),(0,a.kt)("li",{parentName:"ul"},"Enable support for ",(0,a.kt)("inlineCode",{parentName:"li"},"uPnP port forwarding")," : Enable this option if the server is behind a hardware firewall/router with uPnP enabled. Required ports will be opened automatically."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Game & Voice Settings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Enable the ",(0,a.kt)("inlineCode",{parentName:"li"},"game monitor service")," : Enable this option if you want game/voice servers to be monitored for crashes and configuration changes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Game Files Path")," : Enter the path where the game files are located. Make sure the folder exists."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"User Files Path")," : Enter the path where the user files are stored. Make sure the folder exists.")),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"}," On Linux User Files Path is only used if the game is configured to run as root ",(0,a.kt)("strong",{parentName:"p"},"(not recommended).")," Files will be copied to the home folder of the user that runs the service. By default this folder is ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/tcagame."))),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Get Files From")," : If you want the server to download the game files from another server select it from the list."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Keep a local copy of downloaded files")," : Check this option if you want to save the files locally after they have been downloaded. This only works if your game files are ",(0,a.kt)("a",{parentName:"li",href:"/misc/compression"},"compressed"),".")))),(0,a.kt)("p",null,"Save the server and click on Config File to generate the server's configuration file."),(0,a.kt)("p",null,"Install TCAdmin on the new server. To configure the server quickly simply place the generated ConfigUtility.config in the Monitor folder and restart the monitor."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For an advanced configuration start the monitor and service manager. Then view the configuration utility using your browser: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://REMOTEIP:8880.")," Select remote configuration. It will ask you to upload the ConfigUtility.config that you generated along with other options. ",(0,a.kt)("strong",{parentName:"p"},"Remote servers must connect to the master's database."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is ",(0,a.kt)("strong",{parentName:"p"},"recommended")," to start the remote monitor in console mode first to make sure it starts without any errors.")),(0,a.kt)("h2",{id:"ips"},"IPs"),(0,a.kt)("p",null,"When modifying or after saving a new server, an icon for Server IPs will appear at the bottom. If you click on it you can specify all the server's IPs."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"}," It is ",(0,a.kt)("strong",{parentName:"p"},"recommended")," that you only use the import button, when adding IP addresses to TCAdmin")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If the IPs are not importing you need to configure them in the network adapter first.")),(0,a.kt)("h2",{id:"routerhardware-firewall"},"Router/Hardware Firewall"),(0,a.kt)("p",null,"If your server is behind a router or hardware firewall when you click on the import button it will add the private network IPs. This is not an error. Game servers must bind to the private IP since that it is actually configured in the server's network adapter."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want TCAdmin to display the public IP enter it in the Hostname field.")),(0,a.kt)("h2",{id:"test-connectivity"},"Test Connectivity"),(0,a.kt)("p",null,"To confirm that the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," server is communicating with the ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," servers correctly go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Server Management")," (on the left hand navigation) > ",(0,a.kt)("inlineCode",{parentName:"p"},"Servers")," and click on the Show Versions button."),(0,a.kt)("h2",{id:"override-settings"},"Override Settings"),(0,a.kt)("p",null,"To override settings on a specific server use ",(0,a.kt)("a",{parentName:"p",href:"/misc/override-config"},"Override.config")),(0,a.kt)("h2",{id:"server-owner"},"Server Owner"),(0,a.kt)("p",null,"A user or reseller can be assigned to one or more servers. This allows the user to create game and voice servers on his servers. When a server is assigned to a user it is not used by the billing API or by reseller packages. For more information read ",(0,a.kt)("a",{parentName:"p",href:"/misc/user-assigned-servers"},"User Assigned Servers"),"."),(0,a.kt)("h2",{id:"remote-db-connections"},"Remote DB Connections"),(0,a.kt)("p",null,"You can enable this feature if you are running a MySQL database. This feature can improve performance by allowing remote servers to connect directly to the database."),(0,a.kt)("h2",{id:"file-servers"},"File Servers"),(0,a.kt)("p",null,"With the File Servers feature you can place your game files in an external FTP server and have all monitors download the files from there. After adding a file server go to the server settings and configure it to download the files from the file server."))}c.isMDXComponent=!0}}]);