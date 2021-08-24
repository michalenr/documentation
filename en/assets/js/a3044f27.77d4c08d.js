(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[891],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(r),d=n,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3747:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i={sidebar_position:5},p={unversionedId:"concepts/public-api",id:"concepts/public-api",isDocsHomePage:!1,title:"Public API",description:"\u041a\u0430\u0436\u0434\u0430\u044f \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0443\u043b\u044c.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/concepts/public-api.md",sourceDirName:"concepts",slug:"/concepts/public-api",permalink:"/en/docs/concepts/public-api",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/concepts/public-api.md",version:"current",lastUpdatedAt:1629794439,formattedLastUpdatedAt:"8/24/2021",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"App splitting",permalink:"/en/docs/concepts/app-splitting"},next:{title:"Naming adaptability",permalink:"/en/docs/concepts/naming-adaptability"}},l=[{value:"\u0426\u0435\u043b\u0438",id:"\u0446\u0435\u043b\u0438",children:[]},{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u043c\u0443 API",id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f-\u043a-\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u043c\u0443-api",children:[{value:"1. \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0430",id:"1-\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c-\u0434\u043e\u0441\u0442\u0443\u043f\u0430",children:[]},{value:"2. \u0410\u043d\u0442\u0438-\u0445\u0440\u0443\u043f\u043a\u043e\u0441\u0442\u044c",id:"2-\u0430\u043d\u0442\u0438-\u0445\u0440\u0443\u043f\u043a\u043e\u0441\u0442\u044c",children:[]},{value:"3. \u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c",id:"3-\u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c",children:[]}]},{value:"\u041e \u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430\u0445",id:"\u043e-\u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430\u0445",children:[{value:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438",id:"\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438",children:[]},{value:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u0443\u0442\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f",id:"\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435-\u043f\u0443\u0442\u0438-\u0440\u0435\u0448\u0435\u043d\u0438\u044f",children:[]}]},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435",children:[]}],m={toc:l};function s(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041a\u0430\u0436\u0434\u0430\u044f \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",(0,o.kt)("strong",{parentName:"p"},"\u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 ",(0,o.kt)("a",{parentName:"strong",href:"/docs/reference/glossary"},"\u043c\u043e\u0434\u0443\u043b\u044c"),".")),(0,o.kt)("h2",{id:"\u0446\u0435\u043b\u0438"},"\u0426\u0435\u043b\u0438"),(0,o.kt)("p",null,"\u0423\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0443\u043b\u044f \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 ",(0,o.kt)("em",{parentName:"p"},"\u0440\u044f\u0434\u0430 \u0446\u0435\u043b\u0435\u0439"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c ",(0,o.kt)("strong",{parentName:"li"},"\u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043e \u043e\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439")," \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"),(0,o.kt)("li",{parentName:"ol"},"\u041f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043c\u043e\u0434\u0443\u043b\u044f ",(0,o.kt)("strong",{parentName:"li"},"\u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u0442\u044c")," \u0434\u0440\u0443\u0433\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0438"),(0,o.kt)("li",{parentName:"ol"},"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c ",(0,o.kt)("strong",{parentName:"li"},"\u043b\u0435\u0433\u043a\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u044b"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f")," - \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043b\u043e\u043c\u0430\u044e\u0449\u0438\u0435 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043c\u043e\u0434\u0443\u043b\u044f.")))),(0,o.kt)("p",null,'\u0414\u043e\u0441\u0442\u0438\u0447\u044c \u044d\u0442\u0438\u0445 \u0446\u0435\u043b\u0435\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 (Public API), \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u0441\u043e\u0431\u043e\u0439 \u0435\u0434\u0438\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c \u043c\u043e\u0434\u0443\u043b\u044f \u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0433\u043e "\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442" \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c \u043c\u0438\u0440\u043e\u043c.'),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u0412\u0430\u0436\u043d\u043e")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c \u0435\u0434\u0438\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443 \u0432\u0445\u043e\u0434\u0430, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0443\u044e \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 features/\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0   #\xa0\n   \u2514\u2500\u2500 auth-form/\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0     # \u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u0438\u0447\u0438\n            \u251c\u2500\u2500 ui/\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 #\n            \u251c\u2500\u2500 model/\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0#\n            \u251c\u2500\u2500 {...}/\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0#\n            \u2514\u2500\u2500 index.ts\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0# \u042d\u043d\u0442\u0440\u0438\u043f\u043e\u0438\u043d\u0442 \u0444\u0438\u0447\u0438 \u0441 \u0435\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u043c API\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=**/**/index.ts",title:"**/**/index.ts"},'export { Form as AuthForm } from "./ui"\nexport * as authFormModel from "./model"\n')),(0,o.kt)("h2",{id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f-\u043a-\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u043c\u0443-api"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u043c\u0443 API"),(0,o.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u0442\u0438\u0445 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0432\u0435\u0441\u0442\u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043c\u043e\u0434\u0443\u043b\u0435\u043c \u043a ",(0,o.kt)("strong",{parentName:"p"},"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430")," \u0438, \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c, \u0434\u043e\u0441\u0442\u0438\u0447\u044c \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043c\u043e\u0434\u0443\u043b\u044f."),(0,o.kt)("h3",{id:"1-\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c-\u0434\u043e\u0441\u0442\u0443\u043f\u0430"},"1. \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0430"),(0,o.kt)("p",null,"Public API \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c ",(0,o.kt)("strong",{parentName:"p"},"\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0430")," \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u044f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0414\u0440\u0443\u0433\u0438\u0435 \u0447\u0430\u0441\u0442\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,o.kt)("strong",{parentName:"li"},"\u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u043c\u043e\u0434\u0443\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435")),(0,o.kt)("li",{parentName:"ul"},"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u0447\u0430\u0441\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044f \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u043c\u0438 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 ",(0,o.kt)("strong",{parentName:"li"},"\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0430\u043c\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u044e"),".")),(0,o.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,o.kt)("h5",{id:"\u043e\u0442\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435-\u043e\u0442-\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0445-\u0438\u043c\u043f\u043e\u0440\u0442\u043e\u0432"},"\u041e\u0442\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043e\u0442 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0445 \u0438\u043c\u043f\u043e\u0440\u0442\u043e\u0432"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u041f\u043b\u043e\u0445\u043e"),": \u0418\u0434\u0435\u0442 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043a \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u043c \u0447\u0430\u0441\u0442\u044f\u043c \u043c\u043e\u0434\u0443\u043b\u044f, \u043c\u0438\u043d\u0443\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 - \u043e\u043f\u0430\u0441\u043d\u043e, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u043f\u0440\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0435 \u043c\u043e\u0434\u0443\u043b\u044f"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import { Form } from "features/auth-form/components/view/form"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u0425\u043e\u0440\u043e\u0448\u043e:")," API \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e\u0435 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u043e\u0435, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443 \u043c\u043e\u0434\u0443\u043b\u044f \u0442\u0435\u043f\u0435\u0440\u044c \u043d\u0443\u0436\u043d\u043e \u0434\u0443\u043c\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u043b\u043e\u043c\u0430\u0442\u044c Public API \u043f\u0440\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0435"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { AuthForm } from "features/auth-form"\n')))),(0,o.kt)("h3",{id:"2-\u0430\u043d\u0442\u0438-\u0445\u0440\u0443\u043f\u043a\u043e\u0441\u0442\u044c"},"2. \u0410\u043d\u0442\u0438-\u0445\u0440\u0443\u043f\u043a\u043e\u0441\u0442\u044c"),(0,o.kt)("p",null,"Public API \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c ",(0,o.kt)("strong",{parentName:"p"},"\u0430\u043d\u0442\u0438-\u0445\u0440\u0443\u043f\u043a\u0438\u043c")," - \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u043c \u043a \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u043e\u0434\u0443\u043b\u044f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041b\u043e\u043c\u0430\u044e\u0449\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u043e\u0442\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 Public API")),(0,o.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-1"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,o.kt)("h5",{id:"\u0430\u0431\u0441\u0442\u0440\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043e\u0442-\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"},"\u0410\u0431\u0441\u0442\u0440\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,o.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044e Public API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u041f\u043b\u043e\u0445\u043e:")," \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u0438\u0447\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u0442\u044c \u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0432\u043e \u0432\u0441\u0435\u0445 \u043c\u0435\u0441\u0442\u0430\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import { Form } from "features/auth-form/ui/form"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u0425\u043e\u0440\u043e\u0448\u043e:"),' \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0444\u0438\u0447\u0438 \u043d\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0435\u0451 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0443\u044e\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443, \u0432\u043d\u0435\u0448\u043d\u0438\u0435 "\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438" \u0444\u0438\u0447\u0438 \u043d\u0435 \u043f\u043e\u0441\u0442\u0440\u0430\u0434\u0430\u044e\u0442 \u043e\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u0438\u0447\u0438'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { AuthForm } from "features/auth-form"\n')))),(0,o.kt)("h3",{id:"3-\u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c"},"3. \u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c"),(0,o.kt)("p",null,"Public API \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043f\u043e\u0441\u043e\u0431\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c ",(0,o.kt)("strong",{parentName:"p"},"\u043b\u0435\u0433\u043a\u043e\u0439 \u0438 \u0433\u0438\u0431\u043a\u043e\u0439 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0414\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u0434\u043e\u0431\u0435\u043d \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0447\u0430\u0441\u0442\u044f\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0432 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, \u0440\u0435\u0448\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0438 \u0438\u043c\u0435\u043d")),(0,o.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-2"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,o.kt)("h5",{id:"\u043a\u043e\u043b\u043b\u0438\u0437\u0438\u044f-\u0438\u043c\u0435\u043d"},"\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0438\u043c\u0435\u043d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u041f\u043b\u043e\u0445\u043e:")," \u0431\u0443\u0434\u0435\u0442 \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0438\u043c\u0435\u043d"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/auth-form/index.ts",title:"features/auth-form/index.ts"},'export { Form } from "./ui"\nexport * as store from "./model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/post-form/index.ts",title:"features/post-form/index.ts"},'export { Form } from "./ui"\nexport * as store from "./model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import { Form, store } from "features/auth-form"\n- import { Form, store } from "features/post-form"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u0425\u043e\u0440\u043e\u0448\u043e:")," \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0440\u0435\u0448\u0435\u043d\u0430 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/auth-form/index.ts",title:"features/auth-form/index.ts"},'export { Form as AuthForm } from "./ui"\nexport * as authFormStore from "./model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/post-form/index.ts",title:"features/post-form/index.ts"},'export { Form as PostForm } from "./ui"\nexport * as postFormStore from "./model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { AuthForm, authFormStore } from "features/auth-form"\n+ import { PostForm, postFormStore } from "features/post-form"\n')))),(0,o.kt)("h5",{id:"\u0433\u0438\u0431\u043a\u043e\u0435-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0413\u0438\u0431\u043a\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u041f\u043b\u043e\u0445\u043e:"),' \u043d\u0435\u0443\u0434\u043e\u0431\u043d\u043e \u043f\u0438\u0441\u0430\u0442\u044c, \u043d\u0435\u0443\u0434\u043e\u0431\u043d\u043e \u0447\u0438\u0442\u0430\u0442\u044c, "\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c" \u0444\u0438\u0447\u0438 \u0441\u0442\u0440\u0430\u0434\u0430\u0435\u0442'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import { storeActionUpdateUserDetails } from "features/auth-form"\n- dispatch(storeActionUpdateUserDetails(...))\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u0425\u043e\u0440\u043e\u0448\u043e:"),' "\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c" \u0444\u0438\u0447\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043d\u0443\u0436\u043d\u044b\u043c \u0432\u0435\u0449\u0430\u043c \u0438\u0442\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e \u0438 \u0433\u0438\u0431\u043a\u043e'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { authFormStore } from "features/auth-form"\n+ dispatch(authFormStore.actions.updateUserDetails(...))\n')))),(0,o.kt)("h5",{id:"\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0439"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0439"),(0,o.kt)("p",null,"\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0438\u043c\u0435\u043d \u0434\u043e\u043b\u0436\u043d\u0430 \u0440\u0435\u0448\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0430 \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u041f\u043b\u043e\u0445\u043e:")," \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0438\u043c\u0435\u043d \u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/auth-form/index.ts",title:"features/auth-form/index.ts"},'export { AuthForm } from "./ui"\nexport { authFormActions, authFormReducer } from "model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/post-form/index.ts",title:"features/post-form/index.ts"},'export { PostForm } from "./ui"\nexport { postFormActions, postFormReducer } from "model"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u0425\u043e\u0440\u043e\u0448\u043e:")," \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0438\u043c\u0435\u043d \u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/auth-form/model.ts",title:"features/auth-form/model.ts"},"export { actions, reducer }\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/auth-form/index.ts",title:"features/auth-form/index.ts"},'export { Form as AuthForm } from "./ui"\nexport * as authFormStore from "./model"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/post-form/model.ts",title:"features/post-form/model.ts"},"export { actions, reducer }\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=features/post-form/index.ts",title:"features/post-form/index.ts"},'export { Form as PostForm } from "./ui"\nexport * as postFormStore from "./model"\n')))),(0,o.kt)("h2",{id:"\u043e-\u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430\u0445"},"\u041e \u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430\u0445"),(0,o.kt)("p",null,"\u0412 JavaScript \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043c\u043e\u0434\u0443\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0438\u0437\u043d\u0443\u0442\u0440\u0438 \u043c\u043e\u0434\u0443\u043b\u044f \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," \u0444\u0430\u0439\u043b\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=**/**/index.ts",title:"**/**/index.ts"},'export { Form as AuthForm } from "./ui"\nexport * as authModel from "./model"\n')),(0,o.kt)("h3",{id:"\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438"},"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u0412 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0431\u0430\u043d\u0434\u043b\u0435\u0440\u043e\u0432 \u0438\u0437-\u0437\u0430 \u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u043e\u0432 ",(0,o.kt)("strong",{parentName:"p"},"\u0445\u0443\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u043e\u0434-\u0441\u043f\u043b\u0438\u0442\u0442\u0438\u043d\u0433"),", \u0442.\u043a. ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/tree-shaking/"},"tree-shaking")," \u043f\u0440\u0438 \u0442\u0430\u043a\u043e\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043e\u0442\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0434\u0443\u043b\u044c \u0446\u0435\u043b\u0438\u043a\u043e\u043c, \u043d\u043e \u043d\u0435 \u0435\u0433\u043e \u0447\u0430\u0441\u0442\u044c."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043c\u043f\u043e\u0440\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"authModel")," \u0432 \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u044e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthForm")," \u0432 \u0447\u0430\u043d\u043a \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u044d\u0442\u043e\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0442\u0430\u043c \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'\u041a\u0430\u043a \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435, \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0430\u043d\u043a\u0430 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0434\u043e\u0440\u043e\u0436\u0435, \u0442.\u043a. \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432\u0441\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0432 \u043d\u0435\u043c, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0438 \u0442\u0435, \u0447\u0442\u043e \u043f\u043e\u043f\u0430\u043b\u0438 \u0432 \u0431\u0430\u043d\u0434\u043b "\u0437\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e"'))),(0,o.kt)("h3",{id:"\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435-\u043f\u0443\u0442\u0438-\u0440\u0435\u0448\u0435\u043d\u0438\u044f"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u0443\u0442\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"webpack")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b-\u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u044b \u043a\u0430\u043a ",(0,o.kt)("a",{parentName:"li",href:"https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free"},(0,o.kt)("strong",{parentName:"a"},"side effects free"))," - \u044d\u0442\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043d\u044b\u0435 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u0442\u0430\u043a\u0438\u043c \u0444\u0430\u0439\u043b\u043e\u043c")),(0,o.kt)("h2",{id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/41"},"(\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435) Public API \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/SOLID"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b ",(0,o.kt)("strong",{parentName:"a"},"SOLID"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/GRASP"},"\u041f\u0430\u0442\u0442\u0435\u0440\u043d\u044b ",(0,o.kt)("strong",{parentName:"a"},"GRASP")))))}s.isMDXComponent=!0}}]);