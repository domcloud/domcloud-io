/*! For license information please see a2941dae.d379b6da.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3458],{4178:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var i=o(5893),s=o(1151);const n={title:"Our Philosophy",sidebar_position:3},r="Our Philosophy",a={unversionedId:"intro/philosophy",id:"intro/philosophy",title:"Our Philosophy",description:"We want students, teachers, developers with their hobby time make use of our platform for a better experience with putting things online. Personally, the reason I created this because I once struggled to find a host service that's good enough for a university project.",source:"@site/docs/intro/philosophy.mdx",sourceDirName:"intro",slug:"/intro/philosophy",permalink:"/docs/intro/philosophy",draft:!1,unlisted:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/intro/philosophy.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Our Philosophy",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/intro/getting-started"},next:{title:"Deployments",permalink:"/docs/deployment/"}},l={},c=[{value:"Drawbacks",id:"drawbacks",level:2},{value:"1. Not Scalable",id:"1-not-scalable",level:3},{value:"2. Fair Usage Limit",id:"2-fair-usage-limit",level:3},{value:"3. No Guarantee",id:"3-no-guarantee",level:3},{value:"Benefit",id:"benefit",level:2},{value:"1. Local File Access",id:"1-local-file-access",level:3},{value:"2. Incremental Build",id:"2-incremental-build",level:3},{value:"3. Simple Hot Fixes",id:"3-simple-hot-fixes",level:3},{value:"4. As close as running locally",id:"4-as-close-as-running-locally",level:3},{value:"Support",id:"support",level:2}];function h(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",em:"em",ol:"ol",li:"li",strong:"strong",a:"a",code:"code"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"our-philosophy",children:"Our Philosophy"}),"\n",(0,i.jsx)(t.p,{children:"We want students, teachers, developers with their hobby time make use of our platform for a better experience with putting things online. Personally, the reason I created this because I once struggled to find a host service that's good enough for a university project."}),"\n",(0,i.jsx)(t.p,{children:"With that said, there are couple drawbacks and benefit to our platform:"}),"\n",(0,i.jsx)(t.h2,{id:"drawbacks",children:"Drawbacks"}),"\n",(0,i.jsx)(t.h3,{id:"1-not-scalable",children:"1. Not Scalable"}),"\n",(0,i.jsxs)(t.p,{children:["Roughly saying, a system can be defined as ",(0,i.jsx)(t.em,{children:"scalable"})," if it can handle a large number of users, say, hundred thousands of visitor every day; or it's targeted for worldwide audience and visitor wouldn't worry about latency wherever they are."]}),"\n",(0,i.jsx)(t.p,{children:"Honestly, our platform don't solves both problem, because it's monolithic (single point of server) by design."}),"\n",(0,i.jsx)(t.p,{children:"We have to admit there are other better cloud providers that gives scalability for free, especially with static websites. But for other websites that need a backend code, it's way too complex."}),"\n",(0,i.jsx)(t.p,{children:"So far we (the world) have three solutions for scalability (what I know, so far) (Be warned, it's very technical):"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Serverless Functions"}),". They're small function represents small pieces of code that can be deployed globally using e.g. AWS Lambda. The problem with that, not every framework can be chunked into small functions (e.g. WordPress and Laravel). Some people with brilliant idea might can turn some existing framework to fit into serverless functions, but I think it's complexity outweights the benefits if you don't look for scalability."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Container and Kubernetes"}),". Kubernetes leverages containers which is about running a server code in an isolated environments. Kubernetes are software managers that clones and kills containers whenever they are needed. With that said, Kubernetes is a bit more complex than serverless functions. Also, you would have to mind the other things to ensure scalability like using Redis instead simple files for cache (e.g. for handling cookie/sessions). You would still have a lot of refactoring to do if the language isn't scalable by default (WordPress still can't do that), but still it's a lot easier than serverless functions."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Use of No-SQL databases"}),". There are recent trends about GraphQL and NoSQL databases, and they're so scalable you can get rid of writing a backend code (provided with correct permissions to ensure security). A popular example for this is when developers create an Android App, mostly they use Firebase for the backend. Firebase already handles most backend aspect ranging from authentication, storage, analytics, to realtime database; This is also true for other services. The downside is that you have to consider this option since beginning, or risk rewriting everything from scratch. You also creates a direct depedency on a service for a major part of your application, and risk major refactor if you want to change from that later."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Those 3 points are actually no problem if you (or your company) has a lot resources to outweight the cost of scalability. So, whether you're flying solo or with a (small) team, and not trying to compete on Facebook, Spotify, FedEx or any other global companies, then you ",(0,i.jsx)(t.strong,{children:"might not need scalability"}),", which this platform is designed for."]}),"\n",(0,i.jsx)(t.h3,{id:"2-fair-usage-limit",children:"2. Fair Usage Limit"}),"\n",(0,i.jsxs)(t.p,{children:["We given users a raw access (SSH) to the server, so they can do whatever they want with it. Practically, one can run a Jupyter Notebook on the server (we even provide a recipe for this). A website relates to Machine Learning (ML) research ",(0,i.jsx)(t.em,{children:"may"})," still be allowed to be hosted here, but under condition: It shouldn't take a lot of RAM/CPU usage."]}),"\n",(0,i.jsx)(t.p,{children:"We don't measure RAM/CPU usage because it's nature, but we still draw a line for fair usage. We have an alert system if the CPU usage is too high continously. If it does happen, we have to kill the process forcibly so it doesn't impact other websites for too long. We could terminate an account if it comes again repeatedly."}),"\n",(0,i.jsx)(t.p,{children:"The same thing goes for crypto, phising, DoS, and other malicious activities, which clearly against the service of terms we have here."}),"\n",(0,i.jsx)(t.p,{children:"If your website has too much traffic, memory or CPU usage, but your website is legitimate, we may contact you so we can take an alternate agreement such that your website resource usage doesn't impact other websites."}),"\n",(0,i.jsx)(t.h3,{id:"3-no-guarantee",children:"3. No Guarantee"}),"\n",(0,i.jsxs)(t.p,{children:["By design of monolithic system, or a single server point for a website, we don't provide any guarantee that your website will stay up most of time. We do have a ",(0,i.jsx)(t.a,{href:"https://stats.uptimerobot.com/AA77Xt9Jx8",children:"uptime status monitoring system"}),", but when a downtime occurred, it's inevitable. If your website runs for a mission critical project, you might need to take a look for alternate cloud provider that guarantees uptime and scalability."]}),"\n",(0,i.jsx)(t.h2,{id:"benefit",children:"Benefit"}),"\n",(0,i.jsx)(t.p,{children:"If you don't mind about scalability, a classic monolithic system like our platform is a good choice for you. Here's why:"}),"\n",(0,i.jsx)(t.h3,{id:"1-local-file-access",children:"1. Local File Access"}),"\n",(0,i.jsx)(t.p,{children:"Local file access is often underrated in today's cloud computing world. The reason you wouldn't see people running PHP inside containers often is because this language is heavily depends with local file operations (e.g. for sessions and file uploads). Also, it's the simplest way to cache and store data. If you're not choosing to be monolithic then you would have take alternative solutions like Redis or Memcached for cache and S3 storages for file uploads."}),"\n",(0,i.jsx)(t.h3,{id:"2-incremental-build",children:"2. Incremental Build"}),"\n",(0,i.jsxs)(t.p,{children:["If you have particularly large packages depedency, this will help you a lot. Unlike standard CI/CD, when you do e.g. ",(0,i.jsx)(t.code,{children:"npm install"}),", the existing ",(0,i.jsx)(t.code,{children:"node_modules"})," will not be cleared, thus speeding up the overall build time."]}),"\n",(0,i.jsx)(t.h3,{id:"3-simple-hot-fixes",children:"3. Simple Hot Fixes"}),"\n",(0,i.jsx)(t.p,{children:"If you spot a bug in production, you have the option to fix it directly by editing the live server. This may risky and inconvenient for large sites. But for those who with little technical human resources, it greatly simplifies the process of bug fixing. When things cooling down, one can see the diff and then reapply a proper fix to stream (git) repository."}),"\n",(0,i.jsx)(t.h3,{id:"4-as-close-as-running-locally",children:"4. As close as running locally"}),"\n",(0,i.jsx)(t.p,{children:"We provide a local development environment that's as close as running locally. If you or your developer has a familiarity with Linux, practically it should be easy to manage the server."}),"\n",(0,i.jsx)(t.h2,{id:"support",children:"Support"}),"\n",(0,i.jsx)(t.p,{children:"Currently, DOM Cloud run as a service for community. Core developer resources is minimal but we strive to make this platform autonomous and easy to use. You welcome to ask in the discussion forum or emails."})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},5251:(e,t,o)=>{o(7418);var i=o(7294),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;s=n("react.element"),t.Fragment=n("react.fragment")}var r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var i,n={},c=null,h=null;for(i in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===n[i]&&(n[i]=t[i]);return{$$typeof:s,type:e,key:c,ref:h,props:n,_owner:r.current}}t.jsx=c,t.jsxs=c},5893:(e,t,o)=>{e.exports=o(5251)},1151:(e,t,o)=>{o.d(t,{Zo:()=>a,ah:()=>n});var i=o(7294);const s=i.createContext({});function n(e){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function a({components:e,children:t,disableParentContext:o}){let a;return a=o?"function"==typeof e?e({}):e||r:n(e),i.createElement(s.Provider,{value:a},t)}}}]);