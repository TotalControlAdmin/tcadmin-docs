"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[6482],{9024:(n,e,E)=>{E.r(e),E.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>I,frontMatter:()=>s,metadata:()=>a,toc:()=>r});var o=E(4848),t=E(8453);const s={sidebar_position:3,sidebar_label:"Improve MySQL Connection Speed"},c="Improve MySQL Connection Speed",a={id:"database/improve-mysql-connection-speed",title:"Improve MySQL Connection Speed",description:"Disable name resolve",source:"@site/docs/database/improve-mysql-connection-speed.mdx",sourceDirName:"database",slug:"/database/improve-mysql-connection-speed",permalink:"/database/improve-mysql-connection-speed",draft:!1,unlisted:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/database/improve-mysql-connection-speed.mdx",tags:[],version:"current",lastUpdatedAt:1716196388e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Improve MySQL Connection Speed"},sidebar:"tutorialSidebar",previous:{title:"MySQL Replication",permalink:"/database/mysql-replication"},next:{title:"Changed the MySQL Server or Password and TCAdmin can't Connect",permalink:"/database/changed-the-mysql-server-or-password-and-tcadmin-cant-connect"}},i={},r=[{value:"Disable name resolve",id:"disable-name-resolve",level:2},{value:"MySQL Query Cache",id:"mysql-query-cache",level:2},{value:"Change the tables to the InnoDB engine",id:"change-the-tables-to-the-innodb-engine",level:2},{value:"Increase the value of innodb_buffer_pool_size in my.ini",id:"increase-the-value-of-innodb_buffer_pool_size-in-myini",level:2}];function _(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"improve-mysql-connection-speed",children:"Improve MySQL Connection Speed"}),"\n",(0,o.jsx)(e.h2,{id:"disable-name-resolve",children:"Disable name resolve"}),"\n",(0,o.jsx)(e.p,{children:'To improve MySQL connection speed or fix the "Server did not respond within the specified timeout interval" error add skip-name-resolve to your MySQL server\'s my.ini or my.cnf under [mysqld]. Then restart the MySQL server.'}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"[mysqld]\nskip-name-resolve\n"})}),"\n",(0,o.jsx)(e.admonition,{type:"warning",children:(0,o.jsx)(e.p,{children:"Sometimes if you disable name resolve you lose the ability to log in with root@localhost. If this happens enable name resolve again and create root@127.0.0.1"})}),"\n",(0,o.jsx)(e.h2,{id:"mysql-query-cache",children:"MySQL Query Cache"}),"\n",(0,o.jsx)(e.p,{children:'If you have query cache enabled use MySQL Workbench to monitor your client connections. Set refresh to 0.5 seconds. If you see "waiting for query cache lock" every once in a while you might get better performance with query cache disabled.'}),"\n",(0,o.jsx)(e.h2,{id:"change-the-tables-to-the-innodb-engine",children:"Change the tables to the InnoDB engine"}),"\n",(0,o.jsx)(e.p,{children:"If you have a large database you can improve performance by changing your tables to the InnoDB engine. Execute these commands on your database:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE tc_api_config ENGINE = InnoDB;\nALTER TABLE tc_company_info ENGINE = InnoDB;\nALTER TABLE tc_countries ENGINE = InnoDB;\nALTER TABLE tc_custom_variables ENGINE = InnoDB;\nALTER TABLE tc_datacenters ENGINE = InnoDB;\nALTER TABLE tc_datasource_fields ENGINE = InnoDB;\nALTER TABLE tc_dc_licenses ENGINE = InnoDB;\nALTER TABLE tc_default_variables ENGINE = InnoDB;\nALTER TABLE tc_dynamic_form_items ENGINE = InnoDB;\nALTER TABLE tc_dynamic_forms ENGINE = InnoDB;\nALTER TABLE tc_file_providers ENGINE = InnoDB;\nALTER TABLE tc_file_servers ENGINE = InnoDB;\nALTER TABLE tc_fileserver_reports ENGINE = InnoDB;\nALTER TABLE tc_game_bukkit_config ENGINE = InnoDB;\nALTER TABLE tc_game_cmdlines ENGINE = InnoDB;\nALTER TABLE tc_game_config_files ENGINE = InnoDB;\nALTER TABLE tc_game_fast_download ENGINE = InnoDB;\nALTER TABLE tc_game_general_config ENGINE = InnoDB;\nALTER TABLE tc_game_identity ENGINE = InnoDB;\nALTER TABLE tc_game_keys ENGINE = InnoDB;\nALTER TABLE tc_game_links ENGINE = InnoDB;\nALTER TABLE tc_game_mail_templates ENGINE = InnoDB;\nALTER TABLE tc_game_map_packs ENGINE = InnoDB;\nALTER TABLE tc_game_mods ENGINE = InnoDB;\nALTER TABLE tc_game_packages ENGINE = InnoDB;\nALTER TABLE tc_game_paths ENGINE = InnoDB;\nALTER TABLE tc_game_permissions ENGINE = InnoDB;\nALTER TABLE tc_game_ports ENGINE = InnoDB;\nALTER TABLE tc_game_protocols ENGINE = InnoDB;\nALTER TABLE tc_game_punkbuster_config ENGINE = InnoDB;\nALTER TABLE tc_game_query_monitoring ENGINE = InnoDB;\nALTER TABLE tc_game_scripts ENGINE = InnoDB;\nALTER TABLE tc_game_service_custom_cmdlines ENGINE = InnoDB;\nALTER TABLE tc_game_service_detailed_stats ENGINE = InnoDB;\nALTER TABLE tc_game_service_historical_stats ENGINE = InnoDB;\nALTER TABLE tc_game_service_live_stats ENGINE = InnoDB;\nALTER TABLE tc_game_service_workshop_files ENGINE = InnoDB;\nALTER TABLE tc_game_services ENGINE = InnoDB;\nALTER TABLE tc_game_spiget_config ENGINE = InnoDB;\nALTER TABLE tc_game_steam_config ENGINE = InnoDB;\nALTER TABLE tc_game_templates ENGINE = InnoDB;\nALTER TABLE tc_game_text_console ENGINE = InnoDB;\nALTER TABLE tc_game_tracker_config ENGINE = InnoDB;\nALTER TABLE tc_game_updates ENGINE = InnoDB;\nALTER TABLE tc_game_variables_config ENGINE = InnoDB;\nALTER TABLE tc_game_web_console ENGINE = InnoDB;\nALTER TABLE tc_games ENGINE = InnoDB;\nALTER TABLE tc_global_game_scripts ENGINE = InnoDB;\nALTER TABLE tc_info ENGINE = InnoDB;\nALTER TABLE tc_installed_plugins ENGINE = InnoDB;\nALTER TABLE tc_lang_datasource_fields ENGINE = InnoDB;\nALTER TABLE tc_lang_page_icons ENGINE = InnoDB;\nALTER TABLE tc_lang_panelbar_categories ENGINE = InnoDB;\nALTER TABLE tc_lang_properties ENGINE = InnoDB;\nALTER TABLE tc_lang_site_map ENGINE = InnoDB;\nALTER TABLE tc_languages ENGINE = InnoDB;\nALTER TABLE tc_mail_config ENGINE = InnoDB;\nALTER TABLE tc_mail_template_types ENGINE = InnoDB;\nALTER TABLE tc_mail_templates ENGINE = InnoDB;\nALTER TABLE tc_module_commands ENGINE = InnoDB;\nALTER TABLE tc_module_processes ENGINE = InnoDB;\nALTER TABLE tc_module_server_components ENGINE = InnoDB;\nALTER TABLE tc_modules ENGINE = InnoDB;\nALTER TABLE tc_object_required_permissions ENGINE = InnoDB;\nALTER TABLE tc_packages ENGINE = InnoDB;\nALTER TABLE tc_page_icon_categories ENGINE = InnoDB;\nALTER TABLE tc_page_icons ENGINE = InnoDB;\nALTER TABLE tc_panelbar_categories ENGINE = InnoDB;\nALTER TABLE tc_permission_categories ENGINE = InnoDB;\nALTER TABLE tc_permissions ENGINE = InnoDB;\nALTER TABLE tc_private_networks ENGINE = InnoDB;\nALTER TABLE tc_recurring_tasks ENGINE = InnoDB;\nALTER TABLE tc_role_permissions ENGINE = InnoDB;\nALTER TABLE tc_roles ENGINE = InnoDB;\nALTER TABLE tc_script_engines ENGINE = InnoDB;\nALTER TABLE tc_security ENGINE = InnoDB;\nALTER TABLE tc_server_enabled_components ENGINE = InnoDB;\nALTER TABLE tc_server_ips ENGINE = InnoDB;\nALTER TABLE tc_servers ENGINE = InnoDB;\nALTER TABLE tc_services ENGINE = InnoDB;\nALTER TABLE tc_site_map ENGINE = InnoDB;\nALTER TABLE tc_support_categories ENGINE = InnoDB;\nALTER TABLE tc_support_config ENGINE = InnoDB;\nALTER TABLE tc_support_ticket_attachments ENGINE = InnoDB;\nALTER TABLE tc_support_ticket_replies ENGINE = InnoDB;\nALTER TABLE tc_support_tickets ENGINE = InnoDB;\nALTER TABLE tc_task_categories ENGINE = InnoDB;\nALTER TABLE tc_task_steps ENGINE = InnoDB;\nALTER TABLE tc_tasks ENGINE = InnoDB;\nALTER TABLE tc_teamspeak_permissions ENGINE = InnoDB;\nALTER TABLE tc_teamspeak_servers ENGINE = InnoDB;\nALTER TABLE tc_teamspeak_service_snapshots ENGINE = InnoDB;\nALTER TABLE tc_teamspeak_services ENGINE = InnoDB;\nALTER TABLE tc_user_messages ENGINE = InnoDB;\nALTER TABLE tc_user_packages ENGINE = InnoDB;\nALTER TABLE tc_user_widgets ENGINE = InnoDB;\nALTER TABLE tc_usercontrols ENGINE = InnoDB;\nALTER TABLE tc_users ENGINE = InnoDB;\n"})}),"\n",(0,o.jsx)(e.h2,{id:"increase-the-value-of-innodb_buffer_pool_size-in-myini",children:"Increase the value of innodb_buffer_pool_size in my.ini"}),"\n",(0,o.jsx)(e.p,{children:"Execute this query in your mysql server."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"SELECT CEILING(Total_InnoDB_Bytes*1.6/POWER(1024,3)) RIBPS FROM\n(SELECT SUM(data_length+index_length) Total_InnoDB_Bytes\nFROM information_schema.tables WHERE engine='InnoDB') A;\n"})}),"\n",(0,o.jsx)(e.p,{children:"Set that value in my.ini in gigabytes. For example if it returns 5 update the value of innodb_buffer_pool_size like this:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"innodb_buffer_pool_size=5G\n"})})]})}function I(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(_,{...n})}):_(n)}},8453:(n,e,E)=>{E.d(e,{R:()=>c,x:()=>a});var o=E(6540);const t={},s=o.createContext(t);function c(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);