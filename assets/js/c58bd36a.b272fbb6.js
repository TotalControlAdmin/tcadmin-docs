"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(f,a(a({ref:t},s),{},{components:n})):i.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,sidebar_label:"Two-Step Verification"},a="Two-Step Verification",l={unversionedId:"using-tcadmin/two-step-verification",id:"using-tcadmin/two-step-verification",title:"Two-Step Verification",description:"Configuration",source:"@site/docs/using-tcadmin/two-step-verification.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/two-step-verification",permalink:"/using-tcadmin/two-step-verification",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/two-step-verification.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Two-Step Verification"},sidebar:"tutorialSidebar",previous:{title:"Interface Overview",permalink:"/using-tcadmin/interface-overview"},next:{title:"Security Settings",permalink:"/using-tcadmin/security-settings"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Common Errors",id:"common-errors",level:2},{value:"All generated tokens are expired",id:"all-generated-tokens-are-expired",level:4},{value:"User lost their verification key",id:"user-lost-their-verification-key",level:4},{value:"Admin lost their verification key",id:"admin-lost-their-verification-key",level:4}],s={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"two-step-verification"},"Two-Step Verification"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install an authenticator app on your smartphone. You may use other OTP software or hardware.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Here are some popular authenticator apps we recommend:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.authy.authy&hl=en&gl=US"},"Authy Android")," | ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/twilio-authy/id494168017"},"Authy IOS")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US"},"Google authenticator Android")," | ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/google-authenticator/id388497605"},"Google authenticator IOS"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Log in to TCAdmin."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Account Security")," from the menu options."),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Two-Step Verification")," tab."),(0,o.kt)("li",{parentName:"ul"},"Check ",(0,o.kt)("inlineCode",{parentName:"li"},"Enable two-step verification"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"2FA",src:n(1235).Z,width:"558",height:"726"})),(0,o.kt)("p",null,"If you want to enable two-step for FTP access check ",(0,o.kt)("inlineCode",{parentName:"p"},"Enable two-step verification for FTP connections.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you enable this option configure your FTP client to send the password in the following format: ",(0,o.kt)("inlineCode",{parentName:"p"},"YourPassword#GeneratedToken"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If your software has scanning capabilities you can scan the QR-code.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type the verification key in your Authenticator app or other software/hardware."),(0,o.kt)("li",{parentName:"ul"},'Generate a token and type it in the "Generated Token" field.'),(0,o.kt)("li",{parentName:"ul"},"Click on Save.")),(0,o.kt)("h2",{id:"common-errors"},"Common Errors"),(0,o.kt)("h4",{id:"all-generated-tokens-are-expired"},"All generated tokens are expired"),(0,o.kt)("p",null,"The token is generated based on the current time and is valid for 30 seconds. This required that both the client and server have the correct time."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use NTP to synchronize your date and time on the server:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-time-synchronization-on-ubuntu-20-04"},"How to configure NTP for Linux")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://www.vultr.com/docs/how-to-set-the-timezone-and-configure-ntp-on-windows-server/"},"How to configure NTP for Windows"))),(0,o.kt)("h4",{id:"user-lost-their-verification-key"},"User lost their verification key"),(0,o.kt)("p",null,"You can disable two-step verification by selecting the user, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Actions")," tab and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Disable two-step.")," If the action is not visible it means the user doesn't have two-step authentication enabled."),(0,o.kt)("h4",{id:"admin-lost-their-verification-key"},"Admin lost their verification key"),(0,o.kt)("p",null,"Start the monitor in console mode. Execute this command in the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"disable-two-step Admin\n")))}u.isMDXComponent=!0},1235:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2FA-72ad89bf845b4512efda594ca343d5e3.png"}}]);