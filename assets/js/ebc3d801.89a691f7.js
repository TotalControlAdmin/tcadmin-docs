"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[5854],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return o?n.createElement(y,s(s({ref:t},c),{},{components:o})):n.createElement(y,s({ref:t},c))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4646:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_label:"Import Python Modules",sidebar_position:1},s="Import Python Modules",a={unversionedId:"customizations/scripts/ironpython/import-python-modules",id:"customizations/scripts/ironpython/import-python-modules",title:"Import Python Modules",description:"IronPython is regular Python but with the option of using .NET classes or DLL files (e.g. the TCAdmin SDK).",source:"@site/docs/customizations/scripts/ironpython/import-python-modules.mdx",sourceDirName:"customizations/scripts/ironpython",slug:"/customizations/scripts/ironpython/import-python-modules",permalink:"/customizations/scripts/ironpython/import-python-modules",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/ironpython/import-python-modules.mdx",tags:[],version:"current",lastUpdatedAt:1693210718,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Import Python Modules",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"IronPython",permalink:"/category/ironpython"},next:{title:"Custom Protocols",permalink:"/category/custom-protocols"}},l={},p=[{value:"Use .NET in IronPython",id:"use-net-in-ironpython",level:2},{value:"Use the TCAdmin SDK",id:"use-the-tcadmin-sdk",level:2},{value:"Use custom Python modules",id:"use-custom-python-modules",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"import-python-modules"},"Import Python Modules"),(0,r.kt)("p",null,"IronPython is regular Python but with the option of using .NET classes or DLL files (e.g. the TCAdmin SDK)."),(0,r.kt)("h2",{id:"use-net-in-ironpython"},"Use .NET in IronPython"),(0,r.kt)("p",null,"If you want to use any of the .NET classes, you will need to import them into the IronPython script like you would in Python. Before using any .NET classes, you will need to import the clr module, however.\nThis is an example of how to use the .NET WebClient class, so we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"DownloadFile()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from System.Net import WebClient\nfrom System.IO import Path\n\n#Download the TCAdmin logo to the service's root directory\ntry:\n    wc = WebClient()\n    wc.DownloadFile('https://clients.tcadmin.com/billing/images/logo.png', Path.Combine(ThisService.RootDirectory, 'tcadmin-logo.png'))\nexcept Exception as e:\n    Script.WriteToConsole('Could not download the file. Error: {}'.format(e))\n")),(0,r.kt)("h2",{id:"use-the-tcadmin-sdk"},"Use the TCAdmin SDK"),(0,r.kt)("p",null,"Before you can use the TCAdmin SDK (or any DLL files for that matter), you need to reference them first. This is done by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"clr.AddReference()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import clr\nclr.AddReference('TCAdmin.SDK')\nfrom TCAdmin.SDK import Mail\n\n#Print the control panel URL to the script window\ncompany_info = Mail.CompanyInfo()\nScript.WriteToConsole(company_info.ControlPanelUrl)\n")),(0,r.kt)("h2",{id:"use-custom-python-modules"},"Use custom Python modules"),(0,r.kt)("p",null,"In some cases, you might need to use a module that is not included in the default Python library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import sys\nsys.path.append('C:\\\\CustomPythonModules\\\\Lib')\nfrom bs4 import BeautifulSoup\n# do stuff with bs4\n")))}m.isMDXComponent=!0}}]);