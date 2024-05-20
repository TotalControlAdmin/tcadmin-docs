"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[308],{8173:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=s(4848),n=s(8453);const o={sidebar_position:2,sidebar_label:"Rust Custom Query"},a="Rust Custom Query",i={id:"customizations/scripts/custom-protocols/rust-custom-query",title:"Rust Custom Query",description:"The Rust query reports players in queue as connected players. This causes the game monitor to think the max slots setting has been changed and restart the game server if it's full and players are in queue. The following custom script prevents this by getting connected players from the value of game_tag.",source:"@site/docs/customizations/scripts/custom-protocols/rust-custom-query.mdx",sourceDirName:"customizations/scripts/custom-protocols",slug:"/customizations/scripts/custom-protocols/rust-custom-query",permalink:"/customizations/scripts/custom-protocols/rust-custom-query",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/custom-protocols/rust-custom-query.mdx",tags:[],version:"current",lastUpdatedAt:1716196388e3,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Rust Custom Query"},sidebar:"tutorialSidebar",previous:{title:"Custom Query Protocol",permalink:"/customizations/scripts/custom-protocols/intro"},next:{title:"Custom RCON Protocol",permalink:"/customizations/scripts/custom-protocols/custom-rcon-protocol"}},u={},c=[];function l(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"rust-custom-query",children:"Rust Custom Query"}),"\n",(0,r.jsx)(t.p,{children:"The Rust query reports players in queue as connected players. This causes the game monitor to think the max slots setting has been changed and restart the game server if it's full and players are in queue. The following custom script prevents this by getting connected players from the value of game_tag."}),"\n",(0,r.jsxs)(t.p,{children:["This script is included in the Rust script created by Dennis: ",(0,r.jsx)(t.a,{href:"https://community.tcadmin.com/files/file/65-rust-automatic-wipeupdate-oxide-plugin-installer/",children:"https://community.tcadmin.com/files/file/65-rust-automatic-wipeupdate-oxide-plugin-installer/"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Operating System:"})," Any",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Description:"})," Rust Query",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Script Engine:"})," IronPython",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Event:"})," Custom Query",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Ignore execution errors"})," Unchecked"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Instructions After creating this script go to the game's settings and set the query protocol to custom script."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import clr\nimport System\nclr.AddReference("TCAdmin.GameHosting.SDK")\nfrom System import String\nfrom System.Text.RegularExpressions import Regex\nfrom TCAdmin.GameHosting.SDK.GameMonitor import ServerQuery\n \nquerydata=ThisServer.GameAdminService.GetQueryResult("a2s",ThisService.IpAddress, ThisService.QueryPort, ThisService.RootDirectory, ThisService.ServiceId)\nresults=ServerQuery.GetQueryResults(querydata)\n \nXmlFormat="<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><qstat><server type=\\"CUSTOM\\" address=\\"{0}:{1}\\" status=\\"{2}\\"><hostname>{0}:{1}</hostname><name>{3}</name><gametype>{4}</gametype><map>{5}</map><numplayers>{6}</numplayers><maxplayers>{7}</maxplayers><numspectators>0</numspectators><maxspectators>0</maxspectators><ping>0</ping><retries>0</retries><rules>{8}</rules><players>{9}</players></server></qstat>"\nStatus="UP"\nName=results.Name\nGameType=results.GameType\nMap=results.Map\n \nRules=""\nfor rule in results.Rules:\n    Rules=Rules+String.Format("<rule name=\\"{0}\\">{1}</rule>", rule.Key, rule.Value)\n \nPlayers=""\nfor player in results.Players:\n    Players=Players+String.Format("<player><name>{0}</name><ping>{1}</ping><score>{2}</score></player>", player.Name, player.Ping, player.Score)\n \nNumPlayers=results.NumPlayers\nMaxPlayers=results.MaxPlayers\n \nif results.Rules.ContainsKey("game_tag") :\n  match = Regex.Match(results.Rules["game_tag"], "cp(\\d*)")\n  if match.Success :\n    NumPlayers = match.Value.Substring(2)\n  match = Regex.Match(results.Rules["game_tag"], "mp(\\d*)")\n  if match.Success :\n    MaxPlayers = match.Value.Substring(2)\n \nReturnValue=String.Format(XmlFormat, ThisService.IpAddress, ThisService.QueryPort, Status, Name, GameType, Map, NumPlayers, MaxPlayers, Rules, Players)\n'})})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var r=s(6540);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);