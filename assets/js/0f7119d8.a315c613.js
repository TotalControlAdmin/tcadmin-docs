"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[3619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5,sidebar_label:"Debug Mode"},a="Debug Mode",l={unversionedId:"misc/debug-mode",id:"misc/debug-mode",title:"Debug Mode",description:"Monitor Debugging",source:"@site/docs/misc/debug-mode.mdx",sourceDirName:"misc",slug:"/misc/debug-mode",permalink:"/misc/debug-mode",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/misc/debug-mode.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Debug Mode"},sidebar:"tutorialSidebar",previous:{title:"Misc",permalink:"/category/misc"},next:{title:"Service Browser",permalink:"/misc/service-browser"}},c={},u=[{value:"Monitor Debugging",id:"monitor-debugging",level:2},{value:"Website Debugging",id:"website-debugging",level:2}],s={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debug-mode"},"Debug Mode"),(0,o.kt)("h2",{id:"monitor-debugging"},"Monitor Debugging"),(0,o.kt)("p",null,"To configure the monitor in debug mode edit ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\TCAdmin2\\Monitor\\TCAdminMonitor.exe.config")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/tcadmin/Monitor/TCAdminMonitor.exe.config"),". Change this line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<add key="TCAdmin.Debug" value="False" />\n')),(0,o.kt)("p",null,"To"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<add key="TCAdmin.Debug" value="True" />\n')),(0,o.kt)("p",null,"Stop the monitor service and start it in ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/server-components#startstop-in-console-mode"},"console mode"),". When the monitor starts up or a task is executed you should see debug messages."),(0,o.kt)("h2",{id:"website-debugging"},"Website Debugging"),(0,o.kt)("p",null,"To configure the website in debug mode edit ",(0,o.kt)("inlineCode",{parentName:"p"},"ControlPanel\\Windows.config")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ControlPanel\\Linux.config")," depending on your operating system. Change this line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<compilation debug="false" strict="true" explicit="true">\n')),(0,o.kt)("p",null,"To:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<compilation debug="true" strict="true" explicit="true">\n')),(0,o.kt)("p",null,"Then restart the monitor. When an error occurs you should see the stack trace so we can help you troubleshoot. Also additional information is shown in the footer."))}p.isMDXComponent=!0}}]);