"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[5331],{1971:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"using-tcadmin/configuring-plesk-website-as-reverse-proxy","title":"Configuring a Plesk website as a reverse proxy for the control panel","description":"- Login to Plesk","source":"@site/docs/using-tcadmin/configuring-plesk-website-as-reverse-proxy.mdx","sourceDirName":"using-tcadmin","slug":"/using-tcadmin/configuring-plesk-website-as-reverse-proxy","permalink":"/using-tcadmin/configuring-plesk-website-as-reverse-proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/configuring-plesk-website-as-reverse-proxy.mdx","tags":[],"version":"current","lastUpdatedAt":1736865147000,"sidebarPosition":27,"frontMatter":{"sidebar_position":27,"sidebar_label":"Configuring a Plesk website as a reverse proxy for the control panel"},"sidebar":"tutorialSidebar","previous":{"title":"Hosting the control panel website separately","permalink":"/using-tcadmin/hosting-control-panel-seperatly"},"next":{"title":"Misc","permalink":"/category/misc"}}');var o=r(4848),t=r(8453);const i={sidebar_position:27,sidebar_label:"Configuring a Plesk website as a reverse proxy for the control panel"},l="Configuring a Plesk website as a reverse proxy for the control panel",a={},c=[];function d(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configuring-a-plesk-website-as-a-reverse-proxy-for-the-control-panel",children:"Configuring a Plesk website as a reverse proxy for the control panel"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Login to Plesk"}),"\n",(0,o.jsx)(n.li,{children:"Select your domain"}),"\n",(0,o.jsx)(n.li,{children:"Select Apache & nginx Settings"}),"\n",(0,o.jsxs)(n.li,{children:["Uncheck ",(0,o.jsx)(n.code,{children:"Proxy mode"})]}),"\n",(0,o.jsxs)(n.li,{children:["Click on Apply ",(0,o.jsx)(n.strong,{children:"(this is important before continuing)"})]}),"\n",(0,o.jsxs)(n.li,{children:['Set "Additional nginx directives" to the following. Replace ',(0,o.jsx)(n.code,{children:"x.x.x.x:8881"})," with your control panel's IP and secure port."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"location / {\n    proxy_pass https://x.x.x.x:8881;\n    proxy_redirect off;\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Host $server_name;\n    proxy_set_header X-Forwarded-Proto https;\n    client_max_body_size 0;\n    proxy_http_version 1.1;\n    proxy_request_buffering off;\n    proxy_buffering off;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"Last login"})," shows the incorrect IP"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Go to ",(0,o.jsx)(n.code,{children:"servers"})," > ",(0,o.jsx)(n.code,{children:"master"})," > ",(0,o.jsx)(n.code,{children:"website settings"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"Web Proxy IP"})," to the IP that is shown."]}),"\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"Web Proxy IP Header"})," to ",(0,o.jsx)(n.code,{children:"X-Real-IP"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Save and select ",(0,o.jsx)(n.code,{children:"Tools"})," > ",(0,o.jsx)(n.code,{children:"Restart monitor"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"After the control panel has been restarted you need to log out and log in twice so it shows your real IP."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(6540);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);