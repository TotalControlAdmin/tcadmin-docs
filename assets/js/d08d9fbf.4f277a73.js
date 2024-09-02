"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[2218],{1055:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=t(4848),i=t(8453);const r={sidebar_position:3,sidebar_label:"ASP.NET Themes"},o="ASP.NET Themes",l={id:"customizations/themes/asp-net-themes",title:"ASP.NET Themes",description:"Themes",source:"@site/docs/customizations/themes/asp-net-themes.mdx",sourceDirName:"customizations/themes",slug:"/customizations/themes/asp-net-themes",permalink:"/customizations/themes/asp-net-themes",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/themes/asp-net-themes.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"ASP.NET Themes"},sidebar:"tutorialSidebar",previous:{title:"MVC Themes with ThemeBuilder",permalink:"/customizations/themes/mvc-themes"},next:{title:"Languages",permalink:"/customizations/languages"}},h={},a=[{value:"Themes",id:"themes",level:2},{value:"Creating",id:"creating",level:3},{value:"Using Custom Icon Images",id:"using-custom-icon-images",level:3},{value:"Resellers",id:"resellers",level:3}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"aspnet-themes",children:"ASP.NET Themes"})}),"\n",(0,n.jsx)(s.h2,{id:"themes",children:"Themes"}),"\n",(0,n.jsx)(s.p,{children:"Themes allow administrators and resellers to specify custom colors, style sheets, headers, and footers."}),"\n",(0,n.jsx)(s.h3,{id:"creating",children:"Creating"}),"\n",(0,n.jsx)(s.p,{children:"To create a new theme, follow these steps:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.code,{children:"System"})," > ",(0,n.jsx)(s.code,{children:"General Settings"})," > ",(0,n.jsx)(s.code,{children:"Themes"})," > ",(0,n.jsx)(s.code,{children:"New"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Configure the following settings:"}),"\n"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Location"}),": The path where the theme files are located."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Theme Owner"}),': The user that owns the theme. Specify "System" to create a top-level template.']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Name"}),": The name shown in the themes list."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Page Title"}),": The prefix added to the page titles."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Hostname"}),": This theme is selected automatically when the control panel is accessed using this hostname. For example, your reseller can create a hostname like ",(0,n.jsx)(s.code,{children:"panel.resellerdomain.com"}),". When you access that hostname, the theme will be selected automatically. The hostname must resolve to the control panel's IP."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Logout URL"}),": The URL where the user is redirected after logging out. Leave blank to use the default URL configured by the administrator."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Default Reseller Theme"}),": If checked, a copy of this theme is assigned to the reseller when it is created. It can still be disabled if you don't want it to show up in the themes list."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Enabled"}),": Disable this theme if you don't want it to show up in the themes list."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Default"}),": If the user has not selected a theme, the default theme is used."]}),"\n"]}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"Configure Theme Options for custom colors and images, and use the Advanced section for custom CSS, header, and footer."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"using-custom-icon-images",children:"Using Custom Icon Images"}),"\n",(0,n.jsx)(s.p,{children:"To use custom images, you need to recreate the same directory structure under the theme's folder."}),"\n",(0,n.jsxs)(s.p,{children:["For example, the URL to the Users icon is: ",(0,n.jsx)(s.code,{children:"http://127.0.0.1:8880/App_Themes/Default/Images/ControlPanel/MenuIcons/Base/Users.png"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Create this directory structure with your custom image. Make sure the ",(0,n.jsx)(s.code,{children:"tcadmin"})," or ",(0,n.jsx)(s.code,{children:"TCAWeb"})," user has permissions to read the file."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Windows: ",(0,n.jsx)(s.code,{children:"C:\\Program Files\\TCAdmin2\\ControlPanel\\User_Themes\\1\\00000000-0000-0000-0000-000000000001\\Images\\ControlPanel\\MenuIcons\\Base\\Users.png"})]}),"\n",(0,n.jsxs)(s.li,{children:["Linux: ",(0,n.jsx)(s.code,{children:"/home/tcadmin/ControlPanel/User_Themes/1/00000000-0000-0000-0000-000000000001/Images/ControlPanel/MenuIcons/Base/Users.png"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For resellers, since they don't have direct access to create the directory structure, you can export your theme, create the directory structure in the zip file, and import it again. Only image and CSS files are allowed.\nNote: You also need to create the 16x16 and 24x24 icons for this to work (e.g., ",(0,n.jsx)(s.code,{children:"Users16x16.png"})," and ",(0,n.jsx)(s.code,{children:"Users24x24.png"}),")."]}),"\n",(0,n.jsx)(s.h3,{id:"resellers",children:"Resellers"}),"\n",(0,n.jsx)(s.p,{children:"Resellers can have their own themes. You can specify the maximum number of themes a reseller can have in the role settings."})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>l});var n=t(6540);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);