"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[3989],{6710:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(4848),i=r(8453);const s={sidebar_position:5,sidebar_label:"Server Management"},o="Server Management",a={id:"using-tcadmin/server-management/index",title:"Server Management",description:"Datacenters",source:"@site/docs/using-tcadmin/server-management/index.mdx",sourceDirName:"using-tcadmin/server-management",slug:"/using-tcadmin/server-management/",permalink:"/using-tcadmin/server-management/",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/server-management/index.mdx",tags:[],version:"current",lastUpdatedAt:1709834562,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Server Management"},sidebar:"tutorialSidebar",previous:{title:"User Management",permalink:"/using-tcadmin/user-management"},next:{title:"Lets Encrypt",permalink:"/using-tcadmin/server-management/lets-encrypt"}},d={},l=[{value:"Datacenters",id:"datacenters",level:2},{value:"Servers",id:"servers",level:2},{value:"Creating a New Server",id:"creating-a-new-server",level:2},{value:"IPs",id:"ips",level:2},{value:"Router/Hardware Firewall",id:"routerhardware-firewall",level:2},{value:"Test Connectivity",id:"test-connectivity",level:2},{value:"Override Settings",id:"override-settings",level:2},{value:"Server Owner",id:"server-owner",level:2},{value:"Remote DB Connections",id:"remote-db-connections",level:2},{value:"File Servers",id:"file-servers",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"server-management",children:"Server Management"}),"\n",(0,t.jsx)(n.h2,{id:"datacenters",children:"Datacenters"}),"\n",(0,t.jsxs)(n.p,{children:["Datacenters are used to organize your servers and Teamspeak servers by location. To create a new datacenter go to ",(0,t.jsx)(n.code,{children:"Server Management"})," (on the left hand navigation) > ",(0,t.jsx)(n.code,{children:"Datacenters"})," > ",(0,t.jsx)(n.code,{children:"New."})," A datacenter can't be deleted if it is currently assigned to a server or Teamspeak server."]}),"\n",(0,t.jsx)(n.h2,{id:"servers",children:"Servers"}),"\n",(0,t.jsxs)(n.p,{children:["Each server represents a dedicated or virtual server. Your primary server is named ",(0,t.jsx)(n.code,{children:"Master."})," This server usually runs the TCAdmin website and database. Additional servers are ",(0,t.jsx)(n.code,{children:"remote"})," servers. They require a connection to the ",(0,t.jsx)(n.code,{children:"master"})," to function properly."]}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-new-server",children:"Creating a New Server"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you have a SQLite database it is recommended that you ",(0,t.jsx)(n.a,{href:"/database/convert-sqlite-to-mysql",children:"convert it to MySQL"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Before adding a new server make sure you have enough remote licenses. Go to ",(0,t.jsx)(n.code,{children:"System"})," (on the left hand navigation) > ",(0,t.jsx)(n.code,{children:"License Info."})," If you recently added a new remote license and it does show up yet click on the Update License button. The number of remote licenses should increase."]}),"\n",(0,t.jsxs)(n.p,{children:["If you have a MySQL database go to ",(0,t.jsx)(n.code,{children:"Server Management"})," (on the left hand navigation) > ",(0,t.jsx)(n.code,{children:"Remote DB Connections."})," Enable and configure the database connection. This is the information used by the remotes to connect to the master's MySQL database."]}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.code,{children:"Server Management"})," (on the left hand navigation) > ",(0,t.jsx)(n.code,{children:"Servers"})," > ",(0,t.jsx)(n.code,{children:"New."})," The following information is required:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Server Settings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Datacenter"})," : Select the datacenter where the server is located."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Operating System"})," : Select the server's operating system."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Primary IP"})," : Enter the server's primary IP. If the server is behind a hardware firewall/router enter the private IP."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Firewall IP"})," : Only enter the firewall IP if your server is behind a hardware firewall/router."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Name"})," : Enter the name that will identify the server."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Router/Firewall settings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Enable support for ",(0,t.jsx)(n.code,{children:"Windows Firewall"})," : Enable this option if the server is running Windows Firewall. Required ports will be opened automatically. If you enable this option and the firewall is disabled you might receive errors in the monitor console."]}),"\n",(0,t.jsxs)(n.li,{children:["Enable support for ",(0,t.jsx)(n.code,{children:"uPnP port forwarding"})," : Enable this option if the server is behind a hardware firewall/router with uPnP enabled. Required ports will be opened automatically."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Game & Voice Settings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Enable the ",(0,t.jsx)(n.code,{children:"game monitor service"})," : Enable this option if you want game/voice servers to be monitored for crashes and configuration changes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Game Files Path"})," : Enter the path where the game files are located. Make sure the folder exists."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"User Files Path"})," : Enter the path where the user files are stored. Make sure the folder exists."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["On Linux User Files Path is only used if the game is configured to run as root ",(0,t.jsx)(n.strong,{children:"(not recommended)."})," Files will be copied to the home folder of the user that runs the service. By default this folder is ",(0,t.jsx)(n.code,{children:"/home/tcagame."})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Get Files From"})," : If you want the server to download the game files from another server select it from the list."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Keep a local copy of downloaded files"})," : Check this option if you want to save the files locally after they have been downloaded. This only works if your game files are ",(0,t.jsx)(n.a,{href:"/misc/compression",children:"compressed"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Save the server and click on Config File to generate the server's configuration file."}),"\n",(0,t.jsx)(n.p,{children:"Install TCAdmin on the new server. To configure the server quickly simply place the generated ConfigUtility.config in the Monitor folder and restart the monitor."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["For an advanced configuration start the monitor and service manager. Then view the configuration utility using your browser: ",(0,t.jsx)(n.code,{children:"http://REMOTEIP:8880."})," Select remote configuration. It will ask you to upload the ConfigUtility.config that you generated along with other options. ",(0,t.jsx)(n.strong,{children:"Remote servers must connect to the master's database."})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["It is ",(0,t.jsx)(n.strong,{children:"recommended"})," to start the remote monitor in console mode first to make sure it starts without any errors."]})}),"\n",(0,t.jsx)(n.h2,{id:"ips",children:"IPs"}),"\n",(0,t.jsx)(n.p,{children:"When modifying or after saving a new server, an icon for Server IPs will appear at the bottom. If you click on it you can specify all the server's IPs."}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["It is ",(0,t.jsx)(n.strong,{children:"recommended"})," that you only use the import button, when adding IP addresses to TCAdmin"]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If the IPs are not importing you need to configure them in the network adapter first."})}),"\n",(0,t.jsx)(n.h2,{id:"routerhardware-firewall",children:"Router/Hardware Firewall"}),"\n",(0,t.jsx)(n.p,{children:"If your server is behind a router or hardware firewall when you click on the import button it will add the private network IPs. This is not an error. Game servers must bind to the private IP since that it is actually configured in the server's network adapter."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"If you want TCAdmin to display the public IP enter it in the Hostname field."})}),"\n",(0,t.jsx)(n.h2,{id:"test-connectivity",children:"Test Connectivity"}),"\n",(0,t.jsxs)(n.p,{children:["To confirm that the ",(0,t.jsx)(n.code,{children:"master"})," server is communicating with the ",(0,t.jsx)(n.code,{children:"remote"})," servers correctly go to ",(0,t.jsx)(n.code,{children:"Server Management"})," (on the left hand navigation) > ",(0,t.jsx)(n.code,{children:"Servers"})," and click on the Show Versions button."]}),"\n",(0,t.jsx)(n.h2,{id:"override-settings",children:"Override Settings"}),"\n",(0,t.jsxs)(n.p,{children:["To override settings on a specific server use ",(0,t.jsx)(n.a,{href:"/misc/override-config",children:"Override.config"})]}),"\n",(0,t.jsx)(n.h2,{id:"server-owner",children:"Server Owner"}),"\n",(0,t.jsxs)(n.p,{children:["A user or reseller can be assigned to one or more servers. This allows the user to create game and voice servers on his servers. When a server is assigned to a user it is not used by the billing API or by reseller packages. For more information read ",(0,t.jsx)(n.a,{href:"/misc/user-assigned-servers",children:"User Assigned Servers"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"remote-db-connections",children:"Remote DB Connections"}),"\n",(0,t.jsx)(n.p,{children:"You can enable this feature if you are running a MySQL database. This feature can improve performance by allowing remote servers to connect directly to the database."}),"\n",(0,t.jsx)(n.h2,{id:"file-servers",children:"File Servers"}),"\n",(0,t.jsx)(n.p,{children:"With the File Servers feature you can place your game files in an external FTP server and have all monitors download the files from there. After adding a file server go to the server settings and configure it to download the files from the file server."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);