"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[2537],{7802:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(4848),o=i(8453);const r={sidebar_position:2,sidebar_label:"Two-Step Verification"},s="Two-Step Verification",a={id:"using-tcadmin/two-step-verification",title:"Two-Step Verification",description:"Configuration",source:"@site/docs/using-tcadmin/two-step-verification.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/two-step-verification",permalink:"/using-tcadmin/two-step-verification",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/two-step-verification.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Two-Step Verification"},sidebar:"tutorialSidebar",previous:{title:"Interface Overview",permalink:"/using-tcadmin/interface-overview"},next:{title:"Security Settings",permalink:"/using-tcadmin/security-settings"}},c={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Common Errors",id:"common-errors",level:2},{value:"All generated tokens are expired",id:"all-generated-tokens-are-expired",level:4},{value:"User lost their verification key",id:"user-lost-their-verification-key",level:4},{value:"Admin lost their verification key",id:"admin-lost-their-verification-key",level:4}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"two-step-verification",children:"Two-Step Verification"})}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Install an authenticator app on your smartphone. You may use other OTP software or hardware."}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"Here are some popular authenticator apps we recommend:"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=com.authy.authy&hl=en&gl=US",children:"Authy Android"})," | ",(0,n.jsx)(t.a,{href:"https://apps.apple.com/us/app/twilio-authy/id494168017",children:"Authy IOS"})]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US",children:"Google authenticator Android"})," | ",(0,n.jsx)(t.a,{href:"https://apps.apple.com/us/app/google-authenticator/id388497605",children:"Google authenticator IOS"})]})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Log in to TCAdmin."}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.code,{children:"Account Security"})," from the menu options."]}),"\n",(0,n.jsxs)(t.li,{children:["Select the ",(0,n.jsx)(t.code,{children:"Two-Step Verification"})," tab."]}),"\n",(0,n.jsxs)(t.li,{children:["Check ",(0,n.jsx)(t.code,{children:"Enable two-step verification"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"2FA",src:i(1288).A+"",width:"558",height:"726"})}),"\n",(0,n.jsxs)(t.p,{children:["If you want to enable two-step for FTP access check ",(0,n.jsx)(t.code,{children:"Enable two-step verification for FTP connections."})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you enable this option configure your FTP client to send the password in the following format: ",(0,n.jsx)(t.code,{children:"YourPassword#GeneratedToken"})]})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"If your software has scanning capabilities you can scan the QR-code."})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Type the verification key in your Authenticator app or other software/hardware."}),"\n",(0,n.jsx)(t.li,{children:'Generate a token and type it in the "Generated Token" field.'}),"\n",(0,n.jsx)(t.li,{children:"Click on Save."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"common-errors",children:"Common Errors"}),"\n",(0,n.jsx)(t.h4,{id:"all-generated-tokens-are-expired",children:"All generated tokens are expired"}),"\n",(0,n.jsx)(t.p,{children:"The token is generated based on the current time and is valid for 30 seconds. This required that both the client and server have the correct time."}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"Use NTP to synchronize your date and time on the server:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-time-synchronization-on-ubuntu-20-04",children:"How to configure NTP for Linux"})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.vultr.com/docs/how-to-set-the-timezone-and-configure-ntp-on-windows-server/",children:"How to configure NTP for Windows"})})]}),"\n",(0,n.jsx)(t.h4,{id:"user-lost-their-verification-key",children:"User lost their verification key"}),"\n",(0,n.jsxs)(t.p,{children:["You can disable two-step verification by selecting the user, select the ",(0,n.jsx)(t.code,{children:"Actions"})," tab and click on ",(0,n.jsx)(t.code,{children:"Disable two-step."})," If the action is not visible it means the user doesn't have two-step authentication enabled."]}),"\n",(0,n.jsx)(t.h4,{id:"admin-lost-their-verification-key",children:"Admin lost their verification key"}),"\n",(0,n.jsxs)(t.p,{children:["Start the monitor in ",(0,n.jsx)(t.a,{href:"/getting-started/server-components#startstop-in-console-mode",children:"console mode"}),". Execute this command in the console:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"disable-two-step Admin\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1288:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/2FA-72ad89bf845b4512efda594ca343d5e3.png"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);