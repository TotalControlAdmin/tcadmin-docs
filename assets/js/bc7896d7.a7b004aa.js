"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[6266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:14,sidebar_label:"Update IP and port in WHMCS"},o="Update IP and port in WHMCS",s={unversionedId:"customizations/scripts/general-scripts/update-ip-and-in-whmcs",id:"customizations/scripts/general-scripts/update-ip-and-in-whmcs",title:"Update IP and port in WHMCS",description:"When you create a game server with the billing API WHMCS does not get updated with the game server's IP and port. This can be updated using the built in recurring task or custom scripts.",source:"@site/docs/customizations/scripts/general-scripts/update-ip-and-in-whmcs.mdx",sourceDirName:"customizations/scripts/general-scripts",slug:"/customizations/scripts/general-scripts/update-ip-and-in-whmcs",permalink:"/customizations/scripts/general-scripts/update-ip-and-in-whmcs",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/general-scripts/update-ip-and-in-whmcs.mdx",tags:[],version:"current",lastUpdatedAt:1693212227,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:14,frontMatter:{sidebar_position:14,sidebar_label:"Update IP and port in WHMCS"},sidebar:"tutorialSidebar",previous:{title:"Restart service when last player disconnects",permalink:"/customizations/scripts/general-scripts/stop-service-after-empty-for-2-days"},next:{title:"IronPython",permalink:"/category/ironpython"}},p={},c=[{value:"Update WHMCS by connecting to the API (Recommended)",id:"update-whmcs-by-connecting-to-the-api-recommended",level:2},{value:"Built in recurring task to update the WHMCS database every day",id:"built-in-recurring-task-to-update-the-whmcs-database-every-day",level:2},{value:"Custom recurring task to update the WHMCS database every day using the WHMCS API",id:"custom-recurring-task-to-update-the-whmcs-database-every-day-using-the-whmcs-api",level:2},{value:"Update WHMCS by connecting to the database",id:"update-whmcs-by-connecting-to-the-database",level:2}],l={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update-ip-and-port-in-whmcs"},"Update IP and port in WHMCS"),(0,a.kt)("p",null,"When you create a game server with the billing API WHMCS does not get updated with the game server's IP and port. This can be updated using the built in recurring task or custom scripts."),(0,a.kt)("h2",{id:"update-whmcs-by-connecting-to-the-api-recommended"},"Update WHMCS by connecting to the API (Recommended)"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can similarly duplicate this script to configure an ",(0,a.kt)("strong",{parentName:"p"},"After Move Event")," that updates the IP and port when you move servers to different nodes.")),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://community.tcadmin.com/profile/12219-dennis/"},"Dennis")," for this script."),(0,a.kt)("p",null,"In WHMCS create api credentials with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Products")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateClientProduct role"),"."),(0,a.kt)("p",null,"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHMCS_URL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WHMCS_API_IDENTIFIER"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WHMCS_API_SECRET")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WHMCS_API_ACCESS_KEY")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you cant find how to get your access key refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.whmcs.com/api/access-control/"},(0,a.kt)("strong",{parentName:"a"},"WHMCS documentation")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Operating System:")," Any",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Description:")," Update WHMCS (SQL)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Script Engine:")," IronPython",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Event:")," After Created",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Script:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import urllib2\nimport urllib\n\nWHMCS_URL = 'https://your-whmcs-site.com/includes/api.php' \nWHMCS_API_IDENTIFIER = \"xxxxxxx\"\nWHMCS_API_SECRET = \"yyyyyyy\"\nWHMCS_API_ACCESS_KEY = \"\" \n\nquery = urllib.urlencode({'action' : 'UpdateClientProduct', 'username' : WHMCS_API_IDENTIFIER, 'password' : WHMCS_API_SECRET, 'accesskey' : WHMCS_API_ACCESS_KEY, 'serviceid' : ThisService.BillingId, 'domain' : ThisService.ConnectionInfo, 'responsetype' : 'json'})\n\ntry:\n  response = urllib2.urlopen(WHMCS_URL, data=query)\n  content = response.read()\n  Script.WriteToConsole(content)\nexcept urllib2.HTTPError, e:\n  Script.WriteToConsole(str(e.code))\n")),(0,a.kt)("h2",{id:"built-in-recurring-task-to-update-the-whmcs-database-every-day"},"Built in recurring task to update the WHMCS database every day"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Recurring Tasks")),(0,a.kt)("li",{parentName:"ul"},"Create a new recurring task and configure it to execute daily."),(0,a.kt)("li",{parentName:"ul"},"In the Actions tab add a new action of type ",(0,a.kt)("inlineCode",{parentName:"li"},"Sync Service IP with Billing"),"."),(0,a.kt)("li",{parentName:"ul"},"Enter the information required to connect to your WHMCS database. If you use custom billing software you can specify a custom SQL update command."),(0,a.kt)("li",{parentName:"ul"},"hen the task runs the product's domain field in WHMCS should have the game server's IP and port.")),(0,a.kt)("h2",{id:"custom-recurring-task-to-update-the-whmcs-database-every-day-using-the-whmcs-api"},"Custom recurring task to update the WHMCS database every day using the WHMCS API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In WHMCS create API credentials with the Products > UpdateClientProduct role."),(0,a.kt)("li",{parentName:"ul"},"In TCAdmin go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Global Game Scripts"),". Add the script below. Update ",(0,a.kt)("inlineCode",{parentName:"li"},"WHMCS_URL"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"WHMCS_API_IDENTIFIER"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"WHMCS_API_SECRET")," with the correct values."),(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Recurring Tasks"),". Add a recurring task with action = Execute a script and select the script that you created.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Operating System:")," Any",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Description:")," Update WHMCS (API)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Script Engine:")," IronPython",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Event:")," No Event",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Allow Scheduling:")," Checked",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Script:")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import clr\nimport urllib2\nimport urllib\n \nclr.AddReference(\"TCAdmin.GameHosting.SDK\")\nfrom TCAdmin.GameHosting.SDK.Objects import Service\n \nWHMCS_URL = \"https://your-whmcs-site.com/includes/api.php\"\nWHMCS_API_IDENTIFIER = \"xxxxxxx\"\nWHMCS_API_SECRET = \"yyyyyyy\"\n \nAllServices = Service.GetServices()\n \nfor ThisService in AllServices:\n  Script.WriteToConsole(\"Updating \" + ThisService.ConnectionInfo)\n  query = urllib.urlencode({'action' : 'UpdateClientProduct', 'username' : WHMCS_API_IDENTIFIER, 'password' : WHMCS_API_SECRET, 'serviceid' : ThisService.BillingId, 'domain' : ThisService.ConnectionInfo, 'responsetype' : 'json'})\n  try:\n    urllib2.urlopen(WHMCS_URL, data=query)\n  except urllib2.HTTPError, e:\n    Script.WriteToConsole(\"Error updating \" + ThisService.ConnectionInfo + \": \" + str(e.code) + \" \" + e.reason)\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To troubleshoot the script you can set the event to custom action. Execute it by selecting any game server and clicking on click on more.")),(0,a.kt)("h2",{id:"update-whmcs-by-connecting-to-the-database"},"Update WHMCS by connecting to the database"),(0,a.kt)("p",null,"Update the mysql_ variables with your WHMCS database connection."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Operating System:")," Any",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Description:")," Update WHMCS (SQL)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Script Engine:")," IronPython",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Event:")," After Created",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Script:")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import clr;\nimport System;\n\nclr.AddReference("TCAdmin.DatabaseProviders.MySql");\nclr.AddReference("TCAdmin.SDK");\nfrom TCAdmin.DatabaseProviders.MySql import MySqlManager;\nfrom System import String;\n\nmysql_server="WHMCSIP";\nmysql_user="WHMCSUSER";\nmysql_password="WHMCSPASSWORD";\nmysql_database="WHMCSDATABASE";\n\nwith MySqlManager() as mysql:\n mysql.UseMasterWebService = False;\n mysql.DisableReplication = True;\n mysql.Connect(String.Format("Data Source={0};User Id={1};Password={2};Database={3};Pooling=False;", mysql_server, mysql_user, mysql_password, mysql_database));\n mysql.ExecuteNonQuery(String.Format("UPDATE tblhosting SET domain=\'{0}\' WHERE id=\'{1}\'", ThisService.ConnectionInfo, ThisService.BillingId));\n')))}m.isMDXComponent=!0}}]);