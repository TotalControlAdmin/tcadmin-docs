"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[1515],{9311:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"billing-api/tcadmin2-advanced-module-for-whmcs","title":"TCAdmin2 advanced module for WHMCS","description":"This software comes as is and no support for the module will be provided by TCAdmin. TCAdmin support is limited to the TCAdmin software.","source":"@site/docs/billing-api/tcadmin2-advanced-module-for-whmcs.mdx","sourceDirName":"billing-api","slug":"/billing-api/tcadmin2-advanced-module-for-whmcs","permalink":"/billing-api/tcadmin2-advanced-module-for-whmcs","draft":false,"unlisted":false,"editUrl":"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/billing-api/tcadmin2-advanced-module-for-whmcs.mdx","tags":[],"version":"current","lastUpdatedAt":1736865147000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"TCAdmin2 advanced module for WHMCS"},"sidebar":"tutorialSidebar","previous":{"title":"Troubleshooting","permalink":"/billing-api/troubleshooting"},"next":{"title":"Billing API Examples","permalink":"/billing-api/billing-api-examples"}}');var s=i(4848),a=i(8453);const r={sidebar_position:3,sidebar_label:"TCAdmin2 advanced module for WHMCS"},t="TCAdmin2 advanced module for WHMCS",d={},o=[{value:"Requirements",id:"requirements",level:2},{value:"Download",id:"download",level:2},{value:"WHMCS module features",id:"whmcs-module-features",level:2},{value:"TCAdmin billing API configuration settings",id:"tcadmin-billing-api-configuration-settings",level:2},{value:"WHMCS Module Installation and Configuration",id:"whmcs-module-installation-and-configuration",level:2},{value:"Installing the Files",id:"installing-the-files",level:3},{value:"Adding the TCAdmin Server",id:"adding-the-tcadmin-server",level:3},{value:"Creating Products in WHMCS",id:"creating-products-in-whmcs",level:2},{value:"Module settings",id:"module-settings",level:3},{value:"Advanced Configuration (Optional)",id:"advanced-configuration-optional",level:2},{value:"Config File (default_values.php)",id:"config-file-default_valuesphp",level:3},{value:"Sending Custom Variable Values",id:"sending-custom-variable-values",level:3},{value:"Sending Allowed Games for Game Switching",id:"sending-allowed-games-for-game-switching",level:3},{value:"Game Switching from WHMCS",id:"game-switching-from-whmcs",level:3},{value:"Custom Config File",id:"custom-config-file",level:3},{value:"Examples",id:"examples",level:3},{value:"Don&#39;t start the game server after it has been created.",id:"dont-start-the-game-server-after-it-has-been-created",level:4},{value:"The following example sends a different game id depending the location selected by the client. You must have a custom field named Location.",id:"the-following-example-sends-a-different-game-id-depending-the-location-selected-by-the-client-you-must-have-a-custom-field-named-location",level:4},{value:"Set CPU priority to above normal.",id:"set-cpu-priority-to-above-normal",level:4},{value:"Set CPU and memory limits.",id:"set-cpu-and-memory-limits",level:4},{value:"Minecraft Example",id:"minecraft-example",level:3},{value:"Create a reseller package",id:"create-a-reseller-package",level:3},{value:"Other configuration parameters",id:"other-configuration-parameters",level:3},{value:"Specifying Different Module Value and Display Value",id:"specifying-different-module-value-and-display-value",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Update Products and Services from tcadmin to tcadmin2_advanced",id:"update-products-and-services-from-tcadmin-to-tcadmin2_advanced",level:3},{value:"Cloudflare",id:"cloudflare",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"tcadmin2-advanced-module-for-whmcs",children:"TCAdmin2 advanced module for WHMCS"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This software comes ",(0,s.jsx)(n.code,{children:"as is"})," and no support for the module will be provided by TCAdmin. TCAdmin support is limited to the TCAdmin software."]})}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"You must have a fully installed, licensed and configured TCAdmin control panel. This includes game files, automation setup and email templates."}),"\n",(0,s.jsx)(n.li,{children:"Fully installed and configured WHMCS installation."}),"\n",(0,s.jsx)(n.li,{children:"PHP curl extension enabled."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,s.jsxs)(n.p,{children:["The tcadmin2_advanced module can be downloaded from our ",(0,s.jsx)(n.a,{href:"http://clients.tcadmin.com/downloads.php?action=displaycat&catid=5",children:(0,s.jsx)(n.strong,{children:"client area"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"whmcs-module-features",children:"WHMCS module features"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Supports the following WHMCS module commands:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Create:"})," Create game and voice servers automatically. Game switching is supported."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Suspend/Unsuspend/Terminate:"})," Automatically suspend/enable/delete game and voice servers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Change Package:"})," Update a game/voice servers private status, branding and slots."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Change Password:"})," Change the client's TCAdmin password from within WHMCS."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Direct client login from WHMCS to TCAdmin."}),"\n",(0,s.jsx)(n.li,{children:"Configurable options and custom fields can be used to set all the TCAdmin billing API attributes. This makes it flexible. You configure your packages exactly the way you want them."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"example",type:"info",children:(0,s.jsx)(n.p,{children:"Configure your packages to ask your clients for their game server's location, hostname and passwords in the WHMCS order page."})}),"\n",(0,s.jsx)(n.h2,{id:"tcadmin-billing-api-configuration-settings",children:"TCAdmin billing API configuration settings"}),"\n",(0,s.jsxs)(n.p,{children:["Configure TCAdmin according to the ",(0,s.jsx)(n.a,{href:"/billing-api/intro",children:"Billing API configuration page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"whmcs-module-installation-and-configuration",children:"WHMCS Module Installation and Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"installing-the-files",children:"Installing the Files"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Extract the contents of the ",(0,s.jsx)(n.code,{children:"tcadmin2_advanced.zip"})," file to the path ",(0,s.jsx)(n.code,{children:"/whmcs-root/modules/servers/tcadmin2_advanced"})," in your WHMCS installation."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"adding-the-tcadmin-server",children:"Adding the TCAdmin Server"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Log in to WHMCS."}),"\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.code,{children:"Configuration"})," > ",(0,s.jsx)(n.code,{children:"Products/Services"})," > ",(0,s.jsx)(n.code,{children:"Servers"})," and Click on Add New Server."]}),"\n",(0,s.jsxs)(n.li,{children:["Enter the server ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"hostname"}),", ",(0,s.jsx)(n.code,{children:"ip address"}),", ",(0,s.jsx)(n.code,{children:"port"}),", select server type ",(0,s.jsx)(n.code,{children:"tcadmin2_advanced"})," and enter the admin login and password that will be used. If you don't use a hostname to access your control panel (cp.yourdomain.com:8880) enter your website's ip address (xxx.xxx.xxx.xxx:8880) in the hostname field."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"creating-products-in-whmcs",children:"Creating Products in WHMCS"}),"\n",(0,s.jsxs)(n.p,{children:["Create your product ",(0,s.jsx)(n.a,{href:"http://docs.whmcs.com/Products_and_Services",children:"according to the WHMCS documentation"}),". Configure with custom fields and configurable options to ask for ",(0,s.jsx)(n.code,{children:"location"}),", ",(0,s.jsx)(n.code,{children:"hostname"}),", ",(0,s.jsx)(n.code,{children:"slots"}),", etc."]}),"\n",(0,s.jsx)(n.h3,{id:"module-settings",children:"Module settings"}),"\n",(0,s.jsx)(n.p,{children:'The most common attributes can be configured in the module settings tab. Other attributes can be configured in the file specified in the "Config File" field. The default config file is "default_values.php". You can use a config file that has different values depending on the configuration that is required for each product. Assign a "Custom Field" or "Configuration Option" from the list next to each attribute. When the module command is executed the tcadmin attribute will take the value of that field or option.'}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Why are your dropdowns empty? You need to configure your product with custom fields or configurable options for ",(0,s.jsx)(n.code,{children:"hostname"}),", ",(0,s.jsx)(n.code,{children:"location"}),", ",(0,s.jsx)(n.code,{children:"slots"}),", etc. Then you will see them in the dropdowns."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(3829).A+"",width:"800",height:"387"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Config File"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The file that contains the default values used for the TCAdmin billing API."}),"\n",(0,s.jsx)(n.li,{children:"Contains more options not shown (commandline parameters, service level, game switching, etc)."}),"\n",(0,s.jsxs)(n.li,{children:["Default file: ",(0,s.jsx)(n.code,{children:"default_values.php"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Game ID"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The game id that will be created."}),"\n",(0,s.jsx)(n.li,{children:"If blank, a game server will not be created."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Game Slots"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Number of slots for the game server."}),"\n",(0,s.jsx)(n.li,{children:"If blank, a game server will not be created."}),"\n",(0,s.jsx)(n.li,{children:"Can include prefixes PRI and PUB for private or public servers."}),"\n",(0,s.jsx)(n.li,{children:"Example: PRI8 for a private server with 8 slots."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Game Private"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"1 if the game server is private, 0 if public."}),"\n",(0,s.jsx)(n.li,{children:"Default: 0."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Game Branded"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"1 if the game server is branded, 0 if not."}),"\n",(0,s.jsx)(n.li,{children:"Default: 0."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Game Datacenter"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Datacenter id where the game server will be created."}),"\n",(0,s.jsx)(n.li,{children:"Required for game server creation."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Game Hostname"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Hostname of the game server."}),"\n",(0,s.jsx)(n.li,{children:"Automatically generated if datacenter is specified."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Game RCon Password"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"RCon password for the game server."}),"\n",(0,s.jsx)(n.li,{children:"Automatically generated if not specified."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Game Private Password"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Private password for the game server."}),"\n",(0,s.jsx)(n.li,{children:"Automatically generated if not specified."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Voice ID"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Voice id that will be created."}),"\n",(0,s.jsx)(n.li,{children:"For Teamspeak 2 virtual server, use TEAMSPEAK."}),"\n",(0,s.jsx)(n.li,{children:"For Teamspeak 3 virtual server, use TEAMSPEAK3."}),"\n",(0,s.jsx)(n.li,{children:"If blank, no voice server will be created."}),"\n",(0,s.jsx)(n.li,{children:"For TEAMSPEAK3, upload and download quotas can be sent."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Voice Slots"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Number of slots for the voice server."}),"\n",(0,s.jsx)(n.li,{children:"If valid voice id provided and this is blank, it uses game_slots."}),"\n",(0,s.jsx)(n.li,{children:"Can include prefixes PRI and PUB for private or public servers."}),"\n",(0,s.jsx)(n.li,{children:"Example: PRI8 for a private server with 8 slots."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Voice Branded"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"1 if the voice server is private, 0 if public."}),"\n",(0,s.jsx)(n.li,{children:"Default: 0."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Voice Datacenter"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Datacenter id where the voice server will be created."}),"\n",(0,s.jsx)(n.li,{children:"Required for voice server creation."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Voice Hostname"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Hostname of the voice server."}),"\n",(0,s.jsx)(n.li,{children:"Automatically generated if not specified."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Voice RCon Password"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"RCon password for the voice server."}),"\n",(0,s.jsx)(n.li,{children:"Automatically generated if not specified."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Voice Private Password"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Private password for the voice server."}),"\n",(0,s.jsx)(n.li,{children:"Automatically generated if not specified."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Reseller Packages"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To create reseller packages, leave game and voice info blank."}),"\n",(0,s.jsx)(n.li,{children:'Set "Config File" to "reseller_values.php".'}),"\n",(0,s.jsx)(n.li,{children:"Create the file in tcadmin2_advanced folder with specified lines."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'<?php\n  include(\'default_values.php\');\n $billing_api_values["role_id"]="3"; //The reseller role id to assign to the user.\n $billing_api_values["package_id"]="1"; //The reseller package id to assign to the user.\n?>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"advanced-configuration-optional",children:"Advanced Configuration (Optional)"}),"\n",(0,s.jsx)(n.h3,{id:"config-file-default_valuesphp",children:"Config File (default_values.php)"}),"\n",(0,s.jsxs)(n.p,{children:["To configure attributes that are not on the Module settings edit file default_values.php located in ",(0,s.jsx)(n.code,{children:"\\whmcs\\modules\\servers\\tcadmin2_advanced"}),". You can configure them to take the value of a ",(0,s.jsx)(n.code,{children:"Custom Field"}),", ",(0,s.jsx)(n.code,{children:"Configuration Option"})," or a fixed value."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To configure it to use a ",(0,s.jsx)(n.code,{children:"Custom Field"})," set the value to ",(0,s.jsx)(n.code,{children:"CustomField:FieldName"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"example",type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"CustomField:Hostname"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To configure it to use a ",(0,s.jsx)(n.code,{children:"Configuration Option"})," set the value to ",(0,s.jsx)(n.code,{children:"ConfigOption:OptionName"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"example",type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ConfigOption:Slots"})})}),"\n",(0,s.jsx)(n.admonition,{title:"full example in code",type:"info",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'$billing_api_values["game_additional_slots"] = "ConfigOption:Extra Slots";\n'})})}),"\n",(0,s.jsx)(n.h3,{id:"sending-custom-variable-values",children:"Sending Custom Variable Values"}),"\n",(0,s.jsx)(n.p,{children:"You can specify custom variable values directly by using the following formats. The variable name is case sensitive. If custom variable values are not specified the default value will be used."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",metastring:'title="For game servers:"',children:'$billing_api_values["gamevar_VariableName"] = "ConfigOption:ReservedSlots";\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",metastring:'title="For voice servers:"',children:'$billing_api_values["voicevar_VariableName"] = "CustomField:VoiceCodec";\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",metastring:'title="Minecraft example:"',children:'$billing_api_values["gamevar_Xms"] = "2048";\n$billing_api_values["gamevar_Xmx"] = "2048";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sending-allowed-games-for-game-switching",children:"Sending Allowed Games for Game Switching"}),"\n",(0,s.jsx)(n.p,{children:"Use game_id_switch_# to specify the game ids that the service can be switched to. For example this allows the game server to switch to game ids 10, 20, 30.:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'$billing_api_values["game_id_switch_1"]=10;\n$billing_api_values["game_id_switch_2"]=20;\n$billing_api_values["game_id_switch_3"]=30;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"game-switching-from-whmcs",children:"Game Switching from WHMCS"}),"\n",(0,s.jsx)(n.p,{children:"Instead of sending the values explained above, you can switch the game directly from WHMCS by sending a different value for game_id from the WHMCS upgrade/downgrade function.\nTo do this, go to the product's configuration. In the Upgrade tab select the allowed games. When the user upgrades his package the game server will be reinstalled with the new game."}),"\n",(0,s.jsx)(n.p,{children:"Optionally, you can send game_delete_on_switch=1 to delete the game server and create a new one. This way it will go through the process of finding a different server according to your billing API configuration."}),"\n",(0,s.jsx)(n.h3,{id:"custom-config-file",children:"Custom Config File"}),"\n",(0,s.jsx)(n.p,{children:"In some cases you might need to set different API values or execute custom code for a specific game. To use different config files for a game you can create a new text file with .php extension in the tcadmin2_advanced folder with these lines. Set the name of the custom file in your product's module settings."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"<?php\n  include('default_values.php');\n  //Your code here\n?>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["The following example sets the game slots to a fixed value of 100. The Xmx and Xms variables are set to 2048 (2GB). All the other values configured in default_values.php are left the same. Upload to the tcadmin2_advanced folder. In the product's module settings configure this file as the config file instead of ",(0,s.jsx)(n.code,{children:"default_values.php"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'<?php\n  include(\'default_values.php\');\n  $billing_api_values["game_slots"] = 100;\n  $billing_api_values["gamevar_Xms"] = "2048";\n  $billing_api_values["gamevar_Xmx"] = "2048";\n?>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"dont-start-the-game-server-after-it-has-been-created",children:"Don't start the game server after it has been created."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"<?php\n  include('default_values.php');\n  $billing_api_values[\"game_start\"] = 0;\n?>\n"})}),"\n",(0,s.jsx)(n.h4,{id:"the-following-example-sends-a-different-game-id-depending-the-location-selected-by-the-client-you-must-have-a-custom-field-named-location",children:"The following example sends a different game id depending the location selected by the client. You must have a custom field named Location."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'<?php\ninclude(\'default_values.php\');\nswitch ($params["customfields"]["Location"])\n{\ncase "1":\n  $billing_api_values["game_id"] = 11;\n  break;\ncase "2":\n  $billing_api_values["game_id"] = 12;\n  break;\n}\n?>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"set-cpu-priority-to-above-normal",children:"Set CPU priority to above normal."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'<?php\n  include(\'default_values.php\');\n  //Valid values are: Idle BelowNormal Normal AboveNormal High RealTime\n  $billing_api_values["game_priority"] = "AboveNormal";\n?>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"set-cpu-and-memory-limits",children:"Set CPU and memory limits."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'<?php\n  include(\'default_values.php\');\n  $billing_api_values["game_cpu"] = "75";\n  $billing_api_values["game_memory"] = "2048";\n?>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"minecraft-example",children:"Minecraft Example"}),"\n",(0,s.jsx)(n.p,{children:"Create a configurable option named Ram with values 512MB, 1GB, 1.5GB. The values of slots, Xms and Xmx variables are set depending on its value. Create a config file in the tcadmin2_advanced folder named minecraft.php with these lines. In the product's module settings set the config file to minecraft.php."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'<?php\ninclude(\'default_values.php\');\nswitch ($params["configoptions"]["Ram"])\n{\ncase "512MB":\n  $billing_api_values["gamevar_Xms"] = "512";\n  $billing_api_values["gamevar_Xmx"] = "512";\n  $billing_api_values["game_slots"] = 12;\n  break;\ncase "1GB":\n  $billing_api_values["gamevar_Xms"] = "1024";\n  $billing_api_values["gamevar_Xmx"] = "1024";\n  $billing_api_values["game_slots"] = 20;\n  break;\ncase "1.5GB":\n  $billing_api_values["gamevar_Xms"] = "1512";\n  $billing_api_values["gamevar_Xmx"] = "1512";\n  $billing_api_values["game_slots"] = 35;\n  break;\ncase "2GB":\n  $billing_api_values["gamevar_Xms"] = "2048";\n  $billing_api_values["gamevar_Xmx"] = "2048";\n  $billing_api_values["game_slots"] = 40;\n  break;\n}\n?>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"create-a-reseller-package",children:"Create a reseller package"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a reseller package in settings > reseller packages. In the list of reseller packages you can find the package id that you will need for the WHMCS configuration."}),"\n",(0,s.jsx)(n.li,{children:"create a file named reseller.php in the tcadmin2_advanced folder with these lines:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'<?php\n  include(\'default_values.php\');\n  //Your code here\n  $billing_api_values["role_id"]="3";\n  $billing_api_values["package_id"]="12345";\n?>\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Change the value of role_id to the reseller role id (default reseller role id is 3)"}),"\n",(0,s.jsx)(n.li,{children:"Change the value of package_id to the id of the package you want to assign."}),"\n",(0,s.jsx)(n.li,{children:"Select your reseller product in WHMCS. In the module settings tab set the config file to reseller.php"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"other-configuration-parameters",children:"Other configuration parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"game_start / voice_start"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start the service after it has been created."}),"\n",(0,s.jsx)(n.li,{children:"Allowed values are 1 and 0."}),"\n",(0,s.jsx)(n.li,{children:"The default value is 1."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"game_startup / voice_startup"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Specify the service's startup."}),"\n",(0,s.jsx)(n.li,{children:"Allowed values are Automatic, Manual, Disabled."}),"\n",(0,s.jsx)(n.li,{children:"The default value is Automatic."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"game_additional_slots / voice_additional_slots"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Value added to game_slots."}),"\n",(0,s.jsx)(n.li,{children:"Default value is 0."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"game_priority / voice_priority"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Specify the CPU priority."}),"\n",(0,s.jsx)(n.li,{children:"Allowed values are Idle, BelowNormal, Normal, AboveNormal, High, RealTime."}),"\n",(0,s.jsx)(n.li,{children:"The default value is Normal."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"game_server / voice_server"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Specify the server id for service creation."}),"\n",(0,s.jsx)(n.li,{children:"Can be used instead of game_datacenter."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"game_cpu / voice_cpu"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Specify a value from 1 to 100 (Windows) or 1 to (100 x number of processors) (Linux)."}),"\n",(0,s.jsxs)(n.li,{children:["See ",(0,s.jsxs)(n.a,{href:"/misc/limit-service-cpu-andmemory-usage#windows",children:["Limit Service CPU and Memory Usage ",(0,s.jsx)(n.strong,{children:"(Windows)"})]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["See ",(0,s.jsxs)(n.a,{href:"/misc/limit-service-cpu-andmemory-usage#linux",children:["Limit Service CPU and Memory Usage ",(0,s.jsx)(n.strong,{children:"(Linux)"})]}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"game_memory / voice_memory"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Specify the max allowed memory in MB."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"game_virtual_memory / game_virtual_memory"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Specify the max allowed virtual memory in MB (Windows only)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"specifying-different-module-value-and-display-value",children:"Specifying Different Module Value and Display Value"}),"\n",(0,s.jsxs)(n.p,{children:['In WHMCS, you can configure dropdowns and radios to send a different value to the module than the one that is displayed in the order form. This is useful because you must send ids to the TCAdmin billing api but you want to show a friendly name to the client. The module value and display value are separated by the pipe character "|". The format is ModuleValue|DisplayValue For example: You can create a dropdown list that has the locations New York and Dallas but you want the billing api to receive the datacenter ids 1 and 2. You can create a ',(0,s.jsx)(n.code,{children:"Custom Field"})," of type ",(0,s.jsx)(n.code,{children:"Drop Down"})," with these options: 1|Dallas,2|NewYork"]}),"\n",(0,s.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The values sent to TCAdmin are saved in the log file ",(0,s.jsx)(n.code,{children:"/home/tcadmin/Logs/Web/BillingApi.LastCommand.log"})," or ",(0,s.jsx)(n.code,{children:"C:\\Program Files\\TCAdmin2\\Logs\\Web\\BillingApi.LastCommand.log"})," Make sure TCAdmin is receiving the correct values. The values required to create a game server are: game_id, game_slots, game_datacenter."]}),"\n",(0,s.jsx)(n.li,{children:"If TCAdmin accepts the values a scheduled task is created. If the game server is never created go to System > General Settings > Scheduled Tasks. Select the Day view and click on the task that was created. You should see the error message preventing the game server from being created. Correct the problem and start the task again. You don't need to send the command from WHMCS again."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"update-products-and-services-from-tcadmin-to-tcadmin2_advanced",children:"Update Products and Services from tcadmin to tcadmin2_advanced"}),"\n",(0,s.jsx)(n.p,{children:"If you are going to keep the same custom fields and configurable options in your products you need to follow these steps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Update the module settings in the product. Switch from tcadmin to tcadmin2_advanced module and map the required tcadmin attributes to custom fields and configurable options."}),"\n",(0,s.jsx)(n.li,{children:"Update the server field in the client's service."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you are going to change custom fields and configurable options we recommend you create a copy of the product and modify the copy (Duplicate link at the top of the products page). When the new product is ready go to the client's service. Change the package and server. Enter the correct values again and save."}),"\n",(0,s.jsx)(n.admonition,{title:"warning",type:"danger",children:(0,s.jsx)(n.p,{children:"After you change the package all the values of custom fields and configurable options for that service will be lost and you will not be able to recover them."})}),"\n",(0,s.jsx)(n.p,{children:"To enable direct client login from WHMCS to TCAdmin you must configure the service\xe2\x80\x99s username and password. To disable this feature leave the username and password fields blank."}),"\n",(0,s.jsx)(n.h3,{id:"cloudflare",children:"Cloudflare"}),"\n",(0,s.jsxs)(n.p,{children:["If Cloudflare is blocking requests to the billing api go to the ",(0,s.jsx)(n.code,{children:"Cloudflare control panel"})," > Security > Web Application Firewall (WAF) > Tools and allow your WHMCS IP."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"WHMCS_WAF",src:i(383).A+"",width:"1084",height:"606"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"WHMCS_WAF2",src:i(9501).A+"",width:"1044",height:"462"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3829:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/WHMCSModuleSettingsBlank-894d188153f4f8ec76af3391743d880f.png"},383:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/WHMCS_WAF-b79f4ba23894e030a31bddeb629af2ae.png"},9501:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/WHMCS_WAF2-2d66de7f4499dc74801bf72309e6ab28.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var l=i(6540);const s={},a=l.createContext(s);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);