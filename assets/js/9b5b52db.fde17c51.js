"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[6132],{7146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"customizations/scripts/general-scripts/check-slots-ip-ports-in-config-file-before-starting","title":"Check slots, ip and port in config file before starting","description":"Option 1 - Update values if they have been modified (requires database connection)","source":"@site/docs/customizations/scripts/general-scripts/check-slots-ip-ports-in-config-file-before-starting.mdx","sourceDirName":"customizations/scripts/general-scripts","slug":"/customizations/scripts/general-scripts/check-slots-ip-ports-in-config-file-before-starting","permalink":"/customizations/scripts/general-scripts/check-slots-ip-ports-in-config-file-before-starting","draft":false,"unlisted":false,"editUrl":"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/general-scripts/check-slots-ip-ports-in-config-file-before-starting.mdx","tags":[],"version":"current","lastUpdatedAt":1736865147000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Check slots, ip and port in config file before starting"},"sidebar":"tutorialSidebar","previous":{"title":"Backup & Restore Scripts with FTP Support","permalink":"/customizations/scripts/general-scripts/backup-restore-scripts-with-ftp-support"},"next":{"title":"Custom Login Form","permalink":"/customizations/scripts/general-scripts/custom-login-form"}}');var s=t(4848),r=t(8453);const o={sidebar_position:6,sidebar_label:"Check slots, ip and port in config file before starting"},a="Check slots, ip and port in config file before starting",c={},l=[{value:"Option 1 - Update values if they have been modified (requires database connection)",id:"option-1---update-values-if-they-have-been-modified-requires-database-connection",level:2},{value:"Option 2 - Prevent service from starting if values have been modified (no database connection required)",id:"option-2---prevent-service-from-starting-if-values-have-been-modified-no-database-connection-required",level:2},{value:"Option 3 - JSON config file",id:"option-3---json-config-file",level:2}];function d(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"check-slots-ip-and-port-in-config-file-before-starting",children:"Check slots, ip and port in config file before starting"})}),"\n",(0,s.jsx)(n.h2,{id:"option-1---update-values-if-they-have-been-modified-requires-database-connection",children:"Option 1 - Update values if they have been modified (requires database connection)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Go to the game's settings."}),"\n",(0,s.jsx)(n.li,{children:"Click on the Custom Scripts icon."}),"\n",(0,s.jsx)(n.li,{children:"Add the following script."}),"\n",(0,s.jsx)(n.li,{children:"After creating the script go to the game's settings and click on Update Existing Services."}),"\n",(0,s.jsx)(n.li,{children:"To test the script on a single game server go to the service settings and save. Then start the game server."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:'This script connects to the database. If the database is offline the script will fail. You should have "Ignore execution errors" checked in case the database connection is not available when the script executes.'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Operating System:"})," Any",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Description:"})," Check slots, IP, and port in the config file before starting",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Script Engine:"})," IronPython",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Event:"})," Before started",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Ignore execution errors:"})," Checked"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import clr;\nfrom System.IO import File, Path\nfrom System import Environment\n \n#Load objects from database.\nclr.AddReference("TCAdmin.GameHosting.SDK")\nfrom TCAdmin.GameHosting.SDK.Objects import Server, Service, Game\nThisService=Service(ThisService_ServiceId)\nThisServer=Server(ThisService.ServerId)\nThisGame=Game(ThisService.GameId)\n       \n#Update values if changed.\nThisServer.GameHostingUtilitiesService.UpdateConfigFileVariableValues(ThisService.ServiceId)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"option-2---prevent-service-from-starting-if-values-have-been-modified-no-database-connection-required",children:"Option 2 - Prevent service from starting if values have been modified (no database connection required)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Go to the game's settings."}),"\n",(0,s.jsx)(n.li,{children:"Click on the Custom Scripts icon."}),"\n",(0,s.jsx)(n.li,{children:"Add the following script."}),"\n",(0,s.jsx)(n.li,{children:"This can also be configured as a global script."}),"\n",(0,s.jsx)(n.li,{children:"After creating the script go to the game's settings and click on Update Existing Services."}),"\n",(0,s.jsx)(n.li,{children:"To test the script on a single game server go to the service settings and save."}),"\n",(0,s.jsx)(n.li,{children:"Then start the game server."}),"\n",(0,s.jsx)(n.li,{children:"If the IP, port or slots don't have the correct values you will see an error message."}),"\n",(0,s.jsxs)(n.li,{children:["Update the values of ",(0,s.jsx)(n.code,{children:"slots_regex"}),", ",(0,s.jsx)(n.code,{children:"ip_regex"})," and ",(0,s.jsx)(n.code,{children:"port_regex"})," with regular expressions to read the current values. Remember to escape ",(0,s.jsx)(n.code,{children:"\\"})," to ",(0,s.jsx)(n.code,{children:"\\\\"}),". By default these values are configured for San Andreas Multiplayer."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Operating System:"})," Any",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Description:"})," Check slots, IP, and port in the config file before starting",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Script Engine:"})," IronPython",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Event:"})," Before started",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Ignore execution errors:"})," Checked"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import clr;\nfrom System.IO import File, Path\nfrom System.Text.RegularExpressions import Regex, RegexOptions\nfrom System import Exception, String;\n\nslots_regex = "^\\\\s*maxplayers\\\\s+(?<slots>\\\\d+)"\nip_regex = "^\\s*bind\\\\s+(?<ip>[\\\\d\\\\.]+)"\nport_regex = "^\\\\s*port\\\\s+(?<port>\\\\d+)"\n\nconfigpath=Path.Combine(ThisService_RootDirectory, "server.cfg")\nif File.Exists(configpath):\n  contents=File.ReadAllText(configpath)\n  \n  #Match slots\n  matches = Regex.Matches(contents, slots_regex, RegexOptions.Multiline)\n  if matches.Count == 0:\n    raise Exception("maxplayers has been removed from server.cfg")\n \n  for match in matches:\n    realslots=int(match.Groups["slots"].Value)\n    allowslots=int(ThisService_Slots)\n    if realslots > allowslots:\n      raise Exception(String.Format("maxplayers has been increased to {0}. The correct value is {1}.", realslots, allowslots))\n   \n  #Match ip\n  matches = Regex.Matches(contents, ip_regex, RegexOptions.Multiline)\n  if matches.Count == 0:\n    raise Exception("bind has been removed from server.cfg")\n  \n  for match in matches:\n    realip=match.Groups["ip"].Value\n    allowip=ThisService_IpAddress\n    if realip != allowip:\n      raise Exception(String.Format("bind has been changed to {0}. The correct value is {1}.", realip, allowip))\n      \n  #Match port\n  matches = Regex.Matches(contents, port_regex, RegexOptions.Multiline)\n  if matches.Count == 0:\n    raise Exception("port has been removed from server.cfg")\n  \n  for match in matches:\n    realport=int(match.Groups["port"].Value)\n    allowport= int(ThisService_GamePort)\n    if realport != allowport:\n      raise Exception(String.Format("port has been changed to {0}. The correct value is {1}.", realport, allowport))\n'})}),"\n",(0,s.jsx)(n.h2,{id:"option-3---json-config-file",children:"Option 3 - JSON config file"}),"\n",(0,s.jsx)(n.p,{children:"This script updates the ip, port and slots in a config file with json format. This example is for Rage MP"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import clr;\nimport System;\nclr.AddReference("Newtonsoft.Json")\nfrom System.IO import File, Path\nfrom Newtonsoft.Json import JsonConvert, Formatting\n\nconfigpath=Path.Combine(ThisService_RootDirectory, "conf.json")\n\nif File.Exists(configpath):\n  contents=File.ReadAllText(configpath)\n  jsondata = JsonConvert.DeserializeObject(contents)\n  jsondata["bind"]=ThisService_IpAddress\n  jsondata["port"]=ThisService_GamePort\n  jsondata["maxplayers"]=ThisService_Slots\n  File.WriteAllText(configpath, JsonConvert.SerializeObject(jsondata, Formatting.Indented))\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);