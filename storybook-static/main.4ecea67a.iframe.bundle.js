(self.webpackChunkstorybook_project=self.webpackChunkstorybook_project||[]).push([[179],{"./node_modules/@storybook/addon-docs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-docs/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/react/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/react/dist sync recursive",module.exports=webpackEmptyContext},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Inaccessible:()=>Inaccessible,InputWithoutAutofill:()=>InputWithoutAutofill,default:()=>_storybook_preview});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),GlobalStyle=(0,styled_components_browser_esm.vJ)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  * {\n    padding:0;\n    margin:0;\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif;\n    text-decoration: none;\n  }\n\n  img {\n    image-rendering: auto;\n  }\n\n  body {\n    background-color: var(--blue-background);\n    width:100%;\n    height:100%;\n    scrollbar-width: thin;\n  }\n\n  html {\n    @media (min-width: 1600px){\n      font-size: 18px;\n    }\n    @media (min-width:600px){\n      font-size:16px;\n    }\n    @media (max-height:720px){\n      font-size:14px;\n    }\n    @media (max-width:480px){\n      font-size:14px;\n    }\n  }\n\n  li, ul {\n    list-style: none;\n  }\n\n  button {\n    cursor:pointer;\n  }\n\n  p, span, label {\n    font-weight: var(--medium);\n  }\n\n  h1, h2 {\n    font-weight: var(--bold);\n    font-family: var(--titillium);\n  }\n\n  h3, h4, h5 {\n    font-weight: var(--semibold);\n    font-family: var(--titillium);\n    color: var(--grey-700)\n  }\n\n  /* h1{\n    color: var(--blue-dark-title)\n  } */\n\n  /* h2{\n    color: var(--blue-dark)\n  } */\n\n  scroll-behavior: smooth;\n  overflow-x: hidden;\n\n  :root {\n\n    // White Colors\n\n    --black: #000;\n    --white: #fff;\n    --white-100: #f8f8f8;\n    --whitesmoke: #FCFCFC;\n\n    // Grey Colors \n    --grey-090: #F3F3F3;\n    --grey-090: #d8d8d8;\n    --grey-100: #dddddd;\n    --grey-200: #e2e2e2;\n    --grey-300: #c6c6c6;\n    --grey-400: #8a8a8a;\n    --grey-500: #797979;\n    --grey-800: #4b4b4b;\n    --grey-boxShadow: #c2c2c2;\n    --grey-p: #6e6d6d;\n    --grey-700: #6d6d6d;\n\n    --grey-opacity: rgba(0, 0, 0, 0.2);\n\n    // Yellow Colors\n\n    --yellow-500: #ffd706;\n    --yellow-600: #fdd100;\n    --yellow-dark: #E5B800;\n\n    // Green Colors\n\n    --green-light:#34C759;\n    --green-dark:#1AB570;\n    --green-600: #16BA32;\n\n    // Blue Colors\n\n    --blue-50: #c8e1ff;\n    --blue-300: #00a7ff;\n    --blue-opaco: #65a1d3;\n    --blue-light:#00A8FF; \n    --blue-dark: #2a4999;\n    --blue-dark-title: #1E439B;\n    --blue-dark2: #002B72;\n    --blue-dark3: #012563;\n    --essay-blue: #4693cf;\n    --blueTwo-light: #b3dcff;\n    --name-blue: #1f9aff;\n    --cyan-500: #1AC4CD;\n\n    --blue-background: #f6faff;\n    --blue-card: #f6faff;\n\n    // Pink Colors\n\n    --pink-300: #F9778D;\n\n    // Red Colors\n\n    --red-dark: #ff2d2d;\n    --red-600: #EF2929;\n    --red-100: #FA7171;\n\n    // Orange Colors\n\n    --orange-300: #FCA844;\n\n    // Purple Colors\n\n    --purple-400: #C549EC;\n\n    // FONTS\n    --montserrat: 'Montserrat', sans-serif;\n    --titillium: 'Titillium Web', sans-serif;\n\n    // FONTS WEIGHT \n    --light: 300;\n    --regular: 400;\n    --medium: 500;\n    --semibold: 600;\n    --bold: 700;\n\n    // FONTS\n    --montserrat: 'Montserrat', sans-serif;\n    --titillium: 'Titillium Web', sans-serif;\n\n    // FONTS WEIGHT \n    --light: 300;\n    --regular: 400;\n    --medium: 500;\n    --semibold: 600;\n    --bold: 700;\n\n    \n    --default-box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);\n    --radius: 5px;\n  }\n"]))),next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),lib=__webpack_require__("./node_modules/msw/lib/index.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-viewport/dist/index.mjs"),lightTheme={colors:{background:"#ffffff",text:"#333333",primary:"#6200ee",secondary:"#03dac6",error:"#b00020",surface:"#ffffff"}},darkTheme={colors:{background:"#121212",text:"#ffffff",primary:"#bb86fc",secondary:"#03dac6",error:"#cf6679",surface:"#121212"}},i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),esm=__webpack_require__("./node_modules/i18next-http-backend/esm/index.js"),i18nextBrowserLanguageDetector=__webpack_require__("./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");i18next.ZP.use(esm.Z).use(i18nextBrowserLanguageDetector.Z).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});const i18n=i18next.ZP;var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),msw_storybook_addon_dist=__webpack_require__("./node_modules/msw-storybook-addon/dist/index.js"),__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}((0,msw_storybook_addon_dist.initialize)({onUnhandledRequest:"bypass"}),void 0===__webpack_require__.g.process)&&(0,lib.setupWorker)(lib.rest.get("http://localhost:3000/api/hello",(function(req,res,ctx){return res(ctx.json({name:"John Doh"}))}))).start();var OriginalNextImage=image_default();function LocaleUpdater(_ref){var locale=_ref.locale;return(0,react.useEffect)((function(){i18n.changeLanguage(locale)}),[locale]),null}Object.defineProperty(next_image,"default",{configurable:!0,value:function value(props){return __jsx(OriginalNextImage,(0,esm_extends.Z)({},props,{unoptimized:!0}))}});const _storybook_preview={globalTypes:{theme:{name:"Theme",description:"Global theme for components",defaultValue:"light",toolbar:{icon:"circlehollow",items:["☀️ Light","🌙 Dark"],showName:!0,dynamicTitle:!0}},locale:{name:"Locale",description:"Internationalization locale",defaultValue:"en",toolbar:{icon:"globe",items:[{value:"en",right:"🇺🇸",title:"English"},{value:"fr",right:"🇫🇷",title:"Français"},{value:"es",right:"🇪🇸",title:"Español"},{value:"zh",right:"🇨🇳",title:"中文"},{value:"kr",right:"🇰🇷",title:"한국어"}],showName:!0}}},parameters:{docs:{page:function page(){return __jsx(react.Fragment,null,__jsx(blocks_dist.Dx,null),__jsx(blocks_dist.QE,null),__jsx(blocks_dist.dk,null),__jsx(blocks_dist.sq,null),__jsx(blocks_dist.ZX,null),__jsx(blocks_dist.fQ,null))}},msw:{handlers:{auth:[lib.rest.get("/essay",(function(req,res,ctx){return res(ctx.json({success:!0}))})),lib.rest.get("/logout",(function(req,res,ctx){return res(ctx.json({success:!0}))}))]}},storySort:{order:["Examples","Docs","Demo"]},viewport:{viewport:{viewports:_objectSpread(_objectSpread({},dist.p),{MOBILE:{name:"Cellphone Example",styles:{width:"415px",height:"915px"}},IPAD:{name:"iPad Example",styles:{width:"810px",height:"1080px"}},DESKTOP:{name:"Desktop Example",styles:{width:"1300px",height:"1080px"}}}),defaultViewport:"iPad"},defaultViewport:"someDefault"},actions:{argTypesRegex:"^on.*"},options:{storySort:{order:["Intro","Components"],method:"alphabetical",locales:"pt-BR"}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[function(Story,context){var theme=""===context.globals.theme?darkTheme:lightTheme,locale=context.globals.locale;return(0,react.useEffect)((function(){i18n.changeLanguage(locale)}),[locale]),i18n.on("languageChanged",(function(locale){var direction=i18n.dir(locale);document.dir=direction})),__jsx(react.Suspense,{fallback:__jsx("div",null,"loading translations...")},__jsx(styled_components_browser_esm.f6,{theme},__jsx(GlobalStyle,null),__jsx(es.a3,{i18n},__jsx(LocaleUpdater,{locale}),__jsx(Story,null))))}]};var InputWithoutAutofill=function InputWithoutAutofill(){return __jsx("input",{type:"text"})};InputWithoutAutofill.displayName="InputWithoutAutofill",InputWithoutAutofill.parameters={a11y:{disable:!0,config:{rules:[{id:"autocomplete-valid",selector:'*:not([autocomplete="nope"])'},{id:"landmark-complementary-is-top-level",reviewOnFail:!0}]}}};var Inaccessible=function Inaccessible(){return __jsx("button",{style:{backgroundColor:"red",color:"darkRed"}},"Inaccessible button")};Inaccessible.displayName="Inaccessible",Inaccessible.parameters={a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}},InputWithoutAutofill.__docgenInfo={description:"",methods:[],displayName:"InputWithoutAutofill"},Inaccessible.__docgenInfo={description:"",methods:[],displayName:"Inaccessible"}},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api");const external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__;var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),pipeline=function pipeline(x){return x()},importers=[function(){var _ref=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(path){var pathRemainder;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.mdx)$/.exec(path)){_context.next=2;break}return _context.abrupt("return");case 2:return pathRemainder=path.substring(6),_context.abrupt("return",__webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$")("./"+pathRemainder));case 4:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref.apply(this,arguments)}}(),function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(path){var pathRemainder;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path)){_context2.next=2;break}return _context2.abrupt("return");case 2:return pathRemainder=path.substring(6),_context2.abrupt("return",__webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder));case 4:case"end":return _context2.stop()}}),_callee2)})));return function(_x2){return _ref2.apply(this,arguments)}}()];function _importFn(){return(_importFn=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee3(path){var _loop,i,_ret;return regenerator_default().wrap((function _callee3$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:_loop=regenerator_default().mark((function _loop(i){var moduleExports;return regenerator_default().wrap((function _loop$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,pipeline((function(){return importers[i](path)}));case 2:if(!(moduleExports=_context3.sent)){_context3.next=5;break}return _context3.abrupt("return",{v:moduleExports});case 5:case"end":return _context3.stop()}}),_loop)})),i=0;case 2:if(!(i<importers.length)){_context4.next=10;break}return _context4.delegateYield(_loop(i),"t0",4);case 4:if("object"!=typeof(_ret=_context4.t0)){_context4.next=7;break}return _context4.abrupt("return",_ret.v);case 7:i++,_context4.next=2;break;case 10:case"end":return _context4.stop()}}),_callee3)})))).apply(this,arguments)}var SERVER_CHANNEL_URL=dist.global.SERVER_CHANNEL_URL,channel=(0,external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject.createChannel)({page:"preview"});if(external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),SERVER_CHANNEL_URL){var serverChannel=(0,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject.createChannel)({url:SERVER_CHANNEL_URL});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setServerChannel(serverChannel),window.__STORYBOOK_SERVER_CHANNEL__=serverChannel}var preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:function importFn(_x3){return _importFn.apply(this,arguments)},getProjectAnnotations:function getProjectAnnotations(){return(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/nextjs/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-knobs/dist/preset/addDecorator.js"),__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-styling/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-highlight/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/preview.mjs"),__webpack_require__("./.storybook/preview.tsx")])}})},"./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/components/Loading/Loading.mdx":["./src/stories/components/Loading/Loading.mdx",719,227],"./stories/components/global/UI/buttons/Button/Button.mdx":["./src/stories/components/global/UI/buttons/Button/Button.mdx",851],"./stories/examples/Introduction.mdx":["./src/stories/examples/Introduction.mdx",180]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/components/Loading/Loading.stories":["./src/stories/components/Loading/Loading.stories.tsx",719,349],"./stories/components/Loading/Loading.stories.tsx":["./src/stories/components/Loading/Loading.stories.tsx",719,349],"./stories/components/global/UI/buttons/Button/Button.stories":["./src/stories/components/global/UI/buttons/Button/Button.stories.tsx",571],"./stories/components/global/UI/buttons/Button/Button.stories.tsx":["./src/stories/components/global/UI/buttons/Button/Button.stories.tsx",571],"./stories/examples/Button.stories":["./src/stories/examples/Button.stories.ts",772],"./stories/examples/Button.stories.ts":["./src/stories/examples/Button.stories.ts",772],"./stories/examples/Header.stories":["./src/stories/examples/Header.stories.ts",661],"./stories/examples/Header.stories.ts":["./src/stories/examples/Header.stories.ts",661],"./stories/examples/Page.stories":["./src/stories/examples/Page.stories.ts",949,387],"./stories/examples/Page.stories.ts":["./src/stories/examples/Page.stories.ts",949,387]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/addons":module=>{"use strict";module.exports=__STORYBOOK_MODULE_ADDONS__},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[477],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);