"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[7042],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const s={sidebar_position:11,sidebar_label:"Restart service if used more than x cpu or memory for the last 3 queries"},o="Restart service if used more than x cpu or memory for the last 3 queries",a={unversionedId:"customizations/scripts/general-scripts/restart-service-if-used-more-than-x-cpu-mem",id:"customizations/scripts/general-scripts/restart-service-if-used-more-than-x-cpu-mem",title:"Restart service if used more than x cpu or memory for the last 3 queries",description:"Create a query monitoring rule",source:"@site/docs/customizations/scripts/general-scripts/restart-service-if-used-more-than-x-cpu-mem.mdx",sourceDirName:"customizations/scripts/general-scripts",slug:"/customizations/scripts/general-scripts/restart-service-if-used-more-than-x-cpu-mem",permalink:"/customizations/scripts/general-scripts/restart-service-if-used-more-than-x-cpu-mem",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/general-scripts/restart-service-if-used-more-than-x-cpu-mem.mdx",tags:[],version:"current",lastUpdatedAt:1696666871,formattedLastUpdatedAt:"Oct 7, 2023",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Restart service if used more than x cpu or memory for the last 3 queries"},sidebar:"tutorialSidebar",previous:{title:"Open and close ports in Windows firewall",permalink:"/customizations/scripts/general-scripts/open-close-ports-in-windows-firewall"},next:{title:"Restart service when last player disconnects",permalink:"/customizations/scripts/general-scripts/restart-service-when-last-player-disconnects"}},l={},c=[{value:"Create a query monitoring rule",id:"create-a-query-monitoring-rule",level:2},{value:"Create the scripts",id:"create-the-scripts",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"restart-service-if-used-more-than-x-cpu-or-memory-for-the-last-3-queries"},"Restart service if used more than x cpu or memory for the last 3 queries"),(0,i.kt)("h2",{id:"create-a-query-monitoring-rule"},"Create a query monitoring rule"),(0,i.kt)("p",null,"In the game's query monitoring add this rule and configure it to restart the service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HighResources=True\n")),(0,i.kt)("h2",{id:"create-the-scripts"},"Create the scripts"),(0,i.kt)("p",null,"Go to the game's settings. Click on the Custom Scripts icon. Add the following scripts. Then click on Update Existing Services in the game's settings. These can also be configured as global scripts."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operating System:")," Any",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description:")," Check resource usage.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Script Engine:")," IronPython",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Event:")," Query Monitoring",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Ignore execution errors:")," Checked",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Script:")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import clr\nimport System\nclr.AddReference("TCAdmin.SDK")\n\nfrom System.Collections.Generic import List\nfrom System.IO import Path, File\nfrom System import String\nfrom TCAdmin.SDK.Misc import ObjectXml\n\n#Script parameters. Change values as needed.\nMaxStoredValues=3\nMaxCPU=50\nMaxMemoryMB=4096\nCPUFile=Path.Combine(ThisService.RootDirectory, "cpu.xml")\nMemoryFile=Path.Combine(ThisService.RootDirectory, "memory.xml")\n\n#Read CPU and memory values stored in files\nif File.Exists(CPUFile) :\n  CPUValues = ObjectXml.XmlToObject(File.ReadAllText(CPUFile), (List[float]()).GetType())\nelse :\n  CPUValues = List[float]()\n\nif File.Exists(MemoryFile) :\n  MemoryValues = ObjectXml.XmlToObject(File.ReadAllText(MemoryFile), (List[float]()).GetType())\nelse :\n  MemoryValues = List[float]()\n \n#Add current CPU and memory values\nCPUValues.Add(ThisService.Status.CpuLastSecond)\nMemoryValues.Add(ThisService.Status.MemoryLastSecond/1024/1024)\n\n#Limit stored values to specified length\nwhile CPUValues.Count > MaxStoredValues :\n  CPUValues.RemoveAt(0)\nwhile MemoryValues.Count > MaxStoredValues :\n  MemoryValues.RemoveAt(0)\n\n#Save values to files\nFile.WriteAllText(CPUFile, ObjectXml.ObjectToXml(CPUValues))\nFile.WriteAllText(MemoryFile, ObjectXml.ObjectToXml(MemoryValues))\n\n#Check if stored values are higher than limits\nAllCPUHigher=True\nif CPUValues.Count == MaxStoredValues :\n  for i in range(0, MaxStoredValues - 1):\n    if CPUValues.Item[i] < MaxCPU :\n      AllCPUHigher=False\nelse :\n  AllCPUHigher=False\n   \nAllMemoryHigher=True\nif MemoryValues.Count == MaxStoredValues :\n  for i in range(0, MaxStoredValues - 1):\n    if MemoryValues.Item[i] < MaxMemoryMB :\n      AllMemoryHigher=False\nelse :\n  AllMemoryHigher=False\n\nif AllCPUHigher | AllMemoryHigher :\n  Script.WriteToConsole(String.Format("High resources detected for {0}", ThisService.ConnectionInfo))\n  QueryResults.Rules.Add("HighResources", "True")\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operating System:")," Any",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description:")," Delete CPU and memory files.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Script Engine:")," IronPython",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Event:")," Before Started",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Ignore execution errors:")," Checked",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Script:")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import clr\nimport System\nfrom System.IO import Path, File\nCPUFile=Path.Combine(ThisService.RootDirectory, "cpu.xml")\nMemoryFile=Path.Combine(ThisService.RootDirectory, "memory.xml")\n\nif File.Exists(CPUFile) :\n File.Delete(CPUFile)\nif File.Exists(MemoryFile) :\n File.Delete(MemoryFile)\n')))}u.isMDXComponent=!0}}]);