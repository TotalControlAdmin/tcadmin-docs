"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[1254],{4958:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var i=e(4848),a=e(8453);const l={sidebar_position:2,sidebar_label:"Linux Installation"},s="Linux Installation",o={id:"getting-started/Installation/linux-installation",title:"Linux Installation",description:"Automated TCAdmin installer for Linux",source:"@site/docs/getting-started/Installation/linux-installation.mdx",sourceDirName:"getting-started/Installation",slug:"/getting-started/Installation/linux-installation",permalink:"/getting-started/Installation/linux-installation",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/getting-started/Installation/linux-installation.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Linux Installation"},sidebar:"tutorialSidebar",previous:{title:"Windows Installation",permalink:"/getting-started/Installation/windows-installation"},next:{title:"Initial Configuration",permalink:"/getting-started/initial-configuration"}},d={},r=[{value:"Automated TCAdmin installer for Linux",id:"automated-tcadmin-installer-for-linux",level:3},{value:"Manual installation",id:"manual-installation",level:3},{value:"CentOS / Fedora / Redhat",id:"centos--fedora--redhat",level:3},{value:"Debian / Ubuntu",id:"debian--ubuntu",level:3}];function c(n){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"linux-installation",children:"Linux Installation"})}),"\n",(0,i.jsx)(t.h3,{id:"automated-tcadmin-installer-for-linux",children:"Automated TCAdmin installer for Linux"}),"\n",(0,i.jsx)(t.p,{children:"The automated installer will automatically install TCAdmin and all of the dependencies."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Run the installer below as root"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cd /home && curl -o tcadmin-installer.sh https://downloads.tcadmin.net/installer/tcadmin-installer.sh && sh tcadmin-installer.sh -i\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"If you want to run the command above with sudo, cd first to home & then run the curl command"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cd /home\n"})}),"\n",(0,i.jsx)(t.p,{children:"then"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"sudo curl -o tcadmin-installer.sh https://downloads.tcadmin.net/installer/tcadmin-installer.sh && sh tcadmin-installer.sh -i\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Should you run into any issues, please post them in ",(0,i.jsx)(t.a,{href:"https://community.tcadmin.com/topic/11831-automated-linux-installer/",children:"this thread:"})]}),"\n",(0,i.jsx)(t.h3,{id:"manual-installation",children:"Manual installation"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Make sure you have installed the ",(0,i.jsx)(t.a,{href:"/getting-started/system-requirements",children:"System Requirements"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Download and install the TCAdmin package for your Linux distro."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Run the TCAdmin package commands below as root or sudo."})}),"\n",(0,i.jsx)(t.h3,{id:"centos--fedora--redhat",children:"CentOS / Fedora / Redhat"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"wget https://downloads.tcadmin.net/installer/tcadmin-2-bi.noarch.rpm;yum -y install tcadmin-2-bi.noarch.rpm --nogpgcheck\n"})}),"\n",(0,i.jsx)(t.h3,{id:"debian--ubuntu",children:"Debian / Ubuntu"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"wget https://downloads.tcadmin.net/installer/tcadmin-2-bi.noarch.deb;dpkg -i tcadmin-2-bi.noarch.deb\n"})})]})}function u(n={}){const{wrapper:t}={...(0,a.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>o});var i=e(6540);const a={},l=i.createContext(a);function s(n){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(l.Provider,{value:t},n.children)}}}]);