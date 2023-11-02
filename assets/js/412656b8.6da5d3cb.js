"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[4857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,y=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(y,s(s({ref:t},d),{},{components:r})):n.createElement(y,s({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:7,sidebar_label:"Recommended Registry Changes"},s="Recommended Registry Changes",i={unversionedId:"misc/recommended-registry-changes",id:"misc/recommended-registry-changes",title:"Recommended Registry Changes",description:"These registry changes adjust the memory available for desktop heaps created by non-interactive services. This resolves start errors that may happen on some servers a few days after a reboot.",source:"@site/docs/misc/recommended-registry-changes.mdx",sourceDirName:"misc",slug:"/misc/recommended-registry-changes",permalink:"/misc/recommended-registry-changes",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/misc/recommended-registry-changes.mdx",tags:[],version:"current",lastUpdatedAt:1698914704,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Recommended Registry Changes"},sidebar:"tutorialSidebar",previous:{title:"User Assigned Servers",permalink:"/misc/user-assigned-servers"},next:{title:"Database",permalink:"/category/database"}},c={},l=[{value:"Windows 2008/2012/2016/2019/2022",id:"windows-20082012201620192022",level:2}],d={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recommended-registry-changes"},"Recommended Registry Changes"),(0,a.kt)("p",null,"These registry changes adjust the memory available for desktop heaps created by non-interactive services. This resolves start errors that may happen on some servers a few days after a reboot."),(0,a.kt)("h2",{id:"windows-20082012201620192022"},"Windows 2008/2012/2016/2019/2022"),(0,a.kt)("p",null,"Open the Registry (regedit.exe) and go to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management\n")),(0,a.kt)("p",null,"And adjust two keys:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SessionPoolSize (this is 4 by default, put it to be 10 - remember, 10 as hexadecimal)\nSessionViewSize (this is 30 by default, put it to 80 - again, hexadecimal)\n")),(0,a.kt)("p",null,"Go to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\SubSystems\n")),(0,a.kt)("p",null,"Double-click on the Windows key. What is important (and the only thing that gets changed for that matter) is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SharedSection=1024,20480,2048\n")),(0,a.kt)("p",null,"Close the registry and reboot the server for changes to take affect."))}p.isMDXComponent=!0}}]);