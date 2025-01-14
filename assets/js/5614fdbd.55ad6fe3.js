"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[7817],{8538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"getting-started/updating","title":"updating","description":"Learn how to update to newer versions of TCAdmin","source":"@site/docs/getting-started/updating.mdx","sourceDirName":"getting-started","slug":"/getting-started/updating","permalink":"/getting-started/updating","draft":false,"unlisted":false,"editUrl":"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/getting-started/updating.mdx","tags":[],"version":"current","lastUpdatedAt":1736865147000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"Updating"},"sidebar":"tutorialSidebar","previous":{"title":"Server Components","permalink":"/getting-started/server-components"},"next":{"title":"Using TCAdmin","permalink":"/category/using-tcadmin"}}');var r=n(4848),o=n(8453),s=n(5537),l=n(9329);const i={sidebar_position:5,sidebar_label:"Updating"},d="Updating",u={},c=[{value:"Update Mono from 2.x or 4.x to 5.x",id:"update-mono-from-2x-or-4x-to-5x",level:2},{value:"Install Mono (CentOS)",id:"install-mono-centos",level:3},{value:"Install Mono (Debian/Ubuntu)",id:"install-mono-debianubuntu",level:3},{value:"Automatic Update",id:"automatic-update",level:2},{value:"Manual Update",id:"manual-update",level:2},{value:"Manual Update Procedures",id:"manual-update-procedures",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Learn how to update to newer versions of TCAdmin"}),"\n",(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"updating",children:"Updating"})}),"\n",(0,r.jsx)(t.h2,{id:"update-mono-from-2x-or-4x-to-5x",children:"Update Mono from 2.x or 4.x to 5.x"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Add the Xamarin repository to your server's Configuration: ",(0,r.jsx)(t.a,{href:"https://www.mono-project.com/download/stable/#download-lin",children:"https://www.mono-project.com/download/stable/#download-lin"})]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"install-mono-centos",children:"Install Mono (CentOS)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yum install mono-complete mono-basic xsp\n"})}),"\n",(0,r.jsx)(t.h3,{id:"install-mono-debianubuntu",children:"Install Mono (Debian/Ubuntu)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"apt-get install mono-complete mono-vbnc mono-xsp\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Edit ",(0,r.jsx)(t.strong,{children:"/home/tcadmin/Monitor/mono-config."})," Change the value of ",(0,r.jsx)(t.strong,{children:"MONO_FOLDER"})," to ",(0,r.jsx)(t.strong,{children:"/usr"})]}),"\n",(0,r.jsx)(t.li,{children:"Reinstall your current TCAdmin files with this command:"}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["(replace ",(0,r.jsx)(t.strong,{children:"2.0.119"})," with your current version):"]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"/home/tcadmin/Monitor/updatetool 2.0.119\n"})}),"\n",(0,r.jsx)(t.h2,{id:"automatic-update",children:"Automatic Update"}),"\n",(0,r.jsx)(t.p,{children:"TCAdmin's automatic update feature updates the master and all remote servers with a few clicks. To update automatically follow these steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Select ",(0,r.jsx)(t.strong,{children:"System"})," > ",(0,r.jsx)(t.strong,{children:"Check for Updates"})," on the sidebar."]}),"\n",(0,r.jsxs)(t.li,{children:["Click on the ",(0,r.jsx)(t.strong,{children:"Check for Updates"})," button."]}),"\n",(0,r.jsxs)(t.li,{children:["Select the ",(0,r.jsx)(t.strong,{children:"first"})," update available at the top of the list."]}),"\n",(0,r.jsxs)(t.li,{children:["Click on the ",(0,r.jsx)(t.strong,{children:"Install Selected Update"})," button."]}),"\n",(0,r.jsx)(t.li,{children:"After a few minutes the update will be completed and you will be redirected to the admin home page."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Image Alt Text",src:n(3630).A+"",width:"920",height:"365"})}),"\n",(0,r.jsx)(t.h2,{id:"manual-update",children:"Manual Update"}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"It is recommended to perform a manual update only in two scenarios: when a new remote server has been added or when the web update process has failed. The web update ensures that your database is updated before updating the files. Neglecting to update the database while updating may result in TCAdmin failing to start or encountering unpredictable errors."})}),"\n",(0,r.jsx)(t.h3,{id:"manual-update-procedures",children:"Manual Update Procedures"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"windows",label:"Windows",children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Log in to your server's remote desktop."}),"\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Start"})," > ",(0,r.jsx)(t.strong,{children:"Run"})," and enter the following command. Replace ",(0,r.jsx)(t.strong,{children:"C:\\Program Files\\TCAdmin2"})," with the path to your TCAdmin installation folder"]}),"\n",(0,r.jsx)(t.li,{children:"If the update completes successfully you should not see any errors in the update console and the Monitor and Service Manager services should be started automatically."}),"\n"]}),(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.strong,{children:"2.0.173.0"})," with the version you want to update to:"]})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'"C:\\Program Files\\TCAdmin2\\Monitor\\TCAdminUpdateTool.exe" 2.0.173.0\n'})})]}),(0,r.jsxs)(l.A,{value:"linux",label:"Linux",children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Log in to your server with ssh"}),"\n",(0,r.jsx)(t.li,{children:"Execute the following command"}),"\n",(0,r.jsx)(t.li,{children:"If the update completes successfully you should not see any errors in the update console and the Monitor and Service Manager services should be started automatically."}),"\n"]}),(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.strong,{children:"2.0.173.0"})," with the version you want to update to:"]})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"/home/tcadmin/Monitor/updatetool 2.0.173.0\n"})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(6540),r=n(4164),o=n(5627),s=n(6347),l=n(372),i=n(604),d=n(1861),u=n(8749);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,c]=m({queryString:n,groupId:r}),[g,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=d??g;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),x(e)}),[c,x,o]),tabValues:o}}var x=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),r=l[n].value;r!==a&&(d(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{i.push(e)},onKeyDown:c,onClick:u,...o,className:(0,r.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,f.jsx)(j,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function y(e){const t=(0,x.A)();return(0,f.jsx)(w,{...e,children:c(e.children)},String(t))}},3630:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/WebUpdate-fa50910298f33b9843cf1529d8d60dae.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(6540);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);