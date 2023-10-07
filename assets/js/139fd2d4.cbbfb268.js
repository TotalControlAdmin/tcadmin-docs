"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[3642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=s.createContext({}),c=function(e){var t=s.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return s.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},y=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),y=n,d=m["".concat(u,".").concat(y)]||m[y]||p[y]||a;return r?s.createElement(d,o(o({ref:t},l),{},{components:r})):s.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2,sidebar_label:"Rust Custom Query"},o="Rust Custom Query",i={unversionedId:"customizations/scripts/custom-protocols/rust-custom-query",id:"customizations/scripts/custom-protocols/rust-custom-query",title:"Rust Custom Query",description:"The Rust query reports players in queue as connected players. This causes the game monitor to think the max slots setting has been changed and restart the game server if it's full and players are in queue. The following custom script prevents this by getting connected players from the value of game_tag.",source:"@site/docs/customizations/scripts/custom-protocols/rust-custom-query.mdx",sourceDirName:"customizations/scripts/custom-protocols",slug:"/customizations/scripts/custom-protocols/rust-custom-query",permalink:"/customizations/scripts/custom-protocols/rust-custom-query",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/custom-protocols/rust-custom-query.mdx",tags:[],version:"current",lastUpdatedAt:1696666871,formattedLastUpdatedAt:"Oct 7, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Rust Custom Query"},sidebar:"tutorialSidebar",previous:{title:"Custom Query Protocol",permalink:"/customizations/scripts/custom-protocols/intro"},next:{title:"Custom RCON Protocol",permalink:"/customizations/scripts/custom-protocols/custom-rcon-protocol"}},u={},c=[],l={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rust-custom-query"},"Rust Custom Query"),(0,n.kt)("p",null,"The Rust query reports players in queue as connected players. This causes the game monitor to think the max slots setting has been changed and restart the game server if it's full and players are in queue. The following custom script prevents this by getting connected players from the value of game_tag."),(0,n.kt)("p",null,"This script is included in the Rust script created by Dennis: ",(0,n.kt)("a",{parentName:"p",href:"https://community.tcadmin.com/files/file/65-rust-automatic-wipeupdate-oxide-plugin-installer/"},"https://community.tcadmin.com/files/file/65-rust-automatic-wipeupdate-oxide-plugin-installer/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Operating System:")," Any",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Description:")," Rust Query",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Script Engine:")," IronPython",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Event:")," Custom Query",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Ignore execution errors")," Unchecked "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Instructions After creating this script go to the game's settings and set the query protocol to custom script.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import clr\nimport System\nclr.AddReference("TCAdmin.GameHosting.SDK")\nfrom System import String\nfrom System.Text.RegularExpressions import Regex\nfrom TCAdmin.GameHosting.SDK.GameMonitor import ServerQuery\n \nquerydata=ThisServer.GameAdminService.GetQueryResult("a2s",ThisService.IpAddress, ThisService.QueryPort, ThisService.RootDirectory, ThisService.ServiceId)\nresults=ServerQuery.GetQueryResults(querydata)\n \nXmlFormat="<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><qstat><server type=\\"CUSTOM\\" address=\\"{0}:{1}\\" status=\\"{2}\\"><hostname>{0}:{1}</hostname><name>{3}</name><gametype>{4}</gametype><map>{5}</map><numplayers>{6}</numplayers><maxplayers>{7}</maxplayers><numspectators>0</numspectators><maxspectators>0</maxspectators><ping>0</ping><retries>0</retries><rules>{8}</rules><players>{9}</players></server></qstat>"\nStatus="UP"\nName=results.Name\nGameType=results.GameType\nMap=results.Map\n \nRules=""\nfor rule in results.Rules:\n    Rules=Rules+String.Format("<rule name=\\"{0}\\">{1}</rule>", rule.Key, rule.Value)\n \nPlayers=""\nfor player in results.Players:\n    Players=Players+String.Format("<player><name>{0}</name><ping>{1}</ping><score>{2}</score></player>", player.Name, player.Ping, player.Score)\n \nNumPlayers=results.NumPlayers\nMaxPlayers=results.MaxPlayers\n \nif results.Rules.ContainsKey("game_tag") :\n  match = Regex.Match(results.Rules["game_tag"], "cp(\\d*)")\n  if match.Success :\n    NumPlayers = match.Value.Substring(2)\n  match = Regex.Match(results.Rules["game_tag"], "mp(\\d*)")\n  if match.Success :\n    MaxPlayers = match.Value.Substring(2)\n \nReturnValue=String.Format(XmlFormat, ThisService.IpAddress, ThisService.QueryPort, Status, Name, GameType, Map, NumPlayers, MaxPlayers, Rules, Players)\n')))}p.isMDXComponent=!0}}]);