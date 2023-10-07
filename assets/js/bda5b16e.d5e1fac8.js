"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[356],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:7,sidebar_label:"Mail Server Configuration"},o="Mail Server Configuration",l={unversionedId:"using-tcadmin/mail-server-config",id:"using-tcadmin/mail-server-config",title:"Mail Server Configuration",description:"To configure your mail server go to System (on the left-hand navigation) > Settings > Mail Server Settings. If your server requires authentication make sure you enter the correct username and password.",source:"@site/docs/using-tcadmin/mail-server-config.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/mail-server-config",permalink:"/using-tcadmin/mail-server-config",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/mail-server-config.mdx",tags:[],version:"current",lastUpdatedAt:1696666871,formattedLastUpdatedAt:"Oct 7, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Mail Server Configuration"},sidebar:"tutorialSidebar",previous:{title:"Virtual Servers",permalink:"/using-tcadmin/virtual-servers"},next:{title:"Game/Voice Configuration",permalink:"/using-tcadmin/game-voice-configuration/"}},s={},c=[{value:"Send Email with Gmail",id:"send-email-with-gmail",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mail-server-configuration"},"Mail Server Configuration"),(0,i.kt)("p",null,"To configure your mail server go to ",(0,i.kt)("inlineCode",{parentName:"p"},"System")," (on the left-hand navigation) > ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Mail Server Settings"),". If your server requires authentication make sure you enter the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"."),(0,i.kt)("p",null,"If your server requires or supports secure connections you can select a secure method next to ",(0,i.kt)("inlineCode",{parentName:"p"},"SSL/TLS")," Mode."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MailServerSettings",src:r(8807).Z,width:"546",height:"392"})),(0,i.kt)("h2",{id:"send-email-with-gmail"},"Send Email with Gmail"),(0,i.kt)("p",null,"First ",(0,i.kt)("a",{parentName:"p",href:"http://mail.google.com/support/bin/answer.py?answer=13273"},"enable POP")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/settings/security/lesssecureapps"},"enable less secure apps")," in your gmail account"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the following settings to send email with your gmail account:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Send Method : ",(0,i.kt)("inlineCode",{parentName:"li"},"SMTP")),(0,i.kt)("li",{parentName:"ul"},"SSL/TLS Mode : ",(0,i.kt)("inlineCode",{parentName:"li"},"Explicit")),(0,i.kt)("li",{parentName:"ul"},"Server : ",(0,i.kt)("inlineCode",{parentName:"li"},"smtp.gmail.com")),(0,i.kt)("li",{parentName:"ul"},"Port : ",(0,i.kt)("inlineCode",{parentName:"li"},"587")),(0,i.kt)("li",{parentName:"ul"},"User : your full email address ",(0,i.kt)("inlineCode",{parentName:"li"},"(including @gmail.com or @your_domain.com)")),(0,i.kt)("li",{parentName:"ul"},"Password : ",(0,i.kt)("inlineCode",{parentName:"li"},"your Gmail password")),(0,i.kt)("li",{parentName:"ul"},'Default "From" Email : your full email address ',(0,i.kt)("inlineCode",{parentName:"li"},"(including @gmail.com or @your_domain.com)")),(0,i.kt)("li",{parentName:"ul"},'Default "From" Name : Your name or organization')))))}p.isMDXComponent=!0},8807:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/MailServerSettings-ce7931aba66563aaf13d26d367fde6c3.png"}}]);