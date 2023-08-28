"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[3992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?i.createElement(k,o(o({ref:t},m),{},{components:n})):i.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1,sidebar_label:"Setting up IIS with TCAdmin"},o="Setting up IIS with TCAdmin",l={unversionedId:"customizations/web-server-configurations/setting-up-iis",id:"customizations/web-server-configurations/setting-up-iis",title:"Setting up IIS with TCAdmin",description:"Install IIS with Support for ASP.NET 4.0/4.5 Development",source:"@site/docs/customizations/web-server-configurations/setting-up-iis.mdx",sourceDirName:"customizations/web-server-configurations",slug:"/customizations/web-server-configurations/setting-up-iis",permalink:"/customizations/web-server-configurations/setting-up-iis",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/web-server-configurations/setting-up-iis.mdx",tags:[],version:"current",lastUpdatedAt:1693210718,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Setting up IIS with TCAdmin"},sidebar:"tutorialSidebar",previous:{title:"Web Server Configurations",permalink:"/category/web-server-configurations"},next:{title:"Setting up Nginx with TCAdmin",permalink:"/customizations/web-server-configurations/setting-up-nginx"}},s={},p=[{value:"Install IIS with Support for ASP.NET 4.0/4.5 Development",id:"install-iis-with-support-for-aspnet-4045-development",level:2},{value:"Set up SQLite Database",id:"set-up-sqlite-database",level:2},{value:"Configure IIS",id:"configure-iis",level:2},{value:"Database Configuration",id:"database-configuration",level:2},{value:"Disable Output Caching",id:"disable-output-caching",level:2},{value:"Configure IIS with Multiple Worker Processes",id:"configure-iis-with-multiple-worker-processes",level:2},{value:"Lets Encrpyt Install (recommended)",id:"lets-encrpyt-install-recommended",level:2},{value:"Installation",id:"installation",level:2},{value:"Use Custom SSL Certificate (Windows) (optional)",id:"use-custom-ssl-certificate-windows-optional",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-iis-with-tcadmin"},"Setting up IIS with TCAdmin"),(0,a.kt)("h2",{id:"install-iis-with-support-for-aspnet-4045-development"},"Install IIS with Support for ASP.NET 4.0/4.5 Development"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install IIS on your system with support for ASP.NET 4.0/4.5 development.")),(0,a.kt)("h2",{id:"set-up-sqlite-database"},"Set up SQLite Database"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy ",(0,a.kt)("inlineCode",{parentName:"li"},"TCAdmin2\\Monitor\\sqlite3.dll")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Windows\\System32")," if you are using an SQLite database.")),(0,a.kt)("h2",{id:"configure-iis"},"Configure IIS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the user ",(0,a.kt)("inlineCode",{parentName:"p"},"TCAWeb")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"IIS_IUSRS")," group.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Manually create a website in IIS Manager:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Web root: ",(0,a.kt)("inlineCode",{parentName:"li"},"Program Files\\TCAdmin2\\ControlPanel.MVC")),(0,a.kt)("li",{parentName:"ul"},"Application pool: ",(0,a.kt)("inlineCode",{parentName:"li"},".NET v4.5")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'In IIS Manager, right-click on the created website and select "Add Application":'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"Aspx")," (case-sensitive)"),(0,a.kt)("li",{parentName:"ul"},"Web root: ",(0,a.kt)("inlineCode",{parentName:"li"},"Program Files\\TCAdmin2\\ControlPanel")),(0,a.kt)("li",{parentName:"ul"},"Application pool: ",(0,a.kt)("inlineCode",{parentName:"li"},".NET v4.5")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the website in IIS Manager:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Click on "Basic Settings"'),(0,a.kt)("li",{parentName:"ul"},'Under "Connect as...", enter the user and password of the Windows user that runs your website.'),(0,a.kt)("li",{parentName:"ul"},"Ensure this user has full permissions on the following folders:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ControlPanel"),(0,a.kt)("li",{parentName:"ul"},"ControlPanel.MVC"),(0,a.kt)("li",{parentName:"ul"},"Cache"),(0,a.kt)("li",{parentName:"ul"},"Temp"),(0,a.kt)("li",{parentName:"ul"},"Logs"),(0,a.kt)("li",{parentName:"ul"},"Database"),(0,a.kt)("li",{parentName:"ul"},"Read permissions on Monitor\\Shared"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If using TCAWeb, start the monitor in console mode and execute ",(0,a.kt)("inlineCode",{parentName:"p"},"tcaweb-pass")," to obtain the password or attach ",(0,a.kt)("inlineCode",{parentName:"p"},"TCAdmin2\\Monitor\\TCAWeb.config")," to a support ticket for assistance.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"Aspx")," application to run with the same user as the main website.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If using Let's Encrypt, bind the website to a specific IP and hostname to prevent TCAdmin from changing the website's certificate.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Give full permissions to ",(0,a.kt)("inlineCode",{parentName:"p"},"IIS APPPOOL\\.NET v4.5")," on the following folders:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"C:\\Program Files\\TCAdmin2\\Cache"),(0,a.kt)("li",{parentName:"ul"},"C:\\Program Files\\TCAdmin2\\Temp"),(0,a.kt)("li",{parentName:"ul"},"C:\\Program Files\\TCAdmin2\\Logs\\Web"),(0,a.kt)("li",{parentName:"ul"},"C:\\Program Files\\TCAdmin2\\ControlPanel"),(0,a.kt)("li",{parentName:"ul"},"C:\\Program Files\\TCAdmin2\\ControlPanel.MVC"),(0,a.kt)("li",{parentName:"ul"},"C:\\Program Files\\TCAdmin2\\Database")))),(0,a.kt)("h2",{id:"database-configuration"},"Database Configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Execute the following command on your database to disable the built-in web server:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM tc_server_enabled_components WHERE module_id = '07405876-e8c2-4b24-a774-4ef57f596384' AND component_id = 2 AND server_id = 1;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you need to enable the built-in web server again, use the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO tc_server_enabled_components (module_id, component_id, server_id) values ('07405876-e8c2-4b24-a774-4ef57f596384', 2, 1);\n")))),(0,a.kt)("h2",{id:"disable-output-caching"},"Disable Output Caching"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Disable output caching to prevent issues with user sessions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Open IIS Manager"),(0,a.kt)("li",{parentName:"ul"},"Select your website"),(0,a.kt)("li",{parentName:"ul"},'Double click on "Output Caching"'),(0,a.kt)("li",{parentName:"ul"},'Under Actions on the right side, click on "Edit Feature Settings"'),(0,a.kt)("li",{parentName:"ul"},'Uncheck "Enable Cache" and "Enable kernel cache"'),(0,a.kt)("li",{parentName:"ul"},"Click OK")))),(0,a.kt)("h2",{id:"configure-iis-with-multiple-worker-processes"},"Configure IIS with Multiple Worker Processes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the instructions above to disable the built-in web server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the ASP.NET state service and set the startup to Automatic:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Go to Start > Administrative Tools > Services"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"TCAdmin2\\ControlPanel\\Web.config")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TCAdmin2\\ControlPanel.MVC\\Web.config"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},'<sessionState timeout="30"/>')," with ",(0,a.kt)("inlineCode",{parentName:"li"},'<sessionState mode="StateServer" stateConnectionString="tcpip=localhost:42424" cookieless="false" timeout="30" />')))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open IIS Manager and select the advanced properties of the .NET Application pool. Increase the number of worker processes as needed."))),(0,a.kt)("h2",{id:"lets-encrpyt-install-recommended"},"Lets Encrpyt Install (recommended)"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Download Certify The Web:"),"\nVisit the official website of Certify The Web at ",(0,a.kt)("a",{parentName:"p",href:"https://certifytheweb.com/"},"https://certifytheweb.com/")," and download the appropriate version for your operating system (Windows).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Install Certify The Web:"),"\nRun the installer and follow the on-screen instructions to install Certify The Web on your system."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Here is the full documentation to Certify The Web ",(0,a.kt)("a",{parentName:"p",href:"https://docs.certifytheweb.com/"},"https://docs.certifytheweb.com/"))),(0,a.kt)("h2",{id:"use-custom-ssl-certificate-windows-optional"},"Use Custom SSL Certificate (Windows) (optional)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the SSL certificate in Windows. Follow the instructions at ",(0,a.kt)("a",{parentName:"p",href:"https://www.trustico.com/install/import/iis7/iis7-pfx-installation.php"},"Trustico"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Launch the TCAdmin 2 Configuration Utility:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Go to Start > Programs > TCAdmin 2 > Configuration Utility"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate through the utility until you reach the IP and port settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the option to use a custom certificate and select it from the list.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Continue through the utility until the monitor is restarted."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The actual URLs, paths, and commands may need adjustments based on your specific setup and requirements.")))}c.isMDXComponent=!0}}]);