"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_label:"Compression"},l="Compression",o={unversionedId:"misc/compression",id:"misc/compression",title:"Compression",description:"The following file formats and extensions are supported. No additional software is required.",source:"@site/docs/misc/compression.mdx",sourceDirName:"misc",slug:"/misc/compression",permalink:"/misc/compression",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/misc/compression.mdx",tags:[],version:"current",lastUpdatedAt:1686260731,formattedLastUpdatedAt:"Jun 8, 2023",frontMatter:{sidebar_label:"Compression"},sidebar:"tutorialSidebar",previous:{title:"Service Browser",permalink:"/misc/service-browser"},next:{title:"Override config",permalink:"/misc/override-config"}},s={},p=[{value:"Windows and Linux",id:"windows-and-linux",level:3},{value:"Linux Only",id:"linux-only",level:3},{value:"Compressed Game Files",id:"compressed-game-files",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"compression"},"Compression"),(0,i.kt)("p",null,"The following file formats and extensions are supported. No additional software is required."),(0,i.kt)("h3",{id:"windows-and-linux"},"Windows and Linux"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".zip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".rar"))),(0,i.kt)("h3",{id:"linux-only"},"Linux Only"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tarball")," : ",(0,i.kt)("inlineCode",{parentName:"li"},".tar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Gzip compressed tarball"),": ",(0,i.kt)("inlineCode",{parentName:"li"},".tar.gz"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".tgz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BZip compressed tarball")," : ",(0,i.kt)("inlineCode",{parentName:"li"},"tar.bz2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".tbz2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Lzma compressed tarball")," : ",(0,i.kt)("inlineCode",{parentName:"li"},".tar.lzma"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".tlz"))),(0,i.kt)("h2",{id:"compressed-game-files"},"Compressed Game Files"),(0,i.kt)("p",null,"Game files can be compressed to improve transfer speed between servers. The compressed file should not include the ",(0,i.kt)("inlineCode",{parentName:"p"},"TCA.*")," sub folders."),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"First make sure the game's folder is not empty. You can run the compress scripts located in ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/tcadmin/tcafiles/games"),". The file name is ",(0,i.kt)("inlineCode",{parentName:"p"},"compress_<game>.sh"),". If you run the compress script and the folder is empty it will create an empty file."),(0,i.kt)("p",null,"This example compressed the files for Counterstrike."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="cd to path"',title:'"cd',to:!0,'path"':!0},"cd /home/tcadmin/tcafiles/games\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="execute sh script"',title:'"execute',sh:!0,'script"':!0},"./compress_cs-linux.sh\n")),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\TCAFiles\\Games\\<game>"),". Select all files and folders except the ",(0,i.kt)("inlineCode",{parentName:"li"},"TCA.*")," folders."),(0,i.kt)("li",{parentName:"ul"},"To compress the files to ZIP right click on the selected files and select ",(0,i.kt)("inlineCode",{parentName:"li"},"Send To")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Compressed (zipped) Folder"),". Move the created zip file to",(0,i.kt)("inlineCode",{parentName:"li"}," C:\\TCAFiles\\Games"),". Name it ",(0,i.kt)("inlineCode",{parentName:"li"},"<game>.zip")),(0,i.kt)("li",{parentName:"ul"},"If you have Winrar installed right click on the selected files and select Add To > ",(0,i.kt)("inlineCode",{parentName:"li"},"<game>.rar"),". Move the created rar file to ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\TCAFiles\\Games"),".")))}d.isMDXComponent=!0}}]);