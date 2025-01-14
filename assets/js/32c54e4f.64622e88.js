"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[2143],{626:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"misc/compression","title":"Compression","description":"The following file formats and extensions are supported. No additional software is required.","source":"@site/docs/misc/compression.mdx","sourceDirName":"misc","slug":"/misc/compression","permalink":"/misc/compression","draft":false,"unlisted":false,"editUrl":"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/misc/compression.mdx","tags":[],"version":"current","lastUpdatedAt":1736865147000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Compression"},"sidebar":"tutorialSidebar","previous":{"title":"Misc","permalink":"/category/misc"},"next":{"title":"Debug Mode","permalink":"/misc/debug-mode"}}');var r=i(4848),l=i(8453);const d={sidebar_position:1,sidebar_label:"Compression"},o="Compression",c={},t=[{value:"Windows and Linux",id:"windows-and-linux",level:3},{value:"Linux Only",id:"linux-only",level:3},{value:"Compressed Game Files",id:"compressed-game-files",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3}];function a(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"compression",children:"Compression"})}),"\n",(0,r.jsx)(s.p,{children:"The following file formats and extensions are supported. No additional software is required."}),"\n",(0,r.jsx)(s.h3,{id:"windows-and-linux",children:"Windows and Linux"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:".zip"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:".rar"})}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"linux-only",children:"Linux Only"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Tarball"})," : ",(0,r.jsx)(s.code,{children:".tar"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Gzip compressed tarball"}),": ",(0,r.jsx)(s.code,{children:".tar.gz"}),", ",(0,r.jsx)(s.code,{children:".tgz"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"BZip compressed tarball"})," : ",(0,r.jsx)(s.code,{children:"tar.bz2"}),", ",(0,r.jsx)(s.code,{children:".tbz2"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Lzma compressed tarball"})," : ",(0,r.jsx)(s.code,{children:".tar.lzma"}),", ",(0,r.jsx)(s.code,{children:".tlz"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"compressed-game-files",children:"Compressed Game Files"}),"\n",(0,r.jsxs)(s.p,{children:["Game files can be compressed to improve transfer speed between servers. The compressed file should not include the ",(0,r.jsx)(s.code,{children:"TCA.*"})," sub folders."]}),"\n",(0,r.jsx)(s.h3,{id:"linux",children:"Linux"}),"\n",(0,r.jsxs)(s.p,{children:["First make sure the game's folder is not empty. You can run the compress scripts located in ",(0,r.jsx)(s.code,{children:"/home/tcadmin/tcafiles/games"}),". The file name is ",(0,r.jsx)(s.code,{children:"compress_<game>.sh"}),". If you run the compress script and the folder is empty it will create an empty file."]}),"\n",(0,r.jsx)(s.p,{children:"This example compressed the files for Counterstrike."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",metastring:'title="cd to path"',children:"cd /home/tcadmin/tcafiles/games\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",metastring:'title="execute sh script"',children:"./compress_cs-linux.sh\n"})}),"\n",(0,r.jsx)(s.h3,{id:"windows",children:"Windows"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Go to ",(0,r.jsx)(s.code,{children:"C:\\TCAFiles\\Games\\<game>"}),". Select all files and folders except the ",(0,r.jsx)(s.code,{children:"TCA.*"})," folders."]}),"\n",(0,r.jsxs)(s.li,{children:["To compress the files to ZIP right click on the selected files and select ",(0,r.jsx)(s.code,{children:"Send To"})," > ",(0,r.jsx)(s.code,{children:"Compressed (zipped) Folder"}),". Move the created zip file to",(0,r.jsx)(s.code,{children:" C:\\TCAFiles\\Games"}),". Name it ",(0,r.jsx)(s.code,{children:"<game>.zip"})]}),"\n",(0,r.jsxs)(s.li,{children:["If you have Winrar installed right click on the selected files and select Add To > ",(0,r.jsx)(s.code,{children:"<game>.rar"}),". Move the created rar file to ",(0,r.jsx)(s.code,{children:"C:\\TCAFiles\\Games"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>d,x:()=>o});var n=i(6540);const r={},l=n.createContext(r);function d(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);