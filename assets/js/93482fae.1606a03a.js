"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[4311],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||p[c]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),m=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=k({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??d;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var g=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=m.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},c=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:p},o,{className:(0,l.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},6934:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={sidebar_position:1,sidebar_label:"System Requirements"},s="System Requirements",u={unversionedId:"getting-started/system-requirements",id:"getting-started/system-requirements",title:"System Requirements",description:"System requirements for optimal performance:",source:"@site/docs/getting-started/system-requirements.mdx",sourceDirName:"getting-started",slug:"/getting-started/system-requirements",permalink:"/getting-started/system-requirements",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/getting-started/system-requirements.mdx",tags:[],version:"current",lastUpdatedAt:1686840661,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"System Requirements"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/category/getting-started"},next:{title:"Installation",permalink:"/category/installation"}},m={},d=[{value:"Dependancies",id:"dependancies",level:3},{value:"Optional components",id:"optional-components",level:3},{value:"Required by almost all games",id:"required-by-almost-all-games",level:4},{value:"Check out the automated installer <br />",id:"check-out-the-automated-installer-",level:2},{value:"Manual Installation Dependancies",id:"manual-installation-dependancies",level:2},{value:"CentOS / Fedora / Redhat 64bit",id:"centos--fedora--redhat-64bit",level:3},{value:"Install Mono 6.0 or greater",id:"install-mono-60-or-greater",level:4},{value:"Debian 64bit",id:"debian-64bit",level:3},{value:"Install Mono 6.0 or greater",id:"install-mono-60-or-greater-1",level:4},{value:"Ubuntu 64bit",id:"ubuntu-64bit",level:3},{value:"Install Mono 6.0 or greater",id:"install-mono-60-or-greater-2",level:4},{value:"Windows &amp; Linux",id:"windows--linux",level:3}],p={toc:d},c="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system-requirements"},"System Requirements"),(0,r.kt)("p",null,"System requirements for optimal performance:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows Server"),(0,r.kt)("td",{parentName:"tr",align:null},"2012 R2"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows Server"),(0,r.kt)("td",{parentName:"tr",align:null},"2016"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows Server"),(0,r.kt)("td",{parentName:"tr",align:null},"2019"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows Server"),(0,r.kt)("td",{parentName:"tr",align:null},"2022"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:null},"10 (32/64 bit)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"dependancies"},"Dependancies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet-framework"},"Microsoft .NET Framework 4.7.2 and above")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://npcap.com/dist/npcap-1.75.exe"},'Npcap with "Install Npcap in WinPcap API-compatible mode" enabled (for bandwidth monitor)\n'))),(0,r.kt)("h3",{id:"optional-components"},"Optional components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recommended registry changes #link must be updated"),(0,r.kt)("li",{parentName:"ul"},"A MySQL database located on the same server is recommended for best performance. ",(0,r.kt)("a",{parentName:"li",href:"https://dev.mysql.com/downloads/mysql/"},"Mysql")," ",(0,r.kt)("strong",{parentName:"li"},"(TCAdmin Supports MySQL 8 Password Encryption for Authentication)"))),(0,r.kt)("h4",{id:"required-by-almost-all-games"},"Required by almost all games"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/vs/17/release/vc_redist.x64.exe"},"Microsoft Visual c++ ",(0,r.kt)("strong",{parentName:"a"},"(x64)"))," 2015 to 2022"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/vs/17/release/vc_redist.x86.exe"},"Microsoft Visual c++ ",(0,r.kt)("strong",{parentName:"a"},"(x86)"))," 2015 to 2022"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/download/details.aspx?id=35&6B49FDFB-8E5B-4B07-BC31-15695C5A2143=1"},"Direct X")),(0,r.kt)("li",{parentName:"ul"},"Java ",(0,r.kt)("strong",{parentName:"li"},"required for Minecraft.")," We recommend ",(0,r.kt)("a",{parentName:"li",href:"https://adoptium.net/"},"Adoptium variant")))),(0,r.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,r.kt)("td",{parentName:"tr",align:null},"16.04"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,r.kt)("td",{parentName:"tr",align:null},"18.04"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,r.kt)("td",{parentName:"tr",align:null},"20.04"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,r.kt)("td",{parentName:"tr",align:null},"22.04"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Debian"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Debian"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Debian"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CentOS"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CentOS"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CentOS"),(0,r.kt)("td",{parentName:"tr",align:null},"8.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"check-out-the-automated-installer-"},(0,r.kt)("a",{parentName:"h2",href:"/getting-started/installation/linux-installation"},"Check out the automated installer")," ",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"manual-installation-dependancies"},"Manual Installation Dependancies"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Prior knowledge of Linux server management is required. TCAdmin support does not provide instruction on tasks such as logging in to your server using Putty, executing commands, or installing dependencies for game/voice servers or tools.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"A swap partition is required. Mono is unstable when the server is configured without swap space.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you accidentally install Mono 4 you must uninstall it before installing Mono 6.")),(0,r.kt)("h3",{id:"centos--fedora--redhat-64bit"},"CentOS / Fedora / Redhat 64bit"),(0,r.kt)("h4",{id:"install-mono-60-or-greater"},"Install Mono 6.0 or greater"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.mono-project.com/download/stable/#download-lin-centos"},"Add the Xamarin repository from mono-project.com"),"\nThen execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install mono-complete mono-basic xsp\n")),(0,r.kt)("p",null,"Install 32bit libraries for steamcmd and 32bit games: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/SteamCMD#32-Bit_Libraries_on_64-Bit_Linux_Systems"},"SteamCmd Libraries"),"\nExecute these commands to install other dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y install libpcap schedutils lsof glibc.i686 libstdc++.i686 socat screen\n")),(0,r.kt)("p",null,"Optional: MySQL 5.1 or greater."),(0,r.kt)("h3",{id:"debian-64bit"},"Debian 64bit"),(0,r.kt)("h4",{id:"install-mono-60-or-greater-1"},"Install Mono 6.0 or greater"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.mono-project.com/download/stable/#download-lin-centos"},"Add the Xamarin repository from mono-project.com"),"\nThen execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install mono-complete mono-vbnc mono-xsp\n")),(0,r.kt)("p",null,"Install 32bit libraries for steamcmd and 32bit games: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/SteamCMD#32-Bit_Libraries_on_64-Bit_Linux_Systems"},"SteamCmd Libraries"),"\nExecute these commands to install other dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install libpcap0.8 util-linux lsof socat screen\n")),(0,r.kt)("p",null,"Optional: MySQL 5.1 or greater."),(0,r.kt)("h3",{id:"ubuntu-64bit"},"Ubuntu 64bit"),(0,r.kt)("h4",{id:"install-mono-60-or-greater-2"},"Install Mono 6.0 or greater"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.mono-project.com/download/stable/#download-lin-centos"},"Add the Xamarin repository from mono-project.com"),"\nThen execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install mono-complete mono-vbnc mono-xsp\n")),(0,r.kt)("p",null,"Install 32bit libraries for steamcmd and 32bit games: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/SteamCMD#32-Bit_Libraries_on_64-Bit_Linux_Systems"},"SteamCmd Libraries"),"\nExecute these commands to install other dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install libncurses5 libncursesw5 libpcap0.8 util-linux lsof screen socat iptables-persistent\n")),(0,r.kt)("p",null,"Optional: MySQL 5.1 or greater."),(0,r.kt)("p",null,"Java ",(0,r.kt)("strong",{parentName:"p"},"required for Minecraft.")," We recommend ",(0,r.kt)("a",{parentName:"p",href:"https://adoptium.net/"},"Adoptium variant")))),(0,r.kt)("h3",{id:"windows--linux"},"Windows & Linux"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you plan on having remote servers, it is recommended that you use a MySQL database. You can convert your SQLite database to MySQL at any time using the conversion tool included in TCAdmin.")))}k.isMDXComponent=!0}}]);