"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"updating-os-across-servers","metadata":{"permalink":"/blog/updating-os-across-servers","source":"@site/blog/2023-03-12-updating-os-across-servers/index.md","title":"Updating OS Across Servers","description":"DOM Cloud runs with Rocky Linux 8, which was migrated from CentOS 8 from sometime ago. Rocky Linux 9.1 is available since about three months ago, and I think it\'s matured enough to update the OS.","date":"2023-03-12T00:00:00.000Z","formattedDate":"March 12, 2023","tags":[{"label":"service","permalink":"/blog/tags/service"},{"label":"update","permalink":"/blog/tags/update"}],"readingTime":2.79,"hasTruncateMarker":false,"authors":[{"name":"Wildan Mubarok","title":"Creator of DOM Cloud","url":"https://github.com/willnode","imageURL":"https://github.com/willnode.png","key":"willnode"}],"frontMatter":{"slug":"updating-os-across-servers","title":"Updating OS Across Servers","authors":["willnode"],"tags":["service","update"],"image":"https://linuxiac.b-cdn.net/wp-content/uploads/2022/08/rocky-8-to-9.jpg"},"unlisted":false,"nextItem":{"title":"Producing a Cost-Effective Service","permalink":"/blog/producing-cost-effective-service"}},"content":"import ThemedImage from \'@theme/ThemedImage\';\\n\\n![](https://linuxiac.b-cdn.net/wp-content/uploads/2022/08/rocky-8-to-9.jpg)\\n\\n\\nDOM Cloud runs with Rocky Linux 8, which was migrated from CentOS 8 from sometime ago. [Rocky Linux 9.1 is available](https://rockylinux.org/news/rocky-linux-9-1-ga-release/) since about three months ago, and I think it\'s matured enough to update the OS.\\n\\nThis update brings modern versions into system packages, notably PHP from 7.4 to 8.0, Node.js from 14 to 16, Python from 3.6 to 3.9, and many more. This update also fixes some parts of the system that is not working properly, such as the WebSSH service which was broken in some servers.\\n\\nWe would like to highlight some other major updated for the last three months:\\n\\n## New Server in France \\n\\nAvailable since January, this eliminates latency issues for European users who plan to use our services. It gains enough upvotes in the [issue page](https://github.com/domcloud/domcloud/issues/22) and as of today there are dozens of websites hosted in this server.\\n\\nAs of this writing, there are 3 servers in total, each one in Asia, Europe, and North America. There are no plan to add more servers in the near future, as probably additional budget will be allocated to increase computational power instead. Time will tell.\\n\\n## Force Recalculation of Disk Usage\\n\\nSince limit enforcement is based on disk usage is running since three months ago... some of our users wondering if there\'s a way to instantly recalculate the disk usage, as it\'s not updated automatically (takes schedule about 3 days to update). We have added a button to force recalculation of disk usage via a new button in bottom right of the Team page.\\n\\n<ThemedImage\\n    sources={{\\n        dark: \\"/assets/ss/team-detail-b.png\\",\\n        light: \\"/assets/ss/team-detail-w.png\\"\\n    }}\\n    alt=\\"\\"\\n    className=\\"img-fluid border rounded-3 shadow--md mb-4\\"\\n    width=\\"700\\"\\n    height=\\"500\\"\\n    loading=\\"lazy\\"\\n/>\\n\\nIt is useful if you already run out of disk space and has deleted some files, so the website can be accessed again. \\n\\nTo analyze which files are taking up the most disk space, you can use the [ncdu](https://en.wikipedia.org/wiki/Ncdu) command. It\'s available in all servers, and you can run it via SSH.\\n\\n## Country Input Field\\n\\nAs you can see from above screenshot, we have added a new field in the Team page to specify the country of your team. This is  mostly used for analytics purpose, as we can see which country has the most users, and better features tailored for them.\\n\\nThere\'s also input for currency (for payment purposes) and default server, which automatically selected based on selected country during the first login.\\n\\n## Pricing Adjustments\\n\\nWe keep adjust pricing based on total usage and demand. As of today, the price tag is changed as follows:\\n\\n+ Lite plan: from 3 USD/month to 1.5 USD/month\\n+ Kit plan: from 10 USD/month to 5 USD/month\\n+ Pro plan: from 25 USD/month to 12.5 USD/month\\n\\nThis price change is already reflected in other currencies as well. So the difference in value should be small. We hope a lot of users will be able to get on board faster with our services with this competitive price change.\\n\\n## Other Niche Features\\n\\nAlthough is still a work in progress, we have improved small things incrementally, such as the documentation and the website itself. There\'s also features requests that has been backlogged for a long time. We\'ll get there in time!\\n\\n---\\n\\nThat\'s all for this update. We hope you enjoy our services, and we\'ll see you in the next update!"},{"id":"producing-cost-effective-service","metadata":{"permalink":"/blog/producing-cost-effective-service","source":"@site/blog/2022-12-03-producing-cost-effective-service/index.md","title":"Producing a Cost-Effective Service","description":"Hi, long time I haven\'t do some updates. I want to point out some statistics and key actions on what to do next for DOM Cloud.","date":"2022-12-03T00:00:00.000Z","formattedDate":"December 3, 2022","tags":[{"label":"service","permalink":"/blog/tags/service"},{"label":"update","permalink":"/blog/tags/update"}],"readingTime":2.07,"hasTruncateMarker":false,"authors":[{"name":"Wildan Mubarok","title":"Creator of DOM Cloud","url":"https://github.com/willnode","imageURL":"https://github.com/willnode.png","key":"willnode"}],"frontMatter":{"slug":"producing-cost-effective-service","title":"Producing a Cost-Effective Service","authors":["willnode"],"tags":["service","update"],"image":"stat.png"},"unlisted":false,"prevItem":{"title":"Updating OS Across Servers","permalink":"/blog/updating-os-across-servers"},"nextItem":{"title":"Preparing for spike because of Heroku","permalink":"/blog/preparing-for-spike-of-heroku"}},"content":"Hi, long time I haven\'t do some updates. I want to point out some statistics and key actions on what to do next for DOM Cloud.\\n\\n![stat.png](stat.png)\\n\\nBy number of statistics, our platform usage are steadily increasing. We also gotten some feedback from users, and guided with data and some reasoning, we would like to bring some changes to our plans:\\n\\n## Change in Plans\\n\\n### Free Plan\\n\\nThe free plan storage cap is increased from **1 GB** to **1.5 GB**, while total of website is reduced from **4** to **3**. I think this is a fair tradeoff, because most websites nowadays are quite heavy with depedencies, and storage is quite cheap compared to computing power.\\n\\n### Lite Plan\\n\\nDue to high processing fees, I think it\'s make sense to increase the price from **2 USD** to **3 USD** a month. With that in mind, these limits are increased:\\n\\n+ Storage cap is increased from **2 GB** to **3 GB**.\\n+ Data transfer is increased from **2 GB** to **5 GB**.\\n+ Total of website is increased from **5** to **6**.\\n\\n## The Enforcing of Limits\\n\\nLimits in the past is not enforced because how little the users was and support was very limited. Now with more users, I think it\'s time to enforce the limits so I can keep the platform stay on good performance.\\n\\nHere\'s how it works:\\n\\n+ If storage or data cap is reached, all website will be instantly disabled and the user will be notified with email. Current option is to upgrade the plan or delete some files (only works if the storage cap reached).\\n+ If paid user has exceeded the expiry date, it will return back to free plan automatically.\\n+ Free user also has expiry date too, but it\'s 30 days after the last login. If the user has not logged in for 30 days, all website will be disabled and the user is notified before all website data is erased permanently within 2 weeks.\\n+ If free user\'s website has used a noticeable data cap (it means getting enough traffic), that user doesn\'t need to login for another 30 days (the expiration date is extended automatically, as a thank you because it means free marketing for us too).\\n\\n## Upcoming new Features\\n\\nThere maybe not a lot of new features upcoming, because I will focus on providing good documentation.\\n\\nNonetheless, there maybe some minor new features or UI improvements in this month. Check back later!"},{"id":"preparing-for-spike-of-heroku","metadata":{"permalink":"/blog/preparing-for-spike-of-heroku","source":"@site/blog/2022-08-29-preparing-for-spike-of-heroku/index.md","title":"Preparing for spike because of Heroku","description":"In few days ago Heroku announced it will no longer provide free plans, which is also means a free marketing for us. I tell people people about this service in dev.to and free-for.dev and the result is a recent spike of traffic.","date":"2022-08-29T00:00:00.000Z","formattedDate":"August 29, 2022","tags":[{"label":"service","permalink":"/blog/tags/service"},{"label":"update","permalink":"/blog/tags/update"}],"readingTime":1.445,"hasTruncateMarker":false,"authors":[{"name":"Wildan Mubarok","title":"Creator of DOM Cloud","url":"https://github.com/willnode","imageURL":"https://github.com/willnode.png","key":"willnode"}],"frontMatter":{"slug":"preparing-for-spike-of-heroku","title":"Preparing for spike because of Heroku","authors":["willnode"],"tags":["service","update"],"image":"stat.png"},"unlisted":false,"prevItem":{"title":"Producing a Cost-Effective Service","permalink":"/blog/producing-cost-effective-service"},"nextItem":{"title":"Welcome, New Landing Page!","permalink":"/blog/welcome-new-landing-page"}},"content":"In few days ago Heroku announced it [will no longer provide free plans](https://techcrunch.com/2022/08/25/heroku-announces-plans-to-eliminate-free-plans-blaming-fraud-and-abuse/), which is also means a free marketing for us. I tell people people about this service in [dev.to](https://dev.to/willnode/comment/219m2) and [free-for.dev](https://github.com/ripienaar/free-for-dev/pull/2570) and the result is a recent spike of traffic.\\n\\n![Traffic stat increased dramatically](stat.png)\\n\\nTo get prepared for this spike, I need to adjust a few things:\\n\\n+ The New York server just been upgraded to 2 GB RAM and 2 vCPU immediately. This capacity is equal with what I use in Singapore server. Later if spike of usage still continue, I will use a separate mount drive for `/home` directory.\\n+ I will continue to complete writing the documentation, but there will be few changes: We\'ll remove the optional tools we\'ve had installed (Ruby, Go, etc.) and the only things that preinstalled will be `php` (all major/version supported), `node` and `python` with specific version provided from OS. This will make our documentation clear and removing the dangerous depedency with OS environment which can change at anytime.\\n\\nThere\'s also a few improvements in features and security that I would like to talk for the next month:\\n\\n+ The home directory will change into some random unique string rather than what you provided from the UI. This is because anybody can do `ls /home` and get all username list from the server. This might need take time because it may break existing scripts. Another option is to use *jailkit* but I\'m not so sure it will not break anything.\\n+ we will provide a way to pipe the logs from server into portal UI. Right now the only way to open logs is from the Webmin UI.\\n+ The documentation, again.\\n\\nSo that\'s it, see you next month!"},{"id":"welcome-new-landing-page","metadata":{"permalink":"/blog/welcome-new-landing-page","source":"@site/blog/2021-08-16-welcome-new-landing-page/index.md","title":"Welcome, New Landing Page!","description":"In a very narrow free time window I successfully redesign (again) the landing page, in fewer than 24 hours!","date":"2021-08-16T00:00:00.000Z","formattedDate":"August 16, 2021","tags":[{"label":"service","permalink":"/blog/tags/service"},{"label":"update","permalink":"/blog/tags/update"}],"readingTime":0.76,"hasTruncateMarker":false,"authors":[{"name":"Wildan Mubarok","title":"Creator of DOM Cloud","url":"https://github.com/willnode","imageURL":"https://github.com/willnode.png","key":"willnode"}],"frontMatter":{"slug":"welcome-new-landing-page","title":"Welcome, New Landing Page!","authors":["willnode"],"tags":["service","update"]},"unlisted":false,"prevItem":{"title":"Preparing for spike because of Heroku","permalink":"/blog/preparing-for-spike-of-heroku"}},"content":"import theVideo from \'./new-landing-page.webm\';\\n\\nIn a very narrow free time window I successfully redesign (again) the landing page, in fewer than 24 hours!\\n\\nThe new design reflects more about what this service about: it\'s for the niche, but packed with lots of server tooling that (hopefully) makes your dev life easier.\\n\\nI captured the screenshot (in video) below. I like the dark mode button!\\n\\n<video width=\\"100%\\" loop muted controls>\\n  <source src={theVideo} type=\\"video/webm\\" />\\n  Sorry! Your browser does not support the video tag.\\n</video>\\n\\nIf you wonder, this new landing site is built using [Docusaurus](https://docusaurus.io), replacing our old simple website that\'s powered by Jekyll. I saved [the old site in archive.org](https://web.archive.org/web/20220612080708/https://domcloud.co/) if you wanted to see the difference.\\n\\nAnyway, I feel sorry that the proper blog and docs are just live today. Actually, a lot has gotten since 2 years I\'ve been making this platform. Let\'s hope it get better every time!\\n\\n<br/>"}]}')}}]);