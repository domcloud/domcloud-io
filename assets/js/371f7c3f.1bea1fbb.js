"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={layout:"docs",title:"Troubleshooting",sidebar_position:4},a="Tips and Troubleshooting",l={unversionedId:"integration/troubleshoot",id:"integration/troubleshoot",title:"Troubleshooting",description:"Common Tips and Good Practices",source:"@site/docs/integration/troubleshoot.md",sourceDirName:"integration",slug:"/integration/troubleshoot",permalink:"/docs/integration/troubleshoot",draft:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/integration/troubleshoot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{layout:"docs",title:"Troubleshooting",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Visual Studio Code Integration",permalink:"/docs/integration/vscode"}},s={},p=[{value:"Common Tips and Good Practices",id:"common-tips-and-good-practices",level:2},{value:"Portal",id:"portal",level:4},{value:"NGINX",id:"nginx",level:4},{value:"PHP-FPM",id:"php-fpm",level:4},{value:"Python",id:"python",level:4},{value:"Passenger Phusion",id:"passenger-phusion",level:4},{value:"Common Errors Troubleshooting",id:"common-errors-troubleshooting",level:2},{value:"Website down <code>ERR_NAME_NOT_RESOLVED</code>",id:"website-down-err_name_not_resolved",level:4},{value:"HTTPS Error <code>ERR_CERT_AUTHORITY_INVALID</code>",id:"https-error-err_cert_authority_invalid",level:4},{value:"NGINX Error <code>403 Forbidden</code> page",id:"nginx-error-403-forbidden-page",level:4},{value:"NGINX Error page <code>404 Found</code>",id:"nginx-error-page-404-found",level:4},{value:"Blank page <code>HTTP Error 500</code>",id:"blank-page-http-error-500",level:4},{value:"NGINX Error <code>502 Bad Gateway</code> page",id:"nginx-error-502-bad-gateway-page",level:4},{value:"&quot;Connection Refused&quot; from server HTTP request",id:"connection-refused-from-server-http-request",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tips-and-troubleshooting"},"Tips and Troubleshooting"),(0,i.kt)("h2",{id:"common-tips-and-good-practices"},"Common Tips and Good Practices"),(0,i.kt)("h4",{id:"portal"},"Portal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The runner script is available as the alternative way to manage things in Virtualmin, even for things that didn't available there, like configuring NGINX or Firewall."),(0,i.kt)("li",{parentName:"ul"},"The runner script is capable to be triggered with GitHub Actions CI, useful for auto-syncing host code with GitHub repo."),(0,i.kt)("li",{parentName:"ul"},"We don't serve email transactions, however you can use third-party")),(0,i.kt)("h4",{id:"nginx"},"NGINX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"ssl: enforce")," to redirect all insecure traffic to secure one."),(0,i.kt)("li",{parentName:"ul"},"NGINX alone is capable of creating ",(0,i.kt)("inlineCode",{parentName:"li"},"E-Tag")," cache to speed up static files delivery."),(0,i.kt)("li",{parentName:"ul"},"If you use Cloudflare, and you happen to get infinite redirection, please turn off the SSL proxy in Cloudflare."),(0,i.kt)("li",{parentName:"ul"},"We have built-in bursted rate-limit of 50 requests for 3 requests/seconds in each IP address.")),(0,i.kt)("h4",{id:"php-fpm"},"PHP-FPM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can choose PHP version either from Virtualmin or runner script."),(0,i.kt)("li",{parentName:"ul"},"To configure ",(0,i.kt)("inlineCode",{parentName:"li"},"php.ini"),", create ",(0,i.kt)("inlineCode",{parentName:"li"},".user.ini")," file in the public root path."),(0,i.kt)("li",{parentName:"ul"},"Default upload size is ",(0,i.kt)("inlineCode",{parentName:"li"},"8MB"),", increase it by set ",(0,i.kt)("inlineCode",{parentName:"li"},"upload_max_filesize")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"post_max_size")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"php.ini"),"."),(0,i.kt)("li",{parentName:"ul"},"Any fatal error in PHP will result in blank ",(0,i.kt)("inlineCode",{parentName:"li"},"500")," error. You can enable error reporting by set ",(0,i.kt)("inlineCode",{parentName:"li"},"display_errors")," to 1 in ",(0,i.kt)("inlineCode",{parentName:"li"},"php.ini"),", but this is not recommended."),(0,i.kt)("li",{parentName:"ul"},"When installing depedencies with composer, use ",(0,i.kt)("inlineCode",{parentName:"li"},"--no-cache")," to avoid wasted storage by caches.")),(0,i.kt)("h4",{id:"python"},"Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"pip")," is referred as latest Python 3. We have no support of Python 2."),(0,i.kt)("li",{parentName:"ul"},"When installing depedencies with pip, always use ",(0,i.kt)("inlineCode",{parentName:"li"},"--user")," otherwise you will get install error because of sudo requirements.")),(0,i.kt)("h4",{id:"passenger-phusion"},"Passenger Phusion"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Passenger Phusion Node.js looks for ",(0,i.kt)("inlineCode",{parentName:"li"},"app.js"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"passenger_wsgi.py")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"config.ru")," in parent of root path to start the app."),(0,i.kt)("li",{parentName:"ul"},"The GLS feature from Passenger Phusion can start any app, even binary files, provided you pass ",(0,i.kt)("inlineCode",{parentName:"li"},"$PORT")," correctly."),(0,i.kt)("li",{parentName:"ul"},"Passenger Phusion Node.js works with CJS. If your project use ESM you need to use GLS."),(0,i.kt)("li",{parentName:"ul"},"Passenger Phusion will be activated if ",(0,i.kt)("inlineCode",{parentName:"li"},"passenger_enabled on")," and no files present in destination path."),(0,i.kt)("li",{parentName:"ul"},"You can tell if Phusion is serving a file by checking ",(0,i.kt)("inlineCode",{parentName:"li"},"server: nginx + Phusion Passenger")," HTTP header."),(0,i.kt)("li",{parentName:"ul"},"Static files is often better to be handled within NGINX alone to make use of ",(0,i.kt)("inlineCode",{parentName:"li"},"E-Tag")," cache."),(0,i.kt)("li",{parentName:"ul"},"You can add environment variables by writing in ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.env")," (and use commands like this: ",(0,i.kt)("inlineCode",{parentName:"li"},"export NODE_ENV=production"),")")),(0,i.kt)("h2",{id:"common-errors-troubleshooting"},"Common Errors Troubleshooting"),(0,i.kt)("p",null,"For PHP, Error logs is available in error logs provided by Virtualmin."),(0,i.kt)("p",null,"For Non-PHP (via Phusion Passenger), error logs is not available but if your app is failed to start up, a nice detailed explanation for the crash is available."),(0,i.kt)("h4",{id:"website-down-err_name_not_resolved"},"Website down ",(0,i.kt)("inlineCode",{parentName:"h4"},"ERR_NAME_NOT_RESOLVED")),(0,i.kt)("p",null,"This means that there is a problem with the DNS system. If you are using DOM Cloud make sure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Has fulfilled the requirements / required documents (including email confirmation) from the Registrar."),(0,i.kt)("li",{parentName:"ul"},"Already pointing the Name Server correctly (scroll up if not already)."),(0,i.kt)("li",{parentName:"ul"},"The DNS feature for the server is turned on (set up via webmin)."),(0,i.kt)("li",{parentName:"ul"},"The A / CNAME records for the intended domain are correct.")),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@domcloud.id"},"contact us")," if it is still not correct."),(0,i.kt)("h4",{id:"https-error-err_cert_authority_invalid"},"HTTPS Error ",(0,i.kt)("inlineCode",{parentName:"h4"},"ERR_CERT_AUTHORITY_INVALID")),(0,i.kt)("p",null,"This means that your SSL certificate has not been set or has expired. To update it please ",(0,i.kt)("a",{parentName:"p",href:"#how-to-renew-ssl"},"scroll up"),"."),(0,i.kt)("p",null,"If you encounter ",(0,i.kt)("inlineCode",{parentName:"p"},"ERR_CERTIFICATE_TRANSPARENCY_REQUIRED")," after an SSL update, you don't need to panic because of an error due to cache and it will disappear in a few minutes."),(0,i.kt)("h4",{id:"nginx-error-403-forbidden-page"},"NGINX Error ",(0,i.kt)("inlineCode",{parentName:"h4"},"403 Forbidden")," page"),(0,i.kt)("p",null,"This means that NGINX cannot access the file due to a linux mode setting error in the file. In order to fix this easily you can run this on SSH:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bash\nchmod -R 750 ~/")),(0,i.kt)("h4",{id:"nginx-error-page-404-found"},"NGINX Error page ",(0,i.kt)("inlineCode",{parentName:"h4"},"404 Found")),(0,i.kt)("p",null,"There are 2 possibilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If this happens for all page URLs, chances are you forgot to set NGINX to ",(0,i.kt)("a",{parentName:"li",href:"#how-to-install-php-framework"},"setup index.php")," or ",(0,i.kt)("a",{parentName:"li",href:"#passenger"},"turn on passenger mode")," for non-PHP."),(0,i.kt)("li",{parentName:"ul"},"If this happens for only a few files, there may be errors such as typo in the URL, wrong Base URL or not paying attention to the file name size.")),(0,i.kt)("h4",{id:"blank-page-http-error-500"},"Blank page ",(0,i.kt)("inlineCode",{parentName:"h4"},"HTTP Error 500")),(0,i.kt)("p",null,"This means that there is an error in your PHP, but unlike XAMPP, PHP by default will not raise an error on the website."),(0,i.kt)("p",null,"You have 2 options for viewing the error:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Via Webmin > Logs and Reports > NGINX Error Log"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#fastcgi"},"Set in .user.ini"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"display_errors = On"))),(0,i.kt)("h4",{id:"nginx-error-502-bad-gateway-page"},"NGINX Error ",(0,i.kt)("inlineCode",{parentName:"h4"},"502 Bad Gateway")," page"),(0,i.kt)("p",null,"It is possible that the file you uploaded is too large or the PHP script you are running is taking too long. You can fix this via ",(0,i.kt)("a",{parentName:"p",href:"#fastcgi"},".user.ini")," file."),(0,i.kt)("h4",{id:"connection-refused-from-server-http-request"},'"Connection Refused" from server HTTP request'),(0,i.kt)("p",null,"You need to turn off the firewall."))}d.isMDXComponent=!0}}]);