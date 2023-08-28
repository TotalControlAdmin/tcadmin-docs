"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[5822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,sidebar_label:"MySQL Replication"},i="MySQL Replication",l={unversionedId:"database/mysql-replication",id:"database/mysql-replication",title:"MySQL Replication",description:"Replication enables data from one MySQL database server (the master) to be replicated to one or more MySQL database servers (the slaves). This improves performance if you have servers in different regions. All updates to the database must take place in the MySQL master. The connection to the MySQL slave is read-only. TCAdmin will only create a connection to the MySQL master if the database needs to be updated.",source:"@site/docs/database/mysql-replication.mdx",sourceDirName:"database",slug:"/database/mysql-replication",permalink:"/database/mysql-replication",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/database/mysql-replication.mdx",tags:[],version:"current",lastUpdatedAt:1693210718,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"MySQL Replication"},sidebar:"tutorialSidebar",previous:{title:"Convert SQLite Database to MySQL",permalink:"/database/convert-sqlite-to-mysql"},next:{title:"Improve MySQL Connection Speed",permalink:"/database/improve-mysql-connection-speed"}},s={},d=[{value:"Create User for Replication",id:"create-user-for-replication",level:2},{value:"MySQL Master Configuration",id:"mysql-master-configuration",level:2},{value:"Obtain the Master Binary Log Coordinates",id:"obtain-the-master-binary-log-coordinates",level:2},{value:"Transfer the Current Database to the MySQL Slave",id:"transfer-the-current-database-to-the-mysql-slave",level:2},{value:"MySQL Slave Configuration",id:"mysql-slave-configuration",level:2},{value:"Testing your Configuration",id:"testing-your-configuration",level:2},{value:"Adding More Slaves",id:"adding-more-slaves",level:2},{value:"Configuring TCAdmin",id:"configuring-tcadmin",level:2},{value:"Configuring TCAdmin (old instructions)",id:"configuring-tcadmin-old-instructions",level:2},{value:"Testing Replication in TCAdmin",id:"testing-replication-in-tcadmin",level:2}],c={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-replication"},"MySQL Replication"),(0,o.kt)("p",null,"Replication enables data from one MySQL database server (the master) to be replicated to one or more MySQL database servers (the slaves). This improves performance if you have servers in different regions. All updates to the database must take place in the MySQL master. The connection to the MySQL slave is read-only. TCAdmin will only create a connection to the MySQL master if the database needs to be updated."),(0,o.kt)("h1",{id:"how-to-set-up-mysql-replication"},"How to Set Up MySQL Replication"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following instructions are provided for your convenience. We do not provide support for configuring replication on your MySQL server.")),(0,o.kt)("p",null,"For detailed instructions, read the ",(0,o.kt)("a",{parentName:"p",href:"http://dev.mysql.com/doc/refman/5.1/en/replication-howto.html"},"MySQL reference manual"),". You can also follow the instructions from this ",(0,o.kt)("a",{parentName:"p",href:"http://www.howtoforge.com/mysql_database_replication"},"article"),"."),(0,o.kt)("h2",{id:"create-user-for-replication"},"Create User for Replication"),(0,o.kt)("p",null,"Execute these commands on your MySQL master while logged in as root. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"SLAVEUSER")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SLAVEPASS")," with the user and password that you want to create. For increased security, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"%")," with the IP of your MySQL slave."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'SLAVEUSER'@'%' IDENTIFIED BY 'SLAVEPASS';\nGRANT REPLICATION SLAVE ON *.* TO 'SLAVEUSER'@'%';\n")),(0,o.kt)("h2",{id:"mysql-master-configuration"},"MySQL Master Configuration"),(0,o.kt)("p",null,"Add the following to your MySQL master's ",(0,o.kt)("inlineCode",{parentName:"p"},"my.ini")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"my.cnf")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"[mysqld]"),". Then restart the MySQL service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"log-bin=mysql-bin\nserver-id=1\nsync_binlog=1\n")),(0,o.kt)("h2",{id:"obtain-the-master-binary-log-coordinates"},"Obtain the Master Binary Log Coordinates"),(0,o.kt)("p",null,"Log in to your MySQL master as root and execute the following commands. ",(0,o.kt)("strong",{parentName:"p"},"DO NOT CLOSE THIS MYSQL SESSION YET.")," These commands lock your database to prevent writing. This is required to guarantee data integrity while the data is being transferred to the MySQL slave."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"FLUSH TABLES WITH READ LOCK;\nSHOW MASTER STATUS;\n")),(0,o.kt)("p",null,"You should see output similar to the following. The log file name and position will be required for the following steps."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------------------+----------+--------------+------------------+\n| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB |\n+------------------+----------+--------------+------------------+\n| mysql-bin.000002 |   609384 |              |                  |\n+------------------+----------+--------------+------------------+\n1 row in set (0.00 sec)\n")),(0,o.kt)("h2",{id:"transfer-the-current-database-to-the-mysql-slave"},"Transfer the Current Database to the MySQL Slave"),(0,o.kt)("p",null,"Create an empty database and user on the MySQL slave. The database should be named the same as your TCAdmin database on the MySQL master. Execute the following command to backup and restore the database to the slave. Replace the values as needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mysqldump -hMASTERIP -uMASTERDBUSER -pMASTERDBPASS TCADMINDB | mysql -hSLAVEIP -uSLAVEDBUSER -pSLAVEDBPASS --database=TCADMINDB\n")),(0,o.kt)("p",null,"After the command completes, go to the session connected to the MySQL master and execute this command to unlock the tables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"UNLOCK TABLES;\n")),(0,o.kt)("h2",{id:"mysql-slave-configuration"},"MySQL Slave Configuration"),(0,o.kt)("p",null,"Add the following to your MySQL Slave's ",(0,o.kt)("inlineCode",{parentName:"p"},"my.ini")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"my.cnf")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"[mysqld]"),". Replace the values as needed. Then restart the MySQL service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"server-id=2\nreplicate-do-db=TCADMINDB\nread-only\n")),(0,o.kt)("p",null,"After restarting the service, log in to the MySQL Slave server as root. Execute the following commands. Replace the values as needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"stop slave;\nchange master to master_host='MYSQLMASTERIP', master_user='REPLICATIONUSER', master_password='REPLICATIONPASSWORD', master_log_file='LOGFILENAME', master_log_pos=LOGFILEPOSITION;\nstart slave;\n")),(0,o.kt)("h2",{id:"testing-your-configuration"},"Testing your Configuration"),(0,o.kt)("p",null,"Log in to your MySQL master and execute these commands. Replace the database name as needed. This command will update the admin's last name to 'REPLICATION SUCCESS'. You can change it back later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"use tcadmin2;\nUPDATE tc_users SET last_name='REPLICATION SUCCESS' WHERE user_id=3;\n")),(0,o.kt)("p",null,"Now log in to your MySQL slave and execute these commands. Replace the database name as needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"use tcadmin2;\nSELECT last_name FROM tc_users WHERE user_id=3;\n")),(0,o.kt)("p",null,"If you see the following, it means you have configured replication correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+---------------------+\n| last_name           |\n+---------------------+\n| REPLICATION SUCCESS |\n+---------------------+\n1 row in set (0.00 sec)\n")),(0,o.kt)("h2",{id:"adding-more-slaves"},"Adding More Slaves"),(0,o.kt)("p",null,"The process to add more slaves is exactly the same. Just make sure you assign a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"server-id")," to the slave's ",(0,o.kt)("inlineCode",{parentName:"p"},"my.ini")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"my.cnf"),". If you specified the replication user's IP, you will need to create a new user with the new slave's IP."),(0,o.kt)("h2",{id:"configuring-tcadmin"},"Configuring TCAdmin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Server Management > Remote DB Connections"),". Configure the connection that remote servers will use to connect to the MySQL master. This connection is used for writing.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Server Management > Datacenters > Select the datacenter"),'. In the Remote DB Connection tab, set the type to "MySQL master-slave replication". Configure the database connection to the MySQL slave.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install TCAdmin on the remote server and configure it with a new ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigUtility.config"),". If the remote server has already been configured, download and save the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigUtility.config")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/tcadmin/Monitor")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\TCAdmin2\\Monitor"),", and restart the remote monitor."))),(0,o.kt)("h2",{id:"configuring-tcadmin-old-instructions"},"Configuring TCAdmin (old instructions)"),(0,o.kt)("p",null,"These instructions are still valid, but the new instructions are recommended."),(0,o.kt)("p",null,"Configure a remote or master as you normally would using the TCAdmin Configuration Utility. When you get to the database settings, configure it to connect to the nearest MySQL slave or master."),(0,o.kt)("p",null,"If you already have it configured, you might not be able to use the configuration utility again. You can update the Remote DB Connection with the MySQL slave connection info. Download a new ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigUtility.config")," for the remote and save it to the remote's Monitor folder."),(0,o.kt)("p",null,"After applying the configuration with the Configuration Utility, create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"Replication.config")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program Files\\TCAdmin2\\Monitor")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/tcadmin/Monitor")," with the following. Replace the values as needed. Then restart the TCAdmin monitor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-16" standalone="yes"?>\n<values>\n  <add key="TCAdmin.Database.MySql.ConnectionString" value="Data Source=MYSQLMASTERIP;User Id=MYSQLMASTERUSER;Password=MYSQLMASTERPASS;Database=TCADMINDB;Pooling=false;Compress=false;Connection Lifetime=900;" type="System.String,mscorlib" />\n  <add key="TCAdmin.Database.MySql.ConnectionString.Encrypted" value="False" type="System.Boolean,mscorlib" />\n  <add key="Replication.WaitSync" value="5000" type="System.Int32,mscorlib" />\n</values>\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you specify a value greater than 0 for ",(0,o.kt)("inlineCode",{parentName:"p"},"Replication.WaitSync"),", TCAdmin will verify that records added to the MySQL master are updated on the MySQL slave before continuing. The value specified is the maximum milliseconds to wait for the slave to update. Set to 0 or remove the line to disable this feature. If the time limit is reached, an entry is added to the monitor's console and error logs."),(0,o.kt)("p",{parentName:"admonition"},"The connection information in this file is for the MySQL Master. When TCAdmin needs to update the database, it will connect to the MySQL Master. When it needs to read values, it will connect to the MySQL Slave.")),(0,o.kt)("h2",{id:"testing-replication-in-tcadmin"},"Testing Replication in TCAdmin"),(0,o.kt)("p",null,"Start the monitor in console mode, then execute this command in the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"replication-test\n")))}p.isMDXComponent=!0}}]);