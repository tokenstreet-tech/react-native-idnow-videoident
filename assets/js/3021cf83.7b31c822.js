"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>T,frontMatter:()=>v,metadata:()=>N,toc:()=>w});var r=n(7462),a=n(7294),o=n(3905),i=n(6010),l=n(2389),s=n(7392),d=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:l,defaultValue:m,values:k,groupId:f,className:g}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),N=(0,s.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:y}=(0,d.U)(),[T,O]=(0,a.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=f){const e=w[f];null!=e&&e!==T&&h.some((t=>t.value===e))&&O(e)}const I=e=>{const t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==T&&(C(t),O(r),null!=f&&y(f,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{var r;const t=E.indexOf(e.currentTarget)+1;n=null!=(r=E[t])?r:E[0];break}case"ArrowLeft":{var a;const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},g)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:x,onClick:I},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function k(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function g(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(f,r),hidden:n},t)}const v={sidebar_position:0},h="Getting started",N={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"Requirements",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/react-native-idnow-videoident/docs/getting-started",draft:!1,editUrl:"https://github.com/tokenstreet-tech/react-native-idnow-videoident/tree/main/website/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"CocoaPods build types",permalink:"/react-native-idnow-videoident/docs/cocoapods-build-types"}},b={},w=[{value:"Requirements",id:"requirements",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Installation",id:"installation",level:2},{value:"Bare Workflow",id:"bare-workflow",level:3},{value:"iOS",id:"ios-1",level:4},{value:"Android",id:"android-1",level:4},{value:"Expo",id:"expo",level:3},{value:"Usage",id:"usage",level:2}],y={toc:w};function T(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Deployment Target"),": iOS 12.4 or later")),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"minSdkVersion"),": 21 (Android 5.0 Lollipop)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"targetSdkVersion"),": 31 (Android 12.0 Snow Cone)")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"bare-workflow"},"Bare Workflow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"@tokenstreet/react-native-idnow-videoident"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @tokenstreet/react-native-idnow-videoident --tilde\n")),(0,o.kt)("p",{parentName:"li"},"or"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @tokenstreet/react-native-idnow-videoident --save-exact\n")),(0,o.kt)("admonition",{parentName:"li",title:"versioning",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We do not follow ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning 2.0.0")," until ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," is landed. Breaking changes in minor updates are possible.\nTherefore, it is recommended to install this package with a locked minor version.")))),(0,o.kt)("h4",{id:"ios-1"},"iOS"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following line to the target in your iOS Podfile:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"use_frameworks! linkage: :static\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the iOS dependencies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pod install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following properties to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Info.plist"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSMicrophoneUsageDescription</key>\n<string>Allow microphone access for video identification</string>\n<key>NSCameraUsageDescription</key>\n<string>Allow camera access for video identification</string>\n")))),(0,o.kt)("h4",{id:"android-1"},"Android"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the IDnow maven url to your top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-gradle"},'allprojects {\n    repositories {\n        ...\n        jcenter() {\n            // JCenter is now read-only. Therefore, no new versions are published there any more.\n            // We only fetch the necessary dependencies for IDnow from JCenter to avoid loading old dependencies.\n            content {\n                includeModule("me.relex", "circleindicator")\n                includeModule("com.github.barteksc", "android-pdf-viewer")\n            }\n        }\n        maven() {\n            url "https://raw.githubusercontent.com/idnow/de.idnow.android/master"\n            content {\n                includeModule("de.idnow.sdk", "idnow-android-sdk")\n                includeModule("de.idnow.insights", "idnow-android-insights-sdk")\n            }\n        }\n    }\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following permissions to your ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," (click ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/idnow/de.idnow.android#androidmanifest"},"here")," for more details):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>\n<uses-permission android:name="android.permission.INTERNET"/>\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>\n<uses-permission android:name="android.permission.CAMERA" />\n<uses-permission android:name="android.permission.FLASHLIGHT" />\n<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />\n<uses-permission android:name="android.permission.RECORD_AUDIO" />\n<uses-permission android:name="android.permission.BLUETOOTH"/>\n<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Unfortunately, it is not yet possible to customise the colours for Android via JavaScript. To edit them, please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/idnow/de.idnow.android#colors"},"official guide"),"."))),(0,o.kt)("h3",{id:"expo"},"Expo"),(0,o.kt)("admonition",{title:"experimental",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please be aware that Expo support is experimental and not officially supported.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"@tokenstreet/react-native-idnow-videoident"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx expo install @tokenstreet/react-native-idnow-videoident\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," and update your plugins section (",(0,o.kt)("inlineCode",{parentName:"p"},"expo install")," would not do it for you, due to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expo/expo/issues/17918"},"expo install skips scoped packages #17918"),"):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins": ["@tokenstreet/react-native-idnow-videoident"]\n}\n')))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"startVideoIdent")," is asynchronous. For a successful identification the ",(0,o.kt)("inlineCode",{parentName:"p"},"resultCode")," is returned directly. If the identification failed, an error is thrown with a ",(0,o.kt)("inlineCode",{parentName:"p"},"resultCode"),". Also, an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"errorMessage")," can be included."),(0,o.kt)("p",null,"You have the possibility to integrate it with a ",(0,o.kt)("code",null,"try...catch")," block, with ",(0,o.kt)("code",null,"Promises")," or with callbacks:"),(0,o.kt)(k,{mdxType:"Tabs"},(0,o.kt)(g,{value:"try_catch",label:(0,o.kt)("code",null,"try...catch"),default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { IIdentificationErrorResult } from '@tokenstreet/react-native-idnow-videoident';\nimport { IdnowManager } from '@tokenstreet/react-native-idnow-videoident';\n\ntry {\n    const { resultCode } = await IdnowManager.startVideoIdent({ transactionToken: 'YOUR_TRANSACTION_TOKEN' });\n    console.log(resultCode);\n} catch (error) {\n    if (error !== null && typeof error === 'object' && 'resultCode' in error) {\n        const identificationError = error as IIdentificationErrorResult;\n        console.log(identificationError.resultCode);\n        console.log(identificationError.errorMessage);\n    }\n}\n"))),(0,o.kt)(g,{value:"promises",label:(0,o.kt)("code",null,"Promises"),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { IIdentificationErrorResult } from '@tokenstreet/react-native-idnow-videoident';\nimport { IdnowManager } from '@tokenstreet/react-native-idnow-videoident';\n\nIdnowManager.startVideoIdent({ transactionToken: 'YOUR_TRANSACTION_TOKEN' })\n    .then(({ resultCode }) => console.log(resultCode))\n    .catch((error) => {\n        if (error !== null && typeof error === 'object' && 'resultCode' in error) {\n            const identificationError = error as IIdentificationErrorResult;\n            console.log(identificationError.resultCode);\n            console.log(identificationError.errorMessage);\n        }\n    });\n"))),(0,o.kt)(g,{value:"callbacks",label:"Callbacks",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { IdnowManager } from '@tokenstreet/react-native-idnow-videoident';\n\nvoid IdnowManager.startVideoIdent(\n    { transactionToken: 'YOUR_TRANSACTION_TOKEN' },\n    {\n        onSuccess: ({ resultCode }) => console.log(resultCode),\n        onError: ({ resultCode, errorMessage }) => console.log(`${resultCode}\\n${errorMessage}`),\n    }\n);\n")))),(0,o.kt)("p",null,"All configuration options are documented in the ",(0,o.kt)("a",{parentName:"p",href:"api/interfaces/ISettings"},"TypeScript interfaces")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tokenstreet-tech/react-native-idnow-videoident/blob/main/example/src/createFullSettings.ts"},"an example")," is also available."))}T.isMDXComponent=!0}}]);