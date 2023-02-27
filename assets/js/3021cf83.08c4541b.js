"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>I,default:()=>D,frontMatter:()=>_,metadata:()=>O,toc:()=>x});var a=n(7462),r=n(7294),i=n(3905),o=n(6010),l=n(2466),s=n(6550),d=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,d]=f({queryString:n,groupId:a}),[p,c]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??p;return k({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),c(e)}),[d,c,i]),tabValues:i}}var h=n(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=d[n].value;a!==i&&(u(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",N.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",N.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}const C={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(C.tabItem,a),hidden:n},t)}const _={sidebar_position:0},I="Getting started",O={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"Requirements",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/react-native-idnow-videoident/docs/getting-started",draft:!1,editUrl:"https://github.com/tokenstreet-tech/react-native-idnow-videoident/tree/main/website/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/react-native-idnow-videoident/docs/api/modules"}},E={},x=[{value:"Requirements",id:"requirements",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Installation",id:"installation",level:2},{value:"Bare Workflow",id:"bare-workflow",level:3},{value:"iOS",id:"ios-1",level:4},{value:"Android",id:"android-1",level:4},{value:"Expo",id:"expo",level:3},{value:"iOS",id:"ios-2",level:4},{value:"Usage",id:"usage",level:2}],S={toc:x},A="wrapper";function D(e){let{components:t,...n}=e;return(0,i.kt)(A,(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"ios"},"iOS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Deployment Target"),": iOS 12.4 or later")),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minSdkVersion"),": 21 (Android 5.0 Lollipop)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"targetSdkVersion"),": 31 (Android 12.0 Snow Cone)")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"bare-workflow"},"Bare Workflow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"@tokenstreet/react-native-idnow-videoident"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @tokenstreet/react-native-idnow-videoident --tilde\n")),(0,i.kt)("p",{parentName:"li"},"or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @tokenstreet/react-native-idnow-videoident --save-exact\n")),(0,i.kt)("admonition",{parentName:"li",title:"versioning",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We do not follow ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning 2.0.0")," until ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," is landed. Breaking changes in minor updates are possible.\nTherefore, it is recommended to install this package with a locked minor version.")))),(0,i.kt)("h4",{id:"ios-1"},"iOS"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Make sure you use the build type ",(0,i.kt)("inlineCode",{parentName:"li"},"static_framework"),". This can be implemented for the individual pods, or for all pods with the ",(0,i.kt)("inlineCode",{parentName:"li"},"use_frameworks!")," directive.")),(0,i.kt)(w,{mdxType:"Tabs"},(0,i.kt)(T,{value:"only_necessary_pods",label:"Only necessary pods",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'$static_frameworks = %w[IDnowSDK Masonry SocketRocket libPhoneNumber-iOS FLAnimatedImage AFNetworking]\n\npre_install do |installer|\n    Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}\n    installer.pod_targets.each do |pod|\n        bt = pod.send(:build_type)\n        if $static_frameworks.include?(pod.name)\n            puts "Overriding the build_type to static_framework from static_library for #{pod.name}"\n            def pod.build_type\n                Pod::BuildType.static_framework\n            end\n        end\n    end\nend\n'))),(0,i.kt)(T,{value:"all_pods",label:"All pods",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"use_frameworks! linkage: :static\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"It is strongly discouraged to use ",(0,i.kt)("inlineCode",{parentName:"p"},"use_frameworks! linkage: :static")," to override the build type for all pods,\nbecause it makes Flipper stop working and often creates problems with other packages,\nsuch as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Shopify/react-native-skia/issues/652"},(0,i.kt)("inlineCode",{parentName:"a"},"@shopify/react-native-skia"))," or\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/getsentry/sentry-react-native/issues/2353"},(0,i.kt)("inlineCode",{parentName:"a"},"sentry-react-native")),"."),(0,i.kt)("p",{parentName:"admonition"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/idnow/de.idnow.ios/issues/119"},"issue")," has already been created in their repository,\nand the issue has also been passed on to the IDnow support team.")))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the iOS dependencies:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pod install\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the following properties to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSMicrophoneUsageDescription</key>\n<string>Allow microphone access for video identification</string>\n<key>NSCameraUsageDescription</key>\n<string>Allow camera access for video identification</string>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you are using an M1 Mac and building the app for a simulator, please add the following workaround to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"post_install do |installer|\n    react_native_post_install(\n        installer,\n        # Set `mac_catalyst_enabled` to `true` in order to apply patches\n        # necessary for Mac Catalyst builds\n        mac_catalyst_enabled: false\n    )\n    __apply_Xcode_12_5_M1_post_install_workaround(installer)\n+\n+   # `use_frameworks! linkage: :static` M1 Mac Simulator workaround\n+   # https://github.com/expo/expo/issues/15800\n+   installer.pods_project.targets.each do |pod|\n+       pod.build_configurations.each do |config|\n+           if config.name == 'Debug'\n+               puts \"Overriding the build_settings ONLY_ACTIVE_ARCH to NO for #{pod.name}\"\n+               config.build_settings['ONLY_ACTIVE_ARCH'] = 'NO'\n+           end\n+       end\n+   end\nend\n")))),(0,i.kt)("h4",{id:"android-1"},"Android"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the IDnow maven url to your top-level ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},'allprojects {\n    repositories {\n        ...\n        jcenter() {\n            // JCenter is now read-only. Therefore, no new versions are published there any more.\n            // We only fetch the necessary dependencies for IDnow from JCenter to avoid loading old dependencies.\n            content {\n                includeModule("me.relex", "circleindicator")\n                includeModule("com.github.barteksc", "android-pdf-viewer")\n            }\n        }\n        maven() {\n            url "https://raw.githubusercontent.com/idnow/de.idnow.android/master"\n            content {\n                includeModule("de.idnow.sdk", "idnow-android-sdk")\n                includeModule("de.idnow.insights", "idnow-android-insights-sdk")\n            }\n        }\n    }\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the following permissions to your ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," (click ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/idnow/de.idnow.android#androidmanifest"},"here")," for more details):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>\n<uses-permission android:name="android.permission.INTERNET"/>\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>\n<uses-permission android:name="android.permission.CAMERA" />\n<uses-permission android:name="android.permission.FLASHLIGHT" />\n<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />\n<uses-permission android:name="android.permission.RECORD_AUDIO" />\n<uses-permission android:name="android.permission.BLUETOOTH"/>\n<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unfortunately, it is not yet possible to customise the colours for Android via JavaScript. To edit them, please follow the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/idnow/de.idnow.android#colors"},"official guide"),"."))),(0,i.kt)("h3",{id:"expo"},"Expo"),(0,i.kt)("admonition",{title:"experimental",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please be aware that Expo support is experimental and not officially supported.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"@tokenstreet/react-native-idnow-videoident"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx expo install @tokenstreet/react-native-idnow-videoident expo-build-properties\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open your ",(0,i.kt)("inlineCode",{parentName:"p"},"app.json")," and update your plugins section (",(0,i.kt)("inlineCode",{parentName:"p"},"expo install")," would not do it for you, due to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/expo/expo/issues/17918"},"expo install skips scoped packages #17918"),"):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins": [\n        [\n            "@tokenstreet/react-native-idnow-videoident",\n            {\n                "ios": {\n                    "overrideBuildTypeToStaticFramework": false,\n                    "applyUseFrameworksM1SimulatorWorkaround": false\n                },\n                "android": {\n                    "excludeDuplicateClasses": false\n                }\n            }\n        ],\n        ["expo-build-properties", { "ios": { "useFrameworks": "static" } }]\n    ]\n}\n')),(0,i.kt)("p",{parentName:"li"},"All configuration options are explained below:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"ios.overrideBuildTypeToStaticFramework")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"This option overrides the ",(0,i.kt)("inlineCode",{parentName:"td"},"build_type")," of the IDnowSDK pod and its dependencies from ",(0,i.kt)("inlineCode",{parentName:"td"},"static_library")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"static_framework"),". If this is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", it is not necessary to override the ",(0,i.kt)("inlineCode",{parentName:"td"},"build_type")," for all pods and the ",(0,i.kt)("inlineCode",{parentName:"td"},"expo-build-properties")," line can be removed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"ios.applyUseFrameworksM1SimulatorWorkaround")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"For a fix added to the podfile so the project can be built on Apple Silicon machines and run in simulators. More information here: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/expo/expo/issues/15800"},"https://github.com/expo/expo/issues/15800"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"android.excludeDuplicateClasses")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"The following classes appeared twice in our projects in connection with this SDK, and can be excluded with this option: ",(0,i.kt)("inlineCode",{parentName:"td"},"bcprov-jdk15to18"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"bcutil-jdk15to18"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"pdfium-android"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"android-pdf-viewer"),".")))))),(0,i.kt)("h4",{id:"ios-2"},"iOS"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open your ",(0,i.kt)("inlineCode",{parentName:"p"},"app.json")," again and update the ",(0,i.kt)("inlineCode",{parentName:"p"},"infoPlist")," to give your app the necessary permissions:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ios": {\n        "infoPlist": {\n            "NSCameraUsageDescription": "Allow camera access for video identification",\n            "NSMicrophoneUsageDescription": "Allow microphone access for video identification"\n        }\n    }\n}\n')))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"startVideoIdent")," is asynchronous. For a successful identification the ",(0,i.kt)("inlineCode",{parentName:"p"},"resultCode")," is returned directly. If the identification failed, an error is thrown with a ",(0,i.kt)("inlineCode",{parentName:"p"},"resultCode"),". Also, an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"errorMessage")," can be included."),(0,i.kt)("p",null,"You have the possibility to integrate it with a ",(0,i.kt)("code",null,"try...catch")," block, with ",(0,i.kt)("code",null,"Promises")," or with callbacks:"),(0,i.kt)(w,{mdxType:"Tabs"},(0,i.kt)(T,{value:"try_catch",label:(0,i.kt)("code",null,"try...catch"),default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { IIdentificationErrorResult } from '@tokenstreet/react-native-idnow-videoident';\nimport { IdnowManager } from '@tokenstreet/react-native-idnow-videoident';\n\ntry {\n    const { resultCode } = await IdnowManager.startVideoIdent({ transactionToken: 'YOUR_TRANSACTION_TOKEN' });\n    console.log(resultCode);\n} catch (error) {\n    if (error !== null && typeof error === 'object' && 'resultCode' in error) {\n        const identificationError = error as IIdentificationErrorResult;\n        console.log(identificationError.resultCode);\n        console.log(identificationError.errorMessage);\n    }\n}\n"))),(0,i.kt)(T,{value:"promises",label:(0,i.kt)("code",null,"Promises"),mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { IIdentificationErrorResult } from '@tokenstreet/react-native-idnow-videoident';\nimport { IdnowManager } from '@tokenstreet/react-native-idnow-videoident';\n\nIdnowManager.startVideoIdent({ transactionToken: 'YOUR_TRANSACTION_TOKEN' })\n    .then(({ resultCode }) => console.log(resultCode))\n    .catch((error) => {\n        if (error !== null && typeof error === 'object' && 'resultCode' in error) {\n            const identificationError = error as IIdentificationErrorResult;\n            console.log(identificationError.resultCode);\n            console.log(identificationError.errorMessage);\n        }\n    });\n"))),(0,i.kt)(T,{value:"callbacks",label:"Callbacks",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { IdnowManager } from '@tokenstreet/react-native-idnow-videoident';\n\nvoid IdnowManager.startVideoIdent(\n    { transactionToken: 'YOUR_TRANSACTION_TOKEN' },\n    {\n        onSuccess: ({ resultCode }) => console.log(resultCode),\n        onError: ({ resultCode, errorMessage }) => console.log(`${resultCode}\\n${errorMessage}`),\n    }\n);\n")))),(0,i.kt)("p",null,"All configuration options are documented in the ",(0,i.kt)("a",{parentName:"p",href:"api/interfaces/ISettings"},"TypeScript interfaces")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/main/example/src/createFullSettings.ts"},"an example")," is also available."))}D.isMDXComponent=!0}}]);