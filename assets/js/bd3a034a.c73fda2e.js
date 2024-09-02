"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[2055],{1095:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(4848),s=o(8453);const r={sidebar_position:7,sidebar_label:"Install mod from WHMCS"},i="Install mod from WHMCS",a={id:"customizations/scripts/general-scripts/install-mod-from-whmcs",title:"Install mod from WHMCS",description:"Game Mods",source:"@site/docs/customizations/scripts/general-scripts/install-mod-from-whmcs.mdx",sourceDirName:"customizations/scripts/general-scripts",slug:"/customizations/scripts/general-scripts/install-mod-from-whmcs",permalink:"/customizations/scripts/general-scripts/install-mod-from-whmcs",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/general-scripts/install-mod-from-whmcs.mdx",tags:[],version:"current",lastUpdatedAt:172530686e4,sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Install mod from WHMCS"},sidebar:"tutorialSidebar",previous:{title:"Custom Login Form",permalink:"/customizations/scripts/general-scripts/custom-login-form"},next:{title:"Kill all processes running from the game server's root folder",permalink:"/customizations/scripts/general-scripts/kill-all-processes-running-from-the-game-servers-root-folder"}},d={},l=[{value:"Game Mods",id:"game-mods",level:2},{value:"Minecraft Mod Packs",id:"minecraft-mod-packs",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"install-mod-from-whmcs",children:"Install mod from WHMCS"})}),"\n",(0,t.jsx)(n.h2,{id:"game-mods",children:"Game Mods"}),"\n",(0,t.jsx)(n.p,{children:'The following Iron python script will install a mod after the game server has been created. Create a variable named "ModToInstall". Configure WHMCS to send the mod id to be installed after creating the game server. Configure it for the game\'s after created event. The script and variable can be configured as global.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import clr;\nimport System;\n \nif (not ThisService.Variables.HasValue("ModToInstall")) or ThisService.Variables["ModToInstall"] == "":\n  Script.Exit()\n \nclr.AddReference("TCAdmin.SDK");\nclr.AddReference("TCAdmin.GameHosting.SDK");\nclr.AddReference("TCAdmin.GameHosting.ModuleApi");\nclr.AddReference("TCAdmin.TaskScheduler.SDK");\n \nfrom System import String;\nfrom TCAdmin.SDK.Misc import ObjectXml;\nfrom TCAdmin.GameHosting.SDK.Automation import GameHostingModInstallInfo;\nfrom TCAdmin.GameHosting.ModuleApi import ModuleDef;\nfrom TCAdmin.TaskScheduler.SDK.Objects import TaskStep;\n \nmodinfo = GameHostingModInstallInfo();\nGameHostingModInstallInfo.ServiceId.SetValue(modinfo, ThisService.ServiceId);\nGameHostingModInstallInfo.ModId.SetValue(modinfo, int(ThisService.Variables["ModToInstall"]));\nGameHostingModInstallInfo.Variables.SetValue(modinfo, String.Empty);\n \nmodstep = TaskStep();\nmodstep.TaskId = ThisTaskStep.Arguments.TaskId;\nmodstep.ModuleId = ModuleDef.ModuleId;\nmodstep.ProcessId = 8;\nmodstep.ServerId = ThisService.ServerId;\nmodstep.Name = "Install mod";\nmodstep.Arguments = ObjectXml.ObjectToXml(modinfo);\nmodstep.GenerateKey();\nmodstep.Save();\n'})}),"\n",(0,t.jsx)(n.h2,{id:"minecraft-mod-packs",children:"Minecraft Mod Packs"}),"\n",(0,t.jsx)(n.p,{children:'The following Iron python script will install a mod pack after the game server has been created. You can use this script for minecraft mod packs. Create a variable named "ModToInstall". Configure WHMCS to send the mod to be installed after creating the game server. Configure it for the game\'s after created event. In this example if the value of ModToInstall is "RLCraft 1.12.2" it will install that version of RLCraft. You will need to add other modpack ids as needed.'}),"\n",(0,t.jsx)(n.p,{children:"You can find PackId, VersionId and ModType of any mod pack with your web browser's developer console. Press F12. Select the network tab. Install a mod and view the install request to get the values of modid, version and type."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import clr\nimport System\nfrom System import Exception\n \nclr.AddReference("TCAdmin.SDK")\nclr.AddReference("TCAdmin.GameHosting.SDK")\nclr.AddReference("TCAdmin.GameHosting.ModuleApi")\nclr.AddReference("TCAdmin.TaskScheduler.SDK")\n \nfrom System import String\nfrom TCAdmin.SDK.Database import XmlField\nfrom TCAdmin.GameHosting.ModuleApi import ModuleDef\nfrom TCAdmin.TaskScheduler.SDK.Objects import TaskStep\n \nif (not ThisService.Variables.HasValue("ModToInstall")) or ThisService.Variables["ModToInstall"] == "":\n  Script.Exit()\n \nPackId = 0\nVersionId = 0\nModType = ""\n   \nif ThisService.Variables["ModToInstall"] == "RLCraft 1.12.2" :\n  PackId = 285109\n  VersionId = 3655670\n  ModType = "curseforge"\n \nif PackId == 0 :\n  raise Exception("Value \'{0}\' for ModToInstall is not valid".format(ThisService.Variables["ModToInstall"]))\n \nmodpackinfo = """<?xml version="1.0" encoding="utf-16"?>\n<ModpackInfo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n  <ServiceId>{0}</ServiceId>\n  <ModpackId>{1}</ModpackId>\n  <VersionId>{2}</VersionId>\n  <Type>{3}</Type>\n  <JarVariable>{4}</JarVariable>\n</ModpackInfo>""".format(ThisService.ServiceId, PackId, VersionId, ModType, "customjar")\n \nmodstep = TaskStep()\nmodstep.TaskId = ThisTaskStep.Arguments.TaskId\nmodstep.ModuleId = "b48cfbc9-7acc-4980-89c4-2b6a1f784aa0"\nmodstep.ProcessId = 1\nmodstep.ServerId = ThisService.ServerId\nmodstep.Name = "Install modpack"\nmodstep.Arguments = modpackinfo\nmodstep.GenerateKey()\nmodstep.Save()\n'})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);