"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},r="Contributing",l={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/react-native-idnow-videoident/docs/contributing",draft:!1,editUrl:"https://github.com/tokenstreet-tech/react-native-idnow-videoident/tree/main/website/docs/contributing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ISettings",permalink:"/react-native-idnow-videoident/docs/api/interfaces/ISettings"}},s={},p=[{value:"Development requirements",id:"development-requirements",level:2},{value:"Development workflow",id:"development-workflow",level:2},{value:"Commit message convention",id:"commit-message-convention",level:3},{value:"Linting and tests",id:"linting-and-tests",level:3},{value:"Publishing to npm",id:"publishing-to-npm",level:3},{value:"Scripts",id:"scripts",level:3},{value:"Sending a pull request",id:"sending-a-pull-request",level:3},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Our Pledge",id:"our-pledge",level:3},{value:"Our Standards",id:"our-standards",level:3},{value:"Enforcement Responsibilities",id:"enforcement-responsibilities",level:3},{value:"Scope",id:"scope",level:3},{value:"Enforcement",id:"enforcement",level:3},{value:"Enforcement Guidelines",id:"enforcement-guidelines",level:3},{value:"1. Correction",id:"1-correction",level:4},{value:"2. Warning",id:"2-warning",level:4},{value:"3. Temporary Ban",id:"3-temporary-ban",level:4},{value:"4. Permanent Ban",id:"4-permanent-ban",level:4},{value:"Attribution",id:"attribution",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project."),(0,a.kt)("h2",{id:"development-requirements"},"Development requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openjdk@11"))),(0,a.kt)("h2",{id:"development-workflow"},"Development workflow"),(0,a.kt)("p",null,"To get started with the project, run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," in the root directory to install the required dependencies for each package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"While it's possible to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/npm/cli"},(0,a.kt)("inlineCode",{parentName:"a"},"npm")),", the tooling is built around ",(0,a.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/"},(0,a.kt)("inlineCode",{parentName:"a"},"yarn")),", so you'll have an easier time if you use ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," for development.")),(0,a.kt)("p",null,"While developing, you can run the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tokenstreet-tech/react-native-idnow-videoident/tree/main/example"},"example app")," to test your changes. Any changes you make in your library's JavaScript code will be reflected in the example app without a rebuild. If you change any native code, then you'll need to rebuild the example app."),(0,a.kt)("p",null,"To start the packager:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn example start\n")),(0,a.kt)("p",null,"To run the example app on Android:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn example android\n")),(0,a.kt)("p",null,"To run the example app on iOS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn example ios\n")),(0,a.kt)("p",null,"Make sure your code passes TypeScript and ESLint. Run the following to verify:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn typescript\nyarn lint\n")),(0,a.kt)("p",null,"To fix formatting errors, run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn lint --fix\n")),(0,a.kt)("p",null,"Remember to add tests for your change if possible. Run the unit tests by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn test\n")),(0,a.kt)("p",null,"To edit the Objective-C files, open ",(0,a.kt)("inlineCode",{parentName:"p"},"example/ios/ReactNativeIdnowVideoidentExample.xcworkspace")," in XCode and find the source files at ",(0,a.kt)("inlineCode",{parentName:"p"},"Pods > Development Pods > @tokenstreet/react-native-idnow-videoident"),"."),(0,a.kt)("p",null,"To edit the Kotlin files, open ",(0,a.kt)("inlineCode",{parentName:"p"},"example/android")," in Android studio and find the source files at ",(0,a.kt)("inlineCode",{parentName:"p"},"tokenstreetreactnativeidnowvideoident")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"Android"),"."),(0,a.kt)("h3",{id:"commit-message-convention"},"Commit message convention"),(0,a.kt)("p",null,"We follow the ",(0,a.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en"},"conventional commits specification")," for our commit messages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fix"),": bug fixes, e.g. fix crash due to deprecated method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feat"),": new features, e.g. add new method to the module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"refactor"),": code refactor, e.g. migrate from class components to hooks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docs"),": changes into documentation, e.g. add usage example for the module.."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test"),": adding or updating tests, e.g. add integration tests using detox."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chore"),": tooling changes, e.g. change CI config.")),(0,a.kt)("p",null,"Our pre-commit hooks verify that your commit message matches this format when committing."),(0,a.kt)("h3",{id:"linting-and-tests"},"Linting and tests"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint"),", ",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," for type checking, ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," with ",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," for linting and formatting the code, and ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," for testing."),(0,a.kt)("p",null,"Our pre-commit hooks verify that the linter and tests pass when committing."),(0,a.kt)("h3",{id:"publishing-to-npm"},"Publishing to npm"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/release-it/release-it"},"release-it")," to make it easier to publish new versions. It handles common tasks like bumping version based on semver, creating tags and releases etc."),(0,a.kt)("p",null,"To publish new versions, run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn release\n")),(0,a.kt)("h3",{id:"scripts"},"Scripts"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file contains various scripts for common tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn bootstrap"),": setup project by installing all dependencies and pods."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn typescript"),": type-check files with TypeScript."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn lint"),": lint files with ESLint."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn test"),": run unit tests with Jest."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn example start"),": start the Metro server for the example app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn example android"),": run the example app on Android."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn example ios"),": run the example app on iOS.")),(0,a.kt)("h3",{id:"sending-a-pull-request"},"Sending a pull request"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Working on your first pull request?")," You can learn how from this ",(0,a.kt)("em",{parentName:"p"},"free")," series: ",(0,a.kt)("a",{parentName:"p",href:"https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github"},"How to Contribute to an Open Source Project on GitHub"),".")),(0,a.kt)("p",null,"When you're sending a pull request:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prefer small pull requests focused on one change."),(0,a.kt)("li",{parentName:"ul"},"Verify that linters and tests are passing."),(0,a.kt)("li",{parentName:"ul"},"Review the documentation to make sure it looks good."),(0,a.kt)("li",{parentName:"ul"},"Follow the pull request template when opening a pull request."),(0,a.kt)("li",{parentName:"ul"},"For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.")),(0,a.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,a.kt)("h3",{id:"our-pledge"},"Our Pledge"),(0,a.kt)("p",null,"We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation."),(0,a.kt)("p",null,"We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community."),(0,a.kt)("h3",{id:"our-standards"},"Our Standards"),(0,a.kt)("p",null,"Examples of behavior that contributes to a positive environment for our community include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Demonstrating empathy and kindness toward other people"),(0,a.kt)("li",{parentName:"ul"},"Being respectful of differing opinions, viewpoints, and experiences"),(0,a.kt)("li",{parentName:"ul"},"Giving and gracefully accepting constructive feedback"),(0,a.kt)("li",{parentName:"ul"},"Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience"),(0,a.kt)("li",{parentName:"ul"},"Focusing on what is best not just for us as individuals, but for the overall community")),(0,a.kt)("p",null,"Examples of unacceptable behavior include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The use of sexualized language or imagery, and sexual attention or\nadvances of any kind"),(0,a.kt)("li",{parentName:"ul"},"Trolling, insulting or derogatory comments, and personal or political attacks"),(0,a.kt)("li",{parentName:"ul"},"Public or private harassment"),(0,a.kt)("li",{parentName:"ul"},"Publishing others' private information, such as a physical or email\naddress, without their explicit permission"),(0,a.kt)("li",{parentName:"ul"},"Other conduct which could reasonably be considered inappropriate in a\nprofessional setting")),(0,a.kt)("h3",{id:"enforcement-responsibilities"},"Enforcement Responsibilities"),(0,a.kt)("p",null,"Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful."),(0,a.kt)("p",null,"Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate."),(0,a.kt)("h3",{id:"scope"},"Scope"),(0,a.kt)("p",null,"This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event."),(0,a.kt)("h3",{id:"enforcement"},"Enforcement"),(0,a.kt)("p",null,"Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at ","[INSERT CONTACT METHOD]",". All complaints will be reviewed and investigated promptly and fairly."),(0,a.kt)("p",null,"All community leaders are obligated to respect the privacy and security of the reporter of any incident."),(0,a.kt)("h3",{id:"enforcement-guidelines"},"Enforcement Guidelines"),(0,a.kt)("p",null,"Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:"),(0,a.kt)("h4",{id:"1-correction"},"1. Correction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Community Impact"),": Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Consequence"),": A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested."),(0,a.kt)("h4",{id:"2-warning"},"2. Warning"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Community Impact"),": A violation through a single incident or series of actions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Consequence"),": A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban."),(0,a.kt)("h4",{id:"3-temporary-ban"},"3. Temporary Ban"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Community Impact"),": A serious violation of community standards, including sustained inappropriate behavior."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Consequence"),": A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban."),(0,a.kt)("h4",{id:"4-permanent-ban"},"4. Permanent Ban"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Community Impact"),": Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Consequence"),": A permanent ban from any sort of public interaction within the community."),(0,a.kt)("h3",{id:"attribution"},"Attribution"),(0,a.kt)("p",null,"This Code of Conduct is adapted from the ",(0,a.kt)("a",{parentName:"p",href:"https://www.contributor-covenant.org"},"Contributor Covenant"),", version 2.0,\navailable at ",(0,a.kt)("a",{parentName:"p",href:"https://www.contributor-covenant.org/version/2/0/code_of_conduct.html"},"https://www.contributor-covenant.org/version/2/0/code_of_conduct.html"),"."),(0,a.kt)("p",null,"Community Impact Guidelines were inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/diversity"},"Mozilla's code of conduct enforcement ladder"),"."),(0,a.kt)("p",null,"For answers to common questions about this code of conduct, see the FAQ at\n",(0,a.kt)("a",{parentName:"p",href:"https://www.contributor-covenant.org/faq"},"https://www.contributor-covenant.org/faq"),". Translations are available at ",(0,a.kt)("a",{parentName:"p",href:"https://www.contributor-covenant.org/translations"},"https://www.contributor-covenant.org/translations"),"."))}d.isMDXComponent=!0}}]);