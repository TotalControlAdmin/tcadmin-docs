"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[7592],{4668:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(7624),o=t(2172);const s={sidebar_label:"Configuration Files",sidebar_position:17},l="Configuration Files",r={id:"using-tcadmin/game-voice-configuration/configuration-files",title:"Configuration Files",description:"- Relative Path - The relative path to this config file. Include the file name.",source:"@site/docs/using-tcadmin/game-voice-configuration/configuration-files.mdx",sourceDirName:"using-tcadmin/game-voice-configuration",slug:"/using-tcadmin/game-voice-configuration/configuration-files",permalink:"/using-tcadmin/game-voice-configuration/configuration-files",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/using-tcadmin/game-voice-configuration/configuration-files.mdx",tags:[],version:"current",lastUpdatedAt:1707174221,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:17,frontMatter:{sidebar_label:"Configuration Files",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/using-tcadmin/game-voice-configuration/variables"},next:{title:"Custom Scripts",permalink:"/using-tcadmin/game-voice-configuration/custom-scripts"}},a={},c=[{value:"Template",id:"template",level:2},{value:"Configuration Editor",id:"configuration-editor",level:2},{value:"Item Types",id:"item-types",level:3},{value:"Repeat section",id:"repeat-section",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Relative Path"})," - The relative path to this config file. Include the file name."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Description"})," - A description for this config file."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"View Order"})," - Set the order in which the config file is shown. Config files that have the same view order will be ordered by relative path."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Enable the configuration editor"})," - Specify if the configuration editor will be available for this file. To create the editor select the Configuration Editor icon at the bottom of the page."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Read variable values from file"})," - Specify if the variables will be read back from the file. That way the user can edit the files manually or with the configuration editor. Not all item types or file formats are compatible."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"template",children:"Template"}),"\n",(0,n.jsx)(i.p,{children:"Configure a template for this file. If the template is blank the original file will not be overwritten and will not be created if it does not exist. To use a variable select one from the list and click on Insert. The variable will be inserted into the template."}),"\n",(0,n.jsx)(i.h2,{id:"configuration-editor",children:"Configuration Editor"}),"\n",(0,n.jsx)(i.p,{children:"Instead of editing the text file directly, you may choose to build a configuration editor. This makes it easier for your clients to configure their service. If the game server is ranked, it allows you to limit what the user can edit according to the developer's instructions."}),"\n",(0,n.jsx)(i.p,{children:"To build a configuration editor follow these steps:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Configure the ",(0,n.jsx)(i.a,{href:"/using-tcadmin/game-voice-configuration/variables#custom-variables",children:"custom variables"})," that will be used in the configuration file."]}),"\n",(0,n.jsx)(i.li,{children:"Configure the configuration file template. Insert the custom variables where needed and save."}),"\n",(0,n.jsx)(i.li,{children:"Click on the Configuration Editor at the bottom."}),"\n",(0,n.jsx)(i.li,{children:"Select New Item. Add items in the order that you want to display them."}),"\n",(0,n.jsx)(i.li,{children:"Reorder existing items dragging an item to a position."}),"\n",(0,n.jsxs)(i.li,{children:["Use the parent variable value to specify when to display an item. For example you can configure it to ask for the private password only when ",(0,n.jsx)(i.code,{children:"Is Private"})," equals ",(0,n.jsx)(i.code,{children:"1"}),"."]}),"\n",(0,n.jsx)(i.li,{children:"Each item type has its own unique settings."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"item-types",children:"Item Types"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Header"})," - Display a centered text."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Blank Row"})," - Leave a space between the controls."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Textbox"})," - Allow the user to enter text. The textbox can be configured to capture a single line, multiple lines or a password."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Numeric textbox"})," - Allow the user to enter a numeric value."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Checkbox"})," - Allow the user to enable/disable an option."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Combobox"})," - Allow the user to select a value from a list. A custom list can be specified or it can be configured to display a list of files or directories."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Multiple selection"})," - Allow the user to select one or more values. Th value can be generated in 3 different ways:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Normal"})," : Selected item values are separated by the specified character."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Bit flags"})," : Adds all the selected values. All values must be numeric."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"String flags"}),": Adds all selected values into a single string without the separator."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Label"})," - Display a variable's value. It will not be editable."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"repeat-section",children:"Repeat section"}),"\n",(0,n.jsx)(i.p,{children:"This is an advanced feature only recommended if you know how to create regular expressions. It is used to create editors for parts of a file that require more than one line or block of text. For"}),"\n",(0,n.jsx)(i.admonition,{title:"examples",type:"note",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"map rotations, ban and admin lists."}),"\n",(0,n.jsxs)(i.li,{children:["For examples on its usage see the following editors:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Wolfenstein Enemy Territory"}),": campaigncycle.cfg, stopwatchcycle.cfg, objectivecycle.cfg, lmscycle.cfg"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Counterstrike"}),": banned.cfg, listip.cfg"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Metamod"}),": plugins.ini"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"AMX ModX"}),": users.ini"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"ConfigEditor",src:t(4828).c+"",width:"1011",height:"635"})})]})}function h(e={}){const{wrapper:i}={...(0,o.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4828:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/ConfigEditor-5cb5c3ae8c2d26200ddddb4db47a65f4.png"},2172:(e,i,t)=>{t.d(i,{I:()=>r,M:()=>l});var n=t(1504);const o={},s=n.createContext(o);function l(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);