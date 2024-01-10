"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[3430],{8553:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(5893),t=n(1151);const r={sidebar_position:9,sidebar_label:"Limit Service's Disk Space"},o="Limit Service's Disk Space",c={id:"customizations/scripts/general-scripts/limits-services-disk-space",title:"Limit Service's Disk Space",description:"Configure disk quotas in your drive",source:"@site/docs/customizations/scripts/general-scripts/limits-services-disk-space.mdx",sourceDirName:"customizations/scripts/general-scripts",slug:"/customizations/scripts/general-scripts/limits-services-disk-space",permalink:"/customizations/scripts/general-scripts/limits-services-disk-space",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/general-scripts/limits-services-disk-space.mdx",tags:[],version:"current",lastUpdatedAt:1704877678,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Limit Service's Disk Space"},sidebar:"tutorialSidebar",previous:{title:"Kill all processes running from the game server's root folder",permalink:"/customizations/scripts/general-scripts/kill-all-processes-running-from-the-game-servers-root-folder"},next:{title:"Open and close ports in Windows firewall",permalink:"/customizations/scripts/general-scripts/open-close-ports-in-windows-firewall"}},a={},l=[{value:"Configure disk quotas in your drive",id:"configure-disk-quotas-in-your-drive",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"Configure the game",id:"configure-the-game",level:2},{value:"Test your configuration",id:"test-your-configuration",level:2},{value:"Specifying disk quota from WHMCS",id:"specifying-disk-quota-from-whmcs",level:2}];function d(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"limit-services-disk-space",children:"Limit Service's Disk Space"}),"\n",(0,s.jsx)(i.h2,{id:"configure-disk-quotas-in-your-drive",children:"Configure disk quotas in your drive"}),"\n",(0,s.jsx)(i.h3,{id:"linux",children:"Linux"}),"\n",(0,s.jsxs)(i.p,{children:["Follow these instructions to ",(0,s.jsx)(i.a,{href:"/misc/linux-quotas",children:"configure disk quotas on Linux"})]}),"\n",(0,s.jsx)(i.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(i.p,{children:"Enable quotas on the drive where the services will be created. The configuration shown in the screenshot is recommended."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(9014).Z+"",width:"363",height:"450"})}),"\n",(0,s.jsx)(i.h2,{id:"configure-the-game",children:"Configure the game"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Configure the game with Run As = User per Service. Go to ",(0,s.jsx)(i.code,{children:"Settings"})," > ",(0,s.jsx)(i.code,{children:"Games"})," > ",(0,s.jsx)(i.code,{children:"select the game"})," > ",(0,s.jsx)(i.code,{children:'Select the "Run As" tab'}),". Set Run As = User per service and save. This will create one Windows/Linux user for each service. The disk quota will be created for this user."]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["If you have existing services of this type go to ",(0,s.jsx)(i.code,{children:"Settings"})," > ",(0,s.jsx)(i.code,{children:"Game Tools"})," and run the ",(0,s.jsx)(i.code,{children:"Verify/Repair tool"})," on your server with ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"Update run as user"})})," checked."]})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Configure a variable for the quota value. Click on the Variables icon. Click on new and enter these values:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Name:"})," DiskQuota"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Default value:"})," 0"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Is numeric:"})," Checked"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Preserve value:"})," Checked"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Select the Variable Options tab and configure these values:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Script parameter:"})," Checked"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Save script parameter value:"})," Checked"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Admin access:"})," Checked"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Value is required:"})," Checked"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Item Type:"})," Numeric textbox"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Label:"})," Disk Quota (MB)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Description:"})," Specify the disk quota in MB. Set to 0 for unlimited space."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Decimal Digits:"})," 0"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Configure the scripts. Go back to the game's main settings. Click on the Custom Scripts icon. Create the following scripts."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Operating System:"})," Any",(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.strong,{children:"Description:"})," Create disk quota when game server is created\n",(0,s.jsx)(i.strong,{children:"Script Engine:"})," IronPython",(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.strong,{children:"Event:"})," After created"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:'import clr;\nimport System;\nfrom System import UInt64, String, Exception;\n\ndiskquotamb = ThisService.Variables["DiskQuota"];\nserviceuser = ThisService.GetServiceCredentials().User;\nmountpoint = ThisServer.FileSystemService.GetMountPoint(ThisService.RootDirectory);\n\nif not ThisServer.FileSystemService.QuotasEnabled(ThisService.RootDirectory) :\n raise Exception(String.Format("Disk quotas are not enabled on {0}", mountpoint));\n\nScript.WriteToConsole(String.Format("Creating {0}MB disk quota on {1} for {2}", diskquotamb, mountpoint, serviceuser));\n\nThisServer.FileSystemService.SetQuota(serviceuser, mountpoint, UInt64.Parse(diskquotamb) * 1024 * 1024);\n'})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Operating System:"})," Any",(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.strong,{children:"Description:"})," Delete disk quota when the game server is deleted\n",(0,s.jsx)(i.strong,{children:"Script Engine:"})," IronPython",(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.strong,{children:"Event:"})," Before deleted"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:'import clr;\nimport System;\nfrom System import UInt64, String, Exception;\n\nserviceuser = ThisService.GetServiceCredentials().User;\nmountpoint = ThisServer.FileSystemService.GetMountPoint(ThisService.RootDirectory);\n\nif not ThisServer.FileSystemService.QuotasEnabled(ThisService.RootDirectory) :\n raise Exception(String.Format("Disk quotas are not enabled on {0}", mountpoint));\n\nScript.WriteToConsole(String.Format("Deleting disk quota on {0} for {1}", mountpoint, serviceuser));\n\nThisServer.FileSystemService.SetQuota(serviceuser, mountpoint, 0);\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Operating System: Any",(0,s.jsx)(i.br,{}),"\n","Description: Configure the game server's disk quota",(0,s.jsx)(i.br,{}),"\n","Script Engine: IronPython",(0,s.jsx)(i.br,{}),"\n","Event: Custom action",(0,s.jsx)(i.br,{}),"\n","Prompt for variable values: Checked",(0,s.jsx)(i.br,{}),"\n","Name: Set Disk Quota",(0,s.jsx)(i.br,{}),"\n","Script:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:'import clr;\nimport System;\nfrom System import UInt64, String, Exception;\n\ndiskquotamb = ThisService.Variables["DiskQuota"];\nserviceuser = ThisService.GetServiceCredentials().User;\nmountpoint = ThisServer.FileSystemService.GetMountPoint(ThisService.RootDirectory);\n\nif not ThisServer.FileSystemService.QuotasEnabled(ThisService.RootDirectory) :\n raise Exception(String.Format("Disk quotas are not enabled on {0}", mountpoint));\n\nScript.WriteToConsole(String.Format("Creating {0}MB disk quota on {1} for {2}", diskquotamb, mountpoint, serviceuser));\n\nThisServer.FileSystemService.SetQuota(serviceuser, mountpoint, UInt64.Parse(diskquotamb) * 1024 * 1024);\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Operating System: Any",(0,s.jsx)(i.br,{}),"\n","Description: Check the disk quota assigned to this game server",(0,s.jsx)(i.br,{}),"\n","Script Engine: IronPython",(0,s.jsx)(i.br,{}),"\n","Event: Custom action",(0,s.jsx)(i.br,{}),"\n","Name: Check Disk Quota",(0,s.jsx)(i.br,{}),"\n","Script:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:'import clr;\nimport System;\n\nclr.AddReference("TCAdmin.Helper");\nfrom TCAdmin.Helper.Quotas import LinuxCuota, WindowsQuota;\nfrom System import Double, String, Exception, Math, Environment, PlatformID;\n\nserviceuser = ThisService.GetServiceCredentials().User;\nmountpoint = ThisServer.FileSystemService.GetMountPoint(ThisService.RootDirectory);\n\nif not ThisServer.FileSystemService.QuotasEnabled(ThisService.RootDirectory) :\n raise Exception(String.Format("Disk quotas are not enabled on {0}", mountpoint));\n\nquotainfo = None;\n\nif Environment.OSVersion.Platform == PlatformID.Win32NT :\n quotainfo = WindowsQuota.getQuota(mountpoint, Environment.MachineName, serviceuser);\nelse :\n quotainfo = LinuxCuota.getQuota(mountpoint, serviceuser);\n\nif quotainfo.HasQuota :\n Script.WriteToConsole(String.Format("Disk Quota: {0}MB", quotainfo.LimitKB/1024));\n Script.WriteToConsole(String.Format("Used: {0}MB ({1}%)", quotainfo.CurrentUsageKB/1024, Math.Round(Double.Parse(quotainfo.CurrentUsageKB.ToString())/quotainfo.LimitKB * 100,2)));\n Script.WriteToConsole(String.Format("Available: {0}MB ({1}%)", quotainfo.AvailableKB/1024, Math.Round(Double.Parse(quotainfo.AvailableKB.ToString())/quotainfo.LimitKB * 100,2)));\nelse:\n Script.WriteToConsole(String.Format("{0} does not have a disk quota on {1}", serviceuser, mountpoint));\n'})}),"\n",(0,s.jsx)(i.h2,{id:"test-your-configuration",children:"Test your configuration"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Create a new game server."}),"\n",(0,s.jsx)(i.li,{children:"Select the game server, click on the actions tab. Click on Set Disk Quota. Enter the quota and execute."}),"\n",(0,s.jsx)(i.li,{children:"A popup window should say it was executed successfully."}),"\n",(0,s.jsx)(i.li,{children:'Select "Check Disk Quota". It should show the quota that you created and the current usage.'}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"specifying-disk-quota-from-whmcs",children:"Specifying disk quota from WHMCS"}),"\n",(0,s.jsx)(i.p,{children:"You can send the value for quota in your product's config file like this:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-php",children:'$billing_api_values["gamevar_DiskQuota"] = "2048";\n'})}),"\n",(0,s.jsxs)(i.p,{children:["For more information read: ",(0,s.jsx)(i.a,{href:"/billing-api/tcadmin2-advanced-module-for-whmcs#sending-custom-variable-values",children:"Sending Custom Variable Values"})]})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9014:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/Windows_quota-cb8a38a1ac16b97605a910b33d1258fd.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>o});var s=n(7294);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);