"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[4616],{9647:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var o=s(4848),t=s(8453);const i={sidebar_position:9,sidebar_label:"Fast Downloads"},a="Fast Downloads",d={id:"using-tcadmin/fast-downloads",title:"Fast Downloads",description:"Overview",source:"@site/docs/using-tcadmin/fast-downloads.mdx",sourceDirName:"using-tcadmin",slug:"/using-tcadmin/fast-downloads",permalink:"/using-tcadmin/fast-downloads",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/fast-downloads.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Fast Downloads"},sidebar:"tutorialSidebar",previous:{title:"Updates",permalink:"/using-tcadmin/game-voice-configuration/updates"},next:{title:"Teamspeak Server Configuration",permalink:"/using-tcadmin/teamspeak-server-configuration"}},l={},r=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Downloads hosted locally",id:"downloads-hosted-locally",level:2},{value:"Downloads hosted on another TCAdmin server",id:"downloads-hosted-on-another-tcadmin-server",level:2},{value:"Downloads hosted on a file server or hosting account",id:"downloads-hosted-on-a-file-server-or-hosting-account",level:2},{value:"File Server Configuration",id:"file-server-configuration",level:2},{value:"Select the Fast Downloads tab and configure the following options:",id:"select-the-fast-downloads-tab-and-configure-the-following-options",level:3},{value:"Server Configuration",id:"server-configuration",level:2},{value:"Downloads hosted locally",id:"downloads-hosted-locally-1",level:3},{value:"Downloads hosted on a different TCAdmin server",id:"downloads-hosted-on-a-different-tcadmin-server",level:3},{value:"Downloads hosted on a file server or hosting account",id:"downloads-hosted-on-a-file-server-or-hosting-account-1",level:3},{value:"Game Configuration",id:"game-configuration",level:2},{value:"Enable manual sync",id:"enable-manual-sync",level:3},{value:"Configuration file",id:"configuration-file",level:3},{value:"Tips",id:"tips",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"Lost connection to mysql error",id:"lost-connection-to-mysql-error",level:3},{value:"Can&#39;t paste large text into exclude files field",id:"cant-paste-large-text-into-exclude-files-field",level:3},{value:"Compressing custom content",id:"compressing-custom-content",level:3},{value:"Reset fast downloads information",id:"reset-fast-downloads-information",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"fast-downloads",children:"Fast Downloads"})}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"The fast downloads (FastDL) feature allows you to copy or upload custom game content to a website so they can be downloaded directly by players."}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"tip",children:(0,o.jsx)(n.p,{children:"Before attempting to configure fast downloads in TCAdmin you should take the time to learn how to configure fast downloads for the game server manually without a control panel. That's the only way you will be able to troubleshoot if you have any problems with the game server's fast download configuration."})}),"\n",(0,o.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Fast downloads automatic sync"})," - TCAdmin will automatically synchronize the changes with the fast downloads website when the user ",(0,o.jsx)(n.code,{children:"uploads"}),", ",(0,o.jsx)(n.code,{children:"deletes"})," or ",(0,o.jsx)(n.code,{children:"modified"})," files using the file manager or FTP."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Manual sync"})," - In case automatic sync fails or if you have it disabled the user can synchronize the files manually."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Include certain files"})," - You can configure TCAdmin to only copy/upload files with a certain name or extension."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Exclude certain files"})," - You can configure TCAdmin to skip synchronization of files with a certain name or extension. For example you might not want to copy/upload the game's default maps."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Fast downloads disk space quota"})," - You can limit the disk space used by a service's fast downloads files."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure fast downloads in ",(0,o.jsx)(n.strong,{children:"3"})," different ways:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Locally"})," - The fast downloads website and game server are located on the same server."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Remotely with another server"})," - The fast downloads website is located on a different server that has TCAdmin installed."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Remotely with a file server"})," - The fast downloads website is located on a file server or hosting account."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["For security reasons it is recommended that the website used for fast downloads does not have any server side scripting enabled (",(0,o.jsx)(n.code,{children:"ASP"}),", ",(0,o.jsx)(n.code,{children:"ASP.NET"}),", ",(0,o.jsx)(n.code,{children:"PHP"}),", etc)"]})}),"\n",(0,o.jsx)(n.h2,{id:"downloads-hosted-locally",children:"Downloads hosted locally"}),"\n",(0,o.jsx)(n.p,{children:"Web server installed and configured with a website for fast downloads. (Apache, IIS, etc) We do not provide instructions on configuring the web server."}),"\n",(0,o.jsx)(n.h2,{id:"downloads-hosted-on-another-tcadmin-server",children:"Downloads hosted on another TCAdmin server"}),"\n",(0,o.jsxs)(n.p,{children:["You must have at least one TCAdmin server configured with ",(0,o.jsx)(n.strong,{children:"downloads hosted locally"})]}),"\n",(0,o.jsx)(n.h2,{id:"downloads-hosted-on-a-file-server-or-hosting-account",children:"Downloads hosted on a file server or hosting account"}),"\n",(0,o.jsx)(n.p,{children:"FTP account with read/write/delete permissions used to upload files to the website's root folder."}),"\n",(0,o.jsx)(n.h2,{id:"file-server-configuration",children:"File Server Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure a file server to host your fast downloads. Go to ",(0,o.jsx)(n.code,{children:"Server Management"})," (on the left-hand navigation) > ",(0,o.jsx)(n.code,{children:"File Servers"})," > ",(0,o.jsx)(n.code,{children:"Select the file server"})," or ",(0,o.jsx)(n.code,{children:"create a new one"}),". In the file server settings tab enter the following"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"FTP server's IP"}),"\n",(0,o.jsx)(n.li,{children:"port"}),"\n",(0,o.jsx)(n.li,{children:"username"}),"\n",(0,o.jsx)(n.li,{children:"password."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If the FTP server's file system is case sensitive enable File ",(0,o.jsx)(n.code,{children:"system is case sensitive"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"select-the-fast-downloads-tab-and-configure-the-following-options",children:"Select the Fast Downloads tab and configure the following options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Fast Downloads Save Path - Enter the path to the root of the fast downloads website."}),"\n",(0,o.jsx)(n.li,{children:"Fast Downloads Folder Template - Enter the template used to determine the folder where the fast download files will be saved for each game or voice service. You may use the default value."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"example",type:"note",children:(0,o.jsxs)(n.p,{children:["This will create a folder with the service's IP and port ",(0,o.jsx)(n.code,{children:"(1.2.3.4_27960)"})," : ",(0,o.jsx)(n.code,{children:"$[Service.IpAddress]_$[Service.GamePort]\\"})]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Fast Downloads URL - The base URL pointing to the fast download save path."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"FastDownloadsFileSettings",src:s(6069).A+"",width:"648",height:"362"})}),"\n",(0,o.jsx)(n.h2,{id:"server-configuration",children:"Server Configuration"}),"\n",(0,o.jsx)(n.h3,{id:"downloads-hosted-locally-1",children:"Downloads hosted locally"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure fast downloads on a website located on the same server as the game or voice server. Go to ",(0,o.jsx)(n.code,{children:"Server Management"})," (on the left-hand navigation) > ",(0,o.jsx)(n.code,{children:"Servers"})," > ",(0,o.jsx)(n.code,{children:"Select the server"})," > ",(0,o.jsx)(n.code,{children:"Game & Voice Settings tab"}),". Configure the following options."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Enable fast downloads"})," - Checked"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Fast Downloads Server"})," - Local Storage"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Fast Downloads Save Path"})," - Enter the path to the root of the fast downloads website that you created. ",(0,o.jsx)(n.code,{children:"(for example C:\\Inetpub\\wwwroot)"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Fast Downloads Folder Template"})," - Enter the template used to determine the folder where the fast download files will be saved for each game or voice service. You may use the default value. For example this will create a folder with the service's IP and port ",(0,o.jsx)(n.code,{children:"(1.2.3.4_27960)"})," : ",(0,o.jsx)(n.code,{children:"$[Service.IpAddress]_$[Service.GamePort]\\"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Fast Downloads URL"})," - The base URL pointing to the fast download save path."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"fastdl-local",src:s(6137).A+"",width:"646",height:"175"})}),"\n",(0,o.jsx)(n.h3,{id:"downloads-hosted-on-a-different-tcadmin-server",children:"Downloads hosted on a different TCAdmin server"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure fast downloads on a website located on a different TCAdmin server. First you must configure one of your servers with ",(0,o.jsx)(n.strong,{children:"downloads hosted locally"}),". Then go to the other server's Game & Voice Settings tab. Configure the following options."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Enable fast downloads"})," - Checked"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Fast Downloads Server"})," - Select the other tcadmin server from the list."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"fastdl-master",src:s(6892).A+"",width:"687",height:"185"})}),"\n",(0,o.jsx)(n.h3,{id:"downloads-hosted-on-a-file-server-or-hosting-account-1",children:"Downloads hosted on a file server or hosting account"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure fast downloads on a website hosted on a separate server or hosting account. First you must ",(0,o.jsx)(n.strong,{children:"configure a file server for fast downloads"}),". Then go to ",(0,o.jsx)(n.code,{children:"Server Management"})," (on the left-hand navigation) > ",(0,o.jsx)(n.code,{children:"Servers"})," > ",(0,o.jsx)(n.code,{children:"Select the server"})," > ",(0,o.jsx)(n.code,{children:"Game & Voice Settings tab"})," tab. Configure the following options."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Enable fast downloads"})," - Checked"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Fast Downloads Server"})," - Select the other tcadmin server from the list."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"fastdl-myfileserver",src:s(1875).A+"",width:"743",height:"181"})}),"\n",(0,o.jsx)(n.h2,{id:"game-configuration",children:"Game Configuration"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Each game has different requirements for fast downloads. Read the game's dedicated server documentation to find out how to enable fast downloads. This section only explains how to enable the fast download feature in TCAdmin."})}),"\n",(0,o.jsxs)(n.p,{children:["To enable fast downloads for a specific game go to ",(0,o.jsx)(n.code,{children:"System"})," (on the left-hand navigation) > ",(0,o.jsx)(n.code,{children:"Game & Voice Hosting category"})," > ",(0,o.jsx)(n.code,{children:"Games & Other Voice Servers"})," > ",(0,o.jsx)(n.code,{children:"Select the game"})," > ",(0,o.jsx)(n.code,{children:"Fast Downloads tab"}),". If you don't see the Fast Downloads tab select the Windows version of the game."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Enable fast downloads"})," - Checked"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Relative Root Directory"})," - The relative path to the root directory used for fast downloads. If you don't know what value to enter leave blank. You might have to test different values so the files are placed in the correct directory structure required by the game."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Fast Download URL"})," - The expression used to generate the download URL. Use the ",(0,o.jsx)(n.code,{children:"$[FastDownloadBaseUrl]"})," variable. For example: ",(0,o.jsx)(n.code,{children:"$[FastDownloadBaseUrl]/cstrike"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Files to Sync"})," - Enter the files that will be available for fast download. Wildcards are supported. If a relative path is specified it must be relative to the fast downloads root directory. You can specify more than one file or extension by separating with ",(0,o.jsx)(n.code,{children:"';'"}),". Use ",(0,o.jsx)(n.code,{children:"-r"})," with relative paths to also match files in subfolders. For example ",(0,o.jsx)(n.code,{children:"cstrike/maps/* -r;*.txt;"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Exclude Files"})," - Enter the files that will not be available for fast download. For example you can enter name of maps that are included by default."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Sync when service is created"})," - Enable this option if you want to syncronize the fast downloads when the service is created. This might only be needed if your default game files include custom maps."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Sync automatically"})," - Sync the fast downloads automatically when files are uploaded, renamed or deleted using the file manager or FTP."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Disk Space"})," - The maximum disk space allowed for fast downloads in MB. Set to 0 for unlimited disk space."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"FastDownloadGameSettings",src:s(4974).A+"",width:"755",height:"487"})}),"\n",(0,o.jsx)(n.h3,{id:"enable-manual-sync",children:"Enable manual sync"}),"\n",(0,o.jsxs)(n.p,{children:["To enable manual sync go to ",(0,o.jsx)(n.code,{children:"System"})," (on the left-hand navigation) > ",(0,o.jsx)(n.code,{children:"Game & Voice Hosting category"})," > ",(0,o.jsx)(n.code,{children:"Games & Other Voice Servers"})," > ",(0,o.jsx)(n.code,{children:"Select the game"})," > ",(0,o.jsx)(n.code,{children:"Feature Permissions"})," tab. If you don't see the Feature Permissions tab select the Windows version of the game. ",(0,o.jsx)(n.strong,{children:"Enable the checkboxes next to Fast Downloads Sync."})]}),"\n",(0,o.jsx)(n.h3,{id:"configuration-file",children:"Configuration file"}),"\n",(0,o.jsxs)(n.p,{children:["You have to enable fast downloads and specify the url in the game server's configuration file. To do this automatically use the ",(0,o.jsx)(n.code,{children:"$[FastDownloadUrl]"})," and ",(0,o.jsx)(n.code,{children:"$[FastDownloadEnabled]"})," variables. If fast downloads are disabled in the server on in the game's settings the value of ",(0,o.jsx)(n.code,{children:"$[FastDownloadUrl]"})," will be blank and ",(0,o.jsx)(n.code,{children:"$[FastDownloadEnabled]"})," will be ",(0,o.jsx)(n.code,{children:"0"}),". The way to enable fast downloads depends on the game. Read the game's documentation to figure out the correct values."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"FastDownloadGameConfigSettings",src:s(3616).A+"",width:"494",height:"487"})}),"\n",(0,o.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,o.jsxs)(n.admonition,{title:"security",type:"tip",children:[(0,o.jsx)(n.p,{children:"Make sure you don't sync config files. They will be downloadable from the fast download website and someone might steal rcon and other passwords."}),(0,o.jsx)(n.p,{children:"Don't sync .php and other scripts. For better security your fast download website should not allow execution of .php and other scripts."})]}),"\n",(0,o.jsx)(n.admonition,{title:"Exclude compressed files",type:"tip",children:(0,o.jsxs)(n.p,{children:["A client can upload a large zip or rar and extract it on the server. If he doesn't delete it the fast download will think it is custom content and upload it. Also if you have compression enabled it will try to compress it and use lots of CPU in the process. Just add the common compression formats in your exclude list: ",(0,o.jsx)(n.code,{children:"*.zip;*.rar;*.7z;*.tar;*.tar.gz;*.tgz;*.tar.bz2;*.tbz2;*.tar;*.lzma;*.tlz"})]})}),"\n",(0,o.jsx)(n.admonition,{title:"How to create a list of exclude files the easy way",type:"tip",children:(0,o.jsx)(n.p,{children:'Normally you would only want to upload files that are not included by default. To do this you need a list of all the files included by default and set it in the "Exclude Files" field. You can do this easily by executing a few commands from a command prompt or shell session.'})}),"\n",(0,o.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,o.jsxs)(n.p,{children:["Download the following file: ",(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(3931).A+"",children:"FastDownloadExclude.zip"})," Extract and execute from a command prompt like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"FastDownloadExclude.bat (path to game's fast download root) > exclude.txt\nnotepad exclude.txt\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This below creates an exclude file named ",(0,o.jsx)(n.code,{children:"exclude.txt"})," for ",(0,o.jsx)(n.code,{children:"C:\\TCAFiles\\Games\\css\\css"}),". Copy the file's contents and paste it in the fast download exclude field."]}),"\n",(0,o.jsx)(n.admonition,{title:"example",type:"note",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"FastDownloadExclude.bat C:\\TCAFiles\\Games\\css\\css > exclude.txt\nnotepad exclude.txt\n"})})}),"\n",(0,o.jsx)(n.h3,{id:"linux",children:"Linux"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd /home/tcadmin/tcafiles/games/GAMEFOLDER/FAST_DOWNLOAD_ROOT\nfind . -name \\*.* -print| sed 's/^..//'|sed ':a;N;$!ba;s/\\n/;/g'|sed 's/^..//' > ../exclude.txt\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This below creates an exclude file named ",(0,o.jsx)(n.code,{children:"/home/tcadmin/tcafiles/games/exclude.txt"})," for Garry's Mod. Download the file, copy the contents and paste it in the fast download exclude field."]}),"\n",(0,o.jsx)(n.admonition,{title:"example",type:"note",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd /home/tcadmin/tcafiles/games/garrysmod-linux\nfind . -name \\*.* -print| sed 's/^..//'|sed ':a;N;$!ba;s/\\n/;/g'|sed 's/^..//' > ../exclude.txt\n"})})}),"\n",(0,o.jsx)(n.h3,{id:"lost-connection-to-mysql-error",children:"Lost connection to mysql error"}),"\n",(0,o.jsxs)(n.p,{children:["When you save a large value to the database your mysql server might show this error. Add the following line to your MySQL server's my.ini or my.cnf under ",(0,o.jsx)(n.code,{children:"[mysqld]"})," and restart the MySQL service."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"max_allowed_packet=10M\n"})}),"\n",(0,o.jsx)(n.h3,{id:"cant-paste-large-text-into-exclude-files-field",children:"Can't paste large text into exclude files field"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Don't use Chrome. Use a different browser."})}),"\n",(0,o.jsx)(n.h3,{id:"compressing-custom-content",children:"Compressing custom content"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Compressing custom content will use a lot of CPU. If you configure the monitor to only use ",(0,o.jsx)(n.code,{children:"CPU0"})," it's going to cause lag in the control panel every time a file is compressed. To prevent this you can set the affinity to ",(0,o.jsx)(n.code,{children:"2"})," CPUs. It will use ",(0,o.jsx)(n.code,{children:"1"})," to compress and the other is left for the website. If you set affinity to ",(0,o.jsx)(n.code,{children:"4"})," CPUs or more it uses ",(0,o.jsx)(n.code,{children:"2"})," of those CPUs to compress the file. Either of these ",(0,o.jsx)(n.code,{children:"2"})," options will reduce or completely remove the lag."]})}),"\n",(0,o.jsx)(n.h3,{id:"reset-fast-downloads-information",children:"Reset fast downloads information"}),"\n",(0,o.jsx)(n.p,{children:"Each game server has a file in the root folder named FastDownload.db which holds the information about the files that are stored in the fast download server. You can delete this file to make TCAdmin sync all the files again."}),"\n",(0,o.jsx)(n.p,{children:"Use this scripts to delete all fast download databases of all game servers on that server:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Windows - create a .bat file"',children:'@echo off\nfor /f "usebackq" %%m in (`dir /b C:\\TCAFiles\\Users`) do (\nDEL /F /S /Q /A "C:\\TCAFiles\\Users\\%%m\\FastDownload.db"\n)\npause\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Linux"',children:"rm /home/tcagame/*/*/FastDownload.db\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Alternative script (thanks to Clanwarz)"',children:"find /home -type f -name FastDownload.db -delete\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Thanks to serenityservers.net for the scripts."})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},3931:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/files/FastDownloadExclude-f83c8c7f81db9f79ab3d47666b905db4.zip"},3616:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/FastDownloadGameConfigSettings-73219b57d76ac2aa2fdc73e420c69ffa.png"},4974:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/FastDownloadGameSettings-1c562a4cad52bdcf9d2603caebcda271.png"},6069:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/FastDownloadsFileSettings-11b45634b1ecbfdd6f9e3edc6b3670cd.png"},6137:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/fastdl-local-54ec7afd1b05a48233c6b6ad0ddb8648.png"},6892:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/fastdl-master-d68e8704b427a5313e7d3e5ae5ffbb2c.png"},1875:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/fastdl-myfileserver-f202fd7bc2475e01b59a8343c76332c1.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var o=s(6540);const t={},i=o.createContext(t);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);