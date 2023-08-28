"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[3804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),d=i,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(f,r(r({ref:t},p),{},{components:a})):n.createElement(f,r({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5576:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:2,sidebar_label:"Mail Templates"},r="Mail Templates",o={unversionedId:"customizations/mail-templates",id:"customizations/mail-templates",title:"Mail Templates",description:"Overview",source:"@site/docs/customizations/mail-templates.mdx",sourceDirName:"customizations",slug:"/customizations/mail-templates",permalink:"/customizations/mail-templates",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/mail-templates.mdx",tags:[],version:"current",lastUpdatedAt:1693210718,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Mail Templates"},sidebar:"tutorialSidebar",previous:{title:"SDK Documentation",permalink:"/customizations/sdk-documentations"},next:{title:"Scripts",permalink:"/category/scripts"}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Creating/Modifying a Template",id:"creatingmodifying-a-template",level:2},{value:"Default Mail Templates",id:"default-mail-templates",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mail-templates"},"Mail Templates"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Mail Templates are configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"System")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"General Settings")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Mail Templates"),". TCAdmin includes all required templates by default. You can create new ones in case you need a custom template for a specific game."),(0,i.kt)("p",null,"Resellers can have their own templates. By default, the ones configured at the administrator level are used."),(0,i.kt)("p",null,"It is recommended that you use the Company Info variables (",(0,i.kt)("inlineCode",{parentName:"p"},"General Settings")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Company Info"),") instead of entering your company information directly into the template. This way, the reseller only needs to update their own company info and does not need to change the mail templates."),(0,i.kt)("h2",{id:"creatingmodifying-a-template"},"Creating/Modifying a Template"),(0,i.kt)("p",null,"To modify a template, simply click on it. To create a new one, click the ",(0,i.kt)("em",{parentName:"p"},"New")," button. You will be asked to select which email template it will be based on. Available variables change depending on the template type."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Template Name"),": The name used to identify the template."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable this template"),": Disable this template if you want to prevent it from being sent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},'"From" Name'),": The name shown in the 'from' mail header. Leave blank to use the default value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},'"From" Email'),": The email shown in the 'from' mail header. Leave blank to use the default value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"To Emails"),": A list of emails separated by ';' where a copy of the message will be sent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CC Emails"),": A list of emails separated by ';' where a copy of the message will be sent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BCC Emails"),": A list of emails separated by ';' where a copy of the message will be sent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"To Roles"),": A list of roles separated by ';' where a copy of the message will be sent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CC Roles"),": A list of roles separated by ';' where a copy of the message will be sent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BCC Roles"),": A list of roles separated by ';' where a copy of the message will be sent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Subject"),": The template's subject. It can contain variables from the list above."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Body"),": The message's body. HTML and plain text formats can be specified. Leave the HTML template blank to always send the email message in plain text. Enter both templates if you want the email client to determine which format to use.")),(0,i.kt)("h2",{id:"default-mail-templates"},"Default Mail Templates"),(0,i.kt)("p",null,"In case you have modified the mail templates included in TCAdmin, you can find the original templates here."))}u.isMDXComponent=!0}}]);