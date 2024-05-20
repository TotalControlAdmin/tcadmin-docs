"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[6867],{461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(4848),o=n(8453),s=n(1470),a=n(9365);const i={sidebar_position:5,sidebar_label:"Server Components"},c="Server Components",l={id:"getting-started/server-components",title:"Server Components",description:"Learn all the components that are associated with TCAdmin",source:"@site/docs/getting-started/server-components.mdx",sourceDirName:"getting-started",slug:"/getting-started/server-components",permalink:"/getting-started/server-components",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/getting-started/server-components.mdx",tags:[],version:"current",lastUpdatedAt:1716196388e3,sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Server Components"},sidebar:"tutorialSidebar",previous:{title:"Initial Configuration",permalink:"/getting-started/initial-configuration"},next:{title:"Updating",permalink:"/getting-started/updating"}},d={},u=[{value:"Monitor",id:"monitor",level:2},{value:"Service Manager",id:"service-manager",level:2},{value:"Start/Stop in Service Mode",id:"startstop-in-service-mode",level:2},{value:"Start/Stop in Console Mode",id:"startstop-in-console-mode",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"server-components",children:"Server Components"}),"\n","\n",(0,r.jsx)(t.p,{children:"Learn all the components that are associated with TCAdmin"}),"\n",(0,r.jsx)(t.p,{children:"TCAdmin consists of two major components. The monitor and the service manager. They can run in either service mode or console mode. When a server is restarted the monitor and service manager are started automatically in service mode."}),"\n",(0,r.jsx)(t.h2,{id:"monitor",children:"Monitor"}),"\n",(0,r.jsx)(t.p,{children:"The monitor runs the control panel website, game monitor, task scheduler and FTP services. It also sends and receives commands from other servers that you have configured."}),"\n",(0,r.jsx)(t.h2,{id:"service-manager",children:"Service Manager"}),"\n",(0,r.jsxs)(t.p,{children:["The service manager is in charge of starting the game/voice services automatically after restarting the server. It also receives start/stop commands from the monitor. You can also use the ",(0,r.jsx)(t.a,{href:"/using-tcadmin/service-browser",children:"service browser"})," to manage the services from remote desktop or ssh."]}),"\n",(0,r.jsx)(t.h2,{id:"startstop-in-service-mode",children:"Start/Stop in Service Mode"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"windows",label:"Windows",children:(0,r.jsxs)(t.p,{children:["To start/stop a service go to ",(0,r.jsx)(t.code,{children:"Start"})," > ",(0,r.jsx)(t.code,{children:"Control Panel"})," > ",(0,r.jsx)(t.code,{children:"Administrative Tools"})," > ",(0,r.jsx)(t.code,{children:"Services."})," Find the service named ",(0,r.jsx)(t.code,{children:"TCAdmin 2.0 Monitor"})," or ",(0,r.jsx)(t.code,{children:"TCAdmin 2.0 Service Manager"})," and ",(0,r.jsx)(t.code,{children:"stop"}),", ",(0,r.jsx)(t.code,{children:"start"})," or ",(0,r.jsx)(t.code,{children:"restart"})," it."]})}),(0,r.jsxs)(a.A,{value:"linux",label:"Linux",children:[(0,r.jsxs)(t.p,{children:["To ",(0,r.jsx)(t.code,{children:"start/stop"})," a service execute ",(0,r.jsx)(t.code,{children:"/home/tcadmin/Monitor/monitor-service"})," or ",(0,r.jsx)(t.code,{children:"/home/tcadmin/Monitor/serviceman-service"})," with ",(0,r.jsx)(t.code,{children:"stop"}),", ",(0,r.jsx)(t.code,{children:"start"})," or ",(0,r.jsx)(t.code,{children:"restart"})," as commandline parameters. For example:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"/home/tcadmin/Monitor/monitor-service start\n/home/tcadmin/Monitor/serviceman-service start\n"})})]})]}),"\n",(0,r.jsx)(t.h2,{id:"startstop-in-console-mode",children:"Start/Stop in Console Mode"}),"\n",(0,r.jsxs)(t.p,{children:["Console mode is useful for troubleshooting. ",(0,r.jsx)(t.a,{href:"/misc/debug-mode",children:"Enable debugging"})," so you can see additional messages that can be used to figure out why something is not working correctly."]}),"\n",(0,r.jsxs)(t.p,{children:["To exit the monitor console enter ",(0,r.jsx)(t.code,{children:"quit"})," and press enter. To exit the service manager console press enter."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Before starting in console mode make sure it is not running in service mode."})}),"\n",(0,r.jsx)(t.h3,{id:""}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"windows",label:"Windows",children:(0,r.jsxs)(t.p,{children:["To start a console go to ",(0,r.jsx)(t.code,{children:"Start"})," > ",(0,r.jsx)(t.code,{children:"Programs"})," > ",(0,r.jsx)(t.code,{children:"TCAdmin"})," > ",(0,r.jsx)(t.code,{children:"Start Monitor Console"})," or ",(0,r.jsx)(t.code,{children:"Start Service Manager Console."})]})}),(0,r.jsxs)(a.A,{value:"linux",label:"Linux",children:[(0,r.jsx)(t.p,{children:"To start the monitor console execute:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd /home/tcadmin/Monitor\n./monitor-service stop\n./monitor-console\n"})}),(0,r.jsx)(t.p,{children:"To start the service manager console execute:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd /home/tcadmin/Monitor\n./serviceman-service stop\n./serviceman-console\n"})})]})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(4164);const o={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>S});var r=n(6540),o=n(4164),s=n(3104),a=n(6347),i=n(205),c=n(7485),l=n(1682),d=n(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=h(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,u]=p({queryString:n,groupId:o}),[v,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,d.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),b=(()=>{const e=l??v;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),o=i[n].value;o!==r&&(l(t),a(o))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=v(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,x.jsx)(f,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function S(e){const t=(0,g.A)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);