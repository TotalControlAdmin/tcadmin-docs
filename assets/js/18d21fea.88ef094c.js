"use strict";(self.webpackChunktcadmin_docs=self.webpackChunktcadmin_docs||[]).push([[388],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>S});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),k=i,S=m["".concat(p,".").concat(k)]||m[k]||u[k]||a;return r?n.createElement(S,o(o({ref:t},c),{},{components:r})):n.createElement(S,o({ref:t},c))}));function S(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:5,sidebar_label:"Backup & Restore Scripts with FTP Support"},o="Backup & Restore Scripts with FTP Support",s={unversionedId:"customizations/scripts/general-scripts/backup-restore-scripts-with-ftp-support",id:"customizations/scripts/general-scripts/backup-restore-scripts-with-ftp-support",title:"Backup & Restore Scripts with FTP Support",description:"These scripts are a modified version of Backup & Restore_Scripts. Instead of keeping a local copy of the zip it will get uploaded to FTP. Locally in the backups folder you will see a zip with 0 bytes. This is used to remember which files have been uploaded.",source:"@site/docs/customizations/scripts/general-scripts/backup-restore-scripts-with-ftp-support.mdx",sourceDirName:"customizations/scripts/general-scripts",slug:"/customizations/scripts/general-scripts/backup-restore-scripts-with-ftp-support",permalink:"/customizations/scripts/general-scripts/backup-restore-scripts-with-ftp-support",draft:!1,editUrl:"https://github.com/TotalControlAdmin/tcadmin-docs/blob/master/docs/customizations/scripts/general-scripts/backup-restore-scripts-with-ftp-support.mdx",tags:[],version:"current",lastUpdatedAt:1701001265,formattedLastUpdatedAt:"Nov 26, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Backup & Restore Scripts with FTP Support"},sidebar:"tutorialSidebar",previous:{title:"Backup & Restore Scripts",permalink:"/customizations/scripts/general-scripts/backup-restore-scripts"},next:{title:"Check slots, ip and port in config file before starting",permalink:"/customizations/scripts/general-scripts/check-slots-ip-ports-in-config-file-before-starting"}},p={},l=[{value:"Secure your Backups folder",id:"secure-your-backups-folder",level:2},{value:"Create the variable",id:"create-the-variable",level:2},{value:"Create the scripts",id:"create-the-scripts",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"backup--restore-scripts-with-ftp-support"},"Backup & Restore Scripts with FTP Support"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"These scripts are a modified version of ",(0,i.kt)("a",{parentName:"p",href:"/customizations/scripts/general-scripts/backup-restore-scripts"},"Backup & Restore_Scripts"),". Instead of keeping a local copy of the zip it will get uploaded to FTP. Locally in the backups folder you will see a zip with 0 bytes. This is used to remember which files have been uploaded.")),(0,i.kt)("h2",{id:"secure-your-backups-folder"},"Secure your Backups folder"),(0,i.kt)("admonition",{title:"Urgent Warning: Critical Configuration Step - Neglect at Your Peril!",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Failure to execute this pivotal step in the configuration process will render your server alarmingly susceptible to exploitations and security breaches.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to Settings > Games > Select the game > File System Permissions."),(0,i.kt)("li",{parentName:"ul"},"Expand User Files and select Add permissions by subdirectory."),(0,i.kt)("li",{parentName:"ul"},"Configure these values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Subdirectory Path: Backups"),(0,i.kt)("li",{parentName:"ul"},'Permissions: "no permissions"'),(0,i.kt)("li",{parentName:"ul"},"Click on Add."),(0,i.kt)("li",{parentName:"ul"},'Add the same permission for "Sub Admin Files" and "Reseller Files".'),(0,i.kt)("li",{parentName:"ul"},"Click on Save.")))),(0,i.kt)("h2",{id:"create-the-variable"},"Create the variable"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure a variable used by the restore script. Go to Settings > Games > Select the game > Variables (it can also be a global variable). Create this variable:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name:")," BackupFile"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Script parameter:")," Checked"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Admin access:")," Checked"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sub admin access:")," Checked"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reseller access:")," Checked"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User access:")," Checked"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Server owner access:")," Checked"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Value is required:")," Checked"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required Message:")," The backup file is required."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Item Type:")," Combobox"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Label:")," Backup:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description:")," Select the backup to restore."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source:")," File System"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filter Type:")," Files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filter:")," Backups/*.zip"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Item Value:")," Full path"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Item Display:")," Name (no extension)")))),(0,i.kt)("h2",{id:"create-the-scripts"},"Create the scripts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go back to the game's main settings. Click on the Custom Scripts icon. Add the following scripts. They can also be configured as global scripts.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operating System:")," Any",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Name:")," Backup Your Settings",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description:")," Create a backup of your game server's settings.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Script Engine:")," IronPython",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Event:")," Custom Icon",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Sub admin access:")," Checked",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Reseller access:")," Checked",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"User access:")," Checked",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Server owner access:")," Checked",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Stop service before executing:")," Check if you want to stop the game server before creating the backup.",(0,i.kt)("br",{parentName:"p"}),"\n","Script: Configure BACKUP_LOCATION, MAX_BACKUPS, BACKUP_EXTENSIONS, FOLDER_TO_BACKUP, BACKUP_FTP_IP, BACKUP_FTP_PORT, BACKUP_FTP_USER, BACKUP_FTP_PASSWORD, BACKUP_FTP_PATH as needed."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you change the backup location remember to update your file system permissions.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import clr;\nclr.AddReference("TCAdmin.SDK");\n\nimport System;\nfrom System import Array, String, DateTime, Exception, Environment, PlatformID\nfrom System.IO import Path, DirectoryInfo, SearchOption\nfrom System.Collections.Generic import List\nfrom System.Globalization import CultureInfo\nfrom TCAdmin.SDK.Misc import CompressionTools, Linux, Windows\n\nclr.AddReference("System.Core")\nclr.ImportExtensions(System.Linq)\n\n# FTP support\nfrom System.Net import WebRequest, WebRequestMethods, NetworkCredential\nfrom System.IO import StreamReader, File\nfrom System.Text import Encoding\n\n# FTP Connection\nFTP_IP = "BACKUP_FTP_IP"\nFTP_PORT = BACKUP_FTP_PORT\nFTP_USER = "BACKUP_FTP_USERNAME"\nFTP_PASSWORD = "BACKUP_FTP_PASSWORD"\n# FTP Path should be something like /Backups/{0}\nFTP_BACKUP_PATH = String.Format("/BACKUP_FTP_PATH/{0}", ThisService.ServiceId)\n# Enable support for FTPS\nENABLE_FTP_SSL = False\n\n# Specify where backups are saved.\n# Default location is a folder named Backups in the game server\'s root.\nBACKUP_LOCATION = Path.Combine(ThisService.RootDirectory, "Backups")\n\n# Specify the maximum number of backups to keep.\nMAX_BACKUPS = 5\n\n# Extension of files that will be included in the backup.\n# Only specify config file extensions to keep file size small. Avoid log extensions.\n# For security do not backup executables (.exe, .dll or .so, etc). Use ".*" to backup all extensions in the specified folder.\nBACKUP_EXTENSIONS = Array[str]([".cfg", ".lua", ".properties", ".txt"])\n\n# Extensions that are excluded from the backup. (only used if you specify ".*" in BACKUP_EXTENSIONS)\nBACKUP_EXCLUDE_EXTENSIONS = Array[str]([".xxx"])\n\nbackupfilename = String.Format("{0}.zip", DateTime.Now.ToString("yyyyMMdd-HHmmss", CultureInfo.InvariantCulture))\nbackupfiles = List[str]()\n\n####################################################################################################################################### \n# COPY THIS BLOCK IF YOU WANT TO BACKUP MORE THAN 1 PATH ##############################################################################\n#######################################################################################################################################\n# Specify the folder to backup. Sub folders will be included in the backup.\n# All files with the extensions specified in BACKUP_EXTENSIONS will be added to the backup.\n# Set value to ThisService.RootDirectory if you want to backup all specified extensions in the game server\'s root folder and sub folders.\n# This example will backup the path RootDirectory\\garrysmod\\cfg\nFOLDER_TO_BACKUP = Path.Combine(ThisService.RootDirectory, "garrysmod", "cfg")\nbackupdir = DirectoryInfo(FOLDER_TO_BACKUP)\nallfiles = backupdir.GetFiles("*", SearchOption.AllDirectories)\nfor file in allfiles:\n  if not file.FullName.StartsWith(BACKUP_LOCATION) :\n    if Array.IndexOf(BACKUP_EXTENSIONS, file.Extension) != -1 or (Array.IndexOf(BACKUP_EXTENSIONS, ".*") != -1 and Array.IndexOf(BACKUP_EXCLUDE_EXTENSIONS, file.Extension) == -1 ) :\n      backupfiles.Add(file.FullName.Replace(ThisService.RootDirectory, String.Empty).TrimStart(Path.DirectorySeparatorChar))\n#######################################################################################################################################\n#######################################################################################################################################\nif backupfiles.Count == 0 :\n  raise Exception("Didn\\\'t find any files to backup.")\n\nScript.WriteToConsole(String.Format("Backing up {0} files to {1}...", backupfiles.Count, backupfilename))\n\nbackuplocation = DirectoryInfo(BACKUP_LOCATION)\nif not backuplocation.Exists :\n  backuplocation.Create()\n\ncompressiontools = CompressionTools()\ncompressiontools.Compress(ThisService.RootDirectory, backupfiles.ToArray(), Path.Combine(BACKUP_LOCATION, backupfilename))\nScript.WriteToConsole("The backup was created successfully.")\n\n# FTP SUPPORT\nScript.WriteToConsole("")\nScript.WriteToConsole("Uploading backup to FTP...")\n\n# CREATE PATH IN FTP\ntry :\n  request=WebRequest.Create(String.Format("ftp://{0}:{1}{2}", FTP_IP, FTP_PORT, FTP_BACKUP_PATH))\n  request.Credentials = NetworkCredential(FTP_USER, FTP_PASSWORD)\n  request.Method = WebRequestMethods.Ftp.MakeDirectory\n  request.EnableSsl = ENABLE_FTP_SSL\n  with request.GetResponse() as response:\n    Script.WriteToConsole(String.Format("Create Directory Complete, status: {0}", response.StatusDescription))\nexcept:\n  pass\n\n# UPLOAD FILE\nrequest = WebRequest.Create(String.Format("ftp://{0}:{1}{2}/{3}", FTP_IP, FTP_PORT, FTP_BACKUP_PATH, backupfilename))\nrequest.Credentials = NetworkCredential(FTP_USER, FTP_PASSWORD)\nrequest.Method = WebRequestMethods.Ftp.UploadFile\nrequest.EnableSsl = ENABLE_FTP_SSL\nwith File.OpenRead(Path.Combine(BACKUP_LOCATION, backupfilename)) as fileStream:\n  request.ContentLength = fileStream.Length\n  with request.GetRequestStream() as ftpStream:\n    fileStream.CopyTo(ftpStream)\n\n# MAKE LOCAL FILE 0 BYTES. IT\'S A PLACE HOLDER JUST SO WE KNOW WHAT\'S IN FTP\nFile.Create(Path.Combine(BACKUP_LOCATION, backupfilename)).Close()  \n\n# DELETE OLD BACKUPS\nScript.WriteToConsole("")\nbackupfiles=backuplocation.GetFiles("*.zip").OrderBy(lambda f: f.CreationTime).ToArray()\nfor i in range(0,backupfiles.Count - MAX_BACKUPS):\n  # DELETE FROM FTP\n  try :\n    request = WebRequest.Create(String.Format("ftp://{0}:{1}{2}/{3}", FTP_IP, FTP_PORT, FTP_BACKUP_PATH, backupfiles[i].Name))\n    request.Credentials = NetworkCredential(FTP_USER, FTP_PASSWORD)\n    request.Method = WebRequestMethods.Ftp.DeleteFile\n    request.EnableSsl = ENABLE_FTP_SSL\n    with request.GetResponse() as response:\n      Script.WriteToConsole(String.Format("Deleted previous FTP backup {0}, status: {1}", backupfiles[i].Name, response.StatusDescription))\n  except :\n    pass\n  # DELETE LOCAL FILE\n  backupfiles[i].Delete()\n  Script.WriteToConsole(String.Format ("Deleted previous local backup: {0}", backupfiles[i].Name))\n\nif Environment.OSVersion.Platform == PlatformID.Unix :\n  if Linux.IsRoot() :\n    Linux.SetDirectoryOwnerAutoDetect(BACKUP_LOCATION, True)\nelse :\n owner = Windows.GetOwner(ThisService.RootDirectory)\n Windows.SetDirectoryOwner(BACKUP_LOCATION, str(owner), True)\n\nScript.WriteToConsole("")\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operating System:")," Any",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Name:")," Backup Your Settings",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description:")," Restore your game server's settings from a backup.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Script Engine:")," IronPython",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Event:")," Custom Icon",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Sub admin access:")," Checked",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Reseller access:")," Checked",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"User access:")," Checked",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Server owner access:")," Checked",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Stop service before executing:")," heck if you want to stop the game server before restoring the backup.",(0,i.kt)("br",{parentName:"p"}),"\n","Script: Configure BACKUP_FTP_IP, BACKUP_FTP_PORT, BACKUP_FTP_USER, BACKUP_FTP_PASSWORD, BACKUP_FTP_PATH as needed."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you change the backup location remember to update your file system permissions.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import clr;\nclr.AddReference("TCAdmin.SDK");\n\nfrom System.IO import Path\nfrom System import String, Environment, PlatformID\nfrom TCAdmin.SDK.Misc import CompressionTools, Linux, Windows\n\n# FTP support\nfrom System.Net import WebRequest, WebRequestMethods, NetworkCredential\nfrom System.IO import StreamReader, File, FileStream\nfrom System.Text import Encoding\n\n# FTP Connection\nFTP_IP = "BACKUP_FTP_IP"\nFTP_PORT = BACKUP_FTP_PORT\nFTP_USER = "BACKUP_FTP_USERNAME"\nFTP_PASSWORD = "BACKUP_FTP_PASSWORD"\n# FTP Path should be something like /Backups/{0}\nFTP_BACKUP_PATH = String.Format("/BACKUP_FTP_PATH/{0}", ThisService.ServiceId)\n# Enable support for FTPS\nENABLE_FTP_SSL = False\n\n# DOWNLOAD FILE\nScript.WriteToConsole(String.Format("Downloading backup {0}...", Path.GetFileNameWithoutExtension(ThisService.Variables["BackupFile"])))\nrequest = WebRequest.Create(String.Format("ftp://{0}:{1}{2}/{3}", FTP_IP, FTP_PORT, FTP_BACKUP_PATH, Path.GetFileName(ThisService.Variables["BackupFile"])))\nrequest.Credentials = NetworkCredential(FTP_USER, FTP_PASSWORD)\nrequest.Method = WebRequestMethods.Ftp.DownloadFile\nrequest.EnableSsl = ENABLE_FTP_SSL\nwith request.GetResponse().GetResponseStream() as ftpStream :\n  with File.Create(ThisService.Variables["BackupFile"]) as fileStream:\n    ftpStream.CopyTo(fileStream)\n\nScript.WriteToConsole(String.Format("Restoring backup {0}...", Path.GetFileNameWithoutExtension(ThisService.Variables["BackupFile"])))\n\ncompressiontools = CompressionTools()\ncompressiontools.Decompress(ThisService.Variables["BackupFile"], ThisService.RootDirectory)\n\n# MAKE LOCAL FILE 0 BYTES. IT\'S A PLACE HOLDER JUST SO WE KNOW WHAT\'S IN FTP\nFile.Create(ThisService.Variables["BackupFile"]).Close()  \n\nif Environment.OSVersion.Platform == PlatformID.Unix :\n  if Linux.IsRoot() :\n    Linux.SetDirectoryOwnerAutoDetect(ThisService.RootDirectory, True);\nelse:\n owner = Windows.GetOwner(ThisService.RootDirectory);\n Windows.SetDirectoryOwner(ThisService.RootDirectory, str(owner), True);\n\nScript.WriteToConsole("The backup was restored successfully.")\n                                 \nScript.WriteToConsole("")\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operating System:")," Any",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Name:")," Keep backups before reinstall",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description:")," Moves backups outside of root.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Script Engine:")," IronPython",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Event:")," Before reinstall\nIgnore execution errors: Unchecked (if it fails you don't want to lose the backups) "),(0,i.kt)("p",null,"Script: Configure BACKUP_LOCATION"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import clr;\n\nfrom System import String\nfrom System.IO import Path, Directory\n\n# Specify where backups are saved.\n# Default location is a folder named Backups in the game server\'s root.\nBACKUP_LOCATION = Path.Combine(ThisService.RootDirectory, "Backups")\n\ntemp_location = Path.Combine(ThisService.RootDirectory, "..", String.Format("_{0}_Backups", ThisService.ServiceId))\nif Directory.Exists(BACKUP_LOCATION) :\n  Directory.Move(BACKUP_LOCATION, temp_location)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operating System:")," Any",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Name:")," Restore backups after install",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description:")," Moves backups back into root.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Script Engine:")," IronPython",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Event:")," After reinstall",(0,i.kt)("br",{parentName:"p"}),"\n","Script: Configure BACKUP_LOCATION"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import clr;\n\nfrom System import String\nfrom System.IO import Path, Directory\n\n# Specify where backups are saved.\n# Default location is a folder named Backups in the game server\'s root.\nBACKUP_LOCATION = Path.Combine(ThisService.RootDirectory, "Backups")\n\ntemp_location = Path.Combine(ThisService.RootDirectory, "..", String.Format("_{0}_Backups", ThisService.ServiceId))\nif Directory.Exists(temp_location) :\n  Directory.Move(temp_location, BACKUP_LOCATION)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operating System:")," Any",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Name:")," Deletes backups",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Description:")," Delete backups when service is deleted",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Script Engine:")," IronPython",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Event:")," Before delete",(0,i.kt)("br",{parentName:"p"}),"\n","Script: Configure BACKUP_LOCATION, BACKUP_FTP_IP, BACKUP_FTP_PORT, BACKUP_FTP_USER, BACKUP_FTP_PASSWORD, BACKUP_FTP_PATH as needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import clr;\nclr.AddReference("TCAdmin.SDK");\n \nimport System;\nfrom System import Array, String, DateTime, Exception, Environment, PlatformID\nfrom System.IO import Path, DirectoryInfo, SearchOption\nfrom System.Collections.Generic import List\nfrom System.Globalization import CultureInfo\nfrom TCAdmin.SDK.Misc import CompressionTools, Linux, Windows\n \nclr.AddReference("System.Core")\nclr.ImportExtensions(System.Linq)\n \n# FTP support\nfrom System.Net import WebRequest, WebRequestMethods, NetworkCredential\nfrom System.IO import StreamReader, File\nfrom System.Text import Encoding\n \n# FTP Connection\nFTP_IP = "BACKUP_FTP_IP"\nFTP_PORT = BACKUP_FTP_PORT\nFTP_USER = "BACKUP_FTP_USERNAME"\nFTP_PASSWORD = "BACKUP_FTP_PASSWORD"\n# FTP Path should be something like /Backups/{0}\nFTP_BACKUP_PATH = String.Format("/BACKUP_FTP_PATH/{0}", ThisService.ServiceId)\n# Enable support for FTPS\nENABLE_FTP_SSL = False\n \n# Specify where backups are saved.\n# Default location is a folder named Backups in the game server\'s root.\nBACKUP_LOCATION = Path.Combine(ThisService.RootDirectory, "Backups")\n \n# FTP SUPPORT\nScript.WriteToConsole("")\nScript.WriteToConsole("Deleting files from FTP...")\n \nbackuplocation = DirectoryInfo(BACKUP_LOCATION)\n \n# DELETE OLD BACKUPS\nScript.WriteToConsole("")\nbackupfiles=backuplocation.GetFiles("*.zip").OrderBy(lambda f: f.CreationTime).ToArray()\nfor i in range(0, backupfiles.Count):\n  # DELETE FROM FTP\n  try :\n    request = WebRequest.Create(String.Format("ftp://{0}:{1}{2}/{3}", FTP_IP, FTP_PORT, FTP_BACKUP_PATH, backupfiles[i].Name))\n    request.Credentials = NetworkCredential(FTP_USER, FTP_PASSWORD)\n    request.Method = WebRequestMethods.Ftp.DeleteFile\n    request.EnableSsl = ENABLE_FTP_SSL\n    with request.GetResponse() as response:\n      Script.WriteToConsole(String.Format("Deleted previous FTP backup {0}, status: {1}", backupfiles[i].Name, response.StatusDescription))\n  except :\n    pass\n  # DELETE LOCAL FILE\n  backupfiles[i].Delete()\n  Script.WriteToConsole(String.Format ("Deleted previous local backup: {0}", backupfiles[i].Name))\n \n# DELETE PATH IN FTP\ntry :\n  request=WebRequest.Create(String.Format("ftp://{0}:{1}{2}", FTP_IP, FTP_PORT, FTP_BACKUP_PATH))\n  request.Credentials = NetworkCredential(FTP_USER, FTP_PASSWORD)\n  request.Method = WebRequestMethods.Ftp.RemoveDirectory\n  request.EnableSsl = ENABLE_FTP_SSL\n  with request.GetResponse() as response:\n    Script.WriteToConsole(String.Format("Create Directory Complete, status: {0}", response.StatusDescription))\nexcept:\n  pass\n')))}u.isMDXComponent=!0}}]);