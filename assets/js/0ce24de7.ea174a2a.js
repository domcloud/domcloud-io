"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7554],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),r=t(7294),o=t(6010),l=t(2389),s=t(7392),i=t(7094),p=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,t;const{lazy:l,block:d,defaultValue:m,values:g,groupId:h,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,s.l)(y,((e,n)=>e.value===n.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(n=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?n:f[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[T,x]=(0,r.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==T&&y.some((n=>n.value===e))&&x(e)}const O=e=>{const n=e.currentTarget,t=j.indexOf(n),a=y[t].value;a!==T&&(P(n),x(a),null!=h&&w(h,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=j.indexOf(e.currentTarget)+1;t=null!=(a=j[n])?a:j[0];break}case"ArrowLeft":{var r;const n=j.indexOf(e.currentTarget)-1;t=null!=(r=j[n])?r:j[j.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},y.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>j.push(e),onKeyDown:C,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function m(e){const n=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},8483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),o=t(5488),l=t(5162);const s={title:"Node.js",sidebar_position:3},i="Deploying Node.js Apps with DOM Cloud",p={unversionedId:"deploying/node",id:"deploying/node",title:"Node.js",description:"Node.js is a highly-efficient JavaScript runtime environment that executes JavaScript code as a server.",source:"@site/docs/deploying/node.md",sourceDirName:"deploying",slug:"/deploying/node",permalink:"/docs/deploying/node",draft:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/deploying/node.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Node.js",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"PHP",permalink:"/docs/deploying/php"},next:{title:"Python",permalink:"/docs/deploying/python"}},u={},c=[{value:"Recipes",id:"recipes",level:2},{value:"Node environment",id:"node-environment",level:2},{value:"NginX Setup",id:"nginx-setup",level:2},{value:"WebSocket/WebRTC usage",id:"websocketwebrtc-usage",level:3},{value:"Package Install",id:"package-install",level:2},{value:"Clear packager cache",id:"clear-packager-cache",level:3},{value:"Node.js Error Logs",id:"nodejs-error-logs",level:2},{value:"Restart Node.js",id:"restart-nodejs",level:2}],d={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-nodejs-apps-with-dom-cloud"},"Deploying Node.js Apps with DOM Cloud"),(0,r.kt)("p",null,"Node.js is a highly-efficient JavaScript runtime environment that executes JavaScript code as a server.\nNode.js is served using Phusion Passenger inside NginX."),(0,r.kt)("p",null,"Popular Node.js recipes include ",(0,r.kt)("inlineCode",{parentName:"p"},"Express"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Vite"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Next.js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Strapi"),". Please read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/runner"},"Runner's Guide")," first if you haven't."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide only covers running a Node.js server, not about statically rendered pages like from ",(0,r.kt)("inlineCode",{parentName:"p"},"Create React App"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Webpack"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Parcel")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Gatsby"),".\nIf your application is intented to be as a static site, you should read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/deploying/static-site"},"Static Site Guide")," instead.")),(0,r.kt)("h2",{id:"recipes"},"Recipes"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"express",label:"Express",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: clear\nfeatures: ['node lts']\nnginx:\n  passenger:\n    enabled: on\n    app_start_command: env PORT=$PORT npm start\ncommands:\n- npx express-generator .\n- \n")),(0,r.kt)("p",null,'A simple PHP that outputs "Hello, World!"')),(0,r.kt)(l.Z,{value:"vite",label:"Vite",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: clear\nfeatures: ['node lts']\nnginx:\n  passenger:\n    enabled: on\n    app_start_command: env PORT=$PORT npm start\ncommands:\n- npx express-generator .\n")),(0,r.kt)("p",null,'A simple PHP that outputs "Hello, World!"')),(0,r.kt)(l.Z,{value:"next",label:"Next.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: clear\nfeatures: ['node lts']\nnginx:\n  fastcgi: on\ncommands:\n- echo \"Hello, World!\" > index.php\n")),(0,r.kt)("p",null,'A simple PHP that outputs "Hello, World!"')),(0,r.kt)(l.Z,{value:"strapi",label:"Strapi",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source: clear\nfeatures: ['node lts']\nnginx:\n  fastcgi: on\ncommands:\n- echo \"Hello, World!\" > index.php\n")),(0,r.kt)("p",null,'A simple PHP that outputs "Hello, World!"'))),(0,r.kt)("p",null,"Let's extract those recipes meaning individually."),(0,r.kt)("h2",{id:"node-environment"},"Node environment"),(0,r.kt)("p",null,"The default Node version is ",(0,r.kt)("inlineCode",{parentName:"p"},"14.x"),", which is the default provided from the OS."),(0,r.kt)("p",null,"To change Node version used to the latest (LTS) one, put this in runner:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n- node lts\n")),(0,r.kt)("p",null,"You can also install other or specific version of Node.js e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"node latest"),",  ",(0,r.kt)("inlineCode",{parentName:"p"},"node beta"),",  ",(0,r.kt)("inlineCode",{parentName:"p"},"node 16.3.2"),". This action will install Node.js in userland with the help of ",(0,r.kt)("a",{parentName:"p",href:"https://webinstall.dev/node/"},"webi script")," and ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest/docs/api/corepack.html"},"enabling Corepack")," so package managers (npm & yarn & pnpm) can be used alongside userland node."),(0,r.kt)("h2",{id:"nginx-setup"},"NginX Setup"),(0,r.kt)("p",null,"Binding Node.js through NginX is done by Passenger. To make the binding work, you need to make sure that your app can open port number using given environment variable (.e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"PORT"),"), and you point the root of your public file to a ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"root: public_html/public\nnginx:\n  passenger:\n    enabled: on\n    app_start_command: env PORT=$PORT npm start\n")),(0,r.kt)("p",null,"If your setup is complex (e.g. using multiple websites in a domain) you can tell which exactly the ",(0,r.kt)("inlineCode",{parentName:"p"},"app_root")," directory your app is serving from. Just make sure your root directory is outside of your app directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"root: public_html/client/dist\nnginx:\n  locations: \n  - match: /api\n    passenger:\n      enabled: on\n      app_start_command: env PORT=$PORT npm start\n      app_root: public_html/server\n")),(0,r.kt)("p",null,"Some frameworks like ",(0,r.kt)("inlineCode",{parentName:"p"},"Next.js")," likes to serve a hidden static directory e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/_next"),". We can reduce server load by creating an extra ",(0,r.kt)("inlineCode",{parentName:"p"},"/_next")," location so those files is directly handled (and properly cached) by NginX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"")),(0,r.kt)("h3",{id:"websocketwebrtc-usage"},"WebSocket/WebRTC usage"),(0,r.kt)("p",null,"If your app is using WebSocket or WebRTC for persistent connection, it may creates confusion when passenger runs your app in multiple processes. You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"sticky_sessions")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," to solve this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"root: public_html/public\nnginx:\n  passenger:\n    enabled: on\n    app_start_command: env PORT=$PORT npm start\n    sticky_sessions: on\n")),(0,r.kt)("p",null,"The sticky sessions works by writing a cookie to identify the process where it's initiated. You can read more at ",(0,r.kt)("a",{parentName:"p",href:"https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_sticky_sessions"},"their documentation source"),"."),(0,r.kt)("h2",{id:"package-install"},"Package Install"),(0,r.kt)("p",null,"Package installs can be done just like usual ",(0,r.kt)("inlineCode",{parentName:"p"},"npm/yarn install")," command. For a little advice, using these extra options is recommended in production:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm ci\nyarn install --immutable\n")),(0,r.kt)("h3",{id:"clear-packager-cache"},"Clear packager cache"),(0,r.kt)("p",null,"In meantime if your development has stable enough, you may want to clear the packager cache to save space."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm cache clean --force\nyarn cache clean --force\n")),(0,r.kt)("h2",{id:"nodejs-error-logs"},"Node.js Error Logs"),(0,r.kt)("p",null,"When your Node.js crashed during startup, a helpful error will be displayed in the browser. This aids you to diagnose if some configuration is wrong."),(0,r.kt)("p",null,"(TODO) Unfortunately, we haven't found a way to capture Node.js error logs yet. You can (should?) do error logging to files using ",(0,r.kt)("a",{parentName:"p",href:"https://melvingeorge.me/blog/save-logs-to-files-nodejs"},"builtin Node.js Console API")," or use ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/winston"},"Winston"),"."),(0,r.kt)("h2",{id:"restart-nodejs"},"Restart Node.js"),(0,r.kt)("p",null,"To restart Node.js (e.g. after modifying the script). You can call the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"passenger-config restart-app /\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," means to restart all apps that you own. If you found warnings like ",(0,r.kt)("inlineCode",{parentName:"p"},"Permission denied")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/phusion/passenger/issues/2367"},"it's a harmless warning"),"."))}m.isMDXComponent=!0}}]);