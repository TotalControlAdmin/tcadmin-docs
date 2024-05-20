"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[1297],{383:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var i=s(4848),o=s(8453);const t={sidebar_position:1,sidebar_label:"Common FAQ"},r="Common FAQ",l={id:"FAQ/common-faq",title:"Common FAQ",description:"General",source:"@site/docs/FAQ/common-faq.mdx",sourceDirName:"FAQ",slug:"/FAQ/common-faq",permalink:"/FAQ/common-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/FAQ/common-faq.mdx",tags:[],version:"current",lastUpdatedAt:1716196388e3,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Common FAQ"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/category/faq"},next:{title:"Windows FAQ",permalink:"/FAQ/windows-faq"}},c={},a=[{value:"General",id:"general",level:2},{value:"For Windows:",id:"for-windows",level:3},{value:"For Linux:",id:"for-linux",level:3},{value:"Game Configuration",id:"game-configuration",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"common-faq",children:"Common FAQ"}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q1."})," What should I do if there are no game servers available on the selected server?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A1."})," If there are no game servers available on the selected server, follow these steps:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Steam-Based Games:"})," TCAdmin does not include dedicated game files. STEAM-based games are freely available for download via STEAM. TCAdmin generates download scripts for STEAM games. You can find the scripts in the following directories:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Windows: ",(0,i.jsx)(n.code,{children:"C:\\TCAFiles\\Games"})]}),"\n",(0,i.jsxs)(n.li,{children:["Linux: ",(0,i.jsx)(n.code,{children:"/home/tcadmin/tcafiles/games"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Non-Steam Games:"})," Some games have free downloadable dedicated server files, while others will require you to install the game on your computer, zip or compress the game directory, and upload the files to your server. Make sure to place the game's files in its subdirectory in either:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Windows: ",(0,i.jsx)(n.code,{children:"C:\\TCAFiles\\Games"})]}),"\n",(0,i.jsxs)(n.li,{children:["Linux: ",(0,i.jsx)(n.code,{children:"/home/tcadmin/tcafiles/games"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q2."})," What are the default ports used by TCAdmin?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A2."})," The default ports used by TCAdmin are as follows:"]}),"\n",(0,i.jsx)(n.h3,{id:"for-windows",children:"For Windows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Web/Monitor:"})," 8880, 8881 TCP"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTP:"})," 8821 TCP"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTP Passive Mode:"})," 5000 to 5100 TCP"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SFTP (disabled by default):"})," 8822 TCP"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"for-linux",children:"For Linux:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Web:"})," 8880, 8881 TCP"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Monitor:"})," 8890, 8891 TCP"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTP:"})," 8821 TCP"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTP Passive Mode:"})," 5000 to 5100 TCP"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SFTP (disabled by default):"})," 8822 TCP"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q3."})," What compression formats are supported?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A3."})," To know which compression formats are supported, please refer to the TCAdmin documentation under the section titled ",(0,i.jsx)(n.a,{href:"/misc/compression/",children:"See Compression."})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q4."})," How can I limit a game/voice server's disk space?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A4."})," To limit a game or voice server's disk space, please follow the instructions provided in this article: ",(0,i.jsx)(n.a,{href:"/customizations/scripts/general-scripts/limits-services-disk-space/",children:"Limit Service's Disk Space"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q5."})," How can I delete the default game data?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A5."})," To delete the default game data, execute the following commands on your database. Remember to make a backup of your database before proceeding:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM tc_games;\nDELETE FROM tc_game_paths;\nDELETE FROM tc_game_general_config;\nDELETE FROM tc_game_ports;\nDELETE FROM tc_game_cmdlines;\nDELETE FROM tc_game_punkbuster_config;\nDELETE FROM tc_game_query_monitoring;\nDELETE FROM tc_game_mail_templates;\nDELETE FROM tc_game_steam_config;\nDELETE FROM tc_game_identity;\nDELETE FROM tc_game_config_files;\nDELETE FROM tc_game_scripts;\nDELETE FROM tc_game_templates;\nDELETE FROM tc_game_permissions;\nDELETE FROM tc_game_variables_config;\nDELETE FROM tc_custom_variables;\nDELETE FROM tc_dynamic_forms;\nDELETE FROM tc_dynamic_form_items;\nDELETE FROM tc_game_tracker_config;\nDELETE FROM tc_game_mods;\nDELETE FROM tc_game_updates;\nDELETE FROM tc_game_map_packs;\nDELETE FROM tc_game_text_console;\nDELETE FROM tc_game_web_console;\nDELETE FROM tc_game_fast_download;\nDELETE FROM tc_game_bukkit_config;\nDELETE FROM tc_game_links;\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q6."})," How can I use random IDs instead of incremental IDs?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A6."})," To use random IDs instead of incremental IDs, execute the following command on your database:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO tc_info (name, value) VALUES ('TCAdmin.RandomIds', 'True');\n"})}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, you can start the monitor in console mode and paste this command in the console:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"sql INSERT INTO tc_info (name, value) VALUES ('TCAdmin.RandomIds', 'True');\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q7."})," How can I use a custom Web.config?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A7."})," To use a custom Web.config, follow these steps:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Make a copy of your Web.config and name it ",(0,i.jsx)(n.code,{children:"Windows.Custom.config"})," or ",(0,i.jsx)(n.code,{children:"Linux.Custom.config"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"When the monitor is restarted, it will use a copy of that file as the new Web.config."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"game-configuration",children:"Game Configuration"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q8."})," Why do Linux Game Details Show Fewer Options?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A8."})," Game servers that run on both Windows and Linux usually have the same configuration, with only the executable name changing. To avoid duplicate configurations, the Windows version of the config serves as a template for the Linux config. If you want to make specific changes to the Linux version, follow these steps:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Select the Linux game."}),"\n",(0,i.jsx)(n.li,{children:'Click on "Export" and save the file.'}),"\n",(0,i.jsx)(n.li,{children:'Go to the "Templates" tab.'}),"\n",(0,i.jsx)(n.li,{children:"Clear the template for each section and save."}),"\n",(0,i.jsx)(n.li,{children:"Go back to the games list."}),"\n",(0,i.jsx)(n.li,{children:'Click on "Import."'}),"\n",(0,i.jsx)(n.li,{children:'Select "Overwrite existing game."'}),"\n",(0,i.jsx)(n.li,{children:"Select the Linux game you are updating."}),"\n",(0,i.jsx)(n.li,{children:"Select the config file that you downloaded."}),"\n",(0,i.jsx)(n.li,{children:'Click on "Import."'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q9."})," How can I disable the Text Editor for a Single File?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A9."})," To disable the Text Editor for a single file, follow these steps:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Go to "Settings" > "Games."'}),"\n",(0,i.jsx)(n.li,{children:'Select the game\'s details and click on the "File System Permissions" icon.'}),"\n",(0,i.jsx)(n.li,{children:"Expand subadmin, reseller, or user."}),"\n",(0,i.jsx)(n.li,{children:'Click on "Add permission by file name."'}),"\n",(0,i.jsx)(n.li,{children:"Enter the file name that you want to block."}),"\n",(0,i.jsx)(n.li,{children:'Select "No permissions."'}),"\n",(0,i.jsx)(n.li,{children:'Click on the "Add" button.'}),"\n",(0,i.jsx)(n.li,{children:'Click on the "Save" button.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'You can also use "Add permission by file path." The difference is that this option will only block the file in the specified path. You can have files with the same name in other folders, and they will not be blocked. "Add permission by file name" blocks a file with that name in any folder.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q10."})," How can I allow access to *.jar, *.dll, and *.so files?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A10."})," To allow access to these files, follow these steps:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Go to "Settings" > "Games."'}),"\n",(0,i.jsx)(n.li,{children:"Select the game. If you are running Linux, select the Windows version of the game."}),"\n",(0,i.jsx)(n.li,{children:'Select the "File System Permissions" icon.'}),"\n",(0,i.jsx)(n.li,{children:"Expand subadmin, reseller, or user."}),"\n",(0,i.jsx)(n.li,{children:'Expand "Add permission by file name" and select the permission.'}),"\n",(0,i.jsxs)(n.li,{children:["Remove ",(0,i.jsx)(n.code,{children:"*.jar"}),", ",(0,i.jsx)(n.code,{children:"*.dll"}),", or ",(0,i.jsx)(n.code,{children:"*.so"})," from the list."]}),"\n",(0,i.jsx)(n.li,{children:'Click on the "Update" button.'}),"\n",(0,i.jsx)(n.li,{children:'Click on the "Save" button.'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["On Linux, if some files are still not visible, edit ",(0,i.jsx)(n.code,{children:"/home/tcadmin/Monitor/Override.config"})," and set ",(0,i.jsx)(n.code,{children:"RestrictLinuxExe"})," to ",(0,i.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q11."})," How can I configure mods for a game?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A11."})," Each mod installation is different depending on the game. TCAdmin can provide an overview of what you might need to do when configuring a mod. Read the Mod Configuration Page in the documentation for details."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q12."})," How can I limit the resource usage of a service?"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A12."})," You can specify CPU and memory limits in the game server's service settings. You can also use the game's query monitoring to create rules that check a service's CPU, memory, and bandwidth usage. Refer to the Query"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);