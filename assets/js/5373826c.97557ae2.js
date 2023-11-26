"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[182],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(n),p=i,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||r;return n?a.createElement(h,l(l({ref:e},u),{},{components:n})):a.createElement(h,l({ref:e},u))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2429:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2,sidebar_label:"Linux Installation"},l="Linux Installation",o={unversionedId:"getting-started/Installation/linux-installation",id:"getting-started/Installation/linux-installation",title:"Linux Installation",description:"Automated TCAdmin installer for Linux",source:"@site/docs/getting-started/Installation/linux-installation.mdx",sourceDirName:"getting-started/Installation",slug:"/getting-started/Installation/linux-installation",permalink:"/getting-started/Installation/linux-installation",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/getting-started/Installation/linux-installation.mdx",tags:[],version:"current",lastUpdatedAt:1701001265,formattedLastUpdatedAt:"Nov 26, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Linux Installation"},sidebar:"tutorialSidebar",previous:{title:"Windows Installation",permalink:"/getting-started/Installation/windows-installation"},next:{title:"Initial Configuration",permalink:"/getting-started/initial-configuration"}},s={},d=[{value:"Automated TCAdmin installer for Linux",id:"automated-tcadmin-installer-for-linux",level:3},{value:"Manual installation",id:"manual-installation",level:3},{value:"CentOS / Fedora / Redhat",id:"centos--fedora--redhat",level:3},{value:"Debian / Ubuntu",id:"debian--ubuntu",level:3}],u={toc:d},c="wrapper";function m(t){let{components:e,...n}=t;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linux-installation"},"Linux Installation"),(0,i.kt)("h3",{id:"automated-tcadmin-installer-for-linux"},"Automated TCAdmin installer for Linux"),(0,i.kt)("p",null,"The automated installer will automatically install TCAdmin and all of the dependencies."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Run the installer below as root")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home && curl -o tcadmin-installer.sh https://downloads.tcadmin.net/installer/tcadmin-installer.sh && sh tcadmin-installer.sh -i\n")),(0,i.kt)("br",null),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you want to run the command above with sudo, cd first to home & then run the curl command")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home\n")),(0,i.kt)("p",null,"then"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo curl -o tcadmin-installer.sh https://downloads.tcadmin.net/installer/tcadmin-installer.sh && sh tcadmin-installer.sh -i\n")),(0,i.kt)("p",null,"Should you run into any issues, please post them in ",(0,i.kt)("a",{parentName:"p",href:"https://community.tcadmin.com/topic/11831-automated-linux-installer/"},"this thread:")),(0,i.kt)("h3",{id:"manual-installation"},"Manual installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure you have installed the ",(0,i.kt)("a",{parentName:"li",href:"/getting-started/system-requirements"},"System Requirements"),"."),(0,i.kt)("li",{parentName:"ol"},"Download and install the TCAdmin package for your Linux distro.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Run the TCAdmin package commands below as root or sudo.")),(0,i.kt)("h3",{id:"centos--fedora--redhat"},"CentOS / Fedora / Redhat"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://downloads.tcadmin.net/installer/tcadmin-2-bi.noarch.rpm;yum -y install tcadmin-2-bi.noarch.rpm --nogpgcheck\n")),(0,i.kt)("h3",{id:"debian--ubuntu"},"Debian / Ubuntu"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://downloads.tcadmin.net/installer/tcadmin-2-bi.noarch.deb;dpkg -i tcadmin-2-bi.noarch.deb\n")))}m.isMDXComponent=!0}}]);