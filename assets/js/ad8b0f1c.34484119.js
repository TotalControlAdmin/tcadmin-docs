"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[7188],{6312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=n(4848),s=n(8453),i=n(1470),r=n(9365);const o={sidebar_position:22,sidebar_label:"SteamCmd"},l="SteamCmd",c={id:"using-tcadmin/steamcmd/index",title:"SteamCmd",description:"Configure TCAdmin to use SteamCmd",source:"@site/docs/using-tcadmin/steamcmd/index.mdx",sourceDirName:"using-tcadmin/steamcmd",slug:"/using-tcadmin/steamcmd/",permalink:"/using-tcadmin/steamcmd/",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/steamcmd/index.mdx",tags:[],version:"current",lastUpdatedAt:1716196388e3,sidebarPosition:22,frontMatter:{sidebar_position:22,sidebar_label:"SteamCmd"},sidebar:"tutorialSidebar",previous:{title:"Support System",permalink:"/using-tcadmin/support-system"},next:{title:"Workshop Browser",permalink:"/using-tcadmin/steamcmd/workshop-browser"}},d={},h=[{value:"Configure TCAdmin to use SteamCmd",id:"configure-tcadmin-to-use-steamcmd",level:2},{value:"Configure the game",id:"configure-the-game",level:3},{value:"Configure the Steam Account used by TCAdmin",id:"configure-the-steam-account-used-by-tcadmin",level:3},{value:"Download the Game Files",id:"download-the-game-files",level:3},{value:"Updating a service",id:"updating-a-service",level:3},{value:"Steam Guard Activation",id:"steam-guard-activation",level:2},{value:"Configure Steam Update Notifications",id:"configure-steam-update-notifications",level:2},{value:"Steam badges",id:"steam-badges",level:3},{value:"Steam scheduled task configuration",id:"steam-scheduled-task-configuration",level:3},{value:"Common errors",id:"common-errors",level:2},{value:"steamcmd: No such file or directory",id:"steamcmd-no-such-file-or-directory",level:3},{value:"A Steam Engine Instance already exists",id:"a-steam-engine-instance-already-exists",level:3},{value:"Failed to create directory <code>/steam/SteamApps</code>",id:"failed-to-create-directory-steamsteamapps",level:3},{value:"Referenced character was not allowed in XML. <code>Normalization is True, checkCharacters = True Line 21, position 40.</code>",id:"referenced-character-was-not-allowed-in-xml-normalization-is-true-checkcharacters--true-line-21-position-40",level:3},{value:"Custom SteamCmd Scripts",id:"custom-steamcmd-scripts",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"steamcmd",children:"SteamCmd"}),"\n",(0,a.jsx)(t.h2,{id:"configure-tcadmin-to-use-steamcmd",children:"Configure TCAdmin to use SteamCmd"}),"\n",(0,a.jsx)(t.h3,{id:"configure-the-game",children:"Configure the game"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Go to ",(0,a.jsx)(t.code,{children:"System"})," (on the left-hand navigation) > ",(0,a.jsx)(t.code,{children:"Settings"})," > ",(0,a.jsx)(t.code,{children:"Games"})," > ",(0,a.jsx)(t.code,{children:"Select the game"})," > ",(0,a.jsx)(t.code,{children:"Select the Steam Settings"})," tab."]}),"\n",(0,a.jsx)(t.li,{children:'Select "Enabled (steamcmd)"'}),"\n",(0,a.jsxs)(t.li,{children:["Enter the steam app id of the game's ",(0,a.jsx)(t.strong,{children:"dedicated server"}),". Specify a steam account if needed. You can find a list of application ids here: ",(0,a.jsx)(t.a,{href:"http://developer.valvesoftware.com/wiki/Steam_Application_IDs",children:"Steam_Application_IDs"})]}),"\n",(0,a.jsx)(t.li,{children:"Select the Feature Permissions tab"}),"\n",(0,a.jsx)(t.li,{children:"Enable Steam Update for all user types."}),"\n",(0,a.jsx)(t.li,{children:"Save"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"configure-the-steam-account-used-by-tcadmin",children:"Configure the Steam Account used by TCAdmin"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Go to ",(0,a.jsx)(t.code,{children:"System"})," (on the left-hand navigation) > ",(0,a.jsx)(t.code,{children:"Settings"})," > ",(0,a.jsx)(t.code,{children:"Default Steam Settings"})]}),"\n",(0,a.jsxs)(t.li,{children:["Enter your Steam account user and password. It is recommended that you set the default user to ",(0,a.jsx)(t.code,{children:"anonymous"})," with a blank password. If a game requires a different account specify it in the game's settings."]}),"\n",(0,a.jsx)(t.li,{children:"Save"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"download-the-game-files",children:"Download the Game Files"}),"\n",(0,a.jsxs)(t.p,{children:["You can download the game's files by going to ",(0,a.jsx)(t.code,{children:"System"})," (on the left-hand navigation) > ",(0,a.jsx)(t.code,{children:"Settings"})," > ",(0,a.jsx)(t.code,{children:"Game Tools"}),". Select the ",(0,a.jsx)(t.code,{children:"Steam Game Downloader tool"}),". Select the game and the server where the files will be downloaded, then execute the task. The first time steamcmd is used TCAdmin will attempt to install it."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"For troubleshooting follow the instructions below."})}),"\n",(0,a.jsx)(t.h3,{id:"updating-a-service",children:"Updating a service"}),"\n",(0,a.jsx)(t.p,{children:"After following the previous instructions you should be able to select a game server and click on Steam Update to update the game files."}),"\n",(0,a.jsx)(t.h2,{id:"steam-guard-activation",children:"Steam Guard Activation"}),"\n",(0,a.jsx)(t.p,{children:"If you have Steam Guard enabled on your account, the first time you use the SteamCmd features in TCAdmin you will receive an email with the Steam Guard code. Follow these instructions to use that code."}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(r.A,{value:"windows",label:"Windows",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Go to ",(0,a.jsx)(t.code,{children:"System"})," (on the left-hand navigation) > ",(0,a.jsx)(t.code,{children:"Settings"})," > ",(0,a.jsx)(t.code,{children:"Game Tools"}),". Select the ",(0,a.jsx)(t.code,{children:"Steam Game Downloader tool"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Select a game that uses steamcmd."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Select the server."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Enter the steam guard code and execute. If you don't have a steam guard code execute once to get the code then a second time to use the code."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If you don't get a login error it worked correctly."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["If ",(0,a.jsx)(t.code,{children:"Execute as service's user"})," is ",(0,a.jsx)(t.strong,{children:"checked"})," in the game's Steam settings"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Log in to your control panel and select a game server."}),"\n",(0,a.jsxs)(t.li,{children:["Click on Steam update. That will create the folder ",(0,a.jsx)(t.code,{children:"C:\\TCAFiles\\Users\\SteamCmd"})]}),"\n",(0,a.jsx)(t.li,{children:"Click on Service Settings."}),"\n",(0,a.jsx)(t.li,{children:"Click on Preview next to the Commandline field."}),"\n",(0,a.jsx)(t.li,{children:"Copy the runas command and execute it from remote desktop."}),"\n",(0,a.jsx)(t.li,{children:"It will asks for the password. Copy and paste the one shown in the preview."}),"\n",(0,a.jsx)(t.li,{children:"This will open a command prompt as the game server's user (tcagame by default)."}),"\n",(0,a.jsx)(t.li,{children:"Execute these commands. It will ask for the account's password and steam guard code."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"cd C:\\TCAFiles\\Users\\SteamCmd\nsteamcmd.exe +login YOUR-STEAM-ACCOUNT\n"})}),"\n"]}),"\n"]})}),(0,a.jsxs)(r.A,{value:"linux",label:"Linux",children:[(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"If you receive the code in the Steam app configure it to send it with emails. After configuring TCAdmin you can change codes back to the Steam app."})}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Activate steam as root","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Execute these commands as root. It will ask for the account's password and steam guard code."}),"\n"]}),"\n"]}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd /home/tcadmin/Monitor/Tools/SteamCmd\n./steamcmd.sh +login YOUR-STEAM-ACCOUNT\n"})}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Activate steam as tcagame","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Execute these commands as root. It will ask for the account's password and steam guard code."}),"\n"]}),"\n"]}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su tcagame\ncd /home/tcagame/SteamCmd\n./steamcmd.sh +login YOUR-STEAM-ACCOUNT\n"})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"configure-steam-update-notifications",children:"Configure Steam Update Notifications"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Go to ",(0,a.jsx)(t.code,{children:"System"})," (on the left-hand navigation) > ",(0,a.jsx)(t.code,{children:"Settings"})," > ",(0,a.jsx)(t.code,{children:"Default Steam Settings"}),". Enter your Steam API key. You can get a free API key from ",(0,a.jsx)(t.a,{href:"https://steamcommunity.com/dev/apikey",children:"https://steamcommunity.com/dev/apikey"})]}),"\n",(0,a.jsx)(t.li,{children:"Go to Settings > Games > Select the Game > Steam Settings. Enter the value for Store Id (for Steam API). Get this id from the game's URL."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{title:"example",type:"info",children:(0,a.jsxs)(t.p,{children:["if the URL to the game is ",(0,a.jsx)(t.a,{href:"http://store.steampowered.com/app/4000/",children:"http://store.steampowered.com/app/4000/"})," set this value to 4000."]})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If all goes well you should see an update notification when you select the game server."}),"\n",(0,a.jsx)(t.li,{children:"Enabling this option also allows you to configure the Steam Update scheduled task to check if an update is available before running the update. This prevents unnecessary restarts."}),"\n",(0,a.jsxs)(t.li,{children:["If you are using MVC templates go to ",(0,a.jsx)(t.code,{children:"System"})," (on the left-hand navigation) > ",(0,a.jsx)(t.code,{children:"Setting"}),"s > ",(0,a.jsx)(t.code,{children:"Plugin Repository"})," > and install the module named ",(0,a.jsx)(t.code,{children:"Steam Badges"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"When you enable this option for the first time all game servers will say there is an update available because the game server's current version is not saved. Run the steam update and the message will go away."})}),"\n",(0,a.jsx)(t.h3,{id:"steam-badges",children:"Steam badges"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(r.A,{value:"mvc",label:"MVC Templates",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"SteamBadges",src:n(6745).A+"",width:"202",height:"98"})})}),(0,a.jsx)(r.A,{value:"asp",label:"ASP.NET Templates",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"SteamUpdateAvailable",src:n(3757).A+"",width:"334",height:"230"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"steam-scheduled-task-configuration",children:"Steam scheduled task configuration"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"SteamUpdateScheduledScriptOptions",src:n(1632).A+"",width:"934",height:"208"})}),"\n",(0,a.jsx)(t.h2,{id:"common-errors",children:"Common errors"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(r.A,{value:"windows",label:"Windows",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Steam needs to be online to update. Please confirm your network connection and try again."})}),(0,a.jsxs)(t.p,{children:["Log in to remote desktop. Go to ",(0,a.jsx)(t.code,{children:"Program Files\\TCAdmin2\\Monitor\\Tools\\SteamCmd"}),". Right click on steamcmd.exe and select ",(0,a.jsx)(t.code,{children:"Run as Administrator"}),". After the update is complete close the console window and try again from TCAdmin."]}),(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:'If this doesn\'t work open Internet Explorer, go to Internet Options. Select the connections tab. Click on Lan Settings. Check "automatically detect settings" and save. Then run steamcmd.exe again.'})})]}),(0,a.jsxs)(r.A,{value:"linux",label:"Linux",children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Steam downloader does not download any files with steamcmd"}),"\nRun these commands from ssh."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd /home/tcadmin/Monitor/Tools/SteamCmd\n./steamcmd.sh\n"})}),(0,a.jsxs)(t.p,{children:["If you see an error similar to ",(0,a.jsx)(t.code,{children:"libstdc++.so.6: version GLIBCXX_3.4.9 not found"})," download ",(0,a.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(568).A+"",children:"Libstdcplusplus.zip"})," and save to ",(0,a.jsx)(t.code,{children:"/home/tcadmin/Monitor/Tools/SteamCmd/linux32"})," . Unzip itand execute the commands again."]}),(0,a.jsx)(t.p,{children:"If you get any other errors search for them in Google to find a solution."}),(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["If all else fails delete the folders ",(0,a.jsx)(t.code,{children:"/root/Steam"})," and ",(0,a.jsx)(t.code,{children:"/home/tcadmin/Monitor/Tools/SteamCmd"})," and try again from TCAdmin."]})}),(0,a.jsx)(t.h3,{id:"steamcmd-no-such-file-or-directory",children:"steamcmd: No such file or directory"}),(0,a.jsx)(t.p,{children:"You are running 64bit Ubuntu or Debian. Execute this command to install missing 32bit libraries:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:" apt-get install ia32-libs\n"})})]})]}),"\n",(0,a.jsx)(t.h3,{id:"a-steam-engine-instance-already-exists",children:"A Steam Engine Instance already exists"}),"\n",(0,a.jsx)(t.p,{children:"Steamcmd on Linux does not allow multiple instances like it does on Windows. Wait until the other update has completed and try again."}),"\n",(0,a.jsxs)(t.h3,{id:"failed-to-create-directory-steamsteamapps",children:["Failed to create directory ",(0,a.jsx)(t.code,{children:"/steam/SteamApps"})]}),"\n",(0,a.jsxs)(t.p,{children:["Rename ",(0,a.jsx)(t.code,{children:"/Steam/SteamApps"})," to ",(0,a.jsx)(t.code,{children:"/steam/SteamApps"})]}),"\n",(0,a.jsxs)(t.h3,{id:"referenced-character-was-not-allowed-in-xml-normalization-is-true-checkcharacters--true-line-21-position-40",children:["Referenced character was not allowed in XML. ",(0,a.jsx)(t.code,{children:"Normalization is True, checkCharacters = True Line 21, position 40."})]}),"\n",(0,a.jsxs)(t.p,{children:["Go to ",(0,a.jsx)(t.code,{children:"System"})," (on the left-hand navigation) > ",(0,a.jsx)(t.code,{children:"Settings"})," > ",(0,a.jsx)(t.code,{children:"Default Steam Account"}),". Set the account to ",(0,a.jsx)(t.code,{children:"anonymous"})," with a ",(0,a.jsx)(t.code,{children:"blank password"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"If the game requires a specific account you can assign it in the game's steam settings tab."})}),"\n",(0,a.jsx)(t.h2,{id:"custom-steamcmd-scripts",children:"Custom SteamCmd Scripts"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(r.A,{value:"windows",label:"Windows",children:[(0,a.jsx)(t.p,{children:"Create a script for the custom icon event with the following configuration. Change the steamcmd command line as needed."}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Icon URL"})," - ",(0,a.jsx)(t.code,{children:"~/App_Themes/Default/Images/ControlPanel/MenuIcons/GameHosting/Steam.png"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Script Engine"})," - Batch/shell script"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"Script"})}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'@echo off\n"%TCAdminFolder%\\Monitor\\Tools\\SteamCmd\\steamcmd.exe" +login anonymous +force_install_dir %ThisService_RootDirectory% +app_update "90 -beta beta" validate +quit\n'})})]}),(0,a.jsxs)(r.A,{value:"linux",label:"Linux",children:[(0,a.jsx)(t.p,{children:"Create a script for the custom icon event with the following configuration. Change the steamcmd command line as needed."}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Icon URL"})," - ",(0,a.jsx)(t.code,{children:"~/App_Themes/Default/Images/ControlPanel/MenuIcons/GameHosting/Steam.png"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Script Engine"})," - Batch/shell script"]}),"\n",(0,a.jsx)(t.li,{children:"Script"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'#!/bin/bash\ncd ${TCAdminFolder}/Monitor/Tools/SteamCmd/\n./steamcmd.sh +login anonymous +force_install_dir ${ThisService_RootDirectory} +app_update "90 -beta beta" validate +quit\nchown --recursive tcagame ${ThisService_RootDirectory}\n'})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://community.tcadmin.com/topic/11338-rust-server-branch-switcher-single-button-c-script/",children:"C# Rust branch switcher"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(4164);const s={tabItem:"tabItem_Ymn6"};var i=n(4848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,r),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(6540),s=n(4164),i=n(3104),r=n(6347),o=n(205),l=n(7485),c=n(1682),d=n(9466);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,h]=p({queryString:n,groupId:s}),[x,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),j=(()=>{const e=c??x;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==a&&(c(t),r(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function S(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(b,{...t,...e})]})}function A(e){const t=(0,g.A)();return(0,f.jsx)(S,{...e,children:h(e.children)},String(t))}},568:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/files/Libstdcplusplus-da888efeda6ef8101610942a8540f099.zip"},6745:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/png;base64,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"},3757:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/SteamUpdateAvailable-594b108a005a2850483a60ab5a420784.png"},1632:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/SteamUpdateScheduledScriptOptions-e3f4eb2734c18ded0e8e31eda3a00bad.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(6540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);