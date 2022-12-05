"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7554],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),o=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),o=t(7294),r=t(6010),l=t(2389),i=t(7392),s=t(7094),p=t(2466);const d="tabList__CuJ",c="tabItem_LNqP";function u(e){var n,t;const{lazy:l,block:u,defaultValue:m,values:g,groupId:h,className:k}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,i.l)(b,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(n=null!=m?m:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:v[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[T,_]=(0,o.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==T&&b.some((n=>n.value===e))&&_(e)}const j=e=>{const n=e.currentTarget,t=x.indexOf(n),a=b[t].value;a!==T&&(C(n),_(a),null!=h&&w(h,String(a)))},O=e=>{var n;let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{var a;const n=x.indexOf(e.currentTarget)+1;t=null!=(a=x[n])?a:x[0];break}case"ArrowLeft":{var o;const n=x.indexOf(e.currentTarget)-1;t=null!=(o=x[n])?o:x[x.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},k)},b.map((e=>{let{value:n,label:t,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>x.push(e),onKeyDown:O,onClick:j},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),l?(0,o.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function m(e){const n=(0,l.Z)();return o.createElement(u,(0,a.Z)({key:String(n)},e))}},8483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=t(7462),o=(t(7294),t(3905)),r=t(5488),l=t(5162);const i={title:"Node.js",sidebar_position:3},s="Deploying Node.js Apps with DOM Cloud",p={unversionedId:"deploying/node",id:"deploying/node",title:"Node.js",description:"Node.js is a highly-efficient JavaScript runtime environment that executes JavaScript code as a server.",source:"@site/docs/deploying/node.md",sourceDirName:"deploying",slug:"/deploying/node",permalink:"/docs/deploying/node",draft:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/deploying/node.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Node.js",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"PHP",permalink:"/docs/deploying/php"},next:{title:"Python",permalink:"/docs/deploying/python"}},d={},c=[{value:"Recipes",id:"recipes",level:2},{value:"Node environment",id:"node-environment",level:2},{value:"NginX Setup",id:"nginx-setup",level:2},{value:"Production vs Development Mode",id:"production-vs-development-mode",level:3},{value:"WebSocket/WebRTC usage",id:"websocketwebrtc-usage",level:3},{value:"Package Install",id:"package-install",level:2},{value:"Clear packager cache",id:"clear-packager-cache",level:3},{value:"Node.js Error Logs",id:"nodejs-error-logs",level:2},{value:"Restart Node.js",id:"restart-nodejs",level:2}],u={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-nodejs-apps-with-dom-cloud"},"Deploying Node.js Apps with DOM Cloud"),(0,o.kt)("p",null,"Node.js is a highly-efficient JavaScript runtime environment that executes JavaScript code as a server.\nNode.js is served using Phusion Passenger inside NginX."),(0,o.kt)("p",null,"Popular Node.js recipes include ",(0,o.kt)("inlineCode",{parentName:"p"},"Express"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Strapi"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Next.js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Nuxt.js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SvelteKit"),". Please read our ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/runner"},"Runner's Guide")," first if you haven't."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This guide only covers running a Node.js server, not about statically rendered pages like from ",(0,o.kt)("inlineCode",{parentName:"p"},"Create React App"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Webpack"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Parcel")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Gatsby"),".\nIf your application is intented to be as a static site, you should read our ",(0,o.kt)("a",{parentName:"p",href:"/docs/deploying/static-site"},"Static Site Guide")," instead.")),(0,o.kt)("h2",{id:"recipes"},"Recipes"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"express",label:"Express",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"source: clear\nfeatures: ['node lts']\nroot: public_html/public\nnginx:\n  passenger:\n    enabled: on\n    app_start_command: env PORT=$PORT npm start\ncommands:\n- npx express-generator .\n- npm i\n")),(0,o.kt)("p",null,'A simple express website that outputs "Hello Express!"')),(0,o.kt)(l.Z,{value:"strapi",label:"Strapi",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"source: clear\nroot: public_html/public\nfeatures:\n- ssl\n- node lts\nnginx:\n  passenger:\n    enabled: 'on'\n    app_env: development\n    app_start_command: env PORT=$PORT yarn develop\n  locations:\n    - match: /admin/\n      alias: public_html/build/\ncommands:\n- yarn config set prefix ~/.local\n- yarn global add create-strapi-app\n- create-strapi-app . --quickstart --no-run\n- echo JWT_SECRET=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` > .env\n- echo APP_KEYS=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` >> .env\n- echo ADMIN_JWT_SECRET=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` >> .env\n- echo API_TOKEN_SALT=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` >> .env\n- echo STRAPI_ADMIN_BACKEND_URL=//${DOMAIN} >> .env\n- STRAPI_ADMIN_BACKEND_URL=//${DOMAIN} yarn build\n")),(0,o.kt)("p",null,"A boostrapped Strapi CMS with SQLite database, installed using yarn.")),(0,o.kt)(l.Z,{value:"next",label:"Next.js",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"source: clear\nfeatures:\n  - 'node lts'\nroot: public_html/public\nnginx:\n  passenger:\n    enabled: on\n    app_env: development\n    app_start_command: env PORT=$PORT yarn dev\ncommands:\n  - yarn create next-app .\n")),(0,o.kt)("p",null,"A bootstrapped Next.js website run in development mode."))),(0,o.kt)("p",null,"Let's extract those recipes meaning individually."),(0,o.kt)("h2",{id:"node-environment"},"Node environment"),(0,o.kt)("p",null,"The default Node version is ",(0,o.kt)("inlineCode",{parentName:"p"},"14.x"),", which is the default provided from the OS."),(0,o.kt)("p",null,"To change Node version used to the latest (LTS) one, put this in runner:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n- node lts\n")),(0,o.kt)("p",null,"It will install node in userland and all binaries will use it instead of the default one."),(0,o.kt)("p",null,"You can also install other or specific version of Node.js e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"node latest"),",  ",(0,o.kt)("inlineCode",{parentName:"p"},"node beta"),",  ",(0,o.kt)("inlineCode",{parentName:"p"},"node 16.3.2"),". This action will install Node.js in userland with the help of ",(0,o.kt)("a",{parentName:"p",href:"https://webinstall.dev/node/"},"webi script")," and ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest/docs/api/corepack.html"},"enabling Corepack")," so package managers (npm & yarn & pnpm) can be used alongside userland node."),(0,o.kt)("h2",{id:"nginx-setup"},"NginX Setup"),(0,o.kt)("p",null,"Binding Node.js through NginX is done by Passenger. To make the binding work, you need to make sure that your app can open port number using given environment variable (.e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"PORT"),"), and you point the root of your public file to a ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"root: public_html/public\nnginx:\n  passenger:\n    enabled: on\n    app_start_command: env PORT=$PORT npm start\n")),(0,o.kt)("p",null,"If your setup is complex (e.g. using multiple websites in a domain) you can tell which exactly the ",(0,o.kt)("inlineCode",{parentName:"p"},"app_root")," directory your app is serving from. Just make sure your root directory is outside of your app directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"root: public_html/client/dist\nnginx:\n  locations:\n  - match: /api\n    passenger:\n      enabled: on\n      app_start_command: env PORT=$PORT npm start\n      app_root: public_html/server\n")),(0,o.kt)("p",null,"Some frameworks like ",(0,o.kt)("inlineCode",{parentName:"p"},"Next.js")," likes to serve a hidden static directory e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/_next"),". We can reduce server load by creating an extra ",(0,o.kt)("inlineCode",{parentName:"p"},"/_next")," location so those files is directly handled (and properly cached) by NginX."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  locations:\n    # optimizing static cache\n    - match: /_next/\n      alias: public_html/.next/\n")),(0,o.kt)("h3",{id:"production-vs-development-mode"},"Production vs Development Mode"),(0,o.kt)("p",null,"By default, Node.js is run in production mode. To run in development mode, you need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"app_env")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"development"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  passenger:\n    enabled: on\n    app_env: development\n    app_start_command: env PORT=$PORT npm start\n")),(0,o.kt)("p",null,"Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"app_env")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"development")," will set ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," to development. You can also enable development server too into the ",(0,o.kt)("inlineCode",{parentName:"p"},"app_start_command")," like above, it will run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),". This setup also makes HMR (Hot Module Replacement) work out of the box."),(0,o.kt)("h3",{id:"websocketwebrtc-usage"},"WebSocket/WebRTC usage"),(0,o.kt)("p",null,"If your app is using WebSocket or WebRTC for persistent connection, it may creates confusion when passenger runs your app in multiple processes. You can set ",(0,o.kt)("inlineCode",{parentName:"p"},"sticky_sessions")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," to solve this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"root: public_html/public\nnginx:\n  passenger:\n    enabled: on\n    app_start_command: env PORT=$PORT npm start\n    sticky_sessions: on\n")),(0,o.kt)("p",null,"The sticky sessions works by writing a cookie to identify the process where it's initiated. You can read more at ",(0,o.kt)("a",{parentName:"p",href:"https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_sticky_sessions"},"their documentation source"),"."),(0,o.kt)("h2",{id:"package-install"},"Package Install"),(0,o.kt)("p",null,"Package installs can be done just like usual ",(0,o.kt)("inlineCode",{parentName:"p"},"npm/yarn install")," command. For a little advice, using these extra options is recommended in production:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm ci\nyarn install --immutable\n")),(0,o.kt)("h3",{id:"clear-packager-cache"},"Clear packager cache"),(0,o.kt)("p",null,"In meantime if your development has stable enough, you may want to clear the packager cache to save space."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm cache clean --force\nyarn cache clean --force\n")),(0,o.kt)("h2",{id:"nodejs-error-logs"},"Node.js Error Logs"),(0,o.kt)("p",null,"When your Node.js crashed during startup, a helpful error will be displayed in the browser. This aids you to diagnose if some configuration is wrong."),(0,o.kt)("p",null,"(TODO) Unfortunately, we haven't found a way to capture Node.js error logs yet. You can (should?) do error logging to files using ",(0,o.kt)("a",{parentName:"p",href:"https://melvingeorge.me/blog/save-logs-to-files-nodejs"},"builtin Node.js Console API")," or use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/winston"},"Winston"),"."),(0,o.kt)("h2",{id:"restart-nodejs"},"Restart Node.js"),(0,o.kt)("p",null,"To restart Node.js (e.g. after modifying the script). You can call the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"passenger-config restart-app /\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," means to restart all apps that you own. If you found warnings like ",(0,o.kt)("inlineCode",{parentName:"p"},"Permission denied")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/phusion/passenger/issues/2367"},"it's a harmless warning"),"."))}m.isMDXComponent=!0}}]);