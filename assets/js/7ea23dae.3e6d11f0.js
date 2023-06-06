"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[4072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},1100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={sidebar_position:6,sidebar_label:"Lets Encrypt"},s="Lets Encrypt",u={unversionedId:"using-tcadmin/server-management/lets-encrypt",id:"using-tcadmin/server-management/lets-encrypt",title:"Lets Encrypt",description:"TCAdmin 2.0.162 and greater supports automatically creating Let's Encrypt certificates for the control panel website and remote server. This feature requires the MVC control panel.",source:"@site/docs/using-tcadmin/server-management/lets-encrypt.mdx",sourceDirName:"using-tcadmin/server-management",slug:"/using-tcadmin/server-management/lets-encrypt",permalink:"/using-tcadmin/server-management/lets-encrypt",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/server-management/lets-encrypt.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Lets Encrypt"},sidebar:"tutorialSidebar",previous:{title:"Server Management",permalink:"/using-tcadmin/server-management/"},next:{title:"Virtual Servers",permalink:"/using-tcadmin/virtual-servers"}},c={},p=[{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Configure Let&#39;s Encrypt",id:"configure-lets-encrypt",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"How to...",id:"how-to",level:2},{value:"Use the control panel without the port <code>(https://domain.com)</code>",id:"use-the-control-panel-without-the-port-httpsdomaincom",level:3},{value:"Enable Let&#39;s Encrypt for many remote servers.",id:"enable-lets-encrypt-for-many-remote-servers",level:3},{value:"Force https",id:"force-https",level:3},{value:"Confirm the file manager is uploading directly to the remote",id:"confirm-the-file-manager-is-uploading-directly-to-the-remote",level:3}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lets-encrypt"},"Lets Encrypt"),(0,a.kt)("p",null,"TCAdmin ",(0,a.kt)("a",{parentName:"p",href:"https://community.tcadmin.com/topic/11567-tcadmin-20162-now-available-stable-with-some-beta-features/"},"2.0.162")," and greater supports automatically creating Let's Encrypt certificates for the control panel website and remote server. This feature requires the MVC control panel."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports custom domain or subdomain (make sure it resolves to your server's primary IP).",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you don't specify a subdomain the primary IP's reverse DNS name will be used. If this fails it will fall back to ","[server-ip]",".dyn.tcadmin.net"))),(0,a.kt)("li",{parentName:"ul"},"Improved speed in file manager uploads and downloads.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When using the control panel with https the file manager upload/downloads go directly to the ",(0,a.kt)("inlineCode",{parentName:"li"},"remote")," server instead of being uploaded to the ",(0,a.kt)("inlineCode",{parentName:"li"},"master")," first then to the ",(0,a.kt)("inlineCode",{parentName:"li"},"remote.")," This improves performance when the ",(0,a.kt)("inlineCode",{parentName:"li"},"master")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"remote")," are on different datacenters.")))),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Port 80")," on the primary IP must be available. This is required by Let's Encrypt the verification process.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Linux")," : Port 80 must not be used by other web servers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Linux")," : On your ",(0,a.kt)("inlineCode",{parentName:"li"},"master")," the control panel website must use the built in web server not Nginx. If you are using Nginx ",(0,a.kt)("a",{parentName:"li",href:"#"},"follow these instructions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Windows")," : On your ",(0,a.kt)("inlineCode",{parentName:"li"},"master")," the control panel website must use the built in web server not IIS. If you are using IIS use ",(0,a.kt)("a",{parentName:"li",href:"https://www.win-acme.com/"},"https://www.win-acme.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Windows")," : Port 80 may be used by IIS or by the monitor but not by other web servers.")),(0,a.kt)("h2",{id:"configure-lets-encrypt"},"Configure Let's Encrypt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Sever Management")," (on the left hand navigation) > ",(0,a.kt)("inlineCode",{parentName:"li"},"Servers")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Select your server")),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Let's Encrypt Configuration")," check ",(0,a.kt)("inlineCode",{parentName:"li"},"Enable support for Let's Encrypt")),(0,a.kt)("li",{parentName:"ul"},"Specify a custom domain or sub domain. If it's not specified it will be generated automatically."),(0,a.kt)("li",{parentName:"ul"},"Save then select ",(0,a.kt)("inlineCode",{parentName:"li"},"Tools")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Restart Monitor.")),(0,a.kt)("li",{parentName:"ul"},"The certificate will be generated in less than 5 minutes.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you didn't specify a domain you should see the autogenerated domain in the server settings after it has been configured correctly."))),(0,a.kt)("li",{parentName:"ul"},"You should be able to access your control panel using ",(0,a.kt)("inlineCode",{parentName:"li"},"https://domain:secureport"))),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("p",null,"  Open a command prompt as administrator and execute these commands to check for errors while creating a certificate. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<your-ip>")," with your server's primary IP. Check the logfile named ",(0,a.kt)("inlineCode",{parentName:"p"},"last.log")," in that folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd C:\\Program Files\\TCAdmin2\\Monitor\\Tools\\LetsEncrypt-Windows\ncreate.bat <your-ip>.dyn.tcadmin.net\n"))),(0,a.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)("p",null,"  Execute these commands from SSH to check for errors while creating a certificate. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<your-ip>")," with your server's primary IP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/tcadmin/Monitor/Tools/LetsEncrypt-Linux\n./create.sh <your-ip>.dyn.tcadmin.net\n")))),(0,a.kt)("h2",{id:"how-to"},"How to..."),(0,a.kt)("h3",{id:"use-the-control-panel-without-the-port-httpsdomaincom"},"Use the control panel without the port ",(0,a.kt)("inlineCode",{parentName:"h3"},"(https://domain.com)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Windows")," : Set the monitor's secure port to ",(0,a.kt)("inlineCode",{parentName:"p"},"443"),", save and restart.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Linux")," : Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/tcadmin/Monitor/tcadmin-config")," and set ",(0,a.kt)("inlineCode",{parentName:"p"},"SECURE_WEB_PORT")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"443"),". Then restart the monitor."),(0,a.kt)("h3",{id:"enable-lets-encrypt-for-many-remote-servers"},"Enable Let's Encrypt for many remote servers."),(0,a.kt)("p",null,"Execute this command on your database:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE tc_servers SET direct_fileman_allowed=1 WHERE server_id <> 1;\n")),(0,a.kt)("p",null,"Then go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Server Management")," (on the left hand navigation) > ",(0,a.kt)("inlineCode",{parentName:"p"},"Servers")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Restart Remotes.")),(0,a.kt)("h3",{id:"force-https"},"Force https"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Security Settings.")," Set SSL Access = All pages"),(0,a.kt)("h3",{id:"confirm-the-file-manager-is-uploading-directly-to-the-remote"},"Confirm the file manager is uploading directly to the remote"),(0,a.kt)("p",null,"Before uploading a file press ",(0,a.kt)("inlineCode",{parentName:"p"},"F12"),". This will open the web browser's ",(0,a.kt)("inlineCode",{parentName:"p"},"developer console"),". Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"network tab"),". Start the upload. You should see the upload requests go to the remote's domain."))}h.isMDXComponent=!0}}]);